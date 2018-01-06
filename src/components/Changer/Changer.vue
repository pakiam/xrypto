<template>
  <v-layout row wrap>
    <v-flex md4>
      <changerLeft :items="itemsGive" v-on:itemGive="itemGiveSelected"/>
    </v-flex>
    <v-flex md4>
      <changerRight :items="itemsReceive"/>
    </v-flex>
  </v-layout>
</template>

<script>
  import changerLeft from './ChangerLeft'
  import changerRight from './changerRight'

  export default {
    name: 'changer',
    data () {
      return {
        itemsGive: [
          {header: 'You send'},
          {
            image: '',
            title: 'Сбербанк',
            abbr: 'RUB',
            active: true
          },
          {
            image: '',
            title: 'Тинькофф',
            abbr: 'RUB',
            active: false
          },
          {
            image: '',
            title: 'ADV Cash USD',
            abbr: 'USD',
            active: false
          }
        ],
        itemsReceive: [
          {header: 'You receive'},
          {
            image: '',
            title: 'Ethereum',
            abbr: 'ETH'
          },
          {
            image: '',
            title: 'Bitcoin',
            abbr: 'BTC'
          }
        ]
      }
    },
    components: {
      changerLeft,
      changerRight
    },
    methods: {
      /**
       * Add class when selected
       * @param item
       */
      itemGiveSelected (item) {
        this.itemsGive.filter(i => {
          i === item ? i.active = true : i.active = false
        })
        this.getPrices(item.abbr)
      },
      /**
       * Makes a GET call, based on currencies in itemsReceive
       * @param value
       */
      getPrices (value) {
        const currencies = this.itemsReceive.map(item => {
          if (item.hasOwnProperty('abbr')) {
            return item.abbr
          }
        })
        const url = `https://min-api.cryptocompare.com/data/price?fsym=${value}&tsyms=${currencies.splice('').join(',')}`

        this.$http.get(url).then(response => {
          const data = response.data
          console.log('data', response.data)
          for (let i = 0; i < this.itemsReceive.length; i++) {
            if (this.itemsReceive[i].hasOwnProperty('abbr')) {
              this.$set(this.itemsReceive[i], 'price', data[this.itemsReceive[i].abbr] * 100)
            }
          }
        }, response => {
          // error callback
        })
      }
    },
    created () {
      /**
       * Initial getPrices call, then selected default first item of itemsGive
       */
      this.itemsGive.map(item => {
        if (item.hasOwnProperty('active') && item.active) {
          return this.getPrices(item.abbr)
        }
      })
    }
  }
</script>

<style lang="scss">

</style>
