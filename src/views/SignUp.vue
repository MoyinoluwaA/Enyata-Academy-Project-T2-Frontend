/* eslint-disable vue/no-duplicate-attributes */
<template>
    <section class='signup container'>
        <div class="form-container-head pt-3 text-center">
            <router-link :to="{ name: 'Home' }">
                <img src="../assets/images/enyataLogo.png" alt="enyata-logo" class="enyata-logo" />
            </router-link>
            <h4 class="text-center fst-italic mt-4 mb-4 pb-3 text--primary">Application Sign Up</h4>
        </div>
        <div>
            <form class="action">
                <div class="row justify-content-center">
                    <div class="row gx-md-5">
                        <formInput
                            inputBoxStyle='col-md-6'
                            :inputStyle="isError.firstName"
                            type='text'
                            identifier='firstName'
                            label='First Name'
                            v-model.lazy.trim="user.firstName"
                            @input="user.firstName.length > 2 && user.firstName.match(lettersRegex)  
                                ? isError.firstName = 'is-valid' 
                                : isError.firstName = 'is-invalid'"
                            :invalidMsg="!user.firstName.match(lettersRegex)
                                ? 'Name should not have number' 
                                : 'Name must be more than 2 characters'"
                        />   
                        <formInput
                            inputBoxStyle='col-md-6'
                            :inputStyle="isError.lastName"
                            type='text'
                            identifier='lastName'
                            label='Last Name'
                            v-model.lazy.trim="user.lastName"
                            @input="user.lastName.length > 2 && user.lastName.match(lettersRegex)  
                                ? isError.lastName = 'is-valid' 
                                : isError.lastName = 'is-invalid'"
                            :invalidMsg="!user.lastName.match(lettersRegex)
                                ? 'Name should not have number' 
                                : 'Name must be more than 2 characters'"
                        /> 
                        <formInput
                            inputBoxStyle='col-md-6'
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
                        <formInput
                            inputBoxStyle='col-md-6'
                            :inputStyle="isError.phoneNumber"
                            type='number'
                            identifier='phoneNumber'
                            label='Phone Number'
                            v-model.lazy.trim="user.phoneNumber"
                            @input="user.phoneNumber.length === 11 
                                ? isError.phoneNumber = 'is-valid' 
                                : isError.phoneNumber = 'is-invalid'"
                            invalidMsg='Phone number should be 11'
                        />  
                        <formInput
                            inputBoxStyle='col-md-6'
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
                        <formInput
                            inputBoxStyle='col-md-6'
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
                    </div> 
                    <div class="row justify-content-center">
                        <div class=" row btn col-md-6 col-sm-12 mt-3">
                            <button class="btn btn-login" id="btn-signup" type="submit" :disabled='isDisabled'>Sign Up</button>
                            <p class='text--gray fst-italics text-center mt-2 pt-1'>
                                Already have an account? 
                                <router-link to="/signin" class='text-decoration-none text--primary'>
                                    Sign In
                                </router-link>
                            </p>
                        </div>
                    </div>
                </div>
                </form>
        </div>
    </section>
</template>

<script>
import formInput from "@/components/Input.vue"
import { emailRegex, passwordRegex, lettersRegex } from '@/helpers/variables'

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
            },
            isError: {},
            emailRegex,
            passwordRegex,
            lettersRegex
        }
    },
    mounted() {
        this.isError = {...this.user}
    },
    computed: {
        isDisabled() {
            return (
                (!(this.user.firstName && this.user.lastName && this.user.email && 
                this.user.phoneNumber && this.user.password && this.user.confirmPassword)) ||
                this.isError.firstName === 'is-invalid' ||
                this.isError.lastName === 'is-invalid' ||
                this.isError.email === 'is-invalid' ||
                this.isError.phoneNumber === 'is-invalid' ||
                this.isError.password === 'is-invalid' ||
                this.isError.confirmPassword === 'is-invalid'
            );
        }
    }
}
</script>
