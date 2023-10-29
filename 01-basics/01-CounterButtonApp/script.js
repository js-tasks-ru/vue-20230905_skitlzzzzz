 import { createApp } from './vendor/vue.esm-browser.js';
 import {defineComponent} from "vue";

// Создайте Vue приложение
const CounterComponent = defineComponent({
  name: 'CounterComponent',

  data(){
    return {
      counter: 0
    }
  },

  methods: {
    count() {
      return this.counter++;
    }
  }
})

 const app = createApp(CounterComponent);
 const vm = app.mount('#app');
