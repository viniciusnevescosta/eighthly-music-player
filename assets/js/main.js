// Músicas
let json = `[
    {
        "id": 1,
        "nome": "It Will Come Back",
        "artista": "The Stolen Orchestra",
        "duracao": "3:38",
        "som": "assets/songs/msc1.ogg",
        "capa": "url(/assets/imgs/msc1.avif)"
    },
    {
        "id": 2,
        "nome": "Whale",
        "artista": "George & Jonathan",
        "duracao": "4:15",
        "som": "assets/songs/msc2.ogg",
        "capa": "url(/assets/imgs/msc2.avif)"
    },
    {
        "id": 3,
        "nome": "Nightingale",
        "artista": "Emorie",
        "duracao": "4:06",
        "som": "assets/songs/msc3.ogg",
        "capa": "url(/assets/imgs/msc3.avif)"
    },
    {
        "id": 4,
        "nome": "Heart Calligraphy",
        "artista": "Cody Martin",
        "duracao": "3:05",
        "som": "assets/songs/msc4.ogg",
        "capa": "url(/assets/imgs/msc4.avif)"
    },
    {
        "id": 5,
        "nome": "Wonderland",
        "artista": "Shimmer",
        "duracao": "3:46",
        "som": "assets/songs/msc5.ogg",
        "capa": "url(/assets/imgs/msc5.avif)"
    },
    {
        "id": 6,
        "nome": "Falling Through the Hourglass",
        "artista": "Sid Acharya",
        "duracao": "4:16",
        "som": "assets/songs/msc6.ogg",
        "capa": "url(/assets/imgs/msc6.avif)"
    },
    {
        "id": 7,
        "nome": "Another Time, Another Place",
        "artista": "Sounds Like Sander",
        "duracao": "2:09",
        "som": "assets/songs/msc7.ogg",
        "capa": "url(/assets/imgs/msc7.avif)"
    },
    {
        "id": 8,
        "nome": "Summit",
        "artista": "Gray Northa",
        "duracao": "1:43",
        "som": "assets/songs/msc8.ogg",
        "capa": "url(/assets/imgs/msc8.avif)"
    },
    {
        "id": 9,
        "nome": "Thoughts",
        "artista": "Adrián Berenguer",
        "duracao": "4:34",
        "som": "assets/songs/msc9.ogg",
        "capa": "url(/assets/imgs/msc9.avif)"
    },
    {
        "id": 10,
        "nome": "Corridors of Time",
        "artista": "Malcolm Robinson",
        "duracao": "4:08",
        "som": "assets/songs/msc10.ogg",
        "capa": "url(/assets/imgs/msc10.avif)"
    }
    ]`
const musicas = JSON.parse(json);

// FUNÇÃO: CRIAR MÚSICAS:
const criarMusica = function(id, nome, artista, duracao, som, capa){
    // div
    const div = document.createElement('div');
    div.classList.add('musica');

    // elemento pai
    const pai = document.querySelector('.item1b'); 
    pai.appendChild(div);
    
    // subclasses
    for(i = 0; i < 3; i++){
        const sub = document.createElement('div');
        sub.classList.add('musicItens');
        div.appendChild(sub);
    };

    const pti = div.querySelectorAll('.musicItens')[0];
    const ptii = div.querySelectorAll('.musicItens')[1];
    const ptiii = div.querySelectorAll('.musicItens')[2];

    // nome da música
    const mscName = document.createElement('p');
    mscName.innerText = `${id}. ${nome}`;
    pti.appendChild(mscName);
    
    // nome do artista
    const mscArtist = document.createElement('p');
    mscArtist.innerText = artista;
    ptii.appendChild(mscArtist);

    // duracação da música
    const mscDuration = document.createElement('p');
    mscDuration.innerText = duracao;
    ptiii.appendChild(mscDuration);

    // essenciais
    const footer = document.querySelector('footer');
    const mscPlay = document.querySelector('#nomeTocando');
    const artPlay = document.querySelector('#artistaTocando');
    const albumPlay = document.querySelector('.albumPlay');
   
    // criar audio
    const audio = document.createElement('audio');
    audio.setAttribute('controls', 'controls');
    audio.id = id;
    const src = document.createElement('source');
    src.setAttribute('type', 'audio/ogg');
    audio.appendChild(src);

    // função trocar musica
    const switchMusic = function(lugar) {
        const qntMsc = document.querySelectorAll('audio').length;
        const anterior = document.querySelectorAll('audio')[0];       
        if(qntMsc === 0) {
            footer.style.display = 'flex';
            mscPlay.innerText = nome;
            artPlay.innerText = artista;
            albumPlay.style.backgroundImage = capa;
            lugar.appendChild(audio);
            src.setAttribute('src', som);
            audio.currentTime = 0;
            audio.play();
        } else if(qntMsc === 1) {
            lugar.removeChild(anterior);
            mscPlay.innerText = nome;
            artPlay.innerText = artista;
            albumPlay.style.backgroundImage = capa;
            play.innerText = 'pause';
            lugar.appendChild(audio);
            src.setAttribute('src', som);
            audio.currentTime = 0;
            audio.play();
        };
    };

    // evento trocar musica
    div.addEventListener('click', function() {
        switchMusic(footer);
    });
};

// criar músicas
criarMusica(musicas[0].id, musicas[0].nome, musicas[0].artista, musicas[0].duracao, musicas[0].som, musicas[0].capa);
criarMusica(musicas[1].id, musicas[1].nome, musicas[1].artista, musicas[1].duracao, musicas[1].som, musicas[1].capa);
criarMusica(musicas[2].id, musicas[2].nome, musicas[2].artista, musicas[2].duracao, musicas[2].som, musicas[2].capa);
criarMusica(musicas[3].id, musicas[3].nome, musicas[3].artista, musicas[3].duracao, musicas[3].som, musicas[3].capa);
criarMusica(musicas[4].id, musicas[4].nome, musicas[4].artista, musicas[4].duracao, musicas[4].som, musicas[4].capa);
criarMusica(musicas[5].id, musicas[5].nome, musicas[5].artista, musicas[5].duracao, musicas[5].som, musicas[5].capa);
criarMusica(musicas[6].id, musicas[6].nome, musicas[6].artista, musicas[6].duracao, musicas[6].som, musicas[6].capa);
criarMusica(musicas[7].id, musicas[7].nome, musicas[7].artista, musicas[7].duracao, musicas[7].som, musicas[7].capa);
criarMusica(musicas[8].id, musicas[8].nome, musicas[8].artista, musicas[8].duracao, musicas[8].som, musicas[8].capa);
criarMusica(musicas[9].id, musicas[9].nome, musicas[9].artista, musicas[9].duracao, musicas[9].som, musicas[9].capa);

// EVENTOS
// essenciais
const footer = document.querySelector('footer');
const play = document.querySelector('#btnPlay');
const previus = document.querySelector('#btnPrevius');
const next = document.querySelector('#btnNext');

let msc = document.querySelector('#nomeTocando');
let art = document.querySelector('#artistaTocando');
let alb = document.querySelector('.albumPlay');

// evento play/pause
play.onclick = function() {
    const audio = document.querySelector('audio');
    if(play.innerText === 'pause') {
        play.innerText = 'play_arrow';
        audio.pause();
    } else {
        play.innerText = 'pause';
        audio.play();
    };
};

document.body.onkeyup = function(e){
    const audio = document.querySelector('audio');
    if(e.keyCode == 32 && play.innerText === 'pause'){
        play.innerText = 'play_arrow';
        audio.pause();
    } else {
        play.innerText = 'pause';
        audio.play();
    }
};

// evento previus/skip music
let num = 0;

previus.addEventListener('click', () => {
    const anterior = document.querySelectorAll('audio')[0];
    let catchAudio = document.querySelector('audio');
    let id = parseInt(catchAudio.getAttribute('id'));

    num = (id - 1);
    num--;

    // criar audio
    const audio = document.createElement('audio');
    audio.setAttribute('controls', 'controls');
    const src = document.createElement('source');
    src.setAttribute('type', 'audio/ogg');
    audio.appendChild(src);

    if(num >= 0){
        footer.removeChild(anterior);
        msc.innerText = musicas[num].nome;
        art.innerText = musicas[num].artista;
        alb.style.backgroundImage = musicas[num].capa;
        footer.appendChild(audio);
        src.setAttribute('src', musicas[num].som);
        audio.id = musicas[num].id;
        audio.currentTime = 0;
        audio.play();
    };
});

next.addEventListener('click', () =>{
    const anterior = document.querySelectorAll('audio')[0];
    let catchAudio = document.querySelector('audio');
    let id = parseInt(catchAudio.getAttribute('id'));

    num = (id - 1);
    num++;

    // criar audio
    const audio = document.createElement('audio');
    audio.setAttribute('controls', 'controls');
    const src = document.createElement('source');
    src.setAttribute('type', 'audio/ogg');
    audio.appendChild(src);

    if(num <= musicas.length){
        footer.removeChild(anterior);
        msc.innerText = musicas[num].nome;
        art.innerText = musicas[num].artista;
        alb.style.backgroundImage = musicas[num].capa;
        footer.appendChild(audio);
        src.setAttribute('src', musicas[num].som);
        audio.id = musicas[num].id;
        audio.currentTime = 0;
        audio.play();
    };
});

// Mostra data atual e quantidade de músicas
const dataQuantidade = function(){
    let data = new Date();
    let dia = String(data.getDate()).padStart(2, '0');
    let mes = String(data.getMonth() + 1).padStart(2, '0');
    let ano = data.getFullYear();

    let quantidade = document.querySelectorAll('.musica').length;

    return `${dia}/${mes}/${ano} - ${quantidade} músicas`
};

let dataMusicas = document.querySelector('#anoQuantidade');
dataMusicas.innerText = dataQuantidade();