<template>
        <div>
            <div class="d-md-none nav-bar">
                <nav class="navbar navbar-light bg-light">
                    <div class="container-fluid p-0">
                        <div class="px-2 d-flex justify-content-between align-items-center w-100">
                            <router-link class="navbar-brand" :to="{ name: 'ApplicantDashboard'}">
                                <img src="../assets/icons/enyata-logo.svg" />
                            </router-link>
                            <div class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <div class="open-slide">
                                    <img class="hamburger" src="../assets/icons/hamburger-colored.png" alt="hamburger" />
                                </div>
                            </div>
                        </div>

                        <div class="d-md-none collapse navbar-collapse" id="navbarSupportedContent">
                            <div class="side-bar-top">
                                <img class="profile-img" :src="image" alt="profile-img">
                                <p class="applicant-name text-center">{{ first_name }} 
                                    <span class="ms-1">{{ last_name }}</span>
                                </p>
                                <p class="applicant-mail text-center">{{ email }}</p>
                            </div>

                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 side-bar-info">
                                <li class="dashboard-menus" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                                    <router-link class="dashboard-link" :to="{ name: 'ApplicantDashboard'}">
                                        <img class="dashboard-img" src="../assets/icons/dashboard-icon.svg" alt="dashboard"/>
                                        <span class="dashboad-menu">Dashboard</span>
                                    </router-link>
                                </li>

                                <li class="assessment-menus" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                                    <router-link class="dashboard-link" :to="{ name: 'TakeAssessment' }">
                                        <img class="assessment-img" src="../assets/icons/assessment-icon.svg" alt="assement"/>
                                        <span class="assessment-menu">Assessment</span>
                                    </router-link>
                                </li>

                                <li class="logout-menus ms-3" @click="logOut">
                                    <img class="logout-img" src="../assets/icons/logout-icon.svg" alt="logout"/>
                                    <span class="logout-menu">Log Out</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div class="side-bar d-none d-md-block">
                <div class="side-bar-top">
                    <img class="profile-img" :src="image" alt="profile-img">
                    <p class="applicant-name text-center"> {{ first_name }}
                        <span class="ms-1">{{ last_name }}</span>
                    </p>
                    <p class="applicant-mail text-center">{{ email }}</p>
                </div>
                
                <div class="side-bar-info">
                    <div class="dashboard-menus">
                        <router-link class="dashboard-link" :to="{ name: 'ApplicantDashboard'}">
                            <img class="dashboard-img" src="../assets/icons/dashboard-icon.svg" alt="dashboard"/>
                            <span class="dashboad-menu">Dashboard</span>
                        </router-link>
                    </div>

                    <div class="assessment-menus">
                        <router-link class="dashboard-link" :to="{ name: 'TakeAssessment' }">
                            <img class="assessment-img" src="../assets/icons/assessment-icon.svg" alt="assessment"/>
                            <span class="dashboard-menu">Assessment</span>
                        </router-link>
                    </div>
                    
                    <div class="logout-menus ms-3" @click="logOut">
                        <img class="logout-img" src="../assets/icons/logout-icon.svg" alt="logout"/>
                        <span class="logout-menu" >Log Out</span>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import ApplicationService from '@/services/application'
import { mapActions } from 'vuex'

export default {
    data() {
        return {
            first_name: '',
            last_name: '',
            email: '',
            image: ''
        }
    },
    async mounted() {
         try {
            const res = await ApplicationService.prefillForm()
            if (res.code == 200) {
                this.first_name = res.data.first_name
                this.last_name = res.data.last_name
                this.email = res.data.email
                this.image = res.data.picture.secure_url
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
    methods: {
        ...mapActions(['handleLogOut']),
        logOut() {
            this.handleLogOut()
            this.$router.push({ name: 'SignIn' })
        }
    }
}
</script>