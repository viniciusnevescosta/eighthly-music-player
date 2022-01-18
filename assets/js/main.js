// Músicas
const musicas = [
    {
        id: 1,
        nome: 'Need to Know',
        artista: 'Doja Cat',
        duracao: '3:30',
        som: 'assets/songs/dojacat.mp3',
        capa: 'url(/assets/imgs/dojacat.avif)',
    },
    {
        id: 2,
        nome: 'Måneskin - Beggin',
        artista: 'Blueberry',
        duracao: '3:33',
        som: 'assets/songs/Beggin.mp3',
        capa: 'url(/assets/imgs/beggin.avif)',
    },
    {
        id: 3,
        nome: 'Freio da Blazer',
        artista: 'L7NNON',
        duracao: '3:00',
        som: 'assets/songs/Freio.mp3',
        capa: 'url(/assets/imgs/good4u.avif)',
    },
    {
        id: 4,
        nome: 'Life Goes On',
        artista: 'Oliver Tree',
        duracao: '2:41',
        som: 'assets/songs/Life.mp3',
        capa: 'url(/assets/imgs/justice.avif)',
    },
    {
        id: 5,
        nome: 'Peaches',
        artista: 'Justin Bieber',
        duracao: '3:18',
        som: 'assets/songs/Peaches.mp3',
        capa: 'url(/assets/imgs/justice.avif)',
    },
];

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
    src.setAttribute('type', 'audio/mpeg');
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

// evento play/pause
const play = document.querySelector('#btnPlay');

play.onclick = function() {
    const audio = document.querySelector('audio');
    if(play.innerText === 'pause') {
        play.innerText = 'play_arrow';
        audio.pause();
    } else {
        play.innerText = 'pause';
        audio.play();
    }
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
}

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