window.onload = function() {

        if(findWordBySubStr(location.href, 'index.html')) {
            setClickEventOnLeftBar() 
            setClickEventOnLike()
            setClickEventOnSlider()
            setClickEventOnBuy()
        } else {
            setClickEventOnLike()
            setClickEventOnBuy()
            setClickEventOnSlider()
        }
}

function setClickEventOnLeftBar() {
    let catalog = Object.values(document.getElementById('catalog-bar').children)
    
    catalog.forEach(a => {
        if(a.localName === 'a') {
            a.addEventListener('click', aClick)
        }
    })
}

function setClickEventOnLike() {
    let likesAct = Object.values(document.getElementsByClassName('fa-heart'))

    likesAct.forEach(i => {
        i.addEventListener('click', aClick)
    })
}

function setClickEventOnSlider() {
    let sliderItmes = Object.values(document.getElementsByClassName('slider__item'))
    sliderItmes.forEach(slider => {
        if(slider.innerText === '') {
            slider.addEventListener('click', aClick)
        }
    })
}

function setClickEventOnBuy() {
    let buttons = Object.values(document.getElementsByClassName('buy'))
    buttons.forEach(button => {
        button.addEventListener('click', aClick)
    })
}

function aClick(e){

    let element = e.target

    if(element.classList.contains('buy')) {

        if(!element.classList.contains('b-active')) {
            element.classList.add('b-active')
            element.innerText = 'В корзине'
            
            let price = element.parentElement.previousElementSibling.firstElementChild.firstElementChild.innerText
            console.log(parseInt(price))
            
            let amount = element.parentElement.previousElementSibling.lastElementChild.firstElementChild.nextElementSibling.innerText
            let basketSum = document.getElementById('basket').nextElementSibling.innerText
            document.getElementById('basket').nextElementSibling.innerText = parseInt(basketSum) + parseInt(price)*parseInt(amount)

            return
        }   


    } else {

    }

    if (element.classList.contains('slider__item')) {
        if (element.nextElementSibling && element.nextElementSibling.innerText != 0) {
            element.nextElementSibling.innerText = parseInt(element.nextElementSibling.innerText) - 1
        } else {
            if(!element.previousElementSibling) return
            element.previousElementSibling.innerText = parseInt(element.previousElementSibling.innerText) + 1
        }
    } else {
        if(e.target.localName === 'i') {

            let amount = document.getElementById('like').nextElementSibling
    
            if(element.classList.contains('fa-solid')) {
                element.classList.add('fa-regular')
                element.classList.remove('fa-solid');
    
                let num = parseInt(amount.innerText)
                num--
                amount.innerText = `${num} шт.`
    
            } else {
                element.classList.add('fa-solid')
                element.classList.remove('fa-regular');
    
                let num = parseInt(amount.innerText)
                num++
                amount.innerText = `${num} шт.`
            }
    
        } else {
            e.preventDefault()
            let ul = e.target.nextElementSibling
    
            if(!element.classList.contains('unactive') && !element.classList.contains('active')) {
                window.location = this.href;
            } else {
                if(element.classList.contains('active')) {
                    element.classList.add("unactive");
                    ul.classList.add("unactive")
                    element.classList.remove("active");
                } else {
                    element.classList.add("active");
                    element.classList.remove("unactive");
                    ul.classList.remove("unactive")
                }
            }
        }
    }
}

function findWordBySubStr(str, subStr) {
    let strArr = str.split(' ')
    let re = new RegExp(`${subStr}`)
    for (const element of strArr) {
        if(re.test(element)) {
            return true
        }
    }
}

function elementChoosen(element) {

    let product = element.getAttribute('src')
    let wnd = window.open('product.html')

    wnd.alert('choosen element ' + product)

    //wnd.document.getElementById('product-img').setAttribute('src', 'images/products/1.png')

    /*if(typeof element !== 'string') {
        product = element.getAttribute('src');
        location.href = 'product.html'
        console.log(product)
    } else {
        document.getElementById('product-img').setAttribute('src', product)
        console.log('hi-else')
    }*/
}

function swapImg(elem) {
    console.log(document.getElementsByClassName('product-type')[0].children)
    Object.values(document.getElementsByClassName('product-type')[0].children).forEach(element => {
        if(element.classList.contains('active')) {
            element.classList.remove('active')
        }
    });
    elem.classList.add('active')
    let mainImg = document.getElementById('product-img')
    mainImg.setAttribute('src', elem.getAttribute('src'))
}

function showDescription(element) {
    if(element.classList.contains('description')) {
        document.getElementsByClassName('reviews')[0].classList.remove('active')
        document.getElementsByClassName('comments')[0].classList.remove('active')
        document.getElementsByClassName('description')[0].classList.add('active')
        document.getElementsByClassName('descr')[0].classList.add('active')
    } else {
        document.getElementsByClassName('reviews')[0].classList.add('active')
        document.getElementsByClassName('comments')[0].classList.add('active')
        document.getElementsByClassName('description')[0].classList.remove('active')
        document.getElementsByClassName('descr')[0].classList.remove('active')
    }

}

function checkForm() {

    function padTo2Digits(num) {
        return num.toString().padStart(2, '0');
    }

    function formatDate(date) {
        return [
            padTo2Digits(date.getDate()),
            padTo2Digits(date.getMonth() + 1),
            date.getFullYear(),
          ].join('.');
    }

    let inputArr = document.getElementsByClassName('form-field')

    for (let i in inputArr) {
        if(inputArr[i].value==='') {
            inputArr[i].style.border = '2px groove red'
            setTimeout(()=>{
                alert(`Please, fill the ${inputArr[i].getAttribute('name')}`)
            }, 1000)
            return
        }
    }

    document.getElementById('comments').innerHTML+=
    `
        <div class="comments__item">
            <div class="comments__name">
                <div><b>${inputArr[0].value}, </b>${formatDate(new Date())}</div>
                <div class="mark">
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                </div>
            </div>
            <div class="commets__comment">
                ${inputArr[2].value}
            </div>
        </div>
    `

    for (let i in inputArr) {
        inputArr[i].value = ''
    }

    //document.getElementById("myForm").submit();
}