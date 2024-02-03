<script setup>
import EventItem from '../components/EventItem.vue'
import { ref, onMounted, reactive } from 'vue'
import { crawlEventBritePage } from '../util.js'

const events = reactive([]);
const loading = ref(true);

const props = defineProps({url: String})

onMounted(() => {
  // Call the function to crawl the external webpage and get ids in the specific div
  crawlEventBritePage(props.url).then(res => {
    if (Object.keys(res).length === 0) {
      loading.value = false;
    } else {
      let count = 0;
      Object.entries(res).forEach(([event_id, location]) => {
        fetch('https://www.eventbriteapi.com/v3/events/' + event_id + '/', {
          method: 'GET',
          headers: {
            'Authorization': 'Bearer ' + import.meta.env.VITE_API_KEY
          }
        })
        .then(response => {
          response.json().then(event => {
            console.log(event);
              const date = new Date(event.start.utc);
              const tstamp = date.getTime();
              const month = date.getMonth() + 1;
              const minutes = date.getMinutes() ? date.getMinutes() : '00';
              const ev = {
                title: event.name.text,
                details: event.description.text,
                venue: location,
                url: event.url,
                logo: event.logo ? event.logo.url : window.defaultLogo,
                date: date.getDate() + "." + month + "." + date.getFullYear() + " - " + date.getHours() + ":" + minutes,
                tstamp: tstamp
              }
              events.push(ev);
              events.sort((a,b) => (a.tstamp > b.tstamp) ? 1 : -1);
            });

            count += 1;
            if (count == Object.keys(res).length) {
              loading.value = false;
            }
          })
        .catch(err => {
          console.error(err);
        });
      })
    }
  });
})
</script>

<template>
  <main>
    <div v-if="loading" class="loading-spinner">
      <div class="spin"></div>
      <h3>
        Scraping events, this could take some seconds. <br/>
        <span class="alert">
          You will need to allow CORS in your browser for this to work, for example by using 
          <a target="_blank" href="https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf">
            this extension
          </a>
        </span>
      </h3>
    </div>
    <div v-if="!loading && !events">
      No events
    </div>
    <EventItem
      v-for="(event, index) in events"
     :heading="event.title"
     :details="event.details"
     :url="event.url"
     :date="event.date"
     :venue="event.venue"
     :logo="event.logo"
     :index="index"
     :key="event.id"
    />
  </main>
</template>

<style>
main {
  padding-top: 20px;
}
.loading-spinner {
  height: 150px;
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
}
.alert {
  color: red;
}
@keyframes spinner {
  0% {
    transform: translate3d(-50%, -50%, 0) rotate(0deg);
  }
  100% {
    transform: translate3d(-50%, -50%, 0) rotate(360deg);
  }
}
.spin::before {
  animation: 1.5s linear infinite spinner;
  animation-play-state: inherit;
  border: solid 5px #cfd0d1;
  border-bottom-color: #1c87c9;
  border-radius: 50%;
  content: "";
  height: 40px;
  position: absolute;
  top: 10%;
  left: 10%;
  transform: translate3d(-50%, -50%, 0);
  width: 40px;
  will-change: transform;
}

@media (min-width: 1024px) {
  .about {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
  }
}
</style>
