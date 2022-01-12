let msc1 = document.getElementById('msc1');

let musica = document.createElement('audio');
let src = document.createElement('source');

musica.setAttribute('controls', 'controls');
src.setAttribute('src', 'assets/songs/dojacat.mp3');
src.setAttribute('type', 'audio/mpeg');

msc1.onclick = function() {
    musica.appendChild(src);
    msc1.appendChild(musica);

    musica.play();
}

msc1.ondblclick = function() {
    musica.appendChild(src);
    msc1.appendChild(musica);

    musica.pause();
}