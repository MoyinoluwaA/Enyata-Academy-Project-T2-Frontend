<template>

    <div class="d-md-flex">
        <div>
            <ApplicantSideBar />
        </div>

        <div>

            <div class="header assessment-header">
                <div class="dashboard-header-wrapper">
                    <h2 class="dashboard-header">Take Assessment</h2>
                    <p class="fst-italic fs-6">Click the finish button below to submit assessment, you can go back at any time to edit your answers.</p>
                </div>

                <div class="assessment-timer-wrapper">
                    <p class="assessment-timer-text">Timer</p>
                    <p class="timer"><span class="timer">00</span><span class="min">min</span><span>010</span><span class="sec">sec</span>  </p>
                </div>
            </div>

            <div class="take-assessment-content assessment-question-wrapper">
                <p class="question-number text-center fw-bold fs-6 fst-italic">Question 1</p>
                <p class="question text-center fw-bold fs-4 fst-italic">What is the purpose of HDR technology?</p>

                <ul class="applicant-question">
                    <li>
                        <img src="../assets/icons/option.svg" alt="option" />
                        <span class="question-option ms-4">
                            A. To reduce the file size of images and videos.
                        </span>
                    </li>

                     <li>
                        <img src="../assets/icons/option.svg" alt="option" />
                        <span class="question-option ms-4">
                            B. To speed up 3D rendering performance.
                        </span>
                    </li>

                     <li>
                        <img src="../assets/icons/option.svg" alt="option" />
                        <span class="question-option ms-4">
                            C. To support higher video resolutions.
                        </span>
                    </li>

                     <li>
                        <img src="../assets/icons/option.svg" alt="option" />
                        <span class="question-option ms-4">
                            D. To display more colors in images and videos
                        </span>
                    </li>
                </ul>

                <div class="assessment-btn">
                    <button class="btn-previous">Previous</button>
                    <button class="btn-next">Next</button>
                </div>

                <button class="btn-finish">Finish</button>
                
                <!-- <p class="ms-auto me-auto text-center mt-4">We have 4 days left until the next assessment. <br/>Watch this space</p>
                <router-link :to="{ name: 'TakeAssessment'}">
                    <button class="btn-take-assessment ms-auto me-auto">Take Assessment</button>
                </router-link> -->
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