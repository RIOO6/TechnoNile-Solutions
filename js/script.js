/*
  TECHNONILE SITE SETTINGS — EDIT THESE VALUES BEFORE PUBLISHING.
  Keep the WhatsApp number in international format with digits only:
  Example format: 2499XXXXXXXX (no +, spaces or dashes).
  Leave a value as an empty string if you do not have it yet.
*/
const SITE_CONFIG = {
  whatsapp: "+249904126930", // EDIT: Your business WhatsApp number, e.g. "2499XXXXXXXX"
  email: "reyadry999@gmail.com",     // EDIT: Your business email, e.g. "hello@yourdomain.com"
  phone: "249904126930",     // EDIT: Optional public phone number, e.g. "+249 ..."
  location: "Khartoum, Sudan" // EDIT: Change if your service area is different
};

const translations = {
  en: {
    navServices:"Services",navTeams:"Our teams",navWork:"Our work",navAbout:"About",navContact:"Let’s talk",
    eyebrow:"YOUR TECHNOLOGY PARTNER",heroTitle:"Build smarter.<br><em>Connect better.</em><br>Move forward.",
    heroLead:"From powerful websites to dependable network infrastructure, we bring the people and technical expertise together to make your next step possible.",
    heroCta:"Start a project",heroExplore:"Explore what we do",heroProof:"Two specialized teams. One reliable partner.",
    coreLabel:"CONNECTED CAPABILITIES",coreSub:"DIGITAL × INFRASTRUCTURE",tagWeb:"Web systems",tagWebSmall:"Designed to perform",tagNetwork:"Network infrastructure",tagNetworkSmall:"Built to connect",
    heroBottom:"WEB DEVELOPMENT&nbsp;&nbsp; / &nbsp;&nbsp;DIGITAL SYSTEMS&nbsp;&nbsp; / &nbsp;&nbsp;NETWORK INFRASTRUCTURE",
    stripLabel:"THE TECHNONILE APPROACH",stripText:"Technology works best when <strong>every part works together.</strong>",
    servicesEyebrow:"WHAT WE DO",servicesTitle:"Practical expertise.<br><em>Connected solutions.</em>",servicesIntro:"We combine software development and technical infrastructure to help organizations operate, communicate and grow with confidence.",
    serviceWeb:"Web development",serviceWebDesc:"Purpose-built websites and web applications that make your organization easier to find, use and work with.",
    webItem1:"Business & organization websites",webItem2:"Custom web applications",webItem3:"Registration & management systems",webItem4:"Databases, dashboards & integrations",
    serviceNetwork:"Network infrastructure",serviceNetworkDesc:"Professional network planning, installation and configuration delivered by our specialized networking team.",
    netItem1:"LAN design & installation",netItem2:"Routers, switches & access points",netItem3:"Structured cabling & connectivity",netItem4:"Network troubleshooting & optimization",
    serviceSystems:"Digital systems",serviceSystemsDesc:"Turn repetitive processes and scattered information into organized digital workflows.",
    sysItem1:"Data & record management",sysItem2:"Admin panels & reporting",sysItem3:"Online forms & registrations",sysItem4:"Workflow digitization",
    serviceSupport:"IT support & services",serviceSupportDesc:"Practical assistance to keep your digital tools and workplace technology working reliably.",
    supItem1:"Technical troubleshooting",supItem2:"Hardware & software support",supItem3:"Setup, deployment & maintenance",supItem4:"Technology consulting",
    teamEyebrow:"SPECIALIZED PEOPLE",teamTitle:"Different disciplines.<br><em>One coordinated team.</em>",teamIntro:"Our model brings dedicated specialists together under one point of contact, so each part of your project is handled by people focused on that discipline.",
    teamWebLabel:"SPECIALIZED TEAM 01",teamWeb:"Web development team",teamWebDesc:"Developers focused on responsive interfaces, backend logic, databases and tailored digital products.",
    teamNetLabel:"SPECIALIZED TEAM 02",teamNet:"Network infrastructure team",teamNetDesc:"Networking specialists focused on planning, physical installation, device configuration and reliable connectivity.",
    discussTeam:"Discuss a web project",discussNetwork:"Discuss a network project",teamNote:"<strong>One conversation. The right expertise.</strong> We coordinate the work, connect you with the right specialists and keep the project moving.",
    workEyebrow:"SELECTED CAPABILITIES",workTitle:"From idea to<br><em>working solution.</em>",workIntro:"A glimpse of the types of digital products and technical work we can deliver. Replace these examples with approved client projects as your portfolio grows.",
    workType1:"DIGITAL PLATFORMS",workTitle1:"Registration & management systems",workDesc1:"Structured data capture, administration and reporting in one connected application.",
    workType2:"WEB EXPERIENCES",workTitle2:"Business & organization websites",workDesc2:"Responsive websites that communicate clearly and build credibility.",
    workType3:"IT INFRASTRUCTURE",workTitle3:"Office network deployments",workDesc3:"Planned connectivity, structured cabling and configured network equipment.",
    portfolioNote:"Illustrative capability previews — add real project screenshots and case studies before presenting these as completed client work.",
    processEyebrow:"HOW WE WORK",processTitle:"Clear process.<br><em>Solid delivery.</em>",processIntro:"Good technology starts with understanding the problem. We keep the process clear from the first conversation to handover.",processCta:"Tell us what you need",
    step1Title:"Understand",step1Desc:"We listen, ask the right questions and define the actual need.",step2Title:"Plan",step2Desc:"We identify the scope, specialists, resources and practical approach.",step3Title:"Build & implement",step3Desc:"The relevant team carries out the work with clear communication.",step4Title:"Handover & support",step4Desc:"We review the result, hand it over and discuss ongoing support.",
    contactEyebrow:"LET’S MAKE IT HAPPEN",contactTitle:"Have a project<br>in mind<span>?</span>",contactIntro:"Tell us what you are trying to build, connect or improve. We’ll help you identify the next step.",
    contactDirectLabel:"DIRECT CONTACT",contactDirect:"Let’s talk about your requirements",formName:"Your name",formEmail:"Email or phone",formService:"What do you need?",formMessage:"Project details",
    formSubmit:"Prepare inquiry",formHint:"This form prepares a message using your email app or WhatsApp once contact details are configured.",
    footerLine:"Technology that moves business forward.",footerLocation:"KHARTOUM · SUDAN",backTop:"BACK TO TOP ↑"
  },
  ar: {
    navServices:"خدماتنا",navTeams:"فرق العمل",navWork:"أعمالنا",navAbout:"منهجيتنا",navContact:"تواصل معنا",
    eyebrow:"شريكك التقني",heroTitle:"نبني بذكاء.<br><em>نربط بكفاءة.</em><br>ونمضي للأمام.",
    heroLead:"من المواقع الإلكترونية المتطورة إلى البنية التحتية الموثوقة للشبكات، نجمع الخبرات الفنية المتخصصة لنساعد أعمالك على اتخاذ خطوتها التالية.",
    heroCta:"ابدأ مشروعك",heroExplore:"اكتشف خدماتنا",heroProof:"فريقان متخصصان. شريك واحد موثوق.",
    coreLabel:"قدرات تقنية متكاملة",coreSub:"حلول رقمية × بنية تحتية",tagWeb:"الأنظمة والمواقع",tagWebSmall:"مصممة لتؤدي بكفاءة",tagNetwork:"البنية التحتية للشبكات",tagNetworkSmall:"اتصال يعتمد عليه",
    heroBottom:"تطوير المواقع&nbsp;&nbsp; / &nbsp;&nbsp;الأنظمة الرقمية&nbsp;&nbsp; / &nbsp;&nbsp;بنية الشبكات",
    stripLabel:"منهجية تكنو نايل",stripText:"تعمل التقنية بأفضل صورة عندما <strong>تتكامل جميع أجزائها.</strong>",
    servicesEyebrow:"ماذا نقدم",servicesTitle:"خبرة عملية.<br><em>حلول مترابطة.</em>",servicesIntro:"نجمع بين تطوير البرمجيات والبنية التحتية التقنية لمساعدة المؤسسات على العمل والتواصل والنمو بثقة.",
    serviceWeb:"تطوير المواقع والويب",serviceWebDesc:"مواقع وتطبيقات ويب مصممة لتسهيل وصول العملاء إلى مؤسستك والتفاعل معها.",
    webItem1:"مواقع الشركات والمؤسسات",webItem2:"تطبيقات ويب مخصصة",webItem3:"أنظمة التسجيل والإدارة",webItem4:"قواعد البيانات ولوحات التحكم والربط",
    serviceNetwork:"البنية التحتية للشبكات",serviceNetworkDesc:"تخطيط وتركيب وتهيئة الشبكات باحترافية من خلال فريقنا المتخصص في الشبكات.",
    netItem1:"تصميم وتركيب الشبكات المحلية",netItem2:"أجهزة التوجيه والمحولات ونقاط الوصول",netItem3:"تمديد الكابلات وتجهيز الاتصال",netItem4:"معالجة أعطال الشبكات وتحسينها",
    serviceSystems:"الأنظمة الرقمية",serviceSystemsDesc:"تحويل الإجراءات المتكررة والمعلومات المتفرقة إلى مسارات عمل رقمية منظمة.",
    sysItem1:"إدارة البيانات والسجلات",sysItem2:"لوحات الإدارة والتقارير",sysItem3:"النماذج والتسجيل الإلكتروني",sysItem4:"رقمنة إجراءات العمل",
    serviceSupport:"خدمات ودعم تقنية المعلومات",serviceSupportDesc:"مساعدة عملية لضمان عمل أدواتك الرقمية وتقنيات مكان العمل بصورة موثوقة.",
    supItem1:"تشخيص المشكلات التقنية",supItem2:"دعم الأجهزة والبرمجيات",supItem3:"الإعداد والتشغيل والصيانة",supItem4:"الاستشارات التقنية",
    teamEyebrow:"خبرات متخصصة",teamTitle:"تخصصات مختلفة.<br><em>فريق واحد متكامل.</em>",teamIntro:"نجمع المختصين في فرق واضحة ضمن نقطة تواصل واحدة، ليُنفذ كل جزء من مشروعك بواسطة أشخاص يركزون على مجالهم.",
    teamWebLabel:"الفريق المتخصص 01",teamWeb:"فريق تطوير المواقع",teamWebDesc:"مطورون متخصصون في واجهات المواقع، والبرمجة الخلفية، وقواعد البيانات، والمنتجات الرقمية المصممة حسب الحاجة.",
    teamNetLabel:"الفريق المتخصص 02",teamNet:"فريق البنية التحتية للشبكات",teamNetDesc:"مختصون في تخطيط الشبكات وتركيبها ميدانياً وتهيئة أجهزتها وتوفير اتصال مستقر.",
    discussTeam:"ناقش مشروع موقع إلكتروني",discussNetwork:"ناقش مشروع شبكة",teamNote:"<strong>تواصل واحد. الخبرة المناسبة.</strong> ننسق العمل ونربطك بالمختصين المناسبين ونتابع تقدم المشروع.",
    workEyebrow:"نماذج من قدراتنا",workTitle:"من الفكرة إلى<br><em>حل يعمل فعلياً.</em>",workIntro:"لمحة عن أنواع المنتجات الرقمية والأعمال التقنية التي يمكننا تنفيذها. استبدل هذه النماذج بمشاريع عملاء موثقة ومعتمدة مع نمو معرض أعمالك.",
    workType1:"منصات رقمية",workTitle1:"أنظمة التسجيل والإدارة",workDesc1:"جمع منظم للبيانات وإدارتها وإعداد التقارير من خلال تطبيق واحد مترابط.",
    workType2:"تجارب الويب",workTitle2:"مواقع الشركات والمؤسسات",workDesc2:"مواقع متجاوبة تعرض المعلومات بوضوح وتعزز المصداقية.",
    workType3:"البنية التحتية",workTitle3:"تجهيز شبكات المكاتب",workDesc3:"تخطيط الاتصال وتمديد الكابلات وتهيئة معدات الشبكة.",
    portfolioNote:"هذه نماذج توضيحية للقدرات — أضف صور مشاريع حقيقية ودراسات حالة قبل عرضها كأعمال منفذة لعملاء.",
    processEyebrow:"كيف نعمل",processTitle:"خطوات واضحة.<br><em>تنفيذ متقن.</em>",processIntro:"تبدأ التقنية الناجحة بفهم المشكلة. نحافظ على وضوح خطوات العمل من أول تواصل وحتى التسليم.",processCta:"أخبرنا بما تحتاج",
    step1Title:"نفهم احتياجك",step1Desc:"نستمع إليك ونطرح الأسئلة المناسبة لتحديد الاحتياج الفعلي.",step2Title:"نخطط",step2Desc:"نحدد نطاق العمل والمختصين والموارد والطريقة العملية للتنفيذ.",step3Title:"ننفذ",step3Desc:"يتولى الفريق المختص تنفيذ العمل مع إبقائك على اطلاع بالتقدم.",step4Title:"نسلم وندعم",step4Desc:"نراجع النتيجة ونسلم المشروع ونناقش الدعم المستمر عند الحاجة.",
    contactEyebrow:"لنبدأ العمل",contactTitle:"هل لديك مشروع<br>في ذهنك<span>؟</span>",contactIntro:"أخبرنا بما تريد بناءه أو ربطه أو تطويره، وسنساعدك في تحديد الخطوة التالية.",
    contactDirectLabel:"تواصل مباشر",contactDirect:"لنتحدث عن متطلبات مشروعك",formName:"الاسم",formEmail:"البريد الإلكتروني أو الهاتف",formService:"ما الخدمة التي تحتاجها؟",formMessage:"تفاصيل المشروع",
    formSubmit:"جهّز رسالة الاستفسار",formHint:"بعد إضافة بيانات التواصل، سيجهز النموذج رسالة عبر تطبيق البريد أو واتساب.",
    footerLine:"حلول تقنية تدفع أعمالك نحو المستقبل.",footerLocation:"الخرطوم · السودان",backTop:"العودة للأعلى ↑"
  }
};

let currentLang = "en";
const langToggle = document.getElementById("langToggle");
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

function setLanguage(lang) {
  currentLang = lang;
  const isArabic = lang === "ar";
  document.documentElement.lang = lang;
  document.documentElement.dir = isArabic ? "rtl" : "ltr";
  document.body.dir = isArabic ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key] !== undefined) el.textContent = translations[lang][key];
  });
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const key = el.dataset.i18nHtml;
    if (translations[lang][key] !== undefined) el.innerHTML = translations[lang][key];
  });
  langToggle.textContent = isArabic ? "EN" : "عربي";
  langToggle.setAttribute("aria-label", isArabic ? "Switch to English" : "التبديل إلى العربية");
  document.getElementById("name").placeholder = isArabic ? "الاسم" : "Name";
  document.getElementById("reply").placeholder = isArabic ? "كيف يمكننا التواصل معك؟" : "How can we reach you?";
  document.getElementById("message").placeholder = isArabic ? "اكتب نبذة قصيرة عن مشروعك..." : "A short description of your project...";
  document.title = isArabic ? "تكنو نايل للحلول التقنية | حلول تقنية تدفع أعمالك للأمام" : "TechnoNile Solutions | Technology that moves business forward";
  document.querySelectorAll(".contact-form select option").forEach((option, index) => {
    const arOptions = ["تطوير المواقع والويب","البنية التحتية للشبكات","الأنظمة الرقمية","دعم تقنية المعلومات","أخرى / لست متأكداً"];
    const enOptions = ["Web development","Network infrastructure","Digital systems","IT support","Other / Not sure"];
    option.textContent = isArabic ? arOptions[index] : enOptions[index];
  });
}
langToggle.addEventListener("click", () => setLanguage(currentLang === "en" ? "ar" : "en"));
menuToggle.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});
mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  mainNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));
document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("contactForm").addEventListener("submit", event => {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const reply = document.getElementById("reply").value.trim();
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value.trim();
  const subject = encodeURIComponent("TechnoNile project inquiry — " + service);
  const body = encodeURIComponent(`Name: ${name}\nContact: ${reply}\nService: ${service}\n\nProject details:\n${message || "Not provided"}`);
  const whatsappText = encodeURIComponent(`Hello TechnoNile Solutions,\n\nName: ${name}\nMy contact: ${reply}\nService: ${service}\n\nProject details:\n${message || "Not provided"}`);
  if (SITE_CONFIG.whatsapp.trim()) {
    window.open(`https://wa.me/${SITE_CONFIG.whatsapp.trim()}?text=${whatsappText}`, "_blank", "noopener");
  } else if (SITE_CONFIG.email.trim()) {
    window.location.href = `mailto:${SITE_CONFIG.email.trim()}?subject=${subject}&body=${body}`;
  } else {
    const hint = document.getElementById("formHint");
    hint.textContent = currentLang === "ar"
      ? "يرجى إضافة رقم واتساب أو بريد إلكتروني في أعلى ملف js/script.js لتفعيل إرسال الاستفسارات."
      : "Add your WhatsApp number or email at the top of js/script.js to activate inquiry delivery.";
    hint.classList.add("config-warning");
    hint.scrollIntoView({behavior:"smooth",block:"nearest"});
  }
});
