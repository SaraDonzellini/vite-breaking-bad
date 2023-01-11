<script>
import { store } from '../store.js'
import axios from "axios";

export default {
  name: 'AppMain',
  data() {
    return {
      store,
    }
  },
  methods: {
    getCards() {
      axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=10&offset=0', {
        // params: {
        // }
      })
        .then((response) => {
          console.log(response.data.data);
          this.store.cardList = response.data.data;
        })
        .catch(function (error) {
          console.log(error);
        })
    }
  },
  created() {
    this.getCards();
  },
}
</script>

<template>
  <section class="container">
    <div class="row">
      <div class="col-12">
        <h1>
          Yu-Gi-Oh Api
        </h1>
      </div>
    </div>
  </section>
  <section class="container">
    <div class="row">
      <div class="col-6">
        <p v-for="card in store.cardList">
        <img :src="card.card_images" :alt="card.name">
          {{ card.name }} {{ card.card_images }}

        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss">

</style>