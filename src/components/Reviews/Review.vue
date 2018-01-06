<template>
  <v-list-tile :key="item.id">
    <v-list-tile-content>
      <v-list-tile-title>{{ item.name }} <span class="grey--text text--lighten-1">{{ item.date }}</span>
      </v-list-tile-title>
      <v-list-tile-sub-title>{{ item.text }}</v-list-tile-sub-title>
    </v-list-tile-content>
  </v-list-tile>
</template>

<script>
  export default {
    props: {
      item: {
        type: Object,
        required: true
      }
    }
  }
</script>

