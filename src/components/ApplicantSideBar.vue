<template>

        <div class="side-menu">

            <div class="open-slide">
                <img class="hamburger" src="../assets/icons/hamburger-colored.png" alt="hamburger" />
            </div>

            <div class="top-side-bar">
                <img class="profile-img" src="../assets/icons/profile-dp.svg" alt="profile-img">

                <p class="applicant-name text-center">Jane Doe</p>
                <p class="applicant-mail text-center">doe@enyata.com</p>
            </div>
            
            <div class="side-bar-info">
                    <div class="dashboard-menus">
                        <img class="dashboard-stage" src="../assets/icons/dashboard-stage-icon.svg" alt="stage" />

                        <router-link :to="{ name: 'ApplicantDashboard'}">
                            <img class="dashboard-img" src="../assets/icons/dashboard-icon.svg" alt="dashboard"/>
                            <span class="dashboad-menu">Dashboard</span>
                        </router-link>
                    </div>

                <div class="assessment-menus">
                    <router-link :to="{ name: 'TakeAssessment' }">
                        <img class="assessment-img" src="../assets/icons/assessment-icon.svg" alt="assement"/>
                        <span class="assessment-menu">Assessment</span>
                    </router-link>
                </div>

                <div class="logout-menus">
                    <img class="logout-img" src="../assets/icons/logout-icon.svg" alt="logout"/>
                    <span class="logout-menu">Log Out</span>
                </div>
            </div>
        </div>
</template>

<script>
export default {

}
</script>