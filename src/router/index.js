import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes: [
     
      {
         path: "/",
         component: () => import("@/layout/AppLayout.vue"),
         children: [
            {
               path: "/home",
               name: "home",
               component: () => import("@/pages/Home/Home.vue"),
               children: [
                
                  {
                     path:":uri",
                     name: "details",
                     component: () => import("@/pages/Home/PlayerInfo.vue"),
                     props: true,
                  }
               ],
             
           
            },
          
         ],
      },
   ],
});

export default router;
