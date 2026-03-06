<template>
  <section class="portfolio">
    <div class="k-container">

      <div class="section-header fade-in">
        <span class="section-label">Портфолио</span>
      </div>

      <div class="portfolio-grid">
        <PortfolioCard
          v-for="(item, idx) in projects"
          :key="item.name"
          :project="item"
          class="fade-in"
          :style="{ transitionDelay: (idx * 0.1) + 's' }"
          @show="showModalFn"
        />
      </div>
    </div>

    <!-- Modal -->
    <transition name="modal-fade">
      <div class="modal-overlay" v-if="showModal" @click.self="closeModal">
        <div class="modal-box">
          <button class="modal-close" @click="closeModal">✕</button>
          <div class="modal-images" v-if="modalProject">
            <img
              v-for="(pic, i) in modalProject.pictures.slice(0, 3)"
              :key="i"
              :src="pic.img"
              :alt="modalProject.name"
            />
          </div>
          <div class="modal-body" v-if="modalProject">
            <h2>{{ modalProject.name }}</h2>
            <p class="modal-category">{{ modalProject.category }}</p>
            <p class="modal-desc">{{ modalProject.description }}</p>
            <div class="modal-tags">
              <span class="tag" v-for="tech in modalProject.technologies" :key="tech">{{ tech }}</span>
            </div>
            <div class="modal-actions">
              <a class="btn-primary" :href="modalProject.visit" target="_blank" v-if="modalProject.visit">
                Перейти на сайт
              </a>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<script>
import PortfolioCard from "./helpers/PortfolioCard";
import info from "../../info";

export default {
  name: "Portfolio",
  components: { PortfolioCard },
  data() {
    return {
      // Only show the first 3 Kontora projects
      projects: info.portfolio.slice(0, 3),
      showModal: false,
      modalProject: null,
    };
  },
  methods: {
    showModalFn(project) {
      this.modalProject = project;
      this.showModal = true;
      document.body.style.overflow = "hidden";
    },
    closeModal() {
      this.showModal = false;
      this.modalProject = null;
      document.body.style.overflow = "";
    },
  },
};
</script>

<style scoped>
.portfolio {
  padding: 100px 0;
  background-color: #0a0a0a;
}

.section-header {
  margin-bottom: 56px;
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

/* Modal */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  backdrop-filter: blur(8px);
}

.modal-box {
  background: #111111;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  max-width: 760px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
}

.modal-close {
  position: absolute;
  top: 16px;
  right: 16px;
  background: rgba(255, 255, 255, 0.08);
  border: none;
  color: #f0f0f0;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 14px;
  z-index: 1;
  transition: background 0.2s;
  font-family: inherit;
}

.modal-close:hover {
  background: rgba(255, 255, 255, 0.16);
}

.modal-images {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px;
  border-radius: 20px 20px 0 0;
  overflow: hidden;
}

.modal-images img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.modal-body {
  padding: 28px;
}

.modal-body h2 {
  font-size: 24px;
  font-weight: 700;
  color: #f0f0f0;
  margin-bottom: 6px;
}

.modal-category {
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #ff5c00;
  margin-bottom: 16px;
}

.modal-desc {
  font-size: 16px;
  color: #888888;
  line-height: 1.7;
  margin-bottom: 20px;
}

.modal-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
}

.tag {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #888888;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 100px;
  padding: 4px 10px;
}

.modal-actions {
  display: flex;
  gap: 12px;
}

.btn-primary {
  display: inline-block;
  background: #ff5c00;
  color: #000;
  font-weight: 700;
  font-size: 14px;
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: opacity 0.2s;
  font-family: inherit;
}

.btn-primary:hover {
  opacity: 0.9;
  color: #000;
  text-decoration: none;
}

/* Modal transition */
.modal-fade-enter-active, .modal-fade-leave-active {
  transition: opacity 0.25s;
}
.modal-fade-enter, .modal-fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .portfolio-grid {
    grid-template-columns: 1fr;
  }

  .modal-images {
    grid-template-columns: 1fr;
  }

  .modal-images img {
    height: 220px;
  }
}
</style>