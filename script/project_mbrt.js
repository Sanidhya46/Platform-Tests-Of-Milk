


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
let stp63 = document.querySelector("#stp63")
let stp32 = document.querySelector("#stp32")
let stp70 = document.querySelector("#stp70")
let stp18 = document.querySelector("#stp18")
let stp39 = document.querySelector("#stp39")
let stp49 = document.querySelector("#stp49")
let stp2_section = document.querySelector("#stp2-section")
let ins = document.querySelector("#text")
// let statuses = 0;

let f = parseInt(localStorage.getItem("f")) || 0;
console.log("🧪 Loaded f value:", f);

function start(){ 
 
    console.log("hello world")
    console.log("f for 0 is", f)
     startbutton.style.visibility="hidden"
     if(f === 0){
          f=1;
          console.log("f for 1 is", f)
        startlab.style.visibility="hidden"
    //    statuses = 1;
        startbutton.style.visibility="hidden"
     
        ins.innerText="Click on The pipette to measure 5 ml milk from each sample and transfter to the each butyromter"
    
    } else if(f===100){
        
        
          
      console.log("f for 100 is",f)
      
        startbutton.style.visibility="hidden"
        
         
        ins.innerText=" Click on the iso amyl cap to open it "
        // pipette2();
    } else if(f===147){

          console.log("f was 147 → changing to 150");
        f = 150;
      
          stp18.style.visibility = "hidden"
         
           console.log("f for 150 is ",f)
            milk_tube_b_201();
       stp39.style.visibility = "visible"
        //  waterBath_lower2.style.visibility = visible;
        //  waterBath_upper2.style.visibility = visible;
        //  waterBath_down_lower2.style.visibility = visible;
        //  waterBath_top_upper2.style.visibility = visible;
        //  waterBath_front2.style.visibility = visible;
        // waterBath_upper_lower22.style.visibility = visible;
        //  waterBath_upper_lower12.style.visibility = visible;
        //  waterBath_lower2.style.visibility = visible;
        //  waterBath_lower2.style.visibility = visible;
        //  waterBath_lower2.style.visibility = visible;
        //  waterBath_lower2.style.visibility = visible;
        //  waterBath_lower2.style.visibility = visible;
        //  waterBath_lower2.style.visibility = visible;
        //  waterBath_lower2.style.visibility = visible;
        //  waterBath_lower2.style.visibility = visible;
        //  waterBath_lower2.style.visibility = visible;
        //  waterBath_lower2.style.visibility = visible;

        //  waterBath_lower2.style.visibility = visible;
        //  waterBath_lower2.style.visibility = visible;
        //  waterBath_lower2.style.visibility = visible;
        //  waterBath_lower2.style.visibility = visible;
        //  waterBath_lower2.style.visibility = visible;


    }
    else if(f===300){
        console.log("f for 300 is", f)
     
       Set.style.visibility = "visible";
        ins.innerText = "Click on the open button of centrifuge to open it"
     
    }
 
}



