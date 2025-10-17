// viacep.js
$(document).ready(function () {

  $("#cep").on("blur", function () {
    const cep = $(this).val().replace(/\D/g, '');

    if (cep.length !== 8) {
      alert("CEP inválido. Digite 8 números.");
      return;
    }

    $.getJSON(`https://viacep.com.br/ws/${cep}/json/`, function (data) {
      if (!("erro" in data)) {
        $("#rua").val(data.logradouro);
        $("#bairro").val(data.bairro);
        $("#cidade").val(data.localidade);
        $("#estado").val(data.uf);
      } else {
        alert("CEP não encontrado.");
      }
    }).fail(function () {
      alert("Erro ao consultar o CEP. Tente novamente.");
    });
  });

});
