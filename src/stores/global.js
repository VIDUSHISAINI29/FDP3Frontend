import {ref, computed} from "vue";
import { defineStore } from "pinia";
export const useGlobalStore = defineStore('global' , () => {
    const yearNumber = ref('17');
    return { yearNumber }
})