import { createApp } from 'vue';
import { createPinia } from 'pinia';
import VueTelInput from 'vue-tel-input';
import 'vue-tel-input/vue-tel-input.css';
import App from './App.vue';
import './styles/main.scss';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(VueTelInput);
app.mount('#app');
