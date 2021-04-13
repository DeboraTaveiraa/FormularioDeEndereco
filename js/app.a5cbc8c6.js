(function(t){function e(e){for(var a,i,s=e[0],l=e[1],u=e[2],d=0,p=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);c&&c(e);while(p.length)p.shift()();return n.push.apply(n,u||[]),r()}function r(){for(var t,e=0;e<n.length;e++){for(var r=n[e],a=!0,s=1;s<r.length;s++){var l=r[s];0!==o[l]&&(a=!1)}a&&(n.splice(e--,1),t=i(i.s=r[0]))}return t}var a={},o={app:0},n=[];function i(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=a,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(r,a,function(e){return t[e]}.bind(null,a));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var c=l;n.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"14ce":function(t,e,r){},1828:function(t,e,r){"use strict";r("14ce")},"56d7":function(t,e,r){"use strict";r.r(e);r("e623"),r("e379"),r("5dc8"),r("37e1");var a=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("Header"),r("FormAddress")],1)},n=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{staticClass:"form-horizontal",on:{submit:function(e){return e.preventDefault(),t.showAlert(e)}}},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"cep"}},[t._v("CEP")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.valorCep,expression:"valorCep"}],staticClass:"form-control",attrs:{type:"text",id:"cep",placeholder:"Apenas números",name:"cep",maxlength:"8",pattern:"[0-9]+$",required:""},domProps:{value:t.valorCep},on:{input:function(e){e.target.composing||(t.valorCep=e.target.value)}}})]),r("button",{staticClass:"btn btn-primary btn-search",attrs:{type:"button"},on:{click:function(e){return t.buscaCEP(t.valorCep)}}},[t._v(" Pesquisar ")]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"rua"}},[t._v("Rua")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.rua,expression:"rua"}],staticClass:"form-control",attrs:{type:"text",id:"rua",name:"rua",required:""},domProps:{value:t.rua},on:{input:function(e){e.target.composing||(t.rua=e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"numero"}},[t._v("Nº")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.numero,expression:"numero"}],staticClass:"form-control",attrs:{type:"text",id:"numero",name:"numero",required:""},domProps:{value:t.numero},on:{input:function(e){e.target.composing||(t.numero=e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"bairro"}},[t._v("Bairro")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.bairro,expression:"bairro"}],staticClass:"form-control",attrs:{type:"text",id:"bairro",required:""},domProps:{value:t.bairro},on:{input:function(e){e.target.composing||(t.bairro=e.target.value)}}})]),r("div",{staticClass:"form-row"},[r("div",{staticClass:"col-7"},[r("label",{attrs:{for:"cidade"}},[t._v("Cidade")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.cidade,expression:"cidade"}],staticClass:"form-control",attrs:{type:"text",id:"cidade",required:""},domProps:{value:t.cidade},on:{input:function(e){e.target.composing||(t.cidade=e.target.value)}}})]),r("div",{staticClass:"col"},[r("label",{attrs:{for:"estado"}},[t._v("Estado")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.estado,expression:"estado"}],staticClass:"form-control",attrs:{type:"text",id:"estado",required:""},domProps:{value:t.estado},on:{input:function(e){e.target.composing||(t.estado=e.target.value)}}})])]),r("button",{staticClass:"btn btn-primary btn-submit"},[t._v("Enviar")])])},s=[],l=(r("ac1f"),r("5319"),r("62c3")),u=r.n(l),c=u.a.create({baseURL:"https://viacep.com.br/ws"}),d=c,p={name:"FormAddress",data:function(){return{valorCep:"",rua:"",bairro:"",cidade:"",estado:"",numero:""}},methods:{showAlert:function(){this.$swal("Formulário finalizado!")},limpa_formulario_cep:function(){this.rua="",this.bairro="",this.cidade="",this.estado="",this.numero=""},buscaCEP:function(t){var e=this,r=t.replace(/\D/g,"");if(""!==r){var a=/^[0-9]{8}$/;a.test(r)?(this.rua="Carregando...",this.bairro="Carregando...",this.cidade="Carregando...",this.estado="Carregando...",d.get("/".concat(r,"/json/")).then((function(t){return e.rua=t.data.logradouro,e.bairro=t.data.bairro,e.cidade=t.data.localidade,e.estado=t.data.uf})).catch((function(){e.$swal("Formulário não encontrado :("),e.limpa_formulario_cep()}))):(this.limpa_formulario_cep(),this.$swal("CEP inválido!"))}else this.limpa_formulario_cep()}}},m=p,f=(r("1828"),r("2877")),v=Object(f["a"])(m,i,s,!1,null,null,null),b=v.exports,h=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},g=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",[r("div",{staticClass:"animation"},[r("i",{staticClass:"fas fa-truck"})]),r("h3",[t._v("Confirmação do pedido")]),r("ul",[r("li",{staticClass:"active",attrs:{"data-step":"1"}},[t._v("Carrinho")]),r("li",{staticClass:"active",attrs:{"data-step":"2"}},[t._v("Forma de pagamento")]),r("li",{staticClass:"active",attrs:{"data-step":"3"}},[t._v("Endereço")]),r("li",{attrs:{"data-step":"4"}},[t._v("Finalizar")])])])}],C={name:"Header"},_=C,y=(r("8baf"),Object(f["a"])(_,h,g,!1,null,null,null)),w=y.exports,x={name:"App",components:{FormAddress:b,Header:w}},P=x,O=Object(f["a"])(P,o,n,!1,null,null,null),j=O.exports,E=r("5886");r("4413");a["a"].config.productionTip=!1,a["a"].use(E["a"]),new a["a"]({render:function(t){return t(j)}}).$mount("#app")},6860:function(t,e,r){},"8baf":function(t,e,r){"use strict";r("6860")}});
//# sourceMappingURL=app.a5cbc8c6.js.map