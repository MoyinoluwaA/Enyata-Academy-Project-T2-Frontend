<template>
    <div class="text-center me-3 ms-3">
        <h2 class="reset-pw">Reset Password Successful</h2>

        <img class="load-icon mt-5" src="../assets/icons/congratulatory-img.svg" alt="congratulations" />

        <p class="text-center mt-5">You have successfully updated your password<br/>kindly proceed to sign in</p>

        <router-link :to="{ name: 'SignIn' }">
            <Button btnText="Sign In" btnStyle="btn-home" />
        </router-link>
    </div>
</template>

<script>
import Button from '@/components/Button.vue'
export default {
    components: {
        Button
    }
}
</script>

<style>

</style>