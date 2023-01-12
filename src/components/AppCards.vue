<script>
import { store } from '../store.js'
import AppSelect from "./AppSelect.vue";

export default {
  name: 'AppCards',
  components: {
    AppSelect,
  },
  data() {
    return {
      store,
    }
  },

}
</script>

<template>
  <section class="container">
    <AppSelect />
  </section>
  <div class="row">
    <div class="col-4" v-for="card in store.cardList">
      <div class="card my_box m-2">
        <img v-for="child in card.card_images" class="card-img-top" :src="child.image_url" :alt="card.name">
        <div>
          <h4 class="card-title">{{ card.name }}</h4>
          <p class="card-text">{{ card.type }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.my_box {
  width: calc(100%);
  display: flex;
  flex-wrap: wrap;
  color: black;
  text-align: center;

  img .card-img-top {
    height: 100%;
    width: 100%;
  }
}
</style>