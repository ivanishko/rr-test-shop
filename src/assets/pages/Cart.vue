<template>
  <div>
    <h1>Корзина</h1>
    <div v-if="cnt === 0">Добавьте товары в корзину</div>
    <div v-else>
      <div v-for="product in products">
        <span>{{product}}</span>
        <button @click="deleteFromCart(product)">X</button>
      </div>
    </div>
  </div>


</template>

<script>
    import {mapGetters} from 'vuex';
    import {mapActions} from 'vuex';

    export default {
        name: "Cart",
        computed: {
            ...mapGetters('cart',{
                cnt: 'cnt',
                products: 'items'
        })
        },
        methods: {
            ...mapActions('cart',{
                deleteFromCart: 'delete'
            })
            }
        }
</script>

<style scoped>

</style>
