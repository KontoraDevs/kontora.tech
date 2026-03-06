<template>
  <nav class="navbar" :class="{ 'scrolled': scrolled }">
    <div class="k-container nav-inner">
      <a class="nav-logo" href="/" @click.prevent="$emit('scroll', 'home')">KONTORA</a>

      <button class="nav-burger" @click="menuOpen = !menuOpen" :class="{ 'open': menuOpen }" aria-label="Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div class="nav-links" :class="{ 'open': menuOpen }">
        <a href="/about" @click.prevent="nav('about')">О нас</a>
        <a href="/portfolio" @click.prevent="nav('portfolio')">Портфолио</a>
        <a href="/contact" @click.prevent="nav('contact')">Контакты</a>
        <a href="/contact" class="nav-cta" @click.prevent="nav('contact')">Обсудить проект</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      scrolled: false,
      menuOpen: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      this.scrolled = window.scrollY > 20;
    },
    nav(section) {
      this.menuOpen = false;
      this.$emit("scroll", section);
    },
  },
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(10, 10, 10, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid transparent;
  transition: border-color 0.3s;
  padding: 0 0;
}

.navbar.scrolled {
  border-bottom-color: rgba(255, 255, 255, 0.08);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 68px;
}

.nav-logo {
  font-size: 18px;
  font-weight: 800;
  color: #f0f0f0;
  text-decoration: none;
  letter-spacing: 2px;
  transition: color 0.2s;
}

.nav-logo:hover {
  color: #ff5c00;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 32px;
}

.nav-links a {
  font-size: 14px;
  font-weight: 500;
  color: #888888;
  text-decoration: none;
  transition: color 0.2s;
}

.nav-links a:hover {
  color: #f0f0f0;
}

.nav-cta {
  border: 1px solid #ff5c00 !important;
  color: #ff5c00 !important;
  padding: 10px 20px;
  border-radius: 6px;
  transition: background 0.2s, color 0.2s !important;
}

.nav-cta:hover {
  background: #ff5c00 !important;
  color: #000 !important;
}

/* Burger */
.nav-burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.nav-burger span {
  display: block;
  width: 24px;
  height: 2px;
  background: #f0f0f0;
  border-radius: 2px;
  transition: all 0.3s;
}

.nav-burger.open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.nav-burger.open span:nth-child(2) {
  opacity: 0;
}
.nav-burger.open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

@media (max-width: 768px) {
  .nav-burger {
    display: flex;
  }

  .nav-links {
    display: none;
    position: absolute;
    top: 68px;
    left: 0;
    right: 0;
    flex-direction: column;
    background: rgba(10, 10, 10, 0.97);
    backdrop-filter: blur(20px);
    padding: 24px 16px;
    gap: 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }

  .nav-links.open {
    display: flex;
  }

  .nav-cta {
    text-align: center;
  }
}
</style>