/*global $ Vue*/
$(document).ready(() => {
    $(".scrollTop").click(() => {
        $([document.documentElement, document.body]).animate({
            scrollTop: 0
        }, 1000);

    });
    if (document.getElementById("countdown")) startTimer();
    let db = firebase.firestore();

    db.collection("data").doc("events").get().then(query => {
        let ALL_EVENTS = query.data().events;
        let App = new Vue({
            el: "#app",
            data: {
                events: [],
                bscore: 0,
                yscore: 0
            }
        });
        let string = "Anatomy and Physiology  | Helen Zhang and Angela LansangXAstronomy | Bindi Kasu and Serena An/Tristina TingXCircuit Lab  | Grant Sternhagen *Can have one more personXCodebusters | Prasoon Khare, Samyok Nepal, and Carissa WittXDesigner Genes | Samyok Nepal and Carissa WittXDisease Detectives  | Marina and Jane AdryXDynamic Planet  | Helen Zhang and Angela LansangXExperimental Design  | Will Hummel, Aditya Tummala, and Prasoon KhareXFermi Questions  | Samyoke and Serena An/TrisitnaXFossils  | Will Hummel and Aditya TummalaXHerpetology  | Helen Zhang and Angela LansangXProtein Modeling  | Marina Du, Jane Adry, and Joseph ParkXThermodynamics  | Grant Sternhagen *Can have two more peopleXWrite It Do It  | Bidhi Kasu and Serena An/Tristina TingXBoomilever (2) | Orange Team (Will, Aditya, Joshua, David, Joseph)XChemistry Lab | Marina Du and Jane AdryXForensics |David and Joseph ParkXGeological Mapping |Prasoon and JoshuaXMission Possible (2) |Everyone, if timeXMousetrap |Blue team (Grant, Samyok, Prasoon, Marina, Jane)XSounds of Music |David and Joseph ParkXWater Quality |Joshua ParkXWright Stuff | Green Team (Helen, Angela, Bidhi, Tristina, Carissa)X";
        // console.log(string.split("X"));
        let newStrings = [];
        string.split("X").forEach((item, key) => {
            if (!item) {
                return 0;
            }
            let split = item.split("|");
            if (split[1]) {
                // is taken
                newStrings.push({
                    event: ALL_EVENTS[key].title,
                    person: ALL_EVENTS[key].people.join(', '),
                    brookingsScore: 1,
                    yanktonScore: 2
                })
            } else {
                // is not taken
                newStrings.push({
                    event: split[0],
                    brookingsScore: 5,
                    yanktonScore: 1
                })
            }
        });
        App.events = newStrings;
        setInterval(checkAllAndSum, 500);

        function checkAllAndSum() {
            let bscore = 0;
            let yscore = 0;
            App.events.forEach((event, key) => {
                bscore += parseInt(event.brookingsScore);
                if (event.brookingsScore > 1) {
                    App.events[key].yanktonScore = 1;
                    yscore += 1;
                } else {
                    App.events[key].yanktonScore = 2;
                    yscore += 2;
                }

            });
            App.yscore = yscore;
            App.bscore = bscore;
        }

    });
});

function startTimer() {
    var countDownDate = new Date("Mar 23, 2019 9:00:00").getTime();

    var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById("countdown").innerHTML = Math.floor(days / 7) + " weeks";
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "Sci Oly 2019 has started!";
        }
    }, 1000);
}

function scrollTop() {
}