<template>
  <section class="contact">
    <div class="k-container">

      <div class="section-header fade-in">
        <span class="section-label">Контакты</span>
      </div>

      <div class="contact-layout fade-in">

        <!-- Left: direct contacts -->
        <div class="contact-info">
          <h2 class="contact-title">Обсудим ваш проект?</h2>
          <p class="contact-sub">Ответим в течение 24 часов. Расскажите о задаче — предложим решение.</p>

          <div class="contact-links">
            <a :href="mail" class="contact-link">
              <span class="link-icon">✉</span>
              <span>kontoradevs@yandex.ru</span>
            </a>
            <a :href="telegram" target="_blank" class="contact-link">
              <span class="link-icon">✈</span>
              <span>@santariver</span>
            </a>
            <a :href="github" target="_blank" class="contact-link">
              <span class="link-icon">◑</span>
              <span>github.com/KontoraDevs</span>
            </a>
          </div>
        </div>

        <!-- Right: form -->
        <form class="contact-form" @submit.prevent="sendEmail">
          <div class="form-group">
            <input
              type="text"
              v-model="name"
              placeholder="Ваше имя"
              class="form-input"
              required
            />
          </div>
          <div class="form-group">
            <input
              type="email"
              v-model="email"
              placeholder="Email"
              class="form-input"
              required
            />
          </div>
          <div class="form-group">
            <textarea
              v-model="text"
              placeholder="Расскажите о вашем проекте..."
              class="form-input"
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit" class="btn-primary">Отправить сообщение</button>

          <p v-if="statusMsg" class="form-status" :class="{ success: statusOk, error: !statusOk }">
            {{ statusMsg }}
          </p>
        </form>

      </div>
    </div>
  </section>
</template>

<script>
import config from "../../config";
import emailjs from "emailjs-com";
import info from "../../info";

export default {
  name: "Contact",
  data() {
    return {
      email: "",
      name: "",
      text: "",
      statusMsg: "",
      statusOk: false,
      mail: info.links.mail,
      telegram: info.links.telegram,
      github: info.links.github,
    };
  },
  methods: {
    sendEmail() {
      if (!this.email || !this.name || !this.text) {
        this.statusMsg = "Пожалуйста, заполните все поля";
        this.statusOk = false;
        return;
      }

      emailjs
        .send(
          config.emailjs.serviceID,
          config.emailjs.templateID,
          {
            user_email: this.email,
            from_name: this.name,
            message_html: this.text,
            to_name: "Контора",
          },
          config.emailjs.userID
        )
        .then(() => {
          this.statusMsg = "Спасибо! Сообщение отправлено. Ответим в течение 24 часов.";
          this.statusOk = true;
          this.email = "";
          this.name = "";
          this.text = "";
        })
        .catch(() => {
          this.statusMsg = "Что-то пошло не так. Напишите нам напрямую.";
          this.statusOk = false;
        });
    },
  },
};
</script>

<style scoped>
.contact {
  padding: 100px 0;
  background-color: #0a0a0a;
}

.section-header {
  margin-bottom: 56px;
}

.contact-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: start;
}

/* Left side */
.contact-title {
  font-size: 36px;
  font-weight: 800;
  color: #f0f0f0;
  line-height: 1.2;
  margin-bottom: 16px;
  letter-spacing: -1px;
}

.contact-sub {
  font-size: 16px;
  color: #888888;
  line-height: 1.7;
  margin-bottom: 40px;
}

.contact-links {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 14px;
  text-decoration: none;
  color: #c0c0c0;
  font-size: 15px;
  font-weight: 500;
  transition: color 0.2s;
}

.contact-link:hover {
  color: #ff5c00;
  text-decoration: none;
}

.link-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: #111111;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  font-size: 16px;
  flex-shrink: 0;
  transition: border-color 0.2s;
}

.contact-link:hover .link-icon {
  border-color: rgba(255, 92, 0, 0.4);
}

/* Form */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form-group {
  width: 100%;
}

.form-input {
  width: 100%;
  background: #111111;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  color: #f0f0f0;
  font-size: 15px;
  font-family: inherit;
  padding: 14px 18px;
  outline: none;
  transition: border-color 0.2s;
  resize: vertical;
}

.form-input::placeholder {
  color: #555555;
}

.form-input:focus {
  border-color: rgba(255, 92, 0, 0.5);
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
  width: 100%;
}

.btn-primary:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

.form-status {
  font-size: 14px;
  padding: 12px;
  border-radius: 8px;
  text-align: center;
}

.form-status.success {
  color: #4ade80;
  background: rgba(74, 222, 128, 0.08);
  border: 1px solid rgba(74, 222, 128, 0.2);
}

.form-status.error {
  color: #f87171;
  background: rgba(248, 113, 113, 0.08);
  border: 1px solid rgba(248, 113, 113, 0.2);
}

@media (max-width: 768px) {
  .contact {
    padding: 80px 0;
  }

  .contact-layout {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .contact-title {
    font-size: 28px;
  }
}
</style>