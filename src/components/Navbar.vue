<template>
    <nav class='container navbar-expand-lg flex-row'>
        <div class='d-flex justify-content-between'>
            <div class=''>
                <img src="../assets/enyataLogo.png" class="img-fluid pt-4" alt="enyataLogo">
                 <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
            <div class='navbar  mb-2 mb-lg-0'>
                <router-link to="/" class="nav-link">Home</router-link> 
                <router-link to="/sign-in" class="nav-link">Sign in</router-link>
                <router-link to="/register" class="nav-link" role="button" ><Button btnStyle='btn btn-lg registerNav' btnText='Register Now'></Button></router-link>
            </div>
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