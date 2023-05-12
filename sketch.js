window.onload=function(){

    const mainBtn = document.getElementById("gen-btn");
    mainBtn.addEventListener("click",calculate);
      }


function calculate()
{

    // const playerWeaponSelector = document.getElementById("player-weapon");
    // let weapchoice = playerWeaponSelector.value;
    
    
    var value1 = document.querySelector(".game-style").value;
    var value2 = document.querySelector(".game-genre").value;


    //var result = value1 + " " + value2 + " " + value3 + " " + value4 + "";

    //document.getElementById("result").innerHTML = "Result : " + result;

    // if(value1 == "player-flight" || value1 == "player-morph") {
        
    // }

    // if(value2 == "weap-sword" || value2 == "weap-gun"){

    // }
    // if(value3 == "player-strength" || value3 == "player-swift"){

    // }
    // if(value4 == "player-aquamarine" || value4 == "player-orange"){

    // }
    // else{
    //     document.getElementById("result").innerHTML = "Something";
    // }

    //MORGAN I WANT TO GENERATE IMAGES BUT ITS TOO HARD

    if(value1 == "player-action" && value2 == "weap-multi"){
        document.getElementById("result").innerHTML = "Counter Strike Global Offensive";
        
    }
    if(value1 == "player-action" && value2 == "weap-rpg"){
        document.getElementById("result").innerHTML = "Realm of the Mad God";

    } 
    if(value1 == "player-action" && value2 == "weap-VR"){
        document.getElementById("result").innerHTML = "SUPERHOT";
    }
    if(value1 == "player-story" && value2 == "weap-multi"){
        document.getElementById("result").innerHTML = "It Takes Two";
    }
    if(value1 == "player-story" && value2 == "weap-rpg"){
        document.getElementById("result").innerHTML = "Omori";
    }
    if(value1 == "player-story" && value2 == "weap-VR"){
        document.getElementById("result").innerHTML = "Before Your Eyes";
    }
    if(value1 == "player-horror" && value2 == "weap-multi"){
        document.getElementById("result").innerHTML = "Phasmaphobia";
    }
    if(value1 == "player-horror" && value2 == "weap-rpg"){
        document.getElementById("result").innerHTML = "Yume Nikki";
    }
    if(value1 == "player-horror" && value2 == "weap-VR"){
        document.getElementById("result").innerHTML = "Blair Witch";
    }
    
    

    console.log(value1)
    console.log(value2)
    console.log(value3)
    console.log(value4)

}