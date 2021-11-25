<template>
    <div class="dashboard-main-content">
        <div>
            <h2 class="dashboard-header-wrapper">Dashboard</h2>
            <p class="fst-italic fs-6">Your Application is currently being review, you wil be notified if successful</p>
        </div>

        <div class="dashboard-content d-flex flex-column flex-sm-row">
            <div>
                <p class="application-date">Date of Application</p>
                <h3 class="app-date-text">09.09.19</h3>
                <img src="../../assets/icons/date-of-application-status.svg" alt="status" />
            </div>
            <div class="application-status mt-4 mt-sm-0">
                <p class="application-status-text">Application Status</p>
                <h3 class="pending-text">Pending</h3>
                <img src="../../assets/icons/pending-status.svg" alt="status" />
            </div>
        </div>

        <div class="dashboard-bottom mb-5">
            <div class="col-lg-6 col-12">
                <div class="update-wrapper me-auto">
                    <p class="p-4 fw-bold">Updates</p>
                    <div class="text-center">
                        <img class="update-lines p-4 img-fluid" src="../../assets/icons/update-line.svg" alt="line" />
                        <img class="update-lines p-4 img-fluid" src="../../assets/icons/update-line.svg" alt="line" />
                        <img class="update-lines p-4 img-fluid" src="../../assets/icons/update-line.svg" alt="line" />
                        <img class="update-lines p-4 img-fluid" src="../../assets/icons/update-line.svg" alt="line" />
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-12">
                    <div class="update-wrapper mt-4 mt-lg-0 ms-auto">
                        <p class="p-4 fw-bold">Take Assessment</p>
                        <div class="assessment-cta">    
                            <p class="fs-6 fw-normal text-center mt-auto mb-auto">We have 4 days left until the next assessment.<br/>Watch this space</p>
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

export default {
    components: {
        Button
    }
}
</script>
