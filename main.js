var slides = document.querySelectorAll('.slide')
var index = 0; //当前图片index
var shang = document.querySelector('.shang')
var xia = document.querySelector('.xia')
var ul = document.querySelector('.slider ul')
dingshiqi();

function dingshiqi() {
    f = setInterval(function() {
        if (index == slides.length - 1) {
            ul.children[slides.length - 1].style.background = "";

            slides[slides.length - 1].style.opacity = "0";
            slides[0].style.opacity = "1"
            ul.children[0].style.background = "red";

            index = 0;

        } else {
            ul.children[index].style.background = "";

            slides[index].style.opacity = "0"
            index++;

            slides[index].style.opacity = "1";
            ul.children[index].style.background = "red";

        }



    }, 3000)
};

xia.onclick = function() {
    clearInterval(f);
    if (index == slides.length - 1) {
        ul.children[slides.length - 1].style.background = "";

        slides[slides.length - 1].style.opacity = "0";
        slides[0].style.opacity = "1"
        ul.children[0].style.background = "red";


        index = 0;

    } else {
        ul.children[index].style.background = "";

        slides[index].style.opacity = "0"
        index++;

        slides[index].style.opacity = "1";
        ul.children[index].style.background = "red";

        dingshiqi();

    }

}
shang.onclick = function() {
    clearInterval(f);
    if (index == 0) {
        ul.children[0].style.background = "";

        slides[0].style.opacity = "0";
        ul.children[slides.length - 1].style.background = "red";

        slides[slides.length - 1].style.opacity = "1";
        index = slides.length - 1;
    } else {
        ul.children[index].style.background = "";

        slides[index].style.opacity = "0";
        index--;

        slides[index].style.opacity = "1";
        ul.children[index].style.background = "red";



    }
    dingshiqi();

};
for (i = 0; i < slides.length; i++) {
    var li = document.createElement('li')
    ul.appendChild(li);
};
for (i = 0; i < slides.length; i++) {
    ul.children[i].setAttribute('index', i);
    ul.children[i].onclick = function() {
        clearInterval(f);

        for (i = 0; i < slides.length; i++) {
            ul.children[i].style.background = "";
            slides[i].style.opacity = "0";
        }
        this.style.background = "red";
        index = this.getAttribute('index');
        slides[index].style.opacity = "1";
        dingshiqi();

    }
};
for (i = 0; i < slides.length; i++) {
    ul.children[index].style.background = "red";

}
ul.children[index].style.background = "red";