import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import DemoBlock from "@/components/.components/DemoBlock.vue";

Vue.use(ElementUI);
Vue.component("demo-block", DemoBlock);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
