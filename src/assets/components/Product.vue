<template>
  <div class="products__item">
    {{product_id}}
    <img v-bind:src="'images/' + image" />
        <h3 v-text="title"></h3>
        <p v-html="description"> </p>
        <div class="colors">Цвет:
      <label
        v-for="color in getColors"
        :for="color + product_id"
        class="color-box"
        :style="{backgroundColor: color}"
        @click="checkColor(product_id,color)"
      >
        <input type="radio" :name="product_id" :id="color + product_id" />
      </label>

        </div>
        <p>{{cost | formatPrice}}</p>
        <button @click="addToCart(checkedProduct)" :disabled="!isChecked">В корзину</button>
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
                checkedProduct: {}
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
            checkColor(id,color){
                this.isChecked = true;
                this.checkedColor = color;

                this.checkedProduct = {
                    id,
                    color
                }
            }
        },
        filters: {
            formatPrice: function (price) {
                return  price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " ₽" ;
            }
        }


    }
</script>

<style lang="scss" scoped>
  .colors{
    display:  flex;

  }
  .color-box {

    border:1px solid #d7d2d7;

    border-radius: 10px;
    width: 20px;
    height: 20px;
    margin: 0 3px;
    cursor: pointer;
  input {
  //display: none;
    cursor: pointer;
  }

  }

</style>
