// event pada saat link di klik
$('.page-scroll').on('click', function(e) {

    // ambil isi href
    var tujuan = $(this).attr('href');
    // tangkap element ybs
    var elemenTujuan = $(tujuan);

    // pindahkan scroll
    $('html').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1100, 'easeInOutExpo');


    e.preventDefault();

});















