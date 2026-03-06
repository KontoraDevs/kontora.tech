<template>
  <section class="about">
    <div class="k-container">

      <!-- Section title -->
      <div class="section-header fade-in">
        <span class="section-label">О нас</span>
      </div>

      <!-- Stats block -->
      <div class="stats-grid fade-in">
        <div class="stat-item" v-for="stat in stats" :key="stat.label">
          <span class="stat-number">{{ stat.value }}</span>
          <span class="stat-label">{{ stat.label }}</span>
        </div>
      </div>

      <!-- Team cards -->
      <div class="team-grid">
        <div class="team-card fade-in" v-for="member in team" :key="member.name">
          <div class="team-avatar">
            <img v-if="member.photo" :src="member.photo" :alt="member.name" />
            <div v-else class="avatar-placeholder">{{ member.initials }}</div>
          </div>
          <div class="team-info">
            <h3 class="team-name">{{ member.name }}</h3>
            <p class="team-role">{{ member.role }}</p>
            <div class="team-tags">
              <span class="tag" v-for="tag in member.tags" :key="tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Approach text -->
      <div class="approach fade-in">
        <p>
          Мы не просто пишем код — мы разбираемся в задаче бизнеса и предлагаем решение.
          Работаем прозрачно: фиксированные сроки, понятная коммуникация, никаких сюрпризов.
        </p>
      </div>

    </div>
  </section>
</template>

<script>
import info from "../../info";

export default {
  name: "About",
  data() {
    return {
      stats: [
        { value: "5+", label: "лет опыта" },
        { value: "47", label: "проектов" },
        { value: "3", label: "специалиста" },
        { value: "100%", label: "проектов сданы в срок" },
      ],
      team: [
        {
          name: "Руденко Павел",
          role: "TeamLead · Full Stack Developer",
          photo: info.githubs[0].pictures[0].img,
          initials: "РП",
          tags: ["PHP", "Laravel", "Vue", "MySQL"],
        },
        {
          name: "Данильчук Михаил",
          role: "Backend Developer",
          photo: info.githubs[1].pictures[0].img,
          initials: "ДМ",
          tags: ["Python", "FastAPI", "PHP", "Postgres"],
        },
        {
          name: "Валитов Хасан",
          role: "Frontend Developer",
          photo: info.githubs[2].pictures[0].img,
          initials: "ВХ",
          tags: ["HTML", "SASS", "JavaScript", "Vue"],
        },
      ],
    };
  },
};
</script>

<style scoped>
.about {
  padding: 100px 0;
  background-color: #0a0a0a;
}

.section-header {
  margin-bottom: 64px;
}

/* Stats */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-bottom: 80px;
  padding: 48px;
  background: #111111;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
}

.stat-item {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.stat-number {
  font-size: clamp(40px, 5vw, 56px);
  font-weight: 800;
  color: #ff5c00;
  line-height: 1;
}

.stat-label {
  font-size: 14px;
  color: #888888;
  font-weight: 500;
}

/* Team */
.team-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 64px;
}

.team-card {
  background: #111111;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 28px;
  transition: border-color 0.3s, transform 0.3s;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.team-card:hover {
  border-color: rgba(255, 92, 0, 0.4);
  transform: translateY(-4px);
}

.team-avatar {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid rgba(255, 255, 255, 0.08);
}

.team-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.avatar-placeholder {
  width: 100%;
  height: 100%;
  background: #1a1a1a;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 700;
  color: #ff5c00;
}

.team-name {
  font-size: 17px;
  font-weight: 700;
  color: #f0f0f0;
  margin-bottom: 4px;
}

.team-role {
  font-size: 13px;
  color: #888888;
  margin-bottom: 12px;
}

.team-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
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

/* Approach */
.approach {
  max-width: 720px;
}

.approach p {
  font-size: 18px;
  color: #888888;
  line-height: 1.7;
  border-left: 3px solid #ff5c00;
  padding-left: 24px;
}

/* Responsive */
@media (max-width: 1024px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    padding: 32px;
  }
}

@media (max-width: 768px) {
  .about {
    padding: 80px 0;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    padding: 24px;
    gap: 20px;
    margin-bottom: 48px;
  }

  .team-grid {
    grid-template-columns: 1fr;
  }

  .approach p {
    font-size: 16px;
  }
}
</style>