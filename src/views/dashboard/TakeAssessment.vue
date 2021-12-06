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
            <p class="ms-auto me-auto text-center mt-4">We have <span>{{ daysToAssessment }}</span> days left until the next assessment. <br/>Watch this space</p>
            
            <router-link class="dashboard-link ms-auto me-auto" :to="{ name: 'AssessmentInstructions'}">
                <Button btnText="Take Assessment" btnStyle="btn btn--purple" class="mt-4 mx-auto" />
            </router-link>
        </div>
    </div>
</template>

<script>
import Button from "@/components/Button.vue"
import ApplicationService from '@/services/application'
import { DateTime } from 'luxon'

export default {
    components: {
        Button
    },
    data() {
        return {
            daysToAssessment: ''
        }
    },
    async mounted() {
        try {
            const res = await ApplicationService.getApplicantStatus()
            if (res.code === 200) {
                const daysToAssessmentObject = DateTime.fromISO(res.data.academy.assessment_start_date)

                const daysToAssessment = Math.abs(daysToAssessmentObject.diffNow(['days']).toObject().days)

                if (daysToAssessment < 1) {
                    const hourstoAssessment = Math.abs(daysToAssessmentObject.diffNow(['hours']).toObject().hours)
                    this.hourstoAssessment = Math.floor(hourstoAssessment)
                }

                this.daysToAssessment = Math.floor(daysToAssessment)
            }
        } catch (error) {
             if (error.response.data.status === 401) {
                this.$dtoast.pop({
                    preset: "error",
                    heading: "Unauthenticated user",
                    content: "Kindly go back to sign in",
                })
            }
        }
    }
    
}
</script>