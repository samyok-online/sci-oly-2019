/*global $*/
$(document).ready(function () {
    $("#searchBar").on("keyup", function () {
        let value = $(this).val().toLowerCase();
        $("tbody tr").filter(function () {

            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
            if($("tbody tr:visible").length === 1){
                $(".card").removeClass('darken-1').addClass("lighten-1");
            } else {
                $(".card").addClass('darken-1').removeClass("lighten-1");

            }

        });
        $(".chip").filter(function () {
            if(value)
                $(this).toggleClass("blue-grey lighten-2", $(this).text().toLowerCase().indexOf(value) > -1)
            else
                $(this).removeClass("blue-grey lighten-2")
        });
    });
});