import Vue from 'vue';
import MuseUI from 'muse-ui';
import 'muse-components/styles/base.less';

// Components
import appbar from 'muse-components/appbar';
import drawer from 'muse-components/drawer';
import paper from 'muse-components/paper';
import flatbutton from 'muse-components/flatButton';
import iconbutton from 'muse-components/iconButton';
import divider from 'muse-components/divider';
import list from 'muse-components/list/list';
import listItem from 'muse-components/list/listItem';

Vue.use(MuseUI);
Vue.component(appbar.name, appbar);
Vue.component(drawer.name, drawer);
Vue.component(paper.name, paper);
Vue.component(flatbutton.name, flatbutton);
Vue.component(iconbutton.name, iconbutton);
Vue.component(list.name, list);
Vue.component(listItem.name, listItem);
Vue.component(divider.name, divider);

// Customized components
import App from './views/App.vue';

new Vue(App).$mount('#app');
