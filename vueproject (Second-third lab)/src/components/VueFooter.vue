<script setup>

</script>

<template>
  <footer class="main-footer">
    <div class="footer-item">
      <p>Автор: &copy Азаров А.В. </p>
      <p> Разработано в <a href="https://www.bstu.ru/">БГТУ им. В.Г. Шухова</a> </p>
    </div>
    <div class="footer-item">
      Контакты: <a href="mailto:lau-1038254679@yandex.ru"> Почта автора</a>
    </div>
  </footer>
</template>

<style scoped>
  .main-footer {
    padding: 15px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: bisque url(../images/footer.png);
  }

  .footer-item {
    background: rgba(128, 178, 200, 0.5);
    padding: 15px;
  }
</style>