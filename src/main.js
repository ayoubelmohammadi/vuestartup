import "vuetify/dist/vuetify.css";
import Vue from "vue";
import App from "./App";
import Vuetify from "vuetify";
import VueRouter from "vue-router";
import VLazyImage from "v-lazy-image";

Vue.config.productionTip = false;

Vue.component("v-lazy-image", VLazyImage);

Vue.use(Vuetify);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: () => import("./components/ComponentA.vue")
    },
    {
      path: "/second",
      component: () => import("./components/ComponentB.vue")
    },
    {
      path: "/third",
      component: () => import("./components/ComponentC.vue")
    },
    {
      path: "/fourth",
      component: () => import("./components/ComponentD.vue")
    }
  ]
});

Vue.mixin({
  beforeRouteEnter: (to, from, next) => {
    next(vm => {
      vm.$nextTick(() => {
        const width = vm.$refs.card.$el.getBoundingClientRect().width;
        const dim = Math.ceil(Math.random() * 100) + 200;
        vm.url = `https://picsum.photos/${width}/${dim}/?random`;
        vm.busy = true;
      });
    });
  },
  data: () => ({
    url: "",
    busy: false,
    rating: 0,
    snackbar: {
      visible: false,
      message: ""
    }
  }),
  methods: {
    complete(e) {
      this.busy = !this.busy;
    }
  },
  watch: {
    rating: {
      handler: function() {
        this.snackbar.message = "Thank you for rating this page";
        this.snackbar.visible = !this.snackbar.visible;
      }
    }
  }
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
