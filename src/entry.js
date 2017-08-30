import Vue from 'vue';
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';

// Components
import appbar from 'muse-components/appbar';
import flatbutton from 'muse-components/flatbutton';
import iconbutton from 'muse-components/iconbutton';
import divider from 'muse-components/divider';
import {
	list,
	listItem
} from 'muse-components/list';


// Customized components
import App from './views/App.vue';

Vue.use(MuseUI);
Vue.component(appbar.name, appbar);
Vue.component(flatbutton.name, flatbutton);
Vue.component(iconbutton.name, iconbutton);
Vue.component(list.name, list);
Vue.component(listItem.name, listItem);
Vue.component(divider.name, divider);

new Vue(App).$mount('#app');
