<template>
  <v-app>
    <app-header></app-header>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer app></v-footer>
  </v-app>
</template>

<script>
  import appHeader from '@/components/Header'

  export default {
    name: 'app',
    components: {
      appHeader
    }
  }
</script>

<style lang="scss">
  @import '../node_modules/vuetify/dist/vuetify.min.css';

  * {
    box-sizing: border-box;
  }

  img {
    max-width: 100%;
    display: inline-block;
    height: auto;
    vertical-align: middle;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>
