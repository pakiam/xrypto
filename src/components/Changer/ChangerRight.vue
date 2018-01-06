<template>
  <v-list two-line>
    <template v-for="item in items">
      <v-subheader v-if="item.header" v-text="item.header"></v-subheader>
      <v-divider v-else-if="item.divider" v-bind:inset="item.inset"></v-divider>
      <v-list-tile avatar v-else v-bind:key="item.title" @click="">
        <v-list-tile-avatar>
          <img v-bind:src="item.avatar">
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>{{item.title}} {{ item.abbr}}</v-list-tile-title>
        </v-list-tile-content>

        <v-list-tile-action>
          <v-list-tile-action-text>{{item.price}}</v-list-tile-action-text>
        </v-list-tile-action>

      </v-list-tile>
    </template>
  </v-list>
</template>

<script>
  export default {
    name: 'changerLeft',
    props: {
      items: {
        type: Array
      }
    },
    data () {
      return {
      }
    },
    method: {

    }
  }
</script>

<style lang="scss">

</style>


