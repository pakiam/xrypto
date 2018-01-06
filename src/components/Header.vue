<template>
  <header class="header">
    <v-container>
      <v-layout row wrap align-center>
        <div class="header__logo">
          <img src="../assets/logo.png">
        </div>
        <nav class="header__nav">
          <a href="javascript:;" class="body-2 header__link">Home</a>
          <a href="javascript:;" class="body-2 header__link">News</a>
          <a href="javascript:;" class="body-2 header__link">Reviews</a>
          <a href="javascript:;" class="body-2 header__link">Contacts</a>
        </nav>
      </v-layout>
    </v-container>

  </header>
</template>

<script>
  export default {
    name: 'appHeader'
  }
</script>

<style lang="scss">
  .header__logo {
    flex: 0 0 5%;
    max-width: 5%;
  }

  .header__nav {
    flex: 0 0 95%;
    max-width: 95%;
  }

  .header__link {
    text-decoration: none;
    padding: 5px 10px;
  }
</style>

