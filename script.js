const result = document.createElement("div");
txt = '' 

txt = txt +  `
    
        <div class='clase_blog'>
            <span class='close'>x</span>
        </div>

`;

result.innerHTML = txt

document.body.append(result);

const n =  document.querySelector('.close')

document.addEventListener("click", openPopUp);


function openPopUp(e){
     result.classList.add("popupDiv");    
     if(e.target.innerHTML === 'x' ){ 
         result.classList.remove('popupDiv')
     }
}



// result.addEventListener('dragstart' , function() { 
//      console.log('drag start')
// })

// result.addEventListener('dragover' , function() { 
//     console.log('drag over')
// })



// result.addEventListener('dragend' , function() { 
//     console.log('drag end')
// })