import Vue from 'vue';
import Selector from '@mx/vix/selector';
import Toast from '@mx/vix/toast';
import Modal from '@mx/vix/modal';
import Button from '@mx/vix/button';
import Background from '@mx/vix/background';
import ButtonLine from '@mx/vix/button-line';
import ButtonGroup from '@mx/vix/button-group';
import CheckBox from '@mx/vix/checkbox';

if (process.browser) {
  require('@mx/vix/selector/style/index');
  require('@mx/vix/toast/style/index');
  require('@mx/vix/modal/style/index');
  require('@mx/vix/button/style/index');
  require('@mx/vix/button-line/style/index');
  require('@mx/vix/background/style/index');
  require('@mx/vix/button-group/style/index');
  require('@mx/vix/checkbox/style/index')
}

Vue.use(Selector)
Vue.use(Modal)
Vue.use(Button)
Vue.use(Background)
Vue.use(ButtonLine)
Vue.use(ButtonGroup)
Vue.use(CheckBox)
Vue.prototype.$toast = Toast
Vue.prototype.$modal = Modal