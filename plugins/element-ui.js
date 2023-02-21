import { Button, Input, Loading, MessageBox, Message, Notification } from 'element-ui';

const components = [Button, Input];

export default {
  install(Vue) {
    components.forEach((component) => {
      Vue.use(component);
    });

    Vue.use(Loading.directive);

    Vue.prototype.$loading = Loading.service;
    Vue.prototype.$msgbox = MessageBox;
    Vue.prototype.$alert = MessageBox.alert;
    Vue.prototype.$confirm = MessageBox.confirm;
    Vue.prototype.$prompt = MessageBox.prompt;
    Vue.prototype.$notify = Notification;
    Vue.prototype.$message = Message;
  },
};
