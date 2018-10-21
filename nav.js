
let isOpen = false

window.addEventListener('resize' , () => {
    if(document.body.clientWidth >= 450 && !isOpen) {
        document.getElementById('show').style.display = 'inline'
        isOpen = true
    }
    else if(document.body.clientWidth <= 450) {
        document.getElementById('show').style.display = 'none'
        isOpen = false
    }
})

window.addEventListener('scroll' , (e) => {
    console.log(e.pageY)
    if(e.pageY < 150){
        document.getElementById('nav').style.backgroundColor = '#00a5ff'
        document.getElementById('nav').style.zIndex = '20'
    }
})


document.getElementById('toggle').addEventListener('click' , () => {
    if(!isOpen){
        document.getElementById('show').style.display = 'flex'
        
        isOpen = true
    }
    else {
        document.getElementById('show').style.display = 'none'
        isOpen = false
    }
})