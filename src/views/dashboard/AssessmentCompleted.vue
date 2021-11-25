<template>

    <div>
        <ApplicantSideBar />

        <div class="dashboard-main mb-5">
            <div class="header assessment-header">
                <div id="">
                    <h2 class="dashboard-header">Take Assessment</h2>
                    <p class="fst-italic fs-6">Thank you!</p>
                </div>

                <div class="assessment-timer-wrapper-completed">
                    <p class="assessment-timer-text">Timer</p>
                    <p class="timer"><span class="timer">23</span><span class="min">min</span><span>043</span><span class="sec">sec</span>  </p>
                </div>
            </div>

            <div class="take-assessment-content">
                <img class="load-icon" src="../../assets/icons/congratulatory-img.svg" alt="congratulations" />
                <p class="ms-auto me-auto text-center mt-4">We have received your assessment test, we will get back to you soon.<br/>Best of luck</p>
                
                <router-link class="dashboard-link ms-auto me-auto" :to="{ name: 'Home'}">
                    <!-- <Button btnText="Next" btnStyle="btn-next" /> -->
                    <Button btnText="Home" btnStyle="btn-home" />
                </router-link>
            </div>

        </div>

    </div>
  
</template>

<script>
import ApplicantSideBar from "@/components/ApplicantSideBar.vue"
import Button from "@/components/Button.vue"
export default {
    components: {
        ApplicantSideBar,
        Button
    }
}
</script>