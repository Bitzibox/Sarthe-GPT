# Sarthe GPT - Assistant IA Territorial

Le premier chatbot d'intelligence artificielle qui comprend intimement un territoire (la Sarthe) et conseille les entrepreneurs/PME avec une connaissance locale approfondie.

## 🎯 Objectif

Créer un MVP fonctionnel d'assistant IA spécialisé dans l'accompagnement entrepreneurial territorial, avec une expertise unique sur la Sarthe.

## 🚀 Fonctionnalités

### Interface Chat Principal
- Zone de conversation moderne avec bulles de messages
- Barre de saisie fixe avec raccourci Enter
- Historique des conversations sauvegardé
- 6 questions prédéfinies pour commencer
- Animation "L'IA Sarthe réfléchit..."

### Système d'Onboarding
- Écran d'accueil avec logo Elsyvia
- 3 slides explicatives sur les capacités uniques
- Démonstration avec conversation exemple
- Call-to-action "Testez maintenant gratuitement"

### Base de Connaissances Territoriales
- **Secteurs porteurs** : Automobile, agroalimentaire, logistique, tourisme, services
- **Success stories** : 20+ exemples d'entreprises qui ont réussi localement
- **Analyses d'échecs** : 10+ cas documentés avec raisons
- **Acteurs locaux** : CCI, Sarthe Développement, réseaux d'entrepreneurs
- **Spécificités culturelles** : Mentalité locale, traditions, habitudes
- **Données géographiques** : Le Mans, La Flèche, Sablé, etc.

### Fonctionnalités Avancées
- **Mode Expert** : Réponses approfondies avec références historiques
- **Scoring de compatibilité** : Projet-territoire avec recommandations
- **Export PDF** : Récapitulatif conversation + conseils
- **Analytics simples** : Questions fréquentes, satisfaction, usage

## 🎨 Design

### Palette de Couleurs
- **Primaire** : Vert Sarthe (#2D5F3F) - nature/authenticité
- **Secondaire** : Beige chaleureux (#F5F1E8) - convivialité locale
- **Accent** : Orange terroir (#E67E22) - dynamisme
- **Neutre** : Gris ardoise (#34495E) - textes

### Typographie
- **Titres** : Poppins (moderne sans-serif)
- **Corps** : Source Sans Pro (lisible)
- **Responsive** : 16px base, adaptation mobile

## 🛠️ Stack Technique

- **Frontend** : HTML5/CSS3/JavaScript vanilla
- **Responsive** : Mobile-first, breakpoints 320px/768px/1024px
- **Stockage** : localStorage pour MVP
- **IA** : Intégration API OpenAI/Claude (configurable)
- **Déploiement** : Compatible Netlify/Vercel

## 📁 Structure des Fichiers

\`\`\`
sarthe-gpt-mvp/
├── index.html              # Page principale
├── css/
│   ├── styles.css          # Styles principaux
│   └── responsive.css      # Adaptations mobiles
├── js/
│   ├── app.js             # Application principale
│   ├── chat.js            # Gestionnaire de chat
│   └── data.js            # Base de connaissances
└── README.md              # Documentation
\`\`\`

## 🚀 Installation & Déploiement

### Installation Locale
1. Cloner ou télécharger les fichiers
2. Ouvrir `index.html` dans un navigateur
3. Aucune configuration requise pour le MVP

### Déploiement Netlify
1. Glisser-déposer le dossier sur Netlify
2. L'application est immédiatement accessible

### Déploiement Vercel
1. Connecter le repository GitHub
2. Déploiement automatique

## 🔧 Configuration

### API IA (Optionnel)
Pour connecter une vraie API IA, modifier dans `js/data.js` :

\`\`\`javascript
const API_CONFIG = {
    openai: {
        endpoint: 'VOTRE_ENDPOINT',
        apiKey: 'VOTRE_CLE_API',
        model: 'gpt-3.5-turbo'
    }
};
\`\`\`

### Personnalisation Territoire
Pour adapter à un autre territoire, modifier `SARTHE_KNOWLEDGE_BASE` dans `js/data.js`.

## 📊 Analytics & Métriques

### Métriques Trackées
- Conversations démarrées
- Questions les plus posées
- Taux d'utilisation mode expert
- Temps passé sur l'application
- Taux de conversion CTA

### Debug Mode
Ajouter `?debug=true` à l'URL pour activer :
- `resetOnboarding()` : Réinitialiser l'onboarding
- `getAnalytics()` : Voir les métriques

## 🎯 Roadmap Évolutions

### Version 1.1
- [ ] Intégration API IA réelle
- [ ] Export PDF fonctionnel
- [ ] Dashboard analytics complet
- [ ] Système de feedback utilisateur

### Version 1.2
- [ ] Base de données PostgreSQL
- [ ] Authentification utilisateur
- [ ] Historique conversations cloud
- [ ] API REST complète

### Version 2.0
- [ ] Multi-territoires
- [ ] IA entraînée spécifiquement
- [ ] Intégrations CRM
- [ ] Application mobile

## 🤝 Support & Contact

**Propulsé par Elsyvia - Experts IA Territoriaux**

- Site web : [elsyvia.com](https://elsyvia.com)
- Email : contact@elsyvia.com
- RDV gratuit : [calendly.com/elsyvia](https://calendly.com/elsyvia)

## 📄 Licence

© 2025 Elsyvia. Tous droits réservés.

---

*Sarthe GPT - La première IA qui comprend vraiment ton territoire* 🌾
