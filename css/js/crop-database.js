/**
 * CropAlert - Agronomic AI Knowledge Base & Multilingual Translations
 * Early Detection & Management of Crop Diseases and Pest Infestations
 */

export const CROP_DATABASE = {
  // PEST 1: Cotton Pink Bollworm
  cotton_bollworm: {
    id: 'cotton_bollworm',
    crop: 'Cotton',
    cropKey: 'cotton',
    name: 'Pink Bollworm Infestation',
    category: 'Pest Infestation',
    pathogen: 'Pectinophora gossypiella (Lepidoptera)',
    type: 'Insect Pest (Internal Borer)',
    typicalSeverity: 'Severe',
    confidence: 96,
    baseRisk: 86,
    weatherSensitivity: {
      minTemp: 22,
      maxTemp: 38,
      optTempMin: 27,
      optTempMax: 34,
      minHumidity: 55,
      rainTrigger: false
    },
    symptoms: 'Rosetted flower buds ("rosette blossom") with webbed petals; circular entry holes in young green bolls plugged with brown larval frass; larvae burrow into seeds staining lint.',
    heatmaps: [
      { x: 42, y: 50, radius: 24, label: 'Rosette Webbed Petals' },
      { x: 62, y: 38, radius: 18, label: 'Larval Entry / Frass' }
    ],
    immediateAction: 'Install pheromone traps immediately to assess moth catch threshold (ETL) and inspect unopened squares.',
    subsidizedPesticide: {
      name: 'Emamectin Benzoate 5% SG / Gossyplure Pheromone Traps',
      formulation: 'Emamectin Benzoate 5% SG @ 80-100 g/acre or Gossyplure Traps @ 15/acre',
      centralScheme: 'National Food Security Mission (NFSM) Plant Protection Sub-Mission',
      subsidyRate: '50% Direct Benefit Transfer (DBT)',
      approxSavings: '₹450 - ₹600 / acre',
      maxClaim: 'Up to 5 Acres (₹3,000 max)'
    },
    translations: {
      en: {
    btnViewResults: "⚡ Run AI Diagnosis & View Results ➔",
    btnBackInput: "⬅ Back to Disease Selection",
    page1Title: "Select Crop & Disease Infestation",
    page1Sub: "Choose a verified disease/pest sample below or upload a leaf photo to begin AI analysis",
    page2Title: "AI Diagnostic Results & Treatment Advisory",
    page2Sub: "Full disease analysis, weather risk coupling, and precision remedy recommendations",

        name: 'Pink Bollworm Infestation',
        category: 'Insect Pest Infestation',
        type: 'Insect Pest (Internal Borer)',
        severity: 'Severe Infestation / Outbreak',
        symptoms: 'Rosetted flower buds ("rosette blossom") with webbed petals; circular entry holes in young green bolls plugged with brown larval frass; larvae burrow into seeds staining lint.',
        immediateAction: 'Install pheromone traps immediately to assess moth catch threshold (ETL) and inspect unopened squares.',
        subsidizedInput: 'Emamectin Benzoate 5% SG & Gossyplure Pheromone Traps',
        schemeName: 'NFSM Plant Protection Assistance (50% DBT Subsidy)',
        advisory: {
          organic: {
            title: 'Biological & Organic Pest Control',
            steps: [
              'Install Pheromone Traps (Gossyplure lure) @ 5 traps/acre for pest surveillance and 15 traps/acre for mass trapping.',
              'Release Trichogramma bactrae egg parasitoids @ 60,000 / acre at weekly intervals from 45 days after sowing (3-4 releases).',
              'Foliar spray Neem oil (10,000 ppm) @ 2 ml / Litre of water to deter egg laying.'
            ]
          },
          chemical: {
            title: 'Precision Chemical Prescription (Targeted Spot Spray)',
            warning: 'Apply ONLY when trap catches exceed 8 moths/trap/night for 3 consecutive days or 10% rosette flowers appear.',
            steps: [
              'Emamectin Benzoate 5% SG @ 0.4 g / Litre of clean water (effective ovicide & larvicide).',
              'OR Chlorantraniliprole 18.5% SC @ 0.3 ml / Litre of water.',
              'Pre-Harvest Interval (PHI): 15 Days. Target spray at fruiting branches during evening hours.'
            ]
          },
          cultural: {
            title: 'Field & Cultural Prevention Practices',
            steps: [
              'Collect and promptly destroy rosetted flowers and dropped squares twice a week to break the larval cycle.',
              'Terminate the cotton crop within 150-160 days; strictly avoid ratoon cropping.',
              'Deep summer ploughing after harvest to expose overwintering pupae to solar heat and bird predators.'
            ]
          }
        },
        xai: {
          imageEvidence: [
            'Rosetted, twisted flower petals held together with larval silk webbing.',
            'Circular entrance hole (~1.5 mm) detected on outer boll pericarp.',
            'Granular brown fecal frass plugs around entry point.'
          ],
          environmentalFactors: 'Warm temperatures (27–34°C) with moderate humidity shorten the insect lifecycle, accelerating egg hatch to under 4 days.',
          aiDecisionConfidence: 'Mobile Vision CNN identified 3 signature morphological tokens of Pectinophora gossypiella with 96% feature match.',
          treatmentRationale: 'Emamectin Benzoate was chosen because of its strong translaminar ovicidal action, killing larvae before they penetrate deep into the boll lock.'
        }
      },
      hi: {
    btnViewResults: "⚡ एआई जांच चलाएं और परिणाम देखें ➔",
    btnBackInput: "⬅ फसल व रोग चयन पर वापस जाएं",
    page1Title: "फसल और रोग / कीट का चयन करें",
    page1Sub: "एआई जांच शुरू करने के लिए नीचे दिए गए रोग के नमूनों में से चुनें या पत्ते की फोटो अपलोड करें",
    page2Title: "एआई जांच परिणाम एवं उपचार परामर्श",
    page2Sub: "विस्तृत रोग विश्लेषण, मौसम जोखिम और सटीक उपचार सलाह",

        name: 'गुलाबी सुंडी (पिंक बॉलवर्म) का प्रकोप',
        category: 'कीट प्रकोप',
        type: 'आंतरिक छेदक कीट (Internal Borer)',
        severity: 'गंभीर प्रकोप (त्वरित उपचार आवश्यक)',
        symptoms: 'फूलों की पंखुड़ियां आपस में चिपककर गुलाब जैसी बन जाती हैं ("रोसेट ब्लॉसम"); हरे टिंडों में सूक्ष्म गोल छेद जिनमें भूरे रंग का लार्वा मल भरा होता है; सुंडी बीजों को खाकर रुई को बदरंग कर देती है।',
        immediateAction: 'पतंगों की संख्या (ETL) जांचने हेतु तुरंत 5 फेरोमोन ट्रैप प्रति एकड़ लगाएं और बिना खिले फूलों की जांच करें।',
        subsidizedInput: 'इमामेक्टिन बेंजोएट 5% एसजी एवं फेरोमोन ट्रैप (गॉसीप्लूर)',
        schemeName: 'एनएफएसएम पौध संरक्षण सहायता योजना (50% सीधा डीबीटी अनुदान)',
        advisory: {
          organic: {
            title: 'जैविक एवं प्राकृतिक कीट नियंत्रण',
            steps: [
              'कीट निगरानी हेतु 5 फेरोमोन ट्रैप प्रति एकड़ तथा सामूहिक रोकथाम हेतु 15 ट्रैप प्रति एकड़ लगाएं।',
              'बुवाई के 45 दिन बाद ट्राइकोग्रामा बैक्ट्रे के परजीवी अंडे 60,000 प्रति एकड़ की दर से साप्ताहिक अंतराल पर छोड़ें (3-4 बार)।',
              'मादा पतंगों को अंडे देने से रोकने के लिए 10,000 पीपीएम नीम तेल 2 मिली प्रति लीटर पानी में मिलाकर छिड़कें।'
            ]
          },
          chemical: {
            title: 'सटीक रासायनिक उपचार (लक्षित छिड़काव)',
            warning: 'छिड़काव तभी करें जब लगातार 3 दिन तक प्रति ट्रैप 8 या अधिक पतंगे पकड़े जाएं या 10% रोसेट फूल दिखें।',
            steps: [
              'इमामेक्टिन बेंजोएट 5% एसजी @ 80-100 ग्राम प्रति एकड़ (0.4 ग्राम/लीटर पानी)। यह अंडों और छोटी सुंडी पर तुरंत असर करता है।',
              'या क्लोरांट्रानिलीप्रोल 18.5% एससी @ 60 मिली प्रति एकड़ (0.3 मिली/लीटर पानी)।',
              'तुड़ाई से पहले की सुरक्षा अवधि (PHI): 15 दिन। शाम के समय फल शाखाओं पर छिड़काव करें।'
            ]
          },
          cultural: {
            title: 'कृषि प्रबंधन एवं रोकथाम उपाय',
            steps: [
              'प्रभावित रोसेट फूलों और नीचे गिरे हुए टिंडों को सप्ताह में दो बार इकट्ठा कर जमीन में गहरा गाड़ दें।',
              'कपास की फसल 150-160 दिनों में समाप्त करें; रटून (पेड़ी) फसल कतई न रखें।',
              'फसल कटाई के बाद खेत की गहरी ग्रीष्मकालीन जुताई करें ताकि सुंडी की प्यूपा धूप और पक्षियों द्वारा नष्ट हो जाएं।'
            ]
          }
        },
        xai: {
          imageEvidence: [
            'फूलों की पंखुड़ियों का रेशमी धागों से आपस में चिपककर रोसेट बनना स्पष्ट देखा गया।',
            'हरे टिंडे पर सुंडी का 1.5 मिमी गोल प्रवेश छिद्र मिला।',
            'छिद्र के चारों ओर भूरे रंग का मल (frass) जमा हुआ पाया गया।'
          ],
          environmentalFactors: '27–34°C तापमान और 55-82% आर्द्रता कीट के जीवन चक्र को तेज कर 4 दिनों में अंडा फोड़ देती है।',
          aiDecisionConfidence: 'कन्वोल्यूशनल न्यूरल नेटवर्क (CNN) ने 96% समानता के साथ गुलाबी सुंडी की पुष्टि की है।',
          treatmentRationale: 'इमामेक्टिन बेंजोएट सुंडी के टिंडे के अंदर घुसने से पहले ही अंडों और छोटी सुंडी को नष्ट कर देता है।'
        }
      },
      bn: {
    btnViewResults: "⚡ এআই রোগ নির্ণয় চালান ও ফলাফল দেখুন ➔",
    btnBackInput: "⬅ রোগ নির্বাচন পৃষ্ঠায় ফিরে যান",
    page1Title: "ফসল এবং রোগ / পোকা নির্বাচন করুন",
    page1Sub: "এআই পরীক্ষা শুরু করতে নিচের নমুনা থেকে বেছে নিন অথবা পাতার ছবি আপলোড করুন",
    page2Title: "এআই রোগ নির্ণয় ফলাফল ও চিকিৎসা পরামর্শ",
    page2Sub: "সম্পূর্ণ রোগ বিশ্লেষণ, আবহাওয়া ঝুঁকি এবং সঠিক প্রতিকার নির্দেশিকা",

        name: 'গোলাপি শুঁয়োপোকা (পিংক বোলওয়ার্ম) আক্রমণ',
        category: 'ক্ষতিকারক কীট আক্রমণ',
        type: 'অভ্যন্তরীণ ছিদ্রকারী কীট',
        severity: 'মারাত্মক প্রাদুর্ভাব (অবিলম্বে ব্যবস্থা নিন)',
        symptoms: 'ফুলের পাপড়ি রেশমি সুতো দিয়ে আটকে গোলাপের মতো কুঁকড়ে যায় ("রোসেট ফ্লাওয়ার"); কচি ফলের গায়ে সূক্ষ্ম ছিদ্র ও বাদামি বিষ্ঠা; কীড়া বীজের ভিতর ঢুকে তুলোর আঁশ নষ্ট করে।',
        immediateAction: 'পোকার মাত্রা যাচাই করতে জমিতে অবিলম্বে ফেরোমন ফাঁদ স্থাপন করুন এবং কুঁড়ি পরীক্ষা করুন।',
        subsidizedInput: 'ইমামেকটিন বেনজয়েট ৫% এসজি ও গসিপ্লুর ফেরোমন ফাঁদ',
        schemeName: 'এনএফএসএম উদ্ভিদ সংরক্ষণ সাহায্য প্রকল্প (৫০% সরাসরি ডিবিটি)',
        advisory: {
          organic: {
            title: 'জৈব ও প্রাকৃতিক পোকা দমন',
            steps: [
              'নজরদারির জন্য প্রতি একরে ৫টি এবং দলবদ্ধ পোকা দমনে ১৫টি ফেরোমন ফাঁদ লাগান।',
              'বপনের ৪৫ দিন পর ট্রাইকোগ্রামা ব্যাকট্রি পরজীবী প্রতি একরে ৬০,০০০ হারে প্রতি সপ্তাহে প্রয়োগ করুন (৩-৪ বার)।',
              'ডিম পাড়া রোধ করতে ১০,০০০ পিপিএম নিম তেল প্রতি লিটার জলে ২ মিলি মিশিয়ে স্প্রে করুন।'
            ]
          },
          chemical: {
            title: 'সঠিক রাসায়নিক প্রয়োগ (নির্দিষ্ট মাত্রা)',
            warning: 'টানা ৩ দিন প্রতি ফাঁদে ৮টির বেশি মথ ধরা পড়লে বা ১০% ফুল আক্রান্ত হলেই কেবল স্প্রে করুন।',
            steps: [
              'ইমামেকটিন বেনজয়েট ৫% এসজি @ ০.৪ গ্রাম প্রতি লিটার জলে গুলে স্প্রে করুন।',
              'অথবা ক্লোরান্ট্রানিলিপ্ৰোল ১৮.৫% এসসি @ ০.৩ মিলি প্রতি লিটার জলে।',
              'তোলার পূর্ববর্তী সময় (PHI): ১৫ দিন। বিকেলে স্প্রে করা উত্তম।'
            ]
          },
          cultural: {
            title: 'কৃষি পরিচালনা ও প্রতিরোধ ব্যবস্থা',
            steps: [
              'আক্রান্ত রোসেট ফুল ও ঝরে পড়া গুটি সংগ্রহ করে মাটিতে পুঁতে দিন।',
              '১৫০-১৬০ দিনের মধ্যে তুলার ফসল সমাপ্ত করুন; অতিরিক্ত ফসল রাখবেন না।',
              'ফসল কাটার পর গ্রীষ্মকালীন গভীর চাষ দিন যাতে পিউপা রোদ ও পাখিদের দ্বারা ধ্বংস হয়।'
            ]
          }
        },
        xai: {
          imageEvidence: [
            'পাপড়ি জট পাকিয়ে রোসেট কুঁড়িতে পরিণত হওয়ার সুস্পষ্ট লক্ষণ।',
            'কচি গুটির উপর কীড়ার বৃত্তাকার প্রবেশ ছিদ্র শনাক্ত হয়েছে।',
            'প্রবেশদ্বারে বাদামি রঙের রেচন পদার্থ উপস্থিত।'
          ],
          environmentalFactors: '২৭-৩৪° সে. তাপমাত্রা এবং মাঝারি আর্দ্রতায় কীটের দ্রুত বংশবৃদ্ধি ঘটে।',
          aiDecisionConfidence: 'সিএনএন মডেল ৯৬% নিখুঁততার সাথে পিংক বোলওয়ার্ম শনাক্ত করেছে।',
          treatmentRationale: 'ইমামেকটিন বেনজয়েট কীড়া গুটির গভীরে ঢোকার আগেই কার্যকরভাবে দমন করে।'
        }
      },
      as: {
    btnViewResults: "⚡ এআই নিৰ্ণয় চলাওক আৰু ফলাফল চাওক ➔",
    btnBackInput: "⬅ শস্য নিৰ্বাচনলৈ উভতি যাওক",
    page1Title: "শস্য আৰু ৰোগ / কীট নিৰ্বাচন কৰক",
    page1Sub: "এআই বিশ্লেষণ আৰম্ভ কৰিবলৈ তলৰ নমুনাৰ পৰা বাছি লওক অথবা পাতৰ ফটো আপল’ড কৰক",
    page2Title: "এআই নিৰ্ণয় ফলাফল আৰু চিকিৎসা পৰামৰ্শ",
    page2Sub: "সম্পূৰ্ণ ৰোগ বিশ্লেষণ, বতৰৰ বিপদাশংকা আৰু সঠিক প্ৰতিকাৰ ব্যৱস্থা",

        name: 'গোলাপী ব’লৱৰ্ম কীটৰ আক্ৰমণ',
        category: 'ক্ষতিকাৰক কীটৰ আক্ৰমণ',
        type: 'ভিতৰত বিন্ধা কৰা পলু',
        severity: 'গুৰুতৰ আক্ৰমণ (অবিলম্বে ঔষধ প্ৰয়োগ কৰক)',
        symptoms: 'ফুলৰ পাহিবোৰ সূতাৰে বান্ধ খাই গোলাপৰ দৰে কোঁচ খাই পৰে ("ৰোজেট ফুল"); কচি ফলত সৰু ঘূৰণীয়া ফুটা আৰু পলুৰ মল; পলুৱে বীজ খাই কপাহৰ আঁহ নষ্ট কৰে।',
        immediateAction: 'পলুৰ উপস্থিতি নিৰ্ণয়ৰ বাবে লগে লগে ফেৰ’মন ট্ৰেপ স্থাপন কৰক আৰু মুকলি নোহোৱা ফুল পৰীক্ষা কৰক।',
        subsidizedInput: 'ইমাদেকটিন বেনজ’ৱেট ৫% এছজি আৰু ফেৰ’মন ট্ৰেপ',
        schemeName: 'এনএফএছএম শস্য সুৰক্ষা সাহায্য আঁচনি (৫০% প্ৰত্যক্ষ ডিবিটি ৰাজসাহায্য)',
        advisory: {
          organic: {
            title: 'জৈৱিক আৰু প্ৰাকৃতিক কীট নিয়ন্ত্ৰণ',
            steps: [
              'কীট নিৰীক্ষণৰ বাবে প্ৰতি একৰত ৫ টা আৰু ব্যাপক দমনৰ বাবে ১৫ টা ফেৰ’মন ট্ৰেপ লগাওক।',
              'বীজ সিঁচাৰ ৪৫ দিন পিছত ট্ৰাইক’গ্ৰামা বেক্ট্ৰি পৰজীৱী প্ৰতি একৰত ৬০,০০০ কৈ এসপ্তাহৰ ব্যৱধানত এৰি দিয়ক (৩-৪ বাৰ)।',
              'পলুৱে কণী পৰা ৰোধ কৰিবলৈ ১০,০০০ পিপিএম নিম তেল প্ৰতি লিটাৰ পানীত ২ মিলি মিহলাই স্প্ৰে কৰক।'
            ]
          },
          chemical: {
            title: 'সঠিক ৰাসায়নিক ঔষধ (নিৰ্দিষ্ট পৰিমাণ)',
            warning: 'টানা ৩ দিন ট্ৰেপত ৮ টা বা তাতকৈ অধিক পলু ধৰা পৰিলেহে স্প্ৰে কৰক।',
            steps: [
              'ইমাদেকটিন বেনজ’ৱেট ৫% এছজি @ ০.৪ গ্ৰাম প্ৰতি লিটাৰ পানীত মিহলাই স্প্ৰে কৰক।',
              'বা ক্ল’ৰান্ট্ৰানিলিপ্ৰ’ল ১৮.৫% এছচি @ ০.৩ মিলি প্ৰতি লিটাৰ পানীত।',
              'শস্য চপোৱাৰ পূৰ্বৰ সুৰক্ষা সময় (PHI): ১৫ দিন। গধূলি সময়ত স্প্ৰে কৰা ফলপ্ৰসূ।'
            ]
          },
          cultural: {
            title: 'পথাৰ পৰিষ্কাৰ আৰু ব্যৱস্থাপনা',
            steps: [
              'আক্ৰান্ত ৰোজেট ফুল আৰু সৰি পৰা গুটি সংগ্ৰহ কৰি মাটিত পুতি পেলাওক।',
              '১৫০-১৬০ দিনৰ ভিতৰত কপাহ শস্য সামৰক; খৰিচা শস্য নাৰাখিব।',
              'শস্য চপোৱাৰ পিছত মাটিত গভীৰ হাল বাওক যাতে লেটা ৰ’দত ধ্বংস হয়।'
            ]
          }
        },
        xai: {
          imageEvidence: [
            'পাহিবোৰ সূতাৰে মেৰ খাই ৰোজেট হোৱা লক্ষণ স্পষ্ট।',
            'কপাহৰ গুটিত পলুৰ প্ৰৱেশদ্বাৰ পোৱা গৈছে।',
            'ফুটাৰ কাষত বাদামী মলৰ অৱস্থিতি।'
          ],
          environmentalFactors: '২৭-৩৪° উষ্ণতা আৰু অনুকূল আৰ্দ্ৰতাই পলুৰ কণী সোনকালে ফুটিবলৈ সহায় কৰে।',
          aiDecisionConfidence: 'এআই ভিজন মডেলটোৱে ৯৬% নিশ্চিতিৰে ব’লৱৰ্ম চিনাক্ত কৰিছে।',
          treatmentRationale: 'ইমাদেকটিন বেনজ’ৱেটে পলুৱে কপাহৰ গুটিত সোমোৱাৰ আগতেই তাক ধ্বংস কৰে।'
        }
      },
      pa: {
    btnViewResults: "⚡ ਏਆਈ ਜਾਂਚ ਚਲਾਓ ਅਤੇ ਨਤੀਜੇ ਦੇਖੋ ➔",
    btnBackInput: "⬅ ਵਾਪਸ ਚੋਣ ਪੰਨੇ ਤੇ ਜਾਓ",
    page1Title: "ਫ਼ਸਲ ਅਤੇ ਬਿਮਾਰੀ / ਕੀੜੇ ਦੀ ਚੋਣ ਕਰੋ",
    page1Sub: "ਏਆਈ ਵਿਸ਼ਲੇਸ਼ਣ ਸ਼ੁਰੂ ਕਰਨ ਲਈ ਹੇਠਾਂ ਦਿੱਤੇ ਨਮੂਨੇ ਵਿੱਚੋਂ ਚੁਣੋ ਜਾਂ ਪੱਤੇ ਦੀ ਫੋਟੋ ਅਪਲੋਡ ਕਰੋ",
    page2Title: "ਏਆਈ ਜਾਂਚ ਨਤੀਜੇ ਅਤੇ ਇਲਾਜ ਸਲਾਹ",
    page2Sub: "ਪੂਰਾ ਬਿਮਾਰੀ ਵਿਸ਼ਲੇਸ਼ਣ, ਮੌਸਮੀ ਖਤਰਾ ਅਤੇ ਸਹੀ ਇਲਾਜ ਸੇਧ",

        name: 'ਗੁਲਾਬੀ ਸੁੰਡੀ (ਪਿੰਕ ਬੋਲਵਰਮ) ਦਾ ਹਮਲਾ',
        category: 'ਕੀੜੇ-ਮਕੌੜੇ ਦਾ ਹਮਲਾ',
        type: 'ਅੰਦਰ ਵੜ ਕੇ ਨੁਕਸਾਨ ਕਰਨ ਵਾਲੀ ਸੁੰਡੀ',
        severity: 'ਗੰਭੀਰ ਖ਼ਤਰਾ (ਤੁਰੰਤ ਸਪਰੇਅ ਕਰੋ)',
        symptoms: 'ਫੁੱਲਾਂ ਦੀਆਂ ਪੱਤੀਆਂ ਆਪਸ ਵਿੱਚ ਜੁੜ ਕੇ ਗੁਲਾਬ ਵਾਂਗ ਬਣ ਜਾਂਦੀਆਂ ਹਨ ("ਰੋਜ਼ੈਟ ਫੁੱਲ"); ਨਰਮ ਟੀਂਡਿਆਂ ਵਿੱਚ ਛੋਟੇ ਗੋਲ ਛੇਕ ਅਤੇ ਮਲ; ਸੁੰਡੀ ਬੀਜ ਖਾ ਕੇ ਕਪਾਹ ਦੇ ਰੇਸ਼ੇ ਖ਼ਰਾਬ ਕਰ ਦਿੰਦੀ ਹੈ।',
        immediateAction: 'ਪਤੰਗਿਆਂ ਦੀ ਜਾਂਚ ਲਈ ਤੁਰੰਤ ਫ਼ੇਰੋਮੋਨ ਟਰੈਪ ਲਗਾਓ ਅਤੇ ਅਣਖਿੜੇ ਫੁੱਲ ਚੈੱਕ ਕਰੋ।',
        subsidizedInput: 'ਇਮਾਮੈਕਟਿਨ ਬੈਂਜ਼ੋਏਟ 5% ਐਸਜੀ ਅਤੇ ਫ਼ੇਰੋਮੋਨ ਟਰੈਪ',
        schemeName: 'ਐਨਐਫ਼ਐਸਐਮ ਪੌਦਾ ਸੁਰੱਖਿਆ ਸਹਾਇਤਾ ਸਕੀਮ (50% ਸਿੱਧੀ ਡੀਬੀਟੀ ਸਬਸਿਡੀ)',
        advisory: {
          organic: {
            title: 'ਜੈਵਿਕ ਅਤੇ ਦੇਸੀ ਰੋਕਥਾਮ',
            steps: [
              'ਨਿਗਰਾਨੀ ਲਈ 5 ਫ਼ੇਰੋਮੋਨ ਟਰੈਪ ਪ੍ਰਤੀ ਏਕੜ ਅਤੇ ਰੋਕਥਾਮ ਲਈ 15 ਟਰੈਪ ਲਗਾਓ।',
              'ਬਿਜਾਈ ਦੇ 45 ਦਿਨਾਂ ਬਾਅਦ ਟ੍ਰਾਈਕੋਗ੍ਰਾਮਾ ਬੈਕਟ੍ਰੀ ਪ੍ਰਤੀ ਏਕੜ 60,000 ਦੇ ਹਿਸਾਬ ਨਾਲ ਹਫ਼ਤਾਵਾਰੀ ਛੱਡੋ।',
              'ਆਂਡੇ ਰੋਕਣ ਲਈ 10,000 ਪੀਪੀਐਮ ਨਿੰਮ ਦਾ ਤੇਲ 2 ਮਿਲੀ ਪ੍ਰਤੀ ਲੀਟਰ ਪਾਣੀ ਵਿੱਚ ਸਪਰੇਅ ਕਰੋ।'
            ]
          },
          chemical: {
            title: 'ਸਹੀ ਰਸਾਇਣਕ ਸਪਰੇਅ (ਸਹੀ ਮਾਤਰਾ)',
            warning: 'ਸਪਰੇਅ ਉਦੋਂ ਹੀ ਕਰੋ ਜਦੋਂ 3 ਦਿਨ ਲਗਾਤਾਰ 8 ਪਤੰਗੇ ਪ੍ਰਤੀ ਟਰੈਪ ਮਿਲਣ ਜਾਂ 10% ਰੋਜ਼ੈਟ ਫੁੱਲ ਹੋਣ।',
            steps: [
              'ਇਮਾਮੈਕਟਿਨ ਬੈਂਜ਼ੋਏਟ 5% ਐਸਜੀ @ 0.4 ਗ੍ਰਾਮ ਪ੍ਰਤੀ ਲੀਟਰ ਪਾਣੀ ਵਿੱਚ ਸਪਰੇਅ ਕਰੋ।',
              'ਜਾਂ ਕਲੋਰਐਂਟ੍ਰਾਨਿਲੀਪ੍ਰੋਲ 18.5% ਐਸਸੀ @ 0.3 ਮਿਲੀ ਪ੍ਰਤੀ ਲੀਟਰ ਪਾਣੀ।',
              'ਤੁੜਾਈ ਤੋਂ ਪਹਿਲਾਂ ਸੁਰੱਖਿਆ ਸਮਾਂ (PHI): 15 ਦਿਨ। ਸ਼ਾਮ ਨੂੰ ਸਪਰੇਅ ਕਰਨਾ ਲਾਹੇਵੰਦ ਹੈ।'
            ]
          },
          cultural: {
            title: 'ਖੇਤ ਦੀ ਸਫ਼ਾਈ ਅਤੇ ਸੰਭਾਲ',
            steps: [
              'ਨੁਕਸਾਨੇ ਫੁੱਲ ਅਤੇ ਡਿੱਗੇ ਟੀਂਡੇ ਇਕੱਠੇ ਕਰਕੇ ਜ਼ਮੀਨ ਵਿੱਚ ਦਬਾ ਦਿਓ।',
              'ਕਪਾਹ ਦੀ ਫ਼ਸਲ 150-160 ਦਿਨਾਂ ਵਿੱਚ ਖ਼ਤਮ ਕਰੋ; ਮੁੱਢੀ ਫ਼ਸਲ ਬਿਲਕੁਲ ਨਾ ਰੱਖੋ।',
              'ਵਾਢੀ ਤੋਂ ਬਾਅਦ ਡੂੰਘਾ ਹਲ ਚਲਾਓ ਤਾਂ ਜੋ ਸੁੰਡੀ ਧੁੱਪ ਨਾਲ ਖ਼ਤਮ ਹੋ ਜਾਵੇ।'
            ]
          }
        },
        xai: {
          imageEvidence: [
            'ਫੁੱਲਾਂ ਦੀਆਂ ਪੱਤੀਆਂ ਦਾ ਰੋਜ਼ੈਟ ਬਣਨਾ ਸਾਫ਼ ਦਿਖਾਈ ਦਿੱਤਾ।',
            'ਟੀਂਡੇ ਉੱਤੇ ਸੁੰਡੀ ਦਾ ਛੇਕ ਮਿਲਿਆ।',
            'ਛੇਕ ਦੇ ਆਲੇ-ਦੁਆਲੇ ਮਲ ਜੰਮਿਆ ਹੋਇਆ ਹੈ।'
          ],
          environmentalFactors: '27-34°C ਤਾਪਮਾਨ ਕੀੜੇ ਦੇ ਵਾਧੇ ਲਈ ਬਹੁਤ ਅਨੁਕੂਲ ਹੈ।',
          aiDecisionConfidence: 'ਸੀਐਨਐਨ ਮਾਡਲ ਨੇ 96% ਸਹੀ ਪਛਾਣ ਕੀਤੀ ਹੈ।',
          treatmentRationale: 'ਇਮਾਮੈਕਟਿਨ ਬੈਂਜ਼ੋਏਟ ਸੁੰਡੀ ਨੂੰ ਟੀਂਡੇ ਦੇ ਅੰਦਰ ਵੜਨ ਤੋਂ ਪਹਿਲਾਂ ਹੀ ਖ਼ਤਮ ਕਰਦਾ ਹੈ।'
        }
      },
      mr: {
    btnViewResults: "⚡ एआय तपासणी चालवा आणि निकाल पहा ➔",
    btnBackInput: "⬅ रोग निवड पृष्ठावर परत जा",
    page1Title: "पीक आणि रोग / कीड निवडा",
    page1Sub: "एआय तपासणी सुरू करण्यासाठी खालील नमुन्यांमधून निवडा किंवा पानाचा फोटो अपलोड करा",
    page2Title: "एआय तपासणी निकाल आणि उपचार सल्ला",
    page2Sub: "सविस्तर रोग विश्लेषण, हवामान जोखीम आणि अचूक उपचार मार्गदर्शन",

        name: 'गुलाबी बोंडअळीचा प्रादुर्भाव',
        category: 'कीटक प्रादुर्भाव',
        type: 'अंतर्गत पोखरक कीटक',
        severity: 'गंभीर प्रादुर्भाव (तातडीने फवारणी आवश्यक)',
        symptoms: 'फुलांच्या पाकळ्या एकमेकांना चिकटून गुलाबाच्या कळीसारख्या होतात ("रोझेट फ्लॉवर"); कोवळ्या बोंडांवर सूक्ष्म गोलाकार छिद्रे व विष्ठा; अळी सरकी खाऊन रुई खराब करते.',
        immediateAction: 'कीटकांची पातळी मोजण्यासाठी त्वरित ५ कामगंध सापळे (फेरोमोन ट्रॅप्स) लावा आणि न उमललेली फुले तपासा.',
        subsidizedInput: 'इमामेक्टिन बेन्झोएट ५% एसजी आणि फेरोमोन ट्रॅप्स',
        schemeName: 'एनएफएसएम पीक संरक्षण अनुदान योजना (५०% थेट डीबीटी अनुदान)',
        advisory: {
          organic: {
            title: 'सेंद्रिय व जैविक कीड नियंत्रण',
            steps: [
              'निरीक्षणासाठी एकरी ५ व सामूहिक नियंत्रणासाठी १५ कामगंध सापळे लावा.',
              'पेरणीनंतर ४५ दिवसांनी ट्रायकोगामा बॅक्ट्री एकरी ६०,००० या प्रमाणात दर आठवड्याला सोडा (३-४ वेळा).',
              'अंडी घालण्यापासून रोखण्यासाठी १०,००० पीपीएम निंबोळी अर्क २ मिली प्रति लिटर पाण्यात मिसळून फवारा.'
            ]
          },
          chemical: {
            title: 'अचूक रासायनिक फवारणी (प्रमाणानुसार)',
            warning: 'सलग ३ दिवस प्रति सापळा ८ पतंग आढळल्यास किंवा १०% रोझेट फुले दिसल्यासच फवारणी करा.',
            steps: [
              'इमामेक्टिन बेन्झोएट ५% एसजी @ ०.४ ग्रॅम प्रति लिटर पाणी (अंडी व अळीवर तात्काळ परिणाम).',
              'किंवा क्लोरँट्रानिलीप्रोल १८.५% एससी @ ०.३ मिली प्रति लिटर पाणी.',
              'तोडणीपूर्वीचा सुरक्षित कालावधी (PHI): १५ दिवस. संध्याकाळच्या वेळी फवारणी करा.'
            ]
          },
          cultural: {
            title: 'शेत व्यवस्थापन व प्रतिबंधात्मक उपाय',
            steps: [
              'प्रादुर्भाव झालेली रोझेट फुले आणि गळालेली बोंडे गोळा करून जमिनीत गाडा.',
              'कपाशी पीक १५०-१६० दिवसांत संपवा; फरदड (खो खोडवा) कतई घेऊ नका.',
              'कापणीनंतर उन्हाळ्यात जमिनीची खोल नांगरट करा जेणेकरून कोषावस्थेतील अळ्या उन्हाने नष्ट होतील.'
            ]
          }
        },
        xai: {
          imageEvidence: [
            'फुलांच्या पाकळ्या एकमेकांना चिकटून रोझेट तयार झाल्याचे स्पष्ट आढळले.',
            'बोंडावर १.५ मिमी व्यासाचे गोलाकार प्रवेश छिद्र आढळले.',
            'छिद्राभोवती तपकिरी रंगाची विष्ठा जमा झालेली दिसली.'
          ],
          environmentalFactors: '२७-३४° से. तापमान आणि मध्यम आर्द्रता बोंडअळीच्या जीवनचक्राला गती देते.',
          aiDecisionConfidence: 'मोबाईल व्हिजन सीएनएनने ९६% अचूकतेसह गुलाबी बोंडअळी ओळखली आहे.',
          treatmentRationale: 'इमामेक्टिन बेन्झोएट अळी बोंडात शिरण्यापूर्वीच तिचा नायनाट करते.'
        }
      }
    }
  },

  // PEST 2: Maize Fall Armyworm
  maize_fall_armyworm: {
    id: 'maize_fall_armyworm',
    crop: 'Maize / Corn',
    cropKey: 'maize',
    name: 'Fall Armyworm Infestation',
    category: 'Pest Infestation',
    pathogen: 'Spodoptera frugiperda (Lepidoptera)',
    type: 'Defoliating & Whorl Insect Pest',
    typicalSeverity: 'Severe',
    confidence: 94,
    baseRisk: 88,
    weatherSensitivity: {
      minTemp: 18,
      maxTemp: 35,
      optTempMin: 25,
      optTempMax: 32,
      minHumidity: 60,
      rainTrigger: false
    },
    symptoms: 'Ragged, elongated feeding holes with skeletonized windowpanes on whorl leaves; massive accumulation of coarse sawdust-like fecal frass deep inside central whorls.',
    heatmaps: [
      { x: 38, y: 35, radius: 26, label: 'Windowpane Leaf Damage' },
      { x: 55, y: 58, radius: 22, label: 'Whorl Frass Accumulation' }
    ],
    immediateAction: 'Apply dry sand or wood ash into whorls immediately, and spray biocontrol agent before larvae bore deep into cobs.',
    subsidizedPesticide: {
      name: 'Chlorantraniliprole 18.5% SC / Spinetoram 11.7% SC',
      formulation: 'Chlorantraniliprole 18.5% SC @ 60 ml/acre or Spinetoram 11.7% SC @ 100 ml/acre',
      centralScheme: 'RKVY Fall Armyworm Emergency Control Mission (50% DBT)',
      subsidyRate: '50% Government Subsidy',
      approxSavings: '₹650 / acre',
      maxClaim: 'Up to 4 Acres (₹2,600 max)'
    },
    translations: {
      en: {
        name: 'Fall Armyworm Infestation',
        category: 'Insect Pest Infestation',
        type: 'Defoliating & Whorl Insect Pest',
        severity: 'Severe Infestation / Outbreak',
        symptoms: 'Ragged, elongated feeding holes with skeletonized windowpanes on whorl leaves; massive accumulation of coarse sawdust-like fecal frass deep inside central whorls.',
        immediateAction: 'Apply dry sand or wood ash into whorls immediately, and spray biocontrol agent before larvae bore deep into cobs.',
        subsidizedInput: 'Chlorantraniliprole 18.5% SC & Spinetoram 11.7% SC',
        schemeName: 'RKVY Fall Armyworm Emergency Subsidy (50% DBT)',
        advisory: {
          organic: {
            title: 'Biological & Organic Pest Control',
            steps: [
              'Apply Metarhizium rileyi or Beauveria bassiana (1 x 10^8 cfu/g) @ 5 g / Litre of water directed into the whorl.',
              'Hand-drop a mixture of fine sand and lime (9:1 ratio) or dry wood ash directly into whorls to suffocate young instars.',
              'Erect bird perches @ 10-15 per acre to invite insectivorous birds into the field.'
            ]
          },
          chemical: {
            title: 'Precision Chemical Prescription (Targeted Spot Spray)',
            warning: 'Direct spray nozzle straight into central plant whorls; avoid superficial broadcast spraying.',
            steps: [
              'Spinetoram 11.7% SC @ 0.5 ml / Litre of water.',
              'OR Chlorantraniliprole 18.5% SC @ 0.4 ml / Litre of water directed at central whorls.',
              'Pre-Harvest Interval (PHI): 14 Days. Spray early morning or late afternoon when larvae are active.'
            ]
          },
          cultural: {
            title: 'Field & Cultural Prevention Practices',
            steps: [
              'Intercrop maize with cowpea, pigeon pea, or desmodium (push-pull strategy) to deter moth oviposition.',
              'Maintain clean field borders free from wild sorghum and weed grasses.'
            ]
          }
        },
        xai: {
          imageEvidence: [
            'Translucent epidermal "windowpaning" caused by early-instar leaf scraping.',
            'Extensive ragged foliar shredding with coarse sawdust-like excreta.',
            'Larval body features consistent with Spodoptera frugiperda thoracic pinacula.'
          ],
          environmentalFactors: 'Moderate to high relative humidity and warm conditions (25–32°C) trigger rapid moth emergence and nocturnal oviposition.',
          aiDecisionConfidence: 'CNN leaf segmentation model matched characteristic whorl chewing patterns with 94% confidence.',
          treatmentRationale: 'Spinetoram / Chlorantraniliprole directed into whorls paralyses the caterpillar nervous system via ryanodine receptor modulation with minimal impact on beneficial ground predators.'
        }
      },
      hi: {
        name: 'फॉल आर्मीवर्म (सैनिक कीट) का प्रकोप',
        category: 'कीट प्रकोप',
        type: 'पत्ती एवं पोंगा छेदक कीट',
        severity: 'गंभीर प्रकोप (फसल को भारी खतरा)',
        symptoms: 'मक्के की पोंगे वाली पत्तियों में बड़े-बड़े फटे हुए छेद और पारदर्शी झिल्ली ("खिड़कीनुमा लक्षण"); पोंगे (whorl) के अंदर लकड़ी के बुरादे जैसा भारी मात्रा में लार्वा मल जमा होना।',
        immediateAction: 'पोंगे के अंदर तुरंत सूखी रेत या लकड़ी की राख डालें और लार्वा के भुट्टे में घुसने से पहले कीटनाशक का छिड़काव करें।',
        subsidizedInput: 'क्लोरांट्रानिलीप्रोल 18.5% एससी / स्पिनटोरम 11.7% एससी',
        schemeName: 'आरकेवीवाई फॉल आर्मीवर्म नियंत्रण योजना (50% डीबीटी सब्सिडी)',
        advisory: {
          organic: {
            title: 'जैविक एवं प्राकृतिक कीट नियंत्रण',
            steps: [
              'पोंगे में मेटाराइजियम रिलेई या ब्युवेरिया बैसियाना @ 5 ग्राम प्रति लीटर पानी का घोल डालें।',
              'पोंगे में सूखी रेत व चूना (9:1) या लकड़ी की राख चुटकी से डालें जिससे छोटी सुंडी का दम घुट जाए।',
              'खेत में 10-15 टी-आकार के पक्षी बसेरे लगाएं ताकि पक्षी सुंडियों को खा सकें।'
            ]
          },
          chemical: {
            title: 'सटीक रासायनिक उपचार (पोंगे में लक्षित छिड़काव)',
            warning: 'स्प्रे का नोजल सीधे पौधे के पोंगे (केंद्रीय चक्र) की ओर रखें, पत्तियों पर छिड़कने से दवा व्यर्थ जाती है।',
            steps: [
              'स्पिनटोरम 11.7% एससी @ 0.5 मिली प्रति लीटर पानी।',
              'या क्लोरांट्रानिलीप्रोल 18.5% एससी (कोराजन) @ 0.4 मिली प्रति लीटर पानी सीधे पोंगे में डालें।',
              'सुरक्षा अवधि (PHI): 14 दिन। सुबह जल्दी या शाम को जब सुंडी बाहर आए तब छिड़काव करें।'
            ]
          },
          cultural: {
            title: 'कृषि प्रबंधन एवं रोकथाम उपाय',
            steps: [
              'मक्के के साथ लोबिया (काउपी) या अरहर की अंतःफसल (इंटरक्रॉपिंग) लगाएं।',
              'खेत की मेड़ों को जंगली घास और ज्वार से मुक्त रखें।'
            ]
          }
        },
        xai: {
          imageEvidence: [
            'पत्तियों पर फॉल आर्मीवर्म द्वारा की गई जालीदार व खिड़कीनुमा कटाई साफ दिखाई दी।',
            'पोंगे में लकड़ी के बुरादे जैसा लार्वा का भारी मल मिला।',
            'सुंडी के सिर पर उल्टा "Y" आकार का विशिष्ट निशान।'
          ],
          environmentalFactors: '25–32°C तापमान और 60% से अधिक नमी में यह कीट बहुत तेजी से बढ़ता है।',
          aiDecisionConfidence: 'सीएनएन इमेज क्लासिफायर ने 94% सटीकता के साथ फॉल आर्मीवर्म की पुष्टि की है।',
          treatmentRationale: 'क्लोरांट्रानिलीप्रोल पोंगे में जाकर कीट के तंत्रिका तंत्र को तुरंत निष्क्रिय कर देता है।'
        }
      },
      bn: {
        name: 'ফল আর্মিওয়ার্ম (সৈনিক পোকা) আক্রমণ',
        category: 'ক্ষতিকারক কীট আক্রমণ',
        type: 'পাতা ও ডগা ধ্বংসকারী পোকা',
        severity: 'মারাত্মক প্রাদুর্ভাব',
        symptoms: 'পাতায় অসম ও লম্বাটে ছেঁড়া ফুটো এবং স্বচ্ছ পর্দার মতো দাগ; কান্ডের কেন্দ্রস্থলে কাঠের গুঁড়োর মতো প্রচুর কীড়ার বিষ্ঠা জমা হওয়া।',
        immediateAction: 'গাছের ডগায় অবিলম্বে শুকনো ছাই বা বালি দিন এবং ভুট্টায় ঢোকার আগে ঔষধ প্রয়োগ করুন।',
        subsidizedInput: 'ক্লোরান্ট্রানিলিপ্ৰোল ১৮.৫% এসসি / স্পিনেটোরাম ১১.৭% এসসি',
        schemeName: 'আরকেভিওয়াই ফল আর্মিওয়ার্ম দমন প্রকল্প (৫০% ডিবিটি অনুদান)',
        advisory: {
          organic: {
            title: 'জৈব ও প্রাকৃতিক দমন ব্যবস্থা',
            steps: [
              'মেটারাইজিয়াম রিলেই বা ব্যাভেরিয়া ব্যাসিয়ানা ৫ গ্রাম/লিটার জলে গুলে ডগায় স্প্রে করুন।',
              'ডগায় শুকনো বালি ও চুন (৯:১) বা কাঠের ছাই দিলে ছোট কীড়া দমবন্ধ হয়ে মারা যায়।',
              'প্রতি একরে ১০-১৫টি পাখির বসার খুঁটি পুঁতুন।'
            ]
          },
          chemical: {
            title: 'সঠিক রাসায়নিক প্রয়োগ (ডগায় সরাসরি স্প্রে)',
            warning: 'স্প্রে নজল সরাসরি গাছের কেন্দ্রস্থ ডগায় ধরুন; সাধারণ স্প্রে কার্যকর হয় না।',
            steps: [
              'স্পিনেটোরাম ১১.৭% এসসি @ ০.৫ মিলি প্রতি লিটার জলে।',
              'অথবা ক্লোরান্ট্রানিলিপ্ৰোল ১৮.৫% এসসি @ ০.৪ মিলি প্রতি লিটার জলে।',
              'ফসল তোলার পূর্ববর্তী সুরক্ষা সময়: ১৪ দিন।'
            ]
          },
          cultural: {
            title: 'কৃষি পরিচালনা ও প্রতিরোধ ব্যবস্থা',
            steps: [
              'ভুট্টার সাথে বরবটি বা অড়হর ডাল আন্তঃফসল হিসেবে চাষ করুন।',
              'জমির চারপাশের আগাছা পরিষ্কার রাখুন।'
            ]
          }
        },
        xai: {
          imageEvidence: [
            'পাতায় ফল আর্মিওয়ার্মের সাধারণ কাটার চিহ্ন ও জানালার মতো দাগ শনাক্ত।',
            'কেন্দ্রীয় ডগায় কাঠের গুঁড়োর মতো বিষ্ঠার উপস্থিতি।'
          ],
          environmentalFactors: '২৫-৩২° সে. উষ্ণতা এবং আর্দ্র আবহাওয়া এই পোকার দ্রুত বংশবৃদ্ধিতে সহায়ক।',
          aiDecisionConfidence: 'এআই মডেল ৯৪% আত্মবিশ্বাসের সাথে ফল আর্মিওয়ার্ম নিশ্চিত করেছে।',
          treatmentRationale: 'ক্লোরান্ট্রানিলিপ্ৰোল ডগায় প্রবেশ করে পোকাটিকে অবিলম্বে নিষ্ক্রিয় করে।'
        }
      },
      as: {
        name: 'ফল আৰ্মীৱৰ্ম কীটৰ আক্ৰমণ',
        category: 'ক্ষতিকাৰক কীটৰ আক্ৰমণ',
        type: 'পাত আৰু গুৰি বিন্ধা কৰা পলু',
        severity: 'গুৰুতৰ আক্ৰমণ (শস্যৰ বিস্তৰ ক্ষতিৰ আশংকা)',
        symptoms: 'পাতত ডাঙৰ ডাঙৰ ফটা ফুটা আৰু খিৰিকীসদৃশ স্বচ্ছ দাগ; গোমধানৰ কেন্দ্ৰীয় গুৰিত কাঠৰ গুড়িৰ দৰে পলুৰ মল জমা হোৱা।',
        immediateAction: 'গোমধানৰ গুৰিত লগে লগে শুকান বালি বা ছাই দিয়ক আৰু পলু গোমধানত সোমোৱাৰ আগতে ঔষধ স্প্ৰে কৰক।',
        subsidizedInput: 'ক্ল’ৰান্ট্ৰানিলিপ্ৰ’ল ১৮.৫% এছচি বা স্পিনেট’ৰাম ১১.৭% এছচি',
        schemeName: 'আৰকেভিৱাই ফল আৰ্মীৱৰ্ম জৰুৰীকালীন সাহায্য (৫০% ডিবিটি ৰাজসাহায্য)',
        advisory: {
          organic: {
            title: 'জৈৱিক আৰু প্ৰাকৃতিক কীট নিয়ন্ত্ৰণ',
            steps: [
              'মেটাৰাইজিয়াম বা বেউভেৰিয়া ভেঁকুৰ ৫ গ্ৰাম/লিটাৰ পানীত মিহলাই গুৰিত স্প্ৰে কৰক।',
              'গুৰিত শুকান বালি আৰু চূণ বা কাঠৰ ছাই দিলে পলু ধ্বংস হয়।',
              'পথাৰত চৰাই বহিবলৈ ১০-১৫ টা খুঁটি পুতি দিয়ক।'
            ]
          },
          chemical: {
            title: 'সঠিক ৰাসায়নিক ঔষধ (গুৰিত লক্ষ্য কৰি স্প্ৰে)',
            warning: 'স্প্ৰে নজল পোনপটীয়াকৈ গোমধানৰ মাজৰ পকটিত ধৰিব লাগিব।',
            steps: [
              'স্পিনেট’ৰাম ১১.৭% এছচি @ ০.৫ মিলি প্ৰতি লিটাৰ পানীত।',
              'বা ক্ল’ৰান্ট্ৰানিলিপ্ৰ’ল ১৮.৫% এছচি @ ০.৪ মিলি প্ৰতি লিটাৰ পানীত।',
              'সুৰক্ষা সময় (PHI): ১৪ দিন। ৰাতিপুৱা বা গধূলি স্প্ৰে কৰক।'
            ]
          },
          cultural: {
            title: 'পথাৰ পৰিষ্কাৰ আৰু ব্যৱস্থাপনা',
            steps: [
              'গোমধানৰ লগত লেচেৰা মাহ বা অৰহৰ মাহৰ মিশ্ৰিত খেতি কৰক।',
              'পথাৰৰ আলিৰ বন-বাত সদায় পৰিষ্কাৰ কৰি ৰাখক।'
            ]
          }
        },
        xai: {
          imageEvidence: [
            'পাতত খিৰিকীসদৃশ ফুটোৱা দাগ চিনাক্ত কৰা হৈছে।',
            'গোমধানৰ মাজৰ অংশত কাঠৰ গুড়িৰ দৰে মল পোৱা গৈছে।'
          ],
          environmentalFactors: '২৫-৩২° উষ্ণতা আৰু সেমেকা বতৰে পলুৰ বৃদ্ধি ত্বৰান্বিত কৰে।',
          aiDecisionConfidence: 'এআই মডেলটোৱে ৯৪% নিশ্চিতিৰে ফল আৰ্মীৱৰ্ম চিনাক্ত কৰিছে।',
          treatmentRationale: 'ক্ল’ৰান্ট্ৰানিলিপ্ৰ’লে পলুটোক তাৎক্ষণিকভাৱে অসাৰ কৰি তোলে।'
        }
      },
      pa: {
        name: 'ਫ਼ਾਲ ਆਰਮੀਵਰਮ ਦਾ ਹਮਲਾ',
        category: 'ਕੀੜੇ-ਮਕੌੜੇ ਦਾ ਹਮਲਾ',
        type: 'ਪੱਤੇ ਅਤੇ ਗੋਭ ਖਾਣ ਵਾਲੀ ਸੁੰਡੀ',
        severity: 'ਗੰਭੀਰ ਖ਼ਤਰਾ (ਮੱਕੀ ਨੂੰ ਭਾਰੀ ਨੁਕਸਾਨ)',
        symptoms: 'ਮੱਕੀ ਦੇ ਪੱਤਿਆਂ ਵਿੱਚ ਵੱਡੇ ਛੇਕ ਅਤੇ ਝਿੱਲੀ ਵਰਗੇ ਨਿਸ਼ਾਨ; ਗੋਭ (ਕੇਂਦਰੀ ਚੱਕਰ) ਵਿੱਚ ਬੂਰੇ ਵਰਗਾ ਭਾਰੀ ਮਲ ਇਕੱਠਾ ਹੋਣਾ।',
        immediateAction: 'ਗੋਭ ਵਿੱਚ ਤੁਰੰਤ ਸੁੱਕੀ ਰੇਤ ਜਾਂ ਸਵਾਹ ਪਾਓ ਅਤੇ ਸੁੰਡੀ ਦੇ ਛੱਲੀ ਵਿੱਚ ਵੜਨ ਤੋਂ ਪਹਿਲਾਂ ਸਪਰੇਅ ਕਰੋ।',
        subsidizedInput: 'ਕਲੋਰਐਂਟ੍ਰਾਨਿਲੀਪ੍ਰੋਲ 18.5% ਐਸਸੀ / ਸਪਿਨੇਟੋਰਮ 11.7% ਐਸਸੀ',
        schemeName: 'ਆਰਕੇਵੀਵਾਈ ਫ਼ਾਲ ਆਰਮੀਵਰਮ ਕੰਟਰੋਲ ਸਬਸਿਡੀ (50% ਡੀਬੀਟੀ)',
        advisory: {
          organic: {
            title: 'ਜੈਵਿਕ ਅਤੇ ਦੇਸੀ ਰੋਕਥਾਮ',
            steps: [
              'ਮੈਟਾਰਾਈਜ਼ੀਅਮ ਜਾਂ ਬਿਊਵੇਰੀਆ 5 ਗ੍ਰਾਮ ਪ੍ਰਤੀ ਲੀਟਰ ਪਾਣੀ ਵਿੱਚ ਗੋਭ ਵੱਲ ਸਪਰੇਅ ਕਰੋ।',
              'ਗੋਭ ਵਿੱਚ ਸੁੱਕੀ ਰੇਤ ਅਤੇ ਚੂਨਾ ਜਾਂ ਸਵਾਹ ਚੁਟਕੀ ਨਾਲ ਪਾਓ।',
              'ਖੇਤ ਵਿੱਚ 10-15 ਪੰਛੀਆਂ ਦੇ ਬੈਠਣ ਲਈ ਅੱਡੇ ਲਗਾਓ।'
            ]
          },
          chemical: {
            title: 'ਸਹੀ ਰਸਾਇਣਕ ਸਪਰੇਅ (ਗੋਭ ਵਿੱਚ ਸਿੱਧੀ ਸਪਰੇਅ)',
            warning: 'ਨੋਜ਼ਲ ਸਿੱਧੀ ਬੂਟੇ ਦੀ ਗੋਭ ਵੱਲ ਰੱਖੋ, ਪੱਤਿਆਂ ਉੱਤੇ ਦਵਾਈ ਬੇਕਾਰ ਜਾਂਦੀ ਹੈ।',
            steps: [
              'ਸਪਿਨੇਟੋਰਮ 11.7% ਐਸਸੀ @ 0.5 ਮਿਲੀ ਪ੍ਰਤੀ ਲੀਟਰ ਪਾਣੀ।',
              'ਜਾਂ ਕਲੋਰਐਂਟ੍ਰਾਨਿਲੀਪ੍ਰੋਲ 18.5% ਐਸਸੀ (ਕੋਰਾਜਨ) @ 0.4 ਮਿਲੀ ਪ੍ਰਤੀ ਲੀਟਰ ਪਾਣੀ।',
              'ਸੁਰੱਖਿਆ ਸਮਾਂ (PHI): 14 ਦਿਨ।'
            ]
          },
          cultural: {
            title: 'ਖੇਤ ਦੀ ਸਫ਼ਾਈ ਅਤੇ ਸੰਭਾਲ',
            steps: [
              'ਮੱਕੀ ਦੇ ਨਾਲ ਰਵਾਂਹ ਜਾਂ ਅਰਹਰ ਦੀ ਅੰਤਰ-ਫ਼ਸਲੀ ਖੇਤੀ ਕਰੋ।',
              'ਖੇਤ ਦੇ ਬੰਨ੍ਹਿਆਂ ਤੋਂ ਘਾਹ-ਫੂਸ ਸਾਫ਼ ਰੱਖੋ।'
            ]
          }
        },
        xai: {
          imageEvidence: [
            'ਪੱਤਿਆਂ ਤੇ ਜਾਲੀਦਾਰ ਕਟਾਈ ਅਤੇ ਖਿੜਕੀ ਵਰਗੇ ਨਿਸ਼ਾਨ।',
            'ਗੋਭ ਵਿੱਚ ਬੂਰੇ ਵਰਗਾ ਮਲ।'
          ],
          environmentalFactors: '25-32°C ਤਾਪਮਾਨ ਅਤੇ ਨਮੀ ਇਸ ਕੀੜੇ ਦੇ ਵਾਧੇ ਲਈ ਬਹੁਤ ਢੁੱਕਵੀਂ ਹੈ।',
          aiDecisionConfidence: 'ਸੀਐਨਐਨ ਮਾਡਲ ਨੇ 94% ਸ਼ੁੱਧਤਾ ਨਾਲ ਪਛਾਣ ਕੀਤੀ ਹੈ।',
          treatmentRationale: 'ਕਲੋਰਐਂਟ੍ਰਾਨਿਲੀਪ੍ਰੋਲ ਸੁੰਡੀ ਦੇ ਨਾੜੀ ਤੰਤਰ ਨੂੰ ਤੁਰੰਤ ਬੇਅਸਰ ਕਰ ਦਿੰਦਾ ਹੈ।'
        }
      },
      mr: {
        name: 'लष्करी अळी (फॉल आर्मीवर्म) चा प्रादुर्भाव',
        category: 'कीटक प्रादुर्भाव',
        type: 'पाने व पोंगा कुरतडणारी अळी',
        severity: 'गंभीर प्रादुर्भाव (मक्याचे मोठे नुकसान)',
        symptoms: 'पानांवर मोठ्या आकाराची अनियमित छिद्रे व पारदर्शक पडद्यासारखे डाग; पोंग्यामध्ये (whorl) लाकडाच्या भुशासारखी भरपूर विष्ठा साचणे.',
        immediateAction: 'पोंग्‍यामध्ये त्वरित बारीक वाळू किंवा लाकडाची राख टाका आणि अळी कणसात शिरण्यापूर्वी औषध फवारा.',
        subsidizedInput: 'क्लोरँट्रानिलीप्रोल १८.५% एससी / स्पिनेटोरम ११.७% एससी',
        schemeName: 'आरकेव्हीवाय लष्करी अळी नियंत्रण योजना (५०% डीबीटी अनुदान)',
        advisory: {
          organic: {
            title: 'सेंद्रिय व जैविक कीड नियंत्रण',
            steps: [
              'पोंग्‍यामध्ये मेटारायझियम किंवा बिव्हेरिया ५ ग्रॅम प्रति लिटर पाण्यात मिसळून टाका.',
              'पोंग्‍यामध्ये बारीक वाळू व चुना (९:१) किंवा राख चिमूटभर टाका ज्यामुळे लहान अळ्यांचा जीव गुदमरतो.',
              'एकरामध्ये १०-१५ पक्षी थांबे उभारा.'
            ]
          },
          chemical: {
            title: 'अचूक रासायनिक फवारणी (पोंग्‍यामध्ये थेट फवारणी)',
            warning: 'फवारणीचा नोझल थेट मक्याच्या पोंग्‍यावर धरावा; वरवरच्या फवारणीने अळी मरत नाही.',
            steps: [
              'स्पिनेटोरम ११.७% एससी @ ०.५ मिली प्रति लिटर पाणी.',
              'किंवा क्लोरँट्रानिलीप्रोल १८.५% एससी @ ०.४ मिली प्रति लिटर पाणी थेट पोंग्यात टाका.',
              'काढणीपूर्वीचा सुरक्षित कालावधी: १४ दिवस. सकाळी किंवा संध्याकाळी फवारणी करा.'
            ]
          },
          cultural: {
            title: 'शेत व्यवस्थापन व प्रतिबंधात्मक उपाय',
            steps: [
              'मक्यामध्ये चवळी किंवा तूर आंतरपीक म्हणून घ्या.',
              'बांधावरील गवत व तण काढून शेत स्वच्छ ठेवा.'
            ]
          }
        },
        xai: {
          imageEvidence: [
            'पानांवर खिडकीसारखी चाळणी झालेली दिसली.',
            'पोंग्यात लाकडाच्या भुशासारखी विष्ठा आढळली.'
          ],
          environmentalFactors: '२५-३२° से. तापमान लष्करी अळीच्या वाढीसाठी अनुकूल आहे.',
          aiDecisionConfidence: 'व्हिजन मॉडेलने ९४% खात्रीने लष्करी अळी ओळखली आहे.',
          treatmentRationale: 'क्लोरँट्रानिलीप्रोल पोंग्यात शिरून अळीचे स्नायू व मज्जासंस्था निष्क्रिय करते.'
        }
      }
    }
  },

  // PEST 3: Chilli Thrips
  chilli_thrips: {
    id: 'chilli_thrips',
    crop: 'Chilli / Pepper',
    cropKey: 'chilli',
    name: 'Thrips & Murda Leaf Curl Infestation',
    category: 'Pest Infestation',
    pathogen: 'Scirtothrips dorsalis (Thysanoptera)',
    type: 'Sucking Pest / Vector',
    typicalSeverity: 'Moderate',
    confidence: 91,
    baseRisk: 74,
    weatherSensitivity: {
      minTemp: 22,
      maxTemp: 36,
      optTempMin: 26,
      optTempMax: 33,
      minHumidity: 45,
      rainTrigger: false
    },
    symptoms: 'Upward curling of leaf margins ("boat-shaped cupping"), crinkled foliage with bronze/silvery rasped scabs on leaf undersides; flower bud drop.',
    heatmaps: [
      { x: 45, y: 40, radius: 25, label: 'Upward Curled Margin' },
      { x: 55, y: 65, radius: 20, label: 'Silvery Rasped Underside' }
    ],
    immediateAction: 'Install blue & yellow sticky traps to arrest flying populations and prevent viral transmission.',
    subsidizedPesticide: {
      name: 'Spinosad 45% SC / Blue Sticky Traps / Neem 10000 ppm',
      formulation: 'Spinosad 45% SC @ 60-75 ml/acre or Blue Traps @ 25/acre',
      centralScheme: 'MIDH Horticulture Crop Protection Subsidy (50% DBT)',
      subsidyRate: '50% Direct Reimbursement',
      approxSavings: '₹480 / acre',
      maxClaim: 'Up to 3 Acres (₹1,440 max)'
    },
    translations: {
      en: {
        name: 'Thrips & Murda Leaf Curl Infestation',
        category: 'Insect Pest Infestation',
        type: 'Sucking Pest / Vector',
        severity: 'Moderate Severity',
        symptoms: 'Upward curling of leaf margins ("boat-shaped cupping"), crinkled foliage with bronze/silvery rasped scabs on leaf undersides; flower bud drop.',
        immediateAction: 'Install blue & yellow sticky traps to arrest flying populations and prevent viral transmission.',
        subsidizedInput: 'Spinosad 45% SC & Blue IPM Sticky Traps',
        schemeName: 'MIDH Horticulture Protection Scheme (50% DBT)',
        advisory: {
          organic: {
            title: 'Biological & Organic Pest Control',
            steps: [
              'Install Blue Sticky Traps @ 20-25 traps/acre for thrips monitoring and mass trapping.',
              'Foliar spray of 5% Neem Seed Kernel Extract (NSKE) or Pongamia oil (3 ml/L water) with mild soap emulsifier.',
              'Bio-agent Verticillium lecanii @ 5 g / Litre of water during humid evenings.'
            ]
          },
          chemical: {
            title: 'Precision Chemical Prescription (Targeted Spot Spray)',
            warning: 'Rotate pesticide chemistries with different modes of action to prevent rapid resistance build-up.',
            steps: [
              'Fipronil 5% SC @ 1.5 ml / Litre of water.',
              'OR Spinosad 45% SC @ 0.3 ml / Litre of water.',
              'Pre-Harvest Interval (PHI): 7 Days. Ensure thorough coverage of leaf undersides.'
            ]
          },
          cultural: {
            title: 'Field & Cultural Prevention Practices',
            steps: [
              'Grow 2-3 border rows of maize, sorghum, or pearl millet as barrier crops to block incoming wind-borne thrips.',
              'Sprinkler irrigation at midday helps dislodge and drown thrips nymphs on foliage.'
            ]
          }
        },
        xai: {
          imageEvidence: [
            'Characteristic upward boat-shaped leaf cupping and marginal curling.',
            'Silvery scarred necrosis on abaxial epidermal tissue caused by rasping-sucking mouthparts.',
            'Stunted internodes and floral bud distortion.'
          ],
          environmentalFactors: 'Hot and dry conditions (26–33°C, 45% humidity) foster explosive thrips reproduction and suppress natural entomopathogens.',
          aiDecisionConfidence: 'Symptom pattern matches Scirtothrips dorsalis infestation markers at 91% confidence.',
          treatmentRationale: 'Fipronil / Spinosad provides fast-acting contact and ingestion knockdown with excellent translaminar movement to reach hidden pests on leaf undersides.'
        }
      },
      hi: {
        name: 'थ्रिप्स एवं पत्ती मरोड़ (मुरड़ा रोग)',
        category: 'कीट प्रकोप',
        type: 'रस चूसक कीट / वायरस वाहक',
        severity: 'मध्यम गंभीरता (तत्काल नियंत्रण जरूरी)',
        symptoms: 'मिर्च की पत्तियों के किनारे ऊपर की ओर नाव की तरह मुड़ जाते हैं ("बोट शेप्ड लीफ"); पत्तियों की निचली सतह पर चांदी या तांबे जैसे खुरदुरे चकत्ते; फूलों का झड़ना।',
        immediateAction: 'उड़ते हुए कीड़ों को रोकने के लिए तुरंत 20-25 नीले चिपचिपे ट्रैप प्रति एकड़ लगाएं।',
        subsidizedInput: 'स्पिनोसैड 45% एससी एवं नीले चिपचिपे ट्रैप',
        schemeName: 'एमआईडीएच बागवानी पौध संरक्षण सहायता (50% डीबीटी)',
        advisory: {
          organic: {
            title: 'जैविक एवं प्राकृतिक कीट नियंत्रण',
            steps: [
              'प्रति एकड़ 20-25 नीले चिपचिपे ट्रैप (Blue Sticky Traps) लगाएं।',
              'नीम बीज अर्क (एनएसकेई 5%) या नीम तेल 10,000 पीपीएम 3 मिली/लीटर पानी में मिलाकर छिड़कें।',
              'वर्टिसिलियम लेकेनाई जैविक फफूंद 5 ग्राम प्रति लीटर पानी में शाम के समय छिड़कें।'
            ]
          },
          chemical: {
            title: 'सटीक रासायनिक उपचार (पत्तियों की निचली सतह पर)',
            warning: 'कीटों में प्रतिरोधक क्षमता न बने इसलिए दवाओं को बदल-बदल कर छिड़कें।',
            steps: [
              'फिप्रोनिल 5% एससी @ 1.5 मिली प्रति लीटर पानी।',
              'या स्पिनोसैड 45% एससी @ 0.3 मिली प्रति लीटर पानी।',
              'तुड़ाई सुरक्षा समय: 7 दिन। पत्तियों के नीचे पूरा छिड़काव होना आवश्यक है।'
            ]
          },
          cultural: {
            title: 'कृषि प्रबंधन एवं रोकथाम उपाय',
            steps: [
              'खेत के चारों ओर मक्का, ज्वार या बाजरे की 2-3 कतारें अवरोधक (बैरियर फसल) के रूप में लगाएं।',
              'दोपहर के समय फव्वारा सिंचाई करने से थ्रिप्स के बच्चे पानी से धुल जाते हैं।'
            ]
          }
        },
        xai: {
          imageEvidence: [
            'पत्तियों का ऊपर की ओर नाव के आकार में मुड़ना साफ दिखा।',
            'पत्ती की निचली सतह पर खुरचे हुए चांदी जैसे धब्बे मिले।'
          ],
          environmentalFactors: 'गर्म और सूखा मौसम (26-33°C) थ्रिप्स के प्रकोप को कई गुना बढ़ा देता है।',
          aiDecisionConfidence: '91% सटीकता से थ्रिप्स कीट की पहचान की गई है।',
          treatmentRationale: 'स्पिनोसैड पत्तियों के आर-पार जाकर नीचे छिपे कीटों को तुरंत मारता है।'
        }
      },
      bn: {
        name: 'থ্রিপস ও পাতা কোঁকড়ানো (মুড়ডা রোগ)',
        category: 'ক্ষতিকারক কীট আক্রমণ',
        type: 'রস চোষক পোকা',
        severity: 'মাঝারি তীব্রতা',
        symptoms: 'লঙ্কা পাতার কিনারা নৌকার মতো উপরের দিকে কুঁকড়ে যাওয়া; পাতার নিচের পিঠে রূপালী বা তামাটে ছোপ; ফুল ঝরে পড়া।',
        immediateAction: 'পোকার আক্রমণ রুখতে জমিতে নীল আঠালো ফাঁদ লাগান।',
        subsidizedInput: 'স্পিনোস্যাড ৪৫% এসসি ও নীল আঠালো ফাঁদ',
        schemeName: 'এমআইডিএইচ উদ্যানপালন ফসল রক্ষা প্রকল্প (৫০% ডিবিটি)',
        advisory: {
          organic: {
            title: 'জৈব ও প্রাকৃতিক দমন ব্যবস্থা',
            steps: [
              'প্রতি একরে ২০-২৫টি নীল আঠালো ফাঁদ লাগান।',
              '৫% নিম বীজের নির্যাস বা নিম তেল ৩ মিলি/লিটার জলে স্প্রে করুন।',
              'ভার্টিসিলিয়াম লেকানি ৫ গ্রাম/লিটার জলে বিকেলে স্প্রে করুন।'
            ]
          },
          chemical: {
            title: 'সঠিক রাসায়নিক প্রয়োগ',
            warning: 'কীটনাশক বারবার অদলবদল করে ব্যবহার করুন।',
            steps: [
              'ফিপ্রোনিল ৫% এসসি @ ১.৫ মিলি প্রতি লিটার জলে।',
              'অথবা স্পিনোস্যাড ৪৫% এসসি @ ০.৩ মিলি প্রতি লিটার জলে।',
              'সুরক্ষা সময়: ৭ দিন। পাতার নিচে ভালো করে স্প্রে করুন।'
            ]
          },
          cultural: {
            title: 'কৃষি পরিচালনা ও প্রতিরোধ ব্যবস্থা',
            steps: [
              'জমির সীমানায় ভুট্টা বা জোয়ারের ২-৩ সারি বাধা হিসেবে চাষ করুন।'
            ]
          }
        },
        xai: {
          imageEvidence: ['নৌকার মতো উপরের দিকে পাতা কুঁকড়ে যাওয়ার লক্ষণ স্পষ্ট।'],
          environmentalFactors: 'শুষ্ক ও উষ্ণ আবহাওয়ায় থ্রিপসের প্রকোপ বাড়ে।',
          aiDecisionConfidence: '৯১% আত্মবিশ্বাসের সাথে থ্রিপস আক্রমণ শনাক্ত।',
          treatmentRationale: 'স্পিনোস্যাড পাতার নিচে লুকানো পোকাকে দ্রুত ধ্বংস করে।'
        }
      },
      as: {
        name: 'থ্ৰিপছ আৰু পাত কেঁকোৰা ৰোগ',
        category: 'ক্ষতিকাৰক কীটৰ আক্ৰমণ',
        type: 'ৰস শুহি খোৱা কীট',
        severity: 'মধ্যম মাত্ৰাৰ আক্ৰমণ',
        symptoms: 'জলকীয়াৰ পাতৰ দাঁতিবোৰ নাওৰ দৰে ওপৰলৈ কোঁচ খাই পৰে; পাতৰ তলফালে ৰূপালী বা তামবৰণীয়া দাগ; ফুল সৰি পৰে।',
        immediateAction: 'উৰি থকা কীট ধৰিবলৈ লগে লগে নীলা আঠাযুক্ত ট্ৰেপ লগাওক।',
        subsidizedInput: 'স্পিন’ছেড ৪৫% এছচি আৰু ব্লু ষ্টিকি ট্ৰেপ',
        schemeName: 'এমআইডিএইচ উদ্যান শস্য সংৰক্ষণ ৰাজসাহায্য (৫০% ডিবিটি)',
        advisory: {
          organic: {
            title: 'জৈৱিক আৰু প্ৰাকৃতিক কীট নিয়ন্ত্ৰণ',
            steps: [
              'প্ৰতি একৰত ২০-২৫ টা নীলা আঠাযুক্ত ট্ৰেপ লগাওক।',
              'নিম তেল ৩ মিলি প্ৰতি লিটাৰ পানীত মিহলাই স্প্ৰে কৰক।',
              'ভাৰ্টিচিলিয়াম লেকানি জৈৱিক ভেঁকুৰ ৫ গ্ৰাম/লিটাৰ পানীত স্প্ৰে কৰক।'
            ]
          },
          chemical: {
            title: 'সঠিক ৰাসায়নিক ঔষধ',
            warning: 'ঔষধ সঘনাই সলনি কৰি ব্যৱহাৰ কৰক।',
            steps: [
              'ফিপ্ৰ’নিল ৫% এছচি @ ১.৫ মিলি প্ৰতি লিটাৰ পানীত।',
              'বা স্পিন’ছেড ৪৫% এছচি @ ০.৩ মিলি প্ৰতি লিটাৰ পানীত।',
              'সুৰক্ষা সময়: ৭ দিন। পাতৰ তলফালে ভালদৰে ঔষধ স্প্ৰে কৰিব।'
            ]
          },
          cultural: {
            title: 'পথাৰ পৰিষ্কাৰ আৰু ব্যৱস্থাপনা',
            steps: [
              'পথাৰৰ চাৰিওফালে গোমধান বা জোৱাৰৰ ২-৩ টা শাৰী ৰোপণ কৰক।'
            ]
          }
        },
        xai: {
          imageEvidence: ['পাত ওপৰলৈ নাওৰ দৰে কোঁচ খোৱা স্পষ্ট দেখা গৈছে।'],
          environmentalFactors: 'গৰম আৰু শুকান বতৰত থ্ৰিপছৰ বৃদ্ধি দ্ৰুত হয়।',
          aiDecisionConfidence: '৯১% নিশ্চিতিৰে থ্ৰিপছ পোকা চিনাক্ত।',
          treatmentRationale: 'স্পিন’ছেডে পাতৰ তলত লুকাই থকা পোকবোৰক সহজে বিনাশ কৰে।'
        }
      },
      pa: {
        name: 'ਥ੍ਰਿਪਸ ਅਤੇ ਪੱਤਾ ਮਰੋੜ ਰੋਗ',
        category: 'ਕੀੜੇ-ਮਕੌੜੇ ਦਾ ਹਮਲਾ',
        type: 'ਰਸ ਚੂਸਣ ਵਾਲਾ ਕੀੜਾ',
        severity: 'ਮੱਧਮ ਖ਼ਤਰਾ',
        symptoms: 'ਮਿਰਚ ਦੇ ਪੱਤੇ ਉੱਪਰ ਵੱਲ ਕਿਸ਼ਤੀ ਵਾਂਗ ਮੁੜ ਜਾਂਦੇ ਹਨ; ਪੱਤਿਆਂ ਦੇ ਹੇਠਾਂ ਚਾਂਦੀ ਰੰਗੇ ਦਾਗ਼; ਫੁੱਲ ਡਿੱਗਣਾ।',
        immediateAction: 'ਉੱਡਦੇ ਕੀੜੇ ਫੜਨ ਲਈ 20-25 ਨੀਲੇ ਚਿਪਚਿਪੇ ਟਰੈਪ ਪ੍ਰਤੀ ਏਕੜ ਲਗਾਓ।',
        subsidizedInput: 'ਸਪਿਨੋਸੈਡ 45% ਐਸਸੀ ਅਤੇ ਨੀਲੇ ਚਿਪਚਿਪੇ ਟਰੈਪ',
        schemeName: 'ਐਮਆਈਡੀਐਚ ਬਾਗ਼ਬਾਨੀ ਫ਼ਸਲ ਸੁਰੱਖਿਆ ਸਬਸਿਡੀ (50% ਡੀਬੀਟੀ)',
        advisory: {
          organic: {
            title: 'ਜੈਵਿਕ ਅਤੇ ਦੇਸੀ ਰੋਕਥਾਮ',
            steps: [
              'ਪ੍ਰਤੀ ਏਕੜ 20-25 ਨੀਲੇ ਚਿਪਚਿਪੇ ਟਰੈਪ ਲਗਾਓ।',
              'ਨਿੰਮ ਦਾ ਤੇਲ 3 ਮਿਲੀ ਪ੍ਰਤੀ ਲੀਟਰ ਪਾਣੀ ਵਿੱਚ ਸਪਰੇਅ ਕਰੋ।'
            ]
          },
          chemical: {
            title: 'ਸਹੀ ਰਸਾਇਣਕ ਸਪਰੇਅ',
            warning: 'ਦਵਾਈਆਂ ਬਦਲ-ਬਦਲ ਕੇ ਸਪਰੇਅ ਕਰੋ।',
            steps: [
              'ਫ਼ਿਪਰੋਨਿਲ 5% ਐਸਸੀ @ 1.5 ਮਿਲੀ ਪ੍ਰਤੀ ਲੀਟਰ ਪਾਣੀ।',
              'ਜਾਂ ਸਪਿਨੋਸੈਡ 45% ਐਸਸੀ @ 0.3 ਮਿਲੀ ਪ੍ਰਤੀ ਲੀਟਰ ਪਾਣੀ।',
              'ਸੁਰੱਖਿਆ ਸਮਾਂ: 7 ਦਿਨ। ਪੱਤਿਆਂ ਦੇ ਹੇਠਾਂ ਚੰਗੀ ਤਰ੍ਹਾਂ ਸਪਰੇਅ ਕਰੋ।'
            ]
          },
          cultural: {
            title: 'ਖੇਤ ਦੀ ਸਫ਼ਾਈ ਅਤੇ ਸੰਭਾਲ',
            steps: ['ਖੇਤ ਦੇ ਆਲੇ-ਦੁਆਲੇ ਮੱਕੀ ਜਾਂ ਬਾਜਰੇ ਦੀਆਂ 2-3 ਲਾਈਨਾਂ ਲਗਾਓ।']
          }
        },
        xai: {
          imageEvidence: ['ਪੱਤਿਆਂ ਦਾ ਕਿਸ਼ਤੀ ਵਾਂਗ ਮੁੜਨਾ ਸਾਫ਼ ਦਿਖਾਈ ਦਿੱਤਾ।'],
          environmentalFactors: 'ਗਰਮ ਅਤੇ ਖ਼ੁਸ਼ਕ ਮੌਸਮ ਵਿੱਚ ਥ੍ਰਿਪਸ ਤੇਜ਼ੀ ਨਾਲ ਵਧਦਾ ਹੈ।',
          aiDecisionConfidence: '91% ਸ਼ੁੱਧਤਾ ਨਾਲ ਥ੍ਰਿਪਸ ਦੀ ਪਛਾਣ ਕੀਤੀ ਗਈ।',
          treatmentRationale: 'ਸਪਿਨੋਸੈਡ ਪੱਤਿਆਂ ਦੇ ਹੇਠਲੇ ਕੀੜਿਆਂ ਨੂੰ ਤੁਰੰਤ ਮਾਰਦਾ ਹੈ।'
        }
      },
      mr: {
        name: 'फुलकिडे (थ्रिप्स) व चुरडा-मुरडा',
        category: 'कीटक प्रादुर्भाव',
        type: 'रसशोषक कीटक / विषाणू वाहक',
        severity: 'मध्यम तीव्रता',
        symptoms: 'मिरचीची पाने वरच्या बाजूला बोटीसारखी वळतात ("बोट शेप"); पानाच्या मागच्या बाजूला चंदेरी ओरखडे; फुलगळ होणे.',
        immediateAction: 'उडणारे किडे पकडण्यासाठी एकरी २०-२५ निळे चिकट सापळे लावा.',
        subsidizedInput: 'स्पिनोसॅड ४५% एससी व निळे चिकट सापळे',
        schemeName: 'एमआयडीएच फलोत्पादन पीक संरक्षण अनुदान (५०% डीबीटी)',
        advisory: {
          organic: {
            title: 'सेंद्रिय व जैविक कीड नियंत्रण',
            steps: [
              'एकरी २०-२५ निळे चिकट सापळे लावा.',
              '५% निंबोळी अर्क किंवा नीम तेल ३ मिली/लिटर पाण्यात फवारा.'
            ]
          },
          chemical: {
            title: 'अचूक रासायनिक फवारणी',
            warning: 'कीटकांमध्ये प्रतिकारशक्ती येऊ नये म्हणून कीटकनाशके आलटून-पालटून वापरा.',
            steps: [
              'फिप्रोनिल ५% एससी @ १.५ मिली प्रति लिटर पाणी.',
              'किंवा स्पिनोसॅड ४५% एससी @ ०.३ मिली प्रति लिटर पाणी.',
              'काढणीपूर्वीचा कालावधी: ७ दिवस. पानाच्या खालच्या भागावर नीट फवारा.'
            ]
          },
          cultural: {
            title: 'शेत व्यवस्थापन व प्रतिबंधात्मक उपाय',
            steps: ['शेताच्या चारी बाजूंना मका किंवा ज्वारीचे २-३ ओळींचे कुंपण लावा.']
          }
        },
        xai: {
          imageEvidence: ['पाने वरच्या बाजूला बोटीसारखी वळल्याचे स्पष्ट आढळले.'],
          environmentalFactors: 'उष्ण व कोरड्या हवामानात थ्रिप्सचा प्रादुर्भाव वेगाने वाढतो.',
          aiDecisionConfidence: '९१% अचूकतेने फुलकिड्यांची ओळख पटली.',
          treatmentRationale: 'स्पिनोसॅड पानांच्या आरपार जाऊन खाली लपलेल्या किड्यांना मारते.'
        }
      }
    }
  },

  // DISEASE 1: Tomato Late Blight
  tomato_late_blight: {
    id: 'tomato_late_blight',
    crop: 'Tomato',
    cropKey: 'tomato',
    name: 'Late Blight Disease',
    category: 'Crop Disease',
    pathogen: 'Phytophthora infestans (Oomycete)',
    type: 'Water-Mold Fungal Pathogen',
    typicalSeverity: 'Severe',
    confidence: 96,
    baseRisk: 85,
    weatherSensitivity: {
      minTemp: 12,
      maxTemp: 24,
      optTempMin: 15,
      optTempMax: 21,
      minHumidity: 78,
      rainTrigger: true
    },
    symptoms: 'Water-soaked irregular pale green/brown necrotic lesions on foliage with white downy fungal sporulation on leaf undersides during moist mornings; rapid vine rot.',
    heatmaps: [
      { x: 38, y: 42, radius: 28, label: 'Active Spore Colony' },
      { x: 65, y: 55, radius: 22, label: 'Necrotic Foliar Lesion' }
    ],
    immediateAction: 'Halt all overhead sprinkling, rogue out severely blighted lower leaves, and apply targeted curative fungicide before nightfall.',
    subsidizedPesticide: {
      name: 'Mandipropamid 23.4% SC / Cymoxanil + Mancozeb 64% WP',
      formulation: 'Mandipropamid 23.4% SC @ 160 ml/acre or Cymoxanil + Mancozeb @ 600 g/acre',
      centralScheme: 'MIDH Vegetable Crop Protection Scheme (50% Direct DBT)',
      subsidyRate: '50% Direct Reimbursement',
      approxSavings: '₹420 / acre',
      maxClaim: 'Up to 4 Acres (₹1,680 max)'
    },
    translations: {
      en: {
        name: 'Tomato Late Blight Disease',
        category: 'Crop Pathology Disease',
        type: 'Water-Mold Fungal Pathogen',
        severity: 'Severe Infestation / Outbreak',
        symptoms: 'Water-soaked irregular pale green/brown necrotic lesions on foliage with white downy fungal sporulation on leaf undersides during moist mornings; rapid vine rot.',
        immediateAction: 'Halt all overhead sprinkling, rogue out severely blighted lower leaves, and apply targeted curative fungicide before nightfall.',
        subsidizedInput: 'Mandipropamid 23.4% SC & Cymoxanil + Mancozeb',
        schemeName: 'MIDH Vegetable Protection Scheme (50% DBT)',
        advisory: {
          organic: {
            title: 'Biological & Organic Interventions',
            steps: [
              'Foliar spray with Trichoderma viride (10g/L water) or Bacillus subtilis early in the morning.',
              'Spray 1% Bordeaux mixture (Copper Sulfate + Slaked Lime) or Copper Hydroxide (2.5 g/L) for protective barrier.',
              'Apply 5% Neem seed kernel extract (NSKE) as a foliar botanical shield.'
            ]
          },
          chemical: {
            title: 'Precision Chemical Prescription (Targeted Spot Spray)',
            warning: 'Avoid blanket spraying! Apply ONLY to affected rows to prevent resistance and chemical runoff.',
            steps: [
              'Mandipropamid 23.4% SC @ 0.8 ml / Litre of water (translaminar systemic protection).',
              'OR Cymoxanil 8% + Mancozeb 64% WP @ 2.5 g / Litre of clean water.',
              'Pre-Harvest Interval (PHI): 3 Days. Wear protective gloves and mask during spray.'
            ]
          },
          cultural: {
            title: 'Field & Cultural Sanitation Practices',
            steps: [
              'Immediately prune and burn or deeply bury severely blighted lower canopy foliage.',
              'Avoid overhead sprinkler irrigation; switch strictly to ground drip lines to keep foliage dry.',
              'Improve furrow drainage to eliminate stagnant water puddles near plant root zones.'
            ]
          }
        },
        xai: {
          imageEvidence: [
            'Water-soaked, rapidly expanding dark brown necrotic leaf lesions.',
            'White downy zoosporangia mildew visible on abaxial leaf surfaces.',
            'Chlorotic yellow halo surrounding active infection margins.'
          ],
          environmentalFactors: 'High relative humidity (>80%) combined with cool temperatures (15–21°C) create an ideal microclimate for zoospore germination.',
          aiDecisionConfidence: 'Vision classifier matched Phytophthora infestans lesion texture and halo morphology with 96% confidence.',
          treatmentRationale: 'Mandipropamid specifically inhibits phospholipid biosynthesis in Oomycetes with strong rainfastness, arresting fungal mycelial growth within leaf tissues.'
        }
      },
      hi: {
        name: 'टमाटर का पिछेता झुलसा (लेट ब्लाइट)',
        category: 'फसल फफूंद रोग',
        type: 'जल-जनित फफूंद रोगाणु',
        severity: 'गंभीर रोग (फसल नष्ट होने का खतरा)',
        symptoms: 'पत्तियों पर पानी से भीगे भूरे-काले अनियमित धब्बे; सुबह के समय पत्ती के नीचे सफेद रुई जैसी फफूंद दिखना; तने और फलों का तेजी से सड़ना।',
        immediateAction: 'फव्वारा सिंचाई तुरंत रोकें, गंभीर रूप से सड़ी पत्तियों को तोड़कर नष्ट करें और शाम से पहले कवकनाशी का छिड़काव करें।',
        subsidizedInput: 'मैंडीप्रोपामिड 23.4% एससी / साइमोक्सानिल + मैंकोजेब',
        schemeName: 'एमआईडीएच सब्जी फसल संरक्षण योजना (50% डीबीटी अनुदान)',
        advisory: {
          organic: {
            title: 'जैविक एवं प्राकृतिक कवक नियंत्रण',
            steps: [
              'ट्राइकोडर्मा विरिडी 10 ग्राम प्रति लीटर पानी में मिलाकर सुबह के समय पत्तियों पर छिड़कें।',
              '1% बोर्डो मिश्रण या कॉपर ऑक्सीक्लोराइड 2.5 ग्राम प्रति लीटर पानी का सुरक्षात्मक छिड़काव करें।'
            ]
          },
          chemical: {
            title: 'सटीक रासायनिक उपचार (फफूंदनाशक छिड़काव)',
            warning: 'पूरे खेत में अंधाधुंध छिड़काव न करें, रोगग्रस्त क्यारियों पर लक्षित छिड़काव करें।',
            steps: [
              'मैंडीप्रोपामिड 23.4% एससी @ 0.8 मिली प्रति लीटर पानी।',
              'या साइमोक्सानिल 8% + मैंकोजेब 64% डब्लूपी @ 2.5 ग्राम प्रति लीटर पानी।',
              'तुड़ाई पूर्व सुरक्षा समय (PHI): 3 दिन। दस्ताने व मास्क पहनकर छिड़काव करें।'
            ]
          },
          cultural: {
            title: 'कृषि स्वच्छता एवं जल प्रबंधन',
            steps: [
              'निचली सड़ी हुई पत्तियों को तुरंत काटकर खेत से दूर जलाएं या गड्ढे में गाड़ दें।',
              'ऊपर से पानी देने के बजाय ड्रिप (टपक) सिंचाई करें ताकि पत्तियां सूखी रहें।',
              'खेत में जलभराव न होने दें, जल निकासी नालियां साफ रखें।'
            ]
          }
        },
        xai: {
          imageEvidence: [
            'पत्तियों पर पानी से भीगे अनियमित काले-भूरे धब्बे मिले।',
            'निचली सतह पर सफेद फफूंद बीजाणु उपस्थित।'
          ],
          environmentalFactors: '15-21°C तापमान और 80% से अधिक आर्द्रता लेट ब्लाइट के लिए अत्यंत अनुकूल है।',
          aiDecisionConfidence: '96% सटीकता से लेट ब्लाइट रोग की पुष्टि हुई है।',
          treatmentRationale: 'मैंडीप्रोपामिड फफूंद की कोशिका भित्ति को नष्ट कर रोग के प्रसार को तुरंत थाम देता है।'
        }
      },
      bn: {
        name: 'টমেটোর নাবী ধসা (লেট ব্লাইট)',
        category: 'ফসলের ছত্রাকজনিত রোগ',
        type: 'ছত্রাক জীবাণু',
        severity: 'মারাত্মক রোগ (গাছ দ্রুত শুকিয়ে যায়)',
        symptoms: 'পাতায় জলছাপের মতো কালচে-বাদামি অনিয়মিত দাগ; সকালে পাতার নিচে সাদা তুলার মতো ছত্রাকের বৃদ্ধি; ফল দ্রুত পচে নষ্ট হয়।',
        immediateAction: 'উপর থেকে সেচ বন্ধ করুন এবং আক্রান্ত পাতা অপসারণ করে ছত্রাকনাশক স্প্রে করুন।',
        subsidizedInput: 'ম্যান্ডিপ্রোপামিড ২৩.৪% এসসি / সাইমোক্সানিল + ম্যানকোজেব',
        schemeName: 'এমআইডিএইচ সবজি সুরক্ষা প্রকল্প (৫০% ডিবিটি অনুদান)',
        advisory: {
          organic: {
            title: 'জৈব ছত্রাক দমন পদ্ধতি',
            steps: [
              'ট্রাইকোডার্মা ভিরিডি ১০ গ্রাম/লিটার জলে গুলে সকালে স্প্রে করুন।',
              '১% বোর্দো মিশ্রণ বা কপার অক্সিক্লোরাইড ২.৫ গ্রাম/লিটার স্প্রে করুন।'
            ]
          },
          chemical: {
            title: 'সঠিক রাসায়নিক ছত্রাকনাশক প্রয়োগ',
            warning: 'লক্ষণ দেখা মাত্রই অবিলম্বে স্প্রে করতে হবে।',
            steps: [
              'ম্যান্ডিপ্রোপামিড ২৩.৪% এসসি @ ০.৮ মিলি প্রতি লিটার জলে।',
              'অথবা সাইমোক্সানিল ৮% + ম্যানকোজেব ৬৪% ডব্লিউপি @ ২.৫ গ্রাম প্রতি লিটার জলে।'
            ]
          },
          cultural: {
            title: 'কৃষি পরিচালনা ও নিষ্কাশন',
            steps: [
              'আক্রান্ত পাতা ছিঁড়ে পুড়িয়ে ফেলুন।',
              'গাছের গোড়ায় ড্রিপ সেচ দিন যাতে পাতা না ভেজে।'
            ]
          }
        },
        xai: {
          imageEvidence: ['পাতায় জলভেজা কালো দাগ ও সাদা ছত্রাকের রেণু শনাক্ত।'],
          environmentalFactors: '১৫-২১° সে. তাপমাত্রা ও উচ্চ আর্দ্রতায় এই রোগ দ্রুত ছড়ায়।',
          aiDecisionConfidence: '৯৬% নিখুঁততার সাথে লেট ব্লাইট শনাক্ত।',
          treatmentRationale: 'ম্যান্ডিপ্রোপামিড ছত্রাকের বিস্তার অভ্যন্তরীণভাবে বন্ধ করে।'
        }
      },
      as: {
        name: 'বিলাহীৰ শেহতীয়া ব্লাইট (লেট ব্লাইট)',
        category: 'শস্যৰ ভেঁকুৰজনিত ৰোগ',
        type: 'ভেঁকুৰ বীজাণু',
        severity: 'গুৰুতৰ ৰোগ',
        symptoms: 'পাতত পানী লগাৰ দৰে ক’লা-বাদামী দাগ; ৰাতিপুৱা পাতৰ তলত বগা কপাহৰ দৰে ভেঁকুৰ দেখা পোৱা যায়; ফল সোনকালে পচি যায়।',
        immediateAction: 'ওপৰৰ পৰা পানী দিয়া বন্ধ কৰক, আক্ৰান্ত অংশ আঁতৰাই ভেঁকুৰনাশক স্প্ৰে কৰক।',
        subsidizedInput: 'মেণ্ডিপ্ৰ’পামিড ২৩.৪% এছচি / ছাইম’ক্সানিল + মেনক’জেব',
        schemeName: 'এমআইডিএইচ শাক-পাচলি সুৰক্ষা সাহায্য (৫০% ডিবিটি)',
        advisory: {
          organic: {
            title: 'জৈৱিক ভেঁকুৰ নিয়ন্ত্ৰণ',
            steps: [
              'ট্ৰাইক’ডাৰ্মা ১০ গ্ৰাম/লিটাৰ পানীত স্প্ৰে কৰক।',
              '১% বৰ্দো মিশ্ৰণ বা কপাৰ অক্সিক্ল’ৰাইড ২.৫ গ্ৰাম/লিটাৰ পানীত স্প্ৰে কৰক।'
            ]
          },
          chemical: {
            title: 'সঠিক ৰাসায়নিক ঔষধ',
            warning: 'ৰোগ আৰম্ভ হোৱাৰ লগে লগে স্প্ৰে কৰক।',
            steps: [
              'মেণ্ডিপ্ৰ’পামিড ২৩.৪% এছচি @ ০.৮ মিলি প্ৰতি লিটাৰ পানীত।',
              'বা ছাইম’ক্সানিল ৮% + মেনক’জেব ৬৪% ডব্লিউপি @ ২.৫ গ্ৰাম প্ৰতি লিটাৰ পানীত।'
            ]
          },
          cultural: {
            title: 'পথাৰ পৰিষ্কাৰ আৰু ব্যৱস্থাপনা',
            steps: ['আক্ৰান্ত পাত আঁতৰাই পুতি পেলাওক। পথাৰত পানী জমা হ’বলৈ নিদিব।']
          }
        },
        xai: {
          imageEvidence: ['পাতত ক’লা-বাদামী ব্লাইটৰ দাগ স্পষ্ট।'],
          environmentalFactors: '১৫-২১° চে. উষ্ণতা আৰু সেমেকা বতৰে এই ৰোগ বঢ়ায়।',
          aiDecisionConfidence: '৯৬% নিশ্চিতিৰে লেট ব্লাইট চিনাক্ত।',
          treatmentRationale: 'মেণ্ডিপ্ৰ’পামিডে শস্যৰ কোষত ভেঁকুৰৰ বৃদ্ধি স্তব্ধ কৰে।'
        }
      },
      pa: {
        name: 'ਟਮਾਟਰ ਦਾ ਪਿਛੇਤਾ ਝੁਲਸ ਰੋਗ (ਲੇਟ ਬਲਾਈਟ)',
        category: 'ਫ਼ਸਲੀ ਉੱਲੀ ਰੋਗ',
        type: 'ਉੱਲੀ ਰੋਗਾਣੂ',
        severity: 'ਗੰਭੀਰ ਰੋਗ',
        symptoms: 'ਪੱਤਿਆਂ ਤੇ ਪਾਣੀ ਭਿੱਜੇ ਕਾਲੇ-ਭੂਰੇ ਦਾਗ਼; ਸਵੇਰੇ ਪੱਤੇ ਦੇ ਹੇਠਾਂ ਚਿੱਟੀ ਉੱਲੀ; ਫਲ ਗਲਣਾ।',
        immediateAction: 'ਫੁਹਾਰਾ ਸਿੰਜਾਈ ਬੰਦ ਕਰੋ ਅਤੇ ਤੁਰੰਤ ਉੱਲੀਨਾਸ਼ਕ ਦਾ ਛਿੜਕਾਅ ਕਰੋ।',
        subsidizedInput: 'ਮੈਂਡੀਪ੍ਰੋਪਾਮਿਡ 23.4% ਐਸਸੀ / ਸਾਈਮੋਕਸਾਨਿਲ + ਮੈਨਕੋਜ਼ੈਬ',
        schemeName: 'ਐਮਆਈਡੀਐਚ ਸਬਜ਼ੀ ਫ਼ਸਲ ਸੁਰੱਖਿਆ ਗ੍ਰਾਂਟ (50% ਡੀਬੀਟੀ)',
        advisory: {
          organic: {
            title: 'ਜੈਵਿਕ ਰੋਕਥਾਮ',
            steps: ['ਟ੍ਰਾਈਕੋਡਰਮਾ 10 ਗ੍ਰਾਮ ਪ੍ਰਤੀ ਲੀਟਰ ਪਾਣੀ ਵਿੱਚ ਸਵੇਰੇ ਸਪਰੇਅ ਕਰੋ।']
          },
          chemical: {
            title: 'ਸਹੀ ਰਸਾਇਣਕ ਉੱਲੀਨਾਸ਼ਕ',
            warning: 'ਰੋਗ ਦਿਸਦੇ ਹੀ ਤੁਰੰਤ ਸਪਰੇਅ ਕਰੋ।',
            steps: [
              'ਮੈਂਡੀਪ੍ਰੋਪਾਮਿਡ 23.4% ਐਸਸੀ @ 0.8 ਮਿਲੀ ਪ੍ਰਤੀ ਲੀਟਰ ਪਾਣੀ।',
              'ਜਾਂ ਸਾਈਮੋਕਸਾਨਿਲ + ਮੈਨਕੋਜ਼ੈਬ @ 2.5 ਗ੍ਰਾਮ ਪ੍ਰਤੀ ਲੀਟਰ ਪਾਣੀ।'
            ]
          },
          cultural: {
            title: 'ਖੇਤ ਦੀ ਸਫ਼ਾਈ ਅਤੇ ਸੰਭਾਲ',
            steps: ['ਨੁਕਸਾਨੇ ਪੱਤੇ ਕੱਟ ਕੇ ਨਸ਼ਟ ਕਰੋ। ਖੇਤ ਵਿੱਚ ਪਾਣੀ ਖੜ੍ਹਾ ਨਾ ਹੋਣ ਦਿਓ।']
          }
        },
        xai: {
          imageEvidence: ['ਪੱਤਿਆਂ ਤੇ ਪਾਣੀ ਭਿੱਜੇ ਕਾਲੇ ਦਾਗ਼ ਸਾਫ਼ ਦਿਖਾਈ ਦਿੱਤੇ।'],
          environmentalFactors: '15-21°C ਤਾਪਮਾਨ ਅਤੇ ਨਮੀ ਉੱਲੀ ਲਈ ਬਹੁਤ ਅਨੁਕੂਲ ਹੈ।',
          aiDecisionConfidence: '96% ਸ਼ੁੱਧਤਾ ਨਾਲ ਪਛਾਣ ਕੀਤੀ ਗਈ।',
          treatmentRationale: 'ਮੈਂਡੀਪ੍ਰੋਪਾਮਿਡ ਉੱਲੀ ਦੇ ਵਾਧੇ ਨੂੰ ਤੁਰੰਤ ਰੋਕਦਾ ਹੈ।'
        }
      },
      mr: {
        name: 'टोमॅटोवरील उशिरा येणारा करपा (लेट ब्लाइट)',
        category: 'पीक बुरशीजन्य रोग',
        type: 'पाणी-वाहक बुरशी',
        severity: 'गंभीर रोग (पीक नष्ट होण्याचा धोका)',
        symptoms: 'पानांवर पाणी ओघळल्यासारखे काळसर तपकिरी डाग; सकाळी पानाच्या खाली पांढरी बुरशी; फळे सडणे.',
        immediateAction: 'तुषार सिंचन त्वरित थांबवा, प्रादुर्भाव झालेली पाने काढून नष्ट करा आणि बुरशीनाशक फवारा.',
        subsidizedInput: 'मँडिप्रोपामिड २३.४% एससी / सायमोक्सॅनिल + मॅन्कोझेब',
        schemeName: 'एमआयडीएच भाजीपाला पीक संरक्षण योजना (५०% डीबीटी)',
        advisory: {
          organic: {
            title: 'सेंद्रिय व जैविक बुरशी नियंत्रण',
            steps: ['ट्रायकोडर्मा व्हिरीडी १० ग्रॅम/लिटर पाण्यात सकाळी फवारा.']
          },
          chemical: {
            title: 'अचूक रासायनिक बुरशीनाशक फवारणी',
            warning: 'रोग दिसताच तात्काळ फवारणी करावी.',
            steps: [
              'मँडिप्रोपामिड २३.४% एससी @ ०.८ मिली प्रति लिटर पाणी.',
              'किंवा सायमोक्सॅनिल ८% + मॅन्कोझेब ६४% डब्ल्यूपी @ २.५ ग्रॅम प्रति लिटर पाणी.'
            ]
          },
          cultural: {
            title: 'शेत स्वच्छता व निचरा',
            steps: ['खालची सडलेली पाने काढून जमिनीत गाडा. ठिबक सिंचनाचा वापर करा.']
          }
        },
        xai: {
          imageEvidence: ['पानांवर काळे पाणावलेले डाग व बुरशी आढळली.'],
          environmentalFactors: '१५-२१° से. तापमान व जास्त आर्द्रता करपा वाढवते.',
          aiDecisionConfidence: '९६% खात्रीने लेट ब्लाइट ओळखला गेला.',
          treatmentRationale: 'मँडिप्रोपामिड बुरशीची वाढ पानांमध्ये आतून रोखते.'
        }
      }
    }
  },

  // DISEASE 2: Rice Blast
  rice_blast: {
    id: 'rice_blast',
    crop: 'Rice (Paddy)',
    cropKey: 'rice',
    name: 'Rice Blast Disease',
    category: 'Crop Disease',
    pathogen: 'Magnaporthe oryzae',
    type: 'Air-Borne Fungal Pathogen',
    typicalSeverity: 'Severe',
    confidence: 93,
    baseRisk: 78,
    weatherSensitivity: {
      minTemp: 20,
      maxTemp: 32,
      optTempMin: 22,
      optTempMax: 28,
      minHumidity: 85,
      rainTrigger: true
    },
    symptoms: 'Spindle-shaped elliptical lesions with grayish-white centers and dark brown reddish borders on leaves, collar, and panicle neck node.',
    heatmaps: [
      { x: 45, y: 35, radius: 25, label: 'Spindle Blast Lesion' },
      { x: 52, y: 70, radius: 20, label: 'Collar Infection Ring' }
    ],
    immediateAction: 'Regulate field water depth, suspend further chemical nitrogen top-dressing, and apply systemic triazole spray at boot leaf stage.',
    subsidizedPesticide: {
      name: 'Tricyclazole 75% WP / Azoxystrobin + Difenoconazole',
      formulation: 'Tricyclazole 75% WP (Beam) @ 120-150 g/acre',
      centralScheme: 'National Food Security Mission (NFSM-Rice) Disease Control',
      subsidyRate: '50% Direct Benefit Transfer (DBT)',
      approxSavings: '₹380 / acre',
      maxClaim: 'Up to 5 Acres (₹1,900 max)'
    },
    translations: {
      en: {
        name: 'Rice Blast Disease',
        category: 'Crop Pathology Disease',
        type: 'Air-Borne Fungal Pathogen',
        severity: 'Severe Infestation / Outbreak',
        symptoms: 'Spindle-shaped elliptical lesions with grayish-white centers and dark brown reddish borders on leaves, collar, and panicle neck node.',
        immediateAction: 'Regulate field water depth, suspend further chemical nitrogen top-dressing, and apply systemic triazole spray at boot leaf stage.',
        subsidizedInput: 'Tricyclazole 75% WP (Beam) & Azoxystrobin',
        schemeName: 'NFSM Paddy Disease Control Subsidy (50% DBT)',
        advisory: {
          organic: {
            title: 'Biological Interventions',
            steps: [
              'Pseudomonas fluorescens (liquid 2x10^8 cfu) @ 5 ml / Litre of water foliar spray at tillering and panicle initiation.',
              'Apply silicon fertilizer (calcium silicate slag) @ 100 kg/acre to strengthen cell walls.'
            ]
          },
          chemical: {
            title: 'Precision Chemical Prescription',
            warning: 'Apply immediately upon noticing diamond-spindle lesions on top canopy leaves.',
            steps: [
              'Tricyclazole 75% WP @ 0.6 g / Litre of water (prevents melanin biosynthesis in appressoria).',
              'OR Azoxystrobin 18.2% + Difenoconazole 11.4% SC @ 1.0 ml / Litre of water.',
              'Pre-Harvest Interval (PHI): 21 Days.'
            ]
          },
          cultural: {
            title: 'Cultural Practices',
            steps: [
              'Split nitrogen application into 3-4 doses; strictly avoid excessive urea top-dressing.',
              'Maintain thin 2-3 cm standing water in paddy plots during early disease incubation.'
            ]
          }
        },
        xai: {
          imageEvidence: ['Spindle-shaped diamond lesions with ash-gray center on paddy foliage.'],
          environmentalFactors: 'Night temperatures around 22-26°C with 85% humidity cause rapid spore germination.',
          aiDecisionConfidence: 'CNN model matched blast lesions at 93% accuracy.',
          treatmentRationale: 'Tricyclazole stops fungal penetration into leaf epidermis.'
        }
      },
      hi: {
        name: 'धान का झोंका रोग (राइस ब्लास्ट)',
        category: 'फसल फफूंद रोग',
        type: 'वायु-जनित फफूंद रोग',
        severity: 'गंभीर रोग (बाली टूटने का खतरा)',
        symptoms: 'पत्तियों पर नाव या धुरी के आकार के धब्बे जिनका केंद्र राख जैसे सफेद-भूरे रंग का और किनारे लाल-भूरे होते हैं; बाली की गर्दन (गर्डल) पर कालापन आना जिससे दाने नहीं भरते।',
        immediateAction: 'यूरिया (नाइट्रोजन) डालना तुरंत बंद करें, खेत में 2-3 सेमी पानी बनाए रखें और तुरंत ट्राइसाइक्लाजोल का छिड़काव करें।',
        subsidizedInput: 'ट्राइसाइक्लाजोल 75% डब्लूपी (बीम) एवं एजोक्सीस्ट्रोबिन',
        schemeName: 'एनएफएसएम धान पौध संरक्षण योजना (50% सीधा डीबीटी अनुदान)',
        advisory: {
          organic: {
            title: 'जैविक उपचार',
            steps: [
              'स्यूडोमोनास फ्लोरेसेंस 5 मिली प्रति लीटर पानी का छिड़काव करें।',
              'खेत में सिलिकॉन उर्वरक डालें जिससे पत्तियां सख्त होकर फफूंद का प्रवेश रोकें।'
            ]
          },
          chemical: {
            title: 'सटीक रासायनिक उपचार (फफूंदनाशक)',
            warning: 'पत्तियों पर नाव जैसे धब्बे दिखते ही या बाली निकलने से पहले छिड़काव करें।',
            steps: [
              'ट्राइसाइक्लाजोल 75% डब्लूपी @ 120-150 ग्राम प्रति एकड़ (0.6 ग्राम/लीटर)।',
              'या एजोक्सीस्ट्रोबिन + डाइफेनोकोनाजोल @ 1 मिली प्रति लीटर पानी।',
              'तुड़ाई सुरक्षा समय: 21 दिन।'
            ]
          },
          cultural: {
            title: 'कृषि प्रबंधन एवं रोकथाम',
            steps: [
              'यूरिया की अधिक मात्रा न डालें, नाइट्रोजन को 3-4 किस्तों में बांटकर दें।',
              'खेत में लगातार सूखा न पड़ने दें, हल्का पानी बनाए रखें।'
            ]
          }
        },
        xai: {
          imageEvidence: ['धान की पत्तियों पर विशिष्ट धुरी के आकार के धब्बे मिले।'],
          environmentalFactors: '22-28°C तापमान और 85% से अधिक नमी ब्लास्ट फफूंद के लिए अत्यंत अनुकूल है।',
          aiDecisionConfidence: '93% सटीकता के साथ धान के झोंका रोग की पुष्टि।',
          treatmentRationale: 'ट्राइसाइक्लाजोल फफूंद को पौधे की कोशिका भित्ति भेदने से रोकता है।'
        }
      },
      bn: {
        name: 'ধানের ব্লাস্ট রোগ (মরিচা ও গদানসা)',
        category: 'ফসলের ছত্রাকজনিত রোগ',
        type: 'বায়ুবাহিত ছত্রাক',
        severity: 'মারাত্মক প্রাদুর্ভাব',
        symptoms: 'পাতায় মাকু বা নৌকার আকৃতির দাগ যার মাঝখানটা ছাই রঙের এবং কিনারা লালচে বাদামি; শীষের গোড়া পচে শীষ ভেঙে যাওয়া।',
        immediateAction: 'ইউরিয়া সার প্রয়োগ বন্ধ রাখুন এবং ট্রাইসাইক্লাজোল স্প্রে করুন।',
        subsidizedInput: 'ট্রাইসাইক্লাজোল ৭৫% ডব্লিউপি ও অ্যাজক্সিস্ট্রোবিন',
        schemeName: 'এনএফএসএম ধান ফসল রক্ষা প্রকল্প (৫০% ডিবিটি অনুদান)',
        advisory: {
          organic: {
            title: 'জৈব প্রতিকার',
            steps: ['সিউডোমোনাস ফ্লুরোসেন্স ৫ মিলি/লিটার স্প্রে করুন।']
          },
          chemical: {
            title: 'সঠিক ছত্রাকনাশক স্প্রে',
            warning: 'শীষ বেরোনোর আগে স্প্রে করা জরুরি।',
            steps: [
              'ট্রাইসাইক্লাজোল ৭৫% ডব্লিউপি @ ০.৬ গ্রাম প্রতি লিটার জলে।',
              'অথবা অ্যাজক্সিস্ট্রোবিন + ডাইফেনোকোনাজোল @ ১ মিলি/লিটার জলে।'
            ]
          },
          cultural: {
            title: 'কৃষি পরিচালনা',
            steps: ['অতিরিক্ত ইউরিয়া দেবেন না। জমিতে হালকা জল রাখুন।']
          }
        },
        xai: {
          imageEvidence: ['পাতায় নৌকার মতো কেন্দ্র ধূসর ব্লাস্টের দাগ শনাক্ত।'],
          environmentalFactors: '২২-২৮° সে. তাপমাত্রা ও উচ্চ আর্দ্রতায় ব্লাস্ট রোগ বাড়ে।',
          aiDecisionConfidence: '৯৩% সঠিকতায় ধানের ব্লাস্ট শনাক্ত।',
          treatmentRationale: 'ট্রাইসাইক্লাজোল ছত্রাকের সংক্রমণ সাথে সাথে বন্ধ করে।'
        }
      },
      as: {
        name: 'ধানৰ ব্লাষ্ট ৰোগ (ডিঙিভঙা ৰোগ)',
        category: 'শস্যৰ ভেঁকুৰজনিত ৰোগ',
        type: 'বায়ুবাহিত ভেঁকুৰ',
        severity: 'গুৰুতৰ ৰোগ (শীহ ভঙাৰ আশংকা)',
        symptoms: 'পাতত নাওৰ আকৃতিৰ দাগ যাৰ মাজভাগ ছাই ৰঙৰ আৰু দাঁতি ৰঙচুৱা বাদামী; ধানৰ থোকৰ ডিঙি পচি ক’লা পৰি থোকটো ভাঙি পৰে।',
        immediateAction: 'ইউৰিয়া সাৰ দিয়া বন্ধ কৰক, পথাৰত পানী ৰাখক আৰু ট্ৰাইচাইক্লাজ’ল স্প্ৰে কৰক।',
        subsidizedInput: 'ট্ৰাইচাইক্লাজ’ল ৭৫% ডব্লিউপি আৰু এজক্সিষ্ট্ৰ’বিন',
        schemeName: 'এনএফএছএম ধান শস্য সুৰক্ষা আঁচনি (৫০% ডিবিটি ৰাজসাহায্য)',
        advisory: {
          organic: {
            title: 'জৈৱিক ব্যৱস্থা',
            steps: ['চিউদ’ম’নাছ ফ্লুৰোচেঞ্চ ৫ মিলি/লিটাৰ পানীত মিহলাই স্প্ৰে কৰক।']
          },
          chemical: {
            title: 'সঠিক ৰাসায়নিক ঔষধ',
            warning: 'পাতত দাগ দেখাৰ লগে লগে স্প্ৰে কৰক।',
            steps: [
              'ট্ৰাইচাইক্লাজ’ল ৭৫% ডব্লিউপি @ ০.৬ গ্ৰাম প্ৰতি লিটাৰ পানীত।',
              'বা এজক্সিষ্ট্ৰ’বিন + ডাইফেন’ক’নাজ’ল @ ১ মিলি/লিটাৰ পানীত।'
            ]
          },
          cultural: {
            title: 'পথাৰ ব্যৱস্থাপনা',
            steps: ['অধিক নাইট্ৰ’জেন নিদিব। পথাৰ শুকান হ’বলৈ নিদিব।']
          }
        },
        xai: {
          imageEvidence: ['ধানৰ পাতত মাকু আকৃতিৰ ব্লাষ্ট দাগ চিনাক্ত।'],
          environmentalFactors: '২২-২৮° উষ্ণতা আৰু সেমেকা বতাহে ব্লাষ্ট বৃদ্ধি কৰে।',
          aiDecisionConfidence: '৯৩% নিশ্চিতিৰে ব্লাষ্ট ৰোগ চিনাক্ত।',
          treatmentRationale: 'ট্ৰাইচাইক্লাজ’লে পাতৰ কোষত ভেঁকুৰৰ প্ৰৱেশ বন্ধ কৰে।'
        }
      },
      pa: {
        name: 'ਝੋਨੇ ਦਾ ਬਲਾਸਟ (ਧੌਣ ਤੋੜ) ਰੋਗ',
        category: 'ਫ਼ਸਲੀ ਉੱਲੀ ਰੋਗ',
        type: 'ਹਵਾ ਰਾਹੀਂ ਫੈਲਣ ਵਾਲੀ ਉੱਲੀ',
        severity: 'ਗੰਭੀਰ ਰੋਗ',
        symptoms: 'ਪੱਤਿਆਂ ਤੇ ਬੇੜੀ ਵਰਗੇ ਸੁਆਹ ਰੰਗੇ ਦਾਗ਼; ਮੁੰਜਰਾਂ ਦੀ ਧੌਣ ਕਾਲੀ ਹੋ ਕੇ ਟੁੱਟਣਾ।',
        immediateAction: 'ਯੂਰੀਆ ਪਾਉਣਾ ਬੰਦ ਕਰੋ ਅਤੇ ਤੁਰੰਤ ਟ੍ਰਾਈਸਾਈਕਲਾਜ਼ੋਲ ਦਾ ਛਿੜਕਾਅ ਕਰੋ।',
        subsidizedInput: 'ਟ੍ਰਾਈਸਾਈਕਲਾਜ਼ੋਲ 75% ਡਬਲਿਊਪੀ / ਐਜ਼ੋਕਸੀਸਟ੍ਰੋਬਿਨ',
        schemeName: 'ਐਨਐਫ਼ਐਸਐਮ ਝੋਨਾ ਪੌਦਾ ਸੁਰੱਖਿਆ ਸਕੀਮ (50% ਡੀਬੀਟੀ)',
        advisory: {
          organic: {
            title: 'ਜੈਵਿਕ ਰੋਕਥਾਮ',
            steps: ['ਸੂਡੋਮੋਨਾਸ ਫਲੋਰੋਸੈਂਸ 5 ਮਿਲੀ ਪ੍ਰਤੀ ਲੀਟਰ ਪਾਣੀ ਵਿੱਚ ਸਪਰੇਅ ਕਰੋ।']
          },
          chemical: {
            title: 'ਸਹੀ ਉੱਲੀਨਾਸ਼ਕ ਸਪਰੇਅ',
            warning: 'ਮੁੰਜਰਾਂ ਨਿਕਲਣ ਤੋਂ ਪਹਿਲਾਂ ਸਪਰੇਅ ਕਰੋ।',
            steps: [
              'ਟ੍ਰਾਈਸਾਈਕਲਾਜ਼ੋਲ 75% ਡਬਲਿਊਪੀ @ 0.6 ਗ੍ਰਾਮ ਪ੍ਰਤੀ ਲੀਟਰ ਪਾਣੀ।',
              'ਜਾਂ ਐਜ਼ੋਕਸੀਸਟ੍ਰੋਬਿਨ + ਡਾਈਫ਼ੈਨੋਕੋਨਾਜ਼ੋਲ @ 1 ਮਿਲੀ ਪ੍ਰਤੀ ਲੀਟਰ ਪਾਣੀ।'
            ]
          },
          cultural: {
            title: 'ਖੇਤ ਦੀ ਸਫ਼ਾਈ ਅਤੇ ਸੰਭਾਲ',
            steps: ['ਯੂਰੀਆ ਦੀ ਜ਼ਿਆਦਾ ਵਰਤੋਂ ਨਾ ਕਰੋ। ਖੇਤ ਵਿੱਚ ਹਲਕਾ ਪਾਣੀ ਰੱਖੋ।']
          }
        },
        xai: {
          imageEvidence: ['ਪੱਤਿਆਂ ਤੇ ਕਿਸ਼ਤੀ ਵਰਗੇ ਬਲਾਸਟ ਦੇ ਨਿਸ਼ਾਨ।'],
          environmentalFactors: '22-28°C ਤਾਪਮਾਨ ਅਤੇ ਨਮੀ ਉੱਲੀ ਲਈ ਅਨੁਕੂਲ ਹੈ।',
          aiDecisionConfidence: '93% ਸ਼ੁੱਧਤਾ ਨਾਲ ਬਲਾਸਟ ਰੋਗ ਦੀ ਪਛਾਣ।',
          treatmentRationale: 'ਟ੍ਰਾਈਸਾਈਕਲਾਜ਼ੋਲ ਉੱਲੀ ਦੇ ਦਾਖ਼ਲੇ ਨੂੰ ਰੋਕਦਾ ਹੈ।'
        }
      },
      mr: {
        name: 'भातावरील करपा (ब्लास्ट / मानमोडी)',
        category: 'पीक बुरशीजन्य रोग',
        type: 'हवेतून पसरणारी बुरशी',
        severity: 'गंभीर रोग (ओंबी मोडण्याचा धोका)',
        symptoms: 'पानांवर डोळ्याच्या किंवा नावेच्या आकाराचे करडे-पांढरे डाग ज्यांच्या कडा लालसर-तपकिरी असतात; ओंबीची मान काळी पडून ओंबी मोडते.',
        immediateAction: 'युरिया खताचा वापर थांबवा, शेतात हलके पाणी ठेवा आणि ट्रायसायक्लॅझोल फवारा.',
        subsidizedInput: 'ट्रायसायक्लॅझोल ७५% डब्ल्यूपी व अझॉक्सीस्ट्रॉबिन',
        schemeName: 'एनएफएसएम भात पीक संरक्षण योजना (५०% डीबीटी अनुदान)',
        advisory: {
          organic: {
            title: 'सेंद्रिय उपाय',
            steps: ['स्यूडोमोनास फ्लोरेसेन्स ५ मिली प्रति लिटर पाण्यात फवारा.']
          },
          chemical: {
            title: 'अचूक रासायनिक बुरशीनाशक फवारणी',
            warning: 'पानांवर डाग दिसताच किंवा पोटरीच्या अवस्थेत फवारणी करा.',
            steps: [
              'ट्रायसायक्लॅझोल ७५% डब्ल्यूपी @ ०.६ ग्रॅम प्रति लिटर पाणी.',
              'किंवा अझॉक्सीस्ट्रॉबिन + डायफेनोकोनाझोल @ १ मिली प्रति लिटर पाणी.'
            ]
          },
          cultural: {
            title: 'शेत व्यवस्थापन',
            steps: ['जास्त युरिया देऊ नका. शेतात २-३ सेमी पाणी सतत ठेवा.']
          }
        },
        xai: {
          imageEvidence: ['पानांवर नावेसारखे करड्या रंगाचे करपा डाग आढळले.'],
          environmentalFactors: '२२-२८° से. तापमान आणि दमट हवामान करप्यासाठी पोषक आहे.',
          aiDecisionConfidence: '९३% अचूकतेने भातावरील करपा ओळखला गेला.',
          treatmentRationale: 'ट्रायसायक्लॅझोल बुरशीला पेशींमध्ये शिरण्यापासून प्रतिबंध करते.'
        }
      }
    }
  },

  // DISEASE 3: Wheat Yellow Rust
  wheat_yellow_rust: {
    id: 'wheat_yellow_rust',
    crop: 'Wheat',
    cropKey: 'wheat',
    name: 'Wheat Yellow Rust (Stripe Rust)',
    category: 'Crop Disease',
    pathogen: 'Puccinia striiformis f. sp. tritici',
    type: 'Obligate Biotrophic Rust Fungus',
    typicalSeverity: 'Severe',
    confidence: 95,
    baseRisk: 82,
    weatherSensitivity: {
      minTemp: 7,
      maxTemp: 22,
      optTempMin: 10,
      optTempMax: 15,
      minHumidity: 75,
      rainTrigger: false
    },
    symptoms: 'Parallel linear rows of bright yellow powdery pustules (uredinia) arranged along leaf veins like yellow stripes; yellow powder rubs off on fingers.',
    heatmaps: [
      { x: 35, y: 30, radius: 22, label: 'Linear Uredinia Stripe' },
      { x: 50, y: 60, radius: 24, label: 'Yellow Spore Powder' }
    ],
    immediateAction: 'Apply propiconazole fungicide immediately across the infected focus area to stop epidemic wind spread.',
    subsidizedPesticide: {
      name: 'Propiconazole 25% EC (Tilt) / Tebuconazole 25.9% EC',
      formulation: 'Propiconazole 25% EC @ 200 ml/acre',
      centralScheme: 'NFSM-Wheat Yellow Rust Emergency Management (50% DBT)',
      subsidyRate: '50% Direct Benefit Transfer (DBT)',
      approxSavings: '₹400 / acre',
      maxClaim: 'Up to 5 Acres (₹2,000 max)'
    },
    translations: {
      en: {
        name: 'Wheat Yellow Rust (Stripe Rust)',
        category: 'Crop Pathology Disease',
        type: 'Fungal Rust Pathogen',
        severity: 'Severe Infestation / Outbreak',
        symptoms: 'Parallel linear rows of bright yellow powdery pustules (uredinia) arranged along leaf veins like yellow stripes; yellow powder rubs off on fingers.',
        immediateAction: 'Apply propiconazole fungicide immediately across the infected focus area to stop epidemic wind spread.',
        subsidizedInput: 'Propiconazole 25% EC (Tilt) & Tebuconazole',
        schemeName: 'NFSM Wheat Rust Control Subsidy (50% DBT)',
        advisory: {
          organic: {
            title: 'Biological Interventions',
            steps: [
              'Foliar spray with Bacillus amyloliquefaciens @ 5 g / Litre of water at initial symptom appearance.',
              'Foliar spray with Cow Urine (10%) + Fermented Butter Milk (5%) formulation as a bio-fungicide.'
            ]
          },
          chemical: {
            title: 'Precision Chemical Prescription',
            warning: 'Spray immediately upon spotting yellow dust stripes to halt wind-borne spore movement.',
            steps: [
              'Propiconazole 25% EC (Tilt) @ 1.0 ml / Litre of water (systemic triazole inhibitor).',
              'OR Tebuconazole 25.9% EC @ 1.0 ml / Litre of water.',
              'Pre-Harvest Interval (PHI): 30 Days. Spray 200 Litres of spray solution per acre.'
            ]
          },
          cultural: {
            title: 'Cultural Practices',
            steps: [
              'Sow yellow-rust resistant wheat varieties recommended for your agro-climatic zone.',
              'Avoid late sowing; plant before November 15th to escape peak spore showers.'
            ]
          }
        },
        xai: {
          imageEvidence: ['Linear bright yellow spore pustules parallel to leaf veins.'],
          environmentalFactors: 'Cold morning dew (10-15°C) and cloudy days stimulate rapid urediniospore germination.',
          aiDecisionConfidence: '95% match with Puccinia striiformis stripe pattern.',
          treatmentRationale: 'Propiconazole halts ergosterol biosynthesis in rust fungi within 6 hours.'
        }
      },
      hi: {
        name: 'गेहूं का पीला रतुआ (येलो रस्ट / हल्दी रोग)',
        category: 'फसल फफूंद रोग',
        type: 'वायु-जनित रतुआ फफूंद',
        severity: 'गंभीर रोग (हवा से तेजी से फैलता है)',
        symptoms: 'गेहूं की पत्तियों पर नसों के समानांतर चमकीली पीली पाउडर जैसी धारियां; छूने पर उंगली पर हल्दी जैसा पीला पाउडर चिपक जाना; पत्तियां पीली पड़कर सूखना।',
        immediateAction: 'पीली धारियां दिखते ही तुरंत पूरे प्रभावित क्षेत्र में प्रोपिकोनाजोल फफूंदनाशक का छिड़काव करें।',
        subsidizedInput: 'प्रोपिकोनाजोल 25% ईसी (टिल्ट) / टेबुकोनाजोल',
        schemeName: 'एनएफएसएम गेहूं पीला रतुआ आपातकालीन अनुदान (50% डीबीटी)',
        advisory: {
          organic: {
            title: 'जैविक उपाय',
            steps: [
              'देसी गाय का गोमूत्र (10%) और खट्टी छाछ (5%) मिलाकर छिड़कें।',
              'बैसिलस एमाइलोलिक्विफेशिएंस 5 ग्राम/लीटर पानी का छिड़काव करें।'
            ]
          },
          chemical: {
            title: 'सटीक रासायनिक उपचार (फफूंदनाशक)',
            warning: 'पीली धारियां दिखने पर बिल्कुल देरी न करें, यह हवा से पूरे इलाके में फैल सकता है।',
            steps: [
              'प्रोपिकोनाजोल 25% ईसी (टिल्ट) @ 200 मिली प्रति एकड़ (1 मिली/लीटर पानी)।',
              'या टेबुकोनाजोल 25.9% ईसी @ 200 मिली प्रति एकड़।',
              'तुड़ाई सुरक्षा समय: 30 दिन। प्रति एकड़ 200 लीटर पानी का उपयोग करें।'
            ]
          },
          cultural: {
            title: 'कृषि प्रबंधन एवं रोकथाम',
            steps: [
              'पीला रतुआ प्रतिरोधी किस्में ही बोएं।',
              'गेहूं की देर से बुवाई न करें, 15 नवंबर से पहले बुवाई पूरी करें।'
            ]
          }
        },
        xai: {
          imageEvidence: ['पत्तियों पर नसों के साथ चमकीली पीली समानांतर धारियां पाई गईं।'],
          environmentalFactors: '10-15°C ठंडा मौसम और सुबह की ओस पीले रतुए के अनुकूल है।',
          aiDecisionConfidence: '95% सटीकता से पीला रतुआ रोग पहचाना गया।',
          treatmentRationale: 'प्रोपिकोनाजोल फफूंद को 6 घंटे के भीतर अंदर से खत्म कर देता है।'
        }
      },
      bn: {
        name: 'গমের হলুদ মরিচা রোগ (ইয়েলো রাস্ট)',
        category: 'ফসলের ছত্রাকজনিত রোগ',
        type: 'ছত্রাক রোগ',
        severity: 'মারাত্মক রোগ',
        symptoms: 'গমের পাতায় শিরার সমান্তরালে উজ্জ্বল হলুদ গুঁড়োর মতো রেখার সারি; হাত দিলে হলুদের মতো গুঁড়ো লেগে যায়।',
        immediateAction: 'প্রোপিকোনাজোল ছত্রাকনাশক স্প্রে করে বাতাসের মাধ্যমে সংক্রমণ ঠেকান।',
        subsidizedInput: 'প্রোপিকোনাজোল ২৫% ইসি ও টেবুকোনাজোল',
        schemeName: 'এনএফএসএম গম মরিচা রোগ নিয়ন্ত্রণ অনুদান (৫০% ডিবিটি)',
        advisory: {
          organic: {
            title: 'জৈব প্রতিকার',
            steps: ['গাভীর মূত্র ও টক ঘোল স্প্রে করুন।']
          },
          chemical: {
            title: 'সঠিক রাসায়নিক ছত্রাকনাশক',
            warning: 'বাতাসে ছড়ানোর আগেই স্প্রে করা প্রয়োজন।',
            steps: [
              'প্রোপিকোনাজোল ২৫% ইসি @ ১ মিলি প্রতি লিটার জলে।',
              'অথবা টেবুকোনাজোল ২৫.৯% ইসি @ ১ মিলি প্রতি লিটার জলে।'
            ]
          },
          cultural: {
            title: 'কৃষি পরিচালনা',
            steps: ['রোগ প্রতিরোধী জাতের বীজ বপন করুন।']
          }
        },
        xai: {
          imageEvidence: ['পাতায় সমান্তরাল হলুদ দাগের সারি দৃশ্যমান।'],
          environmentalFactors: '১০-১৫° সে. শীতকালীন ঠাণ্ডা আবহাওয়ায় এই রোগ দ্রুত ছড়ায়।',
          aiDecisionConfidence: '৯৫% আত্মবিশ্বাসে হলুদ মরিচা শনাক্ত।',
          treatmentRationale: 'প্রোপিকোনাজোল ছত্রাকের সংক্রমণ অবিলম্বে থামিয়ে দেয়।'
        }
      },
      as: {
        name: 'ঘেঁহুৰ হালধীয়া ৰাষ্ট ৰোগ (হালধীয়া দাগ)',
        category: 'শস্যৰ ভেঁকুৰজনিত ৰোগ',
        type: 'বায়ুৰ দ্বাৰা বিয়পা ভেঁকুৰ',
        severity: 'গুৰুতৰ ৰোগ',
        symptoms: 'ঘেঁহুৰ পাতৰ সিৰাবোৰৰ সমান্তৰালকৈ হালধীয়া গুড়িৰ দৰে পটি পৰে; হাত লগালে হালধিৰ দৰে গুড়ি লাগি আহে।',
        immediateAction: 'লগে লগে প্ৰ’পিক’নাজ’ল ভেঁকুৰনাশক স্প্ৰে কৰক।',
        subsidizedInput: 'প্ৰ’পিক’নাজ’ল ২৫% ইচি (টিল্ট) আৰু টেবুক’নাজ’ল',
        schemeName: 'এনএফএছএম ঘেঁহু ৰাষ্ট নিয়ন্ত্ৰণ ৰাজসাহায্য (৫০% ডিবিটি)',
        advisory: {
          organic: {
            title: 'জৈৱিক ব্যৱস্থা',
            steps: ['গোমূত্ৰ আৰু ঘোলৰ মিশ্ৰণ স্প্ৰে কৰক।']
          },
          chemical: {
            title: 'সঠিক ৰাসায়নিক ঔষধ',
            warning: 'বতাহত বিয়পাৰ আগতেই স্প্ৰে কৰক।',
            steps: [
              'প্ৰ’পিক’নাজ’ল ২৫% ইচি @ ১ মিলি প্ৰতি লিটাৰ পানীত।',
              'বা টেবুক’নাজ’ল ২৫.৯% ইচি @ ১ মিলি প্ৰতি লিটাৰ পানীত।'
            ]
          },
          cultural: {
            title: 'পথাৰ ব্যৱস্থাপনা',
            steps: ['ৰোগ প্ৰতিৰোধী জাত ব্যৱহাৰ কৰক। সময়মতে সিঁচক।']
          }
        },
        xai: {
          imageEvidence: ['পাতৰ সিৰাৰ সমান্তৰালকৈ হালধীয়া দাগ দেখা গৈছে।'],
          environmentalFactors: '১০-১৫° চে. ঠাণ্ডা বতৰত এই ৰোগ সোনকালে বিয়পে।',
          aiDecisionConfidence: '৯৫% নিশ্চিতিৰে হালধীয়া ৰাষ্ট চিনাক্ত।',
          treatmentRationale: 'প্ৰ’পিক’নাজ’লে ভেঁকুৰৰ সংক্ৰমণ তৎক্ষণাত বন্ধ কৰে।'
        }
      },
      pa: {
        name: 'ਕਣਕ ਦੀ ਪੀਲੀ ਕੁੰਗੀ (ਯੈਲੋ ਰਸਟ / ਹਲਦੀ ਰੋਗ)',
        category: 'ਫ਼ਸਲੀ ਉੱਲੀ ਰੋਗ',
        type: 'ਹਵਾ ਰਾਹੀਂ ਫੈਲਣ ਵਾਲੀ ਉੱਲੀ',
        severity: 'ਗੰਭੀਰ ਖ਼ਤਰਾ (ਹਵਾ ਨਾਲ ਤੇਜ਼ੀ ਨਾਲ ਫੈਲਦਾ ਹੈ)',
        symptoms: 'ਕਣਕ ਦੇ ਪੱਤਿਆਂ ਤੇ ਨਾੜੀਆਂ ਦੇ ਨਾਲ-ਨਾਲ ਪੀਲੀਆਂ ਲੰਮੀਆਂ ਧਾਰੀਆਂ; ਹੱਥ ਲਾਉਣ ਤੇ ਹਲਦੀ ਵਾਂਗ ਪੀਲਾ ਪਾਊਡਰ ਉਂਗਲਾਂ ਤੇ ਲੱਗਣਾ।',
        immediateAction: 'ਪੀਲੀਆਂ ਧਾਰੀਆਂ ਦਿਸਦੇ ਹੀ ਤੁਰੰਤ ਪ੍ਰੋਪੀਕੋਨਾਜ਼ੋਲ ਦਾ ਛਿੜਕਾਅ ਕਰੋ।',
        subsidizedInput: 'ਪ੍ਰੋਪੀਕੋਨਾਜ਼ੋਲ 25% ਈਸੀ (ਟਿਲਟ) / ਟੈਬੂਕੋਨਾਜ਼ੋਲ',
        schemeName: 'ਐਨਐਫ਼ਐਸਐਮ ਕਣਕ ਪੀਲੀ ਕੁੰਗੀ ਕੰਟਰੋਲ ਸਬਸਿਡੀ (50% ਡੀਬੀਟੀ)',
        advisory: {
          organic: {
            title: 'ਜੈਵਿਕ ਰੋਕਥਾਮ',
            steps: ['ਗਊ ਮੂਤਰ ਅਤੇ ਖੱਟੀ ਲੱਸੀ ਮਿਲਾ ਕੇ ਸਪਰੇਅ ਕਰੋ।']
          },
          chemical: {
            title: 'ਸਹੀ ਉੱਲੀਨਾਸ਼ਕ ਸਪਰੇਅ',
            warning: 'ਧਾਰੀਆਂ ਦਿਸਦੇ ਹੀ ਤੁਰੰਤ ਸਪਰੇਅ ਕਰੋ ਤਾਂ ਜੋ ਹਵਾ ਨਾਲ ਅੱਗੇ ਨਾ ਫੈਲੇ।',
            steps: [
              'ਪ੍ਰੋਪੀਕੋਨਾਜ਼ੋਲ 25% ਈਸੀ (ਟਿਲਟ) @ 200 ਮਿਲੀ ਪ੍ਰਤੀ ਏਕੜ (1 ਮਿਲੀ/ਲੀਟਰ ਪਾਣੀ)।',
              'ਜਾਂ ਟੈਬੂਕੋਨਾਜ਼ੋਲ 25.9% ਈਸੀ @ 200 ਮਿਲੀ ਪ੍ਰਤੀ ਏਕੜ।'
            ]
          },
          cultural: {
            title: 'ਖੇਤ ਦੀ ਸਫ਼ਾਈ ਅਤੇ ਸੰਭਾਲ',
            steps: ['ਕੁੰਗੀ ਰੋਧਕ ਕਿਸਮਾਂ ਹੀ ਬੀਜੋ। ਸਮੇਂ ਸਿਰ ਬਿਜਾਈ ਕਰੋ।']
          }
        },
        xai: {
          imageEvidence: ['ਪੱਤਿਆਂ ਤੇ ਪੀਲੀਆਂ ਸਮਾਨਾਂਤਰ ਧਾਰੀਆਂ ਸਾਫ਼ ਦਿਖਾਈ ਦਿੱਤੀਆਂ।'],
          environmentalFactors: '10-15°C ਠੰਢਾ ਤਾਪਮਾਨ ਅਤੇ ਤ੍ਰੇਲ ਕੁੰਗੀ ਲਈ ਬਹੁਤ ਅਨੁਕੂਲ ਹੈ।',
          aiDecisionConfidence: '95% ਸ਼ੁੱਧਤਾ ਨਾਲ ਪੀਲੀ ਕੁੰਗੀ ਦੀ ਪਛਾਣ।',
          treatmentRationale: 'ਪ੍ਰੋਪੀਕੋਨਾਜ਼ੋਲ ਉੱਲੀ ਨੂੰ ਕੁਝ ਘੰਟਿਆਂ ਵਿੱਚ ਹੀ ਖ਼ਤਮ ਕਰ ਦਿੰਦਾ ਹੈ।'
        }
      },
      mr: {
        name: 'गव्हावरील पिवळा तांबेरा (येलो रस्ट / हळद्या रोग)',
        category: 'पीक बुरशीजन्य रोग',
        type: 'हवेतून वेगाने पसरणारी बुरशी',
        severity: 'गंभीर रोग (हवेमुळे संपूर्ण शेतात फैलाव)',
        symptoms: 'गव्हाच्या पानाच्या शिरांना समांतर पिवळ्या रंगाच्या पावडरच्या पट्ट्या; बोटाला हळदीसारखी पिवळी पावडर लागणे; पाने पिवळी पडून वाळणे.',
        immediateAction: 'पिवळ्या पट्ट्या दिसताच संपूर्ण प्रादुर्भाव क्षेत्रात प्रोपिकोनाझोल बुरशीनाशक फवारा.',
        subsidizedInput: 'प्रोपिकोनाझोल २५% ईसी (टिल्ट) / टेबुकोनाझोल',
        schemeName: 'एनएफएसएम गहू तांबेरा नियंत्रण अनुदान (५०% डीबीटी)',
        advisory: {
          organic: {
            title: 'सेंद्रिय उपाय',
            steps: ['गोमूत्र आणि आंबट ताक मिसळून फवारा.']
          },
          chemical: {
            title: 'अचूक रासायनिक बुरशीनाशक फवारणी',
            warning: 'पिवळ्या पट्ट्या दिसताच त्वरित फवारा; उशीर केल्यास रोग हवेने सर्वत्र पसरतो.',
            steps: [
              'प्रोपिकोनाझोल २५% ईसी (टिल्ट) @ २०० मिली प्रति एकर (१ मिली/लिटर पाणी).',
              'किंवा टेबुकोनाझोल २५.९% ईसी @ २०० मिली प्रति एकर.'
            ]
          },
          cultural: {
            title: 'शेत व्यवस्थापन व प्रतिबंधात्मक उपाय',
            steps: ['तांबेरा प्रतिकारक वाणांचीच निवड करा. वेळेवर पेरणी करा.']
          }
        },
        xai: {
          imageEvidence: ['पानांवर शिरांना समांतर पिवळ्या पट्ट्या आढळल्या.'],
          environmentalFactors: '१०-१५° से. थंड हवामान आणि सकाळी पडणारे दव तांबेऱ्याला वाढवते.',
          aiDecisionConfidence: '९५% खात्रीने पिवळा तांबेरा ओळखला गेला.',
          treatmentRationale: 'प्रोपिकोनाझोल बुरशीचा प्रसार ६ तासांच्या आत थांबवते.'
        }
      }
    }
  },

  // DISEASE 4: Potato Early Blight
  potato_early_blight: {
    id: 'potato_early_blight',
    crop: 'Potato',
    cropKey: 'potato',
    name: 'Potato Early Blight Disease',
    category: 'Crop Disease',
    pathogen: 'Alternaria solani (Fungus)',
    type: 'Necrotrophic Foliar Pathogen',
    typicalSeverity: 'Moderate',
    confidence: 92,
    baseRisk: 72,
    weatherSensitivity: {
      minTemp: 18,
      maxTemp: 32,
      optTempMin: 24,
      optTempMax: 29,
      minHumidity: 70,
      rainTrigger: false
    },
    symptoms: 'Concentric dark brown circular rings forming a "target-board" bullseye pattern on mature lower foliage surrounded by yellow chlorotic halo.',
    heatmaps: [
      { x: 42, y: 45, radius: 24, label: 'Target-Board Ring' },
      { x: 58, y: 62, radius: 20, label: 'Chlorotic Ring Margin' }
    ],
    immediateAction: 'Prune blighted lower leaves and apply protective Mancozeb contact fungicide before overhead rain.',
    subsidizedPesticide: {
      name: 'Mancozeb 75% WP (Dithane M-45) / Chlorothalonil 75% WP',
      formulation: 'Mancozeb 75% WP @ 600-800 g/acre',
      centralScheme: 'MIDH Tuber & Potato Crop Protection Scheme (50% DBT)',
      subsidyRate: '50% Direct Benefit Transfer',
      approxSavings: '₹360 / acre',
      maxClaim: 'Up to 4 Acres (₹1,440 max)'
    },
    translations: {
      en: {
        name: 'Potato Early Blight Disease',
        category: 'Crop Pathology Disease',
        type: 'Necrotrophic Foliar Pathogen',
        severity: 'Moderate Severity',
        symptoms: 'Concentric dark brown circular rings forming a "target-board" bullseye pattern on mature lower foliage surrounded by yellow chlorotic halo.',
        immediateAction: 'Prune blighted lower leaves and apply protective Mancozeb contact fungicide before overhead rain.',
        subsidizedInput: 'Mancozeb 75% WP (Dithane M-45) & Chlorothalonil',
        schemeName: 'MIDH Potato Protection Grant (50% DBT)',
        advisory: {
          organic: {
            title: 'Biological Interventions',
            steps: [
              'Trichoderma harzianum @ 5 g / Litre of water foliar spray at early vegetative stage.',
              'Neem cake application in soil @ 100 kg/acre to boost plant systemic resistance.'
            ]
          },
          chemical: {
            title: 'Precision Chemical Prescription',
            warning: 'Apply protective contact fungicide as soon as circular target-board spots appear on lower canopy.',
            steps: [
              'Mancozeb 75% WP (Dithane M-45) @ 2.5 g / Litre of water.',
              'OR Chlorothalonil 75% WP @ 2.0 g / Litre of water.',
              'Pre-Harvest Interval (PHI): 14 Days.'
            ]
          },
          cultural: {
            title: 'Cultural Practices',
            steps: [
              'Rotate potatoes with non-solanaceous crops (maize, pulses) for at least 2 seasons.',
              'Avoid soil water stress during tuber initiation.'
            ]
          }
        },
        xai: {
          imageEvidence: ['Concentric bullseye rings visible on lower leaves.'],
          environmentalFactors: 'Alternating dry and warm humid periods accelerate Alternaria spore dispersal.',
          aiDecisionConfidence: '92% match with Alternaria solani concentric patterns.',
          treatmentRationale: 'Mancozeb creates a multi-site protective chemical barrier on foliage.'
        }
      },
      hi: {
        name: 'आलू का अगेती झुलसा (अर्ली ब्लाइट)',
        category: 'फसल फफूंद रोग',
        type: 'पत्ती झुलसा फफूंद',
        severity: 'मध्यम गंभीरता',
        symptoms: 'निचली पुरानी पत्तियों पर गहरे भूरे रंग के गोल छल्लेदार धब्बे जो निशाने के बोर्ड ("टारगेट बोर्ड" या रिंग्स) जैसे दिखते हैं; धब्बों के चारों ओर पीला घेरा।',
        immediateAction: 'सड़ी निचली पत्तियों को हटाएं और बारिश से पहले मैंकोजेब सुरक्षात्मक फफूंदनाशक का छिड़काव करें।',
        subsidizedInput: 'मैंकोजेब 75% डब्लूपी (डायथेन एम-45) / क्लोरोथैलोनिल',
        schemeName: 'एमआईडीएच आलू फसल सुरक्षा अनुदान (50% डीबीटी)',
        advisory: {
          organic: {
            title: 'जैविक उपाय',
            steps: [
              'ट्राइकोडर्मा हारजिएनम 5 ग्राम प्रति लीटर पानी का छिड़काव करें।',
              'खेत में नीम की खली 100 किग्रा प्रति एकड़ डालें।'
            ]
          },
          chemical: {
            title: 'सटीक रासायनिक उपचार (सुरक्षात्मक फफूंदनाशक)',
            warning: 'निचली पत्तियों पर गोल छल्लेदार धब्बे दिखते ही छिड़काव करें।',
            steps: [
              'मैंकोजेब 75% डब्लूपी @ 2.5 ग्राम प्रति लीटर पानी।',
              'या क्लोरोथैलोनिल 75% डब्लूपी @ 2.0 ग्राम प्रति लीटर पानी।',
              'तुड़ाई सुरक्षा समय: 14 दिन।'
            ]
          },
          cultural: {
            title: 'कृषि प्रबंधन एवं रोकथाम',
            steps: [
              'आलू के बाद मक्का या दलहन की फसल लेकर फसल चक्र अपनाएं।',
              'आलू बनने के समय खेत में नमी की कमी न होने दें।'
            ]
          }
        },
        xai: {
          imageEvidence: ['पत्तियों पर संकेंद्रित छल्लेदार टारगेट बोर्ड धब्बे मिले।'],
          environmentalFactors: '24-29°C तापमान और शुष्क व आर्द्र का बारी-बारी आना रोग बढ़ाता है।',
          aiDecisionConfidence: '92% सटीकता से अर्ली ब्लाइट की पुष्टि।',
          treatmentRationale: 'मैंकोजेब पत्तियों पर सुरक्षात्मक परत बनाकर फफूंद को नष्ट करता है।'
        }
      },
      bn: {
        name: 'আলুর আগাম ধসা (আর্লি ব্লাইট)',
        category: 'ফসলের ছত্রাকজনিত রোগ',
        type: 'ছত্রাক রোগ',
        severity: 'মাঝারি তীব্রতা',
        symptoms: 'নিচের পুরোনো পাতায় গোল গোল বলয়ের মতো বাদামি দাগ (টার্গেট বোর্ডের মতো); দাগের চারপাশে হলুদ সীমানা।',
        immediateAction: 'আক্রান্ত পাতা সরিয়ে ম্যানকোজেব স্প্রে করুন।',
        subsidizedInput: 'ম্যানকোজেব ৭৫% ডব্লিউপি ও ক্লোরোথ্যালোনিল',
        schemeName: 'এমআইডিএইচ আলু ফসল সুরক্ষা প্রকল্প (৫০% ডিবিটি)',
        advisory: {
          organic: {
            title: 'জৈব প্রতিকার',
            steps: ['ট্রাইকোডার্মা ৫ গ্রাম/লিটার স্প্রে করুন।']
          },
          chemical: {
            title: 'সঠিক রাসায়নিক ছত্রাকনাশক',
            warning: 'দাগ দেখা মাত্রই স্প্রে করুন।',
            steps: ['ম্যানকোজেব ৭৫% ডব্লিউপি @ ২.৫ গ্রাম প্রতি লিটার জলে।']
          },
          cultural: {
            title: 'কৃষি পরিচালনা',
            steps: ['পর্যায়ক্রমে শস্য আবর্তন করুন।']
          }
        },
        xai: {
          imageEvidence: ['পাতায় গোল বলয়াকৃতি টার্গেট দাগ বিদ্যমান।'],
          environmentalFactors: '২৪-২৯° সে. তাপমাত্রা ছত্রাকের বৃদ্ধিতে সহায়ক।',
          aiDecisionConfidence: '৯২% নিশ্চিতিতে আর্লি ব্লাইট শনাক্ত।',
          treatmentRationale: 'ম্যানকোজেব পাতায় প্রতিরক্ষামূলক আবরণ গড়ে তোলে।'
        }
      },
      as: {
        name: 'আলুৰ আগতীয়া ব্লাইট (আৰ্লি ব্লাইট)',
        category: 'শস্যৰ ভেঁকুৰজনিত ৰোগ',
        type: 'পাতৰ ভেঁকুৰ ৰোগ',
        severity: 'মধ্যম মাত্ৰাৰ ৰোগ',
        symptoms: 'পুৰণি পাতবোৰত ঘূৰণীয়া লক্ষ্যবৰ্ডৰ দৰে চক্ৰাকাৰ বাদামী দাগ; দাগৰ চাৰিওফালে হালধীয়া ৰেখা।',
        immediateAction: 'মেনক’জেব ভেঁকুৰনাশক স্প্ৰে কৰক।',
        subsidizedInput: 'মেনক’জেব ৭৫% ডব্লিউপি আৰু ক্ল’ৰ’থেল’নিল',
        schemeName: 'এমআইডিএইচ আলু শস্য সুৰক্ষা ৰাজসাহায্য (৫০% ডিবিটি)',
        advisory: {
          organic: {
            title: 'জৈৱিক ব্যৱস্থা',
            steps: ['ট্ৰাইক’ডাৰ্মা ৫ গ্ৰাম/লিটাৰ পানীত স্প্ৰে কৰক।']
          },
          chemical: {
            title: 'সঠিক ৰাসায়নিক ঔষধ',
            warning: 'পাতত দাগ দেখাৰ লগে লগে স্প্ৰে কৰক।',
            steps: ['মেনক’জেব ৭৫% ডব্লিউপি @ ২.৫ গ্ৰাম প্ৰতি লিটাৰ পানীত।']
          },
          cultural: {
            title: 'পথাৰ ব্যৱস্থাপনা',
            steps: ['শস্য পৰিবৰ্তন পদ্ধতি ব্যৱহাৰ কৰক।']
          }
        },
        xai: {
          imageEvidence: ['পাতত ঘূৰণীয়া চক্ৰাকাৰ দাগ চিনাক্ত।'],
          environmentalFactors: '২৪-২৯° চে. উষ্ণতাই এই ৰোগ বঢ়ায়।',
          aiDecisionConfidence: '৯২% নিশ্চিতিৰে আৰ্লি ব্লাইট চিনাক্ত।',
          treatmentRationale: 'মেনক’জেবে পাতৰ ওপৰত সুৰক্ষামূলক আৱৰণ দিয়ে।'
        }
      },
      pa: {
        name: 'ਆਲੂ ਦਾ ਅਗੇਤਾ ਝੁਲਸ ਰੋਗ (ਅਰਲੀ ਬਲਾਈਟ)',
        category: 'ਫ਼ਸਲੀ ਉੱਲੀ ਰੋਗ',
        type: 'ਉੱਲੀ ਰੋਗਾਣੂ',
        severity: 'ਮੱਧਮ ਖ਼ਤਰਾ',
        symptoms: 'ਹੇਠਲੇ ਪੱਤਿਆਂ ਤੇ ਨਿਸ਼ਾਨੇ ਬੋਰਡ ਵਰਗੇ ਗੋਲ ਚੱਕਰਦਾਰ ਭੂਰੇ ਦਾਗ਼।',
        immediateAction: 'ਮੈਨਕੋਜ਼ੈਬ ਦਾ ਛਿੜਕਾਅ ਕਰੋ।',
        subsidizedInput: 'ਮੈਨਕੋਜ਼ੈਬ 75% ਡਬਲਿਊਪੀ / ਕਲੋਰੋਥੈਲੋਨਿਲ',
        schemeName: 'ਐਮਆਈਡੀਐਚ ਆਲੂ ਫ਼ਸਲ ਸੁਰੱਖਿਆ ਗ੍ਰਾਂਟ (50% ਡੀਬੀਟੀ)',
        advisory: {
          organic: {
            title: 'ਜੈਵਿਕ ਰੋਕਥਾਮ',
            steps: ['ਟ੍ਰਾਈਕੋਡਰਮਾ 5 ਗ੍ਰਾਮ ਪ੍ਰਤੀ ਲੀਟਰ ਪਾਣੀ ਵਿੱਚ ਸਪਰੇਅ ਕਰੋ।']
          },
          chemical: {
            title: 'ਸਹੀ ਉੱਲੀਨਾਸ਼ਕ ਸਪਰੇਅ',
            warning: 'ਦਾਗ਼ ਦਿਸਦੇ ਹੀ ਤੁਰੰਤ ਸਪਰੇਅ ਕਰੋ।',
            steps: ['ਮੈਨਕੋਜ਼ੈਬ 75% ਡਬਲਿਊਪੀ @ 2.5 ਗ੍ਰਾਮ ਪ੍ਰਤੀ ਲੀਟਰ ਪਾਣੀ।']
          },
          cultural: {
            title: 'ਖੇਤ ਦੀ ਸਫ਼ਾਈ ਅਤੇ ਸੰਭਾਲ',
            steps: ['ਫ਼ਸਲੀ ਚੱਕਰ ਅਪਣਾਓ।']
          }
        },
        xai: {
          imageEvidence: ['ਪੱਤਿਆਂ ਤੇ ਗੋਲ ਚੱਕਰਦਾਰ ਦਾਗ਼ ਸਾਫ਼ ਹਨ।'],
          environmentalFactors: '24-29°C ਤਾਪਮਾਨ ਉੱਲੀ ਲਈ ਢੁੱਕਵਾਂ ਹੈ।',
          aiDecisionConfidence: '92% ਸ਼ੁੱਧਤਾ ਨਾਲ ਪਛਾਣ ਕੀਤੀ ਗਈ।',
          treatmentRationale: 'ਮੈਨਕੋਜ਼ੈਬ ਉੱਲੀ ਤੋਂ ਬਚਾਅ ਲਈ ਢਾਲ ਬਣਦਾ ਹੈ।'
        }
      },
      mr: {
        name: 'बटाट्यावरील लवकर येणारा करपा (अर्ली ब्लाइट)',
        category: 'पीक बुरशीजन्य रोग',
        type: 'पाने करपणारी बुरशी',
        severity: 'मध्यम तीव्रता',
        symptoms: 'खालच्या जुन्या पानांवर गोलाकार कंकणाकृती ("टार्गेट बोर्ड") तपकिरी डाग; डागांभोवती पिवळसर वलय.',
        immediateAction: 'मॅन्कोझेब बुरशीनाशकाची फवारणी करा.',
        subsidizedInput: 'मॅन्कोझेब ७५% डब्ल्यूपी व क्लोरोथॅलोनिल',
        schemeName: 'एमआयडीएच बटाटा पीक संरक्षण अनुदान (५०% डीबीटी)',
        advisory: {
          organic: {
            title: 'सेंद्रिय उपाय',
            steps: ['ट्रायकोडर्मा ५ ग्रॅम/लिटर पाण्यात फवारा.']
          },
          chemical: {
            title: 'अचूक रासायनिक बुरशीनाशक फवारणी',
            warning: 'पानांवर डाग दिसताच फवारणी करा.',
            steps: ['मॅन्कोझेब ७५% डब्ल्यूपी @ २.५ ग्रॅम प्रति लिटर पाणी.']
          },
          cultural: {
            title: 'शेत व्यवस्थापन',
            steps: ['पिकांची फेरपालट करा.']
          }
        },
        xai: {
          imageEvidence: ['पानांवर गोलाकार टार्गेट बोर्ड डाग आढळले.'],
          environmentalFactors: '२४-२९° से. तापमान करप्यासाठी पोषक आहे.',
          aiDecisionConfidence: '९२% अचूकतेने अर्ली ब्लाइट ओळखला गेला.',
          treatmentRationale: 'मॅन्कोझेब पानांवर संरक्षक थर निर्माण करते.'
        }
      }
    }
  },

  // DISEASE 5: Apple Scab
  apple_scab: {
    id: 'apple_scab',
    crop: 'Apple',
    cropKey: 'apple',
    name: 'Apple Scab Lesions',
    category: 'Crop Disease',
    pathogen: 'Venturia inaequalis (Ascomycete)',
    type: 'Deciduous Tree Fruit Pathogen',
    typicalSeverity: 'Moderate',
    confidence: 94,
    baseRisk: 75,
    weatherSensitivity: {
      minTemp: 10,
      maxTemp: 24,
      optTempMin: 16,
      optTempMax: 22,
      minHumidity: 82,
      rainTrigger: true
    },
    symptoms: 'Velvety olive-green to dark brown circular scabby lesions on foliage and young fruits; causes corky fruit cracking and premature defoliation.',
    heatmaps: [
      { x: 44, y: 40, radius: 24, label: 'Olive Scab Lesion' },
      { x: 60, y: 55, radius: 18, label: 'Corky Fruit Scar' }
    ],
    immediateAction: 'Apply curative systemic triazole fungicide within 48-72 hours of rain infection period.',
    subsidizedPesticide: {
      name: 'Difenoconazole 25% EC (Score) / Dodine 65% WP',
      formulation: 'Difenoconazole 25% EC @ 100-120 ml/acre',
      centralScheme: 'MIDH Apple & Temperate Horticulture Mission (50% DBT)',
      subsidyRate: '50% Direct Reimbursement',
      approxSavings: '₹750 / acre',
      maxClaim: 'Up to 2 Acres (₹1,500 max)'
    },
    translations: {
      en: {
        name: 'Apple Scab Lesions',
        category: 'Crop Pathology Disease',
        type: 'Fruit Tree Fungal Pathogen',
        severity: 'Moderate Severity',
        symptoms: 'Velvety olive-green to dark brown circular scabby lesions on foliage and young fruits; causes corky fruit cracking and premature defoliation.',
        immediateAction: 'Apply curative systemic triazole fungicide within 48-72 hours of rain infection period.',
        subsidizedInput: 'Difenoconazole 25% EC (Score) & Dodine',
        schemeName: 'MIDH Apple Scab Management Subsidy (50% DBT)',
        advisory: {
          organic: {
            title: 'Biological Interventions',
            steps: [
              'Spray wettable sulfur (80% WDG) @ 3 g / Litre of water at pink bud stage.',
              '5% Urea spray on orchard floor in autumn to decompose overwintering fallen leaves.'
            ]
          },
          chemical: {
            title: 'Precision Chemical Prescription',
            warning: 'Time spray within 72 hours of rain infection event for curative action.',
            steps: [
              'Difenoconazole 25% EC (Score) @ 0.3 ml / Litre of water.',
              'OR Dodine 65% WP @ 0.75 g / Litre of water.',
              'Pre-Harvest Interval (PHI): 14 Days.'
            ]
          },
          cultural: {
            title: 'Cultural Practices',
            steps: [
              'Prune canopy annually to maximize sunlight penetration and speed up leaf drying.',
              'Shred and compost fallen leaves during autumn.'
            ]
          }
        },
        xai: {
          imageEvidence: ['Velvety olive-green scabs with defined margin.'],
          environmentalFactors: 'Cool wet spring weather (16-22°C) with persistent leaf moisture causes ascospores to infect.',
          aiDecisionConfidence: '94% match with Venturia inaequalis lesions.',
          treatmentRationale: 'Difenoconazole provides powerful curative kickback action inside leaf cuticle.'
        }
      },
      hi: {
        name: 'सेब का स्कैब (दागदार फल व पत्ती रोग)',
        category: 'फसल फफूंद रोग',
        type: 'फल वृक्ष फफूंद रोग',
        severity: 'मध्यम गंभीरता (फल खराब होने का खतरा)',
        symptoms: 'पत्तियों और छोटे फलों पर मखमली जैतून-हरे से काले-भूरे रंग के खुरदुरे चकत्ते; फल फटने लगना और समय से पहले पत्तियां गिरना।',
        immediateAction: 'बारिश के संक्रमण के 48-72 घंटों के भीतर डाइफेनोकोनाजोल फफूंदनाशक का छिड़काव करें।',
        subsidizedInput: 'डाइफेनोकोनाजोल 25% ईसी (स्कोर) / डोडीन 65% डब्लूपी',
        schemeName: 'एमआईडीएच सेब स्कैब प्रबंधन सहायता योजना (50% डीबीटी)',
        advisory: {
          organic: {
            title: 'जैविक उपाय',
            steps: [
              'गुलाबी कली (पिंक बड) अवस्था में घुलनशील गंधक (सल्फर 80%) 3 ग्राम/लीटर का छिड़काव करें।',
              'पतझड़ में बाग की जमीन पर गिरी पत्तियों पर 5% यूरिया का छिड़काव करें जिससे पत्तियां गल जाएं।'
            ]
          },
          chemical: {
            title: 'सटीक रासायनिक उपचार (फफूंदनाशक)',
            warning: 'बारिश होने के 72 घंटे के भीतर छिड़काव करने से फफूंद तुरंत खत्म होती है।',
            steps: [
              'डाइफेनोकोनाजोल 25% ईसी (स्कोर) @ 0.3 मिली प्रति लीटर पानी।',
              'या डोडीन 65% डब्लूपी @ 0.75 ग्राम प्रति लीटर पानी।',
              'तुड़ाई सुरक्षा समय: 14 दिन।'
            ]
          },
          cultural: {
            title: 'कृषि प्रबंधन एवं रोकथाम',
            steps: [
              'सर्दियों में पेड़ों की उचित छंटाई (प्रूनिंग) करें ताकि धूप और हवा पत्तियों तक पहुंचे।',
              'बाग में नीचे गिरी हुई पत्तियों को इकट्ठा कर नष्ट करें।'
            ]
          }
        },
        xai: {
          imageEvidence: ['पत्तियों और फल पर मखमली जैतून-हरे खुरदुरे स्कैब धब्बे मिले।'],
          environmentalFactors: '16-22°C तापमान और बारिश के बाद लगातार गीली पत्तियां स्कैब को बढ़ाती हैं।',
          aiDecisionConfidence: '94% सटीकता से सेब स्कैब की पहचान।',
          treatmentRationale: 'डाइफेनोकोनाजोल पत्ती की त्वचा के अंदर घुसकर फफूंद को समाप्त करता है।'
        }
      },
      bn: {
        name: 'আপেলের স্ক্যাব রোগ',
        category: 'ফসলের ছত্রাকজনিত রোগ',
        type: 'ফলজ গাছের ছত্রাক',
        severity: 'মাঝারি তীব্রতা',
        symptoms: 'পাতা ও কচি ফলের ওপর কালচে জলপাই রঙের খসখসে দাগ; ফল ফেটে যাওয়া ও অসময়ে পাতা ঝরে পড়া।',
        immediateAction: 'বৃষ্টির পর ৪৮-৭২ ঘণ্টার মধ্যে ডাইফেনোকোনাজোল স্প্রে করুন।',
        subsidizedInput: 'ডাইফেনোকোনাজোল ২৫% ইসি ও ডোডিন',
        schemeName: 'এমআইডিএইচ আপেল স্ক্যাব দমন অনুদান (৫০% ডিবিটি)',
        advisory: {
          organic: {
            title: 'জৈব প্রতিকার',
            steps: ['সালফার ছত্রাকনাশক ৩ গ্রাম/লিটার স্প্রে করুন।']
          },
          chemical: {
            title: 'সঠিক ছত্রাকনাশক',
            warning: 'বৃষ্টির পরেই স্প্রে করা আবশ্যক।',
            steps: ['ডাইফেনোকোনাজোল ২৫% ইসি @ ০.৩ মিলি প্রতি লিটার জলে।']
          },
          cultural: {
            title: 'কৃষি পরিচালনা',
            steps: ['গাছের ডালপালা ছেঁটে আলো-বাতাস চলাচলের ব্যবস্থা করুন।']
          }
        },
        xai: {
          imageEvidence: ['ফল ও পাতায় জলপাই রঙের স্ক্যাব স্পষ্ট।'],
          environmentalFactors: '১৬-২২° সে. তাপমাত্রা ও ভেজা পাতায় ছত্রাকের বৃদ্ধি ঘটে।',
          aiDecisionConfidence: '৯৪% নিশ্চিতিতে স্ক্যাব শনাক্ত।',
          treatmentRationale: 'ডাইফেনোকোনাজোল ফলের ভেতরে ছত্রাকের আক্রমণ প্রতিহত করে।'
        }
      },
      as: {
        name: 'আপেলৰ স্কেব ৰোগ (দাগ পৰা ৰোগ)',
        category: 'শস্যৰ ভেঁকুৰজনিত ৰোগ',
        type: 'ফল-গছৰ ভেঁকুৰ',
        severity: 'মধ্যম মাত্ৰাৰ ৰোগ',
        symptoms: 'পাত আৰু ফলত ক’লা-বাদামী খহটা দাগ; ফল ফাটি যায় আৰু সময়ৰ আগতে পাত সৰি পৰে।',
        immediateAction: 'বৰষুণৰ পিছত ডাইফেন’ক’নাজ’ল ঔষধ স্প্ৰে কৰক।',
        subsidizedInput: 'ডাইফেন’ক’নাজ’ল ২৫% ইচি আৰু ড’ডিন',
        schemeName: 'এমআইডিএইচ আপেল স্কেব ব্যৱস্থাপনা সাহায্য (৫০% ডিবিটি)',
        advisory: {
          organic: {
            title: 'জৈৱিক ব্যৱস্থা',
            steps: ['ছালফাৰ ভেঁকুৰনাশক ৩ গ্ৰাম/লিটাৰ পানীত স্প্ৰে কৰক।']
          },
          chemical: {
            title: 'সঠিক ৰাসায়নিক ঔষধ',
            warning: 'বৰষুণৰ পিছতেই স্প্ৰে কৰক।',
            steps: ['ডাইফেন’ক’নাজ’ল ২৫% ইচি @ ০.৩ মিলি প্ৰতি লিটাৰ পানীত।']
          },
          cultural: {
            title: 'পথাৰ ব্যৱস্থাপনা',
            steps: ['গছৰ ডাল নিয়মীয়াকৈ কাটি ৰ’দ সোমাব দিয়ক।']
          }
        },
        xai: {
          imageEvidence: ['ফলত খহটা দাগ দেখা গৈছে।'],
          environmentalFactors: '১৬-২২° চে. উষ্ণতা আৰু সেমেকা পাতত এই ৰোগ হয়।',
          aiDecisionConfidence: '৯৪% নিশ্চিতিৰে আপেল স্কেব চিনাক্ত।',
          treatmentRationale: 'ডাইফেন’ক’নাজ’লে ভেঁকুৰ ধ্বংস কৰে।'
        }
      },
      pa: {
        name: 'ਸੇਬ ਦਾ ਸਕੈਬ ਰੋਗ (ਖ਼ਰੂਟੀ ਰੋਗ)',
        category: 'ਫ਼ਸਲੀ ਉੱਲੀ ਰੋਗ',
        type: 'ਫ਼ਲਦਾਰ ਦਰੱਖ਼ਤਾਂ ਦੀ ਉੱਲੀ',
        severity: 'ਮੱਧਮ ਖ਼ਤਰਾ',
        symptoms: 'ਪੱਤਿਆਂ ਅਤੇ ਫਲਾਂ ਤੇ ਜੈਤੂਨੀ-ਹਰੇ ਤੋਂ ਕਾਲੇ-ਭੂਰੇ ਖੁਰਦਰੇ ਦਾਗ਼; ਫਲ ਪਾਟਣਾ।',
        immediateAction: 'ਮੀਂਹ ਪੈਣ ਮਗਰੋਂ 72 ਘੰਟਿਆਂ ਅੰਦਰ ਡਾਈਫੈਨੋਕੋਨਾਜ਼ੋਲ ਦਾ ਛਿੜਕਾਅ ਕਰੋ।',
        subsidizedInput: 'ਡਾਈਫੈਨੋਕੋਨਾਜ਼ੋਲ 25% ਈਸੀ / ਡੋਡੀਨ',
        schemeName: 'ਐਮਆਈਡੀਐਚ ਸੇਬ ਸਕੈਬ ਕੰਟਰੋਲ ਸਹਾਇਤਾ (50% ਡੀਬੀਟੀ)',
        advisory: {
          organic: {
            title: 'ਜੈਵਿਕ ਰੋਕਥਾਮ',
            steps: ['ਸਲਫ਼ਰ 3 ਗ੍ਰਾਮ ਪ੍ਰਤੀ ਲੀਟਰ ਪਾਣੀ ਵਿੱਚ ਸਪਰੇਅ ਕਰੋ।']
          },
          chemical: {
            title: 'ਸਹੀ ਉੱਲੀਨਾਸ਼ਕ ਸਪਰੇਅ',
            warning: 'ਮੀਂਹ ਤੋਂ ਬਾਅਦ ਤੁਰੰਤ ਸਪਰੇਅ ਕਰੋ।',
            steps: ['ਡਾਈਫੈਨੋਕੋਨਾਜ਼ੋਲ 25% ਈਸੀ @ 0.3 ਮਿਲੀ ਪ੍ਰਤੀ ਲੀਟਰ ਪਾਣੀ।']
          },
          cultural: {
            title: 'ਖੇਤ ਦੀ ਸਫ਼ਾਈ ਅਤੇ ਸੰਭਾਲ',
            steps: ['ਦਰੱਖ਼ਤਾਂ ਦੀ ਕਾਂਟ-ਛਾਂਟ ਕਰੋ ਤਾਂ ਜੋ ਹਵਾ ਤੇ ਧੁੱਪ ਲੱਗ ਸਕੇ।']
          }
        },
        xai: {
          imageEvidence: ['ਫਲਾਂ ਤੇ ਖੁਰਦਰੇ ਦਾਗ਼ ਸਾਫ਼ ਦਿਖਾਈ ਦਿੱਤੇ।'],
          environmentalFactors: '16-22°C ਤਾਪਮਾਨ ਅਤੇ ਗਿੱਲੇ ਪੱਤੇ ਰੋਗ ਵਧਾਉਂਦੇ ਹਨ।',
          aiDecisionConfidence: '94% ਸ਼ੁੱਧਤਾ ਨਾਲ ਪਛਾਣ ਕੀਤੀ ਗਈ।',
          treatmentRationale: 'ਡਾਈਫੈਨੋਕੋਨਾਜ਼ੋਲ ਉੱਲੀ ਨੂੰ ਤੁਰੰਤ ਨਸ਼ਟ ਕਰਦਾ ਹੈ।'
        }
      },
      mr: {
        name: 'सफरचंदावरील खपल्या (स्कॅब रोग)',
        category: 'पीक बुरशीजन्य रोग',
        type: 'फळझाडांवरील बुरशी',
        severity: 'मध्यम तीव्रता',
        symptoms: 'पानांवर व फळांवर ऑलिव्ह-हिरवे ते काळसर तपकिरी खडबडीत चट्टे; फळे तडकणे व अकाली पानगळ.',
        immediateAction: 'पावसानंतर ७२ तासांच्या आत डायफेनोकोनाझोल बुरशीनाशक फवारा.',
        subsidizedInput: 'डायफेनोकोनाझोल २५% ईसी व डोडीन',
        schemeName: 'एमआयडीएच सफरचंद खपल्या नियंत्रण योजना (५०% डीबीटी)',
        advisory: {
          organic: {
            title: 'सेंद्रिय उपाय',
            steps: ['सल्फर ३ ग्रॅम प्रति लिटर पाण्यात फवारा.']
          },
          chemical: {
            title: 'अचूक रासायनिक बुरशीनाशक फवारणी',
            warning: 'पावसानंतर तात्काळ फवारणी करावी.',
            steps: ['डायफेनोकोनाझोल २५% ईसी @ ०.३ मिली प्रति लिटर पाणी.']
          },
          cultural: {
            title: 'शेत व्यवस्थापन',
            steps: ['झाडांची छाटणी करून हवा व सूर्यप्रकाश खेळता ठेवा.']
          }
        },
        xai: {
          imageEvidence: ['पाने व फळांवर खपल्यासारखे डाग आढळले.'],
          environmentalFactors: '१६-२२° से. तापमान आणि पावसाळी हवामानात स्कॅब वाढतो.',
          aiDecisionConfidence: '९४% खात्रीने स्कॅब रोग ओळखला गेला.',
          treatmentRationale: 'डायफेनोकोनाझोल बुरशीचा प्रादुर्भाव मुळापासून रोखते.'
        }
      }
    }
  },

  // HEALTHY: Healthy Foliage
  healthy_crop: {
    id: 'healthy_crop',
    crop: 'General Field Crop',
    cropKey: 'healthy',
    name: 'Vigorous Healthy Crop Foliage',
    category: 'Healthy',
    pathogen: 'None (Optimal Plant Vigor)',
    type: 'Healthy Vegetative Biomass',
    typicalSeverity: 'Normal',
    confidence: 99,
    baseRisk: 8,
    weatherSensitivity: {
      minTemp: 15,
      maxTemp: 38,
      optTempMin: 22,
      optTempMax: 30,
      minHumidity: 50,
      rainTrigger: false
    },
    symptoms: 'Deep green chlorophyll pigmentation, unblemished turgid leaf lamina, intact cuticular barrier, no signs of insect chew marks or fungal mycelia.',
    heatmaps: [],
    immediateAction: 'No curative pesticide needed! Maintain regular scouting and continue balanced nutrient schedule.',
    subsidizedPesticide: {
      name: 'Bio-NPK Consortium / Neem Cake / Nano Urea (PKVY Scheme)',
      formulation: 'Bio-NPK Consortium @ 1 L/acre & Nano Urea @ 4 ml/L',
      centralScheme: 'Paramparagat Krishi Vikas Yojana (PKVY Organic Mission)',
      subsidyRate: '100% Bio-Input Grant (₹12,000/ha assistance)',
      approxSavings: '₹1,200 / acre',
      maxClaim: 'Up to 5 Acres'
    },
    translations: {
      en: {
        name: 'Vigorous Healthy Crop Foliage',
        category: 'Healthy Plant Foliage',
        type: 'Healthy Plant Biomass',
        severity: 'Optimal Health',
        symptoms: 'Deep green chlorophyll pigmentation, unblemished turgid leaf lamina, intact cuticular barrier, no signs of insect chew marks or fungal mycelia.',
        immediateAction: 'No curative pesticide needed! Maintain regular scouting and continue balanced nutrient schedule.',
        subsidizedInput: 'Bio-NPK Consortium, Neem Cake & Nano Urea',
        schemeName: 'PKVY Organic & Soil Health Mission (100% Bio-Input Grant)',
        advisory: {
          organic: {
            title: 'Maintenance of Plant Health',
            steps: [
              'Continue foliar application of bio-stimulants or seaweed extract @ 2 ml/L.',
              'Maintain active mulch layer to preserve beneficial rhizosphere microbes.'
            ]
          },
          chemical: {
            title: 'No Chemical Application Required',
            warning: 'Zero chemical pesticides recommended! Protect native pollinators and beneficial predatory insects.',
            steps: [
              'Do NOT spray prophylactic chemical insecticides on healthy foliage.',
              'Apply water-soluble 19:19:19 (NPK) @ 5 g/L only if growth acceleration is required.'
            ]
          },
          cultural: {
            title: 'Best Agronomic Practices',
            steps: [
              'Maintain consistent irrigation schedule aligned with crop evapotranspiration.',
              'Scout field twice weekly to detect initial pest arrival early.'
            ]
          }
        },
        xai: {
          imageEvidence: ['Uniform chlorophyll distribution with zero necrotic lesions.'],
          environmentalFactors: 'Current microclimate is optimal for vegetative photosynthesis.',
          aiDecisionConfidence: '99% match with healthy plant benchmarks.',
          treatmentRationale: 'Avoiding unnecessary chemical sprays protects natural predators and saves farmer input costs.'
        }
      },
      hi: {
        name: 'स्वस्थ एवं निरोगी फसल',
        category: 'स्वस्थ पौधा',
        type: 'उत्कृष्ट वानस्पतिक स्वास्थ्य',
        severity: 'उत्कृष्ट स्वास्थ्य (कोई रोग नहीं)',
        symptoms: 'गहरा हरा रंग, चमकदार पत्तियां, कीट या फफूंद का कोई लक्षण नहीं, पौधे में पूरा ओज एवं शक्ति।',
        immediateAction: 'किसी कीटनाशक की आवश्यकता नहीं है! नियमित निगरानी रखें और संतुलित पोषण जारी रखें।',
        subsidizedInput: 'बायो-एनपीके कंसोर्टियम, नीम खली एवं नैनो यूरिया',
        schemeName: 'परम्परागत कृषि विकास योजना (पीकेवीवाई - 100% जैविक अनुदान)',
        advisory: {
          organic: {
            title: 'पौध स्वास्थ्य रखरखाव',
            steps: [
              'फसल में जीवामृत या समुद्री शैवाल अर्क (सीवीड) 2 मिली/लीटर का पोषण छिड़काव करें।',
              'खेत में जैविक मल्चिंग बनाए रखें जिससे मित्र कीट व सूक्ष्मजीव सुरक्षित रहें।'
            ]
          },
          chemical: {
            title: 'रासायनिक कीटनाशक की कोई आवश्यकता नहीं',
            warning: 'किसी भी रासायनिक कीटनाशक का अनावश्यक छिड़काव न करें! मित्र कीटों और मधुमक्खियों को बचाएं।',
            steps: [
              'स्वस्थ फसल पर बिना जरूरत कीटनाशक दवा न डालें।',
              'यदि बढ़वार की आवश्यकता हो तो घुलनशील 19:19:19 एनपीके 5 ग्राम/लीटर का छिड़काव करें।'
            ]
          },
          cultural: {
            title: 'सर्वोत्तम कृषि प्रबंधन',
            steps: [
              'फसल की आवश्यकतानुसार संतुलित सिंचाई जारी रखें।',
              'सप्ताह में दो बार खेत का मुआयना करें ताकि किसी भी नए कीट की समय रहते पहचान हो सके।'
            ]
          }
        },
        xai: {
          imageEvidence: ['पत्तियों पर क्लोरोफिल का एकसमान वितरण, कोई धब्बा या कीड़ा नहीं।'],
          environmentalFactors: 'वर्तमान मौसम फसल की अच्छी बढ़वार के लिए पूरी तरह अनुकूल है।',
          aiDecisionConfidence: '99% सटीकता से स्वस्थ पौधे की पुष्टि।',
          treatmentRationale: 'अनावश्यक रसायनों से बचकर किसान का खर्च बचाना और मित्र कीटों की रक्षा करना।'
        }
      },
      bn: {
        name: 'সুস্থ ও সতেজ ফসল',
        category: 'সুস্থ উদ্ভিদ',
        type: 'উৎকৃষ্ট স্বাস্থ্য',
        severity: 'উত্তম স্বাস্থ্য (কোনো রোগ নেই)',
        symptoms: 'গাঢ় সবুজ সতেজ পাতা, কোনো পোকা বা ছত্রাকের দাগ নেই, সম্পূর্ণ রোগমুক্ত স্বাভাবিক বৃদ্ধি।',
        immediateAction: 'কীটনাশক ব্যবহারের প্রয়োজন নেই! নিয়মিত পর্যবেক্ষণ করুন ও সুষম সার দিন।',
        subsidizedInput: 'বায়ো-এনপিকে কনসোর্টিয়াম, নিম খোল ও ন্যানো ইউরিয়া',
        schemeName: 'পরম্পরাগত কৃষি বিকাশ যোজনা (১০০% জৈব সার অনুদান)',
        advisory: {
          organic: {
            title: 'সুস্বাস্থ্য বজায় রাখা',
            steps: ['জীবাণূ সার ও জৈব উদ্দীপক ব্যবহার চালিয়ে যান।']
          },
          chemical: {
            title: 'রাসায়নিক ঔষধ প্রয়োজন নেই',
            warning: 'বিনা প্রয়োজনে কোনো কীটনাশক স্প্রে করবেন না! উপকারী পোকাদের বাঁচান।',
            steps: ['সুস্থ ফসলে কীটনাশক ছিটাবেন না।']
          },
          cultural: {
            title: 'উন্নত কৃষি পরিচালনা',
            steps: ['নিয়মিত জমিতে নজর রাখুন ও সঠিক সেচ দিন।']
          }
        },
        xai: {
          imageEvidence: ['পাতায় কোনো ক্ষত বা রোগজীবাণু নেই।'],
          environmentalFactors: 'আবহাওয়া গাছের বৃদ্ধির জন্য অনুকূল।',
          aiDecisionConfidence: '৯৯% নিশ্চিতিতে সুস্থ ফসল শনাক্ত।',
          treatmentRationale: 'অপ্রয়োজনীয় বিষ প্রয়োগ না করে খরচ বাঁচানো হয়েছে।'
        }
      },
      as: {
        name: 'সুস্থ আৰু সতেজ শস্য',
        category: 'সুস্থ উদ্ভিদ',
        type: 'উৎকৃষ্ট স্বাস্থ্য',
        severity: 'উত্তম স্বাস্থ্য (কোনো ৰোগ নাই)',
        symptoms: 'গাঢ় সেউজীয়া উজ্বল পাত, কোনো পোক বা ভেঁকুৰৰ দাগ নাই, সম্পূৰ্ণ সতেজ বৃদ্ধি।',
        immediateAction: 'কোনো কীটনাশক ঔষধৰ প্ৰয়োজন নাই! নিয়মীয়া নিৰীক্ষণ অব্যাহত ৰাখক।',
        subsidizedInput: 'জৈৱ-এনপিকে কঞ্চ’ৰ্টিয়াম, নিমৰ খলিহৈ আৰু নেন’ ইউৰিয়া',
        schemeName: 'পৰম্পৰাগত কৃষি বিকাশ যোজনা (১০০% জৈৱিক সাৰ অনুদান)',
        advisory: {
          organic: {
            title: 'স্বাস্থ্য ৰক্ষাৰ উপায়',
            steps: ['জৈৱিক সাৰ আৰু তৰল অনুজীৱ সাৰ প্ৰয়োগ কৰক।']
          },
          chemical: {
            title: 'ৰাসায়নিক ঔষধৰ প্ৰয়োজন নাই',
            warning: 'অপ্ৰয়োজনীয় কীটনাশক স্প্ৰে নকৰিব! উপকাৰী পোক আৰু মৌ-মাখি ৰক্ষা কৰক।',
            steps: ['সুস্থ শস্যত বিষাক্ত কীটনাশক ব্যৱহাৰ নকৰিব।']
          },
          cultural: {
            title: 'উন্নত কৃষি পৰিচালনা',
            steps: ['সপ্তাহত দুবাৰ পথাৰ পৰিদৰ্শন কৰক।']
          }
        },
        xai: {
          imageEvidence: ['পাতত কোনো ভেঁকুৰ বা কীটৰ দাগ নাই।'],
          environmentalFactors: 'বতৰ শস্যৰ বৃদ্ধিৰ বাবে উত্তম।',
          aiDecisionConfidence: '৯৯% নিশ্চিতিৰে সুস্থ শস্য চিনাক্ত।',
          treatmentRationale: 'অপ্ৰয়োজনীয় ঔষধ ব্যৱহাৰ নকৰি কৃষকৰ ব্যয় ৰক্ষা কৰা হৈছে।'
        }
      },
      pa: {
        name: 'ਤੰਦਰੁਸਤ ਅਤੇ ਰੋਗ-ਮੁਕਤ ਫ਼ਸਲ',
        category: 'ਸਿਹਤਮੰਦ ਫ਼ਸਲ',
        type: 'ਚੰਗਾ ਵਾਧਾ',
        severity: 'ਉੱਤਮ ਸਿਹਤ (ਕੋਈ ਰੋਗ ਨਹੀਂ)',
        symptoms: 'ਗੂੜ੍ਹਾ ਹਰਾ ਰੰਗ, ਸਾਫ਼ ਪੱਤੇ, ਕੀੜੇ ਜਾਂ ਉੱਲੀ ਦਾ ਕੋਈ ਅਸਰ ਨਹੀਂ, ਪੂਰੀ ਤਰ੍ਹਾਂ ਨਰੋਈ ਫ਼ਸਲ।',
        immediateAction: 'ਕਿਸੇ ਦਵਾਈ ਦੀ ਲੋੜ ਨਹੀਂ! ਨਿਗਰਾਨੀ ਰੱਖੋ ਅਤੇ ਸੰਤੁਲਿਤ ਖ਼ੁਰਾਕ ਜਾਰੀ ਰੱਖੋ।',
        subsidizedInput: 'ਬਾਇਓ-ਐਨਪੀਕੇ ਕੰਸੋਰਟੀਅਮ, ਨਿੰਮ ਖਲ੍ਹ ਅਤੇ ਨੈਨੋ ਯੂਰੀਆ',
        schemeName: 'ਪਰੰਪਰਾਗਤ ਕ੍ਰਿਸ਼ੀ ਵਿਕਾਸ ਯੋਜਨਾ (100% ਜੈਵਿਕ ਗ੍ਰਾਂਟ)',
        advisory: {
          organic: {
            title: 'ਫ਼ਸਲ ਦੀ ਸਾਂਭ-ਸੰਭਾਲ',
            steps: ['ਦੇਸੀ ਰੂੜੀ ਅਤੇ ਜੈਵਿਕ ਖ਼ਾਦਾਂ ਦੀ ਵਰਤੋਂ ਕਰੋ।']
          },
          chemical: {
            title: 'ਕਿਸੇ ਰਸਾਇਣ ਦੀ ਲੋੜ ਨਹੀਂ',
            warning: 'ਬਿਨਾਂ ਵਜ੍ਹਾ ਕੀਟਨਾਸ਼ਕ ਸਪਰੇਅ ਨਾ ਕਰੋ! ਮਿੱਤਰ ਕੀੜਿਆਂ ਨੂੰ ਬਚਾਓ।',
            steps: ['ਤੰਦਰੁਸਤ ਫ਼ਸਲ ਤੇ ਦਵਾਈ ਨਾ ਛਿੜਕੋ।']
          },
          cultural: {
            title: 'ਸਹੀ ਖੇਤੀ ਪ੍ਰਬੰਧ',
            steps: ['ਹਫ਼ਤੇ ਵਿੱਚ ਦੋ ਵਾਰ ਖੇਤ ਦਾ ਗੇੜਾ ਮਾਰੋ।']
          }
        },
        xai: {
          imageEvidence: ['ਪੱਤਿਆਂ ਤੇ ਕੋਈ ਨੁਕਸਾਨ ਜਾਂ ਦਾਗ਼ ਨਹੀਂ।'],
          environmentalFactors: 'ਮੌਸਮ ਫ਼ਸਲ ਦੇ ਵਾਧੇ ਲਈ ਬਹੁਤ ਵਧੀਆ ਹੈ।',
          aiDecisionConfidence: '99% ਸ਼ੁੱਧਤਾ ਨਾਲ ਤੰਦਰੁਸਤ ਫ਼ਸਲ ਦੀ ਪੁਸ਼ਟੀ।',
          treatmentRationale: 'ਬੇਲੋੜੀ ਸਪਰੇਅ ਤੋਂ ਬਚ ਕੇ ਖ਼ਰਚਾ ਬਚਾਇਆ ਗਿਆ ਹੈ।'
        }
      },
      mr: {
        name: 'निरोगी व सशक्त पीक',
        category: 'निरोगी पीक',
        type: 'उत्कृष्ट वाढ',
        severity: 'उत्कृष्ट आरोग्य (रोगमुक्त)',
        symptoms: 'गडद हिरवा रंग, चमकदार पाने, कीड व रोगाचा कोणताही डाग नाही, पिकाची जोमदार वाढ.',
        immediateAction: 'कोणत्याही औषधाची गरज नाही! नियमित पाहणी करा व संतुलित खते चालू ठेवा.',
        subsidizedInput: 'बायो-एनपीके जिवाणू संवर्धन, निंबोळी पेंड व नॅनो युरिया',
        schemeName: 'परंपरागत कृषी विकास योजना (१००% सेंद्रिय खत अनुदान)',
        advisory: {
          organic: {
            title: 'आरोग्य संवर्धन',
            steps: ['जीवामृत किंवा सेंद्रिय टॉनिकचा वापर चालू ठेवा.']
          },
          chemical: {
            title: 'रासायनिक औषधांची गरज नाही',
            warning: 'विनाकारण रासायनिक औषधे फवारू नका! मित्रकिडी व मधमाश्यांचे संरक्षण करा.',
            steps: ['निरोगी पिकावर कीटकनाशक फवारू नका.']
          },
          cultural: {
            title: 'उत्तम शेती पद्धती',
            steps: ['वेळेवर योग्य पाणी द्या आणि शेताची नियमित पाहणी करा.']
          }
        },
        xai: {
          imageEvidence: ['पानांवर कोणताही डाग अथवा कीड आढळली नाही.'],
          environmentalFactors: 'हवामान पिकाच्या वाढीसाठी अनुकूल आहे.',
          aiDecisionConfidence: '९९% अचूकतेने निरोगी पीक निश्चित.',
          treatmentRationale: 'अनावश्यक औषध फवारणी टाळून शेतकऱ्याचा खर्च वाचवला आहे.'
        }
      }
    }
  }
};

/* =========================================================================
 * 2. STATE-WISE GOVERNMENT AGRICULTURE DATA & SCHEMES
 * ========================================================================= */
export const TRANSLATIONS = {
  en: {
    btnViewResults: "⚡ Run AI Diagnosis & View Results ➔",
    btnBackInput: "⬅ Back to Disease Selection",
    page1Title: "Select Crop & Disease Infestation",
    page1Sub: "Choose a verified disease/pest sample below or upload a leaf photo to begin AI analysis",
    page2Title: "AI Diagnostic Results & Treatment Advisory",
    page2Sub: "Full disease analysis, weather risk coupling, and precision remedy recommendations",

    appTitle: 'CropAlert',
    tagline: 'AI-Powered Early Crop Disease & Pest Infestation Detection',
    badgeSih: 'AI Crop Diagnostic Engine',
    tabQuickScan: 'AI Diagnosis Studio',
    tabHistory: 'Field Scans History',
    btnOfflineToggle: 'Test Offline Field Mode',
    btnPrintReport: 'Print Advisory',
    offlineBanner: 'Offline Mode Active: Operating on cached Edge-ML vision weights. Field scans are saved locally and will auto-sync once network returns.',
    offlineActiveToast: 'Offline Field Mode activated. Image processing runs on local Edge-ML model.',
    onlineActiveToast: 'Online Mode restored. Synced with Agronomy Cloud.',

    // Workflow Bar
    step1Title: '1. Capture',
    step1Sub: 'Crop leaf / pest photo',
    step2Title: '2. Pre-process',
    step2Sub: 'Quality check & focus',
    step3Title: '3. Detect',
    step3Sub: 'AI predicts disease & pest',
    step4Title: '4. Assess',
    step4Sub: 'Contextual weather risk',
    step5Title: '5. Act',
    step5Sub: 'Targeted treatment guide',

    // Upload & Camera
    uploadTitle: 'Capture or Upload Crop Photo',
    uploadSubtitle: 'Tap below to upload or choose a pest/disease sample',
    uploadDesc: 'Take a close-up photo of an affected leaf, fruit, or pest symptom.',
    btnTakePhoto: 'Use Camera',
    btnBrowsePhoto: 'Upload Photo',
    toggleHeatmap: 'Toggle Symptom Heatmap Overlay',
    sampleTitle: 'Or choose a verified field sample to test instantly:',
    clarityScoreHigh: 'Clarity Score: 96% (Optimal Focus)',
    clarityScoreLow: 'Clarity Score: 48% (Low)',
    qualityGatePassed: 'Image Quality: Sharp Focus & Optimal Illumination',
    qualityGateWarning: 'Quality Alert: Photo is blurry or underexposed',
    qualityGatePassedDesc: 'Resolution and focus meet AI diagnostic standards (confidence reliable).',
    qualityGateWarningDesc: 'AI confidence may be reduced. Please re-shoot with steady hands and clear daylight.',

    // Dropdown Labels & Options
    cropLabel: 'Select Crop:',
    cropOptions: {
      Cotton: 'Cotton (Gossypium)',
      Maize: 'Maize / Corn (Zea mays)',
      Chilli: 'Chilli / Pepper (Capsicum)',
      Tomato: 'Tomato (Solanum lycopersicum)',
      Rice: 'Rice / Paddy (Oryza sativa)',
      Wheat: 'Wheat (Triticum aestivum)',
      Potato: 'Potato (Solanum tuberosum)',
      Apple: 'Apple (Malus domestica)',
      General: 'Other Field Crop'
    },
    stageLabel: 'Crop Growth Stage:',
    stageOptions: {
      Seedling: 'Nursery / Seedling',
      Vegetative: 'Vegetative (Foliar Growth)',
      Flowering: 'Flowering & Boll/Fruit Set',
      Fruiting: 'Maturity / Ripening'
    },
    moistureLabel: 'Field Soil Moisture:',
    moistureOptions: {
      Moist: 'Moist / Irrigated',
      Dry: 'Dry / Water-Stressed',
      Waterlogged: 'Waterlogged / Flooded'
    },
    locationLabel: 'Field Location / PIN:',
    locationPlaceholder: 'North Farm Plot #4, PIN 782142',
    btnDiagnose: 'Run AI Crop & Pest Diagnosis',
    analyzingText: 'Pre-processing image quality, running CNN feature extraction, assessing microclimate...',

    // Weather Simulation Telemetry
    simulateWeather: 'Microclimate & Weather Risk Telemetry',
    dynamicCoupling: 'Dynamic Coupling',
    tempLabel: 'Temperature',
    humidityLabel: 'Relative Humidity',
    rainLabel: 'Rain Forecast',
    rainExpected: 'Rain Expected (Wet Canopy)',
    rainNone: 'No Rain Expected (Dry)',
    simulateWetCanopy: 'Simulate wet canopy',
    weatherScenariosLabel: 'Weather Scenarios:',
    presetMonsoon: '🌧️ Monsoon Wet (24°C, 92% Hum)',
    presetHotDry: '☀️ Hot & Dry Summer (36°C, 38%)',
    presetCoolFog: '🌫️ Cold Morning Dew (14°C, 88%)',
    presetOptimal: '🌤️ Controlled Optimal (27°C, 55%)',

    // Sample Chips
    sampleTags: {
      pest: 'Pest',
      disease: 'Disease',
      healthy: 'Healthy',
      gateTest: 'Gate Test'
    },
    sampleLabels: {
      cotton_bollworm: 'Cotton: Pink Bollworm',
      maize_fall_armyworm: 'Maize: Fall Armyworm',
      chilli_thrips: 'Chilli: Thrips & Mites',
      tomato_late_blight: 'Tomato: Late Blight',
      rice_blast: 'Rice: Blast Lesion',
      wheat_yellow_rust: 'Wheat: Yellow Rust',
      potato_early_blight: 'Potato: Early Blight',
      apple_scab: 'Apple: Olive Scab',
      healthy_crop: 'Healthy Crop Foliage',
      blurry_test: 'Blurry Photo (Quality Gate)'
    },

    // Diagnosis Results Card
    diagnosisHeader: 'AI Diagnostic Result',
    confidenceLabel: 'AI Confidence Match',
    severityLabel: 'Condition Severity',
    pathogenLabel: 'Causative Agent / Pathogen',
    keySymptomsLabel: 'Key Visual Symptoms Detected:',
    safeguardTitle: 'Advisory Safeguard:',
    safeguardDesc: 'Prediction confidence is below threshold due to photo clarity. This is presented as an early alert, not a definitive diagnosis. Re-capture in clear sunlight before applying expensive inputs.',
    modelVersionLabel: 'CropAlert Mobile CNN v3.2',
    catPest: '🐛 Insect Pest Infestation',
    catDisease: '🍄 Crop Pathology Disease',
    catHealthy: '✨ Healthy Plant Foliage',
    sevOptimal: 'Optimal Health',
    sevSevere: 'Severe Infestation / Outbreak',
    sevModerate: 'Moderate Severity',

    // Risk Gauge
    riskTitle: 'Contextual Microclimate Risk Score',
    riskFormulaDesc: 'Combines AI image diagnosis + live temperature/humidity + crop stage vulnerability.',
    riskLabel: 'Risk',
    statusLabel: 'Status:',
    riskLow: 'Low Incubation Risk (Manageable)',
    riskMed: 'Moderate Spread Risk (Precautionary Alert)',
    riskHigh: 'CRITICAL EPIDEMIC ALERT (Immediate Action Needed)',
    riskFactorsText: 'Temp: {temp}°C • Hum: {hum}% • Soil: {soil}',

    // Action & Advisory
    immediateActionLabel: 'Priority Recommended Next Action',
    treatmentDashboardTitle: 'Treatment & Advisory Dashboard',
    tabOrganic: '🌿 Organic / Biological',
    tabChemical: '🧪 Precision Chemical (Exact Dosage)',
    tabCultural: '🚜 Cultural & Agronomic Prevention',
    precisionNotice: 'Precision Notice:',
    audioListenBtn: 'Listen to Advisory in Audio',
    audioStopBtn: 'Stop Audio',
    voiceStartedToast: 'Playing voice advisory in English...',
    voiceStoppedToast: 'Voice guidance stopped.',

    // Explainable AI (XAI)
    explainAiBtn: 'Why AI Recommended This (Explain AI Result)',
    explainAiHideBtn: 'Hide AI Decision Explanation',
    xaiTitle: 'Explainable AI (XAI) Decision Breakdown',
    xaiStep1: '1. Visual Pathology Evidence',
    xaiStep2: '2. Microclimate Incubation Match',
    xaiStep3: '3. Vision CNN Layer Activation',
    xaiStep4: '4. Chemical Action Mechanism Rationale',

    // History Log
    historyTitle: 'Field Scans & Diagnostics History',
    historyCached: 'Cached in local storage',
    historySynced: 'Synced Cloud',
    historyQueued: 'Queued Local',
    historyMatch: '% Match',

    // Government Assistance & Pesticide Subsidy
    govTicketNo: 'Inspection Ticket ID:'
  },

  hi: {
    btnViewResults: "⚡ एआई जांच चलाएं और परिणाम देखें ➔",
    btnBackInput: "⬅ फसल व रोग चयन पर वापस जाएं",
    page1Title: "फसल और रोग / कीट का चयन करें",
    page1Sub: "एआई जांच शुरू करने के लिए नीचे दिए गए रोग के नमूनों में से चुनें या पत्ते की फोटो अपलोड करें",
    page2Title: "एआई जांच परिणाम एवं उपचार परामर्श",
    page2Sub: "विस्तृत रोग विश्लेषण, मौसम जोखिम और सटीक उपचार सलाह",

    appTitle: 'क्रॉपअलर्ट (CropAlert)',
    tagline: 'फसल रोगों और कीटों का एआई आधारित त्वरित निदान एवं सटीक उपचार',
    badgeSih: 'एआई फसल निदान इंजन',
    tabQuickScan: 'एआई जांच केंद्र',
    tabHistory: 'स्कैन इतिहास',
    btnOfflineToggle: '📴 ऑफलाइन मोड टेस्ट',
    btnPrintReport: '🖨️ पर्चा प्रिंट करें',
    offlineBanner: 'ऑफलाइन मोड सक्रिय: लोकल एआई मॉडल पर कार्य जारी है। नेटवर्क आने पर डेटा स्वतः सिंक हो जाएगा।',
    offlineActiveToast: 'ऑफलाइन मोड सक्रिय हुआ। फोटो जांच लोकल एआई द्वारा की जाएगी।',
    onlineActiveToast: 'ऑनलाइन मोड बहाल हुआ। एग्रोनॉमी क्लाउड से जुड़ा है।',

    // Workflow Bar
    step1Title: '1. फोटो लें',
    step1Sub: 'पत्ती या कीट की फोटो',
    step2Title: '2. गुणवत्ता जांच',
    step2Sub: 'स्पष्टता एवं फोकस',
    step3Title: '3. एआई पहचान',
    step3Sub: 'रोग व कीट का निदान',
    step4Title: '4. मौसम जोखिम',
    step4Sub: 'तापमान व नमी विश्लेषण',
    step5Title: '5. उपचार कदम',
    step5Sub: 'सटीक रासायनिक व जैविक दवा',

    // Upload & Camera
    uploadTitle: 'फसल की पत्ती या कीट की फोटो खींचें',
    uploadSubtitle: 'फोटो अपलोड करें या तुरंत जांचने के लिए नीचे नमूना चुनें',
    uploadDesc: 'रोगग्रस्त पत्ती, तने या कीट की साफ व नजदीक से फोटो लें।',
    btnTakePhoto: '📸 कैमरा चालू करें',
    btnBrowsePhoto: '📁 फोटो चुनें',
    toggleHeatmap: '🎯 लक्षण स्पॉट हाइलाइट देखें',
    sampleTitle: 'या तुरंत जांचने के लिए इनमें से कोई नमूना चुनें:',
    clarityScoreHigh: 'स्पष्टता स्कोर: 96% (उत्तम फोकस)',
    clarityScoreLow: 'स्पष्टता स्कोर: 48% (कम फोकस)',
    qualityGatePassed: 'फोटो गुणवत्ता: बहुत साफ व स्पष्ट',
    qualityGateWarning: 'गुणवत्ता चेतावनी: फोटो धुंधली या अंधेरे में है',
    qualityGatePassedDesc: 'फोटो का रिज़ॉल्यूशन सटीक एआई पहचान के लिए पूरी तरह उपयुक्त है।',
    qualityGateWarningDesc: 'सटीकता प्रभावित हो सकती है। कृपया दिन के उजाले में साफ फोटो लें।',

    // Dropdown Labels & Options
    cropLabel: 'फसल चुनें:',
    cropOptions: {
      Cotton: 'कपास (Cotton)',
      Maize: 'मक्का (Maize / Corn)',
      Chilli: 'मिर्च (Chilli / Pepper)',
      Tomato: 'टमाटर (Tomato)',
      Rice: 'धान / चावल (Paddy)',
      Wheat: 'गेहूं (Wheat)',
      Potato: 'आलू (Potato)',
      Apple: 'सेब (Apple)',
      General: 'अन्य खेत फसल'
    },
    stageLabel: 'फसल की अवस्था:',
    stageOptions: {
      Seedling: 'नर्सरी / अंकुरण अवस्था',
      Vegetative: 'वानस्पतिक बढ़वार अवस्था',
      Flowering: 'फूल एवं फल लगने की अवस्था',
      Fruiting: 'परिपक्वता / कटाई अवस्था'
    },
    moistureLabel: 'खेत की नमी:',
    moistureOptions: {
      Moist: 'नम / सिंचित (Moist)',
      Dry: 'सूखा / पानी की कमी (Dry)',
      Waterlogged: 'जलभराव / दलदली (Waterlogged)'
    },
    locationLabel: 'खेत का स्थान / पिन कोड:',
    locationPlaceholder: 'खेत संख्या 4, पिन 782142',
    btnDiagnose: '⚡ एआई जांच व जोखिम स्कोर देखें',
    analyzingText: 'फोटो की स्पष्टता जांच रहे हैं और कीट/रोग का विश्लेषण कर रहे हैं...',

    // Weather Simulation Telemetry
    simulateWeather: 'मौसम व सूक्ष्म जलवायु जोखिम',
    dynamicCoupling: 'गतिशील वैज्ञानिक विश्लेषण',
    tempLabel: 'तापमान',
    humidityLabel: 'हवा में नमी (आर्द्रता)',
    rainLabel: 'बारिश की संभावना',
    rainExpected: 'बारिश की संभावना (पत्तियां गीली)',
    rainNone: 'बारिश नहीं (सूखा मौसम)',
    simulateWetCanopy: 'पत्तियों पर नमी का प्रभाव देखें',
    weatherScenariosLabel: 'मौसम के परिदृश्य:',
    presetMonsoon: '🌧️ मानसूनी बारिश (24°C, 92% नमी)',
    presetHotDry: '☀️ शुष्क गर्मी (36°C, 38% नमी)',
    presetCoolFog: '🌫️ सुबह की ओस व ठंड (14°C, 88%)',
    presetOptimal: '🌤️ नियंत्रित अनुकूल मौसम (27°C, 55%)',

    // Sample Chips
    sampleTags: {
      pest: 'कीट',
      disease: 'रोग',
      healthy: 'स्वस्थ',
      gateTest: 'गुणवत्ता जांच'
    },
    sampleLabels: {
      cotton_bollworm: 'कपास: गुलाबी सुंडी',
      maize_fall_armyworm: 'मक्का: फॉल आर्मीवर्म',
      chilli_thrips: 'मिर्च: थ्रिप्स व मुरड़ा',
      tomato_late_blight: 'टमाटर: पिछेता झुलसा',
      rice_blast: 'धान: झोंका रोग (ब्लास्ट)',
      wheat_yellow_rust: 'गेहूं: पीला रतुआ',
      potato_early_blight: 'आलू: अगेती झुलसा',
      apple_scab: 'सेब: स्कैब रोग',
      healthy_crop: 'स्वस्थ एवं निरोगी फसल',
      blurry_test: 'धुंधली फोटो (क्वालिटी गेट टेस्ट)'
    },

    // Diagnosis Results Card
    diagnosisHeader: 'एआई जांच परिणाम',
    confidenceLabel: 'एआई विश्वास स्तर',
    severityLabel: 'गंभीरता स्तर',
    pathogenLabel: 'कारक जीव / रोगाणु',
    keySymptomsLabel: 'पहचाने गए मुख्य दृश्य लक्षण:',
    safeguardTitle: 'सुरक्षा सूचना:',
    safeguardDesc: 'फोटो स्पष्ट न होने के कारण विश्वास स्तर कम है। कोई भी महंगी दवा खरीदने से पहले दिन के उजाले में दोबारा साफ फोटो लें।',
    modelVersionLabel: 'क्रॉपअलर्ट विज़न सीएनएन v3.2',
    catPest: '🐛 कीट प्रकोप (Insect Pest)',
    catDisease: '🍄 फसल फफूंद रोग (Pathology Disease)',
    catHealthy: '✨ स्वस्थ पौधा (Healthy Foliage)',
    sevOptimal: 'उत्तम स्वास्थ्य',
    sevSevere: 'गंभीर प्रकोप (तत्काल कदम उठाएं)',
    sevModerate: 'मध्यम गंभीरता',

    // Risk Gauge
    riskTitle: 'मौसम व खेत आधारित संक्रमण जोखिम',
    riskFormulaDesc: 'एआई पहचान + तापमान व आर्द्रता + फसल अवस्था का समग्र वैज्ञानिक विश्लेषण।',
    riskLabel: 'जोखिम',
    statusLabel: 'स्थिति:',
    riskLow: 'कम जोखिम (नियंत्रण में)',
    riskMed: 'मध्यम जोखिम (सतर्कता आवश्यक)',
    riskHigh: 'गंभीर महामारी चेतावनी (तुरंत उपचार करें)',
    riskFactorsText: 'तापमान: {temp}°C • नमी: {hum}% • मिट्टी: {soil}',

    // Action & Advisory
    immediateActionLabel: 'प्राथमिक अनुशंसित कदम (पहला जरूरी काम)',
    treatmentDashboardTitle: 'सटीक उपचार एवं प्रबंधन डैशबोर्ड',
    tabOrganic: '🌿 जैविक / प्राकृतिक उपाय',
    tabChemical: '🧪 सटीक रासायनिक छिड़काव (मात्रा सहित)',
    tabCultural: '🚜 कृषि प्रबंधन व रोकथाम',
    precisionNotice: 'सटीक छिड़काव सूचना:',
    audioListenBtn: '🔊 अपनी भाषा में सलाह सुनें',
    audioStopBtn: '⏹ आवाज बंद करें',
    voiceStartedToast: 'हिंदी में कृषि सलाह सुनाई जा रही है...',
    voiceStoppedToast: 'आवाज बंद कर दी गई।',

    // Explainable AI (XAI)
    explainAiBtn: '🔍 एआई ने यह सिफारिश क्यों की? (Explain AI Result)',
    explainAiHideBtn: '🔼 एआई निर्णय विवरण छुपाएं',
    xaiTitle: 'व्याख्यात्मक एआई (XAI) निर्णय विश्लेषण',
    xaiStep1: '1. पत्ती पर दृश्य बीमारी प्रमाण',
    xaiStep2: '2. मौसम एवं आर्द्रता अनुकूलता',
    xaiStep3: '3. सीएनएन एआई मॉडल पुष्टि',
    xaiStep4: '4. कीटनाशक दवा चयन का आधार',

    // History Log
    historyTitle: 'फील्ड स्कैन एवं निदान इतिहास',
    historyCached: 'लोकल स्टोरेज में सुरक्षित',
    historySynced: 'क्लाउड पर सिंक',
    historyQueued: 'लोकल कतार में',
    historyMatch: '% समानता',

    // Government Assistance & Pesticide Subsidy
    govTicketNo: 'निरीक्षण टोकन नंबर:'
  },

  bn: {
    btnViewResults: "⚡ এআই রোগ নির্ণয় চালান ও ফলাফল দেখুন ➔",
    btnBackInput: "⬅ রোগ নির্বাচন পৃষ্ঠায় ফিরে যান",
    page1Title: "ফসল এবং রোগ / পোকা নির্বাচন করুন",
    page1Sub: "এআই পরীক্ষা শুরু করতে নিচের নমুনা থেকে বেছে নিন অথবা পাতার ছবি আপলোড করুন",
    page2Title: "এআই রোগ নির্ণয় ফলাফল ও চিকিৎসা পরামর্শ",
    page2Sub: "সম্পূর্ণ রোগ বিশ্লেষণ, আবহাওয়া ঝুঁকি এবং সঠিক প্রতিকার নির্দেশিকা",

    appTitle: 'ক্রপঅ্যালার্ট (CropAlert)',
    tagline: 'ফসলের রোগ ও পোকার দ্রুত এআই সনাক্তকরণ ও বিজ্ঞানসম্মত সমাধান',
    badgeSih: 'এআই ক্রপ ডায়াগনস্টিক ইঞ্জিন',
    tabQuickScan: 'এআই রোগ নির্ণয়',
    tabHistory: 'স্ক্যান ইতিহাস',
    btnOfflineToggle: '📴 অফলাইন মোড পরীক্ষা',
    btnPrintReport: '🖨️ প্রেসক্রিপশন প্রিন্ট',
    offlineBanner: 'অফলাইন মোড চালু: লোকাল এআই মডেলে পরীক্ষা হচ্ছে। ইন্টারনেট ফিরলে তথ্য সিঙ্ক হবে।',
    offlineActiveToast: 'অফলাইন মোড সক্রিয় হয়েছে।',
    onlineActiveToast: 'অনলাইন মোড চালু হয়েছে।',

    // Workflow Bar
    step1Title: '১. ছবি তুলুন',
    step1Sub: 'আক্রান্ত পাতা বা পোকা',
    step2Title: '২. গুণমান পরীক্ষা',
    step2Sub: 'স্পষ্টতা ও ফোকাস',
    step3Title: '৩. এআই নির্ণয়',
    step3Sub: 'রোগ ও পোকা শনাক্তকরণ',
    step4Title: '৪. আবহাওয়া ঝুঁকি',
    step4Sub: 'আর্দ্রতা ও বিস্তার বিশ্লেষণ',
    step5Title: '৫. সঠিক সমাধান',
    step5Sub: 'নির্দিষ্ট কীটনাশক ও যত্ন',

    // Upload & Camera
    uploadTitle: 'আক্রান্ত পাতার ছবি তুলুন বা আপলোড করুন',
    uploadSubtitle: 'ছবি দিন বা নিচে থেকে কোনো একটি নমুনা বেছে নিন',
    uploadDesc: 'আক্রান্ত পাতা বা পোকার পরিষ্কার ও স্পষ্ট ছবি দিন।',
    btnTakePhoto: '📸 ক্যামেরা ব্যবহার করুন',
    btnBrowsePhoto: '📁 ছবি নির্বাচন করুন',
    toggleHeatmap: '🎯 আক্রান্ত অংশের হিটম্যাপ দেখুন',
    sampleTitle: 'অথবা পরীক্ষার জন্য প্রস্তুত নমুনা বেছে নিন:',
    clarityScoreHigh: 'স্পষ্টতা স্কোর: ৯৬% (নিখুঁত)',
    clarityScoreLow: 'স্পষ্টতা স্কোর: ৪৮% (অস্পষ্ট)',
    qualityGatePassed: 'ছবির গুণমান: নিখুঁত ও পরিষ্কার',
    qualityGateWarning: 'সতর্কতা: ছবিটি কিছুটা ঝাপসা বা কম আলোয় তোলা',
    qualityGatePassedDesc: 'সঠিক রোগ নির্ণয়ের জন্য ছবির গুণমান উপযুক্ত।',
    qualityGateWarningDesc: 'সঠিকতা কম হতে পারে। পর্যাপ্ত আলোয় পুনরায় স্পষ্ট ছবি তুলুন।',

    // Dropdown Labels & Options
    cropLabel: 'ফসল নির্বাচন করুন:',
    cropOptions: {
      Cotton: 'তুলা (Cotton)',
      Maize: 'ভুট্টা (Maize / Corn)',
      Chilli: 'লঙ্কা (Chilli)',
      Tomato: 'টমেটো (Tomato)',
      Rice: 'ধান (Rice / Paddy)',
      Wheat: 'গম (Wheat)',
      Potato: 'আলু (Potato)',
      Apple: 'আপেল (Apple)',
      General: 'অন্যান্য মাঠের ফসল'
    },
    stageLabel: 'ফসলের বৃদ্ধি পর্যায়:',
    stageOptions: {
      Seedling: 'চারা পর্যায় (Seedling)',
      Vegetative: 'অঙ্গজ বৃদ্ধি পর্যায়',
      Flowering: 'ফুল ও ফল ধরার পর্যায়',
      Fruiting: 'পরিপক্বতা ও ফসল কাটার সময়'
    },
    moistureLabel: 'জমির আর্দ্রতা:',
    moistureOptions: {
      Moist: 'পর্যাপ্ত রস / সেচযুক্ত (Moist)',
      Dry: 'শুকনো / জলের অভাব (Dry)',
      Waterlogged: 'জলাবদ্ধ / অতিরিক্ত জল'
    },
    locationLabel: 'গ্রাম / পিন কোড:',
    locationPlaceholder: 'জমি নম্বর ৪, পিন ৭৮২১৪২',
    btnDiagnose: '⚡ এআই রোগ ও পোকা নির্ণয়',
    analyzingText: 'ছবির স্পষ্টতা ও রোগের লক্ষণ বিশ্লেষণ করা হচ্ছে...',

    // Weather Simulation Telemetry
    simulateWeather: 'আবহাওয়া ভিত্তিক ঝুঁকি নির্ণয়',
    dynamicCoupling: 'গতিশীল বিশ্লেষণ',
    tempLabel: 'তাপমাত্রা',
    humidityLabel: 'আর্দ্রতা',
    rainLabel: 'বৃষ্টির পূর্বাভাস',
    rainExpected: 'বৃষ্টির সম্ভাবনা (পাতা ভেজা)',
    rainNone: 'বৃষ্টির সম্ভাবনা নেই (শুষ্ক)',
    simulateWetCanopy: 'পাতার ভেজা ভাব অনুকরণ করুন',
    weatherScenariosLabel: 'আবহাওয়ার পরিস্থিতি:',
    presetMonsoon: '🌧️ বর্ষার স্যাঁতসেঁতে আবহাওয়া (২৪°C, ৯২%)',
    presetHotDry: '☀️ প্রখর রোদ ও গরম (৩৬°C, ৩৮%)',
    presetCoolFog: '🌫️ ভোরের কুয়াশা ও শিশির (১৪°C, ৮৮%)',
    presetOptimal: '🌤️ স্বাভাবিক নিয়ন্ত্রিত আবহাওয়া (২৭°C, ৫৫%)',

    // Sample Chips
    sampleTags: {
      pest: 'কীট',
      disease: 'রোগ',
      healthy: 'সুস্থ',
      gateTest: 'টেস্ট'
    },
    sampleLabels: {
      cotton_bollworm: 'তুলা: পিংক বোলওয়ার্ম',
      maize_fall_armyworm: 'ভুট্টা: ফল আর্মিওয়ার্ম',
      chilli_thrips: 'লঙ্কা: থ্রিপস ও পাতা কোঁকড়ানো',
      tomato_late_blight: 'টমেটো: নাবী ধসা',
      rice_blast: 'ধান: ব্লাস্ট রোগ',
      wheat_yellow_rust: 'গম: হলুদ মরিচা',
      potato_early_blight: 'আলু: আগাম ধসা',
      apple_scab: 'আপেল: স্ক্যাব রোগ',
      healthy_crop: 'সুস্থ ও সতেজ ফসল',
      blurry_test: 'ঝাপসা ছবি (কোয়ালিটি টেস্ট)'
    },

    // Diagnosis Results Card
    diagnosisHeader: 'এআই রোগ নির্ণয় ফলাফল',
    confidenceLabel: 'নির্ভুলতা স্কোর',
    severityLabel: 'রোগের তীব্রতা',
    pathogenLabel: 'রোগ সৃষ্টিকারী জীবাণু',
    keySymptomsLabel: 'চিহ্নিত প্রধান লক্ষণসমূহ:',
    safeguardTitle: 'সতর্কতা বার্তা:',
    safeguardDesc: 'ছবির অস্পষ্টতার কারণে নির্ভুলতার হার কম। দামি ওষুধ কেনার আগে পরিষ্কার আলোয় পুনরায় ছবি তুলুন।',
    modelVersionLabel: 'ক্রপঅ্যালার্ট সিএনএন v3.2',
    catPest: '🐛 ক্ষতিকারক কীট আক্রমণ',
    catDisease: '🍄 ছত্রাকজনিত রোগ',
    catHealthy: '✨ সুস্থ উদ্ভিদ',
    sevOptimal: 'উত্তম স্বাস্থ্য',
    sevSevere: 'মারাত্মক প্রাদুর্ভাব (জরুরি ব্যবস্থা নিন)',
    sevModerate: 'মাঝারি তীব্রতা',

    // Risk Gauge
    riskTitle: 'আবহাওয়া ভিত্তিক রোগ বিস্তারের ঝুঁকি',
    riskFormulaDesc: 'এআই ফলাফল + আর্দ্রতা/তাপমাত্রা + ফসলের বৃদ্ধি পর্যায় মিলিয়ে তৈরি।',
    riskLabel: 'ঝুঁকি',
    statusLabel: 'অবস্থা:',
    riskLow: 'কম ঝুঁকি (নিয়ন্ত্রণে)',
    riskMed: 'মাঝারি ঝুঁকি (সতর্ক থাকুন)',
    riskHigh: 'মারাত্মক মহামারী সতর্কতা (অবিলম্বে ব্যবস্থা নিন)',
    riskFactorsText: 'তাপমাত্রা: {temp}°C • আর্দ্রতা: {hum}% • মাটি: {soil}',

    // Action & Advisory
    immediateActionLabel: 'প্রথম জরুরি পদক্ষেপ (Immediate Action)',
    treatmentDashboardTitle: 'চিকিৎসা ও সঠিক ব্যবস্থাপনা ড্যাশবোর্ড',
    tabOrganic: '🌿 জৈব ও ভেষজ সমাধান',
    tabChemical: '🧪 সঠিক রাসায়নিক প্রয়োগ (নির্দিষ্ট মাত্রা)',
    tabCultural: '🚜 কৃষি পরিচালনা ও জল নিকাশি',
    precisionNotice: 'সঠিক প্রয়োগ নির্দেশিকা:',
    audioListenBtn: '🔊 বাংলায় পরামর্শ শুনুন',
    audioStopBtn: '⏹ অডিও বন্ধ করুন',
    voiceStartedToast: 'বাংলায় পরামর্শ শোনানো হচ্ছে...',
    voiceStoppedToast: 'অডিও বন্ধ করা হয়েছে।',

    // Explainable AI (XAI)
    explainAiBtn: '🔍 এআই কেন এই সিদ্ধান্ত নিল? (Explain AI Result)',
    explainAiHideBtn: '🔼 ব্যাখ্যা সংক্ষেপ করুন',
    xaiTitle: 'ব্যাখ্যামূলক এআই (XAI) সিদ্ধান্ত বিশ্লেষণ',
    xaiStep1: '১. পাতার দৃশ্যমান লক্ষণের প্রমাণ',
    xaiStep2: '২. আবহাওয়া ও তাপমাত্রা মিল',
    xaiStep3: '৩. এআই মডেলের সক্রিয়তা',
    xaiStep4: '৪. সঠিক ঔষধ নির্বাচনের যুক্তি',

    // History Log
    historyTitle: 'স্ক্যান ও রোগ নির্ণয়ের ইতিহাস',
    historyCached: 'লোকাল মেমরিতে সংরক্ষিত',
    historySynced: 'ক্লাউডে সিঙ্ক হয়েছে',
    historyQueued: 'লোকাল সারিতে জমা',
    historyMatch: '% নির্ভুলতা',

    // Government Assistance & Pesticide Subsidy
    govTicketNo: 'পরিদর্শন টোকেন আইডি:'
  },

  as: {
    btnViewResults: "⚡ এআই নিৰ্ণয় চলাওক আৰু ফলাফল চাওক ➔",
    btnBackInput: "⬅ শস্য নিৰ্বাচনলৈ উভতি যাওক",
    page1Title: "শস্য আৰু ৰোগ / কীট নিৰ্বাচন কৰক",
    page1Sub: "এআই বিশ্লেষণ আৰম্ভ কৰিবলৈ তলৰ নমুনাৰ পৰা বাছি লওক অথবা পাতৰ ফটো আপল’ড কৰক",
    page2Title: "এআই নিৰ্ণয় ফলাফল আৰু চিকিৎসা পৰামৰ্শ",
    page2Sub: "সম্পূৰ্ণ ৰোগ বিশ্লেষণ, বতৰৰ বিপদাশংকা আৰু সঠিক প্ৰতিকাৰ ব্যৱস্থা",

    appTitle: 'ক্ৰপএলাৰ্ট (CropAlert)',
    tagline: 'শস্যৰ ৰোগ আৰু কীট-পতংগৰ আগতীয়া এআই চিনাক্তকৰণ আৰু ব্যৱস্থাপনা',
    badgeSih: 'এআই শস্য নিৰ্ণয় ব্যৱস্থা',
    tabQuickScan: 'এআই পৰীক্ষা কেন্দ্ৰ',
    tabHistory: 'স্কেন ইতিহাস',
    btnOfflineToggle: '📴 অফলাইন ম’ড পৰীক্ষা',
    btnPrintReport: '🖨️ নিৰ্দেশনা প্ৰিণ্ট',
    offlineBanner: 'অফলাইন ম’ড সক্ৰিয়: ইণ্টাৰনেট নোহোৱাকৈ মোবাইল এআইৰ সহায়ত পৰীক্ষা চলি আছে। নেটৱৰ্ক আহিলে তথ্য সংৰক্ষিত হ’ব।',
    offlineActiveToast: 'অফলাইন ম’ড সক্ৰিয় হ’ল।',
    onlineActiveToast: 'অনলাইন ম’ডলৈ উভতি আহিল।',

    // Workflow Bar
    step1Title: '১. ফটো তোলক',
    step1Sub: 'আক্ৰান্ত পাত বা কীট',
    step2Title: '২. মান পৰীক্ষা',
    step2Sub: 'স্পষ্টতা আৰু পোহৰ',
    step3Title: '৩. এআই চিনাক্তকৰণ',
    step3Sub: 'ৰোগ আৰু কীট নিৰ্ধাৰণ',
    step4Title: '৪. বতৰৰ আশংকা',
    step4Sub: 'উষ্ণতা আৰু আৰ্দ্ৰতা',
    step5Title: '৫. সঠিক বিধান',
    step5Sub: 'কীটনাশক আৰু পৰিচৰ্যা',

    // Upload & Camera
    uploadTitle: 'শস্যৰ আক্ৰান্ত পাতৰ ফটো তোলক',
    uploadSubtitle: 'ফটো আপলোড কৰক বা তলৰ পৰা নমুনা বাছনি কৰক',
    uploadDesc: 'আক্ৰান্ত পাত বা কীটৰ স্পষ্ট আৰু উজ্জ্বল ফটো আপলোড কৰক।',
    btnTakePhoto: '📸 কেমেৰা ব্যৱহাৰ কৰক',
    btnBrowsePhoto: '📁 ফটো বাছনি কৰক',
    toggleHeatmap: '🎯 আক্ৰান্ত অংশ হাইলাইট কৰক',
    sampleTitle: 'বা পৰীক্ষাৰ বাবে নমুনা বাছনি কৰক:',
    clarityScoreHigh: 'স্পষ্টতা মান: ৯৬% (অতি স্পষ্ট)',
    clarityScoreLow: 'স্পষ্টতা মান: ৪৮% (অস্পষ্ট)',
    qualityGatePassed: 'ফটোৰ গুণমান: অতি স্পষ্ট',
    qualityGateWarning: 'সতৰ্কতা: ফটোখন অস্পষ্ট বা অন্ধকাৰত তোলা হৈছে',
    qualityGatePassedDesc: 'সঠিক নিৰ্ধাৰণৰ বাবে ফটোৰ মান উপযুক্ত।',
    qualityGateWarningDesc: 'সঠিকতা কম হ’ব পাৰে। পৰ্যাপ্ত পোহৰত স্পষ্টকৈ ফটো তোলক।',

    // Dropdown Labels & Options
    cropLabel: 'শস্য বাছনি কৰক:',
    cropOptions: {
      Cotton: 'কপাহ (Cotton)',
      Maize: 'গোমধান (Maize / Corn)',
      Chilli: 'জলকীয়া (Chilli)',
      Tomato: 'বিলাহী (Tomato)',
      Rice: 'ধান (Rice / Paddy)',
      Wheat: 'ঘেঁহু (Wheat)',
      Potato: 'আলু (Potato)',
      Apple: 'আপেল (Apple)',
      General: 'অন্যান্য শস্য'
    },
    stageLabel: 'শস্যৰ বৃদ্ধিৰ পৰ্যায়:',
    stageOptions: {
      Seedling: 'পুলি অৱস্থা (Seedling)',
      Vegetative: 'অংগজ বৃদ্ধিৰ সময়',
      Flowering: 'ফুল আৰু গুটি ধৰাৰ সময়',
      Fruiting: 'শস্য পকাৰ সময়'
    },
    moistureLabel: 'মাটিৰ আৰ্দ্ৰতা:',
    moistureOptions: {
      Moist: 'পৰ্যাপ্ত সেমেকা / জলসিঞ্চিত (Moist)',
      Dry: 'শুকান / পানীৰ নাটনি (Dry)',
      Waterlogged: 'পানী জমা হোৱা / বোকাময়'
    },
    locationLabel: 'গাঁও / পিন ক’ড:',
    locationPlaceholder: 'পথাৰ নং ৪, পিন ৭৮২১৪২',
    btnDiagnose: '⚡ এআই চিনাক্তকৰণ আৰম্ভ কৰক',
    analyzingText: 'ফটোৰ গুণমান আৰু ৰোগৰ লক্ষণ পৰীক্ষা চলি আছে...',

    // Weather Simulation Telemetry
    simulateWeather: 'বতৰভিত্তিক ৰোগৰ আশংকা',
    dynamicCoupling: 'বৈজ্ঞানিক বিশ্লেষণ',
    tempLabel: 'উষ্ণতা',
    humidityLabel: 'বায়ুৰ আৰ্দ্ৰতা',
    rainLabel: 'বৰষুণৰ সম্ভাৱনা',
    rainExpected: 'বৰষুণৰ সম্ভাৱনা (পাত তিতা)',
    rainNone: 'বৰষুণ নহয় (শুকান বতৰ)',
    simulateWetCanopy: 'পাত তিতাৰ প্ৰভাৱ চাওক',
    weatherScenariosLabel: 'বতৰৰ অৱস্থা:',
    presetMonsoon: '🌧️ বাৰিষাৰ সেমেকা বতৰ (২৪°C, ৯২%)',
    presetHotDry: '☀️ প্ৰখৰ ৰ’দ আৰু গৰম (৩৬°C, ৩৮%)',
    presetCoolFog: '🌫️ পুৱাৰ কুঁৱলী আৰু নিয়ৰ (১৪°C, ৮৮%)',
    presetOptimal: '🌤️ নিয়ন্ত্ৰিত অনুকূল বতৰ (২৭°C, ৫৫%)',

    // Sample Chips
    sampleTags: {
      pest: 'কীট',
      disease: 'ৰোগ',
      healthy: 'সুস্থ',
      gateTest: 'টেষ্ট'
    },
    sampleLabels: {
      cotton_bollworm: 'কপাহ: গোলাপী ব’লৱৰ্ম',
      maize_fall_armyworm: 'গোমধান: ফল আৰ্মীৱৰ্ম',
      chilli_thrips: 'জলকীয়া: থ্ৰিপছ আৰু পাত কেঁকোৰা',
      tomato_late_blight: 'বিলাহী: শেহতীয়া ব্লাইট',
      rice_blast: 'ধান: ব্লাষ্ট ৰোগ (ডিঙিভঙা)',
      wheat_yellow_rust: 'ঘেঁহু: হালধীয়া ৰাষ্ট',
      potato_early_blight: 'আলু: আগতীয়া ব্লাইট',
      apple_scab: 'আপেল: স্কেব ৰোগ',
      healthy_crop: 'সুস্থ আৰু সতেজ শস্য',
      blurry_test: 'অস্পষ্ট ফটো (কোৱালিটি গেট)'
    },

    // Diagnosis Results Card
    diagnosisHeader: 'এআই ৰোগ নিৰ্ণয়ৰ ফলাফল',
    confidenceLabel: 'নির্ভুলতাৰ মাত্ৰা',
    severityLabel: 'ৰোগৰ তীব্ৰতা',
    pathogenLabel: 'ৰোগ সৃষ্টিকাৰী বীজাণু',
    keySymptomsLabel: 'চিনাক্ত হোৱা প্ৰধান লক্ষণসমূহ:',
    safeguardTitle: 'সাৱধানতা সংকেত:',
    safeguardDesc: 'ফটো স্পষ্ট নোহোৱাৰ বাবে এআইৰ বিশ্বাসযোগ্যতা কিছু কম হ’ব পাৰে। দামী ঔষধ কিনাৰ আগতে পৰ্যাপ্ত পোহৰত স্পষ্টকৈ ফটো তোলক।',
    modelVersionLabel: 'ক্ৰপএলাৰ্ট ভিজন সিএনএন v3.2',
    catPest: '🐛 কীট-পতংগৰ আক্ৰমণ',
    catDisease: '🍄 ভেঁকুৰজনিত ৰোগ',
    catHealthy: '✨ সুস্থ উদ্ভিদ',
    sevOptimal: 'উত্তম স্বাস্থ্য',
    sevSevere: 'গুৰুতৰ আক্ৰমণ (লগে লগে ব্যৱস্থা লওক)',
    sevModerate: 'মধ্যম মাত্ৰা',

    // Risk Gauge
    riskTitle: 'বতৰভিত্তিক ৰোগ সংক্ৰমণৰ আশংকা',
    riskFormulaDesc: 'এআই চিনাক্তকৰণ + আৰ্দ্ৰতা আৰু উষ্ণতা + শস্যৰ পৰ্যায়ৰ বিশ্লেষণ।',
    riskLabel: 'আশংকা',
    statusLabel: 'অৱস্থা:',
    riskLow: 'কম আশংকা (নিয়ন্ত্ৰিত)',
    riskMed: 'মধ্যম আশংকা (সাৱধানতা প্ৰয়োজন)',
    riskHigh: 'গুৰুতৰ বিপদ সংকেত (অবিলম্বে ঔষধ প্ৰয়োগ কৰক)',
    riskFactorsText: 'উষ্ণতা: {temp}°C • আৰ্দ্ৰতা: {hum}% • মাটি: {soil}',

    // Action & Advisory
    immediateActionLabel: 'প্ৰথম কাৰ্যকৰী পদক্ষেপ (Immediate Action)',
    treatmentDashboardTitle: 'উপচাৰ আৰু পৰামৰ্শ ডেচবৰ্ড',
    tabOrganic: '🌿 জৈৱিক / প্ৰাকৃতিক ব্যৱস্থা',
    tabChemical: '🧪 সঠিক ৰাসায়নিক ঔষধ (নিৰ্দিষ্ট পৰিমাণ)',
    tabCultural: '🚜 পথাৰ পৰিষ্কাৰ আৰু জল নিষ্কাশন',
    precisionNotice: 'সঠিক প্ৰয়োগ নিৰ্দেশনা:',
    audioListenBtn: '🔊 অসমীয়াত পৰামৰ্শ শুনক',
    audioStopBtn: '⏹ শব্দ বন্ধ কৰক',
    voiceStartedToast: 'অসমীয়াত কৃষি পৰামৰ্শ শুনোৱা হৈছে...',
    voiceStoppedToast: 'শব্দ বন্ধ কৰা হ’ল।',

    // Explainable AI (XAI)
    explainAiBtn: '🔍 এআইয়ে এই পৰামৰ্শ কিয় দিলে? (Explain AI Result)',
    explainAiHideBtn: '🔼 এআই ব্যাখ্যা বন্ধ কৰক',
    xaiTitle: 'ব্যাখ্যামূলক এআই (XAI) সিদ্ধান্ত বিশ্লেষণ',
    xaiStep1: '১. পাতত ৰোগৰ স্পষ্ট প্ৰমাণ',
    xaiStep2: '২. বতৰ আৰু উষ্ণতাৰ সমিলমিল',
    xaiStep3: '৩. এআই মডেলৰ সক্ৰিয়তা',
    xaiStep4: '৪. ঔষধ নিৰ্বাচনৰ কাৰণ',

    // History Log
    historyTitle: 'পথাৰ পৰীক্ষাৰ ইতিহাস',
    historyCached: 'লোকেল মেমৰীত সংৰক্ষিত',
    historySynced: 'ক্লাউডত সংৰক্ষিত',
    historyQueued: 'লোকেল শাৰীত আছে',
    historyMatch: '% শুদ্ধতা',

    // Government Assistance & Pesticide Subsidy
    govTicketNo: 'পৰিদৰ্শন টোকেন নং:'
  },

  pa: {
    btnViewResults: "⚡ ਏਆਈ ਜਾਂਚ ਚਲਾਓ ਅਤੇ ਨਤੀਜੇ ਦੇਖੋ ➔",
    btnBackInput: "⬅ ਵਾਪਸ ਚੋਣ ਪੰਨੇ ਤੇ ਜਾਓ",
    page1Title: "ਫ਼ਸਲ ਅਤੇ ਬਿਮਾਰੀ / ਕੀੜੇ ਦੀ ਚੋਣ ਕਰੋ",
    page1Sub: "ਏਆਈ ਵਿਸ਼ਲੇਸ਼ਣ ਸ਼ੁਰੂ ਕਰਨ ਲਈ ਹੇਠਾਂ ਦਿੱਤੇ ਨਮੂਨੇ ਵਿੱਚੋਂ ਚੁਣੋ ਜਾਂ ਪੱਤੇ ਦੀ ਫੋਟੋ ਅਪਲੋਡ ਕਰੋ",
    page2Title: "ਏਆਈ ਜਾਂਚ ਨਤੀਜੇ ਅਤੇ ਇਲਾਜ ਸਲਾਹ",
    page2Sub: "ਪੂਰਾ ਬਿਮਾਰੀ ਵਿਸ਼ਲੇਸ਼ਣ, ਮੌਸਮੀ ਖਤਰਾ ਅਤੇ ਸਹੀ ਇਲਾਜ ਸੇਧ",

    appTitle: 'ਕਰੌਪਅਲਰਟ (CropAlert)',
    tagline: 'ਫ਼ਸਲੀ ਬਿਮਾਰੀਆਂ ਅਤੇ ਕੀੜਿਆਂ ਦੀ ਤੁਰੰਤ ਏਆਈ ਪਛਾਣ ਅਤੇ ਸਹੀ ਇਲਾਜ',
    badgeSih: 'ਏਆਈ ਜਾਂਚ ਇੰਜਣ',
    tabQuickScan: 'ਤੁਰੰਤ ਜਾਂਚ',
    tabHistory: 'ਸਕੈਨ ਇਤਿਹਾਸ',
    btnOfflineToggle: '📴 ਆਫ਼ਲਾਈਨ ਮੋਡ ਟੈਸਟ',
    btnPrintReport: '🖨️ ਪਰਚਾ ਪ੍ਰਿੰਟ ਕਰੋ',
    offlineBanner: 'ਆਫ਼ਲਾਈਨ ਮੋਡ ਚਾਲੂ: ਮੋਬਾਈਲ ਮਾਡਲ ਉੱਤੇ ਕੰਮ ਚੱਲ ਰਿਹਾ ਹੈ। ਇੰਟਰਨੈੱਟ ਆਉਣ ਤੇ ਡਾਟਾ ਸਿੰਕ ਹੋਵੇਗਾ।',
    offlineActiveToast: 'ਆਫ਼ਲਾਈਨ ਮੋਡ ਚਾਲੂ ਹੋਇਆ।',
    onlineActiveToast: 'ਆਨਲਾਈਨ ਮੋਡ ਬਹਾਲ ਹੋਇਆ।',

    // Workflow Bar
    step1Title: '1. ਫ਼ੋਟੋ ਖਿੱਚੋ',
    step1Sub: 'ਬਿਮਾਰ ਪੱਤੇ ਜਾਂ ਕੀੜੇ ਦੀ',
    step2Title: '2. ਮਿਆਰ ਜਾਂਚ',
    step2Sub: 'ਸਫ਼ਾਈ ਅਤੇ ਫੋਕਸ',
    step3Title: '3. ਏਆਈ ਪਛਾਣ',
    step3Sub: 'ਰੋਗ ਤੇ ਕੀੜੇ ਦੀ ਜਾਂਚ',
    step4Title: '4. ਮੌਸਮੀ ਖ਼ਤਰਾ',
    step4Sub: 'ਤਾਪਮਾਨ ਤੇ ਨਮੀ ਦਾ ਪ੍ਰਭਾਵ',
    step5Title: '5. ਸਹੀ ਇਲਾਜ',
    step5Sub: 'ਸਹੀ ਸਪਰੇਅ ਅਤੇ ਦੇਖਭਾਲ',

    // Upload & Camera
    uploadTitle: 'ਪੱਤੇ ਜਾਂ ਕੀੜੇ ਦੀ ਸਾਫ਼ ਫ਼ੋਟੋ ਲਵੋ',
    uploadSubtitle: 'ਫ਼ੋਟੋ ਅਪਲੋਡ ਕਰੋ ਜਾਂ ਹੇਠਾਂ ਦਿੱਤੇ ਨਮੂਨੇ ਚੁਣੋ',
    uploadDesc: 'ਬਿਮਾਰ ਪੱਤੇ ਜਾਂ ਕੀੜੇ ਦੀ ਸਾਫ਼ ਅਤੇ ਨਜ਼ਦੀਕੀ ਫ਼ੋਟੋ ਖਿੱਚੋ।',
    btnTakePhoto: '📸 ਕੈਮਰਾ ਵਰਤੋ',
    btnBrowsePhoto: '📁 ਫ਼ੋਟੋ ਚੁਣੋ',
    toggleHeatmap: '🎯 ਬਿਮਾਰੀ ਵਾਲੀ ਥਾਂ ਵੇਖੋ',
    sampleTitle: 'ਜਾਂ ਤੁਰੰਤ ਟੈਸਟ ਲਈ ਹੇਠਾਂ ਦਿੱਤਾ ਨਮੂਨਾ ਚੁਣੋ:',
    clarityScoreHigh: 'ਸਫ਼ਾਈ ਸਕੋਰ: 96% (ਬਹੁਤ ਸਾਫ਼)',
    clarityScoreLow: 'ਸਫ਼ਾਈ ਸਕੋਰ: 48% (ਧੁੰਦਲੀ)',
    qualityGatePassed: 'ਫ਼ੋਟੋ ਕੁਆਲਿਟੀ: ਬਹੁਤ ਸਾਫ਼',
    qualityGateWarning: 'ਚੇਤਾਵਨੀ: ਫ਼ੋਟੋ ਧੁੰਦਲੀ ਜਾਂ ਘੱਟ ਰੌਸ਼ਨੀ ਵਿੱਚ ਹੈ',
    qualityGatePassedDesc: 'ਸਹੀ ਜਾਂਚ ਲਈ ਫ਼ੋਟੋ ਦਾ ਮਿਆਰ ਉੱਚਾ ਹੈ।',
    qualityGateWarningDesc: 'ਨਤੀਜੇ ਤੇ ਅਸਰ ਪੈ ਸਕਦਾ ਹੈ। ਕ੍ਰਿਪਾ ਕਰਕੇ ਸਾਫ਼ ਫ਼ੋਟੋ ਲਵੋ।',

    // Dropdown Labels & Options
    cropLabel: 'ਫ਼ਸਲ ਚੁਣੋ:',
    cropOptions: {
      Cotton: 'ਕਪਾਹ / ਨਰਮਾ (Cotton)',
      Maize: 'ਮੱਕੀ (Maize / Corn)',
      Chilli: 'ਮਿਰਚ (Chilli)',
      Tomato: 'ਟਮਾਟਰ (Tomato)',
      Rice: 'ਝੋਨਾ / ਚੌਲ (Rice)',
      Wheat: 'ਕਣਕ (Wheat)',
      Potato: 'ਆਲੂ (Potato)',
      Apple: 'ਸੇਬ (Apple)',
      General: 'ਹੋਰ ਖੇਤ ਫ਼ਸਲ'
    },
    stageLabel: 'ਫ਼ਸਲ ਦੀ ਅਵਸਥਾ:',
    stageOptions: {
      Seedling: 'ਪਨੀਰੀ / ਪੁੰਗਰਨ ਵੇਲਾ',
      Vegetative: 'ਪੱਤਿਆਂ ਤੇ ਬੂਟੇ ਦਾ ਵਾਧਾ',
      Flowering: 'ਫੁੱਲ ਤੇ ਟੀਂਡੇ/ਫ਼ਲ ਪੈਣ ਵੇਲਾ',
      Fruiting: 'ਪੱਕਣ ਅਤੇ ਵਾਢੀ ਵੇਲਾ'
    },
    moistureLabel: 'ਜ਼ਮੀਨ ਦੀ ਨਮੀ:',
    moistureOptions: {
      Moist: 'ਨਮੀ ਵਾਲੀ / ਸਿੰਜੀ ਹੋਈ (Moist)',
      Dry: 'ਸੁੱਕੀ / ਪਾਣੀ ਦੀ ਕਮੀ (Dry)',
      Waterlogged: 'ਪਾਣੀ ਖੜ੍ਹਾ / ਸੇਮ'
    },
    locationLabel: 'ਪਿੰਡ / ਬਲਾਕ / ਪਿੰਨ ਕੋਡ:',
    locationPlaceholder: 'ਖੇਤ ਨੰਬਰ 4, ਪਿੰਨ 782142',
    btnDiagnose: '⚡ ਏਆਈ ਜਾਂਚ ਅਤੇ ਖ਼ਤਰਾ ਵੇਖੋ',
    analyzingText: 'ਫ਼ੋਟੋ ਦੀ ਜਾਂਚ ਅਤੇ ਬਿਮਾਰੀ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ ਚੱਲ ਰਿਹਾ ਹੈ...',

    // Weather Simulation Telemetry
    simulateWeather: 'ਮੌਸਮ ਆਧਾਰਿਤ ਜੋਖਮ ਜਾਂਚ',
    dynamicCoupling: 'ਵਿਗਿਆਨਕ ਵਿਸ਼ਲੇਸ਼ਣ',
    tempLabel: 'ਤਾਪਮਾਨ',
    humidityLabel: 'ਨਮੀ',
    rainLabel: 'ਮੀਂਹ ਦਾ ਅੰਦਾਜ਼ਾ',
    rainExpected: 'ਮੀਂਹ ਪੈਣ ਦੀ ਸੰਭਾਵਨਾ (ਪੱਤੇ ਗਿੱਲੇ)',
    rainNone: 'ਮੀਂਹ ਦੀ ਕੋਈ ਸੰਭਾਵਨਾ ਨਹੀਂ (ਖ਼ੁਸ਼ਕ)',
    simulateWetCanopy: 'ਪੱਤਿਆਂ ਤੇ ਨਮੀ ਦਾ ਅਸਰ ਵੇਖੋ',
    weatherScenariosLabel: 'ਮੌਸਮ ਦੇ ਹਾਲਾਤ:',
    presetMonsoon: '🌧️ ਮੌਨਸੂਨੀ ਨਮੀ ਵਾਲਾ ਮੌਸਮ (24°C, 92%)',
    presetHotDry: '☀️ ਤੇਜ਼ ਗਰਮੀ ਤੇ ਧੁੱਪ (36°C, 38%)',
    presetCoolFog: '🌫️ ਸਵੇਰ ਦੀ ਤ੍ਰੇਲ ਤੇ ਠੰਢ (14°C, 88%)',
    presetOptimal: '🌤️ ਸਾਧਾਰਨ ਅਨੁਕੂਲ ਮੌਸਮ (27°C, 55%)',

    // Sample Chips
    sampleTags: {
      pest: 'ਕੀੜਾ',
      disease: 'ਰੋਗ',
      healthy: 'ਤੰਦਰੁਸਤ',
      gateTest: 'ਟੈਸਟ'
    },
    sampleLabels: {
      cotton_bollworm: 'ਕਪਾਹ: ਗੁਲਾਬੀ ਸੁੰਡੀ',
      maize_fall_armyworm: 'ਮੱਕੀ: ਫ਼ਾਲ ਆਰਮੀਵਰਮ',
      chilli_thrips: 'ਮਿਰਚ: ਥ੍ਰਿਪਸ ਤੇ ਮਰੋੜੀ',
      tomato_late_blight: 'ਟਮਾਟਰ: ਪਿਛੇਤਾ ਝੁਲਸ',
      rice_blast: 'ਝੋਨਾ: ਬਲਾਸਟ (ਧੌਣ ਤੋੜ)',
      wheat_yellow_rust: 'ਕਣਕ: ਪੀਲੀ ਕੁੰਗੀ',
      potato_early_blight: 'ਆਲੂ: ਅਗੇਤਾ ਝੁਲਸ',
      apple_scab: 'ਸੇਬ: ਸਕੈਬ ਰੋਗ',
      healthy_crop: 'ਤੰਦਰੁਸਤ ਫ਼ਸਲ',
      blurry_test: 'ਧੁੰਦਲੀ ਫ਼ੋਟੋ (ਕੁਆਲਿਟੀ ਟੈਸਟ)'
    },

    // Diagnosis Results Card
    diagnosisHeader: 'ਏਆਈ ਜਾਂਚ ਨਤੀਜਾ',
    confidenceLabel: 'ਭਰੋਸੇਯੋਗਤਾ ਸਕੋਰ',
    severityLabel: 'ਬਿਮਾਰੀ ਦਾ ਪ੍ਰਕੋਪ',
    pathogenLabel: 'ਰੋਗ ਫੈਲਾਉਣ ਵਾਲਾ ਜੀਵਾਣੂ',
    keySymptomsLabel: 'ਮੁੱਖ ਲੱਛਣ ਜੋ ਪਛਾਣੇ ਗਏ:',
    safeguardTitle: 'ਸੁਰੱਖਿਆ ਚੇਤਾਵਨੀ:',
    safeguardDesc: 'ਫ਼ੋਟੋ ਸਾਫ਼ ਨਾ ਹੋਣ ਕਾਰਨ ਨਤੀਜਾ ਪ੍ਰਭਾਵਿਤ ਹੋ ਸਕਦਾ ਹੈ। ਮਹਿੰਗੀ ਸਪਰੇਅ ਖ਼ਰੀਦਣ ਤੋਂ ਪਹਿਲਾਂ ਸਾਫ਼ ਧੁੱਪ ਵਿੱਚ ਦੁਬਾਰਾ ਫ਼ੋਟੋ ਖਿੱਚੋ।',
    modelVersionLabel: 'ਕਰੌਪਅਲਰਟ ਵਿਜ਼ਨ ਸੀਐਨਐਨ v3.2',
    catPest: '🐛 ਕੀੜੇ ਦਾ ਹਮਲਾ',
    catDisease: '🍄 ਉੱਲੀ ਰੋਗ',
    catHealthy: '✨ ਸਿਹਤਮੰਦ ਪੌਦਾ',
    sevOptimal: 'ਉੱਤਮ ਸਿਹਤ',
    sevSevere: 'ਗੰਭੀਰ ਹਮਲਾ (ਤੁਰੰਤ ਸਪਰੇਅ ਕਰੋ)',
    sevModerate: 'ਮੱਧਮ ਪ੍ਰਕੋਪ',

    // Risk Gauge
    riskTitle: 'ਮੌਸਮ ਆਧਾਰਿਤ ਸੰਕਰਮਣ ਖ਼ਤਰਾ',
    riskFormulaDesc: 'ਏਆਈ ਪਛਾਣ + ਨਮੀ ਅਤੇ ਤਾਪਮਾਨ ਦਾ ਸਾਂਝਾ ਮੁਲਾਂਕਣ।',
    riskLabel: 'ਖ਼ਤਰਾ',
    statusLabel: 'ਹਾਲਤ:',
    riskLow: 'ਘੱਟ ਖ਼ਤਰਾ (ਕੰਟਰੋਲ ਵਿੱਚ)',
    riskMed: 'ਮੱਧਮ ਖ਼ਤਰਾ (ਸਾਵਧਾਨੀ ਜ਼ਰੂਰੀ)',
    riskHigh: 'ਗੰਭੀਰ ਖ਼ਤਰਾ (ਤੁਰੰਤ ਇਲਾਜ ਕਰੋ)',
    riskFactorsText: 'ਤਾਪਮਾਨ: {temp}°C • ਨਮੀ: {hum}% • ਜ਼ਮੀਨ: {soil}',

    // Action & Advisory
    immediateActionLabel: 'ਪਹਿਲਾ ਜ਼ਰੂਰੀ ਕਦਮ (Immediate Action)',
    treatmentDashboardTitle: 'ਸਹੀ ਇਲਾਜ ਅਤੇ ਸਲਾਹ ਡੈਸ਼ਬੋਰਡ',
    tabOrganic: '🌿 ਜੈਵਿਕ ਅਤੇ ਦੇਸੀ ਹੱਲ',
    tabChemical: '🧪 ਸਹੀ ਰਸਾਇਣਕ ਸਪਰੇਅ (ਸਹੀ ਮਾਤਰਾ)',
    tabCultural: '🚜 ਖੇਤ ਦੀ ਸਫ਼ਾਈ ਅਤੇ ਸੰਭਾਲ',
    precisionNotice: 'ਸਹੀ ਛਿੜਕਾਅ ਨੋਟਿਸ:',
    audioListenBtn: '🔊 ਪੰਜਾਬੀ ਵਿੱਚ ਸੁਣੋ',
    audioStopBtn: '⏹ ਆਵਾਜ਼ ਬੰਦ ਕਰੋ',
    voiceStartedToast: 'ਪੰਜਾਬੀ ਵਿੱਚ ਸਲਾਹ ਸੁਣਾਈ ਜਾ ਰਹੀ ਹੈ...',
    voiceStoppedToast: 'ਆਵਾਜ਼ ਬੰਦ ਹੋ ਗਈ।',

    // Explainable AI (XAI)
    explainAiBtn: '🔍 ਏਆਈ ਨੇ ਇਹ ਸਲਾਹ ਕਿਉਂ ਦਿੱਤੀ? (Explain AI Result)',
    explainAiHideBtn: '🔼 ਏਆਈ ਵੇਰਵਾ ਛੁਪਾਓ',
    xaiTitle: 'ਏਆਈ (XAI) ਫੈਸਲੇ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ',
    xaiStep1: '1. ਪੱਤਿਆਂ ਉੱਤੇ ਬਿਮਾਰੀ ਦੇ ਨਿਸ਼ਾਨ',
    xaiStep2: '2. ਮੌਸਮ ਅਤੇ ਤਾਪਮਾਨ ਦਾ ਮੇਲ',
    xaiStep3: '3. ਏਆਈ ਮਾਡਲ ਦੀ ਪੁਸ਼ਟੀ',
    xaiStep4: '4. ਦਵਾਈ ਦੀ ਚੋਣ ਦਾ ਕਾਰਨ',

    // History Log
    historyTitle: 'ਫ਼ਸਲ ਜਾਂਚ ਦਾ ਇਤਿਹਾਸ',
    historyCached: 'ਮੋਬਾਈਲ ਵਿੱਚ ਸੁਰੱਖਿਅਤ',
    historySynced: 'ਕਲਾਊਡ ਤੇ ਸਿੰਕ ਹੋਇਆ',
    historyQueued: 'ਲੋਕਲ ਕਤਾਰ ਵਿੱਚ',
    historyMatch: '% ਸਹੀ',

    // Government Assistance & Pesticide Subsidy
    govTicketNo: 'ਜਾਂਚ ਟੋਕਨ ਆਈਡੀ:'
  },

  mr: {
    btnViewResults: "⚡ एआय तपासणी चालवा आणि निकाल पहा ➔",
    btnBackInput: "⬅ रोग निवड पृष्ठावर परत जा",
    page1Title: "पीक आणि रोग / कीड निवडा",
    page1Sub: "एआय तपासणी सुरू करण्यासाठी खालील नमुन्यांमधून निवडा किंवा पानाचा फोटो अपलोड करा",
    page2Title: "एआय तपासणी निकाल आणि उपचार सल्ला",
    page2Sub: "सविस्तर रोग विश्लेषण, हवामान जोखीम आणि अचूक उपचार मार्गदर्शन",

    appTitle: 'क्रॉपअलर्ट (CropAlert)',
    tagline: 'पिकांवरील रोग व कीटकांचे त्वरित एआय निदान व अचूक व्यवस्थापन',
    badgeSih: 'एआय पीक निदान प्रणाली',
    tabQuickScan: 'एआय निदान केंद्र',
    tabHistory: 'तपासणी इतिहास',
    btnOfflineToggle: '📴 ऑफलाइन मोड चाचणी',
    btnPrintReport: '🖨️ सल्ला प्रिंट करा',
    offlineBanner: 'ऑफलाइन मोड सुरू: मोबाईलमधील एआय मॉडेलवर तपासणी चालू आहे. इंटरनेट सुरू झाल्यावर माहिती सिंक होईल.',
    offlineActiveToast: 'ऑफलाइन मोड सुरू झाला.',
    onlineActiveToast: 'ऑनलाइन मोड सुरू झाला.',

    // Workflow Bar
    step1Title: '१. फोटो घ्या',
    step1Sub: 'रोगट पान किंवा कीटकाचा',
    step2Title: '२. गुणवत्ता तपासणी',
    step2Sub: 'स्पष्टता व प्रकाश',
    step3Title: '३. एआय तपासणी',
    step3Sub: 'रोग व कीड ओळख',
    step4Title: '४. हवामान जोखीम',
    step4Sub: 'तापमान व आर्द्रता अभ्यास',
    step5Title: '५. अचूक उपाय',
    step5Sub: 'योग्य कीटकनाशक व डोस',

    // Upload & Camera
    uploadTitle: 'पिकाच्या पाण्याचे किंवा कीटकाचे छायाचित्र घ्या',
    uploadSubtitle: 'फोटो अपलोड करा किंवा चाचणीसाठी तयार नमुना निवडा',
    uploadDesc: 'रोगग्रस्त पानाचे स्पष्ट व जवळून छायाचित्र अपलोड करा.',
    btnTakePhoto: '📸 कॅमेरा सुरू करा',
    btnBrowsePhoto: '📁 फोटो निवडा',
    toggleHeatmap: '🎯 लक्षणे हायलाइट पहा',
    sampleTitle: 'किंवा चाचणीसाठी तयार नमुना निवडा:',
    clarityScoreHigh: 'स्पष्टता गुण: ९६% (उत्कृष्ट)',
    clarityScoreLow: 'स्पष्टता गुण: ४८% (अस्पष्ट)',
    qualityGatePassed: 'फोटो गुणवत्ता: अत्यंत स्पष्ट',
    qualityGateWarning: 'गुणवत्ता इशारा: फोटो अस्पष्ट किंवा अंधुक आहे',
    qualityGatePassedDesc: 'अचूक निदानासाठी फोटो योग्य आहे.',
    qualityGateWarningDesc: 'अचूकता कमी होऊ शकते. कृपया स्पष्ट सूर्यप्रकाशात फोटो घ्या.',

    // Dropdown Labels & Options
    cropLabel: 'पीक निवडा:',
    cropOptions: {
      Cotton: 'कापूस (Cotton)',
      Maize: 'मका (Maize / Corn)',
      Chilli: 'मिरची (Chilli)',
      Tomato: 'टोमॅटो (Tomato)',
      Rice: 'भात / धान (Paddy)',
      Wheat: 'गहू (Wheat)',
      Potato: 'बटाटा (Potato)',
      Apple: 'सफरचंद (Apple)',
      General: 'इतर शेती पीक'
    },
    stageLabel: 'पिकाची अवस्था:',
    stageOptions: {
      Seedling: 'रोपवाटिका / उगवण अवस्था',
      Vegetative: 'शाकीय वाढीची अवस्था',
      Flowering: 'फुलधारणा व फळधारणा अवस्था',
      Fruiting: 'पक्वता व काढणी अवस्था'
    },
    moistureLabel: 'जमिनीतील ओलावा:',
    moistureOptions: {
      Moist: 'ओलिताखालील / ओलसर (Moist)',
      Dry: 'कोरडी / पाण्याचा ताण (Dry)',
      Waterlogged: 'पाणी साचलेली / दलदल'
    },
    locationLabel: 'गाव / तालुका / पिन कोड:',
    locationPlaceholder: 'शेत गट क्र. ४, पिन ७८२१४२',
    btnDiagnose: '⚡ एआय निदान व जोखीम तपासा',
    analyzingText: 'फोटोची गुणवत्ता व रोगाची लक्षणे तपासत आहोत...',

    // Weather Simulation Telemetry
    simulateWeather: 'हवामानानुसार रोग प्रसार जोखीम',
    dynamicCoupling: 'वैज्ञानिक विश्लेषण',
    tempLabel: 'तापमान',
    humidityLabel: 'हवेतील आर्द्रता',
    rainLabel: 'पावसाचा अंदाज',
    rainExpected: 'पावसाची शक्यता (पाने ओली)',
    rainNone: 'पावसाची शक्यता नाही (कोरडे हवामान)',
    simulateWetCanopy: 'पानांवरील ओलाव्याचा परिणाम पहा',
    weatherScenariosLabel: 'हवामानाची परिस्थिती:',
    presetMonsoon: '🌧️ पावसाळी दमट हवामान (२४°C, ९२%)',
    presetHotDry: '☀️ कडक उन्हाळा व उष्णता (३६°C, ३८%)',
    presetCoolFog: '🌫️ सकाळचे धुके व दव (१४°C, ८८%)',
    presetOptimal: '🌤️ नियंत्रित अनुकूल हवामान (२७°C, ५५%)',

    // Sample Chips
    sampleTags: {
      pest: 'कीड',
      disease: 'रोग',
      healthy: 'निरोगी',
      gateTest: 'तपासणी'
    },
    sampleLabels: {
      cotton_bollworm: 'कापूस: गुलाबी बोंडअळी',
      maize_fall_armyworm: 'मका: लष्करी अळी',
      chilli_thrips: 'मिरची: फुलकिडे व चुरडा-मुरडा',
      tomato_late_blight: 'टोमॅटो: लेट ब्लाइट (करपा)',
      rice_blast: 'भात: करपा रोग (ब्लास्ट)',
      wheat_yellow_rust: 'गहू: पिवळा तांबेरा',
      potato_early_blight: 'बटाटा: अर्ली ब्लाइट',
      apple_scab: 'सफरचंद: स्कॅब रोग',
      healthy_crop: 'निरोगी व सशक्त पीक',
      blurry_test: 'अस्पष्ट फोटो (क्वालिटी गेट)'
    },

    // Diagnosis Results Card
    diagnosisHeader: 'एआय निदान निकाल',
    confidenceLabel: 'अचूकता टक्केवारी',
    severityLabel: 'रोगाची तीव्रता',
    pathogenLabel: 'रोगकारक घटक / कीटक',
    keySymptomsLabel: 'आढळलेली मुख्य दृश्य लक्षणे:',
    safeguardTitle: 'महत्त्वाची सूचना:',
    safeguardDesc: 'फोटो स्पष्ट नसल्यामुळे अचूकतेची खात्री कमी आहे. महागडी औषधे खरेदी करण्यापूर्वी चांगल्या प्रकाशात पुन्हा स्वच्छ फोटो घ्या.',
    modelVersionLabel: 'क्रॉपअलर्ट व्हिजन सीएनएन v3.2',
    catPest: '🐛 कीटक प्रादुर्भाव',
    catDisease: '🍄 बुरशीजन्य रोग',
    catHealthy: '✨ निरोगी पीक',
    sevOptimal: 'उत्कृष्ट आरोग्य',
    sevSevere: 'गंभीर प्रादुर्भाव (तातडीने उपाय करा)',
    sevModerate: 'मध्यम तीव्रता',

    // Risk Gauge
    riskTitle: 'हवामानानुसार रोग प्रसाराची जोखीम',
    riskFormulaDesc: 'एआय तपासणी + हवेतील आर्द्रता व तापमान यांचा संयुक्त अभ्यास.',
    riskLabel: 'जोखीम',
    statusLabel: 'स्थिती:',
    riskLow: 'कमी जोखीम (नियंत्रणात)',
    riskMed: 'मध्यम जोखीम (खबरदारी आवश्यक)',
    riskHigh: 'गंभीर रोग चेतावणी (तात्काळ फवारणी आवश्यक)',
    riskFactorsText: 'तापमान: {temp}°C • आर्द्रता: {hum}% • जमीन: {soil}',

    // Action & Advisory
    immediateActionLabel: 'तात्काळ पहिली कृती (Immediate Action)',
    treatmentDashboardTitle: 'उपचार व मार्गदर्शन डॅशबोर्ड',
    tabOrganic: '🌿 सेंद्रिय व जैविक उपाय',
    tabChemical: '🧪 अचूक रासायनिक फवारणी (प्रमाणानुसार)',
    tabCultural: '🚜 शेत व्यवस्थापन व निचरा',
    precisionNotice: 'अचूक फवारणी सूचना:',
    audioListenBtn: '🔊 मराठीत सल्ला ऐका',
    audioStopBtn: '⏹ आवाज थांबवा',
    voiceStartedToast: 'मराठीतून सल्ला ऐकवला जात आहे...',
    voiceStoppedToast: 'आवाज बंद केला.',

    // Explainable AI (XAI)
    explainAiBtn: '🔍 एआयने हा निर्णय का दिला? (Explain AI Result)',
    explainAiHideBtn: '🔼 एआय विश्लेषण बंद करा',
    xaiTitle: 'स्पष्टीकरणात्मक एआय (XAI) निर्णय विश्लेषण',
    xaiStep1: '१. पानावरील रोगाची दृश्य लक्षणे',
    xaiStep2: '२. हवामान व तापमानाचा अंदाज',
    xaiStep3: '३. एआय मॉडेलची खात्री',
    xaiStep4: '४. योग्य कीटकनाशकाची निवड',

    // History Log
    historyTitle: 'तपासणी व निदानाचा इतिहास',
    historyCached: 'मोबाईल मेमरीमध्ये सुरक्षित',
    historySynced: 'क्लाऊडवर सिंक झाले',
    historyQueued: 'लोकल रांगेत जमा',
    historyMatch: '% अचूकता',

    // Government Assistance & Pesticide Subsidy
    govTicketNo: 'तपासणी टोकन आयडी:'
  }
};
