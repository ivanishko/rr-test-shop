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
  <div class="colors">Выберете цвет:
    <div v-for="(color, i) in colors" class="color_box" :style="{background: color}" :key="i" @click="checkMode(color)"></div>
    <div class="color-link"  @click="checkMode('all')">Все</div>
  </div>  
  <p v-if="checkedId.length === 0">Нет товаров с выбранными параметрами</p>
<div v-else>
  <div class="products">
  <product
    v-for="product in sorteredProducts"
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
            mode: 'all',
            colors: ["black", "white", "red", "blue", "green"],
            sorteredProducts: [],
            checkedId: []
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

        },
        methods: {
            ...mapActions('cart',
                {
                    initStore: 'initStore'
                }
            ),
            checkMode(color) {
              //  if (color = 'all') {
              //   this.sorteredProducts  = this.products;
              //  }
              this.mode = color;
              console.log(this.mode);
              this.sorteredProducts =  this.products.filter((elem) => {

               // console.log(elem.colors);
              if  (elem.colors.indexOf(color) !== -1) {
                this.checkedId.push(elem.id);
                  return elem;
              } 
              // console.log(this.checkedId);

             // console.log(this.sorteredProducts);
              })
              
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
  .color-link {
    cursor: pointer;
    text-decoration: underline;
}

</style>
