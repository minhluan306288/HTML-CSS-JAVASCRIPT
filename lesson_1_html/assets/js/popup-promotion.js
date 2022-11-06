


function setDisplayForPopup(value){

    //Get element by id DOM
    var popup =  document.getElementById('popup-get-email-x2398')
    if(popup && value === 'flex'){
        //Set CSS inline with DOM
        popup.setAttribute('style', `display:${value || 'none'}`)
        popup.classList.add('actived')
    }
    
    else if(popup && value === 'none'){
        popup.classList.add('unactived')
        setTimeout(function(){
            popup.setAttribute('style', `display:${value || 'none'}`)
        }, 350)
        
    }
}


//Display popup 2s after reload page
;(function(){
    setTimeout(function(){setDisplayForPopup('flex')},2000)
})()


// Hanlde close popup promotion
function handleClosePopup(){
    setDisplayForPopup('none')
}