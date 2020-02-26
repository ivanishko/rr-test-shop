<template>
    <div class="form-box">
      <div class="form-box__items">
        <h3>Оформление заказа</h3>
        <div class="form-box__item"><span>Количество: </span> <span>{{cnt}}</span></div>
        <div class="form-box__item"><span>Доставка: </span> <span>{{delivery}}</span></div>
        <div class="form-box__item"><span>Итого: </span><span>{{total | formatPrice}}</span></div>
        <div class="form-box__item"><input type="text" class="input-item" placeholder="ФИО" v-model="order.name" minlength="3" maxlength="20" pattern="[a-z]{3,20}"  /></div>
        <div class="form-box__item"><input type="tel" v-phone class="input-item" placeholder="(555)555-5555" v-model="order.phone" name="phone" id="phone" maxlength="14"  /></div>
        <div class="form-box__item"><button class="input-item" @click="send(order.name,order.phone)">Заказать</button></div>
      </div>
    </div>

</template>

<script>
    import {mapGetters} from 'vuex';
    import {mapActions} from 'vuex';


    export default {
        name: "Form",
        data() {
            return {
                delivery: "Бесплатно",
                order: {
                    name: '',
                    phone: ''
                },
                errors: []
            }
        },
        computed: {
            ...mapGetters('cart', {
                cnt: 'cnt',
                total: 'total',
            })

        },
        directives: {

            phone: {
              bind(el) {
                  el.oninput = function(e) {
                      if (!e.isTrusted) {
                          return;
                      }
                      let x = this.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
                      this.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
                  }
              }

            }
        },
        methods: {
            send(name,phone){
                this.errors = [];
                if(!name) {
                    this.errors.push('Укажите имя');
                }
                if(!phone) {
                    this.errors.push('Укажите номер телефона');
                }
                if (name.length < 3) {
                    this.errors.push('Имя не меньше 3 символов');
                }
                if (phone.length < 14) {
                    this.errors.push('Номер телефона не заполнен');
                }
                function orderIsDone(name) {
                    alert('Уважаемый '+ name + ', ' + 'Ваша заявка принята');

                }
                function orderErrors(errors) {
                    alert(errors.join('\r\n'))
                }
                if (this.errors.length === 0) {
                    setTimeout(orderIsDone,500, name);
                    setTimeout(this.clearCart,500, '');


                }
                    else {
                        setTimeout(orderErrors,100, this.errors);
                    }
            },
            ...mapActions('cart',{
                clearCart: 'clear'
            })

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
  padding: 5px;
  min-width: 100%;
  .form-box__items {
    border: 1px solid #bebebe;
  }
  &__item {
    display: flex;
    width: inherit;
    justify-content: space-between;
    font-size: 14px;
    margin: 10px 5px;
    padding: 0 10px;
   }
  input.input-item {
    width: 100%;
    height: 30px;
    font-size: 14px;
  }
  button.input-item {
    margin-top: 10px ;
  }
  h3 {
    text-align: center;
  }
  .errors-list {
    list-style: square;
    display: block;
    color: red;
  }
}


</style>
