document.addEventListener('DOMContentLoaded', function() {
    // PWA Manifest Generation
    const manifestData = {
        "name": "Smart Civic Intelligence Platform - Jharkhand",
        "short_name": "SmartCivic JH",
        "description": "Advanced civic platform for Jharkhand",
        "start_url": "/",
        "display": "standalone",
        "background_color": "#ffffff",
        "theme_color": "#2563eb",
        "icons": [
            {
                "src": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='40' fill='%232563eb'/%3E%3Ctext x='50' y='55' text-anchor='middle' fill='white' font-size='30' font-weight='bold'%3ESC%3C/text%3E%3C/svg%3E",
                "sizes": "192x192",
                "type": "image/svg+xml"
            }
        ]
    };
    const blob = new Blob([JSON.stringify(manifestData)], {type: 'application/json'});
    const manifestURL = URL.createObjectURL(blob);
    const link = document.createElement('link');
    link.rel = 'manifest';
    link.href = manifestURL;
    document.head.appendChild(link);

    // Always reset user name display to "User" on load
    document.getElementById('userNameDisplay').textContent = 'User';

    var users = {
        'citizen@jharkhand.gov.in': { password: 'citizen123', role: 'citizen', name: 'Ram Kumar' },
        'admin.pwd@jharkhand.gov.in': { password: 'admin123', role: 'dept_admin', name: 'Amit Singh' },
        'superadmin@jharkhand.gov.in': { password: 'super123', role: 'super_admin', name: 'Priya Sharma' }
    };

    // --- MULTI-LINGUAL SUPPORT ---
    const translations = {
        en: {
            // General
            loadingMessage: 'Loading Public Service Platform...',
            platformName: 'Smart Civic Intelligence Platform',
            appName: 'Smart Civic',
            appState: 'Jharkhand',
            onlineStatus: 'Online',
            emergencyBtn: 'Emergency',
            // Login
            welcome: 'Welcome',
            loginUsernameLabel: 'Email/Username',
            loginUsernamePlaceholder: 'Enter your email or username',
            loginPasswordLabel: 'Password',
            loginPasswordPlaceholder: 'Enter your password',
            loginBtn: 'Login',
            forgotPassword: 'Forgot Password?',
            demoCredentials: 'Demo Credentials:',
            // Nav
            navDashboard: 'Dashboard',
            navComplaints: 'Complaints',
            navAnalytics: 'Analytics',
            navIot: 'IoT Sensors',
            navBlockchain: 'Blockchain',
            navBudget: 'Budget Tracker',
            navCommunity: 'Community',
            navEmergency: 'Emergency',
            navUserMgmt: 'User Management',
            // Dashboard
            dashboardTitle: 'Dashboard',
            dashboardSubtitle: 'Welcome to Smart Civic Intelligence Platform',
            statTotalComplaints: 'Total Complaints',
            statFromLastMonth: 'from last month',
            statResolved: 'Resolved',
            statResolutionRate: 'resolution rate',
            statAvgResponse: 'Avg Response Time',
            statDays: 'days',
            statCivicHealth: 'Civic Health Index',
            statExcellent: 'Excellent',
            chartComplaintTrends: 'Complaint Trends',
            chartDeptPerf: 'Department Performance',
            chartHeatmap: 'Complaint Heatmap',
            aiInsightsTitle: 'AI-Powered Insights',
            aiPredictive: 'Predictive Maintenance',
            aiPredictiveText: 'Road repairs needed in Sector 5 within 2 weeks based on complaint patterns',
            aiEfficiency: 'Efficiency Improvement',
            aiEfficiencyText: 'Water department response time improved by 30% this month',
            aiSentiment: 'Sentiment Analysis',
            aiSentimentText: '78% positive citizen feedback on recent infrastructure improvements',
            // Complaints Page
            complaintsTitle: 'Complaint Management',
            complaintsSubtitle: 'Submit and track civic complaints',
            newComplaintBtn: 'New Complaint',
            voiceComplaintBtn: 'Voice Complaint',
            photoReportBtn: 'Photo Report',
            allDepts: 'All Departments',
            pwd: 'PWD',
            electricity: 'Electricity',
            water: 'Water',
            health: 'Health',
            waste: 'Waste Management',
            allStatus: 'All Status',
            open: 'Open',
            inProgress: 'In Progress',
            resolved: 'Resolved',
            closed: 'Closed',
            allPriority: 'All Priority',
            high: 'High',
            medium: 'Medium',
            low: 'Low',
            searchComplaints: 'Search complaints...',
            complaintDesc1: 'Road pothole near City Hospital',
            priorityHigh: 'High Priority',
            statusInProgress: 'In Progress',
            cardDept: 'Department',
            deptPwd: 'PWD',
            cardLocation: 'Location',
            cardSla: 'SLA Deadline',
            daysRemaining: '{days} days remaining',
            submittedAgo: 'Submitted {days} days ago',
            complaintDesc2: 'Water supply disruption in Ward 12',
            priorityMedium: 'Medium Priority',
            statusResolved: 'Resolved',
            deptWater: 'Water Supply',
            cardResolutionTime: 'Resolution Time',
            resolvedAgo: 'Resolved {days} day ago',
            // Emergency Page & Modals
            emergencyTitle: 'Emergency Services',
            emergencySubtitle: 'Choose the service you need',
            emergencyCallAmbulance: 'Call Ambulance',
            emergencyRequestBlood: 'Request Blood Donation',
            emergencyCallFire: 'Call Fire Brigade',
            emergencyContactPolice: 'Contact Police',
            emergencyGeneralHelpline: 'General Helpline (112)',
            emergencyFooter: 'For immediate help, call 112 or visit your nearest help center.',
            yourLocation: 'Your Current Location:',
            fetchingLocation: 'Fetching location...',
            viewOnMap: 'View on Google Maps',
            sendSmsContact: 'Send SMS to Emergency Contact:',
            tapToSendSms: 'Tap below to send your location via SMS.',
            sendLocation: 'Send Location',
            closeBtn: 'Close',
            ambulanceCalling: 'Calling Ambulance (108)...',
            ambulanceStayCalm: 'Stay calm. Help is on the way. Your location has been detected.',
            fireCalling: 'Calling Fire Brigade (101)...',
            fireProvideLocation: 'Please provide the exact location of the fire to the operator.',
            policeAssistanceTitle: 'Police Assistance',
            policeAssistanceSubtitle: 'What type of help do you need?',
            policeCallBtn: 'Call Police (100/112)',
            policeCyberBtn: 'Report Cyber Crime',
            policeFileComplaintBtn: 'File a Written Complaint',
            // Blood Form
            bloodRequestTitle: 'Blood Donation Request',
            bloodPatientName: 'Patient Name',
            bloodPatientNamePlaceholder: 'Enter patient name',
            // ... (rest of the translations will be added)

            // Complaint Form (already existed, just for completeness)
            fileComplaintTitle: 'File a Complaint',
            fileComplaintSubtitle: 'Your report will be sent to the nearest police station.',
            complaintNameLabel: 'Name',
            complaintContactLabel: 'Contact Number',
            complaintLocationLabel: 'Location of Incident',
            complaintLocationPlaceholder: 'Auto-filling with your location...',
            complaintCategoryLabel: 'Category',
            categorySelect: 'Select a category...',
            categoryTheft: 'Theft / Robbery',
            categoryHarassment: 'Harassment',
            categoryAccident: 'Accident',
            categoryCyber: 'Cyber Fraud',
            categoryMissing: 'Missing Person',
            categoryOther: 'Other',
            complaintDescriptionLabel: 'Description',
            complaintAttachmentLabel: 'Attach Evidence (Photo/Video/File)',
            submitComplaintBtn: 'Submit Complaint',
        },
        hi: {
            // General
            loadingMessage: 'जन सेवा प्लेटफॉर्म लोड हो रहा है...',
            platformName: 'स्मार्ट सिविक इंटेलिजेंस प्लेटफॉर्म',
            appName: 'स्मार्ट सिविक',
            appState: 'झारखंड',
            onlineStatus: 'ऑनलाइन',
            emergencyBtn: 'आपातकाल',
            // Login
            welcome: 'स्वागत है',
            loginUsernameLabel: 'ईमेल/उपयोगकर्ता नाम',
            loginUsernamePlaceholder: 'अपना ईमेल या उपयोगकर्ता नाम दर्ज करें',
            loginPasswordLabel: 'पासवर्ड',
            loginPasswordPlaceholder: 'अपना पासवर्ड दर्ज करें',
            loginBtn: 'लॉग इन करें',
            forgotPassword: 'पासवर्ड भूल गए?',
            demoCredentials: 'डेमो क्रेडेंशियल:',
            // Nav
            navDashboard: 'डैशबोर्ड',
            navComplaints: 'शिकायतें',
            navAnalytics: 'एनालिटिक्स',
            navIot: 'IoT सेंसर',
            navBlockchain: 'ब्लॉकचेन',
            navBudget: 'बजट ट्रैकर',
            navCommunity: 'समुदाय',
            navEmergency: 'आपातकाल',
            navUserMgmt: 'उपयोगकर्ता प्रबंधन',
            // Dashboard
            dashboardTitle: 'डैशबोर्ड',
            dashboardSubtitle: 'स्मार्ट सिविक इंटेलिजेंस प्लेटफॉर्म में आपका स्वागत है',
            statTotalComplaints: 'कुल शिकायतें',
            statFromLastMonth: 'पिछले महीने से',
            statResolved: 'हल किया गया',
            statResolutionRate: 'समाधान दर',
            statAvgResponse: 'औसत प्रतिक्रिया समय',
            statDays: 'दिन',
            statCivicHealth: 'सिविक हेल्थ इंडेक्स',
            statExcellent: 'उत्कृष्ट',
            chartComplaintTrends: 'शिकायत रुझान',
            chartDeptPerf: 'विभाग प्रदर्शन',
            chartHeatmap: 'शिकायत हीटमैप',
            aiInsightsTitle: 'एआई-संचालित अंतर्दृष्टि',
            aiPredictive: 'भविष्य कहनेवाला रखरखाव',
            aiPredictiveText: 'शिकायत पैटर्न के आधार पर 2 सप्ताह के भीतर सेक्टर 5 में सड़क मरम्मत की आवश्यकता है',
            aiEfficiency: 'दक्षता में सुधार',
            aiEfficiencyText: 'जल विभाग की प्रतिक्रिया समय में इस महीने 30% का सुधार हुआ है',
            aiSentiment: 'भावना विश्लेषण',
            aiSentimentText: 'हाल के बुनियादी ढांचे में सुधार पर 78% सकारात्मक नागरिक प्रतिक्रिया',
            // Complaints Page
            complaintsTitle: 'शिकायत प्रबंधन',
            complaintsSubtitle: 'नागरिक शिकायतें जमा करें और ट्रैक करें',
            newComplaintBtn: 'नई शिकायत',
            voiceComplaintBtn: 'वॉयस शिकायत',
            photoReportBtn: 'फोटो रिपोर्ट',
            allDepts: 'सभी विभाग',
            pwd: 'PWD',
            electricity: 'बिजली',
            water: 'पानी',
            health: 'स्वास्थ्य',
            waste: 'अपशिष्ट प्रबंधन',
            allStatus: 'सभी स्थिति',
            open: 'खुला',
            inProgress: 'प्रगति में',
            resolved: 'हल',
            closed: 'बंद',
            allPriority: 'सभी प्राथमिकता',
            high: 'उच्च',
            medium: 'मध्यम',
            low: 'कम',
            searchComplaints: 'शिकायतें खोजें...',
            complaintDesc1: 'सिटी अस्पताल के पास सड़क का गड्ढा',
            priorityHigh: 'उच्च प्राथमिकता',
            statusInProgress: 'प्रगति में है',
            cardDept: 'विभाग',
            deptPwd: 'PWD',
            cardLocation: 'स्थान',
            cardSla: 'SLA की समय सीमा',
            daysRemaining: '{days} दिन शेष',
            submittedAgo: '{days} दिन पहले सबमिट किया गया',
            complaintDesc2: 'वार्ड 12 में पानी की आपूर्ति बाधित',
            priorityMedium: 'मध्यम प्राथमिकता',
            statusResolved: 'हल किया गया',
            deptWater: 'जल आपूर्ति',
            cardResolutionTime: 'समाधान का समय',
            resolvedAgo: '{days} दिन पहले हल किया गया',
            // Emergency Page & Modals
            emergencyTitle: 'आपातकालीन सेवाएं',
            emergencySubtitle: 'आपको जिस सेवा की आवश्यकता है उसे चुनें',
            emergencyCallAmbulance: 'एम्बुलेंस को बुलाओ',
            emergencyRequestBlood: 'रक्तदान का अनुरोध करें',
            emergencyCallFire: 'दमकल बुलाओ',
            emergencyContactPolice: 'पुलिस से संपर्क करें',
            emergencyGeneralHelpline: 'सामान्य हेल्पलाइन (112)',
            emergencyFooter: 'तत्काल सहायता के लिए, 112 पर कॉल करें या अपने नजदीकी सहायता केंद्र पर जाएं।',
            yourLocation: 'आपका वर्तमान स्थान:',
            fetchingLocation: 'स्थान प्राप्त हो रहा है...',
            viewOnMap: 'गूगल मैप्स पर देखें',
            sendSmsContact: 'आपातकालीन संपर्क को एसएमएस भेजें:',
            tapToSendSms: 'अपना स्थान एसएमएस के माध्यम से भेजने के लिए नीचे टैप करें।',
            sendLocation: 'स्थान भेजें',
            closeBtn: 'बंद करें',
            ambulanceCalling: 'एम्बुलेंस को कॉल किया जा रहा है (108)...',
            ambulanceStayCalm: 'शांत रहें। मदद रास्ते में है। आपके स्थान का पता लगा लिया गया है।',
            fireCalling: 'फायर ब्रिगेड को कॉल किया जा रहा है (101)...',
            fireProvideLocation: 'कृपया ऑपरेटर को आग का सटीक स्थान बताएं।',
            policeAssistanceTitle: 'पुलिस सहायता',
            policeAssistanceSubtitle: 'आपको किस प्रकार की सहायता चाहिए?',
            policeCallBtn: 'पुलिस को बुलाएं (100/112)',
            policeCyberBtn: 'साइबर अपराध की रिपोर्ट करें',
            policeFileComplaintBtn: 'एक लिखित शिकायत दर्ज करें',
            // Blood Form
            bloodRequestTitle: 'रक्तदान अनुरोध',
            bloodPatientName: 'रोगी का नाम',
            bloodPatientNamePlaceholder: 'रोगी का नाम दर्ज करें',

            // Complaint Form
            fileComplaintTitle: 'शिकायत दर्ज करें',
            fileComplaintSubtitle: 'आपकी रिपोर्ट निकटतम पुलिस स्टेशन को भेजी जाएगी।',
            complaintNameLabel: 'नाम',
            complaintContactLabel: 'संपर्क संख्या',
            complaintLocationLabel: 'घटना का स्थान',
            complaintLocationPlaceholder: 'आपके स्थान के साथ ऑटो-फिलिंग...',
            complaintCategoryLabel: 'श्रेणी',
            categorySelect: 'एक श्रेणी चुनें...',
            categoryTheft: 'चोरी / डकैती',
            categoryHarassment: 'उत्पीड़न',
            categoryAccident: 'दुर्घटना',
            categoryCyber: 'साइबर धोखाधड़ी',
            categoryMissing: 'गुमशुदा व्यक्ति',
            categoryOther: 'अन्य',
            complaintDescriptionLabel: 'विवरण',
            complaintAttachmentLabel: 'सबूत संलग्न करें (फोटो/वीडियो/फ़ाइल)',
            submitComplaintBtn: 'शिकायत दर्ज करें',
        }
        // Add other languages like 'sa', 'mu', 'ho' here
    };

    const languageSelect = document.getElementById('languageSelect');
    languageSelect.addEventListener('change', (event) => {
        applyTranslations(event.target.value);
    });

    function applyTranslations(lang) {
        const langTranslations = translations[lang] || translations.en;

        document.querySelectorAll('[data-translate]').forEach(el => {
            const key = el.getAttribute('data-translate');
            let text = langTranslations[key] || translations.en[key];
            if (text && el.dataset.translateVars) {
                const vars = JSON.parse(el.dataset.translateVars);
                for (const varKey in vars) {
                    text = text.replace(`{${varKey}}`, vars[varKey]);
                }
            }
            if (text) el.textContent = text;
        });

        document.querySelectorAll('[data-translate-placeholder]').forEach(el => {
            const key = el.getAttribute('data-translate-placeholder');
            if (langTranslations[key]) el.placeholder = langTranslations[key];
        });

        document.querySelectorAll('[data-translate-options]').forEach(selectEl => {
            const optionsMap = JSON.parse(selectEl.dataset.translateOptions);
            selectEl.querySelectorAll('option').forEach(optionEl => {
                const key = optionEl.value || optionEl.getAttribute('data-translate');
                if (optionsMap[key] && langTranslations[optionsMap[key]]) {
                    optionEl.textContent = langTranslations[optionsMap[key]];
                }
            });
        });
    }

    // --- CATEGORY & SUB-CATEGORY LOGIC for Civic Complaints ---
    const complaintCategories = {
        catRoads: ['subPotholes', 'subDamagedRoad', 'subEncroachment', 'subStreetLight'],
        catTransport: ['subBusDelay', 'subOvercharging', 'subUnsafeDriving', 'subBrokenBusStop'],
        catWater: ['subLeakage', 'subNoWater', 'subContaminatedWater', 'subOverflow'],
        catElectricity: ['subPowerCut', 'subMeterIssue', 'subIllegalConnection', 'subFaultyTransformer'],
        catWaste: ['subGarbageNotCollected', 'subOverflowingDustbin', 'subIllegalDumping', 'subDeadAnimal'],
        catEnvironment: ['subTreeFallen', 'subBlockedDrainage', 'subOpenManhole', 'subMosquitoBreeding']
    };

    const mainCategorySelect = document.getElementById('mainCategory');
    const subCategoryContainer = document.getElementById('subCategoryContainer');
    const subCategorySelect = document.getElementById('subCategory');

    function populateMainCategories() {
        if (!mainCategorySelect) return;
        mainCategorySelect.innerHTML = `<option value="" data-translate="categorySelect">Select a category...</option>`;
        for (const key in complaintCategories) {
            mainCategorySelect.innerHTML += `<option value="${key}" data-translate="${key}">${translations.en[key] || key}</option>`;
        }
    }

    if(mainCategorySelect) {
        mainCategorySelect.addEventListener('change', () => {
            const selectedCategory = mainCategorySelect.value;
            subCategorySelect.innerHTML = ''; // Clear previous options
            if (selectedCategory && complaintCategories[selectedCategory]) {
                const subCategories = complaintCategories[selectedCategory];
                subCategories.forEach(subKey => {
                    subCategorySelect.innerHTML += `<option value="${subKey}" data-translate="${subKey}">${translations.en[subKey] || subKey}</option>`;
                });
                subCategoryContainer.classList.remove('hidden');
            } else {
                subCategoryContainer.classList.add('hidden');
            }
            applyTranslations(languageSelect.value);
        });
    }

    // --- Civic Complaint Modal Logic (from Complaint Management) ---
    const newComplaintBtn = document.getElementById('newComplaintBtn');
    const newComplaintModal = document.getElementById('newComplaintModal');
    const closeNewComplaintModalBtn = document.getElementById('closeNewComplaintModal');
    const newComplaintForm = document.getElementById('newComplaintForm');
    const complaintImageInput = document.getElementById('complaintImage');
    const imagePreview = document.getElementById('imagePreview');
    const complaintMapPreview = document.getElementById('complaintMapPreview');
    const complaintCoordinates = document.getElementById('complaintCoordinates');
    const newComplaintStatus = document.getElementById('newComplaintStatus');
    let complaintModalMap; // Renamed for clarity

    if (newComplaintBtn) {
        newComplaintBtn.addEventListener('click', () => {
            if (newComplaintModal) {
                newComplaintModal.classList.remove('hidden');
                newComplaintStatus.classList.add('hidden');
                if (newComplaintForm) newComplaintForm.reset();
                populateMainCategories();
                subCategoryContainer.classList.add('hidden');
                imagePreview.classList.add('hidden');
                
                complaintMapPreview.innerHTML = `<span data-translate="fetchingLocation">Fetching location...</span>`;
                applyTranslations(languageSelect.value);

                navigator.geolocation.getCurrentPosition(pos => {
                    const { latitude: lat, longitude: lon } = pos.coords;
                    complaintCoordinates.textContent = `Lat: ${lat.toFixed(5)}, Lon: ${lon.toFixed(5)}`;
                    // If map doesn't exist, create it. Otherwise, just move it.
                    if (!complaintModalMap) {
                        initializeComplaintModalMap([lon, lat]);
                    } else {
                        complaintModalMap.setCenter([lon, lat]);
                        if (window.complaintModalMarker) window.complaintModalMarker.setLngLat([lon, lat]);
                        complaintModalMap.resize(); // Important when showing a hidden map
                    }
                }, err => {
                    complaintMapPreview.textContent = 'Could not get location.';
                    console.warn('Geolocation Error:', err);
                }, { enableHighAccuracy: true });
            }
        });
    }

    if (closeNewComplaintModalBtn) {
        closeNewComplaintModalBtn.addEventListener('click', () => {
            if (newComplaintModal) {
                newComplaintModal.classList.add('hidden');
            }
        });
    }

    if (newComplaintForm) {
        newComplaintForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (complaintImageInput.files.length === 0) {
                newComplaintStatus.innerHTML = '<strong>Error:</strong> Please capture or select an image for evidence.';
                newComplaintStatus.className = 'mt-4 p-4 rounded-lg border-l-4 bg-red-50 border-red-500 text-red-800';
                newComplaintStatus.classList.remove('hidden');
                return;
            }
            const complaintId = `CMP-${new Date().getFullYear()}-${Math.floor(Math.random() * 900000) + 100000}`;
            newComplaintStatus.innerHTML = `<strong>Success!</strong> Your complaint has been submitted with ID: <strong>${complaintId}</strong>.`;
            newComplaintStatus.className = 'mt-4 p-4 rounded-lg border-l-4 bg-green-50 border-green-500 text-green-800';
            newComplaintStatus.classList.remove('hidden');

            setTimeout(() => {
                newComplaintModal.classList.add('hidden');
            }, 3000);
        });
    }

    // Function: Show/hide nav and sections based on role
    function updateUIForRole(role) {
        var adminOnlyNav = document.getElementById('adminOnlyNav');
        const blockchainBtn = document.querySelector('[data-section="blockchain"]');
        const budgetBtn = document.querySelector('[data-section="budget"]');
        const usersBtn = document.querySelector('[data-section="users"]');

        if (role === 'citizen') {
            if (adminOnlyNav) adminOnlyNav.classList.add('hidden');
            if (blockchainBtn) blockchainBtn.classList.add('hidden');
            if (budgetBtn) budgetBtn.classList.add('hidden');
            if (usersBtn) usersBtn.classList.add('hidden');
        } else if (role === 'dept_admin') {
            if (adminOnlyNav) adminOnlyNav.classList.add('hidden');
            if (blockchainBtn) blockchainBtn.classList.remove('hidden');
            if (budgetBtn) budgetBtn.classList.remove('hidden');
            if (usersBtn) usersBtn.classList.add('hidden');
        } else if (role === 'super_admin') {
            if (adminOnlyNav) adminOnlyNav.classList.remove('hidden');
            if (blockchainBtn) blockchainBtn.classList.remove('hidden');
            if (budgetBtn) budgetBtn.classList.remove('hidden');
            if (usersBtn) usersBtn.classList.remove('hidden');
        }
    }

    // Function: Setup dashboard events
   function setupDashboardEvents() {
        // Add a try-catch block for robustness
        try {
        document.querySelectorAll('.nav-item').forEach(function(btn) {
            btn.addEventListener('click', function(e) {
                // This inner try-catch is good for handling errors within a specific click
                try { 
                    var section = btn.getAttribute('data-section');
                    // If a section is not found, default to dashboard to prevent errors
                    if (!document.getElementById(section + 'Section')) {
                        console.warn(`Section "${section}" not found. Defaulting to dashboard.`);
                        section = 'dashboard';
                    }

                    document.querySelectorAll('section').forEach(function(sec) {
                        sec.classList.add('hidden');
                    });
                    var target = document.getElementById(section + 'Section');
                    if (target) target.classList.remove('hidden');
                    document.querySelectorAll('.nav-item').forEach(function(b) {
                        b.classList.remove('bg-blue-100', 'text-blue-700');
                    });
                    btn.classList.add('bg-blue-100', 'text-blue-700');
                } catch (error) {
                    console.error("Error in navigation event:", error);
                }
            });
        });
        // Ensure the dashboard is visible by default after setup
        var dashboardSection = document.getElementById('dashboardSection');
        if (dashboardSection) dashboardSection.classList.remove('hidden');
        } catch (error) {
            console.error("Error setting up dashboard events:", error);
        }
    }

    function initializeCharts() {
        // This try-catch is for the chart destruction logic
        try { 
            // Destroy previous charts if any
            if (window._charts) {
                window._charts.forEach(c => c && c.destroy());
            }
            window._charts = [];
        } catch (chartError) { 
            console.error("Error destroying previous charts:", chartError);
        }

      try {
         // Trend Chart
            var trendCtx = document.getElementById('trendChart');
            if (trendCtx) {
                window._charts.push(new Chart(trendCtx.getContext('2d'), {
                    type: 'line',
                data: {
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                    datasets: [{
                        label: 'Complaints',
                        data: [120, 190, 300, 500, 200, 300],
                       borderColor: 'rgb(59, 130, 246)',
                        backgroundColor: 'rgba(59, 130, 246, 0.1)',
                      tension: 0.3,
                        fill: true,
                        pointRadius: 4,
                        pointBackgroundColor: 'rgb(59, 130, 246)'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: {
                        x: { grid: { display: false } },
                        y: { beginAtZero: true, grid: { color: '#e5e7eb' } }
                    }
                }
            }));

            }
        } catch (trendError) {
            console.error("Error initializing trend chart:", trendError);
        }


        // Performance Chart code here
        try {
        var perfCtx = document.getElementById('performanceChart');
        if (perfCtx) {
            window._charts.push(new Chart(perfCtx.getContext('2d'), {
                type: 'bar',
                data: {
                    labels: ['PWD', 'Water', 'Electric', 'Health', 'Waste'],
                    datasets: [{
                        label: 'Resolution Rate %',
                        data: [95, 78, 65, 89, 82],
                        backgroundColor: [
                            'rgba(34, 197, 94, 0.8)',
                            'rgba(59, 130, 246, 0.8)',
                            'rgba(245, 158, 11, 0.8)',
                            'rgba(139, 92, 246, 0.8)',
                            'rgba(236, 72, 153, 0.8)'
                        ],
                        borderRadius: 8
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: {
                        y: { beginAtZero: true, max: 100, grid: { color: '#e5e7eb' } },
                        x: { grid: { display: false } }
                    }
                }
            }));
        }
        } catch(perfError) {
            console.error("Error initializing performance chart:", perfError);
        }

        // Sentiment Chart
        try {
        var sentimentCtx = document.getElementById('sentimentChart');
        if (sentimentCtx) {
            window._charts.push(new Chart(sentimentCtx.getContext('2d'), {
                type: 'doughnut',
                data: {
                    labels: ["Positive", "Neutral", "Negative"],
                    datasets: [{
                        data: [45, 35, 20],
                        backgroundColor: [
                            'rgba(34, 197, 94, 0.8)',
                            'rgba(156, 163, 175, 0.8)',
                            'rgba(239, 68, 68, 0.8)'
                        ],
                        borderWidth: 2
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { position: 'bottom' } }
                }
            }));
        }
        } catch(sentimentError) {
            console.error("Error initializing sentiment chart:", sentimentError);
        }

        // Predictive Chart
        try {
        var predictiveCtx = document.getElementById('predictiveChart');
        if (predictiveCtx) {
            window._charts.push(new Chart(predictiveCtx.getContext('2d'), {
                type: 'line',
                data: {
                    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
                    datasets: [{
                        label: "Predicted Issues",
                        data: [15, 22, 18, 25],
                        borderColor: "rgb(139, 92, 246)",
                        backgroundColor: 'rgba(139, 92, 246, 0.1)',
                        borderDash: [5, 5],
                        fill: true,
                        tension: 0.3,
                        pointRadius: 4
                    }, {
                        label: 'Actual Issues',
                        data: [12, 25, 16, null],
                        borderColor: 'rgb(34, 197, 94)',
                        backgroundColor: 'rgba(34, 197, 94, 0.1)',
                        fill: true,
                        tension: 0.3,
                        pointRadius: 4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { position: 'bottom' } },
                    scales: {
                        x: { grid: { display: false } },
                        y: { beginAtZero: true, grid: { color: '#e5e7eb' } }
                    }
                }
            }));
        }
        } catch(predictiveError) {
            console.error("Error initializing predictive chart:", predictiveError);
        }

        // Budget Chart (Pie)
        try {
        var budgetCtx = document.getElementById('budgetChart');
        if (budgetCtx) {
            // Fix: Set parent div height and let Chart.js fill it
            budgetCtx.height = null; // Remove any inline height
            budgetCtx.width = null;  // Remove any inline width

            window._charts.push(new Chart(budgetCtx.getContext('2d'), {
                type: 'pie',
                data: {
                    labels: ["Infrastructure", "Water Supply", "Healthcare", "Education", "Environment"],
                    datasets: [{
                        data: [30, 25, 20, 15, 10],
                        backgroundColor: [
                            'rgba(59, 130, 246, 0.85)',   // Blue
                            'rgba(34, 197, 94, 0.85)',    // Green
                            'rgba(239, 68, 68, 0.85)',    // Red
                            'rgba(245, 158, 11, 0.85)',   // Orange
                            'rgba(139, 92, 246, 0.85)'    // Purple
                        ],
                        borderColor: [
                            'rgba(59, 130, 246, 1)',
                            'rgba(34, 197, 94, 1)',
                            'rgba(239, 68, 68, 1)',
                            'rgba(245, 158, 11, 1)',
                            'rgba(139, 92, 246, 1)'
                        ],
                        borderWidth:  2
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                color: '#374151', // Tailwind gray-700 for better contrast
                                font: {
                                    size: 14
                                }
                            }
                        },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    let label = context.label || '';
                                    let value = context.parsed || 0;
                                    let total = context.chart._metasets[0].total || 100;
                                    let percent = ((value / total) * 100).toFixed(1);
                                    return `${label}: ${value}% (${percent}%)`;
                                }
                            }
                        }
                    }
                }
            }));
        }
        } catch(budgetError) {
            console.error("Error initializing budget chart:", budgetError);
        }

    }

    // Separate function to handle map initialization and resizing
    let map; // Keep map instance in a higher scope
    let isAppInitialized = false; // Flag to prevent re-initialization
    function initializeMap() {
        if (map) return; // Already initialized
        try {
            const mapContainer = document.getElementById('map');
            if (mapContainer && typeof mapboxgl !== 'undefined') {
                mapboxgl.accessToken = 'pk.eyJ1IjoiZGVtby11c2VyIiwiYSI6ImNqMHp6eXk2MDAwMDAzM3J3ZTU2bWI5MHYifQ.jR24_j_3wQas1CRy2d_2gA'; // Using a demo token
                map = new mapboxgl.Map({
                    container: 'map',
                    style: 'mapbox://styles/mapbox/streets-v11',
                    center: [85.3240, 23.3441], // Ranchi coordinates
                    zoom: 11,
                    scrollZoom: {ctrl: true} // Require Ctrl key for map zoom
                });

                // Demo heatmap data
                const heatmapData = {
                    "type": "FeatureCollection",
                    "features": [
                        { "type": "Feature", "geometry": { "type": "Point", "coordinates": [85.33, 23.35] } },
                        { "type": "Feature", "geometry": { "type": "Point", "coordinates": [85.34, 23.36] } },
                        { "type": "Feature", "geometry": { "type": "Point", "coordinates": [85.32, 23.34] } },
                        { "type": "Feature", "geometry": { "type": "Point", "coordinates": [85.31, 23.33] } },
                        { "type": "Feature", "geometry": { "type": "Point", "coordinates": [85.35, 23.37] } }
                    ]
                };

                map.on('load', function() {
                    if (map.getSource('complaints')) return; // Avoid re-adding source
                    map.addSource('complaints', { type: 'geojson', data: heatmapData });
                    map.addLayer({
                        id: 'complaints-heat', type: 'heatmap', source: 'complaints',
                        paint: { 'heatmap-radius': 30, 'heatmap-intensity': 0.8 }
                    });
                });
            }
        } catch (mapError) {
            console.error("Error initializing Mapbox map:", mapError);
        }
    }

    function initializeOrResizeMap() {
        const mapContainer = document.getElementById('map');
        if (!mapContainer) return;

        // If map is already initialized, just resize it
        if (map && map.getCanvas()) {
            map.resize();
            return;
        }
        
        // If not initialized, initialize it
        initializeMap();
    }

    // Function to run all heavy initializations at once
    function initializeMainApp() {
        if (isAppInitialized) return; // Don't run more than once

        // Defer heavy initialization until after the UI is visible
        setTimeout(() => {
            setupDashboardEvents();
            initializeCharts();
            initializeOrResizeMap();
            isAppInitialized = true; // Set the flag
        }, 50); // A small delay allows the browser to render the UI first
    }

    // On page load, check login state
    var loginScreen = document.getElementById('loginScreen');
    var mainApp = document.getElementById('mainApp');
    var savedUser = localStorage.getItem('currentUser');
    if (savedUser && mainApp && loginScreen) {
        var userObj = users[savedUser];
        loginScreen.classList.add('hidden');
        updateUserNavVisibility();

        if (userObj) {
            updateUIForRole(userObj.role);
            document.getElementById('userNameDisplay').textContent = userObj.name;
        }
        // Show the main app shell immediately for a faster perceived load
        mainApp.classList.remove('hidden');
        hideLoadingScreen();
        initializeMainApp(); // Run the one-time initialization
    } else {
        if (loginScreen && mainApp) {
                       loginScreen.classList.remove('hidden');
            mainApp.classList.add('hidden');
            // Ensure user name is reset if not logged in
            document.getElementById('userNameDisplay').textContent = 'User';
            hideLoadingScreen(); // This was the missing call
        }
    }

    // Note: The old loading screen timeout has been removed.

    // Toggle password visibility
    var togglePasswordBtn = document.getElementById('togglePassword');
    var passwordInput = document.getElementById('password');
    if (togglePasswordBtn && passwordInput) {
        togglePasswordBtn.addEventListener('click', function() {
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                togglePasswordBtn.querySelector('i').classList.remove('fa-eye');
                togglePasswordBtn.querySelector('i').classList.add('fa-eye-slash');
            } else {
                passwordInput.type = 'password';
                togglePasswordBtn.querySelector('i').classList.remove('fa-eye-slash');
                togglePasswordBtn.querySelector('i').classList.add('fa-eye');
            }
        });
    }

    // --- LOGIN LOGIC ---
    var loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
         try {
                e.preventDefault();
                var username = document.getElementById('username').value.trim();
                var password = document.getElementById('password').value;
                var loginError = document.getElementById('loginError');
                var userObj = users[username];

                if (userObj && userObj.password === password) {
                    localStorage.setItem('currentUser', username);

                    // Delay hiding login screen and showing main app slightly
                    setTimeout(function() {
                        const mainApp = document.getElementById('mainApp');
                        if (loginError) loginError.classList.add('hidden');
                        
                        updateUIForRole(userObj.role);
                        document.getElementById('userNameDisplay').textContent = userObj.name;
                        updateUserNavVisibility();
                        initializeMainApp(); // Run one-time setup if not already done
                        // Hide login and show app after setup
                        // The dashboard section will be shown by default via setupDashboardEvents
                        document.getElementById('loginScreen').classList.add('hidden');
                        if (mainApp) mainApp.classList.remove('hidden');
                    }, 50);  // Minimal delay to allow UI to update
                } else {
                    if (loginError) {
                        loginError.textContent = "Invalid credentials. Please use the demo credentials below.";
                        loginError.classList.remove('hidden');
                    }
                }
           } catch (loginSubmitError) {
                console.error("Error during login submit:", loginSubmitError);
            }
        });
    }


    // Logout logic
    var logoutBtn = document.getElementById('logoutBtn');

    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            localStorage.removeItem('currentUser');
            document.getElementById('mainApp').classList.add('hidden');
            document.getElementById('loginScreen').classList.remove('hidden');
            // Reset user name to default after logout
            document.getElementById('userNameDisplay').textContent = 'User';
            updateUserNavVisibility(); // Ensure nav visibility is updated after logout
        });
    }


    // Function: Hide user and logout button on login page
    function updateUserNavVisibility() {
        var userNav = document.getElementById('userNav');
        var mainApp = document.getElementById('mainApp'); // This might be null on initial load
        // CRITICAL FIX: Ensure both elements exist before trying to access properties
        if (userNav && mainApp) {
            // Only show userNav if mainApp is visible (i.e., user is logged in)
            userNav.style.display = mainApp.classList.contains('hidden') ? 'none' : 'flex';
        }
    }

    // Call the function after login/logout and on DOMContentLoaded
    updateUserNavVisibility();

    // Emergency button logic (works on both login and main app)
    function setupEmergencyButton() {
        var emergencyBtn = document.getElementById('emergencyBtn');
        var emergencyModal = document.getElementById('emergencyModal');
        var closeEmergencyModal = document.getElementById('closeEmergencyModal');

        // Show modal on any emergency button click
        function showEmergencyModal() {
            if (emergencyModal) emergencyModal.classList.remove('hidden');
        }
        function hideEmergencyModal() {
            if (emergencyModal) emergencyModal.classList.add('hidden');
        }

        if (emergencyBtn) {
            emergencyBtn.onclick = showEmergencyModal;
        }
        // Make this selector more specific to avoid capturing buttons inside the emergency section
        const emergencyNavButton = document.querySelector('.nav-item[data-section="emergency"]');
        if(emergencyNavButton)
            emergencyNavButton.onclick = showEmergencyModal;

        // Close modal
        if (closeEmergencyModal) {
            closeEmergencyModal.onclick = hideEmergencyModal;
        }
        // Hide modal when clicking outside the modal content
        if (emergencyModal) {
            emergencyModal.addEventListener('click', function(e) {
                if (e.target === emergencyModal) hideEmergencyModal();
            });
        }
    }

    // Call on load and after login
    setupEmergencyButton();

    // Blood Donation Request Form logic
    var requestBloodBtn = document.getElementById('requestBloodBtn');
    var bloodRequestForm = document.getElementById('bloodRequestForm');
    var cancelBloodForm = document.getElementById('cancelBloodForm');
    var bloodForm = document.getElementById('bloodForm');
    var bloodFormSuccess = document.getElementById('bloodFormSuccess');

    // --- REFACTORED EMERGENCY BUTTON LOGIC ---

    // Function to close all emergency-related popups and reset buttons
    function resetEmergencyPopups() {
        
        // Hide Blood Request Form
        if (bloodRequestForm) bloodRequestForm.classList.add('hidden');
        
        // Re-enable the blood request button
        if (requestBloodBtn) {
            requestBloodBtn.classList.remove('opacity-50', 'pointer-events-none');
        }
    }

    // Open Blood Request Form
    if (requestBloodBtn && bloodRequestForm) {
        requestBloodBtn.addEventListener('click', function() {
            bloodRequestForm.classList.remove('hidden');
            requestBloodBtn.classList.add('opacity-50', 'pointer-events-none');
            bloodFormSuccess && (bloodFormSuccess.classList.add('hidden'));
            bloodForm && bloodForm.reset();
        });
    }

    // Cancel/Close Blood Request Form
    if (cancelBloodForm && bloodRequestForm && requestBloodBtn) {
        cancelBloodForm.addEventListener('click', function() {
            resetEmergencyPopups();
        });
    }

    // --- END REFACTORED LOGIC ---

    if (bloodForm && bloodFormSuccess) {
        bloodForm.addEventListener('submit', function(e) {
            e.preventDefault();
            bloodFormSuccess.textContent = "Your blood donation request has been submitted!";
            bloodFormSuccess.classList.remove('hidden');
            setTimeout(function() {
                bloodRequestForm.classList.add('hidden');
                resetEmergencyPopups();            }, 2000);
        });
    }

    // --- NEW POLICE EMERGENCY MODAL LOGIC ---
    const policeChoiceModal = document.getElementById('policeEmergencyModal');
    const closePoliceModalBtn = document.getElementById('closePoliceModal');
    const generalPoliceCallBtn = document.getElementById('generalPoliceCallBtn');
    const reportCyberCrimeBtn = document.getElementById('reportCyberCrimeBtn');

    // Cyber Crime Modal Elements
    const cyberCrimeModal = document.getElementById('cyberCrimeModal');
    const closeCyberCrimeModalBtn = document.getElementById('closeCyberCrimeModal');
    const cyberCrimeForm = document.getElementById('cyberCrimeForm');
    const cyberFormStatus = document.getElementById('cyberFormStatus');

    // Reusable elements from the (now hidden) detailed modal
    const policeLocationDisplay = document.getElementById('policeLocation');
    const policeMapLink = document.getElementById('policeMapLink');
    const policeSmsLink = document.getElementById('policeSmsLink');

    const contactPoliceBtn = document.getElementById('contactPoliceBtn');
    // Function to fetch location and prepare SOS links
    function prepareEmergencyLocation() {
        policeLocationDisplay.textContent = 'Fetching location...';
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude: lat, longitude: lon } = position.coords;
                    const locationString = `Lat: ${lat.toFixed(5)}, Lon: ${lon.toFixed(5)}`;
                    policeLocationDisplay.textContent = locationString;

                    const googleMapsUrl = `https://www.google.com/maps?q=${lat},${lon}`;
                    policeMapLink.href = googleMapsUrl;

                    const sosMessage = `Emergency! Please send help. My current location is: ${googleMapsUrl}`;
                    policeSmsLink.href = `sms:?body=${encodeURIComponent(sosMessage)}`;
                },
                () => {
                    policeLocationDisplay.textContent = 'Could not get location.';
                    policeSmsLink.href = `sms:?body=${encodeURIComponent('Emergency! I need help. Location not available.')}`;
                },
                { enableHighAccuracy: true }
            );
        } else {
            policeLocationDisplay.textContent = 'Geolocation is not supported.';
            policeSmsLink.href = `sms:?body=${encodeURIComponent('Emergency! I need help. Location not available.')}`;
        }
    }

    // Open the initial choice modal
    function openPoliceChoiceModal() {
        if (!policeChoiceModal) return;
        
        // First, close any other open popups
        resetEmergencyPopups();
        
        policeChoiceModal.classList.remove('hidden');
        prepareEmergencyLocation(); // Start fetching location in the background
    }

    if (contactPoliceBtn) {
        contactPoliceBtn.addEventListener('click', function(e) {
            e.preventDefault();
            openPoliceChoiceModal();
        });
    }

    if (closePoliceModalBtn) {
        closePoliceModalBtn.addEventListener('click', () => policeChoiceModal.classList.add('hidden'));
    }

    // Handle General Police Call
    if (generalPoliceCallBtn) {
        generalPoliceCallBtn.addEventListener('click', () => {
            // 1. Initiate call
            window.location.href = 'tel:100';

            // 2. Auto-send SMS (requires user to press send)
            // A short delay ensures the call is prioritized by the OS
            setTimeout(() => {
                if (policeSmsLink.href && policeSmsLink.href !== '#') {
                    window.open(policeSmsLink.href);
                }
            }, 500);

            // 3. Close the modal
            policeChoiceModal.classList.add('hidden');
        });
    }

    // Handle Report Cyber Crime
    if (reportCyberCrimeBtn) {
        reportCyberCrimeBtn.addEventListener('click', () => {
            policeChoiceModal.classList.add('hidden');
            if (cyberCrimeModal) {
                cyberCrimeModal.classList.remove('hidden');
                cyberFormStatus.classList.add('hidden');
                cyberCrimeForm.reset();
            }
        });
    }

    if (closeCyberCrimeModalBtn) {
        closeCyberCrimeModalBtn.addEventListener('click', () => cyberCrimeModal.classList.add('hidden'));
    }

    if (cyberCrimeForm) {
        cyberCrimeForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // In a real app, you would send this data to a server.
            // For now, we just show a success message.
            cyberFormStatus.classList.remove('hidden');
            setTimeout(() => {
                cyberCrimeModal.classList.add('hidden');
            }, 2000);
        });
    }

    // --- AMBULANCE BUTTON LOGIC ---
    const callAmbulanceBtn = document.getElementById('callAmbulanceBtn');
    const ambulanceModal = document.getElementById('ambulanceModal');
    const closeAmbulanceModalBtn = document.getElementById('closeAmbulanceModal');
    const locationDisplay = document.getElementById('ambulanceLocation');
    const mapLink = document.getElementById('ambulanceMapLink');
    const smsLink = document.getElementById('ambulanceSmsLink');

    if (callAmbulanceBtn && ambulanceModal) {
        callAmbulanceBtn.addEventListener('click', function() {
            // 1. Immediately initiate the call
            window.location.href = 'tel:108';

            // 2. Show the modal
            ambulanceModal.classList.remove('hidden');
            locationDisplay.textContent = 'Fetching location...';
            mapLink.classList.add('hidden');

            // 3. Get and display GPS location
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    function(position) {
                        const lat = position.coords.latitude;
                        const lon = position.coords.longitude;
                        const locationString = `Lat: ${lat.toFixed(5)}, Lon: ${lon.toFixed(5)}`;
                        locationDisplay.textContent = locationString;

                        // Create Google Maps link
                        const googleMapsUrl = `https://www.google.com/maps?q=${lat},${lon}`;
                        mapLink.href = googleMapsUrl;
                        mapLink.classList.remove('hidden');

                        // Create pre-filled SMS link
                        const smsBody = `Emergency! I need help. My location is: ${googleMapsUrl}`;
                        // Note: On iOS, use '&' separator, on Android, use '?'. The '?' is more compatible.
                        smsLink.href = `sms:?body=${encodeURIComponent(smsBody)}`;

                    },
                    function(error) {
                        locationDisplay.textContent = 'Could not get location. Please share manually.';
                        console.error("Geolocation error:", error.message);
                    },
                    { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
                );
            } else {
                locationDisplay.textContent = 'Geolocation is not supported by this browser.';
            }
        });
    }

    if (closeAmbulanceModalBtn) {
        closeAmbulanceModalBtn.addEventListener('click', () => ambulanceModal.classList.add('hidden'));
    }

    // --- FIRE BRIGADE BUTTON LOGIC ---
    const callFireBrigadeBtn = document.getElementById('callFireBrigadeBtn');
    const fireBrigadeModal = document.getElementById('fireBrigadeModal');
    const closeFireBrigadeModalBtn = document.getElementById('closeFireBrigadeModal');
    const fireLocationDisplay = document.getElementById('fireBrigadeLocation');
    const fireMapLink = document.getElementById('fireBrigadeMapLink');
    const fireSmsLink = document.getElementById('fireBrigadeSmsLink');

    if (callFireBrigadeBtn && fireBrigadeModal) {
        callFireBrigadeBtn.addEventListener('click', function() {
            // Configurable fire station number. Default is 101.
            const fireStationNumber = '101';

            // 1. Immediately initiate the call
            window.location.href = `tel:${fireStationNumber}`;

            // 2. Show the modal
            resetEmergencyPopups(); // Close other modals
            fireBrigadeModal.classList.remove('hidden');
            fireLocationDisplay.textContent = 'Fetching location...';
            fireMapLink.classList.add('hidden');

            // 3. Get and display GPS location
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const lat = position.coords.latitude;
                        const lon = position.coords.longitude;
                        const locationString = `Lat: ${lat.toFixed(5)}, Lon: ${lon.toFixed(5)}`;
                        fireLocationDisplay.textContent = locationString;

                        const googleMapsUrl = `https://www.google.com/maps?q=${lat},${lon}`;
                        fireMapLink.href = googleMapsUrl;
                        fireMapLink.classList.remove('hidden');

                        const smsBody = `Fire Emergency! Please send help immediately. Location: ${googleMapsUrl}`;
                        
                        // Create SMS link for user's emergency contacts
                        fireSmsLink.href = `sms:?body=${encodeURIComponent(smsBody)}`;

                        // Auto-send SMS to fire station (requires user confirmation)
                        // A short delay helps the OS prioritize the phone call intent.
                        setTimeout(() => {
                            const fireStationSmsLink = `sms:${fireStationNumber}?body=${encodeURIComponent(smsBody)}`;
                            // This will open the messaging app pre-filled.
                            // True auto-sending without user interaction requires a backend service.
                            window.open(fireStationSmsLink);
                        }, 1000);
                    },
                    (error) => {
                        fireLocationDisplay.textContent = 'Could not get location. Please share manually.';
                        console.error("Geolocation error:", error.message);
                        // Still provide a basic SMS link
                        const smsBody = 'Fire Emergency! Help needed. Location not available.';
                        fireSmsLink.href = `sms:?body=${encodeURIComponent(smsBody)}`;
                    },
                    { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
                );
            } else {
                fireLocationDisplay.textContent = 'Geolocation is not supported by this browser.';
                const smsBody = 'Fire Emergency! Help needed. Location not available.';
                fireSmsLink.href = `sms:?body=${encodeURIComponent(smsBody)}`;
            }
        });
    }

    if (closeFireBrigadeModalBtn) {
        closeFireBrigadeModalBtn.addEventListener('click', () => fireBrigadeModal.classList.add('hidden'));
    }

    // Failsafe to ensure loading screen always hides, even if other scripts fail
    setTimeout(() => {
        const loadingScreen = document.getElementById('loadingScreen');
        if (loadingScreen && loadingScreen.style.display !== 'none') {
            hideLoadingScreen();
        }
    }, 3000); // Hides after 3 seconds if not already hidden
});

function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) loadingScreen.classList.add('hidden');
}