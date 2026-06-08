const recentes = document.querySelectorAll('.card[data-recente]');
const secao = document.getElementById('recentes');

recentes.forEach(card => {
  const copia = card.cloneNode(true); 
  secao.append(copia);
});

const modal = document.getElementById("modal-aviso")
const btnFechar = document.getElementById("modal-fechar")

document.querySelectorAll(".indisponivel").forEach((card) => {
  card.addEventListener('click', (event) => {
    event.preventDefault()
    modal.style.display = "flex"
  })
})

btnFechar.addEventListener('click', () => {
  modal.style.display = "none"
})