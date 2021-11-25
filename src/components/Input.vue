<template>
        <div class="col-md-6 col-12 form-input mb-4">
            <label for='inputType' class="mb-2 labelForm text--labelColor">{{label}}</label>
            <input type="type" class="form-control" id="input-box" name="identifier" />
        </div>
        <!-- <label for="inputType" class="labelStyle">{{label}}</label>
        <input type="type" class="inputStyle" id="inputType" name="identifier" v-bind:value="value" v-on:input="$emit('input', $event.target.value)" >
    </div> -->
</template>

<script>
export default {
    name: 'formInput',
    props: {
        identifier: String,
        type: String,
        inputType: String,
        label: String,
        labelStyle: String,
        inputStyle: String
    },
}
</script>
