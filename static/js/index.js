$(document).ready(() => {
    let db = firebase.firestore();
    /**
     * first get the html data
     */
    // db.collection("data").doc("index").get().then(query => {
    //     $("#root").html(query.data().html);
    //     /**
    //      * attach vue and apply js to new data
    //      */
    //     db.collection("data").doc("events").get().then(query => {
    //         let ALL_EVENTS = query.data().events;
    //         let app = new Vue({
    //             el: "#search",
    //             data: {events: ALL_EVENTS},
    //             methods: {
    //                 searchByNameOnChip: function (element) {
    //                     if ($(element.target).text().trim() === $("#searchBar").val()) {
    //                         $("#searchBar").val('').click().focus().keyup().blur();
    //                     } else {
    //                         $("#searchBar").val($(element.target).text().trim()).focus().keyup().blur();
    //                     }
    //                 },
    //                 searchByEventNameOnCard: function (element) {
    //                     if ($(element.target).hasClass("card-title")) {
    //                         if ($(element.target).text().trim().toLowerCase() === $("#searchBar").val()) {
    //                             $("#searchBar").val('').click().focus().keyup().blur();
    //                         } else {
    //                             $("#searchBar").val($(element.target).text().trim().toLowerCase()).focus().keyup().blur();
    //                         }
    //                     }
    //                 }
    //             }
    //         });
    //         /**
    //          * Apply JS styles
    //          */
    //         $("#searchBar").on("keyup", function () {
    //             let value = $(this).val().toLowerCase();
    //             $("tbody tr").filter(function () {
    //
    //                 $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    //                 if($("tbody tr:visible").length === 1){
    //                     $(".card").removeClass('darken-1').addClass("lighten-1");
    //                 } else {
    //                     $(".card").addClass('darken-1').removeClass("lighten-1");
    //
    //                 }
    //
    //             });
    //             $(".chip").filter(function () {
    //                 if(value)
    //                     $(this).toggleClass("blue-grey lighten-2", $(this).text().toLowerCase().indexOf(value) > -1)
    //                 else
    //                     $(this).removeClass("blue-grey lighten-2")
    //             });
    //         });
    //     });
    // });
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    var uiConfig = {
        callbacks: {
            signInSuccessWithAuthResult: function(authResult, redirectUrl) {
                // User successfully signed in.
                // Return type determines whether we continue the redirect automatically
                // or whether we leave that to developer to handle.
                return true;
            },
            uiShown: function() {
                // The widget is rendered.
                // Hide the loader.
                document.getElementById('loader').style.display = 'none';
            }
        },
        // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
        signInFlow: 'popup',
        signInSuccessUrl: '<url-to-redirect-to-on-success>',
        signInOptions: [
            // Leave the lines as is for the providers you want to offer your users.
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.TwitterAuthProvider.PROVIDER_ID,
            firebase.auth.GithubAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
            firebase.auth.PhoneAuthProvider.PROVIDER_ID
        ],
        // Terms of service url.
        tosUrl: '<your-tos-url>',
        // Privacy policy url.
        privacyPolicyUrl: '<your-privacy-policy-url>'
    };
    ui.start('#firebaseui-auth-container', uiConfig);


});