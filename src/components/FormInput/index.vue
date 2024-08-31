<template>
  <div class="form-input">
    <label :for="labelFor">
      {{ textLabel }}
    </label>

    <input
      v-bind="$attrs"
      :id="inputId"
      @input="handleChangeInput"
      v-model="inputValue"
    />
  </div>
</template>

<script>
export default {
  name: "FormInput",
  props: {
    labelFor: {
      type: String,
      required: true,
    },
    textLabel: {
      type: String,
      required: true,
    },
    inputId: {
      type: String,
      required: true,
    },
    inputValueProp: {
      required: false,
    }
  },
  data() {
    return {
      inputValue: null,
    };
  },
  watch: {
    inputValueProp: {
      handler() {
        this.inputValue = this.inputValueProp;
      }
    }
  },
  methods: {
    handleChangeInput() {
      this.$emit('value', this.inputValue)
    }
  },
};
</script>

<style scoped src="./index.css" />