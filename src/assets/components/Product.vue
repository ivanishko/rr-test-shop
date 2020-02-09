<template>
  <div class="products__item">
    <img class="item_image" v-bind:src="'images/' + image" />
        <h3 v-text="title"></h3>
        <p v-html="description"> </p>
        <div class="colors">Цвет:
      <div
        v-for="(color, i) in getColors"
        @click="active = i, checkColor(product_id,color,title,description,image)"
        :key="color + product_id"
        class="color_box"
        :class="{ active: i === active }"
        :style="{backgroundColor: color}"
      >
      </div>
    </div>
        <p>{{cost | formatPrice}}</p>
        <button v-if="!isChecked" :disabled="!isChecked">Выберите цвет</button>
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
                      arr.push(this.colors)
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
            checkColor(id,color,title,description,image){
                this.isChecked = true;
                this.checkedColor = color;
                this.activeClass = 'color-box-checked';

                this.checkedProduct = {
                    id,
                    color,
                    title,
                    description,
                    image
                }
            }
        },
        filters: {
            formatPrice: function (price) {
                return  price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " руб." ;
            }
        }


    }
</script>

<style lang="scss" scoped>
  .colors{
    display:  flex;
    align-items: center;

  }
    .item_image {
      max-width: 250px;
  }
   .color_box {

    border:1px solid #d7d2d7;

    border-radius: 11px;
    width: 21px;
    height: 21px;
    margin: 0 3px;
    cursor: pointer;

  }

  .active {
    border:3px solid green;
  }

</style>
