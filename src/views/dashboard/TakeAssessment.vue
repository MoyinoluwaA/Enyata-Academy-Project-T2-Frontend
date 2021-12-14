<template>
    <div class="mb-5">
        <div class="header assessment-header">
            <div id="">
                <h2 class="dashboard-header">Take Assessment</h2>
                <p class="fst-italic fs-6">Click the button below to start assessment, you have limited time for this test</p>
            </div>
        </div>

        <div class="assessment-content">
            <img class="load-icon" src="../../assets/icons/loading-icon.svg" alt="load" />
            <p class="ms-auto me-auto text-center mt-4">
                We have {{ getDaysToAssessment }} {{ getDaysToAssessment > 1 ? 'days' : 'day' }} 
                left until the next assessment. <br/>Watch this space
            </p>
            
            <router-link v-if="getApplicantStatus === 'approved'" class="dashboard-link ms-auto me-auto" :to="{ name: 'AssessmentInstructions'}">
                <Button btnText="Take Assessment" btnStyle="btn btn--purple" class="mt-4 mx-auto" />
            </router-link>
            <span v-else class="mx-auto">
                <Button btnText='Take Assessment' btnStyle='btn--gray mt-4' />
            </span>
        </div>
    </div>
</template>

<script>
import Button from "@/components/Button.vue"
import { mapGetters } from 'vuex'

export default {
    name: 'TakeAssessment',
    components: {
        Button
    },
    computed: {
        ...mapGetters(['getDaysToAssessment', 'getApplicantStatus'])
    } 
}
</script>
