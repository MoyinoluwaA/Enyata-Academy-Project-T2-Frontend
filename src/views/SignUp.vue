<template>
    <section class='signup container'>
        <div class="form-container-head pt-3 text-center">
            <img src="../assets/images/enyataLogo.png" alt="enyata-logo" class="enyata-logo" />
            <h4 class="text-center fst-italic mt-4 mb-4 pb-3 text--primary">Application Sign Up</h4>
        </div>
        <div>
            <form class="action">
                <div class="row justify-content-center">
                    <div class="row gx-md-5">
                        <formInput
                            inputBoxStyle='col-md-6'
                            type='text'
                            identifier='firstName'
                            label='First Name'
                            v-model="user.firstName"
                        />   
                        <formInput
                            inputBoxStyle='col-md-6'
                            type='text'
                            identifier='lastName'
                            label='Last Name'
                            v-model="user.lastName"
                        /> 
                        <formInput
                            inputBoxStyle='col-md-6'
                            type='email'
                            identifier='email'
                            label='Email Address'
                            v-model="user.email"
                        />
                        <formInput
                            inputBoxStyle='col-md-6'
                            type='text'
                            identifier='lastName'
                            label='Phone Number'
                            v-model="user.phoneNumber"
                        />  
                        <formInput
                            inputBoxStyle='col-md-6'
                            type='password'
                            identifier='password'
                            label='Password'
                            v-model="user.password"
                        />   
                        <formInput
                            inputBoxStyle='col-md-6'
                            type='password'
                            identifier='password'
                            label='Confirm Password'
                            v-model="user.confirmPassword"
                        />
                    </div> 
                    <div class="row justify-content-center">
                        <div class=" row btn col-md-6 col-sm-12 mt-3">
                            <button class="btn btn-login" id="btn-signup" type="submit">Sign Up</button>
                            <p class='text--gray fst-italics text-center mt-2 pt-1'>Already have an account? <router-link to="/signin" class='text-decoration-none text--primary'>Sign In</router-link></p>
                        </div>
                    </div>
                </div>
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