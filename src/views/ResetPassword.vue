<template>
    <section class="sign-in d-flex align-items-center justify-content-center">
        <div class="container">
            <div class="form-container-head pt-3 pt-md-5 text-center">
                <router-link :to="{ name: 'Home' }">
                    <img src="../assets/images/enyataLogo.png" alt="enyata-logo" class="enyata-logo" />
                </router-link>
                <h4 class="text-center fst-italic mt-4 mb-4 pb-3 text--primary">Password Reset</h4>
            </div>

            <form class="action">
                <formInput
                    inputBoxStyle='col-md-6 offset-md-3'
                    :inputStyle="isError.password"
                    type='password'
                    identifier='password'
                    label='Enter New Password'
                    v-model.lazy.trim="user.password"
                    @input="user.password.match(passwordRegex) 
                        ? isError.password = 'is-valid' 
                        : isError.password = 'is-invalid'"
                    invalidMsg='Password should contain an uppercase, lowercase, digit with minimum of 8 characters'
                />

                <formInput
                    inputBoxStyle='col-md-6 offset-md-3'
                    :inputStyle="isError.confirmPassword"
                    type='password'
                    identifier='confirmPassword'
                    label='Confirm Password'
                    v-model.lazy.trim="user.confirmPassword"
                    @input="user.confirmPassword === user.password && user.password.length !== 0 
                        ? isError.confirmPassword = 'is-valid' 
                        : isError.confirmPassword = 'is-invalid'"
                    invalidMsg='Password do not match'
                />

                <div class="d-flex flex-column justify-content-center align-items-center">
                    <button class="btn col-md-6 col-12 btn-login mt-3" id="submit-btn" type="submit" :disabled='isDisabled'>
                        Reset Password
                    </button>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
import formInput from '@/components/Input.vue'
import { passwordRegex } from '@/helpers/variables'

export default {
    name: 'VerifyUser',
    components: {
        formInput
    },
    data() {
        return {
            user: {
                password: '',
                confirmPassword: ''
            },
            isError: {},
            passwordRegex
        }
    },
    mounted() {
        this.isError = {...this.user}
        // const { resetToken } = this.$route.query
        try {
            // api call
        }
        catch (err) {
            console.log(err)
        }
    },
    computed: {
        isDisabled () {
            return (
                (!(this.user.password && this.user.confirmPassword)) ||
                this.isError.password === 'is-invalid' ||
                this.isError.confirmPassword === 'is-invalid'
            )
        }
    }
}
</script>
