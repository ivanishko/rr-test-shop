<template>
  <div class="cart-page">
    <h1 class="page-title">Корзина</h1>

  <div class="cart">

    <div v-if="cnt === 0">Добавьте товары в корзину</div>
    <div v-else class="cart-page__items">
      <div class="cart__item" v-for="(product, i) in products" :key="i">
        <button class="icon-delete" @click="deleteFromCart(product)">X</button>

        <div class="cart-image">
          <img :src="'images/' + product.image" />
        </div>
        <div class="cart-info">
          <h2 v-text="product.title"></h2>
          <p>{{product.description}}</p>
          <p class="price">{{product.cost | formatPrice}}</p>
          <div class="color">Цвет:
            <div class="color__box"  :style="{backgroundColor: product.color}"></div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="cnt !== 0" class="cart-page__form">
      <Form  />
    </div>
  </div>

  </div>

</template>

<script>
    import {mapGetters} from 'vuex';
    import {mapActions} from 'vuex';
    import Form from "../components/Form";


    export default {
        name: "Cart",
        components: {Form},
        computed: {
            ...mapGetters('cart',{
                cnt: 'cnt',
                products: 'productsInCart'
            })
        },
        methods: {
            ...mapActions('cart',{
                deleteFromCart: 'delete'
            })
            },
        filters: {
            formatPrice: function (price) {
                return  price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " руб." ;
            }
        },

    }

</script>

<style lang="scss" scoped>
  .cart-page {
    display: flex;
    flex-direction: column;
    &__items {
      flex: 2 2 66%;
      margin-right: 10px;
  }
    &__form{
    flex: 1 1 33%;
    margin: 10px;
  }
    .page-title {
      flex-grow: 1;
    }
    .cart {
      display: flex;
      flex-direction: row;
      &__item {
        display: flex;
        flex-direction: row;
        border-bottom: 1px solid #bebebe;
        position: relative;
        padding: 10px 5px;
        margin-bottom: 10px;

          .cart-image {
            display: flex;
            flex: 1 1 50%;
        }
          .cart-info {
            display: flex;
            flex: 1 1 50%;
            flex-direction: column;
          .price {
            font-size: 32px;
          }
        }
      }
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


button.icon-delete{
  position: absolute;
  top:0;
  right:0;
  cursor: pointer;
  width: 25px;
  height: 20px;
  background: #ffffff;
  :hover {
    color: #2c3e50;
  }
}

</style>
