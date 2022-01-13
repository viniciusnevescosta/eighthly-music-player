// Músicas
const musicas = [
    {
        id: 1,
        nome: 'Need to Know',
        artista: 'Doja Cat',
        duracao: '3:30',
        som: 'assets/songs/dojacat.mp3',
        capa: 'url(/assets/imgs/dojacat.avif)',
    }
];

// Função que cria músicas
const criarMusica = function(id, nome, artista, duracao, som, img){
    let pai = document.querySelector('.item1b'); 
    let div = document.createElement('div');
    div.classList.add('musica');
    pai.appendChild(div);
    
    for(i = 0; i < 3; i++){
        let musicItens = document.createElement('div');
        musicItens.classList.add('musicItens');
        div.appendChild(musicItens);
    };

    let musicName = div.querySelectorAll('.musicItens')[0];
    let name = document.createElement('p');
    name.id = 'musicName';
    name.innerText = `${id}. ${nome}`;
    musicName.appendChild(name);

    let musicArtist = div.querySelectorAll('.musicItens')[1];
    let artist = document.createElement('p');
    artist.id = 'musicArtist';
    artist.innerText = artista;
    musicArtist.appendChild(artist);

    let musicDuration = div.querySelectorAll('.musicItens')[2];
    let duration = document.createElement('p');
    duration.id = 'musicDuration';
    duration.innerText = duracao;
    musicDuration.appendChild(duration);

        let audio = document.createElement('audio');
        audio.setAttribute('controls', 'controls');
        
        let src = document.createElement('source');
        src.setAttribute('src', som);
        src.setAttribute('type', 'audio/mpeg');

        audio.appendChild(src);
        div.appendChild(audio);

    // Events on click
    let btn = document.querySelector('#btnPlay');
    let nomeTocando = document.querySelector('#nomeTocando');
    let artistaTocando = document.querySelector('#artistaTocando');
    let album = document.querySelector('.albumPlay');

    div.onclick = function(){
        // tocando
        if(btn.innerText === 'play_arrow') {
            audio.play();
            btn.innerText = 'pause';
            nomeTocando.innerText = nome;
            artistaTocando.innerText = artista;
            album.style.backgroundImage = img;
        } 
        // pausado
        else {
            audio.pause();
            btn.innerText = 'play_arrow';
        };

        btn.onclick = function(){
            // tocando
            if(btn.innerText === 'play_arrow') {
                audio.play();
                btn.innerText = 'pause';
                
            } 
            // pausado
            else{
                audio.pause();
                btn.innerText = 'play_arrow';
            };            
        }

        document.body.onkeyup = function(e) {
            // tocando
            if(btn.innerText === 'pause' && e.keyCode == 32) {
                audio.pause();
                btn.innerText = 'play_arrow';
            // pausado
            } else if(btn.innerText === 'play_arrow' && e.keyCode == 32) {
                audio.play();
                btn.innerText = 'pause';
            };
        };
    };
};

// Argumentar músicas
criarMusica(musicas[0].id, musicas[0].nome, musicas[0].artista, musicas[0].duracao, musicas[0].som, musicas[0].capa);

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