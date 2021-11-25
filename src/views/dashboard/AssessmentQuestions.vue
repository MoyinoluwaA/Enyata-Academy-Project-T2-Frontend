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
                    <span class="timer">00</span>
                    <span class="timer-min">min</span>
                    <span>010</span>
                    <span class="timer-sec">sec</span>  
                </p>
            </div>
        </div>

        <div class="assessment-question-wrapper mb-5">
            <p class="question-number text-center fw-bold fs-6 fst-italic">Question 1</p>
            <p class="question text-center fw-bold fs-4 fst-italic">What is the purpose of HDR technology?</p>

            <div class="">
                <ul class="applicant-question p-0 mx-auto">
                    <li>
                        <img src="../../assets/icons/option.svg" alt="option" />
                        <span class="question-option ms-4">
                            A. To reduce the file size of images and videos.
                        </span>
                    </li>

                    <li>
                        <img src="../../assets/icons/option.svg" alt="option" />
                        <span class="question-option ms-4">
                            B. To speed up 3D rendering performance.
                        </span>
                    </li>

                    <li>
                        <img src="../../assets/icons/option-answered.svg" alt="option" />
                        <span class="question-option applicant-selected-answer ms-4">
                            C. To support higher video resolutions.
                        </span>
                    </li>

                    <li>
                        <img src="../../assets/icons/option.svg" alt="option" />
                        <span class="question-option ms-4">
                            D. To display more colors in images and videos
                        </span>
                    </li>
                </ul>
            </div>

            <div class="assessment-btn">
                <Button btnText="Previous" btnStyle="btn-previous" />
                <Button btnText="Next" btnStyle="btn-next" />
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

export default {
    components: {
        Button
    }
}
</script>
