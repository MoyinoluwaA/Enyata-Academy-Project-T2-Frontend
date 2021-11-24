<template>
    <footer class="py-5">
        <p class="text-center mb-0 p-0">Copyright © Enyata {{year}}</p>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {
            year: ''
        }
    },
    mounted() {
        this.year =  new Date().getFullYear()
    }
}
</script>