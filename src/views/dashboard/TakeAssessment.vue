<template>
    <div class="mb-5">
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
            <img class="load-icon" src="../../assets/icons/loading-icon.svg" alt="load" />
            <p class="ms-auto me-auto text-center mt-4">We have 4 days left until the next assessment. <br/>Watch this space</p>
            
            <router-link class="dashboard-link ms-auto me-auto" :to="{ name: 'AssessmentQuestions'}">
                <Button btnText="Take Assessment" btnStyle="btn btn--gray" class="mt-4 mx-auto" />
            </router-link>
        </div>
    </div>
</template>

<script>
import Button from "@/components/Button.vue"
export default {
    components: {

        Button
    }
}
</script>