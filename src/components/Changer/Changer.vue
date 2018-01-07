<template>
  <v-layout row wrap>
    <v-flex md4>
      <changerLeft :items="items" header="You send" v-on:itemGive="itemSelected"/>
    </v-flex>
    <v-flex md4>
      <changerRight :items="items" header="You receive"/>
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
        items: [
          {
            id: 1,
            image: '',
            title: 'Сбербанк',
            code: 'RUB',
            per: 100,
            selected: true,
            currencyRate: 1,
            disabled: false,
            disableCurrencies: []
          },
          {
            id: 2,
            image: '',
            title: 'Тинькофф',
            code: 'RUB',
            per: 100,
            selected: false,
            currencyRate: 1,
            disabled: false,
            disableCurrencies: []
          },
          {
            id: 3,
            image: '',
            title: 'ADV Cash',
            code: 'USD',
            per: 1,
            selected: false,
            currencyRate: 1,
            disabled: false,
            disableCurrencies: []
          },
          {
            id: 4,
            image: '',
            title: 'Ethereum',
            code: 'ETH',
            per: 1,
            selected: false,
            currencyRate: 1,
            disabled: false,
            disableCurrencies: []
          },
          {
            id: 5,
            image: '',
            title: 'Bitcoin',
            code: 'BTC',
            per: 1,
            selected: false,
            currencyRate: 1,
            disabled: false,
            disableCurrencies: []
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
      enableItem (item) {
        item.disabled = false
      },
      disableItem (item) {
        item.disabled = true
      },
      /**
       * Create new array with code of receiving currencies to paste it in GET URL
       * @param item {object}
       */
      getItemCode (item) {
        if (item.hasOwnProperty('code') && !item.selected) {
          this.enableItem(item)
          return item.code
        } else {
          this.disableItem(item, true)
        }
      },
      getCurrenciesToChange () {
        return this.items.map(item => {
          return this.getItemCode(item)
        })
      },
      /**
       * Add class when selected
       * @param item
       */
      itemSelected (item) {
        this.items.filter(i => {
          i === item ? i.selected = true : i.selected = false
        })
        this.getPrices(item.code)
      },
      /**
       * Makes a GET call, based on currencies to change
       * @param value {string} is a currency`s code
       */
      getPrices (value) {
        const currencies = this.getCurrenciesToChange()
        const url = `https://min-api.cryptocompare.com/data/price?fsym=${value}&tsyms=${currencies.splice('').join(',')}`

        this.$http.get(url).then(response => {
          const data = response.data
          // console.log('data', response.data)
          /**
           * Add new property 'price' for every item to show it on page
           * based on data
           */
          for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].hasOwnProperty('code')) {
              let price = data[this.items[i].code] * this.priceMultiplier(value) * this.items[i].currencyRate
              let roundedPrice = price.toFixed(ROUND_PRICE)
              this.$set(this.items[i], 'price', roundedPrice)
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
       * Initial getPrices call, when selected default first item of items
       */
      this.items.map(item => {
        if (item.hasOwnProperty('selected') && item.selected) {
          this.selectedItem = item
          return this.getPrices(item.code)
        }
      })
    }
  }
</script>

<style lang="scss">

</style>
