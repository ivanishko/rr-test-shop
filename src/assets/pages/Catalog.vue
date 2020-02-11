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
           :class="{ 'active-color': color === activeColor }"
           :style="{background: color}"
           :key="i" @click="activeColor = color, sortProducts(color)">
      </div>
      <div
        class="color-link"
        :class="{ 'active-color': 'all' === activeColor }"
        @click="activeColor = 'all', sortProducts('all')">
        <span>Все</span>
      </div>
    </div>
    <div class="range-slider">
      <input type="range" v-model.number="minPrice"  min="500" step="100"  max="50000" @change="setRangeSlider" />
      <input type="range" v-model.number="maxPrice"  min="500" step="100"  max="50000" @change="setRangeSlider" />
    </div>
    <div class="range-values">
      <p>Min: {{minPrice}} - Max: {{maxPrice}}</p>
    </div>
  </div>

  <div v-if="sorteredProducts.length === 0">
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
              activeColor: '',
              mode: 'all',
              colors: ["black", "white", "red", "blue", "green"],
              sorteredProducts: [],
              minPrice: 500,
              maxPrice: 50000
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
            this.sorteredProducts = [...this.products];
            //this.sortProducts('all', this.minPrice, this.maxPrice);
            console.log('created!!!');

        },
        methods: {
            ...mapActions('cart',
                {
                    initStore: 'initStore'
                }
            ),
            setRangeSlider() {
                if (this.minPrice > this.maxPrice) {
                    let temp = this.maxPrice;
                    this.maxPrice = this.minPrice;
                    this.minPrice = temp;
                }
                this.sortProducts();
            },
            // sortProducts(color) {
            //     if (color === 'all') {
            //         this.sorteredProducts = [...this.products];
            //         return true;
            //     } else {
            //
            //         this.sorteredProducts = this.products.filter((elem) => {
            //             if (elem.colors.indexOf(color) !== -1 && parseInt(elem.cost) >= this.minPrice && parseInt(elem.cost) <= this.maxPrice) {
            //                 this.checkedId.push(elem.id);
            //                 return elem;
            //             }
            //         })
            //     }
            // }
            sortProducts() {
                    this.sorteredProducts = [...this.products].filter((elem) => {
                        if (this.activeColor !== 'all') {
                            return (elem.colors.indexOf(this.activeColor) !== -1) && parseInt(elem.cost) >= this.minPrice && parseInt(elem.cost) <= this.maxPrice
                        }
                        else {
                            return ( parseInt(elem.cost) >= this.minPrice && parseInt(elem.cost) <= this.maxPrice)
                        }
                        })
                // if(color) {
                //     this.sorteredProducts = this.sorteredProducts.filter((e) => {
                //         if (e.colors.indexOf(color) !== -1)
                //         {return e}
                //     }
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

    .filters{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .range-slider {
      width: 200px;
      margin: auto 16px;
      text-align: center;
      position: relative;
    }
    .range-slider svg, .range-slider input[type=range] {
      position: absolute;
      left: 0;
      bottom: 0;
    }
    input[type=range]::-webkit-slider-thumb {
      z-index: 2;
      position: relative;
      top: 2px;
      margin-top: -7px;
    }
  }

</style>
