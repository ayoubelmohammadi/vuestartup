<template>
  <v-card tile ref="card">
    <v-flex xs12 class="text-xs-center">
      <v-lazy-image :src="url" @load="complete" />
      <span v-show="busy" class="py-3">
        <v-icon class="mt-3">cloud</v-icon>
        <p class="loading subheading">Loading</p>
      </span>
    </v-flex>
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">{{ title }}</h3>
      </div>
    </v-card-title>
    <v-card-actions class="pa-3">
      Rate this page
      <v-spacer></v-spacer>
      <v-rating ripple half-increments hover v-model="rating"></v-rating>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "ComponentA",
  data() {
    return {
      title: "Home Component"
    };
  }
};
</script>
