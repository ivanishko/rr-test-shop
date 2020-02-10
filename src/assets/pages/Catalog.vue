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
  <div class="check">
    <div class="check-colors">Выберите цвет:
      <div v-for="(color, i) in colors"
           class="color_box"
           :class="{ 'active-color': i === active }"
           :style="{background: color}"
           :key="i" @click="active = i, checkMode(color)">
      </div>
      <div
        class="color-link"
        :class="{ 'active-color': 'all' === active }"
        @click="active = 'all', checkMode('all')">
        Все
      </div>
    </div>
    <div class="check-price">
        Цена (Р):
      <input type="text" :v-model="minprice" :value="minprice">
      <input type="text" :v-model="maxprice" :value="maxprice">
    </div>
  </div>

  <div v-if="checkedId.length === 0">
    <p>Нет товаров с выбранными параметрами</p>
  </div>
  <div v-else>
    <div class="products">
      <Product
        v-for="product in sorteredProducts"
        :key="product.id"
        :product_id="product.id"
        :title="product.title"
        :image="product.img"
        :description="product.description"
        :colors="product.colors"
        :cost="product.cost"
      ></Product>
    </div>
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
              active: null,
              mode: 'all',
              colors: ["black", "white", "red", "blue", "green"],
              sorteredProducts: [],
              checkedId: [],
              minprice: 1000,
              maxprice: 50000
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
            this.sorteredProducts = this.products;
            this.checkedId = ["001"];
            this.checkMode('all');
            console.log('created!!!');

        },
        methods: {
            ...mapActions('cart',
                {
                    initStore: 'initStore'
                }
            ),
            checkMode(color) {
                if (color === 'all') {
                    this.mode = 'all';
                    this.sorteredProducts = this.products;
                    this.checkedId = ["001"];
                    return true;
                } else {
                    this.mode = color;
                    this.checkedId = [];
                    this.sorteredProducts = this.products.filter((elem) => {
                        if (elem.colors.indexOf(color) !== -1) {
                            this.checkedId.push(elem.id);
                            return elem;
                        }
                    })
                }
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
      max-width: 250px;
      flex:1 1 30%;
      border-bottom: 1px solid #2c3e50;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

  }
  .color-box {
    height: 20px;
    width: 20px;
    border-radius: 10px;

  }
  button {
    width: 100%;
    height: 40px;
    border: 1px solid #2c3e50;
    color: #2c3e50;
    cursor:pointer;
    font-size:14px;
  }



  .check {
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 20px 10px;
    background: #d7d2d7;
    .check-colors {
      display: flex;
      flex: 1 1 50%;

    }
    .check-price {
      display: flex;
      flex: 1 1 50%;
      align-items: center;
      input {
        margin: 0 10px;
      }
    }
  }

</style>
