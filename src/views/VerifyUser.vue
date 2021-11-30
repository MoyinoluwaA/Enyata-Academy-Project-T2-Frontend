<template>
    <div class="text-center me-3 ms-3">
        <p v-if='loading' class="mt-5 pt-5 fs-1 fw-bold">Wait while your account is being verified...</p>

        <div v-else>
            <h2 class="reset-pw">Account Verification Successful</h2>
            <img class="load-icon mt-5" src="../assets/icons/congratulatory-img.svg" alt="congratulations" />
            <p class="text-center mt-5">You have successfully verified your account <br/>kindly proceed to sign in</p>

            <router-link :to="{ name: 'SignIn' }">
                <Button btnText="Sign In" btnStyle="btn-home" />
            </router-link>
        </div>
    </div>
</template>

<script>
import Button from '@/components/Button.vue'
export default {
    name: 'VerifyUser',
    components: {
        Button
    },
    data() {
        return {
            loading: true
        }
    },
    mounted() {
        // const { resetToken } = this.$route.query
        try {
            // api call
        }
        catch (err) {
            console.log(err)
        }
    }
}
</script>
