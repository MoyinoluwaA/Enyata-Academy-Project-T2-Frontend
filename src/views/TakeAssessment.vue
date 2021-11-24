<template>

    <div class="d-flex">
        <div>
            <ApplicantSideBar />
        </div>

        <div class="header" id="top-header">
            
            <div id="">
                <h2 class="dashboard-header">Take Assessment</h2>
                <p class="fst-italic fs-6">Click the button below to start assessment, you have limited time for this test</p>
            </div>

        </div>

    </div>
  
</template>

<script>
import ApplicantSideBar from "@/components/ApplicantSideBar.vue"
export default {
    components: {
        ApplicantSideBar
    }
}
</script>