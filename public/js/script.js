
function mudar_pag(end_pag){
    window.location.href = end_pag
};



function open_game(url){
  window.open(url, '_blank')
}

var box_login = document.getElementById('form-login');
  var preto = document.querySelector('.pretao');
function open_login() {

    preto.style.display = "flex"

    box_login.style.display = "flex";

    // Adiciona a classe de animação
    box_login.classList.add("aparecer");
    body.style.filter = "blur(2px) brightness(50%)"
    setTimeout(() => {
        box_login.classList.remove("aparecer");
    }, 1000);
}


function close_login(){
  box_login.style.display = "none";
  preto.style.display = "none";
}

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

/*------------CARROSSEL---------------*/

const jogos = [
  {
    nome: "Kill the Malware",
    img: "../img/kill_the_malware.jpeg",
    descricao: "Um malware está atacando um computador, você é a única pessoa que consegue combater essa invasão.",
    link: "https://pietrooliveira17.github.io/Kill-The-Malware"
  },
  {
    nome: "Ciber Ventura",
    img: "../img/ciberventura.jpeg",
    descricao: "Seja o hacker dos crackers e se aventure numa gameficação curta ensinando dois fundamentos da segurança virtual, de um jeito imaginado e fantasioso.",
    link: "https://julian-nayde.github.io/CiberVentura/"
  },
  {
    nome: "Data Spike",
    img: "../img/data-spike.jpg",
    descricao: "Em um dia de trabalho um Analista de Dados encontra um hacker invadindo a empresa, então eles se enfrentam em uma partida de vôlei para salvar a empresa",
    link: "https://darkboat4.github.io/Data-Spike/"
  },
  {
    nome: "Nig Slayer",
    img: "../img/nig.jpeg",
    descricao: "Assuma o papel de Nig, um ninja cibernético, e enfrente o vírus Specter que ameaça destruir a internet. Lute em mundos digitais cheios de perigos, limpe os sistemas e salve o futuro da rede global!",
    link: "https://wendel-binotto.github.io/Jogoconstruct/"
  },
  {
    nome: "O esquilo cibernético",
    img: "../img/esquilo.jpeg",
    descricao: "Um esquilo curioso caiu em um mundo tecnológico estranho e brilhante. Para voltar para casa, ele precisa coletar nozes tecnológicas espalhadas pelo cenário.",
    link:"https://pedrada2007.github.io/Pauloo-freire/"
  },
  {
    nome: "Tatu Journey - Uma aventura cibernetica",
    img: "../img/tatu.jpeg",
    descricao: "Após os eventos de Tatu Journey..Tatu estava aprendendo a mexer em seu novo celular, quando de repente seus dados foram roubados e enviados a um hacker muito habilidoso.....",
    link: "https://joaotatu.github.io/PauloFreire-ETEC/"
  },
  {
    nome: "CRTL+ALT+SUMIR",
    img: "../img/alt.jpeg",
    descricao: "Um ciborgue que defende dados secretosVocê acorda sequestrado por três criminosos geniais. Eles querem sua ajuda pra invadir um banco — e desaparecer com tudo.",
    link: "https://caio19100.github.io/CTRLALTSUMIR/"
  },
  {
    nome: "Alexandre'S Adventure",
    img: "../img/alexan.jpeg",
    descricao: "Em um mundo digital à beira do colapso, ameaçado por vírus perigosos que se espalham sem controle, o renomado Professor Alexandre, da ETEC Adhemar Batista Hemeritas (ABH), decide deixar suas aulas de lado para enfrentar uma nova missão!",
    link: "https://santanbakkkkj07.github.io/alexandre-s-adventurekk/"
  },
  {
    nome: "Afanablake e a batalha hacker",
    img: "../img/afana.jpeg",
    descricao: "Você, usuário do computador acabou de instalar sem querer vários arquivos corrompidos, mas que graças ao programa antivírus 'Afanablake' seu computador ainda tem salvação, controle ele para destruir todos os vírus para salvar seu computador",
    link: ["https://enzo9119.github.io/page1/", "https://enzo9119.github.io/boss/"]//link 1: jogo, link 2 : parte boss
  },
  {
    nome: "Cyber security",
    img: "../img/cyber.jpeg",
    descricao: "É um jogo sobre um soldado que nescessita fugir de um sistema infectado por virus e nescessita chegar o fim da sua jornada",
    link: "https://fern990.github.io/jogo/"
  },
  {
    nome: "Shadow Leap",
    img: "../img/shadow.jpeg",
    descricao: "Um malware está atacando um computador, você é a única pessoa que consegue combater essa invasão.",
    link: "https://darkboat4.github.io/shadow-leap-paulofreire-game/"
  },
  {
    nome: "O vírus que destruiu minha vida",
    img: "../img/virus.jpeg",
    descricao: "O protagonista, destinado a viver em sofrência após sua conta do TikTok ser roubada, porém, decide recuperar sua conta derrotando os hackers que causam essa discórdia na humanidade, sua jornada é curta e direta, derrotando hackers e vírus responsáveis por tais atrocidades.",
    link: ["https://renanr158.github.io/ovirusquedestruiuminhavida_1-3/", "https://renanr158.github.io/ovirusquedestruiuminhavida_2-3/", "https://renanr158.github.io/ovirusquedestruiuminhavida_2.5-3/", "https://renanr158.github.io/ovirusquedestruiuminhavida_3-3/"] //link 1: parte 1, link 2: parte 2, link 3: parte 2.5, link 4: parte 3
  },
  {
    nome: "Kastiel",
    img: "../img/kasti.jpeg",
    descricao: "nao me mandaram ainda",
    link: "https://darkboat4.github.io/kastiel-game-paulo-freire/"
  },
  {
    nome: "Karatec",
    img: "../img/Tartaruga.png",
    descricao: "nao me mandaram ainda",
    link: "https://10121974.github.io/Jogo-karatec/"
  },
  // Você pode adicionar mais aqui!
];

const container = document.getElementById("carrosel");

jogos.forEach(jogo => {
  // Criação da div do jogo
  const divJogo = document.createElement("div");
  divJogo.classList.add("jogo"); // Adiciona a classe 'jogo'

  // Adiciona a imagem de fundo ao ::before da div.jogo
  divJogo.style.setProperty('--background-img', `url(${jogo.img})`);

  // Criação do overlay (filtro escuro)
  const overlay = document.createElement("div");
  overlay.classList.add("overlay"); // Adiciona a classe 'overlay'

  // Criação do conteúdo com o título e a descrição
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

  // Adicionando os elementos ao conteúdo
  conteudo.appendChild(titulo);
  conteudo.appendChild(hr2);
  // conteudo.appendChild(subtitulo);

  // Adicionando os elementos à div do jogo
  divJogo.appendChild(overlay);
  divJogo.appendChild(conteudo);
  // divJogo.appendChild(descricao);

  // Adicionando a div do jogo ao container do carrossel
  container.appendChild(divJogo);
});

console.log("Script carregado com sucesso!");

/*------------CARROSSEL----------------*/


// Garantir que o código execute após a página carregar
document.addEventListener('DOMContentLoaded', () => {
    console.log("Página carregada, script pronto para rodar!");
});

