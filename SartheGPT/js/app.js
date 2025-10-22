// Application principale Sarthe GPT
class SartheGPTApp {
  constructor() {
    this.currentSlide = 0
    this.totalSlides = 3
    this.slideInterval = null
    this.chat = null
    this.startX = 0
    this.endX = 0

    this.initializeApp()
  }

  initializeApp() {
    // Vérifier si l'utilisateur a déjà vu l'onboarding
    const hasSeenOnboarding = localStorage.getItem("sarthe_gpt_onboarding_seen")

    if (hasSeenOnboarding) {
      this.showChatInterface()
    } else {
      this.showOnboarding()
    }
  }

  showOnboarding() {
    const onboarding = document.getElementById("onboarding")
    const chatInterface = document.getElementById("chatInterface")

    onboarding.classList.remove("hidden")
    chatInterface.classList.add("hidden")

    this.initializeOnboarding()
  }

  showChatInterface() {
    const onboarding = document.getElementById("onboarding")
    const chatInterface = document.getElementById("chatInterface")

    onboarding.classList.add("hidden")
    chatInterface.classList.remove("hidden")

    // Initialiser le chat si pas déjà fait
    if (!this.chat) {
      this.chat = new window.SartheGPTChat() // Assuming SartheGPTChat is globally available
    }
  }

  initializeOnboarding() {
    // Gestion des slides
    this.startSlideshow()

    // Gestion des indicateurs
    const indicators = document.querySelectorAll(".indicator")
    indicators.forEach((indicator, index) => {
      indicator.addEventListener("click", () => {
        this.goToSlide(index)
      })
    })

    // Bouton de démarrage
    const startButton = document.getElementById("startChat")
    startButton.addEventListener("click", () => {
      this.startChat()
    })

    // Gestion du swipe sur mobile
    this.initializeTouchGestures()
  }

  startSlideshow() {
    this.slideInterval = setInterval(() => {
      this.nextSlide()
    }, 4000) // Change de slide toutes les 4 secondes
  }

  stopSlideshow() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval)
      this.slideInterval = null
    }
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.totalSlides
    this.updateSlide()
  }

  goToSlide(index) {
    this.currentSlide = index
    this.updateSlide()

    // Redémarrer le slideshow
    this.stopSlideshow()
    this.startSlideshow()
  }

  updateSlide() {
    // Mettre à jour les slides
    const slides = document.querySelectorAll(".slide")
    const indicators = document.querySelectorAll(".indicator")

    slides.forEach((slide, index) => {
      if (index === this.currentSlide) {
        slide.classList.add("active")
      } else {
        slide.classList.remove("active")
      }
    })

    indicators.forEach((indicator, index) => {
      if (index === this.currentSlide) {
        indicator.classList.add("active")
      } else {
        indicator.classList.remove("active")
      }
    })
  }

  initializeTouchGestures() {
    const slidesContainer = document.querySelector(".slides-container")

    slidesContainer.addEventListener("touchstart", (e) => {
      this.startX = e.touches[0].clientX
    })

    slidesContainer.addEventListener("touchend", (e) => {
      this.endX = e.changedTouches[0].clientX
      this.handleSwipe()
    })
  }

  handleSwipe() {
    const threshold = 50 // Seuil minimum pour déclencher le swipe
    const diff = this.startX - this.endX

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        // Swipe vers la gauche - slide suivante
        this.nextSlide()
      } else {
        // Swipe vers la droite - slide précédente
        this.currentSlide = this.currentSlide > 0 ? this.currentSlide - 1 : this.totalSlides - 1
        this.updateSlide()
      }

      // Redémarrer le slideshow
      this.stopSlideshow()
      this.startSlideshow()
    }
  }

  startChat() {
    // Marquer l'onboarding comme vu
    localStorage.setItem("sarthe_gpt_onboarding_seen", "true")

    // Animation de transition
    const onboarding = document.getElementById("onboarding")
    onboarding.style.transform = "translateY(-100%)"
    onboarding.style.opacity = "0"

    setTimeout(() => {
      this.showChatInterface()

      // Animation d'entrée du chat
      const chatInterface = document.getElementById("chatInterface")
      chatInterface.style.transform = "translateY(100%)"
      chatInterface.style.opacity = "0"

      setTimeout(() => {
        chatInterface.style.transform = "translateY(0)"
        chatInterface.style.opacity = "1"
        chatInterface.style.transition = "all 0.5s ease"
      }, 50)
    }, 500)

    this.stopSlideshow()
  }

  // Méthodes utilitaires
  resetOnboarding() {
    localStorage.removeItem("sarthe_gpt_onboarding_seen")
    location.reload()
  }

  getAnalytics() {
    return {
      onboardingCompleted: localStorage.getItem("sarthe_gpt_onboarding_seen") === "true",
      chatMessages: this.chat ? this.chat.messages.length : 0,
      expertModeUsed: this.chat ? this.chat.isExpertMode : false,
      interactionCount: this.chat ? this.chat.interactionCount : 0,
    }
  }
}

// Initialisation de l'application
document.addEventListener("DOMContentLoaded", () => {
  console.log("🌾 Sarthe GPT - Assistant IA Territorial")
  console.log("Propulsé par Elsyvia - Experts IA Territoriaux")

  // Initialiser l'application
  window.sartheGPT = new SartheGPTApp()

  // Debug mode (à retirer en production)
  if (window.location.search.includes("debug=true")) {
    window.resetOnboarding = () => window.sartheGPT.resetOnboarding()
    window.getAnalytics = () => console.log(window.sartheGPT.getAnalytics())
    console.log("🔧 Mode debug activé")
    console.log("Commandes disponibles: resetOnboarding(), getAnalytics()")
  }

  // Gestion des erreurs globales
  window.addEventListener("error", (e) => {
    console.error("Erreur Sarthe GPT:", e.error)

    // Afficher un message d'erreur user-friendly
    if (window.sartheGPT.chat) {
      window.sartheGPT.chat.showSystemMessage(
        "⚠️ Une erreur technique s'est produite. Rechargez la page si le problème persiste.",
      )
    }
  })

  // Performance monitoring
  window.addEventListener("load", () => {
    const loadTime = performance.now()
    console.log(`⚡ Application chargée en ${Math.round(loadTime)}ms`)

    // Analytics simples (à remplacer par une vraie solution)
    if (typeof window.gtag !== "undefined") {
      // Assuming gtag is globally available
      window.gtag("event", "app_loaded", {
        load_time: Math.round(loadTime),
        user_agent: navigator.userAgent,
      })
    }
  })
})

// Service Worker pour le cache (optionnel pour MVP)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log("SW registered: ", registration)
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError)
      })
  })
}

// Utilitaires globaux
window.SartheGPTUtils = {
  // Formater les nombres français
  formatNumber: (num) => {
    return new Intl.NumberFormat("fr-FR").format(num)
  },

  // Calculer la distance entre deux villes sarthoises
  calculateDistance: (city1, city2) => {
    const distances = {
      "Le Mans-La Flèche": 42,
      "Le Mans-Sablé": 61,
      "La Flèche-Sablé": 25,
    }

    const key = `${city1}-${city2}`
    return distances[key] || distances[`${city2}-${city1}`] || "Distance non disponible"
  },

  // Vérifier si c'est un jour ouvrable
  isBusinessDay: () => {
    const day = new Date().getDay()
    return day >= 1 && day <= 5
  },

  // Obtenir l'heure locale sarthoise
  getSartheTime: () => {
    return new Date().toLocaleString("fr-FR", {
      timeZone: "Europe/Paris",
      hour: "2-digit",
      minute: "2-digit",
    })
  },
}
