<template>
  <form class="form-horizontal" @submit.prevent="showAlert">
    <div class="form-group">
      <label for="cep">CEP</label>
      <input
        type="text"
        class="form-control"
        id="cep"
        placeholder="Apenas números"
        name="cep"
        maxlength="8"
        pattern="[0-9]+$"
        v-model="valorCep"
        required
      />
    </div>
    <button
      type="button"
      class="btn btn-primary btn-search"
      @click="buscaCEP(valorCep)"
    >
      Pesquisar
    </button>
    <div class="form-group">
      <label for="rua">Rua</label>
      <input
        type="text"
        class="form-control"
        v-model="rua"
        id="rua"
        name="rua"
        required
      />
    </div>
    <div class="form-group">
      <label for="numero">Nº</label>
      <input
        type="text"
        class="form-control"
        v-model="numero"
        id="numero"
        name="numero"
        required
      />
    </div>
    <div class="form-group">
      <label for="bairro">Bairro</label>
      <input
        type="text"
        class="form-control"
        v-model="bairro"
        id="bairro"
        required
      />
    </div>
    <div class="form-row">
      <div class="col-7">
        <label for="cidade">Cidade</label>
        <input
          type="text"
          class="form-control"
          v-model="cidade"
          id="cidade"
          required
        />
      </div>
      <div class="col">
        <label for="estado">Estado</label>
        <input
          type="text"
          class="form-control"
          v-model="estado"
          id="estado"
          required
        />
      </div>
    </div>
    <button class="btn btn-primary btn-submit">Enviar</button>
  </form>
</template>

<script>
import api from '@/services/api.js'
export default {
  name: "FormAddress",
  data() {
    return {
      valorCep: "",
      rua: "",
      bairro: "",
      cidade: "",
      estado: "",
      numero: "",
    };
  },
  methods: {
    showAlert() {
      // Use sweetalert2
      this.$swal('Formulário finalizado!');
    },
    limpa_formulario_cep() {
      this.rua = "";
      this.bairro = "";
      this.cidade = "";
      this.estado = "";
      this.numero = "";
    },
    buscaCEP(valorCep) {
      //tratamento do valor inserido no campo cep
      var cep = valorCep.replace(/\D/g, ""); 

      if (cep !== "") {
        var validacep = /^[0-9]{8}$/;
        if (validacep.test(cep)) {
          //Enquanto aguarda as requsições da API ViaCEP
          this.rua = "Carregando...";
          this.bairro = "Carregando...";
          this.cidade = "Carregando...";
          this.estado = "Carregando...";

          //Requisição a API e armazenamento nas variáveis
          api
          .get(`/${cep}/json/`)
          .then(
              (response) => (
                  (this.rua = response.data.logradouro),
                  (this.bairro = response.data.bairro),
                  (this.cidade = response.data.localidade),
                  (this.estado = response.data.uf)
              )
            )
            .catch(() => {
              this.$swal('Formulário não encontrado :(');
              this.limpa_formulario_cep();
            });
        //Se o cep for inválido...
        } else {
          this.limpa_formulario_cep();
          this.$swal('CEP inválido!');
        }
      //cep sem valor...
      } else {
        this.limpa_formulario_cep();
      }
    },
  },
};
</script>

<style>

form {
  border: 1px solid rgba(246, 40, 231, 1);
  border-radius: 10px;
  font-size: 1.1em;
  padding: 20px;
  width: 50%;
  margin: 50px auto;
}
form label {
  color: #6806fc;
  font-weight: 500;
}
form .btn-search {
  background-color: #6806fc;
  border: none;
  margin-bottom: 20px;
}
.btn-search:hover {
  background-color: #6806fccb;
}
.btn-submit {
  background-color: #f628e7;
  border: none;
  margin-top: 20px;
}
.btn-submit:hover {
  background-color: #f628e8d7;
}

@media (min-width: 768px) {
    form {
        width: 40%;
    }
}

@media (max-width: 700px) {
  form {
    width: 70%;
  }
}
</style>