<template>
    <div class="form-box">
      <h3>Оформление заказа</h3>
      <div class="form-box__item"><span>Количество: </span> <span>{{cnt}}</span></div>
      <div class="form-box__item"><span>Доставка: </span> <span>{{delivery}}</span></div>
      <div class="form-box__item"><span>Итого: </span><span>{{total | formatPrice}}</span></div>
      <div class="form-box__item"><input type="text" class="input-item" placeholder="ФИО" v-model="userName" /></div>
      <div class="form-box__item"><input type="text" class="input-item" placeholder="Номер телефона" v-model="userPhone" /></div>
      <div class="form-box__item"><button class="input-item" @click="send(userName,userPhone)">Заказать</button></div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: "Form",
        data() {
            return {
                delivery: "Бесплатно",
                userName: '',
                userPhone: ''
            }
        },
        computed: {
            ...mapGetters('cart', {
                cnt: 'cnt',
                total: 'total',

            })

        },
        methods: {
            send(name,phone){
                console.log('name,phone', name, phone);
            }
        },
        filters: {

            formatPrice: function (price) {
                return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " руб.";
            }
        }
    }


</script>

<style lang="scss" scoped>

.form-box {
  border: 1px solid #bebebe;
  padding: 5px;
  &__item {
    display: flex;
    width: inherit;
    justify-content: space-between;
    font-size: 14px;
    margin: 10px 5px;
    padding: 0 10px;
   }
  .input-item {
    width: 100%;
    height: 30px;
    font-size: 14px;
  }
  button {
    margin-top: 10px ;
  }
}
h3 {
  text-align: center;
}

</style>
