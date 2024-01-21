const body = document.querySelector("body");
const modal = document.querySelector(".modal");
const modalButton = document.querySelector(".modal-button");
const closeButton = document.querySelector(".close-button");
const scrollDown = document.querySelector(".scroll-down");
const secondModal = document.querySelector('.modal-box');
const modalTitle = document.querySelector(".modal-title");


function hideGalleryA() {
  const galleryImagesA = document.getElementById('galleryA').querySelectorAll('img');
  galleryImagesA.forEach(img => {
    img.style.display = 'none';
  });
}


function hideGalleryB() {
  const galleryImagesB = document.getElementById('galleryB').querySelectorAll('img');
  galleryImagesB.forEach(img => {
    img.style.display = 'none';
  });
}

function hideGalleryC() {
  const galleryImagesC = document.getElementById('galleryC').querySelectorAll('img');
  galleryImagesC.forEach(img => {
    img.style.display = 'none';
  });
}


function openSecondModal() {
  secondModal.style.display = 'block';
  
}

function closeSecondModal() {
  const inputFields = document.querySelectorAll('.input-block input');
  inputFields.forEach(input => {
    input.value = '';
  });

  secondModal.style.display = 'none';
  
  
}





let isOpened = false;

const openModal = () => {
  modal.classList.add("is-open");
  body.style.overflow = "hidden";
  modalButton.style.display = "none";
  
};

const closeModal = () => {
  modal.classList.remove("is-open");
  body.style.overflow = "initial";
  scrollDown.style.display = "block"; 
  isOpened = false; 
  window.scrollTo(0, 0); 
  modalButton.style.display = "block";
  
  
};

window.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight / 3 && !isOpened) {
    isOpened = true;
    scrollDown.style.display = "none";
    openModal();
  }
});

modalButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);

document.onkeydown = evt => {
  evt = evt || window.event;
  evt.keyCode === 27 ? closeModal() : false;
};







function calculoMedia(){

    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);
    const nome = document.getElementById('nome').value;

    const media = (nota1 + nota2 + nota3)/3;
  
    const resultSpan = document.getElementById('resultado');
    const situacao = document.getElementById('situacao');
    hideGalleryA();
    hideGalleryB();
    hideGalleryC();
    if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        situacao.textContent = "Preencha todos os campos!";
        resultSpan.textContent = "Atenção!";
        const imageGallery = document.querySelector('.gallery');
        const galleryImages = imageGallery.querySelectorAll('img');
        
        galleryImages.forEach(img => {
            img.style.display = 'none';
        });
    } else if(media >=7){
  
        situacao.textContent = `Parabéns ${nome}, você foi APROVADO`
        resultSpan.textContent = `MÉDIA: ${media.toFixed(2)}`

        const imageGallery = document.getElementById('galleryA');
        const galleryImages = imageGallery.querySelectorAll('img');
        
        galleryImages.forEach(img => {
            img.style.display = 'block';
        });
        
    } else if(media >= 4 && media < 7) {
      situacao.textContent = `${nome}, você fará a PROVA FINAL`
        resultSpan.textContent = `MÉDIA: ${media.toFixed(2)}`

        const imageGallery = document.getElementById('galleryB');
        const galleryImages = imageGallery.querySelectorAll('img');
        
        galleryImages.forEach(img => {
            img.style.display = 'block';
        });
    } else{
        situacao.textContent = `${nome}, você está na RECUPERAÇÃO`
        resultSpan.textContent = `MÉDIA: ${media.toFixed(2)}`

        const imageGallery = document.getElementById('galleryC');
        const galleryImages = imageGallery.querySelectorAll('img');
        
        galleryImages.forEach(img => {
            img.style.display = 'block';
        });
    } 
  
    openSecondModal();
  }

  

function getGreeting() {
  const currentHour = new Date().getHours();
  
  if (currentHour >= 5 && currentHour < 12) {
    return "BOM DIA!";
  } else if (currentHour >= 12 && currentHour < 18) {
    return "BOA TARDE!";
  } else {
    return "BOA NOITE!";
  }
}

modalTitle.textContent = getGreeting();