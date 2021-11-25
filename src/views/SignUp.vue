<template>
    <section class='signup container'>
        <div class="form-container-head pt-3 text-center">
            <img src="../assets/images/enyataLogo.png" alt="enyata-logo" class="enyata-logo" />
            <h4 class="text-center fst-italic mt-4 mb-4 pb-3 text--labelColor">Application Sign Up</h4>
        </div>
        <div>
            <form action='' class="action">
                <div class="row justify-content-center">
                    <div class="row">
                        <formInput
                            type='text'
                            identifier='firstName'
                            labelStyle='form-label'
                            inputType='fName'
                            label='First Name'
                            v-model="user.firstName"
                        />   
                        <formInput
                            type='text'
                            identifier='lastName'
                            labelStyle='form-label'
                            inputType='lName'
                            label='Last Name'
                            v-model="user.lastName"
                        /> 
                    </div>  
                    <div class="row">
                        <formInput
                            type='email'
                            identifier='email'
                            labelStyle='form-label'
                            inputType='email'
                            label='Email Address'
                            v-model="user.email"
                        />
                        <formInput
                            type='text'
                            identifier='lastName'
                            labelStyle='form-label'
                            inputType='phone_num'
                            label='Phone Number'
                            v-model="user.phoneNumber"
                        />  
                    </div>
                    <div class="row"> 
                        <formInput
                            type='password'
                            identifier='password'
                            labelStyle='form-label'
                            inputType='password'
                            label='Password'
                            v-model="user.password"
                        />   
                        <formInput
                            type='password'
                            identifier='password'
                            labelStyle='form-label'
                            inputType='conf_password'
                            label='Confirm Password'
                            v-model="user.confirmPassword"
                        />
                    </div> 
                </div>
                <div class="row justify-content-center">
                    <button class="btn col-md-6 col-sm-12 btn-login mt-3" id="btn-signup" type="submit">Sign Up</button>
                </div>
                <p class='labelForm text--labelColor text-center'>Already have an account? <router-link to="/signin" class='text-decoration-none text--labelColor'>Sign In</router-link></p>
            </form>
        </div>
    </section>
</template>

<script>
import formInput from "@/components/Input.vue"

export default {
    name: 'SignUp',
	components: {
        formInput,
	},
    data() {
        return {
            user: {
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
                password: '',
                confirmPassword: ''
            }
        }
    }
}
</script>