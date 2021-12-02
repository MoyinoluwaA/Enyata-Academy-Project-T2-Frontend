<template>
    <section class="sign-in d-flex align-items-center justify-content-center">
        <div class="container">
            <div class="form-container-head pt-3 pt-md-5 text-center">
                <router-link :to="{ name: 'Home' }">
                    <img src="../assets/images/enyataLogo.png" alt="enyata-logo" class="enyata-logo" />
                </router-link>
                <h4 class="text-center fst-italic mt-4 mb-4 pb-3 text--primary">Password Reset</h4>
            </div>

            <form class="action" @submit.prevent="resetPassword()">
                <formInput
                    inputBoxStyle='col-md-6 offset-md-3'
                    :inputStyle="isError.password"
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
                    :inputStyle="isError.confirm_password"
                    identifier='confirmPassword'
                    label='Confirm Password'
                    v-model.lazy.trim="user.confirm_password"
                    @input="user.confirm_password === user.password && user.password.length !== 0 
                        ? isError.confirm_password = 'is-valid' 
                        : isError.confirm_password = 'is-invalid'"
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
import formInput from '@/components/InputPassword.vue'
import { passwordRegex } from '@/helpers/variables'
import AuthService from '@/services/auth'

export default {
    name: 'VerifyUser',
    components: {
        formInput
    },
    data() {
        return {
            user: {
                password: '',
                confirm_password: ''
            },
            isError: {},
            passwordRegex
        }
    },
    async mounted() {
        this.isError = {...this.user}
    },
    methods: {
        async resetPassword() {
            try {
                const { resetToken } = this.$route.query
                // eslint-disable-next-line no-unused-vars
                const {confirm_password, ...newPassword} = this.user
                const res = await AuthService.resetPassword(resetToken, {...newPassword})
                if (res.code === 200) {
                    this.$router.push({ name: 'ResetPasswordDone' })
                    this.clearField()
                }
            } catch (error) {
                if (error.response.status === 400) {
                    this.$dtoast.pop({
                    preset: "error",
                    heading: "Error",
                    content: "Error occured while reseting password, kindly check again",
                })
                this.clearField()
                }
            }
        },
        clearField() {
            return (
                this.user.password = '',
                this.user.confirm_password = '',
                this.isError = {}
            )
        }
    },
    computed: {
        isDisabled () {
            return (
                (!(this.user.password && this.user.confirm_password)) ||
                this.isError.password === 'is-invalid' ||
                this.isError.confirm_password === 'is-invalid'
            )
        }
    }
}
</script>
