<template>
    <div class="mb-5">
        <div class="header assessment-header">
            <div>
                <h2 class="dashboard-header">Take Assessment</h2>
                <p class="fst-italic fs-6">Thank you!</p>
            </div>
        </div>

        <div class="assessment-content px-5 mb-5">
            <img class="load-icon" src="../../assets/icons/congratulatory-img.svg" alt="congratulations" />
            <p class="ms-auto me-auto text-center mt-4">We have received your assessment test, we will get back to you soon.<br/>Best of luck</p>
            
            <router-link class="dashboard-link ms-auto me-auto" :to="{ name: 'ApplicantDashboard'}">
                <Button btnText="Home" btnStyle="btn-home" />
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