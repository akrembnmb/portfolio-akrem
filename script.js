function switchLanguage(lang) {
    const texts = {
      en: {
        header_name: "Akrem Benmbarek",
        header_title: "Data Scientist & AI Engineer",
        header_phone: "+216 94479574 | Tunis, Tunisie",
        nav_about: "About Me",
        nav_experience: "Experience",
        nav_education: "Education",
        nav_contact: "Contact",
        about_title: "About Me",
        about_description: "I'm a Data Scientist specializing in machine learning, AI solutions, and data-driven decision making.",
        experience_title: "Experience",
        experience_data: [
          "Value Digital Services — Data Scientist, IA Fintech (Sept 2024 – Present)",
          "Welyne — Ingénieur IA, Agent Virtuel (Juin 2023 – Août 2023)",
          "Limagrain — Stagiaire Vision par ordinateur (Févr 2023 – Mai 2023)"
        ],
        education_title: "Education",
        education_data: [
          "École Nationale des Sciences de l'Informatique — Computer Science (2021 – 2024)",
          "Institut Préparatoire aux Études d'Ingénieurs — Preparatory Classes (2019 – 2021)"
        ],
        contact_title: "Contact",
        contact_button: "Send"
      },
      fr: {
        header_name: "Akrem Benmbarek",
        header_title: "Data Scientist & Ingénieur IA",
        header_phone: "+216 94479574 | Tunis, Tunisie",
        nav_about: "À propos de moi",
        nav_experience: "Expérience",
        nav_education: "Éducation",
        nav_contact: "Contact",
        about_title: "À propos de moi",
        about_description: "Je suis un Data Scientist spécialisé dans l'apprentissage automatique, les solutions IA et la prise de décision basée sur les données.",
        experience_title: "Expérience",
        experience_data: [
          "Value Digital Services — Data Scientist, IA Fintech (Sept 2024 – Présent)",
          "Welyne — Ingénieur IA, Agent Virtuel (Juin 2023 – Août 2023)",
          "Limagrain — Stagiaire Vision par ordinateur (Févr 2023 – Mai 2023)"
        ],
        education_title: "Éducation",
        education_data: [
          "École Nationale des Sciences de l'Informatique — Informatique (2021 – 2024)",
          "Institut Préparatoire aux Études d'Ingénieurs — Classes Préparatoires (2019 – 2021)"
        ],
        contact_title: "Contact",
        contact_button: "Envoyer"
      }
    };
  
    // Apply the text for the selected language
    document.getElementById("header-name").textContent = texts[lang].header_name;
    document.getElementById("header-title").textContent = texts[lang].header_title;
    document.getElementById("header-phone").textContent = texts[lang].header_phone;
  
    document.getElementById("nav-about").textContent = texts[lang].nav_about;
    document.getElementById("nav-experience").textContent = texts[lang].nav_experience;
    document.getElementById("nav-education").textContent = texts[lang].nav_education;
    document.getElementById("nav-contact").textContent = texts[lang].nav_contact;
  
    document.getElementById("about-title").textContent = texts[lang].about_title;
    document.getElementById("about-description").textContent = texts[lang].about_description;
  
    document.getElementById("experience-title").textContent = texts[lang].experience_title;
    document.getElementById("education-title").textContent = texts[lang].education_title;
    document.getElementById("contact-title").textContent = texts[lang].contact_title;
  
    // Update experience list
    const expList = document.querySelector('#experience ul');
    expList.innerHTML = '';
    texts[lang].experience_data.forEach(experience => {
      const li = document.createElement('li');
      li.textContent = experience;
      expList.appendChild(li);
    });
  
    // Update education list
    const eduList = document.querySelector('#education ul');
    eduList.innerHTML = '';
    texts[lang].education_data.forEach(education => {
      const li = document.createElement('li');
      li.textContent = education;
      eduList.appendChild(li);
    });
  
    // Update the contact form button
    document.querySelector('form button').textContent = texts[lang].contact_button;
  }
  