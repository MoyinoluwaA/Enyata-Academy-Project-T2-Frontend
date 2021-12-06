<template>
    <div class="col-12 form-input mb-4 position-relative" :class="inputBoxStyle">
        <label :for="identifier" class="mb-2 form-label text--gray-2" :class="labelStyle">{{label}}</label>
        <div class="password-container">
            <input :type='show ? "text" : "password"' class="form-control password-input" :class="inputStyle" :id="identifier" :name="identifier" 
                :value="value" @input="$emit('input', $event.target.value)"  aria-describedby="inputGroupPrepend3 validationFeedback"
            />
            <i class="bi" :class='show ? "bi-eye-slash" : "bi-eye"' @click='passwordToggle()' />
        </div>
        <span id="validationFeedback" class="invalid-feedback position-absolute">
            {{invalidMsg}}
        </span>
    </div>
</template>

<script>
export default {
    name: 'formInput',
    data() {
        return {
            show: false
        }
    },
    props: {
        identifier: String,
        type: [String, Number],
        label: String,
        labelStyle: String,
        inputStyle: String,
        inputBoxStyle: String,
        value: String,
        invalidMsg: String,
        visibility: String,
        iconClass: String,
    },
    methods: {
        passwordToggle() {
            this.show = !this.show
        }
    }
}
</script>
