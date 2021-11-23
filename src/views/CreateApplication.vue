<template>
    <div class="container">
        <div class="form-container-head mt-3 text-center">
            <img src="../assets/icons/enyata-logo.svg" alt="enyata-logo" class="enyata-logo" />
            <p class="text-center fst-italic mt-4">Application Form</p>
        </div>

        <div class="container text-center">
            <div>
                <button class="upload-btn"> + Upload CV</button>
                <button class="upload-btn ms-4"> + Upload Photo</button>
            </div>
        </div>

        <form>
            <div class="row application-form-details" id="my-form">
                <div class="col-md-6 col-12 application-form">
                    <label>First Name</label>
                    <input type="text" class="form-control" v-model="firstName" name="firstName" />
                </div>

                <div class="col-md-6 col-12 application-form">
                    <label>Last Name</label>
                    <input type="text" class="form-control" v-model="lastName" name="lastName" />
                </div>

                <div class="col-md-6 col-12 application-form">
                    <label>Email</label>
                    <input type="email" class="form-control" v-model="email" name="email" />
                </div>

                <div class="col-md-6 col-12 application-form">
                    <label>Date of Birth</label>
                    <input type="date" class="form-control" v-model="dob" name="dob" />
                </div>

                <div class="col-md-6 col-12 application-form">
                    <label>Address</label>
                    <input type="text" class="form-control" v-model="address" name="address" />
                </div>

                <div class="col-md-6 col-12 application-form">
                    <label>University</label>
                    <input type="text" class="form-control" v-model="uni" name="uni" />
                </div>

                <div class="col-md-6 col-12 application-form">
                    <label>Course of Study</label>
                    <input type="text" class="form-control" v-model="course" name="course" />
                </div>

                <div class="col-md-6 col-12 application-form">
                    <label>CGPA</label>
                    <input type="text" class="form-control" v-model="cgpa" name="cgpa" />
                </div>

                <button class="btn" id="submit-btn" type="submit">Submit</button>

            </div>
        </form>
    </div>
</template>

<script>
export default {

}
</script>