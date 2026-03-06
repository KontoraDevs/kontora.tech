<template>
  <div class="portfolio-card" @click="$emit('show', project)">
    <div class="card-image">
      <img :src="project.pictures[0].img" :alt="project.name" />
      <div class="card-overlay">
        <button class="overlay-btn" @click.stop="$emit('show', project)">Подробнее</button>
        <a
          class="overlay-btn outline"
          :href="project.visit"
          target="_blank"
          @click.stop
          v-if="project.visit"
        >Перейти на сайт</a>
      </div>
    </div>
    <div class="card-body">
      <div class="card-meta">
        <h3 class="card-title">{{ project.name }}</h3>
        <span class="card-category">{{ project.category }}</span>
      </div>
      <p class="card-desc">{{ project.description }}</p>
      <div class="card-tags">
        <span class="tag" v-for="tech in project.technologies.slice(0, 4)" :key="tech">{{ tech }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PortfolioCard",
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.portfolio-card {
  background: #111111;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: border-color 0.3s, transform 0.3s;
}

.portfolio-card:hover {
  border-color: rgba(255, 92, 0, 0.3);
  transform: translateY(-4px);
}

.card-image {
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.portfolio-card:hover .card-image img {
  transform: scale(1.04);
}

/* Overlay */
.card-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  opacity: 0;
  transition: opacity 0.3s;
}

.portfolio-card:hover .card-overlay {
  opacity: 1;
}

.overlay-btn {
  background: #ff5c00;
  color: #000;
  font-weight: 700;
  font-size: 14px;
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  font-family: inherit;
  transition: opacity 0.2s;
}

.overlay-btn:hover {
  opacity: 0.9;
}

.overlay-btn.outline {
  background: transparent;
  color: #f0f0f0;
  border: 1px solid rgba(255, 255, 255, 0.4);
  display: inline-block;
}

.overlay-btn.outline:hover {
  color: #f0f0f0;
  text-decoration: none;
  background: rgba(255, 255, 255, 0.08);
}

/* Card body */
.card-body {
  padding: 20px 24px 24px;
}

.card-meta {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 8px;
}

.card-title {
  font-size: 18px;
  font-weight: 700;
  color: #f0f0f0;
}

.card-category {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #ff5c00;
  white-space: nowrap;
}

.card-desc {
  font-size: 14px;
  color: #888888;
  line-height: 1.6;
  margin-bottom: 16px;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tag {
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #666666;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 100px;
  padding: 3px 8px;
}
</style>