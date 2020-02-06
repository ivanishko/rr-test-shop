<template>
<div class="header">
  <div class="logo">
      <div class="logo__square"></div><span class="logo__title">Logo</span>
  </div>
  <div class="menu">
    <router-link active-class="active" :to="{name: 'catalog'}">Каталог</router-link>
    <router-link active-class="active" :to="{name: 'about'}">О нас</router-link>
  </div>
    <router-link active-class="active" :to="{name: 'checkout'}">Корзина</router-link>
  <div>

  </div>

</div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style lang="scss" scoped>
  .header {
    border: 1px solid #2c3e50;
    display: flex;
    justify-content: space-around;
  }

  .logo {
    display: inline-block;


    &__square {
      width: 20px;
      height: 20px;
      background: black;
    }
    &__title {
      text-transform: uppercase;
    }
  }
  a {
    text-decoration: none;
  }

  .active {
    text-decoration: underline;
  }
</style>
