<template>
  <form @submit.prevent="submitForm">
    <div>
      <FormInput 
        labelFor="cep"
        textLabel="CEP"
        inputId="cep"
        placeholder="Apenas números"
        name="cep"
        maxlength="8"
        required
        :inputValueProp="zipCode"
        @value="getZipCode"
      />
  
      <button
        type="button"
        class="btn btn-primary btn-search"
        @click="search(zipCode)"
      >
        Pesquisar
      </button>
    </div>

    <FormInput 
      labelFor="rua"
      textLabel="Rua"
      inputId="rua"
      name="rua"
      required
      :inputValueProp="street"
      @value="getStreet"
    />

    <FormInput 
      labelFor="numero"
      textLabel="Número"
      inputId="numero"
      name="numero"
      type="number"
      required
      :inputValueProp="number"
      @value="getNumber"
    />

    <FormInput 
      labelFor="bairro"
      textLabel="Bairro"
      inputId="bairro"
      name="bairro"
      required
      :inputValueProp="district"
      @value="getDistrict"
    />

    <div class="form-row">
      <div class="col-7">
        <FormInput 
          labelFor="cidade"
          textLabel="Cidade"
          inputId="cidade"
          name="cidade"
          required
          :inputValueProp="city"
          @value="getCity"
        />
      </div>

      <div class="col">
        <FormInput 
          labelFor="estado"
          textLabel="Estado"
          inputId="estado"
          name="estado"
          required
          :inputValueProp="state"
          @value="getState"
        />
      </div>
    </div>

    <div class="address-form__buttons">
      <button type="submit" class="btn btn-primary address-form__submit" :disabled="!formIsValid">
        Enviar
      </button>

      <button type="button" class="btn btn-second" @click="clearInputs">
        Limpar
      </button>
    </div>
  </form>
</template>

<script>
import FormInput from '../FormInput/index.vue';

import ViaCepService from '@/services/ViaCepService.js';

export default {
  name: "AddressForm",
  components: {
    FormInput,
  },
  data() {
    return {
      zipCode: "",
      street: "",
      district: "",
      city: "",
      state: "",
      number: "",
      ViaCepService: new ViaCepService(),
    };
  },
  computed: {
    formIsValid() {
      return this.zipCode.length === 8
        && this.street
        && this.district
        && this.city
        && this.state
        && this.number
    }
  },
  methods: {
    async search(zipCode) {
      if (!zipCode || zipCode.length !== 8) return;

      try {
        this.setLoadingInputs();

        const response = await this.ViaCepService.getAddress(zipCode);

        if (response.erro) throw new Error("Cep não encontrado.");

        if (response) {
          this.street = response.logradouro;
          this.district = response.bairro;
          this.city = response.localidade;
          this.state = response.uf;
        }
      } catch (error) {
        this.$swal('CEP não encontrado.');
        this.clearInputs();
      }
    },
    submitForm() {
      this.$swal('Formulário finalizado!');
    },
    formatCep(zipCode) {
      return zipCode.replace(/\D/g, '');
    },
    clearInputs() {
      this.street = "";
      this.district = "";
      this.city = "";
      this.state = "";
      this.number = "";
      this.zipCode = "";
    },
    setLoadingInputs() {
      this.street = "Carregando...";
      this.district = "Carregando...";
      this.city = "Carregando...";
      this.state = "Carregando...";
    },
    getZipCode(zipCode) {
      this.zipCode = this.formatCep(zipCode);
    },
    getStreet(street) {
      this.street = street;
    },
    getNumber(number) {
      this.number = number;
    },
    getDistrict(district) {
      this.district = district;
    },
    getCity(city) {
      this.city = city;
    },
    getState(state) {
      this.state = state;
    }
  },
};
</script>

<style scoped src="./index.css" />