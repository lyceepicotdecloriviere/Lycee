# PRD - Espoir Madagascar - Site Vitrine

## Problème Original
Créer un site vitrine pour l'école de Sœur Viviane à Madagascar qui aide les enfants défavorisés de la maternelle au lycée. Le site permet aux donateurs de soutenir l'école via TapTap Send et virement bancaire.

## Architecture
- **Frontend**: React 19 + Tailwind CSS + Framer Motion
- **Design**: Style chaleureux avec couleurs malgaches (rouge, vert, blanc)
- **i18n**: Support multilingue (FR, EN, MG, DE, ES) via i18next
- **UI Components**: Shadcn/UI + composants personnalisés

## User Personas
1. **Diaspora malgache** - Veut aider via TapTap Send
2. **Donateurs internationaux** - Préfèrent le virement bancaire
3. **Organisations caritatives** - Cherchent des informations sur l'école

## Core Requirements (Statiques)
- ✅ Page d'accueil avec phrase clé: "Je fait grandir Madagascar par la qualité de mes actions"
- ✅ Section À Propos avec infos sur Sœur Viviane
- ✅ Galerie photos style Bento
- ✅ Section Don (TapTap Send + Virement bancaire)
- ✅ Contact WhatsApp (+261 34 81 850 69)
- ✅ Bouton WhatsApp flottant
- ✅ Sélecteur de langue

## Ce qui a été implémenté (Décembre 2025)
- ✅ Hero section avec animation Framer Motion
- ✅ Header sticky avec navigation et sélecteur de langue
- ✅ Section À Propos avec statistiques
- ✅ Galerie Bento 5 images
- ✅ Section Don avec copie dans presse-papier (toast Sonner)
- ✅ Section Contact (WhatsApp, Téléphone, Facebook)
- ✅ Footer avec liens
- ✅ Design responsive mobile
- ✅ 5 langues: Français, English, Malagasy, Deutsch, Español

## Backlog Priorité
### P0 (Critique) - FAIT
- [x] Site fonctionnel avec toutes les sections

### P1 (Important)
- [ ] Ajouter les vraies photos depuis la page Facebook (nécessite accès)
- [ ] Ajouter les vrais détails bancaires de l'école
- [ ] Logo personnalisé de l'école

### P2 (Nice to have)
- [ ] Formulaire de contact email
- [ ] Compteur de dons reçus
- [ ] Témoignages des anciens élèves
- [ ] Blog/actualités

## Prochaines Actions
1. Obtenir les vraies photos de la page Facebook de l'école
2. Confirmer les coordonnées bancaires exactes
3. Ajouter le logo officiel de l'établissement
