<template>
    <div class="application">
        <div class="container">
            <div class="form-container-head pt-3 text-center">
                <img src="../assets/icons/enyata-logo.svg" alt="enyata-logo" class="enyata-logo" />
                <p class="text-center fst-italic mt-4 mb-4 pb-3">Application Form</p>
            </div>

            <form class="application-form-details">
                <div class="text-center">
                    <button class="btn-upload"> + Upload CV</button>
                    <button class="btn-upload ms-sm-4 mt-4 mt-sm-0"> + Upload Photo</button>
                </div>

                <div class="row" id="my-form">
                    <div class="col-md-6 col-12 pe-md-4 application-form">
                        <label class="mb-2">First Name</label>
                        <input type="text" class="form-control" v-model="firstName" name="firstName" />
                    </div>

                    <div class="col-md-6 col-12 ps-md-4 application-form">
                        <label class="mb-2">Last Name</label>
                        <input type="text" class="form-control" v-model="lastName" name="lastName" />
                    </div>

                    <div class="col-md-6 col-12 pe-md-4 application-form">
                        <label class="mb-2">Email</label>
                        <input type="email" class="form-control" v-model="email" name="email" />
                    </div>

                    <div class="col-md-6 col-12 ps-md-4 application-form">
                        <label class="mb-2">Date of Birth</label>
                        <input type="date" class="form-control input-date fst-italic" v-model="dob" name="dob" placeholder="dd/mm/yyyy" />
                    </div>

                    <div class="col-md-6 col-12 pe-md-4 application-form">
                        <label class="mb-2">Address</label>
                        <input type="text" class="form-control" v-model="address" name="address" />
                    </div>

                    <div class="col-md-6 col-12 ps-md-4 application-form">
                        <label class="mb-2">University</label>
                        <input type="text" class="form-control" v-model="uni" name="uni" />
                    </div>

                    <div class="col-md-6 col-12 pe-md-4 application-form">
                        <label class="mb-2">Course of Study</label>
                        <input type="text" class="form-control" v-model="course" name="course" />
                    </div>

                    <div class="col-md-6 col-12 ps-md-4 application-form">
                        <label class="mb-2">CGPA</label>
                        <input type="text" class="form-control" v-model="cgpa" name="cgpa" />
                    </div>

                    <button class="btn-submit" id="submit-btn" type="submit">Submit</button>

                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {

}
</script>