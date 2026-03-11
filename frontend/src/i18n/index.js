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
        subtitle: "Soutenez le Lycée Picot de Clorivière et offrez un avenir aux enfants vulnérables d'Antsirabe",
        cta: "Faire un don",
        learnMore: "En savoir plus"
      },
      about: {
        title: "Notre Mission",
        subtitle: "Recevoir les enfants vulnérables et leur assurer un avenir",
        description: "Le Lycée Picot de Clorivière accueille depuis 2012 des enfants de 3 à 18 ans issus de familles défavorisées du quartier d'Antsongo, à la périphérie d'Antsirabe. Ces familles sont touchées par l'exode rural et vivent dans la pauvreté. Sans cette école, ces enfants seraient dans la rue ou forcés de travailler.",
        sisterTitle: "Sœur Viviane",
        sisterRole: "Directrice de l'établissement",
        sisterDescription: "Notre mission: recevoir le plus d'enfants et de jeunes vulnérables, leur permettre une vie digne ainsi que l'épanouissement de tout leur être et assurer un avenir pour eux. Grâce à une éducation de qualité et un accompagnement adapté, nous leur donnons espoir et opportunités.",
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
        description: "Chaque don, petit ou grand, contribue à offrir un avenir meilleur aux enfants.",
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
        contactDonate: "Pour toute question sur les dons, contactez-nous directement",
        sponsorship: {
          title: "Parrainage d'élèves",
          description: "Parrainez un élève pour assurer sa scolarité",
          preschool: "Préscolaire: 2€ / enfant",
          primary: "Primaire: 2€ / enfant",
          secondary1: "Collège: 3€ / jeune",
          secondary2: "Lycée: 5€ / jeune"
        }
      },
      contact: {
        title: "Contactez-Nous",
        subtitle: "Nous sommes là pour répondre à vos questions",
        whatsapp: "Discuter sur WhatsApp",
        facebook: "Suivre sur Facebook",
        phone: "Appeler directement",
        director: "Sœur Viviane - Directrice",
        location: "Nazaretakely Antsongo 110, Antsirabe"
      },
      footer: {
        rights: "Tous droits réservés",
        mission: "Fahavononana • Asa • Kalitao - Détermination • Action • Qualité",
        support: "Soutenir le lycée"
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
        subtitle: "Support Lycée Picot de Clorivière and give a future to vulnerable children in Antsirabe",
        cta: "Donate Now",
        learnMore: "Learn More"
      },
      about: {
        title: "Our Mission",
        subtitle: "Welcoming vulnerable children and securing their future",
        description: "Since 2012, Lycée Picot de Clorivière has been welcoming children aged 3 to 18 from disadvantaged families in the Antsongo neighborhood, on the outskirts of Antsirabe. These families are affected by rural exodus and live in poverty. Without this school, these children would be on the streets or forced to work.",
        sisterTitle: "Sister Viviane",
        sisterRole: "School Director",
        sisterDescription: "Our mission: to receive as many vulnerable children and young people as possible, to enable them to live with dignity and to flourish in all their being, and to secure a future for them. Through quality education and adapted support, we give them hope and opportunities.",
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
        description: "Every donation, small or large, helps provide a better future for children.",
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
        contactDonate: "For any questions about donations, contact us directly",
        sponsorship: {
          title: "Student Sponsorship",
          description: "Sponsor a student to ensure their education",
          preschool: "Preschool: €2 / child",
          primary: "Primary: €2 / child",
          secondary1: "Middle School: €3 / youth",
          secondary2: "High School: €5 / youth"
        }
      },
      contact: {
        title: "Contact Us",
        subtitle: "We are here to answer your questions",
        whatsapp: "Chat on WhatsApp",
        facebook: "Follow on Facebook",
        phone: "Call directly",
        director: "Sister Viviane - Director",
        location: "Nazaretakely Antsongo 110, Antsirabe"
      },
      footer: {
        rights: "All rights reserved",
        mission: "Fahavononana • Asa • Kalitao - Determination • Action • Quality",
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
        subtitle: "Tohano ny Lycée Picot de Clorivière ary omeo ho avy ny ankizy sahirana ao Antsirabe",
        cta: "Hanome",
        learnMore: "Fantaro bebe kokoa"
      },
      about: {
        title: "Ny Tanjonay",
        subtitle: "Mandray ankizy sahirana ary manome ho avy azy ireo",
        description: "Hatramin'ny 2012 dia mandray ankizy 3 ka hatramin'ny 18 taona avy amin'ny fianakaviana sahirana ao amin'ny faritra Antsongo, any ivelan'i Antsirabe ny Lycée Picot de Clorivière. Voakasiky ny fifindra-monina ireo fianakaviana ireo ary miaina ao anatin'ny fahantrana.",
        sisterTitle: "Masera Viviane",
        sisterRole: "Tale ny sekoly",
        sisterDescription: "Ny tanjonay: mandray ankizy sy tanora sahirana betsaka araka izay azo atao, manome azy ireo fiainana mendrika sy fahafahana mivelatra, ary manome ho avy azy ireo.",
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
        description: "Ny fanomezana rehetra, kely na lehibe, dia manampy hanomezana ho avy tsara kokoa ho an'ny ankizy.",
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
        contactDonate: "Raha misy fanontaniana momba ny fanomezana, mifandraisa aminay",
        sponsorship: {
          title: "Fiantohana mpianatra",
          description: "Iantoho mpianatra iray mba hiantohana ny fianarany",
          preschool: "Préscolaire: 2€ / ankizy",
          primary: "Primaire: 2€ / ankizy",
          secondary1: "Collège: 3€ / tanora",
          secondary2: "Lycée: 5€ / tanora"
        }
      },
      contact: {
        title: "Mifandraisa Aminay",
        subtitle: "Eto izahay hamaly ny fanontanianao",
        whatsapp: "Resaho amin'ny WhatsApp",
        facebook: "Araho amin'ny Facebook",
        phone: "Antsoy mivantana",
        director: "Masera Viviane - Tale",
        location: "Nazaretakely Antsongo 110, Antsirabe"
      },
      footer: {
        rights: "Zo rehetra voatahiry",
        mission: "Fahavononana • Asa • Kalitao",
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
        subtitle: "Unterstützen Sie das Lycée Picot de Clorivière und geben Sie gefährdeten Kindern in Antsirabe eine Zukunft",
        cta: "Jetzt Spenden",
        learnMore: "Mehr erfahren"
      },
      about: {
        title: "Unsere Mission",
        subtitle: "Gefährdete Kinder aufnehmen und ihre Zukunft sichern",
        description: "Seit 2012 nimmt das Lycée Picot de Clorivière Kinder im Alter von 3 bis 18 Jahren aus benachteiligten Familien im Viertel Antsongo am Stadtrand von Antsirabe auf.",
        sisterTitle: "Schwester Viviane",
        sisterRole: "Schuldirektorin",
        sisterDescription: "Unsere Mission: so viele gefährdete Kinder und Jugendliche wie möglich aufzunehmen, ihnen ein würdiges Leben zu ermöglichen und ihre Zukunft zu sichern.",
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
        description: "Jede Spende, klein oder groß, hilft den Kindern eine bessere Zukunft zu ermöglichen.",
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
        contactDonate: "Bei Fragen zu Spenden kontaktieren Sie uns direkt",
        sponsorship: {
          title: "Schülerpatenschaften",
          description: "Übernehmen Sie eine Patenschaft für einen Schüler",
          preschool: "Vorschule: 2€ / Kind",
          primary: "Grundschule: 2€ / Kind",
          secondary1: "Mittelschule: 3€ / Jugendlicher",
          secondary2: "Gymnasium: 5€ / Jugendlicher"
        }
      },
      contact: {
        title: "Kontaktieren Sie Uns",
        subtitle: "Wir sind hier, um Ihre Fragen zu beantworten",
        whatsapp: "Auf WhatsApp chatten",
        facebook: "Auf Facebook folgen",
        phone: "Direkt anrufen",
        director: "Schwester Viviane - Direktorin",
        location: "Nazaretakely Antsongo 110, Antsirabe"
      },
      footer: {
        rights: "Alle Rechte vorbehalten",
        mission: "Fahavononana • Asa • Kalitao - Entschlossenheit • Aktion • Qualität",
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
        subtitle: "Apoya al Lycée Picot de Clorivière y dale un futuro a los niños vulnerables de Antsirabe",
        cta: "Donar Ahora",
        learnMore: "Saber más"
      },
      about: {
        title: "Nuestra Misión",
        subtitle: "Acoger a niños vulnerables y asegurar su futuro",
        description: "Desde 2012, el Lycée Picot de Clorivière acoge a niños de 3 a 18 años de familias desfavorecidas del barrio de Antsongo, en las afueras de Antsirabe.",
        sisterTitle: "Hermana Viviane",
        sisterRole: "Directora de la escuela",
        sisterDescription: "Nuestra misión: recibir a tantos niños y jóvenes vulnerables como sea posible, permitirles una vida digna y asegurar un futuro para ellos.",
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
        description: "Cada donación, pequeña o grande, ayuda a proporcionar un mejor futuro a los niños.",
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
        contactDonate: "Para cualquier pregunta sobre donaciones, contáctanos directamente",
        sponsorship: {
          title: "Apadrinamiento de estudiantes",
          description: "Apadrina a un estudiante para asegurar su educación",
          preschool: "Preescolar: 2€ / niño",
          primary: "Primaria: 2€ / niño",
          secondary1: "Secundaria: 3€ / joven",
          secondary2: "Bachillerato: 5€ / joven"
        }
      },
      contact: {
        title: "Contáctanos",
        subtitle: "Estamos aquí para responder tus preguntas",
        whatsapp: "Chatear en WhatsApp",
        facebook: "Seguir en Facebook",
        phone: "Llamar directamente",
        director: "Hermana Viviane - Directora",
        location: "Nazaretakely Antsongo 110, Antsirabe"
      },
      footer: {
        rights: "Todos los derechos reservados",
        mission: "Fahavononana • Asa • Kalitao - Determinación • Acción • Calidad",
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
