/**
 * CropAlert - AI Crop Disease & Pest Infestation Management
 * Frontend Controller & Vision Analytics with Explainable AI (XAI)
 * Fully Multilingual (6 Languages) & User-Friendly Crop Diagnostics
 */

import { CROP_DATABASE, TRANSLATIONS } from './crop-database.js';

export class CropAlertApp {
  constructor() {
    this.currentLang = 'en';
    this.isOffline = false;
    this.currentCase = null;
    this.showHeatmap = true;
    this.isXaiOpen = false;
    this.speechSynth = window.speechSynthesis || null;
    this.currentUtterance = null;

    // Field & Microclimate Conditions
    this.weather = {
      temperature: 28, // °C
      humidity: 82,    // %
      rainForecast: true
    };
    this.fieldMoisture = 'Moist';

    // Scan history stored in localStorage
    this.scanHistory = this.loadScanHistory();

    // Check URL parameters and localStorage for 2-page state transfer
    const urlParams = (typeof window !== 'undefined' && window.location && window.location.search) ? new URLSearchParams(window.location.search) : null;
    const queryLang = urlParams ? urlParams.get('lang') : null;
    const savedLang = (typeof localStorage !== 'undefined') ? localStorage.getItem('cropalert_lang') : null;
    if (queryLang && TRANSLATIONS[queryLang]) {
      this.currentLang = queryLang;
    } else if (savedLang && TRANSLATIONS[savedLang]) {
      this.currentLang = savedLang;
    }

    if (typeof localStorage !== 'undefined') {
      try {
        const savedWeather = localStorage.getItem('cropalert_weather');
        if (savedWeather) this.weather = JSON.parse(savedWeather);
      } catch (e) {}
    }

    // Initialize DOM
    this.initDOMElements();
    this.setupEventListeners();
    this.renderSampleThumbnails();
    this.updateLanguageUI();
    this.renderHistoryList();

    // Load initial case: query parameter -> localStorage -> default
    const queryCase = urlParams ? urlParams.get('case') : null;
    const savedCase = (typeof localStorage !== 'undefined') ? localStorage.getItem('cropalert_selected_case') : null;
    const initialCase = queryCase || savedCase || 'cotton_bollworm';

    this.selectSample(initialCase);
  }

  initDOMElements() {
    this.btnViewResults = document.getElementById('btn-view-results');
    this.dropZone = document.getElementById('drop-zone');
    this.fileInput = document.getElementById('file-input');
    this.canvas = document.getElementById('leaf-canvas');
    this.ctx = this.canvas.getContext('2d');
    this.qualityGateBanner = document.getElementById('quality-gate-banner');
    this.diagnosisCard = document.getElementById('diagnosis-card');
    this.riskGaugeCard = document.getElementById('risk-gauge-card');
    this.immediateActionCard = document.getElementById('immediate-action-card');
    this.xaiContainer = document.getElementById('xai-container');
    this.btnExplainAi = document.getElementById('btn-explain-ai');
    this.xaiContentPanel = document.getElementById('xai-content-panel');
    this.advisoryCard = document.getElementById('advisory-card');
    this.toastContainer = document.getElementById('toast-container');
    this.offlineBanner = document.getElementById('offline-indicator');
    this.offlineToggleBtn = document.getElementById('btn-toggle-offline');
  }

  loadScanHistory() {
    try {
      const saved = localStorage.getItem('cropalert_history');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Storage unavailable', e);
    }
    return [
      {
        id: 'CA-9021',
        crop: 'Cotton',
        cropKey: 'cotton',
        issue: 'Pink Bollworm Infestation',
        category: 'Pest Infestation',
        severity: 'Severe',
        confidence: 96,
        risk: 88,
        date: '2026-09-09 14:30',
        synced: true
      },
      {
        id: 'CA-9014',
        crop: 'Tomato',
        cropKey: 'tomato',
        issue: 'Tomato Late Blight Disease',
        category: 'Crop Disease',
        severity: 'Severe',
        confidence: 94,
        risk: 92,
        date: '2026-09-08 10:15',
        synced: true
      }
    ];
  }

  saveScanHistory() {
    try {
      localStorage.setItem('cropalert_history', JSON.stringify(this.scanHistory));
    } catch (e) {
      console.warn('Failed to save to storage', e);
    }
  }

  setupEventListeners() {
    // Language Selector
    const langSelect = document.getElementById('lang-select');
    if (langSelect) {
      langSelect.value = this.currentLang;
      langSelect.addEventListener('change', (e) => {
        this.currentLang = e.target.value;
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem('cropalert_lang', this.currentLang);
        }
        this.updateLanguageUI();
        if (this.currentCase) {
          this.renderAdvisory(this.currentCase);
          this.renderDiagnosisCard();
          this.renderImmediateAction();
          this.recalculateRisk();
          if (this.isXaiOpen) this.renderXAIExplanation();
        }
      });
    }

    // Offline Mode Simulator Toggle
    if (this.offlineToggleBtn) {
      this.offlineToggleBtn.addEventListener('click', () => {
        this.toggleOfflineMode();
      });
    }

    // Drag & Drop Image Handling
    if (this.dropZone) {
      this.dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        this.dropZone.classList.add('dragover');
      });
      this.dropZone.addEventListener('dragleave', () => {
        this.dropZone.classList.remove('dragover');
      });
      this.dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        this.dropZone.classList.remove('dragover');
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
          this.handleImageFile(e.dataTransfer.files[0]);
        }
      });
      this.dropZone.addEventListener('click', (e) => {
        if (e.target.tagName !== 'BUTTON' && !e.target.closest('button')) {
          this.fileInput.click();
        }
      });
    }

    const btnBrowse = document.getElementById('btn-browse-file');
    if (btnBrowse) {
      btnBrowse.addEventListener('click', (e) => {
        e.stopPropagation();
        this.fileInput.click();
      });
    }

    if (this.fileInput) {
      this.fileInput.addEventListener('change', (e) => {
        if (e.target.files && e.target.files[0]) {
          this.handleImageFile(e.target.files[0]);
        }
      });
    }

    // Camera Simulation
    const btnCamera = document.getElementById('btn-camera');
    if (btnCamera) {
      btnCamera.addEventListener('click', (e) => {
        e.stopPropagation();
        this.simulateCameraCapture();
      });
    }

    // Run AI Diagnosis Trigger
    const btnRunDiagnose = document.getElementById('btn-run-diagnose');
    if (btnRunDiagnose) {
      btnRunDiagnose.addEventListener('click', () => {
        this.executeDiagnosis();
      });
    }

    // Toggle Heatmap Overlay
    const btnToggleHeatmap = document.getElementById('btn-toggle-heatmap');
    if (btnToggleHeatmap) {
      btnToggleHeatmap.addEventListener('click', () => {
        this.showHeatmap = !this.showHeatmap;
        btnToggleHeatmap.classList.toggle('active', this.showHeatmap);
        this.redrawCanvas();
      });
    }

    // Explainable AI (XAI) Toggle Button
    if (this.btnExplainAi) {
      this.btnExplainAi.addEventListener('click', () => {
        this.toggleXAIExplanation();
      });
    }

    // Crop Selector Change
    const selectCrop = document.getElementById('select-crop');
    if (selectCrop) {
      selectCrop.addEventListener('change', (e) => {
        const cropVal = e.target.value.toLowerCase();
        for (const [k, v] of Object.entries(CROP_DATABASE)) {
          if (v.crop.toLowerCase().includes(cropVal) || cropVal.includes(v.cropKey)) {
            this.selectSample(k);
            return;
          }
        }
      });
    }

    // Crop Growth Stage Change
    const selectStage = document.getElementById('select-stage');
    if (selectStage) {
      selectStage.addEventListener('change', () => {
        this.recalculateRisk();
      });
    }

    // Soil Moisture Change
    const selectMoisture = document.getElementById('select-moisture');
    if (selectMoisture) {
      selectMoisture.addEventListener('change', (e) => {
        this.fieldMoisture = e.target.value;
        this.recalculateRisk();
      });
    }

    // Weather Simulation Telemetry Sliders
    const sliderTemp = document.getElementById('slider-temp');
    const valTemp = document.getElementById('val-temp');
    if (sliderTemp) {
      sliderTemp.addEventListener('input', (e) => {
        this.weather.temperature = parseInt(e.target.value, 10);
        if (valTemp) valTemp.textContent = `${this.weather.temperature}°C`;
        this.recalculateRisk();
      });
    }

    const sliderHum = document.getElementById('slider-hum');
    const valHum = document.getElementById('val-hum');
    if (sliderHum) {
      sliderHum.addEventListener('input', (e) => {
        this.weather.humidity = parseInt(e.target.value, 10);
        if (valHum) valHum.textContent = `${this.weather.humidity}%`;
        this.recalculateRisk();
      });
    }

    const toggleRain = document.getElementById('toggle-rain');
    const valRain = document.getElementById('val-rain');
    if (toggleRain) {
      toggleRain.addEventListener('change', (e) => {
        this.weather.rainForecast = e.target.checked;
        const t = TRANSLATIONS[this.currentLang] || TRANSLATIONS.en;
        if (valRain) {
          valRain.textContent = this.weather.rainForecast ? (t.rainExpected || 'Rain Expected (Wet)') : (t.rainNone || 'No Rain (Dry)');
        }
        this.recalculateRisk();
      });
    }

    // Quick Weather Scenario Preset Buttons
    document.querySelectorAll('.weather-preset-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const preset = btn.dataset.preset;
        this.applyWeatherPreset(preset);
      });
    });

    // Advisory Tabs (Organic, Chemical, Cultural)
    document.querySelectorAll('.advisory-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.advisory-tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.advisory-content-pane').forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        const targetTab = btn.dataset.advisoryTab;
        const pane = document.getElementById(`advisory-pane-${targetTab}`);
        if (pane) pane.classList.add('active');
      });
    });

    // Audio Advisory Readout
    const btnAudio = document.getElementById('btn-voice-readout');
    if (btnAudio) {
      btnAudio.addEventListener('click', () => {
        this.toggleVoiceAudio();
      });
    }

    // Print Treatment Report
    const btnPrint = document.getElementById('btn-print-report');
    if (btnPrint) {
      btnPrint.addEventListener('click', () => {
        window.print();
      });
    }
    // Print Advisory Guide Card button
    const btnPrintCard = document.getElementById('btn-print-advisory-card');
    if (btnPrintCard) {
      btnPrintCard.addEventListener('click', () => {
        window.print();
      });
    }

    // Run Diagnosis & View Results Navigation
    if (this.btnViewResults) {
      this.btnViewResults.addEventListener('click', () => {
        const caseKey = this.currentCase ? (this.currentCase.isBlurry ? 'blurry_test' : this.currentCase.id) : 'cotton_bollworm';
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem('cropalert_selected_case', caseKey);
          localStorage.setItem('cropalert_lang', this.currentLang);
          localStorage.setItem('cropalert_crop', document.getElementById('select-crop')?.value || 'Cotton');
          localStorage.setItem('cropalert_stage', document.getElementById('select-stage')?.value || 'Flowering');
          localStorage.setItem('cropalert_moisture', document.getElementById('select-moisture')?.value || 'Moist');
          localStorage.setItem('cropalert_weather', JSON.stringify(this.weather));
        }
        window.location.href = 'results.html?case=' + encodeURIComponent(caseKey) + '&lang=' + encodeURIComponent(this.currentLang);
      });
    }

    // Toast event listener
    window.addEventListener('cropalert:toast', (e) => {
      this.showToast(e.detail.message, e.detail.type || 'info');
    });
  }

  renderXAIExplanation() {
    if (!this.xaiContentPanel || !this.currentCase) return;

    const c = this.currentCase;
    const t = TRANSLATIONS[this.currentLang] || TRANSLATIONS.en;
    const trans = c.translations ? (c.translations[this.currentLang] || c.translations.en) : c;
    const stage = document.getElementById('select-stage')?.value || 'Flowering';
    const xai = trans.xai || c.xai || {
      imageEvidence: ['Visual morphology features extracted from foliar sample.'],
      environmentalFactors: 'Microclimate factors aligned with pathogen incubation rules.',
      aiDecisionConfidence: 'Validated via convolutional feature embeddings.',
      treatmentRationale: 'Targeted formulation avoids ecological damage.'
    };

    // Calculate live risk score for XAI display
    let score = c.baseRisk || 50;
    const sens = c.weatherSensitivity;
    if (sens) {
      if (this.weather.temperature >= sens.optTempMin && this.weather.temperature <= sens.optTempMax) score += 16;
      else if (this.weather.temperature < sens.minTemp || this.weather.temperature > sens.maxTemp) score -= 20;
      if (this.weather.humidity >= sens.minHumidity) score += 16;
      else if (this.weather.humidity < 45) score -= 18;
      if (sens.rainTrigger && this.weather.rainForecast) score += 12;
    }
    if (this.fieldMoisture === 'Waterlogged') score += 12;
    else if (this.fieldMoisture === 'Moist') score += 4;
    else if (this.fieldMoisture === 'Dry') score -= 8;
    if (c.category === 'Healthy') score = 8;
    score = Math.min(99, Math.max(5, Math.round(score)));

    this.xaiContentPanel.innerHTML = `
      <div class="xai-header">
        <h4 style="font-size: 1rem; color: var(--primary-dark); font-weight: 700;">
          ${t.xaiTitle || 'Explainable AI (XAI) Decision Breakdown'}
        </h4>
        <span class="badge-tag" style="background: #e8f5e9; color: var(--primary-dark);">Mobile-Edge CNN v3.2</span>
      </div>

      <div class="xai-pipeline-steps mt-3">
        <div class="xai-step-card">
          <div class="xai-step-head">
            <span class="xai-badge">1</span>
            <strong>${t.xaiStep1 || '1. Visual Pathology Evidence'}</strong>
          </div>
          <ul class="xai-evidence-list mt-2">
            ${(xai.imageEvidence || []).map(item => `<li><span class="bullet">🔬</span> ${item}</li>`).join('')}
          </ul>
        </div>

        <div class="xai-step-card mt-2">
          <div class="xai-step-head">
            <span class="xai-badge">2</span>
            <strong>${t.xaiStep2 || '2. Microclimate Incubation Match'}</strong>
          </div>
          <p class="xai-text mt-1">${xai.environmentalFactors}</p>
          <div class="xai-factor-chips mt-1">
            <span class="chip-sm">${t.tempLabel || 'Temp'}: ${this.weather.temperature}°C</span>
            <span class="chip-sm">${t.humidityLabel || 'Humidity'}: ${this.weather.humidity}%</span>
            <span class="chip-sm">${t.stageLabel || 'Stage'}: ${stage}</span>
            <span class="chip-sm">${t.riskLabel || 'Risk'}: ${score}%</span>
          </div>
        </div>

        <div class="xai-step-card mt-2">
          <div class="xai-step-head">
            <span class="xai-badge">3</span>
            <strong>${t.xaiStep3 || '3. Vision CNN Layer Activation'}</strong>
          </div>
          <p class="xai-text mt-1">${xai.aiDecisionConfidence}</p>
        </div>

        <div class="xai-step-card mt-2">
          <div class="xai-step-head">
            <span class="xai-badge">4</span>
            <strong>${t.xaiStep4 || '4. Chemical Action Mechanism Rationale'}</strong>
          </div>
          <p class="xai-text mt-1">${xai.treatmentRationale}</p>
        </div>
      </div>
    `;
  }

  applyWeatherPreset(preset) {
    const sliderTemp = document.getElementById('slider-temp');
    const valTemp = document.getElementById('val-temp');
    const sliderHum = document.getElementById('slider-hum');
    const valHum = document.getElementById('val-hum');
    const toggleRain = document.getElementById('toggle-rain');
    const valRain = document.getElementById('val-rain');
    const t = TRANSLATIONS[this.currentLang] || TRANSLATIONS.en;

    if (preset === 'monsoon') {
      this.weather.temperature = 24;
      this.weather.humidity = 92;
      this.weather.rainForecast = true;
    } else if (preset === 'hot-dry') {
      this.weather.temperature = 36;
      this.weather.humidity = 38;
      this.weather.rainForecast = false;
    } else if (preset === 'cool-fog') {
      this.weather.temperature = 14;
      this.weather.humidity = 88;
      this.weather.rainForecast = false;
    } else if (preset === 'optimal') {
      this.weather.temperature = 27;
      this.weather.humidity = 55;
      this.weather.rainForecast = false;
    }

    if (sliderTemp) sliderTemp.value = this.weather.temperature;
    if (valTemp) valTemp.textContent = `${this.weather.temperature}°C`;
    if (sliderHum) sliderHum.value = this.weather.humidity;
    if (valHum) valHum.textContent = `${this.weather.humidity}%`;
    if (toggleRain) toggleRain.checked = this.weather.rainForecast;
    if (valRain) valRain.textContent = this.weather.rainForecast ? (t.rainExpected || 'Rain Expected (Wet Canopy)') : (t.rainNone || 'No Rain (Dry)');

    this.recalculateRisk();
    if (this.isXaiOpen) this.renderXAIExplanation();
    this.showToast(`Weather simulated: ${this.weather.temperature}°C, ${this.weather.humidity}% Hum`, 'info');
  }

  toggleOfflineMode() {
    this.isOffline = !this.isOffline;
    const t = TRANSLATIONS[this.currentLang] || TRANSLATIONS.en;

    if (this.offlineBanner) {
      this.offlineBanner.classList.toggle('active', this.isOffline);
    }

    if (this.offlineToggleBtn) {
      this.offlineToggleBtn.classList.toggle('btn-danger', this.isOffline);
      this.offlineToggleBtn.classList.toggle('btn-outline', !this.isOffline);
    }

    this.showToast(
      this.isOffline ? (t.offlineActiveToast || 'Offline Field Mode activated.') : (t.onlineActiveToast || 'Online Mode restored.'),
      this.isOffline ? 'warning' : 'success'
    );
  }

  handleImageFile(file) {
    if (!file.type.startsWith('image/')) {
      this.showToast('Please upload a valid image file (JPG, PNG).', 'danger');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        this.drawImageToCanvas(img);
        const isBlurry = this.detectBlurryImage();
        this.evaluateQualityGate(isBlurry);

        // Map uploaded image to appropriate crop diagnosis
        const currentCropSelect = document.getElementById('select-crop')?.value || 'Cotton';
        let matchKey = 'cotton_bollworm';
        for (const [k, v] of Object.entries(CROP_DATABASE)) {
          if (v.crop.toLowerCase().includes(currentCropSelect.toLowerCase())) {
            matchKey = k;
            break;
          }
        }

        this.currentCase = {
          ...CROP_DATABASE[matchKey],
          isBlurry
        };

        this.executeDiagnosis();
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  simulateCameraCapture() {
    this.showToast('Accessing field camera...', 'info');
    setTimeout(() => {
      this.renderSyntheticCanvas(this.currentCase?.id || 'cotton_bollworm', false);
      this.evaluateQualityGate(false);
      this.showToast('High-resolution photo captured from field camera.', 'success');
      this.executeDiagnosis();
    }, 450);
  }

  detectBlurryImage() {
    try {
      const imgData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
      const data = imgData.data;
      let diffSum = 0;

      for (let i = 0; i < data.length - 4; i += 4) {
        const lum = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
        const nextLum = 0.299 * data[i + 4] + 0.587 * data[i + 5] + 0.114 * data[i + 6];
        diffSum += Math.abs(lum - nextLum);
      }
      const avgEdge = diffSum / (data.length / 4);
      return avgEdge < 6.0;
    } catch (e) {
      return false;
    }
  }

  evaluateQualityGate(isBlurry) {
    const t = TRANSLATIONS[this.currentLang] || TRANSLATIONS.en;
    if (!this.qualityGateBanner) return;

    if (isBlurry) {
      this.qualityGateBanner.className = 'quality-gate-banner gate-warning';
      this.qualityGateBanner.innerHTML = `
        <div class="gate-icon">⚠️</div>
        <div class="gate-details">
          <div class="gate-title-row">
            <strong>${t.qualityGateWarning}</strong>
            <span class="gate-score-pill score-warning">${t.clarityScoreLow || 'Clarity Score: 48% (Low)'}</span>
          </div>
          <p class="gate-desc">${t.qualityGateWarningDesc}</p>
        </div>
      `;
    } else {
      this.qualityGateBanner.className = 'quality-gate-banner gate-passed';
      this.qualityGateBanner.innerHTML = `
        <div class="gate-icon">✓</div>
        <div class="gate-details">
          <div class="gate-title-row">
            <strong>${t.qualityGatePassed}</strong>
            <span class="gate-score-pill score-success">${t.clarityScoreHigh || 'Clarity Score: 96% (Optimal Focus)'}</span>
          </div>
          <p class="gate-desc">${t.qualityGatePassedDesc}</p>
        </div>
      `;
    }
  }

  renderSyntheticCanvas(key, isBlurry = false) {
    const w = (this.canvas.width = 460);
    const h = (this.canvas.height = 360);
    const ctx = this.ctx;

    ctx.clearRect(0, 0, w, h);

    if (isBlurry) {
      ctx.filter = 'blur(6px)';
    } else {
      ctx.filter = 'none';
    }

    const bgGrad = ctx.createLinearGradient(0, 0, w, h);
    bgGrad.addColorStop(0, '#f9fbe7');
    bgGrad.addColorStop(1, '#f1f8e9');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, w, h);

    ctx.save();
    ctx.translate(w / 2, h / 2);

    if (key === 'cotton_bollworm') {
      this.drawCottonBollAndPest(ctx);
    } else if (key === 'maize_fall_armyworm') {
      this.drawMaizeWhorlAndPest(ctx);
    } else if (key === 'chilli_thrips') {
      this.drawChilliLeafThrips(ctx);
    } else {
      this.drawGeneralLeafAndDisease(ctx, key);
    }

    ctx.restore();
    ctx.filter = 'none';

    this.cleanCanvasImage = ctx.getImageData(0, 0, w, h);

    if (this.showHeatmap) {
      this.drawHeatmapOverlay();
    }
  }

  drawImageToCanvas(img) {
    const w = (this.canvas.width = 460);
    const h = (this.canvas.height = 360);
    const ctx = this.ctx;
    ctx.clearRect(0, 0, w, h);
    ctx.drawImage(img, 0, 0, w, h);
    this.cleanCanvasImage = ctx.getImageData(0, 0, w, h);
  }

  drawCottonBollAndPest(ctx) {
    ctx.fillStyle = '#f5f5f5';
    for (let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.ellipse(Math.cos(i * 1.25) * 50, Math.sin(i * 1.25) * 50, 45, 28, i * 1.25, 0, Math.PI * 2);
      ctx.fillStyle = i % 2 === 0 ? '#fffde7' : '#fff9c4';
      ctx.fill();
      ctx.strokeStyle = '#c8b900';
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(-30, -20);
    ctx.lineTo(25, -25);
    ctx.lineTo(15, 30);
    ctx.stroke();

    const bollGrad = ctx.createRadialGradient(0, 0, 10, 0, 0, 50);
    bollGrad.addColorStop(0, '#7cb342');
    bollGrad.addColorStop(1, '#558b2f');
    ctx.fillStyle = bollGrad;
    ctx.beginPath();
    ctx.arc(0, 5, 42, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#212121';
    ctx.beginPath();
    ctx.arc(15, -8, 7, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#8d6e63';
    for (let f = 0; f < 12; f++) {
      ctx.beginPath();
      ctx.arc(15 + (Math.random() - 0.5) * 22, -8 + (Math.random() - 0.5) * 20, 2, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.strokeStyle = '#f48fb1';
    ctx.lineWidth = 9;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(2, 8);
    ctx.bezierCurveTo(12, 18, 22, 14, 30, 24);
    ctx.stroke();

    ctx.fillStyle = '#b71c1c';
    ctx.beginPath();
    ctx.arc(32, 26, 4, 0, Math.PI * 2);
    ctx.fill();
  }

  drawMaizeWhorlAndPest(ctx) {
    ctx.fillStyle = '#558b2f';
    ctx.beginPath();
    ctx.ellipse(-40, 20, 120, 38, -0.4, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.ellipse(40, -10, 110, 34, 0.4, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#f1f8e9';
    for (let h = 0; h < 6; h++) {
      ctx.fillRect(-60 + h * 22, -15 + (h % 2) * 18, 16, 10);
    }

    ctx.fillStyle = '#795548';
    for (let p = 0; p < 25; p++) {
      ctx.beginPath();
      ctx.arc((Math.random() - 0.5) * 45, (Math.random() - 0.5) * 35, 2.5, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.strokeStyle = '#8d6e63';
    ctx.lineWidth = 10;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(-20, -5);
    ctx.quadraticCurveTo(5, 10, 25, 0);
    ctx.stroke();
  }

  drawChilliLeafThrips(ctx) {
    ctx.fillStyle = '#43a047';
    ctx.beginPath();
    ctx.moveTo(0, -90);
    ctx.bezierCurveTo(70, -40, 70, 40, 0, 90);
    ctx.bezierCurveTo(-70, 40, -70, -40, 0, -90);
    ctx.fill();

    ctx.strokeStyle = '#ffd54f';
    ctx.lineWidth = 4;
    ctx.stroke();

    ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
    for (let s = 0; s < 18; s++) {
      ctx.fillRect(-35 + Math.random() * 70, -60 + Math.random() * 110, 6, 3);
    }
  }

  drawGeneralLeafAndDisease(ctx, key) {
    ctx.fillStyle = key === 'healthy_crop' ? '#2e7d32' : '#66bb6a';
    ctx.beginPath();
    ctx.ellipse(0, 0, 95, 140, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = '#1b5e20';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(0, -140);
    ctx.lineTo(0, 140);
    ctx.stroke();

    if (key === 'tomato_late_blight') {
      ctx.fillStyle = 'rgba(62, 39, 35, 0.85)';
      ctx.beginPath();
      ctx.arc(-20, -25, 34, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.beginPath();
      ctx.arc(-20, -25, 18, 0, Math.PI * 2);
      ctx.fill();
    } else if (key === 'rice_blast') {
      ctx.fillStyle = '#4e342e';
      ctx.beginPath();
      ctx.ellipse(-15, 10, 45, 14, 0.3, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#e0e0e0';
      ctx.beginPath();
      ctx.ellipse(-15, 10, 26, 8, 0.3, 0, Math.PI * 2);
      ctx.fill();
    } else if (key === 'wheat_yellow_rust') {
      ctx.fillStyle = '#fbc02d';
      for (let r = 0; r < 5; r++) {
        ctx.fillRect(-30 + r * 14, -80, 5, 150);
      }
    } else if (key === 'potato_early_blight') {
      ctx.strokeStyle = '#3e2723';
      ctx.lineWidth = 3;
      for (let ring = 1; ring <= 4; ring++) {
        ctx.beginPath();
        ctx.arc(-10, -10, ring * 9, 0, Math.PI * 2);
        ctx.stroke();
      }
    } else if (key === 'apple_scab') {
      ctx.fillStyle = '#33691e';
      ctx.beginPath();
      ctx.arc(15, 20, 28, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  drawHeatmapOverlay() {
    if (!this.currentCase || !this.currentCase.heatmaps) return;

    const ctx = this.ctx;
    const w = this.canvas.width;
    const h = this.canvas.height;

    this.currentCase.heatmaps.forEach(spot => {
      const cx = (spot.x / 100) * w;
      const cy = (spot.y / 100) * h;
      const r = spot.radius * 1.5;

      const grad = ctx.createRadialGradient(cx, cy, 2, cx, cy, r);
      grad.addColorStop(0, 'rgba(255, 0, 0, 0.7)');
      grad.addColorStop(0.5, 'rgba(255, 165, 0, 0.45)');
      grad.addColorStop(1, 'rgba(255, 255, 0, 0)');

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = 'rgba(255, 0, 0, 0.85)';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([4, 3]);
      ctx.beginPath();
      ctx.arc(cx, cy, r * 0.7, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);
    });
  }

  redrawCanvas() {
    if (this.cleanCanvasImage) {
      this.ctx.putImageData(this.cleanCanvasImage, 0, 0);
    }
    if (this.showHeatmap) {
      this.drawHeatmapOverlay();
    }
  }

  renderSampleThumbnails() {
    const container = document.getElementById('sample-cards-list');
    if (!container) return;

    const t = TRANSLATIONS[this.currentLang] || TRANSLATIONS.en;
    const tags = t.sampleTags || {};
    const labels = t.sampleLabels || {};

    const samples = [
      { key: 'cotton_bollworm', label: labels.cotton_bollworm || 'Cotton: Pink Bollworm', icon: '🐛', tag: tags.pest || 'Pest' },
      { key: 'maize_fall_armyworm', label: labels.maize_fall_armyworm || 'Maize: Fall Armyworm', icon: '🌽', tag: tags.pest || 'Pest' },
      { key: 'chilli_thrips', label: labels.chilli_thrips || 'Chilli: Thrips & Mites', icon: '🌶️', tag: tags.pest || 'Pest' },
      { key: 'tomato_late_blight', label: labels.tomato_late_blight || 'Tomato: Late Blight', icon: '🍅', tag: tags.disease || 'Disease' },
      { key: 'rice_blast', label: labels.rice_blast || 'Rice: Blast Lesion', icon: '🌾', tag: tags.disease || 'Disease' },
      { key: 'wheat_yellow_rust', label: labels.wheat_yellow_rust || 'Wheat: Yellow Rust', icon: '🌾', tag: tags.disease || 'Disease' },
      { key: 'potato_early_blight', label: labels.potato_early_blight || 'Potato: Early Blight', icon: '🥔', tag: tags.disease || 'Disease' },
      { key: 'apple_scab', label: labels.apple_scab || 'Apple: Olive Scab', icon: '🍏', tag: tags.disease || 'Disease' },
      { key: 'healthy_crop', label: labels.healthy_crop || 'Healthy Crop Foliage', icon: '✨', tag: tags.healthy || 'Healthy' },
      { key: 'blurry_test', label: labels.blurry_test || 'Blurry Photo (Quality Gate)', icon: '⚠️', tag: tags.gateTest || 'Gate Test' }
    ];

    container.innerHTML = samples.map(s => {
      const isCurrent = this.currentCase && ((s.key === 'blurry_test' && this.currentCase.isBlurry) || (!this.currentCase.isBlurry && this.currentCase.id === s.key));
      const tagClass = (s.key === 'cotton_bollworm' || s.key === 'maize_fall_armyworm' || s.key === 'chilli_thrips') ? 'tag-pest'
        : (s.key === 'healthy_crop') ? 'tag-healthy'
        : (s.key === 'blurry_test') ? 'tag-gate'
        : 'tag-disease';

      return `
        <button class="sample-chip ${isCurrent ? 'active' : ''}" data-sample-key="${s.key}" type="button">
          <span class="sample-icon">${s.icon}</span>
          <span class="sample-label">${s.label}</span>
          <span class="sample-tag-pill ${tagClass}">${s.tag}</span>
        </button>
      `;
    }).join('');

    container.querySelectorAll('.sample-chip').forEach(btn => {
      btn.addEventListener('click', () => {
        container.querySelectorAll('.sample-chip').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const key = btn.dataset.sampleKey;
        this.selectSample(key);
      });
    });
  }

  selectSample(key) {
    if (key === 'blurry_test') {
      this.renderSyntheticCanvas('cotton_bollworm', true);
      this.currentCase = { ...CROP_DATABASE.cotton_bollworm, isBlurry: true };
      this.evaluateQualityGate(true);
    } else {
      const data = CROP_DATABASE[key];
      if (!data) return;
      this.currentCase = { ...data, isBlurry: false };
      this.renderSyntheticCanvas(key, false);
      this.evaluateQualityGate(false);
    }

    const selectCrop = document.getElementById('select-crop');
    if (selectCrop && this.currentCase) {
      for (const opt of selectCrop.options) {
        if (opt.value.toLowerCase().includes(this.currentCase.cropKey) || this.currentCase.cropKey.includes(opt.value.toLowerCase())) {
          selectCrop.value = opt.value;
          break;
        }
      }
    }

    this.renderDiagnosisCard();
    this.recalculateRisk();
    this.renderImmediateAction();
    this.renderAdvisory(this.currentCase);
    if (this.isXaiOpen) this.renderXAIExplanation();
  }

  executeDiagnosis() {
    if (!this.currentCase) return;

    const t = TRANSLATIONS[this.currentLang] || TRANSLATIONS.en;
    const btnDiagnose = document.getElementById('btn-run-diagnose');
    if (btnDiagnose) {
      btnDiagnose.disabled = true;
      btnDiagnose.innerHTML = `<span class="spinner"></span> ${t.analyzingText}`;
    }

    setTimeout(() => {
      if (btnDiagnose) {
        btnDiagnose.disabled = false;
        btnDiagnose.innerHTML = `⚡ ${t.btnDiagnose}`;
      }

      this.renderDiagnosisCard();
      this.recalculateRisk();
      this.renderImmediateAction();
      this.renderAdvisory(this.currentCase);
      if (this.isXaiOpen) this.renderXAIExplanation();

      this.logScanToHistory();

      const trans = this.currentCase.translations ? (this.currentCase.translations[this.currentLang] || this.currentCase.translations.en) : this.currentCase;
      if (this.currentCase.isBlurry || this.currentCase.confidence < 75) {
        this.showToast('⚠️ Image quality reduced confidence. Re-shoot recommended.', 'warning');
      } else {
        this.showToast(`✅ Diagnosis complete: ${trans.name} detected (${this.currentCase.confidence}% match).`, 'success');
      }
    }, 400);
  }

  renderDiagnosisCard() {
    if (!this.currentCase || !this.diagnosisCard) return;

    const t = TRANSLATIONS[this.currentLang] || TRANSLATIONS.en;
    const c = this.currentCase;
    const trans = c.translations ? (c.translations[this.currentLang] || c.translations.en) : c;

    const isSevere = c.typicalSeverity === 'Severe';
    const isNormal = c.typicalSeverity === 'Normal';

    const confValue = c.isBlurry ? Math.max(52, c.confidence - 28) : c.confidence;
    const isUncertain = confValue < 75;

    const categoryText = c.category === 'Pest Infestation' ? (t.catPest || '🐛 Insect Pest Infestation')
      : c.category === 'Crop Disease' ? (t.catDisease || '🍄 Crop Pathology Disease')
      : (t.catHealthy || '✨ Healthy Plant Foliage');

    const categoryBadgeClass = c.category === 'Pest Infestation' ? 'cat-pest'
      : c.category === 'Crop Disease' ? 'cat-disease'
      : 'cat-healthy';

    const severityText = isNormal ? (t.sevOptimal || 'Optimal Health')
      : isSevere ? (t.sevSevere || 'Severe Infestation / Outbreak')
      : (t.sevModerate || 'Moderate Severity');

    const severityBadgeClass = isNormal ? 'badge-success'
      : isSevere ? 'badge-danger'
      : 'badge-warning';

    this.diagnosisCard.innerHTML = `
      <div class="diagnosis-card-inner glass-panel">
        <div class="diagnosis-header-row">
          <div>
            <span class="category-badge ${categoryBadgeClass}">${categoryText}</span>
            <h3 class="diagnosis-name mt-1">${trans.name}</h3>
            <p class="pathogen-name text-muted"><em>${c.pathogen}</em></p>
          </div>
          <div class="diagnosis-severity-wrap text-right">
            <span class="severity-badge ${severityBadgeClass}">${severityText}</span>
          </div>
        </div>

        ${isUncertain ? `
          <div class="uncertainty-alert-box mt-2">
            <span class="ua-icon">⚠️</span>
            <div>
              <strong>${t.safeguardTitle || 'Advisory Safeguard:'}</strong>
              <p class="mb-0">${t.safeguardDesc || 'Prediction confidence is below threshold due to photo clarity. Re-capture in clear sunlight before applying expensive inputs.'}</p>
            </div>
          </div>
        ` : ''}

        <div class="confidence-bar-wrap mt-3">
          <div class="confidence-label-row">
            <span><strong>${t.confidenceLabel}:</strong> ${confValue}% Match</span>
            <span class="text-muted">${t.modelVersionLabel || 'CropAlert Mobile CNN v3.2'}</span>
          </div>
          <div class="progress-bar-wrap mt-1">
            <div class="progress-fill ${confValue > 85 ? 'fill-success' : 'fill-warning'}" style="width: ${confValue}%"></div>
          </div>
        </div>

        <div class="symptom-desc-box mt-3">
          <strong>${t.keySymptomsLabel || 'Key Visual Symptoms Detected:'}</strong>
          <p class="mb-0 mt-1">${trans.symptoms}</p>
        </div>
      </div>
    `;
  }

  recalculateRisk() {
    if (!this.currentCase || !this.riskGaugeCard) return;

    const t = TRANSLATIONS[this.currentLang] || TRANSLATIONS.en;
    const c = this.currentCase;

    let score = c.baseRisk || 50;
    const sens = c.weatherSensitivity;

    if (sens) {
      if (this.weather.temperature >= sens.optTempMin && this.weather.temperature <= sens.optTempMax) {
        score += 16;
      } else if (this.weather.temperature < sens.minTemp || this.weather.temperature > sens.maxTemp) {
        score -= 20;
      }

      if (this.weather.humidity >= sens.minHumidity) {
        score += 16;
      } else if (this.weather.humidity < 45) {
        score -= 18;
      }

      if (sens.rainTrigger && this.weather.rainForecast) {
        score += 12;
      }
    }

    if (this.fieldMoisture === 'Waterlogged') score += 12;
    else if (this.fieldMoisture === 'Moist') score += 4;
    else if (this.fieldMoisture === 'Dry') score -= 8;

    if (c.category === 'Healthy') {
      score = 8;
    }

    score = Math.min(99, Math.max(5, Math.round(score)));

    let riskLevelText = t.riskLow;
    let riskColorClass = 'risk-safe';
    let riskBadge = 'badge-success';

    if (score >= 75) {
      riskLevelText = t.riskHigh;
      riskColorClass = 'risk-critical';
      riskBadge = 'badge-danger';
    } else if (score >= 45) {
      riskLevelText = t.riskMed;
      riskColorClass = 'risk-warning';
      riskBadge = 'badge-warning';
    }

    const factorTemplate = t.riskFactorsText || 'Temp: {temp}°C • Hum: {hum}% • Soil: {soil}';
    const factorsFormatted = factorTemplate
      .replace('{temp}', this.weather.temperature)
      .replace('{hum}', this.weather.humidity)
      .replace('{soil}', this.fieldMoisture);

    this.riskGaugeCard.innerHTML = `
      <div class="risk-card-inner glass-panel ${riskColorClass}">
        <div class="risk-top-row">
          <div>
            <h4 class="risk-title">${t.riskTitle}</h4>
            <p class="risk-sub text-muted">${t.riskFormulaDesc}</p>
          </div>
          <div class="risk-score-badge ${riskBadge}">
            <strong>${score}%</strong> ${t.riskLabel || 'Risk'}
          </div>
        </div>

        <div class="risk-meter-track mt-2">
          <div class="risk-meter-fill" style="width: ${score}%"></div>
        </div>

        <div class="risk-summary-row mt-2">
          <span class="risk-verdict"><strong>${t.statusLabel || 'Status:'}</strong> ${riskLevelText}</span>
          <span class="risk-factors text-muted">${factorsFormatted}</span>
        </div>
      </div>
    `;
  }

  renderImmediateAction() {
    if (!this.currentCase || !this.immediateActionCard) return;

    const t = TRANSLATIONS[this.currentLang] || TRANSLATIONS.en;
    const c = this.currentCase;
    const trans = c.translations ? (c.translations[this.currentLang] || c.translations.en) : c;

    this.immediateActionCard.innerHTML = `
      <div class="immediate-action-banner">
        <div class="ia-icon">🚨</div>
        <div class="ia-body">
          <span class="ia-badge">${t.immediateActionLabel}</span>
          <p class="ia-text">${trans.immediateAction}</p>
        </div>
      </div>
    `;
  }

  renderAdvisory(c) {
    if (!this.advisoryCard || !c) return;

    const t = TRANSLATIONS[this.currentLang] || TRANSLATIONS.en;
    const trans = c.translations ? (c.translations[this.currentLang] || c.translations.en) : c;
    const adv = trans.advisory || c.advisory;
    if (!adv) return;

    const organicPane = document.getElementById('advisory-pane-organic');
    if (organicPane && adv.organic) {
      organicPane.innerHTML = `
        <h5 class="pane-title">${adv.organic.title}</h5>
        <ul class="advisory-steps-list">
          ${adv.organic.steps.map(s => `<li><span class="step-check">🌿</span> ${s}</li>`).join('')}
        </ul>
      `;
    }

    const chemicalPane = document.getElementById('advisory-pane-chemical');
    if (chemicalPane && adv.chemical) {
      chemicalPane.innerHTML = `
        <h5 class="pane-title">${adv.chemical.title}</h5>
        <div class="precision-warning-pill">
          <span>⚠️</span> <strong>${t.precisionNotice || 'Precision Notice:'}</strong> ${adv.chemical.warning}
        </div>
        <ul class="advisory-steps-list mt-2">
          ${adv.chemical.steps.map(s => `<li><span class="step-check">🧪</span> ${s}</li>`).join('')}
        </ul>
      `;
    }

    const culturalPane = document.getElementById('advisory-pane-cultural');
    if (culturalPane && adv.cultural) {
      culturalPane.innerHTML = `
        <h5 class="pane-title">${adv.cultural.title}</h5>
        <ul class="advisory-steps-list">
          ${adv.cultural.steps.map(s => `<li><span class="step-check">🚜</span> ${s}</li>`).join('')}
        </ul>
      `;
    }
  }

  toggleVoiceAudio() {
    if (!this.speechSynth) {
      this.showToast('Speech synthesis not supported in this browser.', 'warning');
      return;
    }

    const btnAudio = document.getElementById('btn-voice-readout');
    const t = TRANSLATIONS[this.currentLang] || TRANSLATIONS.en;

    if (this.speechSynth.speaking) {
      this.speechSynth.cancel();
      if (btnAudio) btnAudio.innerHTML = `<span>🔊</span> ${t.audioListenBtn || 'Listen to Advisory in Audio'}`;
      this.showToast(t.voiceStoppedToast || 'Voice guidance stopped.', 'info');
      return;
    }

    if (!this.currentCase) return;

    const c = this.currentCase;
    const trans = c.translations ? (c.translations[this.currentLang] || c.translations.en) : c;
    const adv = trans.advisory || c.advisory;

    let spokenText = '';
    let voiceLang = 'en-IN';

    if (this.currentLang === 'hi') {
      voiceLang = 'hi-IN';
      spokenText = `क्रॉपअलर्ट एआई जांच परिणाम: ${trans.name}। कारक: ${c.pathogen}। तत्काल अनुशंसित कदम: ${trans.immediateAction}। जैविक उपाय: ${adv.organic.steps[0]}। रासायनिक उपचार: ${adv.chemical.steps[0]}`;
    } else if (this.currentLang === 'bn') {
      voiceLang = 'bn-IN';
      spokenText = `ক্রপঅ্যালার্ট এআই ফলাফল: ${trans.name}। প্রথম জরুরি পদক্ষেপ: ${trans.immediateAction}। জৈব পদ্ধতি: ${adv.organic.steps[0]}। সঠিক ঔষধ: ${adv.chemical.steps[0]}`;
    } else if (this.currentLang === 'as') {
      voiceLang = 'bn-IN'; // Fallback to Bengali voice engine if Assamese acoustic model absent
      spokenText = `ক্ৰপএলাৰ্ট এআই নিৰ্ণয়: ${trans.name}। তাৎক্ষণিক পদক্ষেপ: ${trans.immediateAction}। জৈৱিক উপায়: ${adv.organic.steps[0]}। ঔষধৰ ব্যৱস্থা: ${adv.chemical.steps[0]}`;
    } else if (this.currentLang === 'pa') {
      voiceLang = 'pa-IN';
      spokenText = `ਕਰੌਪਅਲਰਟ ਏਆਈ ਜਾਂਚ ਨਤੀਜਾ: ${trans.name}। ਪਹਿਲਾ ਜ਼ਰੂਰੀ ਕਦਮ: ${trans.immediateAction}। ਜੈਵਿਕ ਹੱਲ: ${adv.organic.steps[0]}। ਸਹੀ ਸਪਰੇਅ: ${adv.chemical.steps[0]}`;
    } else if (this.currentLang === 'mr') {
      voiceLang = 'mr-IN';
      spokenText = `क्रॉपअलर्ट एआय तपासणी निकाल: ${trans.name}। पहिली महत्त्वाची कृती: ${trans.immediateAction}। सेंद्रिय उपाय: ${adv.organic.steps[0]}। रासायनिक फवारणी: ${adv.chemical.steps[0]}`;
    } else {
      voiceLang = 'en-IN';
      spokenText = `CropAlert AI Diagnostic Result: ${trans.name} on ${c.crop}. Priority recommended action: ${trans.immediateAction}. Biological control: ${adv.organic.steps[0]}. Targeted chemical prescription: ${adv.chemical.steps[0]}`;
    }

    this.currentUtterance = new SpeechSynthesisUtterance(spokenText);
    this.currentUtterance.lang = voiceLang;
    this.currentUtterance.rate = 0.92;

    this.currentUtterance.onend = () => {
      if (btnAudio) btnAudio.innerHTML = `<span>🔊</span> ${t.audioListenBtn || 'Listen to Advisory in Audio'}`;
    };

    if (btnAudio) {
      btnAudio.innerHTML = `<span>⏹</span> ${t.audioStopBtn || 'Stop Audio'}`;
    }

    this.speechSynth.speak(this.currentUtterance);
    this.showToast(t.voiceStartedToast || 'Playing voice advisory in selected language...', 'info');
  }

  logScanToHistory() {
    if (!this.currentCase) return;
    const newScan = {
      id: `CA-${Math.floor(1000 + Math.random() * 9000)}`,
      crop: this.currentCase.crop,
      cropKey: this.currentCase.cropKey,
      issue: this.currentCase.name,
      category: this.currentCase.category,
      severity: this.currentCase.typicalSeverity,
      confidence: this.currentCase.confidence,
      risk: this.currentCase.baseRisk,
      date: new Date().toISOString().replace('T', ' ').substring(0, 16),
      synced: !this.isOffline
    };
    this.scanHistory.unshift(newScan);
    if (this.scanHistory.length > 10) this.scanHistory.pop();
    this.saveScanHistory();
    this.renderHistoryList();
  }

  renderHistoryList() {
    const list = document.getElementById('history-scans-list');
    if (!list) return;

    const t = TRANSLATIONS[this.currentLang] || TRANSLATIONS.en;

    list.innerHTML = this.scanHistory.map(s => {
      const syncBadge = s.synced
        ? `<span class="history-sync-pill sync-ok">${t.historySynced || 'Synced Cloud'}</span>`
        : `<span class="history-sync-pill sync-pending">${t.historyQueued || 'Queued Local'}</span>`;

      // Translate issue name if matched
      let issueDisplay = s.issue;
      for (const [k, v] of Object.entries(CROP_DATABASE)) {
        if (v.name === s.issue || v.id === s.cropKey || v.cropKey === s.cropKey) {
          const tr = v.translations ? (v.translations[this.currentLang] || v.translations.en) : v;
          issueDisplay = tr.name;
          break;
        }
      }

      return `
        <div class="history-item">
          <div class="history-item-top">
            <strong>${s.crop}: ${issueDisplay}</strong>
            ${syncBadge}
          </div>
          <div class="history-item-sub text-muted">
            <span>${s.id}</span> • <span>${s.date}</span> • <span>${s.confidence}${t.historyMatch || '% Match'}</span>
          </div>
        </div>
      `;
    }).join('');
  }

    updateLanguageUI() {
    const t = TRANSLATIONS[this.currentLang] || TRANSLATIONS.en;

    // 1. Translate all elements with [data-i18n]
    document.querySelectorAll('[data-i18n]').forEach(elem => {
      const key = elem.dataset.i18n;
      if (t[key]) {
        elem.textContent = t[key];
      }
    });

    // 2. Translate Dropdown Options: Crop, Growth Stage, Soil Moisture
    const selectCrop = document.getElementById('select-crop');
    if (selectCrop && t.cropOptions) {
      for (const opt of selectCrop.options) {
        if (t.cropOptions[opt.value]) {
          opt.textContent = t.cropOptions[opt.value];
        }
      }
    }

    const selectStage = document.getElementById('select-stage');
    if (selectStage && t.stageOptions) {
      for (const opt of selectStage.options) {
        if (t.stageOptions[opt.value]) {
          opt.textContent = t.stageOptions[opt.value];
        }
      }
    }

    const selectMoisture = document.getElementById('select-moisture');
    if (selectMoisture && t.moistureOptions) {
      for (const opt of selectMoisture.options) {
        if (t.moistureOptions[opt.value]) {
          opt.textContent = t.moistureOptions[opt.value];
        }
      }
    }

    // 3. Translate Weather Telemetry status & presets
    const valRain = document.getElementById('val-rain');
    if (valRain) {
      valRain.textContent = this.weather.rainForecast ? (t.rainExpected || 'Rain Expected (Wet Canopy)') : (t.rainNone || 'No Rain (Dry)');
    }

    // 4. Update Voice Readout Button Text
    const btnAudio = document.getElementById('btn-voice-readout');
    if (btnAudio && (!this.speechSynth || !this.speechSynth.speaking)) {
      btnAudio.innerHTML = `<span>🔊</span> ${t.audioListenBtn}`;
    }

    // 5. Update Explain AI Button Text
    if (this.btnExplainAi) {
      this.btnExplainAi.innerHTML = this.isXaiOpen
        ? `<span>🔼</span> ${t.explainAiHideBtn || 'Hide AI Decision Explanation'}`
        : `<span>🔍</span> ${t.explainAiBtn || 'Why AI Recommended This (Explain AI Result)'}`;
    }

    // 6. Refresh Dynamic Lists with active translation
    this.renderSampleThumbnails();
    if (this.currentCase) {
      this.evaluateQualityGate(this.currentCase.isBlurry || false);
      this.renderDiagnosisCard();
      this.recalculateRisk();
      this.renderImmediateAction();
      this.renderAdvisory(this.currentCase);
      if (this.isXaiOpen) this.renderXAIExplanation();
    }
    this.renderHistoryList();
  }

  showToast(message, type = 'info') {
    if (!this.toastContainer) return;
    const toast = document.createElement('div');
    toast.className = `toast-message toast-${type}`;
    toast.innerHTML = `
      <span class="toast-icon">${type === 'success' ? '✅' : type === 'warning' ? '⚠️' : type === 'danger' ? '🚨' : 'ℹ️'}</span>
      <span class="toast-text">${message}</span>
    `;
    this.toastContainer.appendChild(toast);
    setTimeout(() => {
      toast.classList.add('fade-out');
      setTimeout(() => toast.remove(), 400);
    }, 4500);
  }
}

// Bootstrap application on DOM ready
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    window.cropAlertApp = new CropAlertApp();
  });
}
