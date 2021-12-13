<template>
    <section class="sign-in d-flex align-items-center justify-content-center">
        <div class="container">
            <div class="form-container-head pt-3 pt-md-5 text-center">
                <router-link :to="{ name: 'Home' }">
                    <img src="../assets/images/enyataLogo.png" alt="enyata-logo" class="enyata-logo" />
                </router-link>
                <h4 class="text-center fst-italic mt-4 mb-4 pb-3 text--primary">Application Login</h4>
            </div>
            <form class="action" @submit.prevent="signIn()">
                <formInput
                    inputBoxStyle='col-md-6 offset-md-3'
                    :inputStyle="isError.email"
                    type='email'
                    identifier='email'
                    label='Email Address'
                    v-model.lazy.trim="user.email"
                    @input="user.email.match(emailRegex) 
                        ? isError.email = 'is-valid' 
                        : isError.email = 'is-invalid'"
                    invalidMsg='Enter a valid email address'
                />
                <formInputPassword
                    inputBoxStyle='col-md-6 offset-md-3'
                    :inputStyle="isError.password"
                    type='password'
                    identifier='password'
                    label='Password'
                    v-model.lazy.trim="user.password"
                    @input="user.password.match(passwordRegex) 
                        ? isError.password = 'is-valid' 
                        : isError.password = 'is-invalid'"
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
import formInputPassword from '@/components/InputPassword.vue'
import { emailRegex, passwordRegex } from '@/helpers/variables'
import AuthService from '@/services/auth'
import ApplicationService from '@/services/application'
import { mapActions } from 'vuex'

export default {
    name: 'SignIn',
	components: {
        formInput,
        formInputPassword
	},
     data() {
        return {
            user: {
                email: '',
                password: '',
            },
            isError: {},
            emailRegex,
            passwordRegex
        }
     },
    computed: {
        isDisabled () {
            return (
                (!(this.user.email && this.user.password)) ||
                this.isError.email === 'is-invalid' ||
                this.isError.password === 'is-invalid'
            )
        }
    },
    methods: {
        ...mapActions(['handleLogIn', 'saveApplicantDetails']), 
        async signIn() {
            try {
                const res = await AuthService.loginUser({...this.user})
                if (res.code === 200) {
                    this.handleLogIn(res.data.token)
                    const status = await ApplicationService.getUserStatus()

                    if (status.data.isApplicant === true) {
                        const { id, batch_id } = status.data.applicant
                        this.saveApplicantDetails({applicant_id: id, batch_id})

                        this.$router.push({ name: 'Dashboard' })
                    } else {
                        this.$router.push({ name: 'CreateApplication' })
                    }
                }
                this.clearForm()
            } catch (error) {
                if (error.response.data.code === 401) {
                    let content
                    if (error.response.data.message === 'Invalid credentials') {
                        content = 'Invalid Credentials'
                    } else {
                        content = 'User not verified'
                    }
                    this.$dtoast.pop({
                        preset: "error",
                        heading: 'Error occured while logging in',
                        content
                    })
                } else if (error.response.data.code === 404) {
                     this.$router.push({ name: 'NoApplication' })
                }
                this.clearForm()
            }
        },
        clearForm() {
            return (
                this.user.email = '',
                this.user.password = '',
                this.isError = {}
            )
        }
    }
}
</script>