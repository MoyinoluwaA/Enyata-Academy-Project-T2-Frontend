<template>
    <section class="container password d-flex align-items-center">
        <div class="row flex-md-column align-items-center justify-content-center password-box mx-auto">
            <div class="text-center">
                <h3 class="fw-bold password-heading text--primary mb-3">Forgot Password</h3>
                <p class="text--gray-dark">Please select option to send link to reset password</p>
            </div>

            <router-link class="reset-email-password-link"  :to="{ name: 'ResetViaEmail'}">
                <div class="d-flex border rounded reset-email-password py-4 px-3 ps-sm-4 pe-sm-5 mt-4">
                        <div class="d-flex align-items-center me-3 me-sm-4">
                            <img src="../assets/icons/Group 12.svg" alt="email">
                        </div>
                        <div class="reset-via-email">
                            <h6 class="password-reset-title text--purple">Reset via Email</h6>
                            <p class="password-reset-text text-small mt-3 me-2 me-sm-0 text--gray">
                                Reset password link will be send to your
                                registered email address.
                            </p>
                        </div>
                        <div class="d-flex align-items-center">
                            <img src="../assets/icons/Group 11.svg" alt="checkbox">
                        </div>
                </div>
            </router-link>
            <div class="d-flex border rounded mt-4 reset-options-password py-4 px-3 ps-sm-4 pe-sm-5">
                <div class="me-3 d-flex align-items-center me-sm-4">
                    <img src="../assets/icons/Group 10.png" alt="phone">
                </div>
                <div>
                    <h6 class="password-reset-title">Reset via Sms</h6>
                    <p class='password-reset-text text-small mt-3 me-2 me-sm-0 text--gray'>
                        Reset password link will be send to your
                        registered phone number.
                    </p>
                </div>
                <!-- <div class=" d-flex align-items-center ">
                    <img src="../assets/icons/Group 11.svg" alt="checkbox">
                </div> -->
            </div>
        </div>
    </section>
</template>

<script>

export default {
    name: 'ForgotPassword',
}
</script>
