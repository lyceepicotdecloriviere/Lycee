import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  fr: {
    translation: {
      nav: {
        home: "Accueil",
        about: "À Propos",
        gallery: "Galerie",
        donate: "Faire un Don",
        contact: "Contact"
      },
      hero: {
        title: "Je fait grandir Madagascar par la qualité de mes actions",
        subtitle: "Soutenez l'école de Sœur Viviane et offrez un avenir aux enfants de Madagascar",
        cta: "Faire un don",
        learnMore: "En savoir plus"
      },
      about: {
        title: "Notre Mission",
        subtitle: "Donner un avenir aux enfants de Madagascar",
        description: "L'école de Sœur Viviane accueille des enfants défavorisés de la maternelle au lycée. Sans cette école, ces enfants seraient dans la rue ou forcés de travailler. Grâce à l'éducation et à la pédagogie, nous leur donnons un rêve et la possibilité de construire leur avenir.",
        sisterTitle: "Sœur Viviane",
        sisterRole: "Directrice de l'établissement",
        sisterDescription: "Depuis des années, Sœur Viviane se dévoue corps et âme pour offrir une éducation de qualité aux enfants les plus démunis. Son établissement accueille des élèves de la maternelle au lycée, leur donnant espoir et opportunités.",
        quote: "L'endroit où ils sont aujourd'hui ne définira pas qui ils seront demain."
      },
      stats: {
        students: "Élèves",
        levels: "Niveaux",
        years: "Années d'engagement",
        dreams: "Rêves à réaliser"
      },
      gallery: {
        title: "Nos Enfants",
        subtitle: "Des sourires qui réchauffent le cœur"
      },
      donate: {
        title: "Comment Nous Aider",
        subtitle: "Votre générosité change des vies",
        description: "Chaque don, petit ou grand, contribue à offrir un avenir meilleur aux enfants. Voici les moyens de nous soutenir :",
        taptap: {
          title: "TapTap Send",
          description: "Le moyen le plus simple pour la diaspora",
          instructions: "Envoyez directement à Madagascar via TapTap Send"
        },
        bank: {
          title: "Virement Bancaire",
          description: "Pour les dons depuis n'importe quel pays",
          accountName: "Nom du compte",
          bankName: "Banque",
          iban: "IBAN",
          swift: "Code SWIFT"
        },
        copySuccess: "Copié dans le presse-papier !",
        contactDonate: "Pour toute question sur les dons, contactez-nous directement"
      },
      contact: {
        title: "Contactez-Nous",
        subtitle: "Nous sommes là pour répondre à vos questions",
        whatsapp: "Discuter sur WhatsApp",
        facebook: "Suivre sur Facebook",
        phone: "Appeler directement",
        director: "Sœur Viviane - Directrice"
      },
      footer: {
        rights: "Tous droits réservés",
        mission: "Faire grandir Madagascar par la qualité de nos actions",
        support: "Soutenir l'école"
      },
      language: {
        select: "Langue",
        fr: "Français",
        en: "English",
        mg: "Malagasy",
        de: "Deutsch",
        es: "Español"
      }
    }
  },
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About",
        gallery: "Gallery",
        donate: "Donate",
        contact: "Contact"
      },
      hero: {
        title: "I make Madagascar grow through the quality of my actions",
        subtitle: "Support Sister Viviane's school and give a future to the children of Madagascar",
        cta: "Donate Now",
        learnMore: "Learn More"
      },
      about: {
        title: "Our Mission",
        subtitle: "Giving a future to the children of Madagascar",
        description: "Sister Viviane's school welcomes underprivileged children from kindergarten to high school. Without this school, these children would be on the streets or forced to work. Through education and pedagogy, we give them a dream and the possibility to build their future.",
        sisterTitle: "Sister Viviane",
        sisterRole: "School Director",
        sisterDescription: "For years, Sister Viviane has devoted herself body and soul to providing quality education to the most disadvantaged children. Her institution welcomes students from kindergarten to high school, giving them hope and opportunities.",
        quote: "Where they are today will not define who they will be tomorrow."
      },
      stats: {
        students: "Students",
        levels: "Levels",
        years: "Years of commitment",
        dreams: "Dreams to fulfill"
      },
      gallery: {
        title: "Our Children",
        subtitle: "Smiles that warm the heart"
      },
      donate: {
        title: "How to Help Us",
        subtitle: "Your generosity changes lives",
        description: "Every donation, small or large, helps provide a better future for children. Here are the ways to support us:",
        taptap: {
          title: "TapTap Send",
          description: "The easiest way for the diaspora",
          instructions: "Send directly to Madagascar via TapTap Send"
        },
        bank: {
          title: "Bank Transfer",
          description: "For donations from any country",
          accountName: "Account Name",
          bankName: "Bank",
          iban: "IBAN",
          swift: "SWIFT Code"
        },
        copySuccess: "Copied to clipboard!",
        contactDonate: "For any questions about donations, contact us directly"
      },
      contact: {
        title: "Contact Us",
        subtitle: "We are here to answer your questions",
        whatsapp: "Chat on WhatsApp",
        facebook: "Follow on Facebook",
        phone: "Call directly",
        director: "Sister Viviane - Director"
      },
      footer: {
        rights: "All rights reserved",
        mission: "Growing Madagascar through the quality of our actions",
        support: "Support the school"
      },
      language: {
        select: "Language",
        fr: "Français",
        en: "English",
        mg: "Malagasy",
        de: "Deutsch",
        es: "Español"
      }
    }
  },
  mg: {
    translation: {
      nav: {
        home: "Fandraisana",
        about: "Momba Anay",
        gallery: "Sary",
        donate: "Hanome",
        contact: "Fifandraisana"
      },
      hero: {
        title: "Mampitombo an'i Madagasikara aho amin'ny kalitaon'ny asako",
        subtitle: "Tohano ny sekolin'i Masera Viviane ary omeo ho avy ny ankizy malagasy",
        cta: "Hanome",
        learnMore: "Fantaro bebe kokoa"
      },
      about: {
        title: "Ny Tanjonay",
        subtitle: "Manome ho avy ny ankizy malagasy",
        description: "Ny sekolin'i Masera Viviane dia mandray ankizy sahirana manomboka amin'ny maternelle ka hatramin'ny lisea. Raha tsy misy ity sekoly ity dia ho any an-dalana na voatery hiasa ireo ankizy ireo. Amin'ny alalan'ny fanabeazana dia manome nofy sy fahafahana hanorina ny ho aviny isika.",
        sisterTitle: "Masera Viviane",
        sisterRole: "Tale ny sekoly",
        sisterDescription: "Nandritra ny taona maro i Masera Viviane dia nanolotra ny tenany manontolo hanomezana fanabeazana tsara ho an'ny ankizy sahirana indrindra.",
        quote: "Ny toerana misy azy anio dia tsy hamaritra hoe iza izy rahampitso."
      },
      stats: {
        students: "Mpianatra",
        levels: "Ambaratonga",
        years: "Taona nifandraisana",
        dreams: "Nofy hotanterahina"
      },
      gallery: {
        title: "Ny Ankizinay",
        subtitle: "Tsiky mampafana ny fo"
      },
      donate: {
        title: "Ahoana ny Hanampiana",
        subtitle: "Ny hatsaram-ponao dia manova fiainana",
        description: "Ny fanomezana rehetra, kely na lehibe, dia manampy hanomezana ho avy tsara kokoa ho an'ny ankizy:",
        taptap: {
          title: "TapTap Send",
          description: "Ny fomba mora indrindra ho an'ny diaspora",
          instructions: "Alefaso mivantana any Madagasikara amin'ny TapTap Send"
        },
        bank: {
          title: "Famindrana Banky",
          description: "Ho an'ny fanomezana avy any amin'ny firenena rehetra",
          accountName: "Anaran'ny kaonty",
          bankName: "Banky",
          iban: "IBAN",
          swift: "Kaody SWIFT"
        },
        copySuccess: "Nadika tao amin'ny clipboard!",
        contactDonate: "Raha misy fanontaniana momba ny fanomezana, mifandraisa aminay"
      },
      contact: {
        title: "Mifandraisa Aminay",
        subtitle: "Eto izahay hamaly ny fanontanianao",
        whatsapp: "Resaho amin'ny WhatsApp",
        facebook: "Araho amin'ny Facebook",
        phone: "Antsoy mivantana",
        director: "Masera Viviane - Tale"
      },
      footer: {
        rights: "Zo rehetra voatahiry",
        mission: "Mampitombo an'i Madagasikara amin'ny kalitaon'ny asanay",
        support: "Tohano ny sekoly"
      },
      language: {
        select: "Fiteny",
        fr: "Français",
        en: "English",
        mg: "Malagasy",
        de: "Deutsch",
        es: "Español"
      }
    }
  },
  de: {
    translation: {
      nav: {
        home: "Startseite",
        about: "Über Uns",
        gallery: "Galerie",
        donate: "Spenden",
        contact: "Kontakt"
      },
      hero: {
        title: "Ich lasse Madagaskar durch die Qualität meiner Taten wachsen",
        subtitle: "Unterstützen Sie Schwester Vivianes Schule und geben Sie den Kindern Madagaskars eine Zukunft",
        cta: "Jetzt Spenden",
        learnMore: "Mehr erfahren"
      },
      about: {
        title: "Unsere Mission",
        subtitle: "Den Kindern Madagaskars eine Zukunft geben",
        description: "Die Schule von Schwester Viviane nimmt benachteiligte Kinder vom Kindergarten bis zum Gymnasium auf. Ohne diese Schule wären diese Kinder auf der Straße oder zur Arbeit gezwungen.",
        sisterTitle: "Schwester Viviane",
        sisterRole: "Schuldirektorin",
        sisterDescription: "Seit Jahren widmet sich Schwester Viviane mit Leib und Seele der Bereitstellung einer qualitativ hochwertigen Bildung für die am stärksten benachteiligten Kinder.",
        quote: "Wo sie heute sind, wird nicht definieren, wer sie morgen sein werden."
      },
      stats: {
        students: "Schüler",
        levels: "Stufen",
        years: "Jahre Engagement",
        dreams: "Träume zu erfüllen"
      },
      gallery: {
        title: "Unsere Kinder",
        subtitle: "Lächeln, das das Herz erwärmt"
      },
      donate: {
        title: "Wie Sie Helfen Können",
        subtitle: "Ihre Großzügigkeit verändert Leben",
        description: "Jede Spende, klein oder groß, hilft den Kindern eine bessere Zukunft zu ermöglichen:",
        taptap: {
          title: "TapTap Send",
          description: "Der einfachste Weg für die Diaspora",
          instructions: "Senden Sie direkt nach Madagaskar über TapTap Send"
        },
        bank: {
          title: "Banküberweisung",
          description: "Für Spenden aus jedem Land",
          accountName: "Kontoname",
          bankName: "Bank",
          iban: "IBAN",
          swift: "SWIFT-Code"
        },
        copySuccess: "In die Zwischenablage kopiert!",
        contactDonate: "Bei Fragen zu Spenden kontaktieren Sie uns direkt"
      },
      contact: {
        title: "Kontaktieren Sie Uns",
        subtitle: "Wir sind hier, um Ihre Fragen zu beantworten",
        whatsapp: "Auf WhatsApp chatten",
        facebook: "Auf Facebook folgen",
        phone: "Direkt anrufen",
        director: "Schwester Viviane - Direktorin"
      },
      footer: {
        rights: "Alle Rechte vorbehalten",
        mission: "Madagaskar durch die Qualität unserer Taten wachsen lassen",
        support: "Die Schule unterstützen"
      },
      language: {
        select: "Sprache",
        fr: "Français",
        en: "English",
        mg: "Malagasy",
        de: "Deutsch",
        es: "Español"
      }
    }
  },
  es: {
    translation: {
      nav: {
        home: "Inicio",
        about: "Nosotros",
        gallery: "Galería",
        donate: "Donar",
        contact: "Contacto"
      },
      hero: {
        title: "Hago crecer a Madagascar con la calidad de mis acciones",
        subtitle: "Apoya la escuela de la Hermana Viviane y dale un futuro a los niños de Madagascar",
        cta: "Donar Ahora",
        learnMore: "Saber más"
      },
      about: {
        title: "Nuestra Misión",
        subtitle: "Dar un futuro a los niños de Madagascar",
        description: "La escuela de la Hermana Viviane acoge a niños desfavorecidos desde el jardín de infantes hasta el bachillerato. Sin esta escuela, estos niños estarían en las calles o forzados a trabajar.",
        sisterTitle: "Hermana Viviane",
        sisterRole: "Directora de la escuela",
        sisterDescription: "Durante años, la Hermana Viviane se ha dedicado en cuerpo y alma a proporcionar una educación de calidad a los niños más desfavorecidos.",
        quote: "Donde están hoy no definirá quiénes serán mañana."
      },
      stats: {
        students: "Estudiantes",
        levels: "Niveles",
        years: "Años de compromiso",
        dreams: "Sueños por cumplir"
      },
      gallery: {
        title: "Nuestros Niños",
        subtitle: "Sonrisas que calientan el corazón"
      },
      donate: {
        title: "Cómo Ayudarnos",
        subtitle: "Tu generosidad cambia vidas",
        description: "Cada donación, pequeña o grande, ayuda a proporcionar un mejor futuro a los niños:",
        taptap: {
          title: "TapTap Send",
          description: "La forma más fácil para la diáspora",
          instructions: "Envía directamente a Madagascar a través de TapTap Send"
        },
        bank: {
          title: "Transferencia Bancaria",
          description: "Para donaciones desde cualquier país",
          accountName: "Nombre de la cuenta",
          bankName: "Banco",
          iban: "IBAN",
          swift: "Código SWIFT"
        },
        copySuccess: "¡Copiado al portapapeles!",
        contactDonate: "Para cualquier pregunta sobre donaciones, contáctanos directamente"
      },
      contact: {
        title: "Contáctanos",
        subtitle: "Estamos aquí para responder tus preguntas",
        whatsapp: "Chatear en WhatsApp",
        facebook: "Seguir en Facebook",
        phone: "Llamar directamente",
        director: "Hermana Viviane - Directora"
      },
      footer: {
        rights: "Todos los derechos reservados",
        mission: "Hacer crecer a Madagascar con la calidad de nuestras acciones",
        support: "Apoyar la escuela"
      },
      language: {
        select: "Idioma",
        fr: "Français",
        en: "English",
        mg: "Malagasy",
        de: "Deutsch",
        es: "Español"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fr',
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
