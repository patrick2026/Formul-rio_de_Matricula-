function formatPhone(input) {
  // Remove todos os caracteres não numéricos
  let phone = input.value.replace(/\D/g, "");

  // Aplica a máscara apenas se o valor for maior que zero
  if (phone.length > 0) {
    // Aplica a máscara no formato (XX) XXXXX-XXXX
    if (phone.length <= 2) {
      input.value = "(" + phone;
    } else if (phone.length <= 6) {
      input.value = "(" + phone.slice(0, 2) + ") " + phone.slice(2);
    } else {
      input.value =
        "(" +
        phone.slice(0, 2) +
        ") " +
        phone.slice(2, 7) +
        "-" +
        phone.slice(7, 11);
    }
  }
}

// Validação simples de e-mail
function validateEmail(input) {
  const email = input.value;
  const emailError = document.getElementById("emailError");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email && !emailRegex.test(email)) {
    emailError.style.display = "block";
  } else {
    emailError.style.display = "none";
  }
}

// Função para tratar o envio e limpar os campos
function handleFormSubmit(event) {
  event.preventDefault();

  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;

  // Simulando envio de dados (pode ser substituído por uma chamada de API)
  console.log("Telefone:", phone);
  console.log("Email:", email);

  // Limpa os campos após o envio
  document.getElementById("contactForm").reset();
  document.getElementById("emailError").style.display = "none";

  alert("Dados enviados com sucesso!");
}
