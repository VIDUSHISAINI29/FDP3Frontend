<script setup>
import {onMounted, ref, watch} from "vue"
import Navbar from '@/layout/Navbar.vue'
import {useGlobalStore} from'@/stores/global.js'
const global = useGlobalStore();
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

const date = ref(null);
const year = ref('2017');
let number = '17'

watch(date, async() => {
   console.log('i am global number in details', global.yearNumber);
   
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
    // playerRecord.value = await fetchPlayersData(`${import.meta.env.VITE_BACKEND_URL}players-data-17`)
    console.log('in load data in details number is', number);
    number = global.yearNumber 
    console.log('i am global number in details', global.yearNumber);
    playerRecord.value = await fetchPlayersData(`${import.meta.env.VITE_BACKEND_URL}players-data-${number}`)
    playerPhoto.value = playerRecord.value[0].photo
    for( let i = 0; i < playerRecord.value.length; i++){
        if(playerRecord.value[i].name == props.uri){
            playersArray.value = playerRecord.value[i]
        }
        console.log('details of player',playerRecord.value);
        
    }
    
}
 onMounted(async() => {
    await loadData()
 })

</script>

<template>
    <div class="tw-bg-gradient-to-br tw-select-none tw-from-[#c0eefd] tw-via-[#c1c1fd] tw-to-[#efcad1]  tw-w-full tw-h-screen tw-p-1 tw-flex tw-pt-6 tw-flex-col tw-items-center">

      

        <div class="tw-w-[800px]  tw-p-1 tw-flex tw-justify-center">
            <div class=" tw-p-5 tw-w-[65%] tw-text-lg tw-rounded-3xl tw-gap-2 tw-text-cyan-300 tw-bg-black tw-opacity-50 tw-font-semibold tw-flex tw-flex-col ">
<div class="tw-flex ">
    <span class="tw-text-white tw-w-52">Player ID </span><span class="tw-text-white tw-w-20">:</span> <span>{{ playersArray.ID }}</span>
</div>
<div class="tw-flex ">
    <span class="tw-text-white tw-w-52">Height </span><span class="tw-text-white tw-w-20">:</span> <span>{{ playersArray.height }}</span>
</div>
<div class="tw-flex ">
    <span class="tw-text-white tw-w-52">Weight </span><span class="tw-text-white tw-w-20">:</span> <span>{{ playersArray.weight }}</span>
</div>
<div class="tw-flex ">
    <span class="tw-text-white tw-w-52">Club Name  </span><span class="tw-text-white tw-w-20">:</span> <span>{{ playersArray.club }}</span>
</div>
<div class="tw-flex ">
    <span class="tw-text-white tw-w-52">Nationality </span><span class="tw-text-white tw-w-20">:</span> <span>{{ playersArray.nationality }}</span>
</div>           
<div class="tw-flex ">
    <span class="tw-text-white tw-w-52">Date of Joining </span><span class="tw-text-white tw-w-20">:</span> <span>{{ playersArray.joined }}</span>
</div>   
<div class="tw-flex ">
    <span class="tw-text-white tw-w-52">Rating for Agility </span><span class="tw-text-white tw-w-20">:</span> <span>{{ playersArray.agility }}</span>
</div>        
<div class="tw-flex ">
    <span class="tw-text-white tw-w-52">Rating for Stamina </span><span class="tw-text-white tw-w-20">:</span> <span>{{ playersArray.stamina }}</span>
</div>
<div class="tw-flex ">
    <span class="tw-text-white tw-w-52">Rating for Volleys </span><span class="tw-text-white tw-w-20">:</span> <span>{{ playersArray.volleys }}</span>
</div>
<div class="tw-flex ">
    <span class="tw-text-white tw-w-52">Rating for Balance </span><span class="tw-text-white tw-w-20">:</span> <span>{{ playersArray.balance }}</span>
</div>
<div class="tw-flex ">
    <span class="tw-text-white tw-w-52">Rating for Shot Power </span><span class="tw-text-white tw-w-20">:</span> <span>{{ playersArray.shotPower }}</span>
</div>
<div class="tw-flex ">
    <span class="tw-text-white tw-w-52">Rating for Sprint Speed </span><span class="tw-text-white tw-w-20">:</span> <span>{{ playersArray.sprintSpeed }}</span>
</div>
<div class="tw-flex ">
    <span class="tw-text-white tw-w-52">Rating for Photo </span><span class="tw-text-white tw-w-20">:</span> <a class="tw-underline" :href="playersArray.photo">Photo</a>
</div>
<div class="tw-flex ">
    <span class="tw-text-white tw-w-52">Rating for Flag </span><span class="tw-text-white tw-w-20">:</span> <a class="tw-underline" :href="playersArray.flag">Photo</a>
</div>

                    
                    

                    
                   
            </div>
            <!-- <div class="tw-p-1 tw-w-[200px]">
               <span class="tw-text-blue-950 tw-font-semibold tw-text-xl">{{playersArray.name}}</span>
            </div> -->
        </div>
    </div>
</template> 