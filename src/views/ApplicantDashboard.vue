<template>
  <div class="d-flex">
      <div>
        <ApplicantSideBar />
      </div>

      <div class="header">

          <div class="">
            <h2 class="dashboard-header">Dashboard</h2>
            <p class="fst-italic fs-6">Your Application is currently being review, you wil be notified if successful</p>
          </div>

          <div class="dashboard-content">
              <div>
                  <p class="application-date">Date of Application</p>
                  <h3 class="app-date-text">09.09.19</h3>
                  <img src="../assets/icons/date-of-application-status.svg" alt="status" />
              </div>
              <div class="application-status">
                  <p class="application-status-text">Application Status</p>
                  <h3 class="pending-text">Pending</h3>
                  <img src="../assets/icons/pending-status.svg" alt="status" />
              </div>
          </div>

          <div class="dashboard-bottom pb-5">
              <div class="update-wrapper">
                  <p class="p-4 fw-bold">Updates</p>
                  <img class="upate-lines p-4" src="../assets/icons/update-line.svg" alt="line" />
                  <img class="upate-lines p-4" src="../assets/icons/update-line.svg" alt="line" />
                  <img class="upate-lines p-4" src="../assets/icons/update-line.svg" alt="line" />
                  <img class="upate-lines p-4" src="../assets/icons/update-line.svg" alt="line" />
              </div>
              <div class="take-assessment-wrapper">
                    <div class="update-wrapper">
                        <p class="p-4 fw-bold">Take Assessment</p>
                        <div class="cta-assessment">    
                            <p class="fs-6 fw-normal text-center mt-auto mb-auto">We have 4 days left until the next assessment.<br/>Watch this space</p>
                            <button class="btn-take-assessment">Take Assessment</button>
                        </div>
                    </div>
              </div>
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