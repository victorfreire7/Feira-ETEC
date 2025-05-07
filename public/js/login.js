
var box_login = document.getElementById('form-login');

function open_login() {
    const box_login = document.getElementById('form-login');

    box_login.style.display = "flex";

    // Adiciona a classe de animação
    box_login.classList.add("aparecer");

    setTimeout(() => {
        box_login.classList.remove("aparecer");
    }, 1000);
}

function close_login(){
    box_login.style.display = "none";
}



  const jogos = [
    {
      nome: "Banana Warrior",
      img: "../img/banana.jpg",
      descricao: "Uma banana que deseja enfrentar o mundo"
    },
    {
      nome: "Gato Fofo",
      img: "../img/gatinho1.png",
      descricao: "Um gato fofo e misterioso"
    },
    {
      nome: "Ciborgue Azul",
      img: "../img/ciborgue.jpg",
      descricao: "Um ciborgue que defende dados secretos"
    }
    // Você pode adicionar mais aqui!
  ];

  const container = document.getElementById("carrosel");

  jogos.forEach(jogo => {
    const divJogo = document.createElement("div");
    divJogo.classList.add("jogo");
    divJogo.style.backgroundImage = `url(${jogo.img})`;
    divJogo.style.backgroundSize = "cover";
    divJogo.style.backgroundPosition = "center";
    divJogo.style.position = "relative";

    // Adiciona o filtro escuro (estilo do ::before)
    const overlay = document.createElement("div");
    overlay.style.position = "absolute";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    overlay.style.borderRadius = "8px";
    overlay.style.zIndex = "0";

    const conteudo = document.createElement("div");
    conteudo.classList.add("conteudo");

    const titulo = document.createElement("p");
    titulo.textContent = jogo.nome;

    const hr2 = document.createElement("div");
    hr2.classList.add("hr2");

    const subtitulo = document.createElement("p");
    subtitulo.textContent = "Sobre:";

    const descricao = document.createElement("p");
    descricao.classList.add("fora-contet");
    descricao.textContent = jogo.descricao;

    conteudo.appendChild(titulo);
    conteudo.appendChild(hr2);
    conteudo.appendChild(subtitulo);

    divJogo.appendChild(overlay);
    divJogo.appendChild(conteudo);
    divJogo.appendChild(descricao);

    container.appendChild(divJogo);
  });

console.log("Script carregado com sucesso!");