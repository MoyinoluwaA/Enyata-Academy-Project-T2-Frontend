<template>
    <div>
        <ApplicantSideBar />
        <div class="dashboard-main">    
            <router-view />
        </div>
    </div>
</template>

<script>
import ApplicantSideBar from "@/components/ApplicantSideBar.vue"
import ApplicationService from '@/services/application'
import { mapActions } from 'vuex'

export default {
    components: {
        ApplicantSideBar,
    },
    async mounted() {
        try {
            const status = await ApplicationService.getUserStatus()
    
            if (status.data.isApplicant === true) {
                const { id, batch_id } = status.data.applicant
                this.saveApplicantDetails({applicant_id: id, batch_id})
            } else {
                this.saveApplicantDetails({ batch_id: status.data.batchId })
                this.$router.push({ name: 'CreateApplication' })
            }
        } catch (error) {
            console.log(error)
        }
    },
    methods: {
        ...mapActions(['saveApplicantDetails'])
    }
}
</script>
