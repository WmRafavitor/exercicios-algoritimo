function carregar() {
  var msg = document.getElementById('msg');
  var img = document.getElementById('imagem');
  var text = document.getElementById('texto2');
  var data = new Date();
  var hora = data.getHours();
  msg.innerHTML = `agora são ${hora} horas.`

  if(hora >= 0 && hora <= 5) {
    img.src = 'foto_madrugada.png';
    document.body.style.background = '#081b1f';
    document.getElementById('boxShadow').style.boxShadow = '5px 5px 10px #23767d'
    text.innerHTML = 'Boa Madrugada.'
  } else if(hora >= 6 && hora <= 12) {
    img.src = 'foto_manha.png';
    document.body.style.background = '#fbcb7b';
    document.getElementById('boxShadow').style.boxShadow = '5px 5px 10px #fa9425'
    text.innerHTML = 'Bom Dia.'
  } else if(hora >= 13 && hora <= 18) {
    img.src = 'foto_tarde.png';
    document.body.style.background = '#d95c04';
    document.getElementById('boxShadow').style.boxShadow = '5px 5px 10px #61331b'
    text.innerHTML = 'Boa Tarde.'
  } else {
    img.src = 'foto_noite.png';
    document.body.style.background = '#0d3e66'
    document.getElementById('boxShadow').style.boxShadow = '5px 5px 10px #1166aa'
    text.innerHTML = 'Boa Noite.'
  }
}
