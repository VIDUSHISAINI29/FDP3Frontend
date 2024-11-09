<script setup>
import {onMounted, ref} from "vue"
const props =  defineProps({
    uri:String
})
onMounted(() => {
    console.log('Props Value',props.uri);
    
})

import axios from "axios";

const playersArray = ref('');
const playerRecord = ref([])
const playerPhoto = ref(null);


const fetchPlayersData = async(url) => {
   try {
      const result = await axios.get(url);
      return result.data
   } catch (error) {
      console.error("Error in fetching data in frontend using api");
   }
}

async function loadData(){
    // playerRecord.value = await fetchPlayersData(`${import.meta.env.VITE_BACKEND_URL}players-data-17`)
    playerRecord.value = await fetchPlayersData(`${import.meta.env.VITE_BACKEND_URL}players-data-18`)
    playerPhoto.value = playerRecord.value[0].photo
    for( let i = 0; i < playerRecord.value.length; i++){
        if(playerRecord.value[i].name == props.uri){
            playersArray.value = playerRecord.value[i]
        }
    }
    
}
 onMounted(async() => {
    await loadData()
 })

</script>

<template>
    <div class="tw-bg-gradient-to-br tw-select-none tw-from-[#c0eefd] tw-via-[#c1c1fd] tw-to-[#efcad1]  tw-w-full tw-h-screen tw-p-1 tw-flex tw-pt-20 tw-flex-col tw-items-center">
        <div class="tw-w-[800px]  tw-p-1 tw-flex tw-justify-center">
            <div class=" tw-p-1 tw-w-[300px] tw-text-base tw-gap-2 tw-text-rose-800 tw-font-semibold tw-flex tw-flex-col ">
                    <span><span class="tw-text-black">Player ID :</span> {{ playersArray.ID }}</span>
                    <span><span class="tw-text-black">Height :</span>  {{ playersArray.height }} feets</span>
                    <span><span class="tw-text-black">Weight:</span>  {{ playersArray.weight }}</span>
                    <span><span class="tw-text-black">Club Name :</span> {{ playersArray.club }}</span>
                    <span><span class="tw-text-black">Nationality :</span> {{ playersArray.nationality }}</span>
                    <span><span class="tw-text-black">Date of Joining :</span>  {{ playersArray.joined }}</span>
                    <span><span class="tw-text-black">Rating fro Agility :</span>  {{ playersArray.agility }}</span>
                    <span><span class="tw-text-black">Rating fro Stamina :</span>{{ playersArray.stamina }}</span>
                    <span><span class="tw-text-black">Rating fro Volleys :</span> {{ playersArray.volleys }}</span>
                    <span><span class="tw-text-black">Rating fro Balance :</span> {{ playersArray.balance }}</span>
                    <span><span class="tw-text-black">Rating fro Shot Power :</span> {{ playersArray.shotPower }}</span>
                    <span><span class="tw-text-black">Rating fro Sprint Speed :</span> {{ playersArray.sprintSpeed }}</span>
                    <span><span class="tw-text-black">Rating fro Sprint Photo :</span><a class="tw-underline" :href="playersArray.photo">Photo</a></span>
                    <span><span class="tw-text-black">Rating fro Sprint Flag :</span> <a class="tw-underline" :href="playersArray.flag">Flag</a></span>
            </div>
            <!-- <div class="tw-p-1 tw-w-[200px]">
               <span class="tw-text-blue-950 tw-font-semibold tw-text-xl">{{playersArray.name}}</span>
            </div> -->
        </div>
    </div>
</template>