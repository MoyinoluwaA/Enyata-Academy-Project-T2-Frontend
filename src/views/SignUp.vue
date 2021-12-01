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
            <form class="action" @submit.prevent="registerUser">
                <div class="row justify-content-center">
                    <div class="row gx-md-5">
                        <formInput
                            inputBoxStyle='col-md-6'
                            :inputStyle="isError.first_name"
                            type='text'
                            identifier='firstName'
                            label='First Name'
                            v-model.lazy.trim="user.first_name"
                            @input="user.first_name.length > 2 && user.first_name.match(lettersRegex)  
                                ? isError.first_name = 'is-valid' 
                                : isError.first_name = 'is-invalid'"
                            :invalidMsg="!user.first_name.match(lettersRegex)
                                ? 'Name should not have number' 
                                : 'Name must be more than 2 characters'"
                        />   
                        <formInput
                            inputBoxStyle='col-md-6'
                            :inputStyle="isError.last_name"
                            type='text'
                            identifier='lastName'
                            label='Last Name'
                            v-model.lazy.trim="user.last_name"
                            @input="user.last_name.length > 2 && user.last_name.match(lettersRegex)  
                                ? isError.last_name = 'is-valid' 
                                : isError.last_name = 'is-invalid'"
                            :invalidMsg="!user.last_name.match(lettersRegex)
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
                            :inputStyle="isError.phone_number"
                            type='tel'
                            identifier='phoneNumber'
                            label='Phone Number'
                            v-model.lazy.trim="user.phone_number"
                            @input="user.phone_number.length === 11 
                                ? isError.phone_number = 'is-valid' 
                                : isError.phone_number = 'is-invalid'"
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
                            :inputStyle="isError.confirm_password"
                            type='password'
                            identifier='confirmPassword'
                            label='Confirm Password'
                            v-model.lazy.trim="user.confirm_password"
                            @input="user.confirm_password === user.password && user.password.length !== 0 
                                ? isError.confirm_password = 'is-valid' 
                                : isError.confirm_password = 'is-invalid'"
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
import AuthService from '@/services/auth'

export default {
    name: 'SignUp',
	components: {
            formInput,
	},
    data() {
        return {
            user: {
                first_name: '',
                last_name: '',
                email: '',
                phone_number: '',
                password: '',
                confirm_password: ''
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
    methods: {
        async registerUser() {
            try {
                // eslint-disable-next-line no-unused-vars
                const {confirm_password, phone_number, ...newUser} = this.user
                const phone = phone_number
                const res = await AuthService.createUser({...newUser, phone})

                if (res.code === 201) {
                    this.$dtoast.pop({
                        preset: "success",
                        heading: "Account Created Successfully.",
                        content: "Kindly check your email to verify your account",
                    })
                    this.clearForm()
                }
            } catch (error) {
                if (error.response.status === 400) {
                    this.$dtoast.pop({
                        preset: "error",
                        heading: "Account Already Exist.",
                        content: "Kindly proceed to login",
                    })
                }
                this.clearForm()
            }
        },
        clearForm() {
            return (
                this.user.first_name = '',
                this.user.last_name = '',
                this.user.email = '',
                this.user.phone_number = '',
                this.user.password = '',
                this.user.confirm_password = '',
                this.isError = {}
            )
        }
    },
    computed: {
        isDisabled() {
            return (
                (!(this.user.first_name && this.user.last_name && this.user.email && 
                this.user.phone_number && this.user.password && this.user.confirm_password)) ||
                this.isError.first_name === 'is-invalid' ||
                this.isError.last_name === 'is-invalid' ||
                this.isError.email === 'is-invalid' ||
                this.isError.phone_number === 'is-invalid' ||
                this.isError.password === 'is-invalid' ||
                this.isError.confirm_password === 'is-invalid'
            );
        }
    }
}
</script>
