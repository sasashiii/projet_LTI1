document.addEventListener('DOMContentLoaded', function() {
    let next = document.querySelector('.next');
    let prev = document.querySelector('.prev');

    if (!next || !prev) {
        console.error('Les boutons next ou prev ne sont pas trouvés.');
        return;
    }

    next.addEventListener('click', function() {
        let items = document.querySelectorAll('.item');
        if (items.length > 0) {
            document.querySelector('.slide').appendChild(items[0]);
        } else {
            console.error('Aucun élément avec la classe .item trouvé.');
        }
    });

    prev.addEventListener('click', function() {
        let items = document.querySelectorAll('.item');
        if (items.length > 0) {
            document.querySelector('.slide').prepend(items[items.length - 1]);
        } else {
            console.error('Aucun élément avec la classe .item trouvé.');
        }
    });
});