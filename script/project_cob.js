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
let stp63 = document.querySelector("#stp63")
let stp32 = document.querySelector("#stp32")
let stp70 = document.querySelector("#stp70")
let stp18 = document.querySelector("#stp18")
let stp16 = document.querySelector("#stp16")
let stp39 = document.querySelector("#stp39")
let stp49 = document.querySelector("#stp49")
let stp1000 = document.querySelector("#stp1000")
let stp2_section = document.querySelector("#stp2-section")
let ins = document.querySelector("#text")
let timerDisplay13 = document.querySelector("#timerDisplay13")
// let statuses = 0;
  stp49.style.visibility = "hidden"
let f=1000;

stp49.style.visibility = "hidden";
startbutton.style.visibility="hidden"
stp16.style.visibility = "hidden";

stp15.style.visibility= "hidden";
stp15.style.opacity= "0%";

start();
function start(){ 
    
    console.log("hello world")
    console.log("f for 0 is", f)
     startbutton.style.visibility="hidden"
     if(f === 1000){
        f = 1001;
        console.log("f for 1000 is running")
        console.log("value of f is", f)
       familiar();

     }else if(f === 0){
          f=1;
         stp1000.style.visibility = "hidden";
          console.log("f for 1 is", f)
        startlab.style.visibility="hidden"
        
    //    statuses = 1;
        startbutton.style.visibility="hidden"
        stp16.style.visibility = "visible"
        stp15.style.visibility = "visible"
        stp15.style.opacity = "100%"
        ins.innerText="Click on The pipette to measure 5 ml milk from each four samples and transfter to each prescribed tubes"
        pipette1();
       
       
    } else if(f===100){
        f = 110;
        tubewaterbath();

        
          stp16.style.visibility = "hidden"
      console.log("f for 100 is",f)
      
       stp49.style.visibility = "visible"
        timerDisplay13.innerText = "05:00"
         
        ins.innerText=" Click on the iso amyl cap to open it "
        // pipette2();
    } else if(f===1500){
          milk_tube_b()
          stp18.style.visibility = "hidden"
         
           console.log("f for 150 is ",f)
       stp39.style.visibility = "visible"
      


    }
    else if(f===300){
        console.log("f for 300 is", f)
     
       Set.style.visibility = "visible";
        ins.innerText = "Click on the open button of centrifuge to open it"
     
    }else if(f === 222){
        console.log("now the value of f is ", f)
        ins.innertext = "Click on The NEXT button to fill the sensory information in observation table"
        sensory_a();
    }else if(f === 223){
        console.log("now the value of f is ", f)
        startbutton.style.display = "none"
        sensory_a_result();
    }else if(f === 224){
        console.log("now the value of f is ", f)
        startbutton.style.display = "none"
        sensory_b();
    }else if(f === 225){
        console.log("now the value of f is ", f)
        startbutton.style.display = "none"
        sensory_b_result();
    }else if(f === 226){
        console.log("now the value of f is ", f)
        startbutton.style.display = "none"
        sensory_c();
    }else if(f === 227){
        console.log("now the value of f is ", f)
        startbutton.style.display = "none"
        sensory_c_result();
    }else if(f === 228){
        console.log("now the value of f is ", f)
        startbutton.style.display= "none"
        sensory_d();
    }else if(f === 229){
        console.log("now the value of f is ", f)
        startbutton.style.display= "none"
        sensory_d_result();
    }
 
 
}
















const tooltip = document.getElementById("tooltip");

const equipmentNames = {
  "pipette_familiar": "Pipette",
  "waterbath_familiar": "Water Bath",
  "milk_beaker_familiar": "Milk Beaker",
  "clock_familiar": "Timer Clock",
  "test_tube_familiar": "Test Tube"

  };


function familiar() {
    if (f === 1001){
        f = 1002;
        console.log("familiar function running")
        document.querySelectorAll(".equipment").forEach(item => {

  item.addEventListener("mousemove", (e) => {

    const name = equipmentNames[item.id];
    tooltip.innerText = name;

    // Convert mouse position to %
    const xPercent = (e.clientX / window.innerWidth) * 100;
    const yPercent = (e.clientY / window.innerHeight) * 100;

    tooltip.style.left = (e.clientX + 10) + "px";  // smaller = closer
  tooltip.style.top  = (e.clientY - 40) + "px";
  tooltip.style.opacity = "1";
  });

  item.addEventListener("mouseleave", () => {
    tooltip.style.opacity = "0";
  });

});
    }else{console.log(" f for 1000 is not running now the value of f is", f)}
}

function closePopup() {
    document.getElementById("familiarPopup").style.display = "none";
   
    startbutton.style.visibility = "visible";
    f = 0;

   
  }