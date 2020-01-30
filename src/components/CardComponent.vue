<template>
    <section>
        <p>
            Информация по оплате:
        </p>
        <div>
            <table>
                <tr>
                    <td>
                        Номер счета:
                    </td>
                    <td>
                        87123658716587
                    </td>
                </tr>
                <tr>
                    <td>
                        Сумма платежа:
                    </td>
                    <td>
                        100 руб.
                    </td>
                </tr>
            </table>
        </div>
        <h3>
            Данные банковской карты
        </h3>
        <div>
            <p>
                Номер карты
            </p>
            <div  v-for="(cell,index) in cardNumber">
                <input type="text" class="card-number-cell" @keydown="triggerInput(cell,index,$event)" @keyup="checkValue(cell)" v-model="cell.value">
            </div>
        </div>
        <div>
            <p>
                Срок действия
            </p>
            <div>
                <input type="text">
                <input type="text">
            </div>
        </div>
        <div>
            <input type="text" placeholder="Держатель карты" @keyup="checkOwner()" v-model="owner.value">
        </div>
        <div>
            <div></div>
            <p>
                Код CVV2/CVC2
            </p>
            <input type="text" v-model="cvc.value" @keyup="checkCVC()">
        </div>
    </section>
</template>

<script>
  export default {
    name: "CardComponent",
    data(){
      return{
        cardNumber: [
          {
            value: ''
          },
          {
            value: ''
          },
          {
            value: ''
          },
          {
            value: ''
          }
        ],
        owner: {
          value: ''
        },
        cvc: {
          value : ''
        }
      }
    },
    mounted(){
      this.$el.querySelector('.card-number-cell').focus();
    },
    methods:{
      checkValue(cell){
        cell.value = cell.value
          .replace(/[^0-9]/gim,'')
          .slice(0,4);
      },
      triggerInput(cell,index,event){
        if(event && event.key === 'Backspace'){
          return;
        }
        let inputs = this.$el.querySelectorAll('.card-number-cell');
        if(cell.value && cell.value.length >= 4){
          if(index < 3){
            inputs[index + 1].focus();
          }
          else{
            inputs[index].blur();
          }
        }
      },
      checkOwner(){
        this.owner.value = this.owner.value
          .replace(/[^a-zA-Z ]/gim,'')
          .toUpperCase();
      },
      checkCVC(){
        this.cvc.value = this.cvc.value
          .replace(/[^0-9]/gim,'')
          .slice(0,3);
      }
    }
  }
</script>

<style scoped>

</style>