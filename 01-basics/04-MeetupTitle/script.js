// import { createApp } from './vendor/vue.esm-browser.js';

import {defineComponent} from "vue";
import {createApp} from "../03-MarkedList/vendor/vue.esm-browser";

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

const TitleComponent = defineComponent({
  name: 'TitleComponent',

  data(){
    return {
      title: '',
      findedTitle:'',
      status: 'loading'
    }
  },

  methods: {
    findTitle() {
      return fetchMeetupById(Number(this.title)).then((response)=> {
        this.status = 'done' ;
        return response.title
      });
    }
  },


  async updated() {
    this.findedTitle = await this.findTitle();
  },
})

const app = createApp(TitleComponent);
const vm = app.mount('#app');
// Требуется создать Vue приложение
