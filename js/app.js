function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }  
  let cart = [{valeur:'0',couleur:"red"},{valeur:'1',couleur:"red"},{valeur:'2',couleur:"red"},{valeur:'3',couleur:"red"},{valeur:'4',couleur:"red"},{valeur:'5',couleur:"red"},{valeur:'6',couleur:"red"},{valeur:'7',couleur:"red"},{valeur:'8',couleur:"red"},{valeur:'9',couleur:"red"},{valeur:'0',couleur:"blue"},{valeur:'1',couleur:"blue"},{valeur:'2',couleur:"blue"},{valeur:'3',couleur:"blue"},{valeur:'4',couleur:"blue"},{valeur:'5',couleur:"blue"},{valeur:'6',couleur:"blue"},{valeur:'7',couleur:"blue"},{valeur:'8',couleur:"blue"},{valeur:'9',couleur:"blue"},{valeur:'0',couleur:"yellow"},{valeur:'1',couleur:"yellow"},{valeur:'2',couleur:"yellow"},{valeur:'3',couleur:"yellow"},{valeur:'4',couleur:"yellow"},{valeur:'5',couleur:"yellow"},{valeur:'6',couleur:"yellow"},{valeur:'7',couleur:"yellow"},{valeur:'8',couleur:"yellow"},{valeur:'9',couleur:"yellow"},{valeur:'0',couleur:"green"},{valeur:'1',couleur:"green"},{valeur:'2',couleur:"green"},{valeur:'3',couleur:"green"},{valeur:'4',couleur:"green"},{valeur:'5',couleur:"green"},{valeur:'6',couleur:"green"},{valeur:'7',couleur:"green"},{valeur:'8',couleur:"green"},{valeur:'9',couleur:"green"},{valeur:'+2',couleur:"green"},{valeur:'+2',couleur:"yellow"},{valeur:'+2',couleur:"red"},{valeur:'+2',couleur:"blue"},{valeur:'all',couleur:"black"},{valeur:'+4',couleur:"black"}]

const plateau = document.querySelector(".plateau");
const pioche = document.querySelector(".pioche");
let main = document.querySelector(".main")
let maine = main.childNodes;
let span =document.querySelector("span")
span.textContent=7;
let b=0
let pcart = cart[getRandomInt(46)]
plateau.style.background=pcart.couleur;
plateau.textContent=pcart.valeur
if(pcart.couleur=='black'){
    plateau.style.color='white'
}
n=0
while(n<7){
    piocher()
    n++
}
function bot_joue(){
    if(b==1){
        span.textContent--
        let ordis =cart[getRandomInt(46)]
        plateau.textContent=ordis.valeur;
        plateau.style.color='black'
        b=0
    }
    else{
        let e =getRandomInt(2);
        if(plateau.style.background=='black'){
            span.textContent--
            let ordi =cart[getRandomInt(46)]
            plateau.style.background=ordi.couleur
            plateau.textContent=ordi.valeur;
            if(ordi.couleur!='black'){
                plateau.style.color='black'
            }
        }
        else if(e==0){
            span.textContent++
        }
        else{
            span.textContent--
            let ordi =cart[getRandomInt(46)]
            if(ordi.couleur=='black'){
                plateau.style.color='white'
                plateau.style.background='black'
                plateau.textContent=ordi.valeur;
            }
            else{
                let m =getRandomInt(2)
                if(m==0){
                    plateau.style.background=ordi.couleur
                }
                else{
                    plateau.textContent=ordi.valeur
                }
            }
            if(span.textContent==0){
                alert('vous avez perdu')
                main.remove()
                pioche.remove()
            }
        }
    }
}
function piocher(){
    let cree = cart[getRandomInt(46)]
    let div = document.createElement("div")
    div.style.background=cree.couleur;
    if(cree.couleur=='black'){
        div.style.color='white'
    }
    div.textContent=cree.valeur
    main.appendChild(div)
    div.addEventListener("click",()=>{
        if(div.textContent==plateau.textContent||div.style.background==plateau.style.background||div.style.background=='black'||plateau.style.background=='black'){
            plateau.textContent=div.textContent;
            plateau.attributes.style.nodeValue=div.attributes.style.nodeValue
            div.remove()
            if(div.style.background=='black'){
                const reponse = prompt('donner la premier letre de la couleur que vous vouler')
                if(reponse=='r'){
                    plateau.style.background='red'
                    plateau.textContent=''
                    b=1
                }
                else if(reponse=='b'){
                    plateau.style.background='blue'
                    plateau.textContent=''
                    b=1
                }
                else if(reponse=='g'||reponse=='v'){
                    plateau.style.background='green'
                    plateau.textContent=''
                    b=1
                }
                else if(reponse=='j'||reponse=='y'){
                    plateau.style.background='yellow'
                    plateau.textContent=''
                    b=1
                }
                else{
                    alert('vous avez perdu votre bonus')
                }
            }
            if(main.childNodes[0]==undefined){
                alert('vous avez gagner')
                pioche.remove()
            }
            else{
                bot_joue()
            }
        }
    })
}
pioche.addEventListener("click", piocher)
pioche.addEventListener("click", bot_joue)