let currentLang = 'en';

const langData = {
    'en': {
        'name': 'Yaghmorassen',
        'profession': 'Software Engineer from Algeria',
        'about-title': 'About Me',
        'about-text': 'Passionate and professional in all aspects of computer technology with a degree in engineering from the College of Modern Information and Communication Technologies.',
        'certifications': 'Certified in Office programs.',
        'skills-title': 'Skills',
        'skill-desktop': 'Desktop software development',
        'skill-web': 'Web applications',
        'skill-mobile': 'Mobile applications',
        'skill-uml': 'UML application modeling and design',
        'skill-marketing': 'Digital marketing',
        'skill-hwsw': 'Hardware and software expertise',
        'education-title': 'Education',
        'degree-info': 'License Degree and Master\'s Degree in Information Systems and Web Technologies. unv constantine 2 from the College of Modern Information and Communication Technologies<br>certificate in office programs from the Sigus Training Center..</br>',
        'contact-info': 'Contact me at <a href="mailto:example@example.com">wiixou@gmail.com</a>',

        'nav-about': 'About',
        'nav-skills': 'Skills',
        'nav-education': 'Education',
        'download-cv': 'Download My CV',
        'view-projects': 'My Projects',
        'change-language': 'Change Language',
        'theme-toggle': 'Toggle Theme',
        'skill-multimedia': 'Photo and video editing (Adobe Photoshop, Adobe Premiere)'
    },
    'fr': {
        'name': 'Yaghmorassen',
        'profession': 'Ingénieur Logiciel d\'Algérie',
        'about-title': 'À Propos de Moi',
        'about-text': 'Passionné et professionnel dans tous les aspects de la technologie informatique, diplômé en génie des technologies modernes de l\'information et de la communication.',
        'certifications': 'Certifié dans les programmes Office.',
        'skills-title': 'Compétences',
        'skill-desktop': 'Développement de logiciels de bureau',
        'skill-web': 'Applications Web',
        'skill-mobile': 'Applications mobiles',
        'skill-uml': 'Modélisation et conception d\'applications UML',
        'skill-marketing': 'Marketing numérique',
        'skill-hwsw': 'Expertise en matériel et logiciel',
        'education-title': 'Formation',
        'degree-info': 'Diplôme de Licence et Master en Systèmes d\'Information et Technologies Webunv constantine 2 du Collège des technologies modernes de linformation et de la communication <br>certificat en programmes office du Centre de Formation Sigus.</br>',
        'contact-info': 'Contactez-moi à <a href="mailto:example@example.com">wiixou@gmail.com.com</a>',

        'nav-about': 'À Propos',
        'nav-skills': 'Compétences',
        'nav-education': 'Formation',
        'download-cv': 'Télécharger Mon CV',
        'view-projects': 'Mes Projets',
        'change-language': 'Changer de Langue',
        'theme-toggle': 'Changer le Thème',
        'skill-multimedia': 'Montage photo et vidéo (Adobe Photoshop, Adobe Premiere)'
    },
    'ar': {
        'name': 'يغمراسن',
        'profession': 'مهندس برمجيات من الجزائر',
        'about-title': 'عني',
        'about-text': 'متحمس ومحترف في جميع جوانب تكنولوجيا المعلومات، حاصل على شهادة الهندسة من كلية تكنولوجيا المعلومات والاتصالات الحديثة.',
        'certifications': '.حاصل على شهادات في برامج أوفيس.',
        'skills-title': 'المهارات',
        'skill-desktop': 'تطوير برمجيات سطح المكتب',
        'skill-web': 'تطبيقات الويب',
        'skill-mobile': 'تطبيقات الموبايل',
        'skill-uml': 'نمذجة وتصميم تطبيقات UML',
        'skill-marketing': 'التسويق الرقمي',
        'skill-hwsw': 'الخبرة في الأجهزة والبرمجيات',
        'education-title': 'التعليم',
        'degree-info': '  حاصل على درجة الليسانس والماجستير في نظم المعلومات وتقنيات الويب من جامعة قسنطينة 2 كلية التكنولوجيات الحديثة للمعلومات <br>حاصل على شهادة في برامج الاوفيس "مركز التكوين سيقوس"</br>',
        'contact-info': 'تواصل معي عبر <a href="mailto:example@example.com">wiixou@gmail.com.com</a>',

        'nav-about': 'معلومات عني',
        'nav-skills': 'المهارات',
        'nav-education': 'التعليم',
        'download-cv': 'تحميل السيرة الذاتية',
        'view-projects': 'مشاريعي',
        'change-language': 'تغيير اللغة',
        'theme-toggle': 'تغيير الوضع',
        'skill-multimedia': 'تحرير الصور والفيديو (Adobe Photoshop, Adobe Premiere)'
    },
};

function changeLanguage() {
    currentLang = currentLang === 'en' ? 'fr' : currentLang === 'fr' ? 'ar' : 'en';
    updateTextContent();
    updateDirection();
}

function updateTextContent() {
    Object.keys(langData[currentLang]).forEach(function(key) {
        const element = document.getElementById(key);
        if (element) {
            element.innerHTML = langData[currentLang][key];
        }
    });

    // Update skills descriptions
    const skillKeys = ['skill-desktop', 'skill-web', 'skill-mobile', 'skill-uml', 'skill-marketing', 'skill-hwsw', 'skill-multimedia'];
    skillKeys.forEach(skillKey => {
        const skillElement = document.getElementById(skillKey);
        if (skillElement) {
            skillElement.textContent = langData[currentLang][skillKey];
        }
    });
}

function updateDirection() {
    const body = document.body;
    if (currentLang === 'ar') {
        body.classList.add('lang-ar');
    } else {
        body.classList.remove('lang-ar');
    }
}

document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('footer').classList.toggle('dark-mode');
    document.querySelectorAll('section').forEach(el => el.classList.toggle('dark-mode'));
});

function showDescription(skillKey) {
    const skillDescriptions = {
        'desktop': 'Development of applications that are installed on a desktop operating system like Windows, macOS, or Linux using languages such as C++ and Java.',
        'web': 'Creation of websites and applications that run in a web browser, utilizing technologies like HTML, CSS, and JavaScript.',
        'mobile': 'Building apps for mobile devices using Android Studio and Java, focusing on Android platforms.',
        'uml': 'Using Unified Modeling Language to create diagrams and models that represent the design of software applications.',
        'marketing': 'Using digital tools to promote products and services on the internet, including SEO, content marketing, and social media strategies.',
        'hwsw': 'Expertise in understanding and troubleshooting both hardware devices and software applications.',
        'multimedia': 'Editing and enhancing photos and videos using Adobe Photoshop and Adobe Premiere.'
    };
    document.getElementById('skill-description').innerText = skillDescriptions[skillKey];
}



document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    this.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
});

updateTextContent(); // Initialize page with default language
updateDirection(); // Initialize direction based on default language