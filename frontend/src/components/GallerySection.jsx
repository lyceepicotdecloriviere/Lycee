import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const galleryImages = [
  {
    url: "https://customer-assets.emergentagent.com/job_enfants-espoir-mg/artifacts/ndziy6fd_2A6A4111-336F-4981-ABC3-2B37A374AB1A.png",
    alt: "Élèves du Lycée Picot de Clorivière en uniforme bleu",
    span: "col-span-2 row-span-2"
  },
  {
    url: "https://customer-assets.emergentagent.com/job_enfants-espoir-mg/artifacts/84qrgk4s_CD612B02-9FAD-46C8-A35D-D3C5A71FC78C.jpeg",
    alt: "Élèves en classe souriants",
    span: "col-span-2 row-span-1"
  },
  {
    url: "https://customer-assets.emergentagent.com/job_enfants-espoir-mg/artifacts/f2ieobfk_A06DD6E0-BF2F-4D28-AF71-CEDE7F5E1B38.png",
    alt: "Enfants assis dans l'herbe",
    span: "col-span-1 row-span-1"
  },
  {
    url: "https://customer-assets.emergentagent.com/job_enfants-espoir-mg/artifacts/p6qq4ymc_65D29656-C819-499B-B336-599DB2F78A43.png",
    alt: "Enfants du quartier Antsongo",
    span: "col-span-1 row-span-1"
  },
  {
    url: "https://customer-assets.emergentagent.com/job_enfants-espoir-mg/artifacts/cz2z3ry6_94FD9E54-6F4A-4600-B13B-3B89FF204DE4.png",
    alt: "Équipe et personnel de l'établissement",
    span: "col-span-2 row-span-1"
  },
  {
    url: "https://customer-assets.emergentagent.com/job_enfants-espoir-mg/artifacts/kafnjqss_A575359E-FCAA-4128-A738-AB1BB31AB030.jpeg",
    alt: "Bâtiment de l'établissement",
    span: "col-span-1 row-span-1"
  },
  {
    url: "https://customer-assets.emergentagent.com/job_enfants-espoir-mg/artifacts/6g5obf3j_CF0A4C4C-E732-444B-BAB9-F8DA67EF3277.jpeg",
    alt: "Façade de l'école",
    span: "col-span-1 row-span-1"
  },
];

export const GallerySection = () => {
  const { t } = useTranslation();

  return (
    <section
      id="gallery"
      data-testid="gallery-section"
      className="py-24 md:py-32 bg-background"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <span className="font-handwriting text-2xl md:text-3xl text-primary-600 mb-2 block">
            Galerie Photos
          </span>
          <h2
            data-testid="gallery-title"
            className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-neutral-900 mb-4"
          >
            {t('gallery.title')}
          </h2>
          <p className="text-neutral-600 text-base md:text-lg">
            {t('gallery.subtitle')}
          </p>
        </motion.div>

        {/* Gallery Grid - Bento Style */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[180px] md:auto-rows-[200px]">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              data-testid={`gallery-image-${index}`}
              className={`${image.span} relative group overflow-hidden rounded-2xl md:rounded-3xl shadow-lg`}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Decorative corner */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Decorative Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 md:mt-16 text-center"
        >
          <p className="font-handwriting text-2xl md:text-3xl text-primary-700 italic">
            "Fahavononana • Asa • Kalitao"
          </p>
          <p className="text-sm text-neutral-500 mt-2">Détermination • Action • Qualité</p>
        </motion.div>
      </div>
    </section>
  );
};
