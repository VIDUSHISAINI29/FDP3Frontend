<script setup>

import PlayersData from '@/components/PlayersData.vue'
import Navbar from '@/layout/Navbar.vue'
import {useRoute} from "vue-router";
import PlayerInfo from './Details.vue'
import {useGlobalStore} from'@/stores/global.js'
const global = useGlobalStore();
const date = ref(null);
const year = ref('2017');
let number = '17'
const route = useRoute();


import { onMounted, ref, watch } from "vue";

import axios from "axios";
const playersList = ref(null);
const playersArray = ref(null);

watch(date, async() => {
   console.log('i am global number in home', global.yearNumber);
   
   year.value = date.value.getFullYear().toString()
   // console.log('date just is ',number);
   await loadData()
})

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
   console.log('in load data in home number is', number);
   number = global.yearNumber 
   console.log('i am global number in home', global.yearNumber);

   
    playersList.value = await fetchPlayersData(`${import.meta.env.VITE_BACKEND_URL}players-data-${number}`)
    // console.log('Players List = ', playersList.value);
    

}

 onMounted(async() => {
    await loadData()
 })

</script>

<template>
 <div v-if="!route.params.uri" class="tw-bg-gradient-to-br tw-select-none tw-from-[#c0eefd] tw-via-[#c1c1fd] tw-to-[#efcad1]   tw-h-[120vh] tw-flex tw-flex-col tw-items-center">
  

  <PlayersData   />


 </div>
 <router-view v-else />
</template>

<style scoped></style>
