// validacao.js
$(document).ready(function () {
  $("#formCadastro").on("submit", function (e) {
    e.preventDefault(); // impede o envio padrão do formulário

    // Validação dos campos obrigatórios no front-end
    const nome = $("#nome").val().trim();
    const sobrenome = $("#sobrenome").val().trim();
    const email = $("#email").val().trim();
    const senha = $("#senha").val().trim();

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nome || !sobrenome || !email || !senha) {
      alert("Por favor, preencha todos os campos obrigatórios (Nome, Sobrenome, Email, Senha)!");
      return;
    }

    if (!regexEmail.test(email)) {
      alert("Por favor, insira um e-mail válido!");
      $("#email").focus();
      return;
    }

    // Se a validação passou, envia os dados via AJAX para o back-end
    const formData = $(this).serialize(); // Serializa os dados do formulário para envio

    $.ajax({
      type: "POST",
      url: "http://localhost:3000/api/users/cadastrar", // URL do endpoint da API Node.js
      data: formData,
      dataType: "json", // Espera uma resposta em formato JSON do servidor
      success: function (response) {
        // A requisição foi bem-sucedida
        alert(response.message);
        if (response.success) {
          $("#formCadastro")[0].reset(); // Limpa o formulário
        }
      },
      error: function (jqXHR, textStatus, errorThrown) {
        // Ocorreu um erro na requisição
        console.error("Erro AJAX:", textStatus, errorThrown, jqXHR.responseText);
        // Tenta pegar a mensagem de erro do JSON, senão usa uma padrão
        const errorMsg = jqXHR.responseJSON ? jqXHR.responseJSON.message : "Ocorreu um erro no servidor. Tente novamente.";
        alert("Erro: " + errorMsg);
      },
    });
  });
});
