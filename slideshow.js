let counter = 1;
setInterval(() => {

    if(counter === 1){
        counter++
        document.getElementById('one').classList.remove('active')
        document.getElementById('twotext').className += ' active__text'
        document.getElementById('onetext').className += ' afteractive'
        document.getElementById('two').className += ' active'
        document.getElementById('onetext').classList.remove('active__text')
        document.getElementById('threetext').classList.remove('afteractive')
        

    }
    else if(counter === 2){
        counter++
        document.getElementById('twotext').classList.remove('active__text')
        document.getElementById('threetext').className += ' active__text'
        document.getElementById('twotext').className += ' afteractive'
        document.getElementById('two').classList.remove('active')
        document.getElementById('three').className += ' active'
        document.getElementById('onetext').classList.remove('afteractive')

    }
    else if(counter === 3){
        counter = 1
        document.getElementById('threetext').className += ' afteractive'
        document.getElementById('threetext').classList.remove('active__text')
        document.getElementById('three').classList.remove('active')
        document.getElementById('one').className +=' active'
        document.getElementById('onetext').className += ' active__text'
        document.getElementById('twotext').classList.remove('afteractive')
    }

}, 4000)

