var rating = 0,
    delta = new Date();

var fireElement = document.getElementsByClassName('fire-block__fire')[0],
    countElement = document.getElementsByClassName('fire-block__count')[0];


fire.onclick = function () {
    fire.classList.remove('trigger');

    setTimeout(function () {
        fire.classList.add('trigger');
    }, 20);


    var now = new Date();

    rating += 100 / (now - delta);
    fireRate();

    delta = new Date();
};

function fireRate() {
    var k = 0.7 * (rating / 10);
    fireElement.style.opacity = k;

    if (k > 0.8) {
        countElement.classList.add('fire');
    } else {
        countElement.classList.remove('fire');
    }
}

function ratingCounter() {
    setInterval(function () {
        if (rating > 1) {
            rating--;
        }

        fireRate();
    }, 500);


}

ratingCounter();


