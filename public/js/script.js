function mudar_pag(end_pag){
    window.location.href = end_pag
};


function closeab(){
    document.querySelector('.login').style = 'display:none';
}

function abrir_login(){
    document.querySelector('.login').style = 'display:flex';
};

var caixa_login = document.getElementById('box-login');

    var tabel_hash = document.getElementById('tabela-resul-hash');
    // Torna a div visível sem usar display: none
    // tabel_hash.style.opacity = "0"; // Garante que a div começa invisível
    
function tabela_hash(){
    let text_input = document.getElementById('input_hash').value;
    let pala_digit = document.getElementById('pala_digit');
    let bycript_hash = document.getElementById('bycript-hash-div');
    let sha1_hash = document.getElementById('sha-1-hash-div');
    

    pala_digit.innerHTML = text_input;
    console.log(text_input)
   
    tabel_hash.style.display = "flex;"
    tabel_hash.style = "flex-direction:column;"     
    tabel_hash.classList.add("aparecer")

    
    tabel_hash.style.visibility = "visible"; // Torna a div visível (sem usar display)
    
    // Adiciona a classe de animação para fazê-la aparecer
    tabel_hash.classList.add("aparecer");
    
    // Garantir que a animação ocorra
    setTimeout(() => {
        tabel_hash.classList.remove("aparecer"); // Remove a animação para evitar que ela reinicie no próximo clique
    }, 1000); // O tempo é o mesmo que a duração da animação (1 segundo)
}

/*------------CARROSSEL----------------*/


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

/*------------CARROSSEL----------------*/

// Garantir que o código execute após a página carregar
document.addEventListener('DOMContentLoaded', () => {
    console.log("Página carregada, script pronto para rodar!");
});

