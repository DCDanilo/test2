let collapseButton = document.querySelector('#button_collapse');
collapseButton.addEventListener('click', function(){
    let collapseMenu = document.querySelector('#gestione_utenti');
  
    if(!collapseMenu.hasAttribute('class', 'show')){
        console.log(collapseMenu.classList);
    }
})