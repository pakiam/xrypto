<template>
  <v-list two-line>
    <review v-for="item in reviews" :item="item" v-bind:key="item.id"/>
  </v-list>
</template>

<script>
  import Review from './Review'

  export default {
    data () {
      return {
        reviews: [
          {
            id: 1,
            name: 'John Doe',
            date: '10-12-2017',
            text: 'На удивление все быстро и без лишних заморочек! Спасибо!'
          },
          {
            id: 2,
            name: 'John Doe',
            date: '10-12-2017',
            text: 'На удивление все быстро и без лишних заморочек! Спасибо!'
          }
        ]
      }
    },
    components: {
      Review
    }
  }
</script>

