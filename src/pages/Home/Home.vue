<script setup>

import PlayersData from '@/components/PlayersData.vue'
import Navbar from '@/layout/Navbar.vue'
import {useRoute} from "vue-router";
import PlayerInfo from './PlayerInfo.vue'

const route = useRoute();


import { onMounted, ref, watch } from "vue";

import axios from "axios";
const playersList = ref(null);
const playersArray = ref(null);

const fetchPlayersData = async(url) => {
   try {
      const result = await axios.get(url);
      return result.data
   } catch (error) {
      console.error("Error in fetching data in frontend using api");
   }
}

async function loadData(){
   //  playersList.value = await fetchPlayersData(`${import.meta.env.VITE_BACKEND_URL}players-data-17`)
    playersList.value = await fetchPlayersData(`${import.meta.env.VITE_BACKEND_URL}players-data-18`)
    // console.log('Players List = ', playersList.value);
    

}
 onMounted(async() => {
    await loadData()
 })

</script>

<template>
 <div v-if="!route.params.uri" class="tw-bg-gradient-to-br tw-select-none tw-from-[#c0eefd] tw-via-[#c1c1fd] tw-to-[#efcad1]   tw-h-[120vh] tw-flex tw-flex-col tw-items-center">
   <Navbar />

  <PlayersData   />


 </div>
 <router-view v-else />
</template>

<style scoped></style>
