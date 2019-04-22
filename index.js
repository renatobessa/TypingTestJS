var frases = [
    'A Guerra Boshin "Guerra do Ano do Dragão", tambem conhecida no plural como Guerras Boshin ou simplesmente Batalha de Boshin, foi uma guerra civil no Japao, travada de 1868 a 1869, entre forças leais ao governo do Xogunato Tokugawa e aqueles que eram favoraveis a restauraçao do poder imperial sob o imperador Meiji 1867–1912.',
    "O grafeno e uma das formas cristalinas do carbono, assim como o diamante, o grafite, os nanotubos de carbono e fulerenos. Esse material, pode ser considerado tao ou mais revolucionario que o plastico e o silicio.",
    "Batyrosaurus rozhdestvenskyi e uma especie de dinossauro da superfamilia Hadrosauroidea. E a unica especie descrita para o genero Batyrosaurus. Seus restos fosseis foram encontrados na formaçao Bostobinskaya, regiao central do Cazaquistao, e datam do Cretaceo Superior.",
    "O Projecto de Gezira e um dos maiores projectos de irrigaçao no mundo.",
    "Nitrenos sao uma classe de intermediarios altamente reativos que possuem um atomo de nitrogenio monovalente e neutro com uma estrutura HN ou RN."
]

var fraseAtual
var spansGeradas = ['']

window.onkeypress = function (evt) {
    teclaPressionada(evt);
};

window.onload = function () {
    Main()
    alteraCorBotao()
    limpaBordaBotao()
    fraseAtual = geraFrase()   
}

function Main(){
    //let str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'        
    let txtUserInput = document.getElementById('txtUserInput')
    
    txtUserInput.focus()
    txtUserInput.addEventListener("focusout", ()=>{ txtUserInput.focus() })
}

function geraFrase(){
    let txtFrase = document.getElementById('txtFrase')
    txtFrase.innerHTML = frases[Math.floor(Math.random() * frases.length)]
    return txtFrase.innerHTML
}

function teclaPressionada(evt) {
    // alert(evt.key)
    botaoPressionado(evt.key)
    comparaTexto(evt.key)
}

function comparaTexto(keyPressed){
    let txtFrase = document.getElementById('txtFrase')
    let txtUserInput = document.getElementById('txtUserInput')
    let textPos = txtUserInput.value.length
    
    trataAcerto((fraseAtual[textPos].toUpperCase() == keyPressed.toUpperCase()), textPos)
}

function trataAcerto(acerto, posicao){
    let txtFrase = document.getElementById('txtFrase') 
    
    // console.log(txtFrase.innerHTML)
    // console.log(fraseAtual)

    console.log('Posicao: ' + posicao)
    console.log('Frase Atual: ' + fraseAtual[posicao])    

    
    // txtFrase.innerHTML = fraseAtual.replace(fraseAtual[posicao], geraSpan(fraseAtual[posicao], acerto))
    // txtFrase.innerHTML += spansGeradas
    geraSpan(fraseAtual[posicao], acerto)
    txtFrase.innerHTML = spansGeradas[0] + fraseAtual.substring(posicao + 1, fraseAtual.length)
}

function geraSpan(texto, acerto){
    let span

    if(acerto)
        span = '<span style="color: green">' + texto + '</span>'
    else
        span = '<span style="color: red">' + texto + '</span>'

    spansGeradas[0] += span
    return span
}

function alteraCorBotao() {
    var btn = document.getElementsByClassName("button")
    for(var i = 0; i < btn.length; i++){
        btn[i].addEventListener("mouseover", function(){            
            this.style.borderColor = geraCorAleatoria()
        })
    }       
}

function limpaBordaBotao() {
    var btn = document.getElementsByClassName("button")
    for(var i = 0; i < btn.length; i++){
        btn[i].addEventListener("mouseout", function(){            
            this.style.borderColor = ""
        })
    }    
}

function geraCorAleatoria() {
    let cores = ['red', 'blue', 'yellow', 'orangered', 'magenta', 'cyan']

    return cores[Math.floor(Math.random() * cores.length)]
}

function botaoPressionado(valor){
    var btn = document.getElementsByClassName("button")
    for(var i = 0; i < btn.length; i++){
        let activeBtn = btn[i]
        if(activeBtn.value === valor.toUpperCase()){
            activeBtn.style.backgroundColor = 'green'
            setTimeout(() => activeBtn.style.backgroundColor = '#242628', 300)
        }        
    }
    
}

