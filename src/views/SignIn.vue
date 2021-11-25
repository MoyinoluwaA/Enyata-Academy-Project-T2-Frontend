<template>
    <section class="sign-in">
            <div class="container">
                <div class="form-container-head pt-3 text-center">
                    <img src="../assets/images/enyataLogo.png" alt="enyata-logo" class="enyata-logo" />
                    <h4 class="text-center fst-italic mt-4 mb-4 pb-3 text--labelColor">Application Login</h4>
                </div>
                <form action='' class="action">
                    <formInput
                        type='email'
                        identifier='email'
                        labelStyle='form-label'
                        inputType='email'
                        label='Email Address'
                        v-model="email"
                    />
                    <formInput
                        type='password'
                        identifier='password'
                        labelStyle='form-label'
                        inputType='password'
                        label='Password'
                        v-model="email"
                    />
                    <div class="d-flex flex-column justify-content-center align-items-center">
                        <button class="btn col-md-6 col-12 btn-login mt-3" id="submit-btn" type="submit">Sign In</button>
                        <div class="d-flex col-md-6 col-12 justify-content-between fst-italic mt-2">
                            <p class='labelForm text--labelColor'> Don't have an account yet? <router-link to="/signup">Sign Up</router-link></p>
                            <p class='labelForm text--labelColor'>Forgot Password?</p>
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
            }
        }
     }
}
</script>