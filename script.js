function submitForm(event) {
    event.preventDefault(); // Evita o envio do formulário e o recarregamento da página

    var inputElement1 = document.getElementById("nome");
    var inputElement = document.getElementById("pontosColeta");
    var inputValue = inputElement1.value;
    var inputValue = inputElement.value;

    if (inputValue !== "") {
        var messageElement = document.getElementById("message");
        messageElement.innerHTML = "Obrigado! Seu formulário foi enviado.";
        messageElement.classList.add("message");

        inputElement1.value = "";
        inputElement.value = ""; // Limpa o valor do input
    }
}