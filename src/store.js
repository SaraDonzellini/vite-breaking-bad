import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
    cardList: [],
    selectArchetype:"",
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
        this.getCards(this.selectArchetype);
        }
})