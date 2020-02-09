<template>
  <div class="cart">
    <h1>Корзина</h1>
    <div v-if="cnt === 0">Добавьте товары в корзину</div>
    <div v-else>
      <div class="cart__item" v-for="(product, i) in products" :key="i">
        <img :src="'images/' + product.image" />
        <h2 v-text="product.title"></h2>
        <p>{{product.description}}</p>
        <div class="color">Цвет:
          <div class="color__box"  :style="{backgroundColor: product.color}"></div>
        </div>
        <button class="icon-delete" @click="deleteFromCart(product)">X</button>
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

<style lang="scss" scoped>
.cart {
  max-width: 680px;
  
  &__item {
    border-bottom: 1px solid #bebebe; 
    position: relative;

  }
}

.color {
  display: flex;
  align-items: center;
  &__box {
    border:1px solid #d7d2d7;
    border-radius: 10px;
    width: 20px;
    height: 20px;
    margin: 0 5px;

}
}


.icon-delete{
  position: absolute;
  top:0;
  right:0;
  cursor: pointer;
}

</style>
