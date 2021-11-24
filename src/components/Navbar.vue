<template>
    <nav class='nav-bar navbar navbar-expand-lg flex-row'>
        <div class=' container mt-4 pt-1'>
            <div class=''>
                <img src="../assets/images/enyataLogo.png" class="img-fluid pt-4" alt="enyataLogo">
            </div>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div class="nav-links navbar-nav mb-2 mb-lg-0">
                    <router-link to="/" class="nav-link">Home</router-link> 
                    <router-link to="/signin" class="nav-link">Sign in</router-link>
                    <router-link to="/register" class="nav-link" role="button" ><Button btnStyle='btn btn-lg btn-register-white' btnText='Register Now'></Button></router-link>
                </div>
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fa fa-bars fs-4 navbar-toggler-icon"></i>
            </button>
        </div>
    </nav>
</template>

<script>
import Button from '../components/Button.vue'

export default {
    name: 'Navbar',
    components: {
        Button
    }
}
</script> 