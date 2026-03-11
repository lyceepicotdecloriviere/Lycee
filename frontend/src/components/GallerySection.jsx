import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1585335947262-a704b581009c?crop=entropy&cs=srgb&fm=jpg&q=85&w=800",
    alt: "Children learning",
    span: "col-span-2 row-span-2"
  },
  {
    url: "https://images.unsplash.com/photo-1585335947094-79dcc6a5e4e0?crop=entropy&cs=srgb&fm=jpg&q=85&w=600",
    alt: "Classroom activities",
    span: "col-span-1 row-span-1"
  },
  {
    url: "https://images.unsplash.com/photo-1558694440-03ade9215d7b?crop=entropy&cs=srgb&fm=jpg&q=85&w=600",
    alt: "Students studying",
    span: "col-span-1 row-span-1"
  },
  {
    url: "https://images.unsplash.com/photo-1659944984855-776187144baf?crop=entropy&cs=srgb&fm=jpg&q=85&w=600",
    alt: "School life",
    span: "col-span-1 row-span-1"
  },
  {
    url: "https://images.pexels.com/photos/32265190/pexels-photo-32265190.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    alt: "Madagascar landscape",
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
          <span className="font-handwriting text-2xl md:text-3xl text-secondary-600 mb-2 block">
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[220px]">
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
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
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
          <p className="font-handwriting text-2xl md:text-3xl text-neutral-600 italic">
            "Chaque sourire est une victoire"
          </p>
        </motion.div>
      </div>
    </section>
  );
};
