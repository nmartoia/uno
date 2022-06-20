function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }  
  let cart = [{valeur:'0',couleur:"red"},{valeur:'1',couleur:"red"},{valeur:'2',couleur:"red"},{valeur:'3',couleur:"red"},{valeur:'4',couleur:"red"},{valeur:'5',couleur:"red"},{valeur:'6',couleur:"red"},{valeur:'7',couleur:"red"},{valeur:'8',couleur:"red"},{valeur:'9',couleur:"red"},{valeur:'0',couleur:"blue"},{valeur:'1',couleur:"blue"},{valeur:'2',couleur:"blue"},{valeur:'3',couleur:"blue"},{valeur:'4',couleur:"blue"},{valeur:'5',couleur:"blue"},{valeur:'6',couleur:"blue"},{valeur:'7',couleur:"blue"},{valeur:'8',couleur:"blue"},{valeur:'9',couleur:"blue"},{valeur:'0',couleur:"yellow"},{valeur:'1',couleur:"yellow"},{valeur:'2',couleur:"yellow"},{valeur:'3',couleur:"yellow"},{valeur:'4',couleur:"yellow"},{valeur:'5',couleur:"yellow"},{valeur:'6',couleur:"yellow"},{valeur:'7',couleur:"yellow"},{valeur:'8',couleur:"yellow"},{valeur:'9',couleur:"yellow"},{valeur:'0',couleur:"green"},{valeur:'1',couleur:"green"},{valeur:'2',couleur:"green"},{valeur:'3',couleur:"green"},{valeur:'4',couleur:"green"},{valeur:'5',couleur:"green"},{valeur:'6',couleur:"green"},{valeur:'7',couleur:"green"},{valeur:'8',couleur:"green"},{valeur:'9',couleur:"green"},{valeur:'+2',couleur:"green"},{valeur:'+2',couleur:"yellow"},{valeur:'+2',couleur:"red"},{valeur:'+2',couleur:"blue"},{valeur:'all',couleur:"black"},{valeur:'+4',couleur:"black"}]
let plus=0;
const plateau = document.querySelector(".plateau");
const pioche = document.querySelector(".pioche");
const abandonner =document.querySelector('#abandonner')
let main = document.querySelector(".main")
let maine = main.childNodes;
let span =document.querySelector("span")
const uno =document.querySelector('#uno')
span.textContent=7;
let b=0
let z=0
let cuno=0
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

    if(plus!=0){
        let plus2=getRandomInt(2)
        if(plus2==0){
            let m =parseInt(span.textContent)
            m+=plus
            span.textContent=m
            m=0
            plus=0
            pioche.style.display='inline'
            abandonner.style.display='none'
        }
        else{
            plus+=2
            plateau.style.background=cart[getRandomInt(44)].couleur
            span.textContent--
        }
    }
    else if(z==1){
        z=0
        let m =parseInt(span.textContent)
        m+=4
        span.textContent=m
        m=0
    }
    else{
        if(b==1){
            span.textContent--
            let ordis =cart[getRandomInt(44)]
            plateau.textContent=ordis.valeur;
            plateau.style.color='black'
            b=0
            if(ordis.valeur=='+2'){
                plus+=2
                pioche.style.display='none'
                abandonner.style.display='inline'
            }
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
                if(ordi.couleur=='black'&&ordi.valeur=='all'){
                    let bo =getRandomInt(4)
                    if(bo==0){
                        plateau.style.background='red'
                    }
                    else if(bo==0){
                        plateau.style.background='blue'
                    }
                    else if(bo==0){
                        plateau.style.background='green'
                    }
                    else{
                        plateau.style.background='yellow'
                    }
                    plateau.textContent='';
                }
                else if(ordi.couleur=='black'&&ordi.valeur=='+4'){
                    let bo =getRandomInt(4)
                        plateau.textContent=cart[getRandomInt(44)].valeur
                    
                        if(bo==0){
                            plateau.style.background='red'
                        }
                        else if(bo==0){
                            plateau.style.background='blue'
                        }
                        else if(bo==0){
                            plateau.style.background='green'
                        }
                        else{
                            plateau.style.background='yellow'
                        }
                        span.textContent--
                        let u =0
                        while(u<4){
                            piocher()
                            u++
                        }
                        plateau.style.color='black'
                    }
                else{
                    let m =getRandomInt(2)
                    if(m==0){
                        plateau.style.background=ordi.couleur
                        if(plateau.textContent=='+2'){
                            plus+=2
                            pioche.style.display='none'
                            abandonner.style.display='inline'
                        }
                    }
                    else{
                        plateau.textContent=ordi.valeur
                        if(plateau.textContent=='+2'){
                            plus+=2
                            pioche.style.display='none'
                            abandonner.style.display='inline'
                        }
                    }
                }
                
            }
        }
    }
    if(span.textContent<=0){
        alert('vous avez perdu')
        main.remove()
        pioche.remove()
        span.textContent=0 
    }
}
function piocher(){
    let cree = cart[getRandomInt(46)]
    let div = document.createElement("div")
    div.style.background=cree.couleur;
    uno.style.display='none' 
    if(cree.couleur=='black'){
        div.style.color='white'
    }
    div.textContent=cree.valeur
    main.appendChild(div)
    div.addEventListener("click",()=>{
        if(plateau.textContent=='+2'&&plus!=0&&div.textContent!='+2'){
            alert('si vous n\'avez plus de plus 2 clicker sur abandonner')
        }
        else{
            if(div.textContent==plateau.textContent||div.style.background==plateau.style.background||div.style.background=='black'||plateau.style.  background=='black'){
                plateau.textContent=div.textContent;
                plateau.attributes.style.nodeValue=div.attributes.style.nodeValue
                if(div.textContent=='+2'){
                    plus+=2
                }
                div.remove()
                if(plateau.textContent=='+2'&&plus!=0){
                    abandonner.style.display='inline'
                    pioche.style.display='none'
                }
                if(div.style.background=='black'&&div.textContent=='all'){
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
                else if(div.style.background=='black'&&div.textContent=='+4'){
                    z=1
                    const reponse = prompt('donner la premier letre de la couleur que vous vouler')
                    if(reponse=='r'){
                        plateau.style.background='red'
                        plateau.textContent=''
                    }
                    else if(reponse=='b'){
                        plateau.style.background='blue'
                        plateau.textContent=''
                    }
                    else if(reponse=='g'||reponse=='v'){
                        plateau.style.background='green'
                        plateau.textContent=''
                    }
                    else if(reponse=='j'||reponse=='y'){
                        plateau.style.background='yellow'
                        plateau.textContent=''
                    }
                    else{
                        alert('vous avez perdu votre bonus')
                    }
                }
                if(main.childNodes[0]==undefined){
                    if(main.childNodes[1]==undefined&&cuno==0){
                            alert('contre uno')
                            piocher()
                            piocher()
                    }
                    else{
                    alert('vous avez gagner')
                    pioche.remove()
                    abandonner.remove()
                    uno.remove()
                    }
                }
                else if(main.childNodes[1]==undefined){
                    uno.style.display='inline'    
                }
                else{
                    bot_joue()
                }
            }
        }
        cuno=0
    })
}
pioche.addEventListener("click", piocher)
pioche.addEventListener("click", bot_joue)
abandonner.addEventListener('click',()=>{
    while(plus!=0){
        piocher()
        plus--
    }
    abandonner.style.display='none'
    pioche.style.display='inline'
})
uno.addEventListener('click',()=>{
    uno.style.display=='none'
    cuno=1
})