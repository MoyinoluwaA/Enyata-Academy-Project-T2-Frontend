<template>
    <div class="dashboard-main-content">
        <div>
            <h2 class="dashboard-header-wrapper">Assessment Instructions</h2>
            <p class="fst-italic fs-6">Kindly take your time to read the instructions carefully before you begin your assessment</p>
        </div>

        <div class="assessment-instruction-wrapper mt-4">
            <ul class="assessment-instruction">
                <li class="">Click start to get started with your quiz</li>
                <li class="mt-2">The time starts the moment you click the Start Test button.</li>
                <li class="mt-2">Click on Next button to move to the next question. You can click on previous button to back to 
                    any previous or unanswered questions.
                </li>
                <li>There is a total of 30 questions in this assessment</li>
                <li class="mt-2">Note that each question consist of 4 options of which you are required to select only one as your answer</li>
                <li class="mt-2">The total score for the quiz is based on your responses to all questions.
                    If you respond incorrectly to a question or retake a question again and get the correct response,
                    your quiz score will reflect it appropriately. However, your quiz will not be graded,
                    if you skip a question or exit before responding to all the questions.
                </li>
                <li class="mt-2">You will be automatically submitted if you fail to click to on the submit button within your time frame</li>
                <li class="mt-2">Click on submit button when you are done with your assessment.</li>
            </ul>
        </div>

        <div class="d-flex">
            <router-link class="dashboard-link ms-auto me-auto" :to="{ name: 'AssessmentQuestions'}">
                    <Button btnText="Start" btnStyle="btn btn-start" class="mt-4 mx-auto" />
            </router-link>
        </div>
    </div>
</template>

<script>
import Button from "@/components/Button.vue"
export default {
    name: 'AssessmentInstructions',
    components: {
        Button
    }
}
</script>