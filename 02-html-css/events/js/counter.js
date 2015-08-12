var counterButton = document.getElementById('counter');

var bumpCounter = function() {
    counterButton.innerHTML = parseInt(counterButton.innerHTML) + 1;
};

counterButton.addEventListener('click', bumpCounter);
