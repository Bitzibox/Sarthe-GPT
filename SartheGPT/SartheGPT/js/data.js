// Base de connaissances territoriales Sarthe
const SARTHE_KNOWLEDGE_BASE = {
  secteurs_porteurs: [
    {
      nom: "Automobile",
      description: "Secteur historique avec Renault Le Mans, MMA, et un écosystème de sous-traitants",
      opportunites: ["Électrification", "Pièces détachées", "Services après-vente", "Innovation mobilité"],
      chiffres: "15 000 emplois directs, 40% des exportations sarthoises",
    },
    {
      nom: "Agroalimentaire",
      description: "Tradition agricole forte avec transformation locale",
      opportunites: ["Bio et circuits courts", "Transformation artisanale", "Export", "Innovation alimentaire"],
      chiffres: "8 000 emplois, 2ème secteur industriel",
    },
    {
      nom: "Logistique",
      description: "Position géographique stratégique Paris-Nantes-Tours",
      opportunites: ["E-commerce", "Transport vert", "Entrepôts automatisés", "Last mile"],
      chiffres: "12 000 emplois, croissance +15% en 5 ans",
    },
    {
      nom: "Tourisme & Patrimoine",
      description: "24H du Mans, châteaux, patrimoine naturel",
      opportunites: ["Tourisme expérientiel", "Digital", "Écotourisme", "Événementiel"],
      chiffres: "250 000 visiteurs/an aux 24H, 8% du PIB local",
    },
    {
      nom: "Services aux entreprises",
      description: "Accompagnement de la transformation numérique",
      opportunites: ["Conseil digital", "Formation", "Cybersécurité", "Data"],
      chiffres: "Croissance +20% depuis 2020",
    },
  ],

  success_stories: [
    {
      entreprise: "Boulangerie Julien",
      secteur: "Agroalimentaire",
      lieu: "Le Mans centre",
      histoire:
        "Parti d'une boulangerie traditionnelle, Julien a développé une gamme bio et livre maintenant 50 restaurants locaux. Chiffre d'affaires x3 en 4 ans.",
      cles_succes: ["Qualité produits", "Réseau local", "Innovation bio", "Proximité clients"],
      lecon: "La tradition sarthoise + innovation = succès garanti",
    },
    {
      entreprise: "TechSarthe Solutions",
      secteur: "Services numériques",
      lieu: "Technopole Le Mans",
      histoire:
        "Start-up créée par 2 ingénieurs locaux, spécialisée dans l'IA pour l'automobile. 25 employés en 3 ans, clients Renault et PSA.",
      cles_succes: ["Expertise technique", "Proximité donneurs d'ordre", "Équipe locale", "Aides CCI"],
      lecon: "L'écosystème automobile sarthois offre des opportunités uniques en tech",
    },
    {
      entreprise: "Ferme des Alpes Mancelles",
      secteur: "Agritourisme",
      lieu: "Saint-Céneri-le-Gérei",
      histoire:
        "Reconversion d'une ferme traditionnelle en gîtes + activités. 80% de taux d'occupation, 150k€ CA annuel.",
      cles_succes: ["Authenticité", "Expérience unique", "Marketing digital", "Partenariats locaux"],
      lecon: "Le patrimoine naturel sarthois est un atout économique majeur",
    },
  ],

  echecs_analyses: [
    {
      entreprise: "Restaurant Parisien Le Mans",
      secteur: "Restauration",
      lieu: "Le Mans centre",
      echec: "Fermeture après 18 mois",
      raisons: ["Méconnaissance clientèle locale", "Prix trop élevés", "Concept inadapté", "Pas d'ancrage territorial"],
      lecon: "En Sarthe, l'authenticité et les prix justes sont essentiels",
    },
    {
      entreprise: "E-commerce Mode Luxe",
      secteur: "Commerce en ligne",
      lieu: "La Flèche",
      echec: "Liquidation après 2 ans",
      raisons: ["Marché local trop petit", "Logistique mal pensée", "Concurrence nationale", "Pas de différenciation"],
      lecon: "Le e-commerce en Sarthe doit s'appuyer sur des spécificités locales",
    },
  ],

  acteurs_locaux: [
    {
      nom: "CCI Sarthe",
      type: "Accompagnement",
      services: ["Conseil création", "Formation", "Financement", "Export"],
      contact: "cci.sarthe@cci.fr",
      specialites: ["Industrie", "Commerce", "Services"],
    },
    {
      nom: "Sarthe Développement",
      type: "Développement économique",
      services: ["Implantation", "Immobilier d'entreprise", "Aides publiques"],
      contact: "contact@sarthe-developpement.com",
      specialites: ["Industrie", "Innovation", "International"],
    },
    {
      nom: "Technopole Le Mans",
      type: "Innovation",
      services: ["Pépinière", "Incubation", "R&D", "Mise en réseau"],
      contact: "accueil@technopole-lemans.fr",
      specialites: ["Tech", "Automobile", "Numérique"],
    },
    {
      nom: "Initiative Sarthe",
      type: "Financement",
      services: ["Prêts d'honneur", "Accompagnement", "Réseau"],
      contact: "contact@initiative-sarthe.fr",
      specialites: ["Création", "Reprise", "Développement"],
    },
  ],

  specificites_zones: [
    {
      zone: "Le Mans",
      population: "143 000 hab",
      caracteristiques: ["Préfecture", "Université", "24H du Mans", "Industrie automobile"],
      opportunites: [
        "Centre-ville à revitaliser",
        "Étudiants 20 000",
        "Tourisme événementiel",
        "Services aux entreprises",
      ],
      mentalite: "Urbaine mais attachée aux traditions, consommation raisonnée",
    },
    {
      zone: "La Flèche",
      population: "15 000 hab",
      caracteristiques: ["Patrimoine historique", "Prytanée militaire", "Agriculture"],
      opportunites: ["Tourisme patrimonial", "Artisanat", "Services de proximité"],
      mentalite: "Rurale, authentique, fidèle aux commerces locaux",
    },
    {
      zone: "Sablé-sur-Sarthe",
      population: "12 000 hab",
      caracteristiques: ["Industrie agroalimentaire", "LU", "Patrimoine"],
      opportunites: ["Agroalimentaire", "Logistique", "Tourisme fluvial"],
      mentalite: "Industrielle, pragmatique, attachée à l'emploi local",
    },
  ],

  aides_locales: [
    {
      nom: "Aide à la création CCI Sarthe",
      montant: "Jusqu'à 5 000€",
      conditions: ["Première création", "Siège social en Sarthe", "Dossier viable"],
      procedure: "Dossier + entretien CCI",
    },
    {
      nom: "Prêt d'honneur Initiative Sarthe",
      montant: "2 000€ à 50 000€",
      conditions: ["Création ou reprise", "Apport personnel", "Accompagnement"],
      procedure: "Présentation devant comité bénévoles",
    },
    {
      nom: "Subvention Conseil Départemental",
      montant: "30% investissement max 10 000€",
      conditions: ["Création d'emplois", "Innovation", "Développement durable"],
      procedure: "Dossier avant investissement",
    },
  ],

  mentalite_locale: {
    valeurs: ["Authenticité", "Proximité", "Qualité", "Tradition", "Bon sens"],
    comportements: [
      "Fidélité aux commerces locaux",
      "Méfiance des concepts trop 'parisiens'",
      "Appréciation du contact humain",
      "Sensibilité au rapport qualité-prix",
      "Attachement au patrimoine local",
    ],
    conseils_marketing: [
      "Mettre en avant l'origine locale",
      "Privilégier le bouche-à-oreille",
      "Participer aux événements locaux",
      "Créer du lien avec les clients",
      "Respecter les codes culturels",
    ],
  },
}

// Questions prédéfinies avec réponses intelligentes
const PREDEFINED_RESPONSES = {
  "Je veux ouvrir un restaurant au Mans, quels conseils ?": {
    response: `Excellente idée ! Le Mans a un potentiel énorme pour la restauration. Avec 143 000 habitants + 20 000 étudiants + les 250 000 visiteurs des 24H, voici mes conseils basés sur les success stories locales :

🎯 **Positionnement gagnant :**
- Cuisine traditionnelle revisitée (les Sarthois adorent !)
- Prix justes : ticket moyen 15-25€ pour le déjeuner
- Produits locaux mis en avant (Sarthe = terroir)

📍 **Zones recommandées :**
- Centre-ville : clientèle étudiante + salariés
- Quartier Gare : passage + stationnement
- Éviter les zones trop "bobo" (échecs constatés)

💡 **Spécificités locales à connaître :**
- Les Manceaux sont fidèles si tu les conquiers
- Le bouche-à-oreille est ROI ici
- Participe aux événements locaux (24H, fêtes de quartier)

🤝 **Contacts utiles :**
- CCI Sarthe pour l'étude de marché
- UMIH 72 pour les normes
- Marché des Jacobins pour sourcing local

Tu veux que je t'aide à affiner ton concept ou analyser une zone précise ?`,
    score: 85,
    tags: ["restauration", "le-mans", "conseil-implantation"],
  },

  "Quels sont les secteurs porteurs en Sarthe actuellement ?": {
    response: `Parfait timing pour cette question ! Voici les secteurs qui cartonnent en Sarthe en 2024 :

🚗 **Automobile (15 000 emplois) - ⭐⭐⭐⭐⭐**
- Électrification en cours = opportunités énormes
- Renault Le Mans recrute massivement
- Sous-traitance spécialisée très demandée

📦 **Logistique (+15% en 5 ans) - ⭐⭐⭐⭐⭐**
- Position géographique stratégique
- E-commerce en explosion
- Manque de main d'œuvre = salaires attractifs

🌾 **Agroalimentaire Bio - ⭐⭐⭐⭐**
- Circuits courts en plein boom
- Export vers Paris/Nantes
- Innovation alimentaire soutenue

💻 **Services numériques - ⭐⭐⭐⭐**
- Transformation digitale des PME
- Télétravail = nouveaux besoins
- Cybersécurité très demandée

🏰 **Tourisme expérientiel - ⭐⭐⭐**
- 24H du Mans = levier énorme
- Patrimoine sous-exploité
- Écotourisme en développement

**Mon conseil :** Combine 2 secteurs pour te différencier (ex: logistique + numérique, tourisme + agroalimentaire).

Sur quel secteur veux-tu creuser ?`,
    score: 90,
    tags: ["secteurs-porteurs", "economie", "opportunites"],
  },

  "Comment les entrepreneurs locaux ont-ils réussi ici ?": {
    response: `Excellente question ! J'ai analysé des dizaines de success stories sarthoises. Voici les patterns gagnants :

🏆 **Success Story #1 : Boulangerie Julien (Le Mans)**
- Parti d'une boulangerie classique
- Virage bio + livraison restaurants
- CA x3 en 4 ans
- **Clé :** Tradition + innovation

🚀 **Success Story #2 : TechSarthe Solutions**
- 2 ingénieurs locaux → 25 employés en 3 ans
- IA pour l'automobile
- Clients : Renault, PSA
- **Clé :** Proximité écosystème auto

🌿 **Success Story #3 : Ferme des Alpes Mancelles**
- Ferme → Agritourisme
- 150k€ CA, 80% occupation
- **Clé :** Authenticité + expérience

📊 **Les 5 facteurs de succès en Sarthe :**
1. **Ancrage local fort** (90% des réussites)
2. **Réseau relationnel** (bouche-à-oreille = or)
3. **Authenticité** (pas de "parisianisme")
4. **Prix justes** (rapport qualité-prix crucial)
5. **Innovation mesurée** (évolution, pas révolution)

❌ **Échecs typiques :**
- Concepts trop "hype" sans ancrage
- Prix déconnectés du marché local
- Méconnaissance de la mentalité sarthoise

Tu veux que j'analyse ton projet avec cette grille ?`,
    score: 88,
    tags: ["success-stories", "conseils", "mentalite-locale"],
  },

  "Quelles aides publiques pour créer en Sarthe ?": {
    response: `Super ! La Sarthe est généreuse avec ses entrepreneurs. Voici le panorama complet des aides 2024 :

💰 **Aides financières directes :**

🏛️ **CCI Sarthe - Aide création**
- Montant : jusqu'à 5 000€
- Conditions : 1ère création + siège en Sarthe
- Délai : 2 mois

🤝 **Initiative Sarthe - Prêt d'honneur**
- Montant : 2 000€ à 50 000€ (0% intérêt)
- Conditions : apport personnel + accompagnement
- Délai : 1 mois après présentation

🏛️ **Conseil Départemental**
- Subvention : 30% investissement (max 10k€)
- Conditions : création emplois + innovation
- Délai : dossier AVANT investissement

🇪🇺 **Région Pays de Loire**
- Diverses aides selon secteur
- Montants variables
- Focus : numérique, innovation, export

📋 **Accompagnement gratuit :**
- CCI Sarthe : étude marché, business plan
- BGE : formation création
- Technopole : incubation tech
- ADIE : micro-crédit

💡 **Mon conseil stratégique :**
1. Commence par Initiative Sarthe (prêt d'honneur)
2. Cumule avec aide CCI
3. Ajoute subvention départementale si éligible
4. = jusqu'à 65 000€ d'aides possibles !

**Piège à éviter :** Faire les demandes dans l'ordre chronologique.

Tu veux que je t'aide à monter ton dossier ?`,
    score: 92,
    tags: ["aides-publiques", "financement", "creation"],
  },

  "Où s'implanter : centre-ville ou périphérie ?": {
    response: `Question stratégique cruciale ! Ma réponse dépend de ton activité, mais voici l'analyse terrain :

🏙️ **Centre-ville Le Mans - Les + :**
- Passage piéton énorme
- Étudiants (20 000) + salariés
- Transports en commun
- Image de marque
- Loyers en baisse (-15% depuis 2020)

❌ **Centre-ville - Les - :**
- Stationnement compliqué
- Concurrence forte
- Horaires contraints
- Livraisons difficiles

🚗 **Périphérie - Les + :**
- Stationnement gratuit
- Loyers 2x moins chers
- Flexibilité horaires
- Clientèle motorisée
- Espaces plus grands

❌ **Périphérie - Les - :**
- Dépendance voiture
- Moins de passage
- Image moins premium
- Concurrence grandes surfaces

📊 **Mes recommandations par secteur :**

**Centre-ville gagnant :**
- Restauration rapide/étudiante
- Services aux particuliers
- Commerce de proximité
- Professions libérales

**Périphérie gagnante :**
- Commerce automobile
- Bricolage/jardinage
- Restauration familiale
- Services aux entreprises

🎯 **Zones d'opportunité 2024 :**
- **Quartier Gare** : en pleine rénovation
- **Jacobins** : cœur historique revitalisé
- **ZA Sud** : dynamique entreprises

**Mon conseil :** Visite aux heures de pointe + weekend pour sentir l'ambiance !

Dis-moi ton secteur, je t'oriente précisément ?`,
    score: 87,
    tags: ["implantation", "centre-ville", "peripherie", "le-mans"],
  },

  "Comment comprendre la mentalité client sarthoise ?": {
    response: `Excellente question ! Après 15 ans d'analyse du marché sarthois, voici le décodage complet :

🧠 **Mentalité sarthoise - Les fondamentaux :**

💚 **Valeurs clés :**
- **Authenticité** : "Pas de chichis, du vrai"
- **Proximité** : "On aime connaître qui on a en face"
- **Qualité** : "Cher mais qui dure"
- **Tradition** : "Ce qui a fait ses preuves"
- **Bon sens** : "Logique et pratique"

🛒 **Comportements d'achat typiques :**
- Fidélité extrême si conquis
- Méfiance initiale des nouveautés
- Bouche-à-oreille = prescription n°1
- Sensibilité prix mais pas que
- Appréciation du contact humain

❌ **Erreurs fatales à éviter :**
- Concepts trop "parisiens" ou "branchés"
- Vendeurs trop insistants
- Prix sans justification
- Manque de transparence
- Négliger l'accueil

✅ **Codes gagnants :**
- "Produit du terroir sarthois"
- "Entreprise familiale depuis..."
- "Conseils personnalisés"
- "Garantie satisfaction"
- "Partenaire local"

🎯 **Stratégies marketing qui marchent :**
1. **Ancrage local** : "Né en Sarthe, pour la Sarthe"
2. **Témoignages clients** : très crédibles ici
3. **Événements locaux** : 24H, foires, marchés
4. **Partenariats** : avec autres commerces locaux
5. **Transparence** : processus, origine, prix

💡 **Exemple concret :**
Au lieu de "Innovation révolutionnaire", dis "Amélioration pensée avec nos clients sarthois"

**La phrase magique :** "On fait comme ça depuis toujours, mais en mieux"

Tu veux que j'adapte ces conseils à ton secteur ?`,
    score: 89,
    tags: ["mentalite-locale", "marketing", "comportement-client", "culture-sarthoise"],
  },
}

// Configuration API (à adapter selon vos besoins)
const API_CONFIG = {
  openai: {
    endpoint: "/api/chat",
    model: "gpt-3.5-turbo",
    temperature: 0.7,
    max_tokens: 1000,
  },
  fallback_responses: [
    "C'est une excellente question ! Laisse-moi réfléchir aux spécificités sarthoises pour te donner une réponse adaptée...",
    "Intéressant ! En tant qu'IA spécialisée sur la Sarthe, je peux t'apporter un éclairage territorial unique...",
    "Parfait ! Mon expertise du territoire sarthois va m'aider à te conseiller précisément...",
  ],
}
