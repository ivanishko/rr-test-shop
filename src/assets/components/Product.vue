<template>
  <div class="products__item">
    <img class="item_image" v-bind:src="'images/' + image" />
        <h3 v-text="title"></h3>
        <p v-html="description"> </p>
        <div class="colors">Цвет:
      <div
        v-for="(color, i) in getColors"
        @click="active = i, checkColor(product_id,color,title,description,image, cost)"
        :key="color + product_id"
        class="color_box"
        :class="{ 'active-color': i === active }"
        :style="{backgroundColor: color}"
      >
      </div>
    </div>
        <p>{{cost | formatPrice}}</p>
        <button v-if="!isChecked" :disabled="!isChecked" class="disabled">Выберите цвет</button>
        <button v-else @click="addToCart(checkedProduct)">В корзину</button>
  </div>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        name: "Product",
        props: [
            'product_id',
            'title',
            'image',
            'colors',
            'description',
            'cost'
        ],
        data(){
            return {
                isChecked : false,
                checkedColor: '',
                checkedProduct: {},
                active: null,
            }

        },
        computed: {
            getColors() {
                if ( typeof this.colors === 'string') {
                      let arr = [];
                      arr.push(this.colors);
                      return arr;
                }
                else {return this.colors}
            }
        },
        methods: {
            ...mapActions('cart',
                {
                    addToCart: 'add'
            }),
            checkColor(id,color,title,description,image, cost){
                this.isChecked = true;
                this.checkedColor = color;
                this.checkedProduct = {
                    id,
                    color,
                    title,
                    description,
                    image,
                    cost
                }
            }
        },
        filters: {
            formatPrice: function (price) {
                return  price.replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " руб." ;
            }
        }


    }
</script>

<style lang="scss" scoped>
    .item_image {
      max-width: 250px;
      height: auto;
  }








</style>
