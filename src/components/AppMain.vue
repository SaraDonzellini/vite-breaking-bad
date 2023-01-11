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
          // console.log(response.data.data);
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
    <div class="row d-flex flex-wrap ">
      <div class="col-12">
        <div class="card box m-2" v-for="card in store.cardList">
          <img v-for="child in card.card_images" :src="child.image_url" :alt="card.name">
          <div>
            <h5 class="card-title">{{ card.name }}</h5>
            <p class="card-text">{{ card.type }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.box {
  width: 28rem;
  display: flex;
  // flex-direction: column;
  flex-wrap: wrap;
  color: black;
  

  img {
    height: 100%;
  }
}
</style>