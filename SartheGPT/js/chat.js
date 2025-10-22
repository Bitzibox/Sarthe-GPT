// Gestionnaire de chat principal
class SartheGPTChat {
  constructor() {
    this.messages = []
    this.isExpertMode = false
    this.interactionCount = 0
    this.isTyping = false

    this.initializeElements()
    this.loadChatHistory()
    this.bindEvents()
  }

  initializeElements() {
    this.chatMessages = document.getElementById("chatMessages")
    this.messageInput = document.getElementById("messageInput")
    this.sendButton = document.getElementById("sendMessage")
    this.typingIndicator = document.getElementById("typingIndicator")
    this.expertToggle = document.getElementById("expertMode")
    this.exportButton = document.getElementById("exportChat")
    this.characterCount = document.querySelector(".character-count")
    this.suggestionButtons = document.querySelectorAll(".suggestion-btn")
    this.ctaPopup = document.getElementById("ctaPopup")
  }

  bindEvents() {
    // Envoi de message
    this.sendButton.addEventListener("click", () => this.sendMessage())
    this.messageInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault()
        this.sendMessage()
      }
    })

    // Compteur de caractères
    this.messageInput.addEventListener("input", () => {
      const count = this.messageInput.value.length
      this.characterCount.textContent = `${count}/500`

      if (count > 450) {
        this.characterCount.style.color = "#E67E22"
      } else {
        this.characterCount.style.color = "#999"
      }
    })

    // Suggestions prédéfinies
    this.suggestionButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const question = btn.dataset.question
        this.messageInput.value = question
        this.sendMessage()
      })
    })

    // Mode expert
    this.expertToggle.addEventListener("click", () => {
      this.isExpertMode = !this.isExpertMode
      this.expertToggle.classList.toggle("active")

      // Animation feedback
      this.showSystemMessage(
        this.isExpertMode
          ? "🎓 Mode Expert activé ! Réponses plus détaillées avec références historiques et insights poussés."
          : "👍 Mode Standard activé ! Réponses concises et actionnables.",
      )
    })

    // Export PDF
    this.exportButton.addEventListener("click", () => this.exportToPDF())

    // Fermeture popup CTA
    const popupClose = document.querySelector(".popup-close")
    if (popupClose) {
      popupClose.addEventListener("click", () => this.hideCtaPopup())
    }

    // Actions CTA
    const ctaPrimary = document.querySelector(".cta-primary")
    const ctaSecondary = document.querySelector(".cta-secondary")

    if (ctaPrimary) {
      ctaPrimary.addEventListener("click", () => {
        window.open("https://elsyvia.com/services-ia", "_blank")
        this.hideCtaPopup()
      })
    }

    if (ctaSecondary) {
      ctaSecondary.addEventListener("click", () => {
        window.open("https://calendly.com/elsyvia/rdv-gratuit", "_blank")
        this.hideCtaPopup()
      })
    }
  }

  async sendMessage() {
    const message = this.messageInput.value.trim()
    if (!message || this.isTyping) return

    // Ajouter message utilisateur
    this.addMessage(message, "user")
    this.messageInput.value = ""
    this.characterCount.textContent = "0/500"

    // Cacher les suggestions après le premier message
    if (this.interactionCount === 0) {
      document.querySelector(".suggestions-container").style.display = "none"
    }

    this.interactionCount++

    // Afficher indicateur de frappe
    this.showTypingIndicator()

    try {
      // Générer réponse
      const response = await this.generateResponse(message)

      // Délai réaliste pour l'UX
      await this.delay(1500 + Math.random() * 1000)

      this.hideTypingIndicator()
      this.addMessage(response.text, "ai", response.score)

      // Sauvegarder conversation
      this.saveChatHistory()

      // Afficher CTA après 3 interactions
      if (this.interactionCount === 3) {
        setTimeout(() => this.showCtaPopup(), 2000)
      }
    } catch (error) {
      console.error("Erreur génération réponse:", error)
      this.hideTypingIndicator()
      this.addMessage("Désolé, je rencontre un petit problème technique. Peux-tu reformuler ta question ? 🤖", "ai")
    }
  }

  async generateResponse(message) {
    // Vérifier si c'est une question prédéfinie
    const predefinedResponse = window.PREDEFINED_RESPONSES[message]
    if (predefinedResponse) {
      return {
        text: this.isExpertMode ? this.enhanceWithExpertMode(predefinedResponse.response) : predefinedResponse.response,
        score: predefinedResponse.score,
      }
    }

    // Analyser le message pour détecter les intentions
    const intent = this.analyzeIntent(message)
    const contextualResponse = this.generateContextualResponse(message, intent)

    return {
      text: contextualResponse,
      score: this.calculateRelevanceScore(message, intent),
    }
  }

  analyzeIntent(message) {
    const msg = message.toLowerCase()

    // Intentions principales
    if (msg.includes("restaurant") || (msg.includes("ouvrir") && msg.includes("manger"))) {
      return "restauration"
    }
    if (msg.includes("secteur") || msg.includes("porteur") || msg.includes("opportunité")) {
      return "secteurs_porteurs"
    }
    if (msg.includes("aide") || msg.includes("financement") || msg.includes("subvention")) {
      return "aides_financieres"
    }
    if (msg.includes("implanter") || msg.includes("où") || msg.includes("zone")) {
      return "implantation"
    }
    if (msg.includes("client") || msg.includes("mentalité") || msg.includes("comportement")) {
      return "mentalite_locale"
    }
    if (msg.includes("success") || msg.includes("réussi") || msg.includes("exemple")) {
      return "success_stories"
    }
    if (msg.includes("échec") || msg.includes("erreur") || msg.includes("éviter")) {
      return "echecs_analyses"
    }

    return "general"
  }

  generateContextualResponse(message, intent) {
    const responses = {
      restauration: this.generateRestaurantAdvice(message),
      secteurs_porteurs: this.generateSectorAdvice(message),
      aides_financieres: this.generateFundingAdvice(message),
      implantation: this.generateLocationAdvice(message),
      mentalite_locale: this.generateMentalityAdvice(message),
      success_stories: this.generateSuccessStoryAdvice(message),
      echecs_analyses: this.generateFailureAnalysis(message),
      general: this.generateGeneralAdvice(message),
    }

    let response = responses[intent] || responses.general

    if (this.isExpertMode) {
      response = this.enhanceWithExpertMode(response)
    }

    return response
  }

  generateRestaurantAdvice(message) {
    const advice = [
      "🍽️ **Conseil restauration en Sarthe :**\n\n",
      "La restauration fonctionne bien ici si tu respectes quelques règles d'or :\n\n",
      "• **Prix justes** : ticket moyen 15-25€ déjeuner, 25-35€ dîner\n",
      "• **Produits locaux** : les Sarthois adorent le terroir\n",
      "• **Authenticité** : évite les concepts trop 'parisiens'\n",
      "• **Proximité** : crée du lien avec tes clients\n\n",
      "**Zones recommandées :** Centre-ville Le Mans, Quartier Gare, ou communes dynamiques comme La Flèche.\n\n",
      "Tu as déjà une idée de concept ? Je peux t'aider à l'affiner ! 🎯",
    ]

    return advice.join("")
  }

  generateSectorAdvice(message) {
    const sectors = window.SARTHE_KNOWLEDGE_BASE.secteurs_porteurs
    let response = "📈 **Secteurs porteurs en Sarthe 2024 :**\n\n"

    sectors.slice(0, 3).forEach((sector, index) => {
      const stars = "⭐".repeat(5 - index)
      response += `**${sector.nom}** ${stars}\n`
      response += `${sector.description}\n`
      response += `💡 Opportunités : ${sector.opportunites.slice(0, 2).join(", ")}\n\n`
    })

    response += "Sur quel secteur veux-tu creuser ? Je peux te donner des conseils précis ! 🎯"

    return response
  }

  generateFundingAdvice(message) {
    const aides = window.SARTHE_KNOWLEDGE_BASE.aides_locales
    let response = "💰 **Aides disponibles en Sarthe :**\n\n"

    aides.forEach((aide) => {
      response += `**${aide.nom}**\n`
      response += `💵 Montant : ${aide.montant}\n`
      response += `📋 Conditions : ${aide.conditions.join(", ")}\n\n`
    })

    response += "**Mon conseil :** Cumule plusieurs aides ! Tu peux obtenir jusqu'à 65 000€ d'accompagnement.\n\n"
    response += "Tu veux que je t'aide à monter ton dossier ? 🤝"

    return response
  }

  generateLocationAdvice(message) {
    return `📍 **Choix d'implantation en Sarthe :**

**Le Mans Centre-ville :**
✅ Passage piéton, étudiants, transports
❌ Stationnement, loyers plus élevés

**Le Mans Périphérie :**
✅ Stationnement gratuit, loyers -50%
❌ Dépendance voiture, moins de passage

**Villes moyennes (La Flèche, Sablé) :**
✅ Loyers attractifs, clientèle fidèle
❌ Marché plus restreint

**Mon conseil :** Visite aux heures de pointe pour sentir l'ambiance !

Dis-moi ton secteur d'activité, je t'oriente précisément ? 🎯`
  }

  generateMentalityAdvice(message) {
    const mentalite = window.SARTHE_KNOWLEDGE_BASE.mentalite_locale
    let response = "🧠 **Mentalité client sarthoise :**\n\n"

    response += "**Valeurs clés :** " + mentalite.valeurs.join(", ") + "\n\n"

    response += "**Comportements typiques :**\n"
    mentalite.comportements.slice(0, 3).forEach((comp) => {
      response += `• ${comp}\n`
    })

    response += "\n**Conseils marketing gagnants :**\n"
    mentalite.conseils_marketing.slice(0, 3).forEach((conseil) => {
      response += `• ${conseil}\n`
    })

    response += "\n**La phrase magique :** 'On fait comme ça depuis toujours, mais en mieux' 💡"

    return response
  }

  generateSuccessStoryAdvice(message) {
    const stories = window.SARTHE_KNOWLEDGE_BASE.success_stories
    const randomStory = stories[Math.floor(Math.random() * stories.length)]

    return `🏆 **Success Story : ${randomStory.entreprise}**

**Le défi :** ${randomStory.histoire}

**Secteur :** ${randomStory.secteur} (${randomStory.lieu})

**Clés du succès :**
${randomStory.cles_succes.map((cle) => `• ${cle}`).join("\n")}

**Leçon à retenir :** ${randomStory.lecon}

Cette histoire t'inspire ? Je peux analyser ton projet avec les mêmes critères de succès ! 🎯`
  }

  generateFailureAnalysis(message) {
    const echecs = window.SARTHE_KNOWLEDGE_BASE.echecs_analyses
    const randomEchec = echecs[Math.floor(Math.random() * echecs.length)]

    return `⚠️ **Analyse d'échec : ${randomEchec.entreprise}**

**Ce qui s'est passé :** ${randomEchec.echec}

**Secteur :** ${randomEchec.secteur} (${randomEchec.lieu})

**Raisons de l'échec :**
${randomEchec.raisons.map((raison) => `• ${raison}`).join("\n")}

**Leçon cruciale :** ${randomEchec.lecon}

Ces erreurs sont évitables ! Tu veux qu'on analyse ton projet pour éviter ces pièges ? 🛡️`
  }

  generateGeneralAdvice(message) {
    const fallbacks = [
      `Excellente question ! En tant qu'IA spécialisée sur la Sarthe, je peux t'apporter un éclairage territorial unique.

Pour te donner des conseils précis, peux-tu me dire :
• Quel est ton secteur d'activité ?
• Tu vises quelle zone en Sarthe ?
• Tu es en phase de réflexion ou déjà lancé ?

Avec ces infos, je pourrai puiser dans ma base de connaissances locales pour t'accompagner au mieux ! 🎯`,

      `Intéressant ! Mon expertise du territoire sarthois va m'aider à te conseiller précisément.

La Sarthe a ses spécificités : mentalité locale authentique, secteurs porteurs identifiés, écosystème d'acteurs bien structuré.

Pour t'orienter au mieux, dis-moi :
• Quel type de projet tu développes ?
• Tu connais déjà la Sarthe ou c'est une découverte ?
• Tu cherches plutôt des infos générales ou du conseil personnalisé ?

Je suis là pour t'accompagner ! 🤝`,
    ]

    return fallbacks[Math.floor(Math.random() * fallbacks.length)]
  }

  enhanceWithExpertMode(response) {
    const expertAddons = [
      "\n\n🎓 **Analyse experte :**",
      "\n• Données historiques : tendances sur 10 ans",
      "\n• Benchmark concurrentiel territorial",
      "\n• Insights culturels approfondis",
      "\n• Recommandations stratégiques personnalisées",
    ]

    return response + expertAddons.join("")
  }

  calculateRelevanceScore(message, intent) {
    // Score basé sur la pertinence de l'intention détectée
    const scores = {
      restauration: 85,
      secteurs_porteurs: 90,
      aides_financieres: 92,
      implantation: 87,
      mentalite_locale: 89,
      success_stories: 88,
      echecs_analyses: 86,
      general: 75,
    }

    return scores[intent] || 75
  }

  addMessage(text, sender, score = null) {
    const messageDiv = document.createElement("div")
    messageDiv.className = `message ${sender}`

    if (sender === "ai") {
      messageDiv.innerHTML = `
                <div class="ai-avatar">
                    <svg viewBox="0 0 100 100" class="avatar-svg">
                        <circle cx="50" cy="50" r="45" fill="#2D5F3F"/>
                        <circle cx="35" cy="40" r="3" fill="#F5F1E8"/>
                        <circle cx="65" cy="40" r="3" fill="#F5F1E8"/>
                        <path d="M35 60 Q50 70 65 60" stroke="#F5F1E8" stroke-width="2" fill="none"/>
                        <path d="M45 25 Q50 20 55 25" stroke="#E67E22" stroke-width="3" fill="none"/>
                    </svg>
                </div>
                <div class="message-content">
                    ${this.formatMessage(text)}
                    ${score ? `<div class="confidence-score">Pertinence : ${score}%</div>` : ""}
                </div>
            `
    } else {
      messageDiv.innerHTML = `
                <div class="message-content">
                    ${this.formatMessage(text)}
                </div>
            `
    }

    this.chatMessages.appendChild(messageDiv)
    this.scrollToBottom()

    // Sauvegarder dans l'historique
    this.messages.push({
      text,
      sender,
      timestamp: new Date().toISOString(),
      score,
    })
  }

  formatMessage(text) {
    // Conversion markdown simple
    return text
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>")
      .replace(/\n/g, "<br>")
      .replace(/• /g, "• ")
  }

  showSystemMessage(text) {
    const systemDiv = document.createElement("div")
    systemDiv.className = "system-message"
    systemDiv.innerHTML = `
            <div class="system-content">
                ${text}
            </div>
        `

    this.chatMessages.appendChild(systemDiv)
    this.scrollToBottom()

    // Auto-suppression après 5 secondes
    setTimeout(() => {
      if (systemDiv.parentNode) {
        systemDiv.remove()
      }
    }, 5000)
  }

  showTypingIndicator() {
    this.isTyping = true
    this.typingIndicator.classList.remove("hidden")
    this.scrollToBottom()
  }

  hideTypingIndicator() {
    this.isTyping = false
    this.typingIndicator.classList.add("hidden")
  }

  showCtaPopup() {
    this.ctaPopup.classList.remove("hidden")
    document.body.style.overflow = "hidden"
  }

  hideCtaPopup() {
    this.ctaPopup.classList.add("hidden")
    document.body.style.overflow = "auto"
  }

  scrollToBottom() {
    setTimeout(() => {
      this.chatMessages.scrollTop = this.chatMessages.scrollHeight
    }, 100)
  }

  saveChatHistory() {
    try {
      localStorage.setItem("sarthe_gpt_history", JSON.stringify(this.messages))
    } catch (error) {
      console.warn("Impossible de sauvegarder l'historique:", error)
    }
  }

  loadChatHistory() {
    try {
      const saved = localStorage.getItem("sarthe_gpt_history")
      if (saved) {
        this.messages = JSON.parse(saved)
        // Recharger les messages (optionnel pour MVP)
      }
    } catch (error) {
      console.warn("Impossible de charger l'historique:", error)
      this.messages = []
    }
  }

  async exportToPDF() {
    // Simulation export PDF (à implémenter avec une vraie librairie)
    this.showSystemMessage("📄 Export PDF en cours... (Fonctionnalité à venir dans la version complète)")

    // TODO: Implémenter avec jsPDF ou similaire
    console.log("Export PDF:", this.messages)
  }

  delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }
}

// Styles CSS additionnels pour les nouveaux éléments
const additionalStyles = `
.system-message {
    text-align: center;
    margin: 10px 0;
    animation: fadeIn 0.3s ease;
}

.system-content {
    background: linear-gradient(135deg, #E67E22, #d35400);
    color: white;
    padding: 10px 20px;
    border-radius: 20px;
    display: inline-block;
    font-size: 0.9rem;
    box-shadow: 0 2px 10px rgba(230, 126, 34, 0.3);
}

.confidence-score {
    font-size: 0.8rem;
    color: #999;
    margin-top: 8px;
    font-style: italic;
}

@media (max-width: 480px) {
    .system-content {
        padding: 8px 16px;
        font-size: 0.85rem;
    }
}
`

// Injection des styles additionnels
const styleSheet = document.createElement("style")
styleSheet.textContent = additionalStyles
document.head.appendChild(styleSheet)
