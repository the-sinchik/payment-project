<template>
    <div>
        <input type="text" v-model="text">
        <button @click="goTo()">
            Оплатить
        </button>
    </div>
</template>

<script>
  export default {
    name: "Payment",
    data(){
      return {
        text: ''
      }
    },
    methods:{
      goTo(){
        if(!this.text){
          return;
        }

        console.log(this.$router);
        this.$router.addRoutes([{
          path: '/payment-success',
          component: () => import('../views/PaymentSuccessful.vue')
        }]);

        this.$router
          .push('/payment-success')
          .catch((e)=>{});
      }
    }
  }
</script>

<style scoped>

</style>