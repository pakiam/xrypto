<template>
  <v-list two-line>
    <v-subheader>{{header}}</v-subheader>
    <template v-for="item in items">
      <v-list-tile avatar v-bind:key="item.title" @click="itemEmit(item)" :value="item.selected">
        <!-- list item image -->
        <v-list-tile-avatar>
          <img v-bind:src="item.avatar">
        </v-list-tile-avatar>
        <!-- list item image -->

        <!-- list item content -->
        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }} {{ item.code }}</v-list-tile-title>
        </v-list-tile-content>
        <!-- list item content -->

        <!-- list item price for one -->
        <v-list-tile-action>
          <v-list-tile-action-text>{{ item.per }}</v-list-tile-action-text>
        </v-list-tile-action>
        <!-- list item price for one -->

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
      },
      header: {
        type: String
      }
    },
    data () {
      return {

      }
    },
    methods: {
      itemEmit (item) {
        this.$emit('itemGive', item)
      }
    }
  }
</script>

<style lang="scss">

</style>


