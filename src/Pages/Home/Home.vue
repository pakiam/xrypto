<template>
  <v-container grid-list-md>
    <changer/>
    <reviews/>
  </v-container>
</template>

<script>
  import Changer from '@/components/Changer/Changer'
  import Reviews from '@/components/Reviews/Reviews'

  export default {
    data () {
      return {}
    },
    components: {
      Changer,
      Reviews
    }
  }
</script>
