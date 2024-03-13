const clickbutton = document.getElementById("click");
const score= document.getElementById("Score");

let Score = 0;

clickbutton.addEventListener('click',function(){
Score++
score.textContent=Score;
});

const refreshButton = document.getElementById("refresh");
refreshButton.addEventListener('click',function(){
 window.location.reload();
});


const timerButton = document.getElementById("Timer");
timerButton.addEventListener('click', function() {
   
    const modalBackdrop = document.createElement('div');
    modalBackdrop.classList.add('modal-backdrop');

    
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    modalContent.innerHTML = `
        <p>This Feature is coming soon</p>
        <button id="closeModal">Close</button>
    `;

    
    const closeModalButton = modalContent.querySelector('#closeModal');
    closeModalButton.addEventListener('click', closeModal);

    
    document.body.appendChild(modalBackdrop);
    document.body.appendChild(modalContent);
});

function closeModal() {
    const modalBackdrop = document.querySelector('.modal-backdrop');
    const modalContent = document.querySelector('.modal-content');
    modalBackdrop.parentNode.removeChild(modalBackdrop);
    modalContent.parentNode.removeChild(modalContent);
}
