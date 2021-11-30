<template>
    <section class="sign-in d-flex align-items-center justify-content-center">
        <div class="container">
            <div class="form-container-head pt-3 pt-md-5 text-center">
                <img src="../assets/images/enyataLogo.png" alt="enyata-logo" class="enyata-logo" />
                <h4 class="text-center fst-italic mt-4 mb-4 pb-3 text--primary">Application Login</h4>
            </div>
            <form class="action">
                <formInput
                    inputBoxStyle='col-md-6 offset-md-3'
                    :inputStyle="isError.email"
                    type='email'
                    identifier='email'
                    label='Email Address'
                    v-model.lazy.trim="user.email"
                    @input="user.email.match(emailRegex) ? isError.email = 'is-valid' : isError.email = 'is-invalid'"
                />
                <formInput
                    inputBoxStyle='col-md-6 offset-md-3'
                    :inputStyle="isError.password"
                    type='password'
                    identifier='password'
                    label='Password'
                    v-model.lazy.trim="user.password"
                    @input="user.password.match(passwordRegex) ? isError.password = 'is-valid' : isError.password = 'is-invalid'"
                    invalidMsg='Password should contain an uppercase, lowercase and digit'
                />
                <div class="d-flex flex-column justify-content-center align-items-center">
                    <button class="btn col-md-6 col-12 btn-login mt-3" id="submit-btn" type="submit" :disabled='isDisabled'>Sign In</button>
                    <div class="d-flex col-md-6 col-12 justify-content-between fst-italic mt-2">
                        <p class='labelForm text--primary'> Don't have an account yet? <router-link to="/signup">Sign Up</router-link></p>
                        <router-link to="/forgot-password" class="text-decoration-none"><p class='labelForm text--primary'>Forgot Password?</p></router-link>
                    </div>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
import formInput from '@/components/Input.vue'

export default {
    name: 'SignIn',
	components: {
            formInput,
	},
     data() {
        return {
            user: {
                email: '',
                password: '',
            },
            isError: {},
            emailRegex: /\b[\w-]+@[\w-]+\.\w{2,4}\b/gi,
            passwordRegex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm
        }
     },
    computed: {
        isDisabled () {
            return (
                !this.user.email.match(this.emailRegex) ||
                !this.user.password.match(this.passwordRegex)
            )
        }
    }
}
</script>