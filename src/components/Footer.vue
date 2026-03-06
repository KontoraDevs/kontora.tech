<template>
  <footer class="footer">
    <div class="k-container footer-inner">
      <span class="footer-copy">© 2026 Kontora</span>
      <div class="footer-links">
        <a :href="telegram" target="_blank" title="Telegram">
          <i class="fab fa-telegram"></i>
        </a>
        <a :href="github" target="_blank" title="GitHub">
          <i class="fab fa-github"></i>
        </a>
        <a :href="mail" title="Email">
          <i class="fa fa-envelope"></i>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
import info from "../../info";

export default {
  name: "Footer",
  data() {
    return {
      github: info.links.github,
      telegram: info.links.telegram,
      mail: info.links.mail,
    };
  },
};
</script>

<style scoped>
.footer {
  background: #080808;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  padding: 24px 0;
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer-copy {
  font-size: 14px;
  color: #555555;
  font-weight: 500;
}

.footer-links {
  display: flex;
  gap: 20px;
}

.footer-links a {
  color: #555555;
  font-size: 18px;
  text-decoration: none;
  transition: color 0.2s;
}

.footer-links a:hover {
  color: #ff5c00;
}

@media (max-width: 480px) {
  .footer-inner {
    flex-direction: column;
    gap: 16px;
  }
}
</style>