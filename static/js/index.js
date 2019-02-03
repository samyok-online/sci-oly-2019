$(document).ready(() => {
    let db = firebase.firestore();
    /**
     * first get the html data
     */
    db.collection("data").doc("index").get().then(query => {
        $("#root").html(query.data().html);
        /**
         * attach vue and apply js to new data
         */
        db.collection("data").doc("events").get().then(query => {
            let ALL_EVENTS = query.data().events;
            let app = new Vue({
                el: "#search",
                data: {events: ALL_EVENTS},
                methods: {
                    searchByNameOnChip: function (element) {
                        if ($(element.target).text().trim() === $("#searchBar").val()) {
                            $("#searchBar").val('').click().focus().keyup().blur();
                        } else {
                            $("#searchBar").val($(element.target).text().trim()).focus().keyup().blur();
                        }
                    },
                    searchByEventNameOnCard: function (element) {
                        if ($(element.target).hasClass("card-title")) {
                            if ($(element.target).text().trim().toLowerCase() === $("#searchBar").val()) {
                                $("#searchBar").val('').click().focus().keyup().blur();
                            } else {
                                $("#searchBar").val($(element.target).text().trim().toLowerCase()).focus().keyup().blur();
                            }
                        }
                    }
                }
            });
            /**
             * Apply JS styles
             */
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
    });
});