let divburbuja = document.getElementById('burbujita');
let bubble = document.getElementById('iconshare');

bubble.addEventListener("mouseenter",function(){
    if(divburbuja.className==="burbuja-oculta"){
        divburbuja.classList.remove('burbuja-oculta');
        divburbuja.classList.add('burbuja');
    }
});
bubble.addEventListener("mouseleave",function(){
    if(divburbuja.className==="burbuja"){
        divburbuja.classList.remove('burbuja');
        divburbuja.classList.add('burbuja-oculta');
    }
});

// PARA MOVIL

let anchoVentana = window.innerWidth;
let descriptionAuthor = document.getElementById('descriptionauthor');
if(anchoVentana<750){
    bubble.addEventListener("mouseenter",function(){
        while (descriptionAuthor.firstChild) {
            descriptionAuthor.removeChild(descriptionAuthor.firstChild);
            }
        let pShare = document.createElement('p');
        pShare.innerHTML = 'SHARE';
        let aFacebook = document.createElement('a');
        aFacebook.innerHTML = '<img src="images/icon-facebook.svg" alt="icon-facebook">';
        let aTwitter = document.createElement('a');
        aTwitter.innerHTML = '<img src="images/icon-twitter.svg" alt="icon-twitter">';
        let aPinterest = document.createElement('a');
        aPinterest.innerHTML = '<img src="images/icon-pinterest.svg" alt="icon-pinterest">';
        let iShare = document.createElement('img');
        iShare.setAttribute('src',"images/icon-share.svg");
        descriptionAuthor.appendChild(pShare);
        descriptionAuthor.appendChild(aFacebook);
        descriptionAuthor.appendChild(aTwitter);
        descriptionAuthor.appendChild(aPinterest);
        descriptionAuthor.appendChild(iShare);
        descriptionAuthor.classList.remove('description-author');
        descriptionAuthor.classList.add('share');

        let maindescription = document.getElementById('maindescription');
        maindescription.style.width = '86%';
        let text = document.getElementById('text');
        text.style.marginBottom='4px';
        let drawer = document.getElementById('drawer');
        drawer.style.borderRadius = '10px';
    });
}