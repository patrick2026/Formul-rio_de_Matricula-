document.addEventListener("DOMContentLoaded", function () {
  // Função para carregar os estados
  async function carregarEstados() {
    const response = await fetch("https://servicodados.ibge.gov.br/api/v2/uf");
    const data = await response.json();

    const selectEstado = document.getElementById("state");
    selectEstado.innerHTML =
      '<option value="" disabled selected>Escolha o estado</option>';

    // Organiza os estados e cria as opções
    data.forEach((estado) => {
      const option = document.createElement("option");
      option.value = estado.sigla;
      option.textContent = estado.nome;
      selectEstado.appendChild(option);
    });
  }

  // Função para carregar as cidades de acordo com o estado selecionado
  async function carregarCidades(estado) {
    const response = await fetch(
      `https://servicodados.ibge.gov.br/api/v2/cidades/${estado}`
    );
    const data = await response.json();

    const selectCidade = document.getElementById("city");
    selectCidade.innerHTML =
      '<option value="" disabled selected>Escolha a cidade</option>';

    data.forEach((cidade) => {
      const option = document.createElement("option");
      option.value = cidade.nome;
      option.textContent = cidade.nome;
      selectCidade.appendChild(option);
    });
  }

  // Ao mudar o estado, carrega as cidades
  document.getElementById("state").addEventListener("change", (event) => {
    const estado = event.target.value;
    carregarCidades(estado);
  });

  // Carrega os estados inicialmente
  carregarEstados();

  // Função para validar o formulário antes do envio
  function validateForm(event) {
    const requiredFields = document.querySelectorAll("[required]");
    let formValid = true;

    requiredFields.forEach((field) => {
      if (!field.value.trim()) {
        field.classList.add("error");
        formValid = false;
      } else {
        field.classList.remove("error");
      }
    });

    // Se algum campo não for válido, não envia o formulário
    if (!formValid) {
      event.preventDefault(); // impede o envio do formulário
      alert("Por favor, preencha todos os campos obrigatórios.");
    }
  }

  // Validar formulário ao enviar
  document.getElementById("form").addEventListener("submit", function (event) {
    validateForm(event);
  });
});
