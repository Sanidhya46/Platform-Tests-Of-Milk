


let startlab = document.querySelector("#startinglab")
let startlab2 = document.querySelector("#workinglab")
let startbutton = document.querySelector("#start")

let stp12 = document.querySelector("#stp12")
let stp13 = document.querySelector("#stp13")
let tablesdiv = document.querySelector("#tablesdiv")
let inftext = document.querySelector("#inftext")
let stp23 = document.querySelector("#stp23")
let stp33 = document.querySelector("#stp33")
let Set = document.querySelector("#Set")
let stp15 = document.querySelector("#stp15")
let stp16 = document.querySelector("#stp16")
let stp17 = document.querySelector("#stp17")
let stp19 = document.querySelector("#stp19")
let stp63 = document.querySelector("#stp63")
let stp32 = document.querySelector("#stp32")
let stp70 = document.querySelector("#stp70")
let stp18 = document.querySelector("#stp18")
let stp39 = document.querySelector("#stp39")
let stp1010 = document.querySelector("#stp1010")
let stp49 = document.querySelector("#stp49")
let stp2_section = document.querySelector("#stp2-section")
let ins = document.querySelector("#text")
// let statuses = 0;



stp39.style.visibility = "hidden"
        stp18.style.display = "none"
        stp17.style.display = "none"
        stp19.style.visibility = "hidden"
let f = 665;
start()


function start(){ 
    ins.innerText = "Move your cursor to get familiar with the instruments then clik on start button"
    console.log("hello world")
    console.log("f for 0 is", f)
     startbutton.style.visibility="hidden"
    
     if(f === 0){
          f=99;
          console.log("f for 1 is", f)
        startlab.style.visibility="hidden"
    //    statuses = 1;
        startbutton.style.visibility="hidden"
       stp18.style.visibility = "visible"
       stp18.style.display = "block"
       stp17.style.visibility = "visible"
       stp17.style.display = "block"
       stp1010.style.display = "none"
       stp19.style.display = "block"
       stp19.style.visibility = "visible"
        ins.innerText="Click on The pipette to measure 10 ml milk from each sample and transfter to the each tube"
        pipette2();
    } else if(f===1000){
        
        
          
      console.log("f for 100 is",f)
      
        startbutton.style.visibility="hidden"
        
         
     
        // pipette2();
    } else if(f===106.5){
         f=107.5;
           
          console.log("f was 147 → changing to 150");
        
        ins.innerText = "Click on the ON switch of the water bath to on it"
          stp18.style.visibility = "hidden"
         
           console.log("f for 150 is ",f)
          
       stp39.style.visibility = "visible"
      


    }
    else if(f===300){
        console.log("f for 300 is", f)
     
       Set.style.visibility = "visible";
        ins.innerText = "Click on the open button of centrifuge to open it"
     
    }else if(f===665){
        f = 666;
        console.log("f for 666 is running", f)
        
        familiar_mbrt()
    }else{console.log("none of the f is matched")}
 
}










const tooltip_mbrt = document.getElementById("tooltip_mbrt");

const equipmentNames = {
  "pipette_familiar_mbrt": "Pipette",
  "waterbath_familiar_mbrt": "Water Bath",
  "milk_beaker_familiar_mbrt": "Milk Beaker",
  "clock_familiar_mbrt": "Timer Clock",
  "test_tube_familiar_mbrt": "Test Tube",
  "methylene_blue_familiar_mbrt": "Methylene Blue Container",
  "stopper_mbrt":"Stopper"

  };


function familiar_mbrt() {
    if (f === 666){
        f = 0;
        startbutton.style.visibility = "visible"
        console.log("familiar function running")
        document.querySelectorAll(".equipment_mbrt").forEach(item => {

  item.addEventListener("mousemove", (e) => {

    const name = equipmentNames[item.id];
    tooltip_mbrt.innerText = name;

    // Convert mouse position to %
    const xPercent = (e.clientX / window.innerWidth) * 100;
    const yPercent = (e.clientY / window.innerHeight) * 100;

    tooltip_mbrt.style.left = (e.clientX + 10) + "px";  // smaller = closer
  tooltip_mbrt.style.top  = (e.clientY - 40) + "px";
  tooltip_mbrt.style.opacity = "1";
  });

  item.addEventListener("mouseleave", () => {
    tooltip_mbrt.style.opacity = "0";
  });

});
    }else{console.log(" f for 1000 is not running now the value of f is", f)}
}


