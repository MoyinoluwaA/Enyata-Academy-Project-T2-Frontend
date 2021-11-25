<template>
  <section class="container ">
        <div class=" row forgotPassword mx-auto">
            <div class="text-center">
                <h3 class="fw-bold forgotPassword_title">Forgot Password</h3>
                <p class="smalltext fs-6">Please select option to send link to reset password</p>
            </div>
            <div class=" d-flex border rounded options_reset py-4 px-4 mt-4">
                    <div class="d-flex align-items-center me-3">
                        <img src="../assets/icons/Group 12.svg" alt="email">
                    </div>
                    <div class="">
                        <h6 class="options_title">Reset via Email</h6>
                        <p class="labelForm mt-3 smalltext w-75">
                            Reset password link will be send to your
                            registered email address.
                        </p>
                    </div>
                    <div class="d-flex align-items-center ">
                        <img src="../assets/icons/Group 11.svg" alt="checkbox">
                    </div>
            </div>
            <div class=" d-flex border rounded mt-5 options_reset py-4 px-4">
                <div class="me-3 d-flex align-items-center ">
                    <img src="../assets/icons/Group 10.png" alt="phone">
                </div>
                <div>
                        <h6 class="options_title">Reset via Sms</h6>
                        <p class='labelForm mt-3 smalltext w-75'>
                            Reset password link will be send to your
                            registered phone number.
                        </p>
                </div>
                <div class=" d-flex align-items-center ">
                        <img src="../assets/icons/Group 11.svg" alt="checkbox">
                </div>
            </div>
            <div class="col-lg-6 col-sm-12 mt-3 align-items-center text-center mx-auto mt-4">
                <button class="btn btn-login col-md-6 col-12" id="btn-signup" type="submit">Send Link</button>
                <p class='labelForm text-center smalltext mt-2'>Didn’t receive link? <router-link to="" class='text-decoration-none text--labelColor smalltext'>Resend</router-link></p>
            </div>
        </div>
  </section>
</template>

<script>
export default {

}
</script>
