<template>
  <div>
    <h1>Корзина</h1>
    {{cart}}
  </div>


</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: "Checkout",
        computed: {
            ...mapGetters([
                'cart'
            ])
        }
    }
</script>

<style scoped>

</style>
