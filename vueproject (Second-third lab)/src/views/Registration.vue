<script setup>

</script>

<template>
  <h1>Форма регистрации</h1>
  <form method="post">
    <label>
      Логин
      <input type="text" value="Введите логин сюда">
    </label>
    <br>
    <label>
      Пароль
      <input type="password">

    </label>
    <br>
    <label>
      Повторение пароля
      <input type="password" name="again_password">
    </label>
    <br>
    Пол
    <br>
    <label>
      Мужской
      <input type="radio" name="gender" value="m">
    </label>
    <br>
    <label>
      Женский
      <input type="radio" name="gender" value="f">
    </label>
    <br>
    <label>
      О себе
      <textarea rows="4">
                Введите сюда информацию о себе
            </textarea>
    </label>
    <br>
    <input type="submit" value="Отправить форму">
  </form>
</template>

<style scoped>

</style>