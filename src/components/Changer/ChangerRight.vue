<template>
  <v-list two-line>
    <v-subheader>{{header}}</v-subheader>
    <template v-for="item in items" v-if="!item.disabled">
      <v-list-tile avatar v-bind:key="item.title" @click="">
        <v-list-tile-avatar>
          <img v-bind:src="item.avatar">
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>{{item.title}} {{ item.code}}</v-list-tile-title>
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
      },
      header: {
        type: String
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


