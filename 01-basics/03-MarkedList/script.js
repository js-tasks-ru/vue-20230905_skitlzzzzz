import { createApp } from './vendor/vue.esm-browser.js';
import {defineComponent} from "vue";

// From https://jsonplaceholder.typicode.com/comments
const emails = [
  'Eliseo@gardner.biz',
  'Jayne_Kuhic@sydney.com',
  'Nikita@garfield.biz',
  'Lew@alysha.tv',
  'Hayden@althea.biz',
  'Presley.Mueller@myrl.com',
  'Dallas@ole.me',
  'Mallory_Kunze@marie.org',
  'Meghan_Littel@rene.us',
  'Carmen_Keeling@caroline.name',
  'Veronica_Goodwin@timmothy.net',
  'Oswald.Vandervort@leanne.org',
  'Kariane@jadyn.tv',
  'Nathan@solon.io',
  'Maynard.Hodkiewicz@roberta.com',
  'Christine@ayana.info',
  'Preston_Hudson@blaise.tv',
  'Vincenza_Klocko@albertha.name',
  'Madelynn.Gorczany@darion.biz',
  'Mariana_Orn@preston.org',
  'Noemie@marques.me',
  'Khalil@emile.co.uk',
  'Sophia@arianna.co.uk',
  'Jeffery@juwan.us',
  'Isaias_Kuhic@jarrett.net',
];

// Требуется создать Vue приложение

// Создайте Vue приложение
const FilterEmailComponent = defineComponent({
  name: 'FilterEmailComponent',

  data(){
    return {
      search: '',
      emails,
    }
  },

  methods: {
    filterMails() {
      return emails.map(email => {
        return {
          email,
          marked: this.search.length ? email.toLowerCase().includes(this.search.toLowerCase()) : false
        }
      })
    }
  },

  computed: {
    filteredMails() {
      return this.filterMails();
    }
  }
})

const app = createApp(FilterEmailComponent);
const vm = app.mount('#app');
