import { defineComponent } from '../vendor/vue.esm-browser.js';
import UiAlert from './UiAlert.js';
import UiContainer from './UiContainer.js';
import MeetupInfo from "../../04-MeetupInfo/components/MeetupInfo";
import MeetupCover from "../../03-MeetupCover/components/MeetupCover";
import MeetupAgenda  from "../../05-MeetupAgenda/components/MeetupAgenda";
import MeetupAgendaItem  from "../../05-MeetupAgenda/components/MeetupAgendaItem";
import MeetupDescription from "../../02-MeetupDescription/components/MeetupDescription";

export default defineComponent({
  name: 'MeetupView',

  components: {
    MeetupDescription,
    MeetupCover,
    MeetupAgenda,
    MeetupAgendaItem,
    MeetupInfo,
    UiAlert,
    UiContainer,
  },

  props: {
    meetup: {
      type: Object,
      required: true,
    },
  },

  template: `
    <div>
      <MeetupCover :title="meetup.title" :image="meetup.image"/>
      <UiContainer>
        <div class="meetup">
          <div class="meetup__content">
            <h3>Описание</h3>
            <MeetupDescription :description="meetup.description"/>
            <h3>Программа</h3>
            <MeetupAgenda :agenda="meetup.agenda" v-if="meetup.agenda.length"/>
            <UiAlert v-else >Программа пока пуста...</UiAlert>
          </div>
          <div class="meetup__aside">
            <MeetupInfo
              :organizer="meetup.organizer"
              :place="meetup.place"
              :date="meetup.date"
            />
          </div>
        </div>
      </UiContainer>
    </div>`,
});
