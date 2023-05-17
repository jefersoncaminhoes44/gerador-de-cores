function trocaCor() {

    let r = document.querySelector('.inputUm').value;
    let rtext = document.querySelector('.textUm');
    let textoRGB = document.querySelector('.textoRGB');
    rtext.value = r;
  
    let g = document.querySelector('.inputDois').value;
    let gtext = document.querySelector('.textDois');
    gtext.value = g;
  
    let b = document.querySelector('.inputTres').value;
    let btext = document.querySelector('.textTres');
    btext.value = b;
  
    let divCor = document.querySelector('.quadrado');
  
    let rgb = `RGB( ${r} ,${g} ,${b} )`;
    divCor.style.background = rgb;
    textoRGB.innerText = rgb;
    //altera cor do texto
    textoRGB.style.backgroundColor = rgb;
    //altera cor da borda
    rtext.style.borderColor = rgb;
    gtext.style.borderColor = rgb;
    btext.style.borderColor = rgb;
    //altera cor do titulo
    let titulo = document.querySelector('h1');
    titulo.style.textShadow = `3px 3px ${rgb}`;
  
    //gerador de cores
    function rand(min = 0, max = 255) {
      const num = Math.random() * (max - min) +
        min;
      return Math.floor(num);
    }
  
    const randColor = document.querySelector('.rand');
    let geradorRand = rand();
  
    randColor.addEventListener('click', function (e) {
      rgb = `RGB( ${rand()} ,${rand()} ,${rand()} )`;
      divCor.style.background = rgb;
      textoRGB.innerText = rgb;
      //altera cor do texto
      textoRGB.style.backgroundColor = rgb;
      //altera cor da borda
      rtext.style.borderColor = rgb;
      gtext.style.borderColor = rgb;
      btext.style.borderColor = rgb;
      titulo.style.textShadow = `3px 3px ${rgb}`;
    })
  }
  
  trocaCor();