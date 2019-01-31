$(document).ready(function () {
    let scrolled = false;
    $("#searchBar").on("keyup", function () {
        if(!scrolled){
            $([document.documentElement, document.body]).animate({
                scrollTop: $("#searchBar").offset().top
            }, 500);
            scrolled = true;
        }
        let value = $(this).val().toLowerCase();
        $("tbody tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});