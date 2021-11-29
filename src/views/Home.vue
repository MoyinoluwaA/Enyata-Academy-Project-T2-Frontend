<template>
	<div class="home">
		<Navbar/>
		<main class="container px-xl-5">
			<section class="row intro">
				<div class="col-lg-6 col-md-6 col-sm-12 intro-text">
					<h1 class="fw-bold intro-header">Ever had a Dream of Becoming a Software <span class="text--purple">Engineer?</span></h1>
					<p class="fs-5 mt-4 text-secondary">Join enyata academy today and bring your long awaiting dream to reality.</p>
					<router-link to="/signup"><Button btnText='Register Now' btnStyle='btn btn-lg btn-register-purple registerNav mt-4'/></router-link>
				</div>
				<div class="col-lg-6 col-md-6 col-sm-12 order-first order-md-last">
					<img src="../assets/images/Group 6.png" class="small-screenImg img-fluid" alt="">
				</div>
			</section>
			<section class='row why_us'>
				<div class='d-flex align-items-center'>
					<div class="line me-2"></div>
					<h5 class="mb-0 fw-bold">Why us?</h5>
				</div>
				<section class="row box flex-wrap mx-auto">
					<div  class='col-lg-3 col-md-6 col-sm-12 mt-3 mt-md-5 p-4 ' v-for="reason in reasons" :key=reason.id>
						<h5>{{reason.title}}</h5>
						<p class="text-secondary lh-base mt-3 ">{{reason.description}}</p>
					</div>
				</section>
			</section>
		</main>
		<Footer/>
	</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Button from '@/components/Button.vue'
import Footer from '@/components/Footer.vue'


export default {
	name: 'Home',
	components: {
		Navbar,
		Button,
		Footer
	},
	data() {
		return {
			reasons: [
				{
					title: "Learn from the best",
					description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation amet."
				},
				{
					title: "100% online classes",
					description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation amet."
				},
				{
					title: "Get paid while learning",
					description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation amet."
				},
				{
					title: "Work on real project",
					description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation amet."
				},
			]
		}
	}
}
</script>