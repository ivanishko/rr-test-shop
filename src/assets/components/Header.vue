<template>
<div class="header">
  <div class="logo">
    <router-link :to="{name: 'Main'}">
      <span class="logo__title">Logo</span>
    </router-link>
  </div>
  <div class="menu">
    <router-link active-class="active" :to="{name: 'Catalog'}">Каталог</router-link>
    <router-link active-class="active" :to="{name: 'About'}">О нас</router-link>
  </div>
    <router-link active-class="active" :to="{name: 'Checkout'}">Корзина<span class="checkout_count">{{cnt}}</span></router-link>
  <div>

  </div>

</div>
</template>

<script>
    export default {
        name: "Header",
        computed: {
            cnt(){
                return this.$store.state.cnt;
            }
    }

    }
</script>

<style lang="scss" scoped>
  .header {
    border-bottom: 1px solid #42b983;
    display: flex;
    justify-content: space-around;
  }

  .logo {
    display: inline-block;

    &__title {
      font-weight: 700;
      text-transform: uppercase;
    }
  }
  .checkout_count {
    border: 1px solid #42b983;
  }
  a {
    text-decoration: none;
  }

  .active {
    text-decoration: underline;
  }
</style>
