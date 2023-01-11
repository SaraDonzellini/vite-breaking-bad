<script>
import { store } from '../store.js'
import axios from "axios";
import AppLoader from './AppLoader.vue'

export default {
  name: 'AppMain',
  components: {
    AppLoader,
  },
  data() {
    return {
      store,
      isLoading : true,
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
    },

    stopLoader(){
      this.isLoading = false
    }
  },
  created() {
    this.getCards();

    setTimeout(() => {
      this.stopLoader
    }, 1500);
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
      <div class="col-12">
        <AppLoader v-if="store.cardList.length === 0"/>
        <div v-else class="card box m-2" v-for="card in store.cardList">
          <img v-for="child in card.card_images" class="card-img-top" :src="child.image_url" :alt="card.name">
          <div>
            <h4 class="card-title">{{ card.name }}</h4>
            <p class="card-text">{{ card.type }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.box {
  width: calc(100% / 6);
  display: flex;
  flex-wrap: wrap;
  color: black;
  text-align: center;

  img {
    height: 100%;
    width: 100%;
  }
}
</style>