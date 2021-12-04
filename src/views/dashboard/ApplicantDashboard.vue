<template>
    <div class="dashboard-main-content">
        <div>
            <h2 class="dashboard-header-wrapper">Dashboard</h2>
            <p class="fst-italic fs-6" v-if="status === 'approved'">Your Application is approved, kindly watch the space to know your assessment date</p>
            <p class="fst-italic fs-6" v-else-if="status === 'pending'">Your Application is currently being review, you wil be notified if successful</p>
            <p class="fst-italic fs-6" v-else>Sorry, you didn't meet the requirement for this current application, kindly wait till next batch</p>
        </div>

        <div class="dashboard-content d-flex flex-column flex-sm-row">
            <div>
                <p class="application-date">Date of Application</p>
                <h3 class="text-large">{{ assessment_start_date.slice(0, 10) }}</h3>
                <img src="../../assets/icons/date-of-application-status.svg" alt="status" />
                <p class="application-sub-text" v-if="status === 'approved'">
                    <span>
                        {{ 
                            (Number((assessmentDate.replace('-', '').replace('-', '').slice(0, 8))) - 
                            Number(currentDate.toISOString().replace('-', '').replace('-', '').slice(0, 8)))
                        }}
                    </span> days since applied</p>
                <p class="application-sub-text" v-else>Kindly wait till next batch</p>
            </div>
            <div class="application-status mt-4 mt-sm-0">
                <p class="application-status-text">Application Status</p>
                <h3 class="text-large" v-if="status === 'approved'">{{ status.replace('a', 'A') }}</h3>
                <h3 class="text-large" v-else>{{ status.replace('p', 'P') }}</h3>
                <img src="../../assets/icons/pending-status.svg" alt="status" />
                <p class="application-sub-text" v-if="status === 'approved'">Status approved</p>
                <p class="application-sub-text" v-else-if="status === 'pending'">We will get back to you</p>
                <p class="application-sub-text" v-else>Kindly look forward to the next batch</p>
            </div>
        </div>

        <div class="dashboard-bottom mb-5">
            <div class="col-lg-6 col-12">
                <div class="update-wrapper me-auto">
                    <p class="p-4 fw-bold">Updates</p>
                    <div class="text-center">
                        <p class="dashboard-instructions">{{ instructions }} and stop complaining</p>
                        <img class="update-lines p-4 img-fluid" src="../../assets/icons/update-line.svg" alt="line" />
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-12">
                    <div class="update-wrapper mt-4 mt-lg-0 ms-auto">
                        <p class="p-4 fw-bold">Take Assessment</p>
                        <div class="assessment-cta">    
                            <p class="fs-6 fw-normal text-center mt-auto mb-auto" v-if="status === 'approved'">We have 
                                <span>
                                    {{ 
                                        (Number((assessmentDate.replace('-', '').replace('-', '').slice(0, 8))) - 
                                        Number(currentDate.toISOString().replace('-', '').replace('-', '').slice(0, 8)))
                                    }}    
                                </span> 
                                days left until the next assessment.<br/>Watch this space
                            </p>

                            <p class="fs-6 fw-normal text-center mt-auto mb-auto" v-else-if="status === 'pending'">We have 
                                <span>
                                    {{ 
                                        (Number((assessmentDate.replace('-', '').replace('-', '').slice(0, 8))) - 
                                        Number(currentDate.toISOString().replace('-', '').replace('-', '').slice(0, 8)))
                                    }}    
                                </span> 
                                days left until the next assessment.<br/>Watch this space
                            </p>

                            <p class="fs-6 fw-normal text-center mt-auto mb-auto" v-else>No assessment for you for this batch</p>
                            <router-link :to="{ name: 'TakeAssessment'}">
                                <Button btnText='Take Assessment' btnStyle='btn--gray mt-4' />
                            </router-link>
                        </div>
                    </div>
            </div>
        </div>

    </div>
</template>

<script>
import Button from "../../components/Button.vue"
import ApplicationService from '@/services/application'

export default {
    components: {
        Button
    },
    data() {
        return {
            assessment_start_date: '',
            status: '',
            currentDate: '',
            assessmentDate: '',
            instructions: ''
        }
    },
    async mounted() {
        try {
            this.currentDate = new Date()

            const res = await ApplicationService.getApplicantStatus()
            if (res.code === 200) {
                this.assessment_start_date = res.data.academy.assessment_start_date
                this.status = res.data.applicant.status
                this.assessmentDate = res.data.academy.assessment_start_date
                this.instructions = res.data.academy.academy_instruction
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
