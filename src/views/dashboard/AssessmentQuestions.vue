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

            <div>
                <ul class="applicant-question p-0 mx-auto">
                    <li @click="selectAnswer($event)" class="options assessment-select-answer" :class="question_number" v-for="(option, index) in currentQuestion.options" :key="option.id">
                        <i class="bi bi-square" />
                        <span class="question-option ms-4">
                            {{ index.toUpperCase() }}. 
                            <span>{{ option }}</span>
                        </span>
                    </li>
                </ul>
            </div>

            <div class="assessment-btn">
                <Button btnText="Previous" btnStyle="btn-previous" @click.native="back" :disabled='prevDisabled' />
                <Button btnText="Next" btnStyle="btn-next" @click.native="next" :disabled='nextDisabled' />
            </div>

            <div class="text-center mt-4 mb-5">
                <Button btnText="Finish" btnStyle="btn--gray my-5" @click.native="submitAssessment" :disabled='finishDisabled' />
            </div>
        </div>

    </div>
</template>

<script>
import Button from "@/components/Button.vue"
import ApplicationService from '@/services/application'
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'AssessmentQuestions',
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
            selectedAnswers: {},
            nextDisabled: false,
            prevDisabled: true,
            finishDisabled: true
        }
    },
    computed: {
        ...mapGetters(['getBatchId', 'getApplicantId'])
    },
    methods: {
        ...mapActions(['saveApplicantDetails']),
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
            if (this.question_number <= this.assessments.length - 1) {
                this.currentQuestion = this.assessments[this.question_number]
                this.question_number++
                this.prevDisabled = false
            } 

            if (this.question_number === this.assessments.length) {
                this.nextDisabled = true
            }
        },
        back() {
            this.prevDisabled = false
           
            if (this.question_number > 1) {
                this.question_number--
                this.currentQuestion = this.assessments[this.question_number-1]
                this.nextDisabled = false
            } 

            if (this.question_number === 1) {
                this.prevDisabled = true
            }
        },
        selectAnswer(e) {
            const selectedAnswer = e.target.closest('li')
            this.selectedAnswers[this.question_number] = selectedAnswer.children[1].innerText.charAt(1)

            const options = document.getElementsByClassName('options')
            for (const option of options) {
                if (option.classList.contains('selected')) {
                    option.classList.remove('selected')
                }
            }

            selectedAnswer.classList.add('selected')
        },
        async submitAssessment() {
            try {
                const res = await ApplicationService.submitAssessment(this.batchId, this.applicantId, 
                    { assessment_answers: {...this.selectedAnswers} }
                )
                if (res.code === 200) {
                    // if (this.selectedAnswers[this.question_number].length === this.assessments.length ) {
                    //     this.finishDisabled = false
                    // }
                    this.$router.push({ name: 'AssessmentCompleted' })
                }
            } catch (error) {
                this.$dtoast.pop({
                    preset: "error",
                    heading: 'Error occured while submitting',
                    content: 'Please try submitting your assessment again or contact admin at feedback@enyata.com'
                })
            }
        }
    },
    async mounted() {
        try {
            const res = await ApplicationService.getApplicantStatus()
            if (res.code === 200) {
                this.applicantId = res.data.applicant.id
                this.batchId = res.data.applicant.batch_id

                const response = await ApplicationService.getAssessmentQuestions(this.batchId, this.applicantId)
                if (response.code === 200) {
                    this.assessments = response.data.assessment_test
                    this.currentQuestion = this.assessments[0]
                    this.time = response.data.time_allotted
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
    },
}
</script>
