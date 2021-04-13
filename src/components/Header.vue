<template>
   <header>
        <div class="animation">
            <i class="fas fa-truck"></i>
        </div>
        <h3>Confirmação do pedido</h3>
        <ul>
            <li class="active" data-step="1">Carrinho</li>
            <li class="active" data-step="2">Forma de pagamento</li>
            <li class="active" data-step="3">Endereço</li>
            <li data-step="4">Finalizar</li>
        </ul>
    </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style>
header {
    margin-top: 40px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
header div.animation {
    background: linear-gradient(180deg, rgba(104,6,252,1) 0%, rgba(246,40,231,1) 100%);
    width: 150px;
    height: 150px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
}

header div i {
    font-size: 4em;
    margin-top: 40px;
    color: #fff;
    animation-name: carrinho;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    position: absolute;
    animation-direction: alternate;
    animation-timing-function: linear;
}
header h3 {
    margin-top: 20px;
    color: #f628e7;
    font-weight: 500;
}

ul {
  margin-top: 70px;
  list-style: none;
  display: flex;
  width: 650px;
  padding: 0;
}
ul li {
  position: relative;
  color: gray;
  width: 25%;
  text-align: center;
}
ul li::before {
  display: flex;
  align-items: center;
  justify-content: center;
  content: attr(data-step);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #f2f2f2;
  position: absolute;
  top: -50px;
  left: calc(50% - 20px);
  z-index: 99;
}
ul li::after {
  content: "";
  width: 100%;
  height: 5px;
  background: #f2f2f2;
  position: absolute;
  top: -35px;
  left: -50%;
}
ul li:first-child::after {
  width: 0;
}
ul li.active::before {
  background: #6806fc;
  color: #fff;
}
ul li.active::after {
  background: #6806fc;
}
ul li.active {
  color: #6806fc;
}

@keyframes carrinho {
    50% {
        margin-top: 30px;
       
        }
    100% {
        padding-bottom: 15px
    }
}

@keyframes carrinhoMobile {
    50% {
        margin-top: 40px;
       
        }
    100% {
        padding-bottom: 10px
    }
}

@media (max-width: 767px) {
    header div {
        width: 100px;
        height: 100px;
    }
    header div i {
        font-size: 3em;
        margin-top: 50px;
        animation-name: carrinhoMobile;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        position: absolute;
        animation-direction: alternate;
        animation-timing-function: linear;
    }
    ul {
        width: 70%;
    }
}

@media (max-width: 600px) {
    header div.animation {
        width: 70px;
        height: 70px;
    }
    div.animation i {
        margin-top: 25px;
        margin-bottom: 30px;
        font-size: 1em;
    }
  header h3 {
    font-size: 1.1em;
  }

  ul {
      width: 80%;
  }

  ul li {
      font-size: 0.8em;
      line-height: 12px;
  }
}
</style>