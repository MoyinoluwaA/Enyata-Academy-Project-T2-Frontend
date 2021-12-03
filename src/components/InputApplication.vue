<template>
    <div :class="inputBoxStyle">
        <label :for="identifier" class="mb-2 form-label text--gray-2" :class="labelStyle">{{label}}</label>
        <input :type="type" class="form-control" :class="inputStyle" :id="identifier" :name="identifier" 
            :value="value" @input="$emit('input', $event.target.value)"  aria-describedby="inputGroupPrepend3 validationFeedback" :readonly="readonly" 
            :step=".01" :max="max"
        />
        <span id="validationFeedback" class="invalid-feedback">
            {{invalidMsg}}
        </span>
    </div>
</template>

<script>
export default {
    name: 'formInput',
    props: {
        identifier: String,
        type: [String, Number, Date],
        label: String,
        labelStyle: String,
        inputStyle: String,
        inputBoxStyle: String,
        value: String,
        invalidMsg: String,
        readonly: String,
        step: String,
        max: String
    },
}
</script>
