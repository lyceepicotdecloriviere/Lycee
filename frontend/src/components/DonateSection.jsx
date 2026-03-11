import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Copy, Heart, Building2, Smartphone, CheckCircle, Users, GraduationCap } from 'lucide-react';
import { Button } from './ui/button';
import { toast } from 'sonner';

export const DonateSection = () => {
  const { t } = useTranslation();

  const copyToClipboard = async (text, label) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      toast.success(t('donate.copySuccess'), {
        description: label,
        duration: 2000,
      });
    } catch (err) {
      console.error('Copy failed:', err);
      toast.error('Erreur lors de la copie');
    }
  };

  const bankDetails = {
    accountName: "Lycée Picot de Clorivière",
    bankName: "BNI Madagascar",
    iban: "MG46 0000 5000 0123 4567 8901 234",
    swift: "BNIMGMGX"
  };

  const sponsorshipLevels = [
    { level: t('donate.sponsorship.preschool'), students: '216', price: '2€' },
    { level: t('donate.sponsorship.primary'), students: '537', price: '2€' },
    { level: t('donate.sponsorship.secondary1'), students: '368', price: '3€' },
    { level: t('donate.sponsorship.secondary2'), students: '197', price: '5€' },
  ];

  return (
    <section
      id="donate"
      data-testid="donate-section"
      className="py-24 md:py-32 bg-primary-50"
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
            Votre Générosité
          </span>
          <h2
            data-testid="donate-title"
            className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-neutral-900 mb-4"
          >
            {t('donate.title')}
          </h2>
          <p className="text-neutral-600 text-base md:text-lg">
            {t('donate.subtitle')}
          </p>
        </motion.div>

        {/* Sponsorship Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl md:text-2xl text-neutral-900">
                  {t('donate.sponsorship.title')}
                </h3>
                <p className="text-sm text-neutral-600">
                  {t('donate.sponsorship.description')}
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {sponsorshipLevels.map((item, index) => (
                <div
                  key={index}
                  className="bg-background-alt rounded-xl p-4 text-center hover:shadow-md transition-shadow"
                >
                  <p className="text-2xl font-bold text-primary-600 mb-1">{item.price}</p>
                  <p className="text-sm text-neutral-600 mb-2">{item.level.split(':')[0]}</p>
                  <div className="flex items-center justify-center gap-1 text-xs text-neutral-500">
                    <Users className="w-3 h-3" />
                    <span>{item.students} élèves</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Donation Options Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {/* TapTap Send Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            data-testid="taptap-card"
            className="bg-white rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-shadow relative overflow-hidden"
          >
            {/* Recommended Badge */}
            <div className="absolute top-4 right-4 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
              Recommandé
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-secondary-100 rounded-2xl flex items-center justify-center">
                <Smartphone className="w-7 h-7 text-secondary-600" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl md:text-2xl text-neutral-900">
                  {t('donate.taptap.title')}
                </h3>
                <p className="text-sm text-neutral-600">
                  {t('donate.taptap.description')}
                </p>
              </div>
            </div>

            <p className="text-neutral-700 mb-6 leading-relaxed">
              {t('donate.taptap.instructions')}
            </p>

            <div className="bg-secondary-50 rounded-2xl p-6 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-neutral-500 mb-1">Numéro de téléphone</p>
                  <p className="font-bold text-lg text-secondary-700">+261 34 81 850 69</p>
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  data-testid="copy-taptap-phone"
                  onClick={() => copyToClipboard('+261348185069', 'Numéro TapTap Send')}
                  className="hover:bg-secondary-100"
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="flex items-center gap-2 text-secondary-600">
              <CheckCircle className="w-5 h-5" />
              <span className="text-sm">Transfert rapide et sécurisé</span>
            </div>
          </motion.div>

          {/* Bank Transfer Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            data-testid="bank-card"
            className="bg-white rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-shadow"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center">
                <Building2 className="w-7 h-7 text-primary-600" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl md:text-2xl text-neutral-900">
                  {t('donate.bank.title')}
                </h3>
                <p className="text-sm text-neutral-600">
                  {t('donate.bank.description')}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {/* Account Name */}
              <div className="bg-neutral-50 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-neutral-500 mb-1">{t('donate.bank.accountName')}</p>
                    <p className="font-medium text-neutral-800">{bankDetails.accountName}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    data-testid="copy-account-name"
                    onClick={() => copyToClipboard(bankDetails.accountName, t('donate.bank.accountName'))}
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Bank Name */}
              <div className="bg-neutral-50 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-neutral-500 mb-1">{t('donate.bank.bankName')}</p>
                    <p className="font-medium text-neutral-800">{bankDetails.bankName}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    data-testid="copy-bank-name"
                    onClick={() => copyToClipboard(bankDetails.bankName, t('donate.bank.bankName'))}
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* IBAN */}
              <div className="bg-neutral-50 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-neutral-500 mb-1">{t('donate.bank.iban')}</p>
                    <p className="font-medium text-neutral-800 text-sm">{bankDetails.iban}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    data-testid="copy-iban"
                    onClick={() => copyToClipboard(bankDetails.iban, t('donate.bank.iban'))}
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* SWIFT */}
              <div className="bg-neutral-50 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-neutral-500 mb-1">{t('donate.bank.swift')}</p>
                    <p className="font-medium text-neutral-800">{bankDetails.swift}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    data-testid="copy-swift"
                    onClick={() => copyToClipboard(bankDetails.swift, t('donate.bank.swift'))}
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Contact for Donations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-12"
        >
          <p className="text-neutral-600 mb-4">{t('donate.contactDonate')}</p>
          <Button
            asChild
            data-testid="donate-whatsapp-btn"
            className="bg-secondary-600 hover:bg-secondary-700 text-white rounded-full px-8 shadow-lg shadow-secondary-600/20 hover:-translate-y-1 active:scale-95 transition-all"
          >
            <a
              href="https://wa.me/261348185069"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Heart className="w-4 h-4 mr-2" />
              WhatsApp: +261 34 81 850 69
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
