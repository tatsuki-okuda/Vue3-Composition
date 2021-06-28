import { createApp } from 'vue'
import App from './App.vue'
import VueCompositionApi from '@vue/composition-api';



// createApp(App).mount('#app');




const app = createApp(App);
app.use({
    VueCompositionApi
})
app.mount('#app');
