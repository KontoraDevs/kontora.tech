<template>
  <section class="skills">
    <div class="k-container">
      <div class="section-header fade-in">
        <span class="section-label">Технологии</span>
      </div>
    </div>

    <!-- Row 1: left to right -->
    <div class="marquee-wrapper" @mouseenter="pauseRow1 = true" @mouseleave="pauseRow1 = false">
      <div class="marquee-track" :class="{ paused: pauseRow1 }">
        <div class="marquee-content">
          <span class="tech-tag" v-for="tag in row1" :key="'a-' + tag">{{ tag }}</span>
        </div>
        <div class="marquee-content" aria-hidden="true">
          <span class="tech-tag" v-for="tag in row1" :key="'b-' + tag">{{ tag }}</span>
        </div>
      </div>
    </div>

    <!-- Row 2: right to left -->
    <div class="marquee-wrapper" @mouseenter="pauseRow2 = true" @mouseleave="pauseRow2 = false">
      <div class="marquee-track reverse" :class="{ paused: pauseRow2 }">
        <div class="marquee-content">
          <span class="tech-tag" v-for="tag in row2" :key="'c-' + tag">{{ tag }}</span>
        </div>
        <div class="marquee-content" aria-hidden="true">
          <span class="tech-tag" v-for="tag in row2" :key="'d-' + tag">{{ tag }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Skills",
  data() {
    return {
      pauseRow1: false,
      pauseRow2: false,
      row1: [
        "PHP", "Laravel", "Python", "FastAPI", "JavaScript", "TypeScript",
        "Vue.js", "Vuex", "Node.js", "HTML5", "CSS3", "SASS",
        "Tailwind", "PostgreSQL", "MySQL", "MongoDB",
      ],
      row2: [
        "Docker", "Linux", "Nginx", "Git", "REST API", "WebSockets",
        "ClickHouse", "Redis", "AWS S3", "Figma", "Bootstrap",
        "Go", "Solidity", "Blockchain", "Agile", "Scrum",
      ],
    };
  },
};
</script>

<style scoped>
.skills {
  padding: 100px 0;
  background-color: #111111;
  overflow: hidden;
}

.section-header {
  margin-bottom: 56px;
}

.marquee-wrapper {
  overflow: hidden;
  margin-bottom: 20px;
  cursor: default;
  /* Fade edges */
  mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
  -webkit-mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
}

.marquee-track {
  display: flex;
  width: max-content;
  animation: scroll-left 30s linear infinite;
}

.marquee-track.reverse {
  animation: scroll-right 25s linear infinite;
}

.marquee-track.paused {
  animation-play-state: paused;
}

.marquee-content {
  display: flex;
  gap: 12px;
  padding-right: 12px;
}

.tech-tag {
  display: inline-block;
  font-size: 13px;
  font-weight: 500;
  color: #888888;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 100px;
  padding: 8px 18px;
  white-space: nowrap;
  transition: border-color 0.2s, color 0.2s;
}

.tech-tag:hover {
  border-color: rgba(255, 92, 0, 0.4);
  color: #f0f0f0;
}

@keyframes scroll-left {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@keyframes scroll-right {
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}
</style>