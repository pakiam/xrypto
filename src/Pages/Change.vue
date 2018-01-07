<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs3>
        <v-select
          v-bind:items="states"
          v-model="e1"
          label="Select"
          single-line
          auto
          hide-details
        >
          <template slot="item" slot-scope="data">
            <template>
              <v-list-tile-avatar>
                <img v-bind:src="data.item.avatar"/>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>{{ data.item }}</v-list-tile-title>
              </v-list-tile-content>
            </template>
          </template>

        </v-select>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        e1: null,
        states: [
          'Alabama', 'Alaska', 'American Samoa', 'Arizona',
          'Arkansas', 'California', 'Colorado', 'Connecticut',
          'Delaware', 'District of Columbia', 'Federated States of Micronesia',
          'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
          'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
          'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
          'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
          'Missouri', 'Montana', 'Nebraska', 'Nevada',
          'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
          'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',
          'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
          'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
          'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
          'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
        ]
      }
    }
  }
</script>

<style>

</style>
