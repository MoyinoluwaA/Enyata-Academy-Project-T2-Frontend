<template>
    <div class="text-center me-3 ms-3">
        <p v-if='loading' class="mt-5 pt-5 fs-1 fw-bold">Wait while your account is being verified...</p>

        <p v-else-if='error' class="mt-5 pt-5 fs-1 fw-bold">
            An error occurred while verifying your account.
            <span class="d-block">Please try again later.</span>
        </p>

        <div v-else-if='verified'>
            <h2 class="reset-pw">Account Has Been Verified Already</h2>
            <img class="load-icon mt-5" src="../assets/icons/congratulatory-img.svg" alt="congratulations" />
            <p class="text-center mt-5">Your account has been verified<br/>Kindly proceed to sign in</p>

            <router-link :to="{ name: 'SignIn' }">
                <Button btnText="Sign In" btnStyle="btn-home" />
            </router-link>
        </div>

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
import AuthService from '@/services/auth'

export default {
    name: 'VerifyUser',
    components: {
        Button
    },
    data() {
        return {
            loading: true,
            error: false,
            verified: false
        }
    },
    async mounted() {
        try {
            const { verifyToken } = this.$route.query
            const res = await AuthService.verifyUser(verifyToken)

            if (res.code === 200) {
                this.loading = false
            }
        }
        catch (error) {
            this.loading = false
            if (error.response.status !== 400) {
                this.error = true
            } else {
                this.verified = true
            }
        }
    }
}
</script>
