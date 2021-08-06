<template>
  <v-app :dark="mode">
    <v-navigation-drawer clipped floating temporary app v-model="drawer">
      <v-list two-line>
        <v-list-tile
          v-for="(item, index) in items"
          :key="index"
          :to="item.path"
        >
          <v-list-tile-content>
            <v-list-tile-title v-html="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>
            <v-switch
              v-model="mode"
              :label="`${mode ? 'Dark' : 'Light'} Mode`"
              hide-details
            ></v-switch>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="blue-grey darken-2" :dark="!mode" fixed app>
      <v-toolbar-side-icon @click="drawer = !drawer;"></v-toolbar-side-icon>
      <v-toolbar-title>Demo App</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex xs12 md6>
            <transition name="fade" mode="out-in">
              <router-view></router-view>
            </transition>
          </v-flex>
        </v-layout>
        <v-snackbar v-model="snackbar.visible" bottom>
          {{ snackbar.message }}
          <v-btn @click="snackbar.visible = !snackbar.visible;">Close</v-btn>
        </v-snackbar>
      </v-container>
    </v-content>
    <v-footer
      class="px-3 d-flex justify-content-between white--text"
      color="blue-grey darken-2"
      app
    >
      <span v-html="copy"></span>
    </v-footer>
  </v-app>
</template>

<script>
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import ComponentC from "./components/ComponentC";
import ComponentD from "./components/ComponentD";

export default {
  name: "App",
  components: {
    ComponentA,
    ComponentB,
    ComponentC,
    ComponentD
  },
  computed: {
    copy() {
      return `Digital Drifter &middot; ${new Date().getFullYear()}`;
    }
  },
  data() {
    return {
      drawer: false,
      mode: false,
      items: [
        {
          path: "/",
          title: "Home"
        },
        {
          path: "/second",
          title: "Second Page"
        },
        {
          path: "/third",
          title: "Third Page"
        },
        {
          path: "/fourth",
          title: "Fourth Page"
        }
      ]
    };
  }
};
</script>

<style type="text/css">
.v-content {
  background-color: #bbdefb;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.loading:after {
  content: " .";
  animation: dots 1s steps(5, end) infinite;
}

@keyframes dots {
  0%,
  20% {
    color: rgba(0, 0, 0, 0);
    text-shadow: 0.25em 0 0 rgba(0, 0, 0, 0), 0.5em 0 0 rgba(0, 0, 0, 0);
  }
  40% {
    color: black;
    text-shadow: 0.25em 0 0 rgba(0, 0, 0, 0), 0.5em 0 0 rgba(0, 0, 0, 0);
  }
  60% {
    text-shadow: 0.25em 0 0 black, 0.5em 0 0 rgba(0, 0, 0, 0);
  }
  80%,
  100% {
    text-shadow: 0.25em 0 0 black, 0.5em 0 0 black;
  }
}
</style>
