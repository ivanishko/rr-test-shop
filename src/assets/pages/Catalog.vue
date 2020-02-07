<template>
<div>
  <h1>Каталог</h1>
  <div class="about">
    <div class="about__description">
      <h2>Стиль минимализм в&nbsp;интерьере</h2>
    </div>
    <div class="about__text">
      <p>Английское слово минимализм ёмко и лаконично отражает суть одноименного направления дизайна</p>
      <p>Дизайнеры прибегают к применению природных и промышленных материалов с малыми объёмами</p>
    </div>
  </div>
<div class="products">
  <div class="products__item" v-for="product in products" :key="product.id">
    <img v-bind:src="'images/' + product.img" />
    <h3 v-text="product.title"></h3>
    <p v-html="product.description"> </p>
    <div class="colors">Цвет:
      <div v-for="color in product.colors" class="color-box" :style="{backgroundColor: color}"></div>
    </div>
    <p>{{product.cost | formatPrice}}</p>
    <button @click="addToCart">В корзину</button>
  </div>
</div>

</div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import {mapMutations} from 'vuex';

    export default {
        name: "Catalog",

        data() {
          return {
          }
        },
        computed: {
            ...mapGetters([
                'products'
            ])
        },
        created: function () {
            this.$store.dispatch('initStore');

        },
        methods: {
            ...mapMutations([
                'addToCart'
            ])
        },
        filters: {
            formatPrice: function (price) {
                return  price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " ₽" ;
            }
        }

    };



</script>

<style lang="scss" scoped>
  .products{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    &__item {
      padding: 10px;
      margin: 5px;
      flex:1 1 30%;
     // border: 1px solid #2c3e50;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .colors{
      display:  flex;

    }
    .color-box {
      border:1px solid #d7d2d7;
      border-radius: 10px;
      width: 20px;
      height: 20px;
      margin: 0 3px;

    }
  }
  button {
    width: 100%;
    height: 40px;
    border: 1px solid #2c3e50;
    color: #2c3e50;
    cursor:pointer;
    font-size:14px;

    :active {
      border: none;
    }

    :hover {
      background: #42b983;
    }
  }


</style>
