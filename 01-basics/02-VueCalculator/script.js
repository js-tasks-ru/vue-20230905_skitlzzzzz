 import { createApp } from './vendor/vue.esm-browser.js';
 import {defineComponent} from "vue";

// Создайте Vue приложение
 const CalcComponent = defineComponent({
   name: 'CalcComponent',

   data(){
     return {
       val1: 0,
       val2: 0,
       method: 'sum'
     }
   },

   computed: {
     countedResult() {
        switch (this.method){
          case "sum":
            return Number(this.val1) + Number(this.val2);
          case "subtract":
            return Number(this.val1) - Number(this.val2);
          case "multiply":
            return Number(this.val1) * Number(this.val2);
          case "divide":
            return Number(this.val1) / Number(this.val2);
        }
     }
   },
 })

 const app = createApp(CalcComponent);
 const vm = app.mount('#app');
