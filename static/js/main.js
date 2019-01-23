/*global $ Vue*/
$(document).ready(()=>{
    let App = new Vue({
        el: "#app",
        data: {
            events:[],
            bscore: 0,
            yscore:0
        }
    });
    let string = "Anatomy and Physiology  | Helen Zhang and Angela LansangXAstronomy | Bindi Kasu and Serena An/Tristina TingXCircuit Lab  | Grant Sternhagen *Can have one more personXCodebusters | Prasoon Khare, Samyok Nepal, and Carissa WittXDesigner Genes | Samyok Nepal and Carissa WittXDisease Detectives  | Marina and Jane AdryXDynamic Planet  | Helen Zhang and Angela LansangXExperimental Design  | Will Hummel, Aditya Tummala, and Prasoon KhareXFermi Questions  | Samyoke and Serena An/TrisitnaXFossils  | Will Hummel and Aditya TummalaXHerpetology  | Helen Zhang and Angela LansangXProtein Modeling  | Marina Du and Jane Adry *Can have one more personXThermodynamics  | Grant Sternhagen *Can have two more peopleXWrite It Do It  | Bidhi Kasu and Serna An/Tristina TingXBoomilever (2) |XChemistry Lab (2) |XForensics (2) |XGeological Mapping (2) |XMission Possible (2) |XMousetrap (2) |XSounds of Music (2) |XWater Quality (2) |XWright Stuff (2) |X";
    console.log(string.split("X"));
    let newStrings = [];
    string.split("X").forEach(item =>{
        if(!item){return 0;}
        let split = item.split("|");
        if(split[1]){
            // is taken
            newStrings.push({
                event: split[0],
                person: split[1],
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
    function checkAllAndSum(){
        let bscore = 0;
        let yscore = 0;
        App.events.forEach((event, key)=>{
            bscore += parseInt(event.brookingsScore);
            if(event.brookingsScore > 1){
                App.events[key].yanktonScore = 1;
                yscore += 1;
            } else {
                App.events[key].yanktonScore = 2;
                yscore +=2;
            }

        });
        App.yscore = yscore;
        App.bscore = bscore;
    }

});
