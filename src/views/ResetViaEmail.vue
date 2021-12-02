<template>
        <section class="sign-in d-flex align-items-center justify-content-center">
        <div class="container">
            <div class="form-container-head pt-3 pt-md-5 text-center">
                <router-link :to="{ name: 'Home' }">
                    <img src="../assets/images/enyataLogo.png" alt="enyata-logo" class="enyata-logo" />
                </router-link>
                <h4 class="text-center fst-italic mt-4 mb-4 pb-3 text--primary">Password Reset</h4>
            </div>

            <form class="action" @submit.prevent="sendLink()">
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

                <div class="d-flex flex-column justify-content-center align-items-center">
                    <button class="btn col-md-6 col-12 btn-login mt-3" id="submit-btn" type="submit" :disabled='isDisabled'>
                        Send Link
                    </button>
                    <div class='text-small text-center text--gray mt-4'>
                        Didn’t receive link?
                        <router-link to='/' class='text-decoration-none text--purple'>
                            Resend
                        </router-link>
                    </div>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
import formInput from '@/components/Input.vue'
import { emailRegex } from '@/helpers/variables'
import AuthService from '@/services/auth'

export default {
    name: 'ResetViaEmail',
    components: {
        formInput
    },
    data() {
        return {
            user: {
                email: ''
            },
            isError: {},
            emailRegex
        }
    },
    methods: {
        async sendLink() {
            try {
                const res = await AuthService.forgotPassword({...this.user})
                if (res.code === 200) {
                    this.$dtoast.pop({
                    preset: "success",
                    heading: "Password reset link sent to mail successfully.",
                    content: "Kindly check your email to reset your password",
                    })
                    this.clearField()
                }
            } catch (error) {
                if (error.response.status === 404) {
                    this.$dtoast.pop({
                        preset: "error",
                        heading: "Email does not exist",
                        content: "Kindly input a valid email",
                    })
                }
                this.clearField()
            }
        },
        clearField() {
            return (
                this.user.email = '',
                this.isError = {}
            )
        }
    },
    computed: {
        isDisabled () {
            return (
                (!(this.user.email)) ||
                this.isError.email === 'is-invalid'
            )
        }
    }
}
</script>