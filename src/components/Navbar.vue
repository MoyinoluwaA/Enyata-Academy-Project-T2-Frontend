<template>
    <nav class='nav-bar navbar navbar-expand-md flex-row'>
        <div class='container mt-4 pt-2 px-xl-5'>
            <router-link :to="{ name: 'Home' }">
                <img src="../assets/images/enyataLogo.png" class="img-fluid pt-4" alt="enyataLogo">
            </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fa fa-bars fs-4 navbar-toggler-icon"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div class="nav-links navbar-nav align-items-md-center mb-2 mb-lg-0 ms-md-auto">
                    <router-link to="/" class="nav-link nav-link-default me-4 pe-3">Home</router-link> 
                    <router-link v-if="application && loggedIn===false" to="/signin" class="nav-link nav-link-default me-4 pe-3">Sign in</router-link>
                    <router-link v-if="application && loggedIn" to="/dashboard" class="nav-link btn btn-lg btn-register-white" role="button">Dashboard</router-link>
                    <router-link v-if="application && loggedIn===false" to="/signup" class="nav-link btn btn-lg btn-register-white" role="button">
                        Register Now
                    </router-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
    props: {
        application: Boolean,
        loggedIn: Boolean
    }
}
</script> 
