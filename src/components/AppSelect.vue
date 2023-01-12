<script>
import { store } from '../store.js'


export default {
  name: "AppSelect",
  data() {
    return {
      store,
    }
  },


}
</script>

<template >
  <label for="archetype">Choose an archetype:</label>
  <select name="archetype" id="archetype" 
  v-model="store.selectArchetype" 
  @change="$emit('getCards')">
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