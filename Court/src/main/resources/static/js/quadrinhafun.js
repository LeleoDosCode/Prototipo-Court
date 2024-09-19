// Espera o carregamento completo da página antes de executar o script
window.onload = function() {
   // Obtém a imagem principal
   var mainImage = document.getElementById('mainImage');
   
   // Obtém todas as miniaturas
   var thumbnails = document.querySelectorAll('.thumbnail');
   
   // Adiciona um evento de clique a cada miniatura
   thumbnails.forEach(function(thumbnail) {
       thumbnail.addEventListener('click', function() {
           // Ao clicar, troca o src da imagem principal para o src da miniatura clicada
           mainImage.src = thumbnail.src;
       });
   });
};

var modal = document.getElementById("modal");
var btn = document.getElementById("reservar-btn");
var span = document.getElementsByClassName("close")[0];

// Quando o usuário clica no botão, o modal é exibido
btn.onclick = function() {
 modal.style.display = "block";
}

// Quando o usuário clica no "X", o modal é fechado
span.onclick = function() {
 modal.style.display = "none";
}

// Quando o usuário clica fora do modal, ele é fechado
window.onclick = function(event) {
 if (event.target == modal) {
   modal.style.display = "none";
 }
}

// Lógica para enviar os dados (simulação)
document.getElementById("reserva-form").onsubmit = function(event) {
 event.preventDefault();
 var nome = document.getElementById("nome").value;
 var data = document.getElementById("data").value;
 var horario = document.getElementById("horario").value;
 var equipamento = document.getElementById("equipamento").value;

 // Função para exibir a notificação de reserva confirmada
function exibirNotificacao(mensagem) {
 const notificacaoContainer = document.getElementById('notificacao-container');
 
 // Criando o elemento de notificação
 const notificacao = document.createElement('div');
 notificacao.classList.add('notificacao');
 
 // Ícone de sucesso
 const icone = document.createElement('i');
 icone.classList.add('fa', 'fa-check-circle', 'icone');
 notificacao.appendChild(icone);
 
 // Mensagem de sucesso
 const mensagemEl = document.createElement('span');
 mensagemEl.classList.add('mensagem');
 mensagemEl.textContent = mensagem;
 notificacao.appendChild(mensagemEl);
 
 // Botão de fechamento
 const closeBtn = document.createElement('button');
 closeBtn.classList.add('close-btn');
 closeBtn.innerHTML = '&times;';
 closeBtn.onclick = function () {
   notificacao.style.display = 'none';
 };
 notificacao.appendChild(closeBtn);
 
 // Adiciona a notificação ao contêiner
 notificacaoContainer.appendChild(notificacao);
 
 // Remove a notificação após 4.5 segundos
 setTimeout(function () {
   notificacao.style.opacity = '0';
   setTimeout(() => notificacao.remove(), 500); // Remover o elemento após a animação de fadeOut
 }, 4500);
}

// Função para confirmar a reserva e exibir a notificação
function confirmarReserva() {
 const nome = document.getElementById('nome').value;
 const data = document.getElementById('data').value;
 const horario = document.getElementById('horario').value;
 const equipamento = document.getElementById('equipamento').value;
 
 // Exibindo a notificação


 // Registro da reserva no console de forma mais organizada
 console.group('Detalhes da Reserva');
 console.log('Nome:', nome);
 console.log('Data:', data);
 console.log('Horário:', horario);
 console.log('Equipamento:', equipamento);
 console.groupEnd();

 // Fechar o modal após confirmar a reserva
 const modal = document.getElementById('modalReserva'); // Supondo que o modal tem esse id
 modal.style.display = 'none';
}

}
// Função para abrir o modal de confirmação após a reserva
const formReserva = document.getElementById('reserva-form');
const modalConfirmacao = document.getElementById('confirmacao-modal');
const closeConfirmacao = document.querySelector('.close-confirmacao');
const btnNovaReserva = document.getElementById('nova-reserva-btn');
const btnVoltarInicio = document.getElementById('voltar-inicio-btn');

// Função para preencher as informações de confirmação no modal
function preencherConfirmacao() {
 const nome = document.getElementById('nome').value;
 const data = document.getElementById('data').value;
 const horario = document.getElementById('horario').value;
 const equipamento = document.getElementById('equipamento').value;

 document.getElementById('confirm-nome').textContent = nome;
 document.getElementById('confirm-data').textContent = data;
 document.getElementById('confirm-horario').textContent = horario;
 document.getElementById('confirm-equipamento').textContent = equipamento;

 // Exibe as informações no console e exibe o alerta
 console.log("Reserva Confirmada:", nome, data, horario, equipamento);
 

 // Mostra o modal
 modalConfirmacao.style.display = 'block';
}

// Função que executa quando o formulário é enviado
formReserva.addEventListener('submit', function (event) {
 event.preventDefault(); // Impede o envio do formulário para exibir o modal
 preencherConfirmacao();  // Preenche e mostra o modal
});

// Fecha o modal de confirmação
closeConfirmacao.addEventListener('click', function () {
 modalConfirmacao.style.display = 'none';
});

// Fecha o modal ao clicar fora da área de conteúdo
window.addEventListener('click', function (event) {
 if (event.target === modalConfirmacao) {
   modalConfirmacao.style.display = 'none';
 }
});

// Ações dos botões de confirmação
btnNovaReserva.addEventListener('click', function () {
 modalConfirmacao.style.display = 'none';
 formReserva.reset();  // Reseta o formulário para permitir uma nova reserva
});

btnVoltarInicio.addEventListener('click', function () {
 window.location.href = 'index.html';  // Redireciona para a página inicial
});

// Função para exibir a notificação de reserva confirmada
function exibirNotificacao(mensagem) {
 const notificacaoContainer = document.getElementById('notificacao-container');
 
 // Criando o elemento de notificação
 const notificacao = document.createElement('div');
 notificacao.classList.add('notificacao');
 
 // Ícone de sucesso
 const icone = document.createElement('i');
 icone.classList.add('fa', 'fa-check-circle', 'icone');
 notificacao.appendChild(icone);
 
 // Mensagem de sucesso
 const mensagemEl = document.createElement('span');
 mensagemEl.classList.add('mensagem');
 mensagemEl.textContent = mensagem;
 notificacao.appendChild(mensagemEl);
 
 // Botão de fechamento
 const closeBtn = document.createElement('button');
 closeBtn.classList.add('close-btn');
 closeBtn.innerHTML = '&times;';
 closeBtn.onclick = function () {
   notificacao.style.display = 'none';
 };
 notificacao.appendChild(closeBtn);
 
 // Adiciona a notificação ao contêiner
 notificacaoContainer.appendChild(notificacao);
 
 // Remove a notificação após 4.5 segundos
 setTimeout(function () {
   notificacao.style.opacity = '0';
   setTimeout(() => notificacao.remove(), 500); // Remover o elemento após a animação de fadeOut
 }, 4500);
}

// Função para confirmar a reserva e exibir a notificação