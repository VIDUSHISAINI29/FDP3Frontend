<script setup>
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
    playersList.value = await fetchPlayersData(`${import.meta.env.VITE_BACKEND_URL}players-data`)
    console.log('Players List = ', playersList.value[0]);

}
 onMounted(async() => {
    await loadData()
 })

</script>
<template>
    <div class="tw-bg-[#1c1b22] tw-text-gray-400 tw-w-full tw-flex tw-justify-center tw-mt-14">
        <div class=" tw-w-11/12 tw-p-1 tw-flex tw-flex-col tw-items-center">
         <div class="header tw-w-4/5 tw-border-[#08d783]   tw-border-2 tw-text-white  tw-flex tw-justify-evenly">
            <span class=" tw-w-52 tw-text-center tw-border-r-2 tw-p-2 tw-border-[#08d783]  tw-font-bold">Name</span>
            <span class=" tw-w-52 tw-text-center tw-border-[#08d783]  tw-border-r-2 tw-p-2  tw-font-bold">Nationality</span>

            <span class=" tw-w-52 tw-text-center tw-border-[#08d783]  tw-border-r-2 tw-p-2  tw-font-bold">Club</span>
            <span class=" tw-w-52 tw-text-center tw-border-[#08d783]   tw-p-2  tw-font-bold">More Info.</span>

         </div>
         <div v-for="(player, index) in playersList" :key="index" class=" tw-w-4/5 tw-border-[#08d783]   tw-border  tw-flex tw-justify-evenly">
            <span class=" tw-w-52 tw-text-center tw-border-[#08d783]  tw-border-r tw-p-1 tw-font-semibol">{{player.name}}</span>
            <span class=" tw-w-52 tw-text-center tw-border-[#08d783]  tw-border-r tw-p-1  tw-font-semibold tw-cursor-pointer">{{player.nationality}}</span>

            <span class=" tw-w-52 tw-text-center tw-border-[#08d783]  tw-border-r tw-p-1  tw-font-semibold">{{player.club}}</span>
             <span class=" tw-w-52 tw-text-center tw-border-[#08d783] tw-p-1   tw-font-bold tw-text-[#08d783] ">More Info.</span>

         </div>
        </div>
    </div>
</template>