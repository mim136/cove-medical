const medicalData = {
    departments: [
        { "id": "cardio", "name": "Cardiology", "basePrice": 4500, "keywords": ["heart", "chest", "palpitation", "breath", "cardio"] },
        { "id": "neuro", "name": "Neurology", "basePrice": 4000, "keywords": ["headache", "brain", "dizzy", "nerve", "seizure", "neuro"] },
        { "id": "ortho", "name": "Orthopedics", "basePrice": 3500, "keywords": ["bone", "joint", "fracture", "spine", "back pain", "knee"] },
        { "id": "derm", "name": "Dermatology", "basePrice": 2500, "keywords": ["skin", "rash", "acne", "mole", "itch"] },
        { "id": "psych", "name": "Psychiatry", "basePrice": 3000, "keywords": ["anxiety", "mood", "sleep", "stress", "mental"] },
        { "id": "peds", "name": "Pediatrics", "basePrice": 2000, "keywords": ["child", "baby", "infant", "growth", "vaccination"] },
        { "id": "ophth", "name": "Ophthalmology", "basePrice": 3200, "keywords": ["eye", "vision", "blur", "glaucoma", "cataract"] },
        { "id": "dent", "name": "Dentistry", "basePrice": 2800, "keywords": ["tooth", "gum", "cavity", "braces", "oral"] },
        { "id": "onco", "name": "Oncology", "basePrice": 5000, "keywords": ["cancer", "tumor", "chemo", "screening"] }
    ],
    doctors: [
        { "id": "doc1", "name": "Dr. Abebe Bikila", "deptId": "cardio", "availability": "high", "timezone": "UTC+3", "rating": 4.9, "experience": "15+ Years" },
        { "id": "doc2", "name": "Dr. Almaz Ayana", "deptId": "cardio", "availability": "med", "timezone": "UTC+3", "rating": 4.7, "experience": "8 Years" },
        { "id": "doc3", "name": "Dr. Bekele Mekonnen", "deptId": "neuro", "availability": "low", "timezone": "UTC+3", "rating": 5.0, "experience": "20 Years" },
        { "id": "doc4", "name": "Dr. Fitsum Gebre", "deptId": "neuro", "availability": "high", "timezone": "UTC+3", "rating": 4.6, "experience": "5 Years" },
        { "id": "doc5", "name": "Dr. Hiwot Tesfaye", "deptId": "ortho", "availability": "med", "timezone": "UTC+3", "rating": 4.8, "experience": "12 Years" },
        { "id": "doc6", "name": "Dr. Kebede Kassaye", "deptId": "derm", "availability": "high", "timezone": "UTC+3", "rating": 4.5, "experience": "6 Years" },
        { "id": "doc7", "name": "Dr. Lemlem Hailu", "deptId": "psych", "availability": "med", "timezone": "UTC+3", "rating": 4.9, "experience": "14 Years" },
        { "id": "doc8", "name": "Dr. Mulugeta Seraw", "deptId": "peds", "availability": "high", "timezone": "UTC+3", "rating": 4.8, "experience": "10 Years" },
        { "id": "doc9", "name": "Dr. Rahel Solomon", "deptId": "ophth", "availability": "high", "timezone": "UTC+3", "rating": 4.7, "experience": "9 Years" },
        { "id": "doc10", "name": "Dr. Samuel Yohannes", "deptId": "onco", "availability": "med", "timezone": "UTC+3", "rating": 4.9, "experience": "18 Years" },
        { "id": "doc11", "name": "Dr. Tariku Gena", "deptId": "dent", "availability": "high", "timezone": "UTC+3", "rating": 4.6, "experience": "7 Years" },
        { "id": "doc12", "name": "Dr. Wondimu Abera", "deptId": "ortho", "availability": "high", "timezone": "UTC+3", "rating": 4.8, "experience": "11 Years" },
        { "id": "doc13", "name": "Dr. Yonas Berhane", "deptId": "cardio", "availability": "high", "timezone": "UTC+3", "rating": 4.9, "experience": "16 Years" },
        { "id": "doc14", "name": "Dr. Zewditu Haile", "deptId": "ophth", "availability": "med", "timezone": "UTC+3", "rating": 4.7, "experience": "8 Years" }
    ],
    hospitalTimezone: 'Africa/Addis_Ababa', // UTC+3
    paymentDetails: {
        cbe: { name: 'Commercial Bank', account: '1000123456789', icon:"cbe.png" },
        abyssinia: { name: 'Abyssinia Bank', account: '887766554', icon: "abyssinia.png" },
        awash: { name: 'Awash Bank', account: '01234455667788', icon: "awash.png" },
        telebirr: { name: 'Telebirr', account: '+251 912 345 678', icon: "telebirr.png" },
        paypal: { name: 'PayPal', account: 'payments@cove.med', icon: "paypal.png" },
        cash: { name: 'In-Person Cash', account: 'Pay at Front Desk', icon: 'https://cdn-icons-png.flaticon.com/512/2489/2489756.png' }
    }
};

const translations = {
    en: {
        hero_title: "Stay Healthy. Live Better.",
        hero_subtitle: "Experience the next evolution of personalized healthcare. Secure, intelligent, and designed for your future.",
        step1_title: "Personal Details",
        step1_desc: "Securely enter your identification details for the medical ledger.",
        label_name: "Full Legal Name",
        label_email: "Email Address",
        label_phone: "Phone Number",
        label_symptoms: "Describe Symptoms (AI Smart-Match Enabled)",
        placeholder_name: "Full Name",
        placeholder_email: "Email Address",
        placeholder_phone: "Phone Number",
        placeholder_symptoms: "Describe your current condition...",
        btn_continue: "Continue Specialists",
        step2_title: "Choose Specialist",
        step2_desc: "Select the department and practitioner that matches your needs.",
        label_dept: "Medical Department",
        label_doc: "Available Practitioners",
        placeholder_dept: "Select Department",
        placeholder_doc_init: "Select Department First",
        placeholder_doc_select: "Select a Specialist",
        label_mode: "Consultation Mode",
        mode_inperson: "🏥 In-Person",
        mode_telehealth: "💻 Telehealth",
        btn_back: "Back",
        btn_schedule: "Schedule Visit",
        step3_title: "Time Slot",
        step3_desc: "Real-time availability based on your current location.",
        label_date: "Preferred Date",
        label_slots: "Available Slots",
        placeholder_slots: "Select Date First",
        btn_review: "Final Review",
        step4_title: "Confirm Booking",
        step4_desc: "Review your details before encrypted submission.",
        label_patient: "Patient",
        label_contact: "Contact",
        label_provider: "Provider",
        label_specialty: "Specialty",
        label_schedule: "Schedule",
        label_mode_confirm: "Mode",
        label_cost: "Estimated Total Cost",
        label_payment: "SELECT PAYMENT METHOD",
        btn_edit: "Edit Details",
        btn_book: "Encrypt & Book Appointment",
        success_title: "Booking Confirmed!",
        success_desc: "Your appointment ID has been generated and stored on the medical blockchain.",
        btn_download: "Download Receipt",
        btn_new: "New Booking",
        specialties: {
            cardio: "Cardiology",
            neuro: "Neurology",
            ortho: "Orthopedics",
            derm: "Dermatology",
            psych: "Psychiatry",
            peds: "Pediatrics",
            ophth: "Ophthalmology",
            dent: "Dentistry",
            onco: "Oncology"
        }
    },
    am: {
        hero_title: "ጤና ይኑርዎት። የተሻለ ኑሮ ይኑሩ።",
        hero_subtitle: "የወደፊቱን ግላዊ የጤና እንክብካቤ ይለማመዱ። ደህንነቱ የተጠበቀ፣ ብልህ እና ለእርስዎ የታሰበ።",
        step1_title: "የግል ዝርዝሮች",
        step1_desc: "ለመድኃኒት መዝገብዎ መለያ ዝርዝሮችን ደህንነቱ በተጠበቀ ሁኔታ ያስገቡ።",
        label_name: "ሙሉ ህጋዊ ስም",
        label_email: "የኢሜል አድራሻ",
        label_phone: "ስልክ ቁጥር",
        label_symptoms: "ምልክቶችን ይግለጹ (AI ስማርት-ተዛማጅ ተችሏል)",
        placeholder_name: "ሙሉ ስም",
        placeholder_email: "የኢሜል አድራሻ",
        placeholder_phone: "ስልክ ቁጥር",
        placeholder_symptoms: "አሁን ያለዎትን ሁኔታ ይግለጹ...",
        btn_continue: "ወደ ስፔሻሊስቶች ይቀጥሉ",
        step2_title: "ስፔሻሊስት ይምረጡ",
        step2_desc: "ከፍላጎትዎ ጋር የሚዛመደውን ክፍል እና ባለሙያ ይምረጡ።",
        label_dept: "የሕክምና ክፍል",
        label_doc: "የሚገኙ ባለሙያዎች",
        placeholder_dept: "ክፍል ይምረጡ",
        placeholder_doc_init: "መጀመሪያ ክፍል ይምረጡ",
        placeholder_doc_select: "ስፔሻሊስት ይምረጡ",
        label_mode: "የምክክር ሁኔታ",
        mode_inperson: "🏥 በአካል",
        mode_telehealth: "💻 በቴሌሄልዝ",
        btn_back: "ተመለስ",
        btn_schedule: "ጉብኝት ያቅዱ",
        step3_title: "የጊዜ ሰሌዳ",
        step3_desc: "አሁን ባሉበት አካባቢ ላይ የተመሰረተ የእውነተኛ ጊዜ ተገኝነት።",
        label_date: "ተመራጭ ቀን",
        label_slots: "የሚገኙ ሰዓቶች",
        placeholder_slots: "መጀመሪያ ቀን ይምረጡ",
        btn_review: "የመጨረሻ ክለሳ",
        step4_title: "ቦታ ማስያዝን ያረጋግጡ",
        step4_desc: "ከምስጢራዊ ማቅረቢያ በፊት ዝርዝሮችዎን ይገምግሙ።",
        label_patient: "ታካሚ",
        label_contact: "እውቂያ",
        label_provider: "አቅራቢ",
        label_specialty: "ልዩ ሙያ",
        label_schedule: "መርሐግብር",
        label_mode_confirm: "ሁኔታ",
        label_cost: "ግምታዊ ጠቅላላ ወጪ",
        label_payment: "የክፍያ ዘዴ ይምረጡ",
        btn_edit: "ዝርዝሮችን ያርሙ",
        btn_book: "ምስጢራዊ አድርግ እና ቦታ ያዝ",
        success_title: "ቦታ ማስያዝ ተረጋግጧል!",
        success_desc: "የቀጠሮ መታወቂያዎ ተፈጥሯል እና በህክምና ብሎክቼይን ላይ ተከማችቷል።",
        btn_download: "ደረሰኝ ያውርዱ",
        btn_new: "አዲስ ቦታ ማስያዝ",
        specialties: {
            cardio: "የልብ ህክምና",
            neuro: "የነርቭ ህክምና",
            ortho: "የአጥንት ህክምና",
            derm: "የቆዳ ህክምና",
            psych: "የአእምሮ ህክምና",
            peds: "የህፃናት ህክምና",
            ophth: "የአይን ህክምና",
            dent: "የጥርስ ህክምና",
            onco: "የካንሰር ህክምና"
        }
    },
    om: {
        hero_title: "Fayyaa Ta'aa. Jireenya Wayyaa Jiraadhaa.",
        hero_subtitle: "Tajaajila fayyaa dhuunfaa gara fuulduraa muuxannoo godhadhaa. Amansiisaa, dammaqaa fi isiniif kan qophaa'e.",
        step1_title: "Ibsa Dhuunfaa",
        step1_desc: "Ibsa eenyummaa keessanii galmee qorichaaf amansiisaan galchaa.",
        label_name: "Maqaa Guutuu Seeraa",
        label_email: "Teessoo Iimeelii",
        label_phone: "Lakkoofsa Bilbilaa",
        label_symptoms: "Mallattoo keessan ibsaa (AI Smart-Match kan dandeessifame)",
        placeholder_name: "Maqaa Guutuu",
        placeholder_email: "Teessoo Iimeelii",
        placeholder_phone: "Lakkoofsa Bilbilaa",
        placeholder_symptoms: "Haala keessan amma ibsaa...",
        btn_continue: "Gara ogeessotaatti itti fufa",
        step2_title: "Ogeessa Filadhu",
        step2_desc: "Kutaa fi ogeessa fedhii keessan waliin deemu filadhaa.",
        label_dept: "Kutaa Yaalaa",
        label_doc: "Ogeessota Jiran",
        placeholder_dept: "Kutaa Filadhu",
        placeholder_doc_init: "Dura Kutaa Filadhu",
        placeholder_doc_select: "Ogeessa Filadhu",
        label_mode: "Haala Marii",
        mode_inperson: "🏥 Qaamaan",
        mode_telehealth: "💻 Telehealth",
        btn_back: "Duubatti",
        btn_schedule: "Sagantaa Qabadhu",
        step3_title: "Yeroo Qabachuu",
        step3_desc: "Bakka jirtan irratti hundaa'uun yeroo jiru.",
        label_date: "Guyyaa Filatame",
        label_slots: "Yeroo Jiran",
        placeholder_slots: "Dura Guyyaa Filadhu",
        btn_review: "Gamaggama Dhumaa",
        step4_title: "Mirkaneessi",
        step4_desc: "Oduu keessan osoo hin erginiin dura irra deebi'ii ilaali.",
        label_patient: "Dhukkubsataa",
        label_contact: "Quunnamtii",
        label_provider: "Dhiyeessaa",
        label_specialty: "Oogummaa",
        label_schedule: "Sagantaa",
        label_mode_confirm: "Haala",
        label_cost: "Gatika Waliigalaa",
        label_payment: "MALA KAFALTI FILADHAA",
        btn_edit: "Ibsa Sirreessi",
        btn_book: "Cufii Bakka Qabadhu",
        success_title: "Mirkanaa'ee Jira!",
        success_desc: "Eenyummaan qaxana keessanii uumamee jira.",
        btn_download: "Ragaa Buufadhu",
        btn_new: "Haaraa Qabadhu",
        specialties: {
            cardio: "Kaardiyooloojii",
            neuro: "Niirooloojii",
            ortho: "Ortooppeediksii",
            derm: "Deermatooloojii",
            psych: "Saayikiyaatrii",
            peds: "Pediyaatriiksii",
            ophth: "Ofthaalmooloojii",
            dent: "Dentistrii",
            onco: "Onkooloojii"
        }
    },
    ti: {
        hero_title: "ጥዑይ ኩን። ዝበለጸ ናብራ ንበር።",
        hero_subtitle: "ናይ ጽባሕ ውልቃዊ ክንክን ጥዕና ሕጂ ተለማመዱ። ውሑስ፣ በሊሕን ንዓኻ ዝተዳለወን።",
        step1_title: "ውልቃዊ ዝርዝራት",
        step1_desc: "ንመዝገብ ሕክምና ዝኸውን ዝርዝር መንነትካ ብውሑስ መገዲ ኣእቱ።",
        label_name: "ምሉእ ሕጋዊ ስም",
        label_email: "ኢመይል ኣድራሻ",
        label_phone: "ቁጽሪ ስልኪ",
        label_symptoms: "ምልክታት ግለጽ (ብAI ዝተደገፈ)",
        placeholder_name: "ምሉእ ስም",
        placeholder_email: "ኢመይል ኣድራሻ",
        placeholder_phone: "ቁጽሪ ስልኪ",
        placeholder_symptoms: "ሕጂ ዘሎ ኩነታትካ ግለጽ...",
        btn_continue: "ናብ ክኢላታት ቀጽል",
        step2_title: "ክኢላ ምረጽ",
        step2_desc: "ምስ ድሌትካ ዝሰማማዕ ክፍሊ ሕክምናን ክኢላን ምረጽ።",
        label_dept: "ክፍሊ ሕክምና",
        label_doc: "ዘለዉ ክኢላታት",
        placeholder_dept: "ክፍሊ ምረጽ",
        placeholder_doc_init: "ፈለማ ክፍሊ ምረጽ",
        placeholder_doc_select: "ክኢላ ምረጽ",
        label_mode: "ዓይነት ርክብ",
        mode_inperson: "🏥 ብኣካል",
        mode_telehealth: "💻 ብቴሌሄልዝ",
        btn_back: "ተመለስ",
        btn_schedule: "ቆጸራ ትሓዝ",
        step3_title: "ናይ ግዜ ሰሌዳ",
        step3_desc: "ከምቲ ዘለኻዮ ቦታ ዝተመጣጠነ ግዜ።",
        label_date: "ዝተመርጸ መዓልቲ",
        label_slots: "ዘለዉ ሰዓታት",
        placeholder_slots: "ፈለማ መዓልቲ ምረጽ",
        btn_review: "ናይ መወዳእታ ክለሳ",
        step4_title: "ቆጸራ ኣረጋግጽ",
        step4_desc: "ከይሰደድካ ዝርዝራትካ መርምር።",
        label_patient: "ሕሙም",
        label_contact: "ርክብ",
        label_provider: "ሓኪም",
        label_specialty: "ሞያ",
        label_schedule: "መደብ",
        label_mode_confirm: "ዓይነት",
        label_cost: "ግምታዊ ዋጋ",
        label_payment: "መገዲ ክፍሊት ምረጽ",
        btn_edit: "ዝርዝራት ኣስተኻኽል",
        btn_book: "ቆጸራ ትሓዝ",
        success_title: "ተረጋጊጹ!",
        success_desc: "መፍለዪ ቁጽሪ ቆጸራኻ ተፈጢሩ ኣሎ።",
        btn_download: "ረሲት ኣውርድ",
        btn_new: "ሓድሽ ቆጸራ",
        specialties: {
            cardio: "ካርዲዮሎጅ",
            neuro: "ኒውሮሎጅ",
            ortho: "ኦርቶፔዲክስ",
            derm: "ደርማቶሎጅ",
            psych: "ሳይክያትሪ",
            peds: "ሕክምና ህጻናት",
            ophth: "ሕክምና ዓይኒ",
            dent: "ሕክምና ስኒ",
            onco: "ኦንኮሎጅ"
        }
    },
    so: {
        hero_title: "Caafimaad qab. Nolosha u noolow si fiican.",
        hero_subtitle: "La kulan jiilka xiga ee daryeelka caafimaadka shakhsi ahaaneed. Ammaan ah, caqli badan, loona qaabeeyey mustaqbalkaaga.",
        step1_title: "Faahfaahinta Shakhsi ahaaneed",
        step1_desc: "Si ammaan ah u geli faahfaahinta aqoonsigaaga.",
        label_name: "Magaca oo Buuxa",
        label_email: "Cinwaanka Iimaylka",
        label_phone: "Lambarka Taleefanka",
        label_symptoms: "Sharax astaamaha (AI Smart-Match)",
        placeholder_name: "Magaca Buuxa",
        placeholder_email: "Cinwaanka Iimaylka",
        placeholder_phone: "Lambarka Taleefanka",
        placeholder_symptoms: "Sharax xaaladaada hadda...",
        btn_continue: "Sii wad khubarada",
        step2_title: "Dooro Khabiir",
        step2_desc: "Dooro waaxda iyo dhakhtarka ku habboon baahiyahaaga.",
        label_dept: "Waaxda Caafimaadka",
        label_doc: "Dhakhaatiirta La Heli Karo",
        placeholder_dept: "Dooro Waaxda",
        placeholder_doc_init: "Marka hore dooro waaxda",
        placeholder_doc_select: "Dooro Khabiir",
        label_mode: "Nooca La-tashiga",
        mode_inperson: "🏥 Fool-ka-fool",
        mode_telehealth: "💻 Telehealth",
        btn_back: "Dib u noqo",
        btn_schedule: "Ballanso Booqashada",
        step3_title: "Waqtiga Ballanta",
        step3_desc: "Helitaanka waqtiga dhabta ah ee ku saleysan goobtaada.",
        label_date: "Taariikhda la door bidayo",
        label_slots: "Waqtiyada la heli karo",
        placeholder_slots: "Marka hore dooro taariikhda",
        btn_review: "Dib-u-eegis kama dambays ah",
        step4_title: "Xaqiiji Ballanta",
        step4_desc: "Dib u eeg faahfaahintaada ka hor inta aan la gudbin.",
        label_patient: "Bukaanka",
        label_contact: "Xiriirka",
        label_provider: "Bixiyaha",
        label_specialty: "Takhasuska",
        label_schedule: "Jadwalka",
        label_mode_confirm: "Nooca",
        label_cost: "Qiyaasta Wadarta Qiimaha",
        label_payment: "DOORO HABKA LACAG BIXINTA",
        btn_edit: "Wax ka beddel faahfaahinta",
        btn_book: "Ballanso Ballanta",
        success_title: "Ballanta waa la xaqiijiyay!",
        success_desc: "Aqoonsiga ballantaada waa la soo saaray.",
        btn_download: "Soo deji rasiidhka",
        btn_new: "Ballan cusub",
        specialties: {
            cardio: "Kaardiyooloji",
            neuro: "Neuroloji",
            ortho: "Ortoobidiks",
            derm: "Dermatoloji",
            psych: "Saykiyaatariya",
            peds: "Pedyatrics",
            ophth: "Oftalmooloji",
            dent: "Dentistry",
            onco: "Onkoloji"
        }
    }
};

// --- State Management ---
let currentState = {
    step: 1,
    formData: {
        fullName: '',
        email: '',
        phone: '',
        age: '',
        symptoms: '',
        department: '',
        doctor: '',
        date: '',
        timeSlot: '',
        consultType: 'in-person',
        paymentMethod: 'cbe'
    },
    theme: localStorage.getItem('cove-theme') || 'dark',
    language: localStorage.getItem('cove-lang') || 'en'
};

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initLanguage();
    loadDraft();
    populateDepartments();
    updateUI();
    setupEventListeners();
});

function initTheme() {
    document.documentElement.setAttribute('data-theme', currentState.theme);
}

function initLanguage() {
    const langBtn = document.getElementById('lang-btn');
    if (langBtn) langBtn.value = currentState.language;
    applyTranslations();
}

function setLanguage(lang) {
    currentState.language = lang;
    localStorage.setItem('cove-lang', lang);
    applyTranslations();
    populateDepartments(); // Refresh departments in new language
    if (currentState.formData.department) {
        populateDoctors(currentState.formData.department); // Refresh doctors dropdown
    }
    updateUI();
}

function applyTranslations() {
    const lang = currentState.language;
    const t = translations[lang];

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = t[key];
            } else {
                el.innerHTML = t[key];
            }
        }
    });

    // Update dynamic elements like consultation buttons
    document.querySelectorAll('.toggle-btn').forEach(btn => {
        const type = btn.dataset.type;
        if (type === 'in-person') btn.innerHTML = t.mode_inperson;
        if (type === 'telehealth') btn.innerHTML = t.mode_telehealth;
    });
}

function toggleTheme() {
    currentState.theme = currentState.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', currentState.theme);
    localStorage.setItem('cove-theme', currentState.theme);
}

// --- Multi-Step Logic ---
function nextStep() {
    if (validateStep(currentState.step)) {
        currentState.step++;
        saveDraft();
        updateUI();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        // Visual Feedback for failed validation
        const currentStepEl = document.getElementById(`step-${currentState.step}`);
        currentStepEl.style.animation = 'none';
        currentStepEl.offsetHeight; // trigger reflow
        currentStepEl.style.animation = 'shake 0.5s ease-in-out';
        
        // Highlight empty required fields
        if (currentState.step === 1) {
            if (!currentState.formData.fullName) document.getElementById('full-name').style.borderColor = 'var(--danger)';
            if (!currentState.formData.email) document.getElementById('email').style.borderColor = 'var(--danger)';
        }
        if (currentState.step === 2) {
            const doc = medicalData.doctors.find(d => d.id === currentState.formData.doctor);
            if (!currentState.formData.department) document.getElementById('dept-select').style.borderColor = 'var(--danger)';
            if (!currentState.formData.doctor || (doc && doc.availability === 'low')) {
                document.getElementById('doc-select').style.borderColor = 'var(--danger)';
            }
        }
        if (currentState.step === 3) {
            if (!currentState.formData.date) document.getElementById('appt-date').style.borderColor = 'var(--danger)';
            if (!currentState.formData.timeSlot) document.getElementById('time-select').style.borderColor = 'var(--danger)';
        }
    }
}

function prevStep() {
    currentState.step--;
    updateUI();
}

function updateUI() {
    // Update Content Views
    document.querySelectorAll('.step-content').forEach((el, idx) => {
        el.classList.toggle('active', (idx + 1) === currentState.step);
    });

    // Handle Review Step
    if (currentState.step === 4) renderReview();
}

// --- Form Features ---
function populateDepartments() {
    const deptSelect = document.getElementById('dept-select');
    const lang = currentState.language;
    const currentVal = deptSelect.value;
    
    deptSelect.innerHTML = `<option value="" disabled ${!currentVal ? 'selected' : ''}>${translations[lang].placeholder_dept}</option>`;
    
    medicalData.departments.forEach(dept => {
        const opt = document.createElement('option');
        opt.value = dept.id;
        opt.textContent = translations[lang].specialties[dept.id] || dept.name;
        if (dept.id === currentVal) opt.selected = true;
        deptSelect.appendChild(opt);
    });
}

function onDepartmentChange(e) {
    const deptId = e.target.value;
    currentState.formData.department = deptId;
    populateDoctors(deptId);
    validateForm();
}

function populateDoctors(deptId) {
    const docSelect = document.getElementById('doc-select');
    const lang = currentState.language;
    docSelect.innerHTML = `<option value="" disabled selected>${translations[lang].placeholder_doc_select}</option>`;
    
    const filtered = medicalData.doctors.filter(d => d.deptId === deptId);
    filtered.forEach(doc => {
        const opt = document.createElement('option');
        opt.value = doc.id;
        
        let statusText = '';
        if (doc.availability === 'high') statusText = ' (Available)';
        else if (doc.availability === 'med') statusText = ' (Limited Slots)';
        else if (doc.availability === 'low') statusText = ' (Fully Booked)';
        
        opt.textContent = doc.name + statusText;
        docSelect.appendChild(opt);
    });
    docSelect.disabled = false;

    const statusEl = document.getElementById('doc-status');
    if (statusEl) {
        statusEl.style.opacity = '0';
    }
}

// AI-Style Symptom Matcher
function handleSymptomInput(e) {
    const text = e.target.value.toLowerCase();
    currentState.formData.symptoms = text;
    
    if (text.length > 3) {
        const match = medicalData.departments.find(dept => 
            dept.keywords.some(kw => text.includes(kw))
        );
        
        const suggestionEl = document.getElementById('ai-suggestion');
        if (match) {
            const specialtyName = translations[currentState.language].specialties[match.id] || match.name;
            suggestionEl.innerHTML = `✨ Suggested Specialty: <strong>${specialtyName}</strong>`;
            suggestionEl.style.opacity = '1';
        } else {
            suggestionEl.style.opacity = '0';
        }
    }
}

// Date/Time Logic
function setupDatePicker() {
    const dateInput = document.getElementById('appt-date');
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
}

function handleDateChange(e) {
    const selectedDate = e.target.value;
    currentState.formData.date = selectedDate;
    updateTimeSlots(selectedDate);
}

function updateTimeSlots(selectedDate) {
    const timeSelect = document.getElementById('time-select');
    const lang = currentState.language;
    timeSelect.innerHTML = `<option value="" disabled selected>${translations[lang].placeholder_slots}</option>`;
    
    const slots = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'];
    const now = new Date();
    const isToday = selectedDate === now.toISOString().split('T')[0];
    
    slots.forEach(slot => {
        const [hour, min] = slot.split(':');
        if (isToday) {
            const slotTime = new Date();
            slotTime.setHours(hour, min, 0);
            if (slotTime < now) return; // Skip past slots
        }
        
        const opt = document.createElement('option');
        opt.value = slot;
        
        // Local Time Only
        const userTime = new Intl.DateTimeFormat('en-US', {
            hour: '2-digit', minute: '2-digit'
        }).format(new Date(`${selectedDate}T${slot}:00`));
        
        opt.textContent = userTime;
        timeSelect.appendChild(opt);
    });
}

// --- Persistence ---
function saveDraft() {
    localStorage.setItem('cove-draft', JSON.stringify(currentState.formData));
}

function loadDraft() {
    const draft = localStorage.getItem('cove-draft');
    if (draft) {
        currentState.formData = JSON.parse(draft);
        // Pre-fill form fields if needed (omitted for brevity in initial load, but applied to state)
    }
}

// --- Validation ---
function validateStep(step) {
    // Basic validation logic
    if (step === 1) {
        return !!(currentState.formData.fullName && currentState.formData.email);
    }
    if (step === 2) {
        const doc = medicalData.doctors.find(d => d.id === currentState.formData.doctor);
        if (doc && doc.availability === 'low') return false;
        return !!(currentState.formData.department && currentState.formData.doctor);
    }
    if (step === 3) {
        return !!(currentState.formData.date && currentState.formData.timeSlot);
    }
    return true;
}

function calculateCost() {
    const dept = medicalData.departments.find(d => d.id === currentState.formData.department);
    if (!dept) return 0;
    
    let total = dept.basePrice;
    if (currentState.formData.consultType === 'telehealth') {
        total -= 500; // Telehealth discount in Birr
    }
    return total;
}

function validateForm() {
    const submitBtn = document.getElementById('submit-booking');
    if (submitBtn) {
        submitBtn.disabled = !validateStep(1) || !validateStep(2) || !validateStep(3);
    }
}

// --- Final Review & Submission ---
function renderReview() {
    const reviewDiv = document.getElementById('review-summary');
    const d = currentState.formData;
    const lang = currentState.language;
    const t = translations[lang];
    const cost = calculateCost();

    reviewDiv.innerHTML = `
        <div style="text-align: left; display: flex; flex-direction: column; gap: 0.8rem;">
            <div style="border-bottom: 1px solid var(--border-glass); padding-bottom: 0.5rem; margin-bottom: 0.5rem;">
                <p><strong>${t.label_patient}:</strong> ${d.fullName}</p>
                <p><strong>${t.label_contact}:</strong> ${d.email} | ${d.phone}</p>
            </div>
            <div>
                <p><strong>${t.label_provider}:</strong> ${medicalData.doctors.find(dr => dr.id === d.doctor)?.name}</p>
                <p><strong>${t.label_specialty}:</strong> ${t.specialties[d.department] || medicalData.departments.find(dep => dep.id === d.department)?.name}</p>
                <p><strong>${t.label_schedule}:</strong> ${d.date} at ${d.timeSlot}</p>
                <p><strong>${t.label_mode_confirm}:</strong> ${d.consultType === 'telehealth' ? t.mode_telehealth : t.mode_inperson}</p>
            </div>
            <div style="margin-top: 1rem; padding: 1rem; background: rgba(16, 185, 129, 0.05); border-radius: var(--radius-md); border: 1px solid var(--success);">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span style="font-weight: 600;">${t.label_cost}:</span>
                    <span style="font-size: 1.5rem; font-weight: 700; color: var(--success);">${cost}.00 ETB</span>
                </div>
            </div>
            <div style="margin-top: 1.5rem;">
                <label style="display: block; margin-bottom: 0.8rem; font-size: 0.9rem; font-weight: 600; color: var(--text-muted);">${t.label_payment}</label>
                <div class="payment-grid">
                    ${Object.entries(medicalData.paymentDetails).map(([key, detail]) => `
                        <div class="payment-btn ${d.paymentMethod === key ? 'active' : ''}" onclick="selectPayment('${key}')">
                            <img src="${detail.icon}" alt="${detail.name}" class="payment-logo">
                            <span class="payment-label">${detail.name}</span>
                        </div>
                    `).join('')}
                </div>
            </div>

            ${d.paymentMethod ? `
                <div class="payment-details-container">
                    <div class="payment-details-header">
                        <img src="${medicalData.paymentDetails[d.paymentMethod].icon}" alt="logo" style="height: 24px;">
                        <span style="font-weight: 600; font-size: 1.1rem;">${medicalData.paymentDetails[d.paymentMethod].name} Transfer</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Recipient:</span>
                        <span class="detail-value">COVE MEDICAL CENTER</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">${d.paymentMethod === 'paypal' ? 'Email' : d.paymentMethod === 'cash' ? 'Location' : 'Account Number'}:</span>
                        <span class="detail-value" style="color: var(--primary);">${medicalData.paymentDetails[d.paymentMethod].account}</span>
                    </div>
                    <div class="detail-row" style="margin-top: 1rem; border-top: 1px solid var(--border-glass); padding-top: 1rem;">
                        <span class="detail-label" style="font-size: 1rem;">Amount to Pay:</span>
                        <span class="detail-value" style="font-size: 1.2rem; color: var(--success);">${cost}.00 ETB</span>
                    </div>
                    <p style="font-size: 0.75rem; color: var(--text-muted); margin-top: 1rem; text-align: center;">
                        ${d.paymentMethod === 'cash' ? '* Please present your booking ID at the front desk to complete payment.' : '* Please include your Full Name in the transfer reference.'}
                    </p>
                    <button class="btn btn-primary" style="width: 100%; margin-top: 1.5rem; justify-content: center;" onclick="processPayment()">
                        ${d.paymentMethod === 'cash' ? `✅ ${t.success_title}` : `⚡ ${t.btn_book} ${cost}.00 ETB`}
                    </button>
                </div>
            ` : ''}
        </div>
    `;
}

function selectPayment(method) {
    currentState.formData.paymentMethod = method;
    renderReview();
}

async function processPayment() {
    const btn = event.target;
    const originalText = btn.innerHTML;
    btn.innerHTML = '<span class="spinner"></span> Processing Transaction...';
    btn.disabled = true;

    // Simulate bank/payment processing delay
    await new Promise(resolve => setTimeout(resolve, 2500));
    
    // Once "paid", proceed to the final step
    submitForm();
}

async function submitForm() {
    const btn = document.getElementById('submit-booking');
    let originalText = '';
    if (btn) {
        originalText = btn.innerHTML;
        btn.innerHTML = '⚡ Securing Appointment...';
        btn.disabled = true;
    }

    // Local Mock Submission Protocol
    setTimeout(() => {
        const mockData = {
            appointmentId: `COVE-LOCAL-${Math.random().toString(36).substr(2, 6).toUpperCase()}`,
            metadata: {
                encryption: 'Local Mock Encryption',
                blockchainHash: '0xMOCKHASH...',
                predictedRecovery: '95% (Estimated)'
            }
        };
        showSuccess(mockData);
        localStorage.removeItem('cove-draft');
        if (btn) {
            btn.innerHTML = originalText;
            btn.disabled = false;
        }
    }, 1500);
}

function showSuccess(data) {
    const lang = currentState.language;
    const t = translations[lang];
    
    document.getElementById('appt-id-display').textContent = data.appointmentId;
    
    const modalContent = document.getElementById('success-modal').querySelector('.modal-content');
    modalContent.querySelector('h2').textContent = t.success_title;
    modalContent.querySelector('p').textContent = t.success_desc;
    
    const buttons = modalContent.querySelectorAll('.btn');
    buttons[0].textContent = t.btn_download;
    buttons[1].textContent = t.btn_new;

    // Add extra metadata if available
    if (data.metadata) {
        const metaDiv = document.createElement('div');
        metaDiv.style.marginTop = '1rem';
        metaDiv.style.fontSize = '0.75rem';
        metaDiv.style.color = 'var(--text-muted)';
            metaDiv.innerHTML = `
                <p>🔒 ${data.metadata.encryption}</p>
                <p>🔗 ${data.metadata.blockchainHash.substring(0, 20)}...</p>
                <p>📈 Predicted Recovery: <span style="color: var(--success);">${data.metadata.predictedRecovery}</span></p>
                <div style="margin-top: 1rem; padding: 0.8rem; background: rgba(16, 185, 129, 0.1); border-radius: var(--radius-sm); border: 1px solid var(--success);">
                    <p style="font-weight: 700; color: var(--success); margin: 0;">✅ Payment Confirmed via ${medicalData.paymentDetails[currentState.formData.paymentMethod]?.name || 'Bank'}</p>
                    <p style="font-size: 0.7rem; margin-top: 0.2rem;">TXN ID: ${Math.random().toString(36).substr(2, 10).toUpperCase()}</p>
                </div>
            `;
        document.getElementById('success-modal').querySelector('.modal-content').insertBefore(metaDiv, document.getElementById('appt-id-display'));
    }
    
    document.getElementById('success-modal').classList.add('active');
}

// --- Events ---
function setupEventListeners() {
    // Inputs
    document.getElementById('full-name').addEventListener('input', e => {
        currentState.formData.fullName = e.target.value;
        e.target.style.borderColor = 'var(--border-glass)';
    });
    document.getElementById('email').addEventListener('input', e => {
        currentState.formData.email = e.target.value;
        e.target.style.borderColor = 'var(--border-glass)';
    });
    document.getElementById('phone').addEventListener('input', e => {
        currentState.formData.phone = e.target.value;
        e.target.style.borderColor = 'var(--border-glass)';
    });
    document.getElementById('symptoms').addEventListener('input', handleSymptomInput);
    document.getElementById('dept-select').addEventListener('change', onDepartmentChange);
    document.getElementById('doc-select').addEventListener('change', e => {
        currentState.formData.doctor = e.target.value;
        const selectedDoc = medicalData.doctors.find(d => d.id === e.target.value);
        const statusEl = document.getElementById('doc-status');
        if (statusEl && selectedDoc) {
            statusEl.style.opacity = '1';
            
            let statusText = '';
            let statusColor = '';
            if (selectedDoc.availability === 'high') {
                statusText = '✅ <strong>Available:</strong> Can accept appointments now.';
                statusColor = 'var(--success)';
            } else if (selectedDoc.availability === 'med') {
                statusText = '⚠️ <strong>Limited:</strong> Only a few slots left.';
                statusColor = 'orange';
            } else if (selectedDoc.availability === 'low') {
                statusText = '❌ <strong>Fully Booked:</strong> Cannot accept new patients currently.';
                statusColor = 'var(--danger)';
            }
            
            statusEl.innerHTML = `
                <div style="color: ${statusColor}; margin-bottom: 0.5rem;">${statusText}</div>
                <div style="color: var(--text-main); display: flex; gap: 1rem; align-items: center; border-top: 1px solid var(--border-glass); padding-top: 0.5rem; font-weight: normal;">
                    <span style="display: flex; align-items: center; gap: 0.2rem;"><svg width="14" height="14" viewBox="0 0 24 24" fill="#fbbf24" stroke="#fbbf24" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> <strong>${selectedDoc.rating}</strong>/5</span>
                    <span style="display: flex; align-items: center; gap: 0.2rem;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg> <strong>${selectedDoc.experience}</strong> Experience</span>
                </div>
            `;
            statusEl.style.color = '';
        }
        e.target.style.borderColor = 'var(--border-glass)';
        validateForm();
    });
    document.getElementById('appt-date').addEventListener('change', handleDateChange);
    document.getElementById('time-select').addEventListener('change', e => currentState.formData.timeSlot = e.target.value);
    
    // Consultation Toggle
    document.querySelectorAll('.toggle-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentState.formData.consultType = btn.dataset.type;
        });
    });

    setupDatePicker();
}
