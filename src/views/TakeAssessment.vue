<template>

    <div class="d-md-flex">
        <div>
            <ApplicantSideBar />
        </div>

        <div>

            <div class="header assessment-header">
                <div id="">
                    <h2 class="dashboard-header">Take Assessment</h2>
                    <p class="fst-italic fs-6">Click the button below to start assessment, you have limited time for this test</p>
                </div>

                <div class="assessment-timer-wrapper">
                    <p class="assessment-timer-text">Timer</p>
                    <p class="timer"><span class="timer">00</span><span class="min">min</span><span>000</span><span class="sec">sec</span>  </p>
                </div>
            </div>

            <div class="take-assessment-content">
                <img class="load-icon" src="../assets/icons/loading-icon.svg" alt="load" />
                <p class="ms-auto me-auto text-center mt-4">We have 4 days left until the next assessment. <br/>Watch this space</p>
                
                <router-link class="dashboard-link ms-auto me-auto" :to="{ name: 'AssessmentQuestions'}">
                    <button class="btn-take-assessment ms-auto me-auto">Take Assessment</button>
                </router-link>
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