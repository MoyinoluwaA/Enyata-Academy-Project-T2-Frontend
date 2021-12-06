<template>
    <div>
        <div class="assessment-header">
            <div class="dashboard-header-wrapper text-center text-md-start">
                <h2 class="dashboard-header">Take Assessment</h2>
                <p class="fst-italic fs-6">Click the finish button below to submit assessment, you can go back at any time to edit your answers.</p>
            </div>

            <div class="assessment-timer-wrapper mt-4 mt-md-0">
                <p class="assessment-timer-text mb-1">Timer</p>
                <p class="timer">
                    <span class="timer">{{ mins }}</span>
                    <span class="timer-min">min</span>
                    <span>{{ secs }}</span>
                    <span class="timer-sec">sec</span>  
                </p>

           
            </div>
        </div>

        <div class="assessment-question-wrapper mb-5" v-if="assessments.length > 0">
            <p class="question-number text-center fw-bold fs-6 fst-italic">Question <span>{{ question_number }}</span></p>
            <p class="question text-center fw-bold fs-4 fst-italic">{{currentQuestion.question}}</p>

            <div class="">
                <ul class="applicant-question p-0 mx-auto">
                    <li>
                        <img src="../../assets/icons/option.svg" alt="option" />
                        <span class="question-option ms-4">
                             <span>{{currentQuestion.options.b}}</span>
                        </span>
                    </li>

                    <li>
                        <img src="../../assets/icons/option.svg" alt="option" />
                        <span class="question-option ms-4">
                            B. <span>{{currentQuestion.options.b}}</span>
                        </span>
                    </li>

                    <li>
                        <img src="../../assets/icons/option-answered.svg" alt="option" />
                        <span class="question-option applicant-selected-answer ms-4">
                            C. <span>{{currentQuestion.options.c}}</span>
                        </span>
                    </li>

                    <li>
                        <img src="../../assets/icons/option.svg" alt="option" />
                        <span class="question-option ms-4">
                            D. <span>{{currentQuestion.options.d}}</span>
                        </span>
                    </li>
                </ul>
            </div>

            <div class="assessment-btn">
                <Button btnText="Previous" btnStyle="btn-previous" @click.native="back" />
                <Button btnText="Next" btnStyle="btn-next" @click.native="next" :disabled='nextDisabled' />
            </div>

            <div class="text-center mt-4 mb-5">
                <router-link :to="{ name: 'AssessmentCompleted' }">
                    <Button btnText="Finish" btnStyle="btn--gray my-5" />
                </router-link>
            </div>
        </div>

    </div>
</template>

<script>
import Button from "@/components/Button.vue"
import ApplicationService from '@/services/application'

export default {
    components: {
        Button
    },
    data() {
        return {
            mins: '',
            secs: '',
            question_number: 1,
            assessments: [],
            currentQuestion: {},
            time: '',
            selectedAnswer: {},
            nextDisabled: false,
            batchId: 1,
            applicantId: ''
        }
    },
    methods: {
        startTimer(duration) {
            let timer = duration
            setInterval(() => {
                this.mins = parseInt(timer / 60, 10);
                this.secs = parseInt(timer % 60, 10);

                this.mins = this.mins < 10 ? "0" + this.mins : this.mins;
                this.secs = this.secs < 10 ? "0" + this.secs : this.secs;

                if (--timer < 0) {
                    timer = duration;
                }
            }, 1000);
        },

        next() {
            this.nextDisabled = false
            if (this.question_number <= this.assessments.length-1) {
                this.currentQuestion = this.assessments[this.question_number]
                this.question_number++
            } else {
                this.nextDisabled = true
            }
        },
        back() {
            if (this.question_number > 1) {
                this.question_number--
                this.currentQuestion = this.assessments[this.question_number-1]
                this.nextDisabled = false
            }
        }
    },
    async mounted() {
        try {
            const res = await ApplicationService.getApplicantStatus()
            if (res.code === 200) {
                this.applicantId = res.data.applicant.id

                 try {
                    const res = await ApplicationService.getAssessmentQuestions(this.batchId, this.applicantId)
                    if (res.code === 200) {
                        console.log(res)
                        this.assessments = res.data.assessment_test
                        this.currentQuestion = this.assessments[0]
                        this.time = res.data.time_allotted
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
        } catch (error) {
             if (error.response.data.status === 401) {
                this.$dtoast.pop({
                    preset: "error",
                    heading: "Unauthenticated user",
                    content: "Kindly go back to sign in",
                })
            }    
        }
        
        this.startTimer(this.time * 60)
    }
}
</script>
