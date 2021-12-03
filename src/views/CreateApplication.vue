<template>
    <div class="application">
        <div class="container">
            <div class="form-container-head pt-3 text-center">
                <img src="../assets/icons/enyata-logo.svg" alt="enyata-logo" class="enyata-logo" />
                <p class="text-center fst-italic mt-4 mb-4 pb-3">Application Form</p>
            </div>

            <form class="application-form-details" @submit.prevent="submitApplication()">
                <div class="text-center d-md-flex">
                    <div class="btn-upload mx-auto me-md-0 ms-md-auto"> 
                        <input type="file" name="cvUpload" accept=".doc,.docx,application/msword,application/pdf" class="input-file"
                            @change="uploadFile($event)"
                        > 
                        <span v-if='cvUpload'>CV Uploaded</span>
                        <span v-else-if='fileUploadError.cv'>File size is too large. Allowed file size is 500kb</span>
                        <span v-else>
                            + Upload CV
                            <span class="d-block fst-italic text-small">pdf and doc allowed</span>
                        </span>
                    </div>
                    <div class="btn-upload ms-md-4 mt-4 mt-md-0 mx-auto">
                        <input type="file" name="pictureUpload" accept="image/*" class="input-file"
                            @change="uploadFile($event)"
                        > 
                        <span v-if='pictureUpload'>Picture Uploaded</span>
                        <span v-else-if='fileUploadError.picture'>File size is too large. Allowed file size is 500kb</span>
                        <span v-else>
                            + Upload Photo
                            <span class="d-block fst-italic text-small">.jpeg, .jpg and .png allowed</span>
                        </span>
                    </div>
                </div>

                <div class="row">
                    <formInput
                        inputBoxStyle='col-md-6 col-12 pe-md-4 application-form'
                        type='text'
                        identifier='firstName'
                        label='First Name'
                        v-model.lazy.trim="user.first_name"
                        readonly
                    /> 

                    <formInput
                        inputBoxStyle='col-md-6 col-12 pe-md-4 application-form'
                        type='text'
                        identifier='lastName'
                        label='Last Name'
                        v-model.lazy.trim="user.last_name"
                        readonly
                    /> 

                    <formInput
                        inputBoxStyle='col-md-6 col-12 pe-md-4 application-form'
                        type='email'
                        identifier='email'
                        label='Email'
                        v-model.lazy.trim="user.email"
                        readonly
                    /> 

                    <formInput
                        inputBoxStyle='col-md-6 col-12 pe-md-4 application-form'
                        :inputStyle="isError.date_of_birth"
                        type='date'
                        max='2004-01-11'
                        identifier='date_of_birth'
                        label='Date of Birth'
                        v-model.lazy.trim="user.date_of_birth"
                        invalidMsg='Input must not be empty'
                    /> 

                    <formInput
                        inputBoxStyle='col-md-6 col-12 pe-md-4 application-form'
                        :inputStyle="isError.address"
                        type='text'
                        identifier='address'
                        label='Address'
                        v-model.lazy.trim="user.address"
                        @input="user.address.length > 7
                            ? isError.address = 'is-valid' 
                            : isError.address = 'is-invalid'"
                        invalidMsg='Address must not be short'
                    /> 

                    <formInput
                        inputBoxStyle='col-md-6 col-12 pe-md-4 application-form'
                        :inputStyle="isError.university"
                        type='text'
                        identifier='university'
                        label='University'
                        v-model.lazy.trim="user.university"
                        @input="user.university.length > 2  
                            ? isError.university = 'is-valid' 
                            : isError.university = 'is-invalid'"
                        :invalidMsg="!user.university.match(lettersRegex)
                            ? 'University name should not have number' 
                            : 'University name must be more than 2 characters'"
                    /> 
                    
                    <formInput
                        inputBoxStyle='col-md-6 col-12 pe-md-4 application-form'
                        :inputStyle="isError.course"
                        type='text'
                        identifier='course'
                        label='Course'
                        v-model.lazy.trim="user.course"
                        @input="user.course.length > 2 && user.course.match(lettersRegex)  
                            ? isError.course = 'is-valid' 
                            : isError.course = 'is-invalid'"
                        :invalidMsg="!user.course.match(lettersRegex)
                            ? 'Course name should not have number' 
                            : 'Course name must be more than 2 characters'"
                    /> 

                    <formInput
                        inputBoxStyle='col-md-6 col-12 pe-md-4 application-form'
                        :inputStyle="isError.cgpa"
                        type='number'
                        identifier='cgpa'
                        label='CGPA'
                        step='.01'
                        v-model.lazy.trim="user.cgpa"
                        @input="user.cgpa.length > 1
                            ? isError.cgpa = 'is-valid' 
                            : isError.cgpa = 'is-invalid'"
                        invalidMsg='CGPA must not be empty'
                    /> 

                    <Button btnText='Submit' btnStyle='btn-submit' :disabled='isDisabled' />
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import formInput from "@/components/InputApplication.vue"
import Button from '../components/Button.vue'
import UploadService from '@/services/upload'
import ApplicationService from '@/services/application'
import { lettersRegex, emailRegex, } from '@/helpers/variables'

export default {
    name: 'CreateApplication',
    components: {
        Button,
        formInput
    },
    data() {
        return {
            user: {
                first_name: '',
                last_name: '',
                email: '',
                date_of_birth: '',
                address: '',
                university: '',
                course: '',
                cgpa: '',
                cv: {},
                picture: {}
            },
            cvUpload: false,
            pictureUpload: false,
            fileUploadError: {
                cv: false,
                picture: false
            },
            isError: {},
            lettersRegex,
            emailRegex,
            batchId: 1
        }
    },
    methods: {
        async uploadFile(event) {
            const { name, files } = event.target
            let formData = new FormData()
            formData.append('file', files[0])
            this.resetUploadError()

            try {
                this.name = false
                const response = await UploadService.fileUpload(formData)

                if (name === 'cvUpload') {
                    this.user.cv = response.data
                    this.cvUpload = true
                } else {
                    this.user.picture = response.data
                    this.pictureUpload = true
                }
            } catch (error) {
                if (error.response.status === 500 && name === 'cvUpload') {
                    this.fileUploadError.cv = true
                } else {
                    this.fileUploadError.picture = true
                }
            }
        },
        resetUploadError() {
            this.fileUploadError = {
                cv: false,
                picture: false
            }
        },
        async submitApplication() {
            try {
                // eslint-disable-next-line no-unused-vars
                const { first_name, email, last_name, ...applicantData} = this.user
                const res = await ApplicationService.createApplication(applicantData, this.batchId)
                if (res.code === 200) {
                    this.$router.push({ name: 'Dashboard' })
                    this.clearField()
                }
            } catch (error) {
                if (error.response.data.status === 401) {
                    this.$dtoast.pop({
                        preset: "error",
                        heading: "Application created already",
                        content: "You can only create application once, kindly go to your dashboard for more details for this batch",
                    })
                } else if (error.response.data.status === 400) {
                     this.$dtoast.pop({
                        preset: "error",
                        heading: "Error occurred while applying",
                        content: "Upload a valid cv or img requested"
                    })
                } else if (error.response.data.mesage === 'authentication error. token required.') {
                    this.$dtoast.pop({
                        preset: "error",
                        heading: "Authentication error",
                        content: "Kindy login and start again"
                    })
                }
                this.clearField()
            }
        },
        clearField() {
            return (
                this.user.first_name = '',
                this.user.last_name = '',
                this.user.email = '',
                this.user.date_of_birth = '',
                this.user.address = '',
                this.user.university = '',
                this.user.cgpa = '',
                this.user.cv = {},
                this.user.picture = {},
                this.isError = {}
            )
        }
    },
    async mounted() {
        try {
            const res = await ApplicationService.prefillForm() 
            if (res.code === 200) {
                this.user.first_name = res.data.first_name
                this.user.last_name = res.data.last_name
                this.user.email = res.data.email
            }
        } catch (error) {
            if (error.response.status === 400) {
                    this.$dtoast.pop({
                        preset: "error",
                        heading: "Unable to fetch data",
                        message: 'Unauthenticated user'
                    })
                }
        }
    },
    computed: {
         isDisabled() {
            return (
                (!(this.user.first_name && this.user.last_name && this.user.email && 
                this.user.date_of_birth && this.user.address && this.user.university && this.user.cgpa &&
                this.user.course && this.user.cv && this.user.picture)) ||
                this.isError.first_name === 'is-invalid' ||
                this.isError.last_name === 'is-invalid' ||
                this.isError.email === 'is-invalid' ||
                this.isError.date_of_birth === 'is-invalid' ||
                this.isError.address === 'is-invalid' ||
                this.isError.university === 'is-invalid' ||
                this.isError.cgpa === 'is-invalid'
            );
        }
    }
}
</script>
