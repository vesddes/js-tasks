const $form = $('#search-form');
const limit = 10;
const entity = 'musicVideo';
const $carousel = $('.carousel-inner')

$(`#carouselExampleControls`).hide();


$form.on('submit', (event) => {
    event.preventDefault();
    const data = $('input').val();
    const trimmedData = data.trim();
    if (trimmedData) {
        getData(trimmedData);
    }
});

const getData = (term) => {
    $.get('https://itunes.apple.com/search', { q: limit, entity , term })
        .done((data) => parseData(data))
        .fail((error) => console.log("error", error));
};


const parseData = (data) => {
    const result = JSON.parse(data)
    console.log(result)
    createContent(result.results)
}

const createContent = (data) => {
    $carousel.empty()
    $(`#carouselExampleControls`).fadeIn();

    data.forEach((item) => {
        $('<div align="center">')
            .append($('<h4>').text(`${item.artistName} - ${item.trackName}`))
            .append($(`<video width="900" height="560">`)
                .attr('controls', 'controls')
                .attr('src', item.previewUrl)
                .attr('poster', item.artworkUrl))
            .addClass('carousel-item')
            .appendTo($carousel);
    });
    $('.carousel-item:first-child').addClass('active');
}


const a = $('.carousel');

const b = new bootstrap.Carousel(a, {
    ride: false,
    interval: false
})

a.on('click', '.carousel-control-prev', function (e) {
    e.preventDefault();
    a.carousel('prev');
    $carousel.find('video').trigger('pause');
});


a.on('click', '.carousel-control-next', function (e) {
    e.preventDefault();
    a.carousel('next');
    $carousel.find('video').trigger('pause');
});
