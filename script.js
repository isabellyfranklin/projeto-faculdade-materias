
const inputSearch = document.getElementById("pesquisa");
const resultado = document.getElementById("resultado");

const conteudos = [
  {
    titulo: "HTML",
    descricao: "Estrutura básica de páginas web.",
    palavrasChave: ["html", "estrutura", "tags", "site", "pagina"]
  },
  {
    titulo: "CSS",
    descricao: "Estilização de páginas web.",
    palavrasChave: ["css", "estilo", "cores", "layout", "design"]
  },
  {
    titulo: "JavaScript",
    descricao: "Interatividade e lógica no site.",
    palavrasChave: ["javascript", "js", "função", "evento", "interação"]
  },
  {
    titulo: "Navbar",
    descricao: "Barra de navegação do site.",
    palavrasChave: ["navbar", "menu", "navegação", "header", "topo"]
  },
  {
    titulo: "Input de Pesquisa",
    descricao: "Campo para pesquisar conteúdos no site.",
    palavrasChave: ["input", "pesquisa", "buscar", "search", "campo"]
  },
  {
    titulo: "Resumos",
    descricao: "Área com resumos das aulas e matérias.",
    palavrasChave: ["resumo", "resumos", "aulas", "conteudo", "estudo"]
  },
  {
    titulo: "Perguntas",
    descricao: "Seção com perguntas para fixação.",
    palavrasChave: ["perguntas", "quiz", "fixação", "exercicios", "questoes"]
  },
  {
    titulo: "Engenharia de Software",
    descricao: "Conceitos, processos e boas práticas no desenvolvimento.",
    palavrasChave: ["engenharia de software", "software", "requisitos", "projeto", "sistemas"]
  },
  {
    titulo: "Flexbox",
    descricao: "Organiza elementos com display flex.",
    palavrasChave: ["flexbox", "display flex", "justify-content", "align-items", "layout"]
  }
];

inputSearch.addEventListener("input", function () {
  const valor = inputSearch.value.toLowerCase().trim();

  if (valor === "") {
    resultado.innerHTML = " ";
    return;
  }

  const resultadosFiltrados = conteudos.filter(item => {
    return (
      item.titulo.toLowerCase().includes(valor) ||
      item.descricao.toLowerCase().includes(valor) ||
      item.palavrasChave.some(palavra => palavra.toLowerCase().includes(valor))
    );
  });

  if (resultadosFiltrados.length > 0) {
    resultado.innerHTML = resultadosFiltrados.map(item => `
      <div class="card">
        <h2>${item.titulo}</h2>
        <p>${item.descricao}</p>
      </div>
    `).join("");
  } else {
    resultado.innerHTML = "<p>Nenhum resultado encontrado 😢</p>";
  }
});