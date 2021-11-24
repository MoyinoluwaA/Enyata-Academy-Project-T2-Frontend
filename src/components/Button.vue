<template>
        <button type='button' class="btn" :class='btnStyle'>{{btnText}}</button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        btnText: String,
        btnStyle: String
    }
}
</script>