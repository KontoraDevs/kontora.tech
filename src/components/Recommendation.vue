<template>
  <section class="reviews">
    <div class="k-container">

      <div class="section-header fade-in">
        <span class="section-label">Отзывы клиентов</span>
      </div>

      <div class="reviews-grid">
        <div class="review-card fade-in" v-for="(review, idx) in reviews" :key="idx" :style="{ transitionDelay: (idx * 0.1) + 's' }">
          <div class="quote-icon">"</div>
          <p class="review-text">{{ review.title }}</p>
          <div class="review-author">
            <span class="author-name">{{ review.author }}</span>
            <span class="author-meta">{{ review.position }}, {{ review.company }}</span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
// TODO: заменить на реальные отзывы
const reviews = [
  {
    title: "Команда Kontora выполнила проект точно в срок и с высоким качеством. Внедрили нестандартное решение, которое ускорило работу нашего сайта в несколько раз. Рекомендуем.",
    author: "Алексей К.",
    position: "Директор",
    company: "Getpolis",
  },
  {
    title: "Работали над созданием интернет-магазина. Ребята вникли в задачу, предложили удобный UX. Результат превзошёл ожидания — конверсия выросла ощутимо.",
    author: "Мария Д.",
    position: "Основатель",
    company: "Entomosphera",
  },
  {
    title: "Разработали лендинг для нашего фестиваля. Всё сделано аккуратно, без задержек. Приятно работать с командой, которая понимает задачу с первого раза.",
    author: "Игорь С.",
    position: "Организатор",
    company: "Степная История",
  },
];

export default {
  name: "Recommendation",
  data() {
    return { reviews };
  },
};
</script>

<style scoped>
.reviews {
  padding: 100px 0;
  background-color: #111111;
}

.section-header {
  margin-bottom: 56px;
}

.reviews-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.review-card {
  background: #161616;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  transition: border-color 0.3s, transform 0.3s;
}

.review-card:hover {
  border-color: rgba(255, 92, 0, 0.3);
  transform: translateY(-4px);
}

.quote-icon {
  font-size: 72px;
  line-height: 0.6;
  color: #ff5c00;
  font-family: Georgia, serif;
  font-weight: 700;
  opacity: 0.6;
}

.review-text {
  font-size: 15px;
  color: #c0c0c0;
  line-height: 1.7;
  flex: 1;
}

.review-author {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-top: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.author-name {
  font-size: 15px;
  font-weight: 700;
  color: #f0f0f0;
}

.author-meta {
  font-size: 13px;
  color: #666666;
}

@media (max-width: 1024px) {
  .reviews-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .reviews {
    padding: 80px 0;
  }

  .reviews-grid {
    grid-template-columns: 1fr;
  }
}
</style>