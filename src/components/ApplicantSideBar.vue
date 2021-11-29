<template>
        <div>
            <div class="d-md-none nav-bar">
                <nav class="navbar navbar-light bg-light">
                    <div class="container-fluid">
                            <router-link class="navbar-brand" :to="{ name: 'ApplicantDashboard'}">
                                <img src="../assets/icons/enyata-logo.svg" />
                            </router-link>
                        <div class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <div class="open-slide">
                                <img class="hamburger" src="../assets/icons/hamburger-colored.png" alt="hamburger" />
                            </div>
                        </div>

                        <div class="d-md-none collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">

                                <div class="side-bar-top">
                                    <img class="profile-img" src="../assets/icons/profile-dp.svg" alt="profile-img">

                                    <p class="applicant-name text-center">Jane Doe</p>
                                    <p class="applicant-mail text-center">doe@enyata.com</p>
                                </div>
                                <li class="nav-item">
                                    <div class="side-bar-info">
                                        <div class="dashboard-menus">
                                            <router-link class="dashboard-link" :to="{ name: 'ApplicantDashboard'}">
                                                <img class="dashboard-img" src="../assets/icons/dashboard-icon.svg" alt="dashboard"/>
                                                <span class="dashboad-menu">Dashboard</span>
                                            </router-link>
                                        </div>

                                        <div class="assessment-menus">
                                            <router-link class="dashboard-link" :to="{ name: 'TakeAssessment' }">
                                                <img class="assessment-img" src="../assets/icons/assessment-icon.svg" alt="assement"/>
                                                <span class="assessment-menu">Assessment</span>
                                            </router-link>
                                        </div>

                                        <div class="logout-menus">
                                            <img class="logout-img" src="../assets/icons/logout-icon.svg" alt="logout"/>
                                            <span class="logout-menu">Log Out</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div class="side-bar d-none d-md-block">
                <div class="side-bar-top">
                    <img class="profile-img" src="../assets/icons/profile-dp.svg" alt="profile-img">

                    <p class="applicant-name text-center">Jane Doe</p>
                    <p class="applicant-mail text-center">doe@enyata.com</p>
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
                            <img class="assessment-img" src="../assets/icons/assessment-icon.svg" alt="assement"/>
                            <span class="dashboard-menu">Assessment</span>
                        </router-link>
                    </div>
                    
                    <div class="logout-menus">
                        <img class="logout-img" src="../assets/icons/logout-icon.svg" alt="logout"/>
                        <span class="logout-menu">Log Out</span>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {

}
</script>