const translations = {
    en: {
        about: "About",
        subscription: "Subscription",
        gallery: "Gallery",
        sportClub: "Sport club",
        sphinx: "Sphinx",
        headerInfo: "Our unique sport club guarantees comfort for your training. Sphinx has professional coaches who can teach you MMA, Pankration, Grappling.",
        buySubscription: "Buy a subscription",
        requestCall: "Request a call",
        ourAdvantages: "Our advantages",
        qualifiedCoaches: "[ Qualified coaches ]",
        qualifiedCoachesInfo: "Qualified gym coaches possess expertise in fitness training, offer personalized guidance, ensure safety, motivate clients, track progress, adapt programs, and provide ongoing support and encouragement.",
        varietyOfChoices: "[ Variety of choices ]",
        varietyOfChoicesInfo: "Gyms offer a variety of choices, including cardio machines, free weights, group classes, and specialized equipment, catering to diverse fitness preferences and goals.",
        cozyAtmosphere: "[ Cozy atmosphere ]",
        cozyAtmosphereInfo: "A cozy gym atmosphere fosters a welcoming environment for exercise. Soft lighting, vibrant decor, and motivating music promote relaxation and focus. Comfortable seating and friendly staff create a sense of community. Well-ventilated spaces and cleanliness enhance satisfaction, encouraging consistency and motivation to achieve fitness goals effectively.",
        bestEquipment: "[ The best equipment ]",
        bestEquipmentInfo: "Top gym equipment: versatile, durable, caters to various needs. Includes cardio machines, functional tools, muscle development gear. Essential for diverse, effective workouts.",
        minutesOfTraining: "Minutes of training",
        clubMembers: "Club members",
        highLevelCoaches: "High-level coaches",
        differentAgeGroups: "Different age groups",
        subscriptions: "Subscriptions",
        starting: "Starting",
        advanced: "Advanced",
        threeWorkouts: "Three workouts per week",
        sixWorkouts: "Six workouts per week in the martial arts gym",
        initialGroup: "Initial Training Group of Athletes",
        certifiedTrainers: "Accompaniment of certified trainers",
        individualProgram: "Individual program for nutrition, functional and strength work",
        consultation: "Consultation with a nutritionist and psychologist",
        groupLesson: "Group lesson with your peers",
        entranceTime: "Entrance to the hall at the convenient time",
        planPrice23: "23 $",
        planPrice27: "27 $",
        gallery: "Gallery",
        getBetter: "Get better every day - train with us",
        fillForm: "Fill out the form for further communication regarding the selection of a suitable staff.",
        contacts: "Contacts",
        address: "Address",
        ruskaStreet: "Ruska Street, 228A, Chernivtsi, Chernivtsi region, 58000 UA",
        workingHours: "Working hours",
        workingHoursTime: "Mon - Sat 6hrs",
        email: "sphinxteam@gmail.com",
        phone: "+380 95 444 95 93"
    },
    uk: {
        about: "Про нас",
        subscription: "Абонемент",
        gallery: "Галерея",
        sportClub: "Спортивний клуб",
        sphinx: "Сфінкс",
        headerInfo: "Наш унікальний спортивний клуб гарантує комфорт для ваших тренувань. Сфінкс має професійних тренерів, які можуть навчити вас ММА, Панкраціону, Греплінгу.",
        buySubscription: "Придбати абонемент",
        requestCall: "Замовити дзвінок",
        ourAdvantages: "Наші переваги",
        qualifiedCoaches: "[ Кваліфіковані тренери ]",
        qualifiedCoachesInfo: "Кваліфіковані тренери мають досвід у фітнес-тренуваннях, пропонують індивідуальні рекомендації, забезпечують безпеку, мотивують клієнтів, відстежують прогрес, адаптують програми та надають постійну підтримку та заохочення.",
        varietyOfChoices: "[ Різноманітність вибору ]",
        varietyOfChoicesInfo: "Спортзали пропонують різноманітний вибір, включаючи кардіо-тренажери, вільні ваги, групові заняття та спеціалізоване обладнання, що задовольняє різні фітнес-преференції та цілі.",
        cozyAtmosphere: "[ Затишна атмосфера ]",
        cozyAtmosphereInfo: "Затишна атмосфера спортзалу створює приємне середовище для тренувань. М'яке освітлення, яскравий декор та мотивуюча музика сприяють розслабленню та концентрації. Зручні місця для сидіння та привітний персонал створюють відчуття спільноти. Добре вентильовані приміщення та чистота підвищують задоволення, сприяючи послідовності та мотивації до досягнення фітнес-цілей.",
        bestEquipment: "[ Найкраще обладнання ]",
        bestEquipmentInfo: "Найкраще обладнання для тренажерного залу: універсальне, довговічне, відповідає різним потребам. Включає кардіо-тренажери, функціональні інструменти, обладнання для розвитку м'язів. Необхідне для різноманітних та ефективних тренувань.",
        minutesOfTraining: "Хвилини тренувань",
        clubMembers: "Члени клубу",
        highLevelCoaches: "Висококваліфіковані тренери",
        differentAgeGroups: "Різні вікові групи",
        subscriptions: "Абонементи",
        starting: "Стартовий",
        advanced: "Розширений",
        threeWorkouts: "Три тренування на тиждень",
        sixWorkouts: "Шість тренувань на тиждень у залі бойових мистецтв",
        initialGroup: "Початкова група атлетів",
        certifiedTrainers: "Супровід сертифікованих тренерів",
        individualProgram: "Індивідуальна програма харчування, функціональної та силової роботи",
        consultation: "Консультація з дієтологом та психологом",
        groupLesson: "Групове заняття з вашими однолітками",
        entranceTime: "Вхід до зали у зручний час",
        planPrice23: "23 $",
        planPrice27: "27 $",
        gallery: "Галерея",
        getBetter: "Ставайте кращими кожен день - тренуйтеся з нами",
        fillForm: "Заповніть форму для подальшого зв'язку щодо підбору відповідного персоналу.",
        contacts: "Контакти",
        address: "Адреса",
        ruskaStreet: "вул. Руська, 228А, Чернівці, Чернівецька область, 58000 UA",
        workingHours: "Години роботи",
        workingHoursTime: "Пн - Сб 6 годин",
        email: "sphinxteam@gmail.com",
        phone: "+380 95 444 95 93"
    }
};

const elementsToTranslate = {
    about: document.querySelectorAll(".header-href a")[0],
    subscription: document.querySelectorAll(".header-href a")[1],
    gallery: document.querySelectorAll(".header-href a")[2],
    sportClub: document.querySelector(".Sport-club"),
    sphinx: document.querySelector(".Sphinx-text"),
    headerInfo: document.querySelector(".header-info"),
    buySubscription: document.querySelectorAll(".buy-subscription")[0],
    requestCall: document.querySelectorAll(".request-call")[0],
    ourAdvantages: document.querySelector(".Our-advantages"),
    qualifiedCoaches: document.querySelectorAll(".text-card1 h3")[0],
    qualifiedCoachesInfo: document.querySelectorAll(".text-card1 p")[0],
    varietyOfChoices: document.querySelectorAll(".text-card2 h3")[0],
    varietyOfChoicesInfo: document.querySelectorAll(".text-card2 p")[0],
    cozyAtmosphere: document.querySelectorAll(".text-card4 h3")[0],
    cozyAtmosphereInfo: document.querySelectorAll(".text-card4 p")[0],
    bestEquipment: document.querySelectorAll(".text-card3 h3")[0],
    bestEquipmentInfo: document.querySelectorAll(".text-card3 p")[0],
    minutesOfTraining: document.querySelectorAll(".stat p")[0],
    clubMembers: document.querySelectorAll(".stat p")[1],
    highLevelCoaches: document.querySelectorAll(".stat p")[2],
    differentAgeGroups: document.querySelectorAll(".stat p")[3],
    subscriptions: document.querySelectorAll(".subscription-h1")[0],
    starting: document.querySelectorAll(".plan h3")[0],
    advanced: document.querySelectorAll(".plan h3")[1],
    threeWorkouts: document.querySelectorAll(".plan ul li")[0],
    sixWorkouts: document.querySelectorAll(".plan ul li")[4],
    initialGroup: document.querySelectorAll(".plan ul li")[1],
    certifiedTrainers: document.querySelectorAll(".plan ul li")[2],
    individualProgram: document.querySelectorAll(".plan ul li")[6],
    consultation: document.querySelectorAll(".plan ul li")[7],
    groupLesson: document.querySelectorAll(".plan ul li")[3],
    entranceTime: document.querySelectorAll(".plan ul li")[4],
    planPrice23: document.querySelectorAll(".plan-price")[0],
    planPrice27: document.querySelectorAll(".plan-price")[1],
    gallery: document.querySelectorAll("h1")[7],
    getBetter: document.querySelector(".left-section h1"),
    fillForm: document.querySelector(".form-description p"),
    contacts: document.querySelector("footer h1"),
    address: document.querySelector(".Adress p"),
    ruskaStreet: document.querySelectorAll(".Adress p")[1],
    workingHours: document.querySelectorAll(".Working-hours p")[0],
    workingHoursTime: document.querySelectorAll(".Working-hours p")[1],
    email: document.querySelector(".contact-info a"),
    phone: document.querySelector(".contact-info a")[1]
};

let currentLanguage = 'en';

const changeLanguage = () => {
    currentLanguage = currentLanguage === 'en' ? 'uk' : 'en';
    Object.keys(elementsToTranslate).forEach((key) => {
        if (elementsToTranslate[key]) {
            elementsToTranslate[key].textContent = translations[currentLanguage][key];
        }
    });
};

// Attach event listener to the language switch button
document.querySelector(".translate-bnt").addEventListener("click", (e) => {
    e.preventDefault();
    changeLanguage();
});





let a = 4
let b = 7
let c = 9
let v = 5