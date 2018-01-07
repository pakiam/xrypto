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
  const ROUND_PRICE = 8
  const RUB_PRICE_MULTIPLIER = 100
  const PRICE_MULTIPLIER = 1

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
            per: 100,
            selected: true,
            currencyRate: 1,
            disabled: false,
            disableCurrencies: []
          },
          {
            image: '',
            title: 'Тинькофф',
            abbr: 'RUB',
            per: 100,
            selected: false,
            currencyRate: 1,
            disabled: false,
            disableCurrencies: []
          },
          {
            image: '',
            title: 'ADV Cash',
            abbr: 'USD',
            per: 1,
            selected: false,
            currencyRate: 1,
            disabled: false,
            disableCurrencies: []
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
        ],
        selectedItem: {}
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
          i === item ? i.selected = true : i.selected = false
        })
        this.getPrices(item.abbr)
      },
      /**
       * Makes a GET call, based on currencies in itemsReceive
       * @param value
       */
      getPrices (value) {
        /**
         * Create new array with abbr of receiving currencies to paste it in GET URL
         */
        const currencies = this.itemsReceive.map(item => {
          if (item.hasOwnProperty('abbr')) {
            return item.abbr
          }
        })
        const url = `https://min-api.cryptocompare.com/data/price?fsym=${value}&tsyms=${currencies.splice('').join(',')}`

        this.$http.get(url).then(response => {
          const data = response.data
          // console.log('data', response.data)
          /**
           * Add new property 'price' for every itemsReceive to show it on page
           * based on data
           */
          for (let i = 0; i < this.itemsReceive.length; i++) {
            if (this.itemsReceive[i].hasOwnProperty('abbr')) {
              let price = data[this.itemsReceive[i].abbr] * this.priceMultiplier()
              let roundedPrice = price.toFixed(ROUND_PRICE)
              this.$set(this.itemsReceive[i], 'price', roundedPrice)
            }
          }
        }, response => {
          // error callback
        })
      },
      /**
       * Returns correct multiplier, based on given currency
       * this made cuz 1 RUB to BTC is a very small number
       * @param value
       * @returns {number}
       */
      priceMultiplier (value) {
        return value === 'RUB' ? RUB_PRICE_MULTIPLIER : PRICE_MULTIPLIER
      }
    },
    created () {
      /**
       * Initial getPrices call, when selected default first item of itemsGive
       */
      this.itemsGive.map(item => {
        if (item.hasOwnProperty('selected') && item.selected) {
          this.selectedItem = item
          return this.getPrices(item.abbr)
        }
      })
    }
  }
</script>

<style lang="scss">

</style>
