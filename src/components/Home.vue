<template>
  <section class="hero">
    <div class="hero-blob"></div>
    <div class="k-container">
      <div class="hero-content">
        <div class="hero-label">Веб-студия · Россия</div>
        <h1 class="hero-h1">
          Делаем сайты,<br />
          которые <span class="accent">работают.</span>
        </h1>
        <p class="hero-sub">
          Разрабатываем сложные веб-приложения и лендинги под ключ.
          Берёмся за нестандартные задачи — решаем их быстро и качественно.
        </p>
        <div class="hero-ctas">
          <button class="btn-primary" @click="scrollTo('contact')">Обсудить проект</button>
          <button class="btn-secondary" @click="scrollTo('portfolio')">Смотреть портфолио</button>
        </div>
        <div class="hero-metrics">
          <span>5 лет опыта</span>
          <span class="dot">·</span>
          <span>47 проектов</span>
          <span class="dot">·</span>
          <span>Full Stack</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Home",
  methods: {
    scrollTo(section) {
      const el = document.getElementById(section);
      if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background-color: #0a0a0a;
}

/* Gradient blob */
.hero-blob {
  position: absolute;
  top: -20%;
  right: -10%;
  width: 700px;
  height: 700px;
  border-radius: 50%;
  background: radial-gradient(circle at center, rgba(255, 92, 0, 0.15) 0%, rgba(255, 140, 0, 0.1) 40%, transparent 70%);
  animation: blob-move 8s ease-in-out infinite;
  pointer-events: none;
  filter: blur(40px);
}

@keyframes blob-move {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(-30px, 20px) scale(1.05); }
  66% { transform: translate(20px, -20px) scale(0.95); }
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 720px;
  padding: 100px 0 80px;
}

.hero-label {
  display: inline-flex;
  align-items: center;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #888888;
  border: 1px solid rgba(255, 255, 255, 0.12);
  padding: 6px 14px;
  border-radius: 100px;
  margin-bottom: 32px;
}

.hero-h1 {
  font-size: clamp(40px, 6vw, 64px);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -2px;
  color: #f0f0f0;
  margin-bottom: 24px;
}

.hero-sub {
  font-size: 18px;
  color: #888888;
  line-height: 1.7;
  max-width: 560px;
  margin-bottom: 40px;
}

.hero-ctas {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 40px;
}

.btn-primary {
  background: #ff5c00;
  color: #000;
  font-weight: 700;
  font-size: 15px;
  padding: 16px 32px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.2s;
  font-family: inherit;
}

.btn-primary:hover {
  opacity: 0.9;
  transform: translateY(-2px);
}

.btn-secondary {
  background: transparent;
  color: #f0f0f0;
  font-weight: 500;
  font-size: 15px;
  padding: 16px 32px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  cursor: pointer;
  transition: border-color 0.2s, background 0.2s, transform 0.2s;
  font-family: inherit;
}

.btn-secondary:hover {
  border-color: rgba(255, 255, 255, 0.4);
  background: rgba(255, 255, 255, 0.04);
  transform: translateY(-2px);
}

.hero-metrics {
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 14px;
  color: #888888;
  font-weight: 500;
}

.hero-metrics .dot {
  opacity: 0.4;
}

@media (max-width: 768px) {
  .hero-h1 {
    letter-spacing: -1px;
  }

  .hero-sub {
    font-size: 16px;
  }

  .hero-blob {
    width: 400px;
    height: 400px;
    top: 0;
    right: -20%;
  }

  .hero-ctas {
    flex-direction: column;
  }

  .btn-primary, .btn-secondary {
    text-align: center;
    width: 100%;
  }
}
</style>