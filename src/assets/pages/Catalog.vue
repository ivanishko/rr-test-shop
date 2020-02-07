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
  <product
    v-for="product in products"
    :key="product.id"
    :product_id="product.id"
    :title="product.title"
    :image="product.img"
    :description="product.description"
    :colors="product.colors"
    :cost="product.cost"
  ></product>
</div>

</div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import {mapActions} from 'vuex';
    import {mapMutations} from 'vuex';
    import Product from "../components/Product";

    export default {
        name: "Catalog",
        components: {Product},
        data() {
          return {
          }
        },
        computed: {
            ...mapGetters('products', {
                products: 'items'
            }
            )
        },
        created: function () {
            this.$store.dispatch('products/initStore');
        },
        methods: {
            ...mapActions('cart',
                {
                    initStore: 'initStore'
                }
            )
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
