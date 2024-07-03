// document.getElementById('purchase-form').addEventListener('submit', function(event) {
//     event.preventDefault();

//     // Obter valores do formulário
//     const packageSelect = document.getElementById('package');
//     const packageName = packageSelect.options[packageSelect.selectedIndex].text;
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const phone = document.getElementById('phone').value;
//     const departureDate = document.getElementById('departure-date').value;
//     const returnDate = document.getElementById('return-date').value;

//     // Construir o resumo da compra
//     const summaryText = `
//         <strong>Pacote Selecionado:</strong> ${packageName}<br>
//         <strong>Nome:</strong> ${name}<br>
//         <strong>Email:</strong> ${email}<br>
//         <strong>Telefone:</strong> ${phone}<br>
//         <strong>Data de Ida:</strong> ${departureDate}<br>
//         <strong>Data de Volta:</strong> ${returnDate}
//         `;

//     // Exibir o resumo
//     const summary = document.getElementById('summary');
//     document.getElementById('summary-text').innerHTML = summaryText;
//     summary.style.display = 'block';
// });

document.getElementById('purchase-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Ocultar o formulário
    document.getElementById('purchase-form').style.display = 'none';
    
    // Exibir a mensagem de agradecimento
    document.getElementById('thank-you-message').classList.remove('hidden');
});