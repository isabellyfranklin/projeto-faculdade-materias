const recentes = document.querySelectorAll('.card[data-recente]');
const secao = document.getElementById('recentes');

recentes.forEach(card => {
  const copia = card.cloneNode(true); // true = copia tudo dentro também
  secao.append(copia);
});