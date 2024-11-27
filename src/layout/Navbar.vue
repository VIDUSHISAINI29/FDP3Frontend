<script setup>

// import { useAuth0 } from '@auth0/auth0-vue';
// import { useRoute } from 'vue-router';

// const auth0 = useAuth0();
// const router = useRoute();

// function logout() {
//   auth0.logout({
//     logoutParams: {
//       returnTo: window.location.origin
//     }
//   }).then(() => {
//     router.push('/log-in'); // Or wherever you want to redirect after logout
//   }).catch((error) => {
//     console.log('Logout error:', error);
//   });

//   console.log('Logout function triggered');
// }
</script>

<template>
    <div class="tw-w-full">
        <div class="  tw-items-center tw-shadow-2xl tw-w-full tw-text-[#1c1b22] tw-text-lg tw-font-semibold tw-flex tw-p-3 tw-px-8 tw-justify-between tw-bg-[#fff]">
        <div  class="tw-cursor-pointer">
      <img class="tw-w-10 tw-h-10    " src="/Images/football.webp" alt="">   
      </div>
        <div class=" tw-flex tw-gap-10  ">
            <router-link to="/home" class="tw-cursor-pointer tw-font-semibold tw-flex tw-text-[#000] tw-border-b-[3px] tw-border-black tw-items-center tw-justify-center tw-px-1 "> Home</router-link>
            <router-link to="/details" class="tw-cursor-pointer tw-flex tw-text-[#000] tw-border-b-[3px] tw-border-black tw-items-center tw-justify-center  tw-px-1 ">Details</router-link>
        </div>
        <div class="tw-w-20 tw-flex tw-text-[#fff] tw-items-center tw-justify-center tw-rounded-md tw-p-1 tw-bg-black"><span class="tw-cursor-pointer" @click="logout">Logout</span></div>
      </div>
    </div>
</template>