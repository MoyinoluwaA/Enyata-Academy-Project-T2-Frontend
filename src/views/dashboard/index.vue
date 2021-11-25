<template>
  <div>
        <ApplicantSideBar />

        <div class="dashboard-main">    
            <router-view />
        </div>

  </div>
</template>

<script>
import ApplicantSideBar from "@/components/ApplicantSideBar.vue"
export default {
    components: {
        ApplicantSideBar,
    },
}
</script>