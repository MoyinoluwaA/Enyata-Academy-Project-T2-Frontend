<template>
    <div class="application">
        <div class="container">
            <div class="form-container-head pt-3 text-center">
                <img src="../assets/icons/enyata-logo.svg" alt="enyata-logo" class="enyata-logo" />
                <p class="text-center fst-italic mt-4 mb-4 pb-3">Application Form</p>
            </div>

            <form class="application-form-details" enctype="multipart/form-data">
                <div class="text-center">
                    <div class="btn-upload mx-auto d-md-inline"> 
                        + Upload CV
                    </div>
                    <div class="btn-upload ms-md-4 mt-4 d-md-inline mt-md-0 mx-auto">
                        <input type="file" :name="uploadFieldName" :disabled="isSaving" accept="image/*" class="input-file"
                            @change="filesChange($event.target.name, $event.target.files)"
                        > 
                        + Upload Photo
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6 col-12 pe-md-4 application-form">
                        <label class="mb-2">First Name</label>
                        <input type="text" class="form-control" v-model="user.first_name" name="firstName" />
                    </div>

                    <div class="col-md-6 col-12 ps-md-4 application-form">
                        <label class="mb-2">Last Name</label>
                        <input type="text" class="form-control" v-model="user.last_name" name="lastName" />
                    </div>

                    <div class="col-md-6 col-12 pe-md-4 application-form">
                        <label class="mb-2">Email</label>
                        <input type="email" class="form-control" v-model="user.email" name="email" />
                    </div>

                    <div class="col-md-6 col-12 ps-md-4 application-form">
                        <label class="mb-2">Date of Birth</label>
                        <input type="date" class="form-control input-date fst-italic" v-model="user.date_of_birth" name="dob" placeholder="dd/mm/yyyy" />
                    </div>

                    <div class="col-md-6 col-12 pe-md-4 application-form">
                        <label class="mb-2">Address</label>
                        <input type="text" class="form-control" v-model="user.address" name="address" />
                    </div>

                    <div class="col-md-6 col-12 ps-md-4 application-form">
                        <label class="mb-2">University</label>
                        <input type="text" class="form-control" v-model="user.university" name="university" />
                    </div>

                    <div class="col-md-6 col-12 pe-md-4 application-form">
                        <label class="mb-2">Course of Study</label>
                        <input type="text" class="form-control" v-model="user.course" name="course" />
                    </div>

                    <div class="col-md-6 col-12 ps-md-4 application-form">
                        <label class="mb-2">CGPA</label>
                        <input type="text" class="form-control" v-model="user.cgpa" name="cgpa" />
                    </div>

                    <Button btnText='Submit' btnStyle='btn-submit' />
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import Button from '../components/Button.vue'

export default {
    name: 'CreateApplication',
    components: {
        Button
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
                cgpa: ''
            }
        }
    }
}
</script>