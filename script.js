// ===== LANGUAGE SELECTOR SCRIPT =====
function toggleLangMenu() {
  const menu = document.querySelector('.lang-options');
  menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}

// ===== TRANSLATIONS =====
  const translations = {
    en: {
      hero_title: "Welcome to RechargeStatut.com",
      hero_text: "Quickly verify the authenticity of your prepaid codes or cards. Our system tells you instantly if a code has already been used.",
      hero_link: "Discover our offers",
      faq1: "What is a recharge or prepaid ticket?",
      faq1r: "It’s a prepaid code used as a payment method. No bank account needed. Great for secure online purchases.",
      faq2: "How does ticket verification work?",
      faq2r: "Enter your code in the field provided. The system checks if it’s been used. You’ll receive an email in seconds.",
      faq3: "Which types of tickets can I check here?",
      faq3r: "You can check Transcash, PCS, Neosurf, etc. Gift cards like Google Play or Amazon are also supported.",
      faq4: "How do I receive a confirmation email?",
      faq4r: "Provide a valid email during verification. You'll get a message with your ticket status.",
      footer_galerie: "Gallery",
      footer_faq: "FAQ",
      footer_contact: "Contact",
      footer_copyright: "© 2025 RechargeStatut.com All rights reserved."
    },
    fr: {
      // Pas nécessaire ici, déjà contenu dans ton HTML
    },
    es: {
      hero_title: "Bienvenido a RechargeStatut.com",
      hero_text: "Verifica rápidamente la autenticidad de tus códigos o tarjetas. Nuestro sistema te dice si el código ya fue usado.",
      hero_link: "Descubre nuestras ofertas",
      faq1: "¿Qué es un ticket de recarga o prepago?",
      faq1r: "Es un código prepago que se utiliza como forma de pago. Funciona sin cuenta bancaria. Ideal para compras seguras en línea.",
      faq2: "¿Cómo funciona la verificación de tickets?",
      faq2r: "Ingresa tu código. El sistema verifica si ya fue usado. Recibirás un correo en segundos.",
      faq3: "¿Qué tipos de tickets puedo verificar?",
      faq3r: "Puedes verificar Transcash, PCS, Neosurf, etc. También tarjetas regalo como Google Play o Amazon.",
      faq4: "¿Cómo recibir un correo de confirmación?",
      faq4r: "Proporciona un correo válido durante la verificación. Recibirás el estado de tu ticket.",
      footer_galerie: "Galería",
      footer_faq: "Preguntas frecuentes",
      footer_contact: "Contacto",
      footer_copyright: "© 2025 RechargeStatut.com Todos los derechos reservados."
    },
    de: {
      hero_title: "Willkommen bei RechargeStatut.com",
      hero_text: "Überprüfen Sie schnell die Echtheit Ihrer Prepaid-Codes oder Karten. Unser System zeigt sofort, ob ein Code verwendet wurde.",
      hero_link: "Unsere Angebote entdecken",
      faq1: "Was ist ein Auflade- oder Prepaid-Ticket?",
      faq1r: "Es ist ein Prepaid-Code als Zahlungsmittel. Kein Bankkonto nötig. Sicher für Online-Einkäufe.",
      faq2: "Wie funktioniert die Ticketüberprüfung?",
      faq2r: "Geben Sie Ihren Code ein. Das System prüft, ob er verwendet wurde. Sie erhalten eine E-Mail.",
      faq3: "Welche Ticketarten kann ich überprüfen?",
      faq3r: "Transcash, PCS, Neosurf und Geschenkkarten wie Google Play oder Amazon werden unterstützt.",
      faq4: "Wie erhalte ich eine Bestätigung per E-Mail?",
      faq4r: "Geben Sie eine gültige E-Mail-Adresse ein. Sie erhalten den Status Ihres Tickets per E-Mail.",
      footer_galerie: "Galerie",
      footer_faq: "FAQ",
      footer_contact: "Kontakt",
      footer_copyright: "© 2025 RechargeStatut.com Alle Rechte vorbehalten."
    },
    it: {
      hero_title: "Benvenuto su RechargeStatut.com",
      hero_text: "Verifica rapidamente l’autenticità dei tuoi codici o carte prepagate. Il nostro sistema ti informa subito se sono già stati usati.",
      hero_link: "Scopri le nostre offerte",
      faq1: "Cos'è un ticket di ricarica o prepagato?",
      faq1r: "È un codice prepagato usato come metodo di pagamento. Non serve un conto bancario. Ottimo per acquisti sicuri online.",
      faq2: "Come funziona la verifica del ticket?",
      faq2r: "Inserisci il tuo codice. Il sistema verifica se è già stato usato. Riceverai una mail.",
      faq3: "Quali ticket posso verificare?",
      faq3r: "Transcash, PCS, Neosurf e carte regalo come Google Play o Amazon.",
      faq4: "Come ricevere una mail di conferma?",
      faq4r: "Inserisci una mail valida. Ti arriverà un messaggio con lo stato del tuo ticket.",
      footer_galerie: "Galleria",
      footer_faq: "FAQ",
      footer_contact: "Contatto",
      footer_copyright: "© 2025 RechargeStatut.com Tutti i diritti riservati."
    },
    pt: {
      hero_title: "Bem-vindo ao RechargeStatut.com",
      hero_text: "Verifique rapidamente a autenticidade dos seus cartões ou códigos pré-pagos. O sistema informa se o código já foi usado.",
      hero_link: "Descubra nossas ofertas",
      faq1: "O que é um bilhete de recarga ou pré-pago?",
      faq1r: "É um código pré-pago como forma de pagamento. Não precisa de conta bancária. Ótimo para compras online seguras.",
      faq2: "Como funciona a verificação do bilhete?",
      faq2r: "Digite seu código. O sistema verifica se já foi usado. Você receberá um email.",
      faq3: "Quais tipos de bilhetes posso verificar?",
      faq3r: "Transcash, PCS, Neosurf, e cartões como Google Play ou Amazon.",
      faq4: "Como receber um email de confirmação?",
      faq4r: "Forneça um email válido. Você receberá o status do seu bilhete.",
      footer_galerie: "Galeria",
      footer_faq: "FAQ",
      footer_contact: "Contato",
      footer_copyright: "© 2025 RechargeStatut.com Todos os direitos reservados."
    }
  };// ====== DÉCLENCHEMENT AUTOMATIQUE À L’ARRIVÉE ======
  document.addEventListener('DOMContentLoaded', () => {
    let lang = localStorage.getItem('lang');
    if (!lang) {
      const browserLang = navigator.language.slice(0, 2);
      const supportedLangs = ['fr', 'en', 'es', 'de', 'it', 'pt'];
      lang = supportedLangs.includes(browserLang) ? browserLang : 'fr';
      localStorage.setItem('lang', lang);
    }
    applyTranslations(lang);
    updateSelectedLangDisplay(lang);
  });
  
  // ====== FONCTIONS ======
  
  function toggleLangMenu() {
    const menu = document.querySelector('.lang-options');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  }
  
  function setLang(lang) {
    localStorage.setItem('lang', lang);
    applyTranslations(lang);
    updateSelectedLangDisplay(lang);
    document.querySelector('.lang-options').style.display = 'none';
  }
  
  function applyTranslations(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
  }
  
  function updateSelectedLangDisplay(lang) {
    const selectedLangEl = document.querySelector('.selected-lang');
    const flags = {
      en: 'gb', fr: 'fr', es: 'es', de: 'de', it: 'it', pt: 'pt'
    };
    const names = {
      en: 'English', fr: 'Français', es: 'Español',
      de: 'Deutsch', it: 'Italiano', pt: 'Português'
    };
    selectedLangEl.innerHTML = `
      <img src="https://flagcdn.com/w20/${flags[lang]}.png" alt="${lang}">
      <span class="ms-2">${names[lang]}</span>
    `;
  }