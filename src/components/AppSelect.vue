<script>
import { store } from '../store.js'
import axios from "axios";


export default {
  name: "AppSelect",
  data() {
    return {
      store,
    }
  },
  methods: {
    getCards(archetype) {
      axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php', {
        params: {
          archetype: archetype,
          num: 10,
          offset: 0,
        }
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
    this.getCards(store.selectArchetype);
  }

}
</script>

<template >
  <label for="archetype">Choose an archetype:</label>
  <select name="archetype" id="archetype" v-model="store.selectArchetype"
    @change="getCards(store.selectArchetype)">
    <option value="Alien">Alien</option>
    <option value="Laval">Laval</option>
    <option value="Vylon">Vylon</option>
    <option value="Inzektor">Inzektor</option>
    <option value="Umi">Umi</option>
    <option value="Gusto">Gusto</option>
  </select>
</template>

<style lang="scss" scoped>

</style>