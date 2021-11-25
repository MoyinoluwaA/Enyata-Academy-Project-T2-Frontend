<template>
    <div class="col-12 form-input mb-4" :class="inputBoxStyle">
        <label :for="identifier" class="mb-2 form-label text--gray-2" :class="labelStyle">{{label}}</label>
        <input :type="type" class="form-control" :class="inputStyle" id="input-box" :name="identifier" />
    </div>
</template>

<script>
export default {
    name: 'formInput',
    props: {
        identifier: String,
        type: String,
        label: String,
        labelStyle: String,
        inputStyle: String,
        inputBoxStyle: String
    },
}
</script>
