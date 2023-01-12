<script>
import { store } from '../store.js'
import AppLoader from './AppLoader.vue'
import AppCards from './AppCards.vue'
// import AppSelect from './AppSelect.vue'

export default {
  name: 'AppMain',
  components: {
    AppLoader,
    AppCards,
    // AppSelect,
  },
  data() {
    return {
      store,
      isLoading: true,
    }
  },
  methods: {
    stopLoader() {
      this.isLoading = false
    }
  },
  created() {

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
  <!-- <section class="container">
    <AppSelect />
  </section> -->
  <section class="container">
    <!-- <AppLoader v-if="store.cardList.length === 0"/> -->
    <AppCards />
  </section>
</template>

<style lang="scss" scoped>

</style>