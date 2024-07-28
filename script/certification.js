function visible(card, img) {

    switch (card && img) {

        case 'item1' && 'img-1':
            let image1 = document.getElementById('img-1')
            chnageImg(image1)

            let btn1 = document.getElementById('btn')
            hidebtn(btn1)
            break;

        case 'item2' && 'img-2':
            let image2 = document.getElementById('img-2')
            chnageImg(image2)

            let btn2 = document.getElementById('btn1')
            hidebtn(btn2)
            break;

        case 'item3' && 'img-3':
            let image3 = document.getElementById('img-3')
            chnageImg(image3)

            let btn3 = document.getElementById('btn2')
            hidebtn(btn3)
            break;

        case 'item4' && 'img-4':
            let image4 = document.getElementById('img-4')
            chnageImg(image4)

            let btn4 = document.getElementById('btn3')
            hidebtn(btn4)
            break;

        case 'item5' && 'img-5':
            let image5 = document.getElementById('img-5')
            chnageImg(image5)

            let btn5 = document.getElementById('btn4')
            hidebtn(btn5)
            break

        case 'item6' && 'img-6':
            let image6 = document.getElementById('img-6')
            chnageImg(image6)

            let btn6 = document.getElementById('btn5')
            hidebtn(btn6)

            break;

        case 'item7' && 'img-7':
            let image7 = document.getElementById('img-7')
            chnageImg(image7)

            let btn7 = document.getElementById('btn6')
            hidebtn(btn7)
            break;

        case 'item8' && 'img-8':

            let image8 = document.getElementById('img-8')
            chnageImg(image8)

            let btn8 = document.getElementById('btn7')
            hidebtn(btn8)
            break;

        case 'item9' && 'img-9':
            let image9 = document.getElementById('img-9')
            chnageImg(image9)

            let btn9 = document.getElementById('btn8')
            hidebtn(btn9)
            break;

        case 'item10' && 'img-10':

            let image10 = document.getElementById('img-10')
            chnageImg(image10)

            let btn10 = document.getElementById('btn9')
            hidebtn(btn10)
            break;
    }
}

function chnageImg(img) {
    let state = false;
    if (state === false) {
        img.src = "../images/certification_images/certificate"
    }
    else {
        img.src = "../images/certification_images/html_course"
        state = false
    }
}

function hidebtn(btn) {
    (btn.style.display === "none") ? btn.style.display = "block" : btn.style.display = "none"
}

let goTop = document.getElementById("go-top")

window.addEventListener('scroll', () => {
    (window.scrollY > 500)? goTop.style.display = "block":goTop.style.display = "none"
});

top.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });



