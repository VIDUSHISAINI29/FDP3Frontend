<script setup>
import { onMounted, ref, watch } from "vue";
import DatePicker from 'primevue/datepicker';
import dayjs from "dayjs"
import axios from "axios";
import PlayerInfo from '@/pages/Home/PlayerInfo.vue'
const playersList = ref(null);
const playersArray = ref(null);
const date = ref(null);
const year = ref('2017');
let number = '17'

const fetchPlayersData = async(url) => {
   try {
      const result = await axios.get(url);
      return result.data
      } catch (error) {
      console.error("Error in fetching data in frontend using api");
   }
}
watch(date, async() => {
   
   year.value = date.value.getFullYear().toString()
   number = year.value.slice(2,4) 
   console.log('date just is ',number);
   await loadData()
})
async function loadData(){
 
   
   //  playersList.value = await fetchPlayersData(`${import.meta.env.VITE_BACKEND_URL}players-data-17`)
   //  console.log('Players List in Players Data = ', playersList.value);
console.log('trut ',number);

    playersList.value = await fetchPlayersData(`${import.meta.env.VITE_BACKEND_URL}players-data-${number}`)
    console.log('Players List in Players Data = ', playersList.value);

}
 onMounted(async() => {
    await loadData()
 })

</script>
<template>
    <div class=" tw-text-cyan-800 tw-w-full tw-flex tw-justify-center tw-mt-14">
        <div class=" tw-w-11/12 tw-p-1 tw-flex tw-flex-col tw-items-center">
        <div class="tw-my-3 tw-flex ">
         <span class="tw-text-blue-950 tw-font-bold tw-p-1">Select Year :</span>
         <DatePicker v-model="date" view="year" dateFormat="yy" />
        </div>
        <div class="tw-w-4/5 tw-my-5 tw-bg-white tw-py-2 tw-rounded-md tw-flex tw-justify-center"><span class="tw-text-rose-700 tw-font-semibold">Table of FIFA Players of the Year {{ year }}</span></div>
         <div class="header tw-w-4/5 tw-border-blue-950   tw-border-2 tw-text-blue-950  tw-flex tw-justify-evenly">
            <span class=" tw-w-52 tw-text-center tw-border-r-2 tw-p-2 tw-border-blue-950  tw-font-bold">Name</span>
            <span class=" tw-w-52 tw-text-center tw-border-blue-950  tw-border-r-2 tw-p-2  tw-font-bold">Nationality</span>

            <span class=" tw-w-52 tw-text-center tw-border-blue-950  tw-border-r-2 tw-p-2  tw-font-bold">Club</span>
            <span class=" tw-w-52 tw-text-center tw-border-blue-950   tw-p-2  tw-font-bold">More Info.</span>

         </div>
         <div v-for="(player, index) in playersList" :key="index" class=" tw-w-4/5 tw-border-blue-950   tw-border  tw-flex tw-justify-evenly">
            <span class=" tw-w-52 tw-text-center tw-border-blue-950  tw-border-r tw-p-1 tw-font-semibold">{{player.name}}</span>
            <span class=" tw-w-52 tw-text-center tw-border-blue-950  tw-border-r tw-p-1  tw-font-semibold tw-cursor-pointer">{{player.nationality}}</span>

            <span class=" tw-w-52 tw-text-center tw-border-blue-950  tw-border-r tw-p-1  tw-font-semibold">{{player.club}}</span>
             <router-link :to="`/home/${player.name}`"class=" tw-w-52 tw-text-center tw-border-blue-950 tw-p-1 tw-cursor-pointer tw-font-bold">More Info.</router-link>
             
         </div :playerId="player.ID" >
        </div>
        
    </div >
</template>