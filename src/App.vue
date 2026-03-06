<template>
  <div id="app">
    <Navbar @scroll="scrollTo" />
    <div class="parent">
      <Home />
      <About id="about" />
      <Skills id="skills" />
      <Portfolio id="portfolio" />
      <Recommendation id="reviews" />
      <Contact id="contact" />
      <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Recommendation from "./components/Recommendation";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Navbar,
    Home,
    About,
    Skills,
    Portfolio,
    Recommendation,
    Contact,
    Footer,
  },
  mounted() {
    ["about", "skills", "portfolio", "contact"].forEach((l) => {
      if (window.location.href.includes(l)) {
        const el = document.getElementById(l);
        if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: "smooth" });
      }
    });

    // IntersectionObserver for fade-in animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
  },
  methods: {
    scrollTo(ele) {
      if (ele === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const el = document.getElementById(ele);
        if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: "smooth" });
      }
    },
  },
};
</script>

<style>
:root {
  --bg-page: #0a0a0a;
  --bg-card: #111111;
  --bg-card-alt: #161616;
  --accent: #ff5c00;
  --text-primary: #f0f0f0;
  --text-secondary: #888888;
  --border: rgba(255, 255, 255, 0.08);
}

html {
  scroll-behavior: smooth;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: var(--bg-page);
  color: var(--text-primary);
  font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 16px;
  line-height: 1.7;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  width: 100%;
  background-color: var(--bg-page);
}

.parent {
  position: relative;
}

/* Section title style */
.section-label {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 4px;
  color: var(--text-secondary);
}

/* Fade-in animation via IntersectionObserver */
.fade-in {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Scrollbar */
::-webkit-scrollbar {
  width: 4px;
}
::-webkit-scrollbar-track {
  background: var(--bg-page);
}
::-webkit-scrollbar-thumb {
  background: #333;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* Utility */
.accent {
  color: var(--accent);
}

/* Container */
.k-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

@media (max-width: 768px) {
  .k-container {
    padding: 0 16px;
  }
}
</style>