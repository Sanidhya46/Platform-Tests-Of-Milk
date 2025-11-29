window.onload = function() {


const pipette_centrifuge2 = document.querySelector('#pipette_centrifuge2');

const milk_a_2_50ml = document.querySelector('#milk_a_2_50ml');
const milk_tube_a_2 = document.querySelector('#milk_tube_a_2');
const milk_tube_b_2 = document.querySelector('#milk_tube_b_2');
const milk_strip_a_2 = document.querySelector('#milk_strip_a_2');
const milk_10ml_b = document.querySelector('#milk_10ml_b'); 
const milk_10ml_a = document.querySelector('#milk_10ml_a'); 
const milk_b_2_50ml = document.querySelector('#milk_b_2_50ml');

const milk_strip_b_2 = document.querySelector('#milk_strip_b_2');
const methylene_blue_1ml = document.querySelector('#methylene_blue_1ml');
const methylene_mid_blue = document.querySelector('#methylene_mid_blue'); 
const methylene_mid_blue_b = document.querySelector('#methylene_mid_blue_b'); 
const methylene_blue_tube = document.querySelector('#methylene_blue_tube'); 
const methylene_blue_tube_b = document.querySelector('#methylene_blue_tube_b'); 
const methylene_blue_drop1 = document.querySelector('#methylene_blue_drop1');  
const methylene_blue_drop2 = document.querySelector('#methylene_blue_drop2');  
const methylene_blue_1ml_b = document.querySelector('#methylene_blue_1ml_b');
const methylene_blue_drop1_b = document.querySelector('#methylene_blue_drop1_b');  
const methylene_blue_drop2_b = document.querySelector('#methylene_blue_drop2_b'); 
const observation_table_mbrt = document.querySelector('#observation_table_mbrt'); 
let stp99 = document.querySelector("#stp99")


const onSwitchHolder2 = document.getElementById("onSwitchHolder2");
const setOff2 = document.getElementById("setOff2");
const setOn2 = document.getElementById("setOn2");
const setButtonHolder2 = document.getElementById("setButtonHolder2");
const downOnSwitch2 = document.getElementById("downOnSwitch2");
const upOnSwitch2 = document.getElementById("upOnSwitch2");
const upOffSwitch2 = document.getElementById("upOffSwitch2");
const downSwitch2 = document.getElementById("downSwitch2");
const offSwitch2 = document.getElementById("offSwitch2");
const onSwitch2 = document.getElementById("onSwitch2");
const waterbath2 = document.getElementById("waterbath2");

const butyrometer2 = document.querySelector('#butyrometer2');
const tilted_butyrometer3 = document.querySelector('#tilted_butyrometer2');
const straight_butyrometer3 = document.querySelector('#straight_butyrometer2');
const cap3 = document.querySelector('#butyrometer_cork12');

const sampleTempDisplay2 = document.getElementById("sampleTempDisplay2");
const setTempDisplay2 = document.getElementById("setTempDisplay2");
const actualTempDisplay2 = document.getElementById("actualTempDisplay2");

const timerDisplay2 = document.querySelector("#timerDisplay2");
const timerDisplay = document.querySelector("#timerDisplay");

const timerDisplay12 = document.querySelector("#timerDisplay13");
const timerDisplay22 = document.querySelector("#timerDisplay23");

const tiltedsol12 = document.getElementById("tiltedsol12");

const sampleTempDisplay12 = document.getElementById("sampleTempDisplay12");
const actualTempDisplay12 = document.getElementById("actualTempDisplay12");
const tube_cap_a = document.getElementById("tube_cap_a");
const tube_cap_A = document.getElementById("tube_cap_A");

const tube_cap_b = document.getElementById("tube_cap_b");

const test_tube_a_2 = document.querySelector('#test_tube_a_2');
// const test_tube_b_3 = document.querySelector('#test_tube_b_3');

const tongs_upper = document.querySelector('#tongs_upper');
const tongs_down = document.querySelector('#tongs_down');

const closed_methylene_blue_tube_a = document.querySelector('#closed_methylene_blue_tube_a'); 

const closed_methylene_blue_tube_a_2 = document.querySelector('#closed_methylene_blue_tube_a_2'); 
const closed_methylene_blue_tube_b = document.querySelector('#closed_methylene_blue_tube_b'); 
const closed_methylene_blue_tube_b_2 = document.querySelector('#closed_methylene_blue_tube_b_2'); 

const closed_white_tube_a = document.querySelector('#closed_white_tube_a'); 
const closed_white_tube_b = document.querySelector('#closed_white_tube_b'); 
const closed_light_blue_tube = document.querySelector('#closed_light_blue_tube'); 
const closed_pale_blue_tube = document.querySelector('#closed_pale_blue_tube'); 
const tilted_light_blue_tube = document.querySelector('#tilted_light_blue_tube'); 

const inverted_pale_blue_tube = document.querySelector('#inverted_pale_blue_tube'); 

const inverted_methylene_blue_tube_a = document.querySelector('#inverted_methylene_blue_tube_a'); 
const inverted_methylene_blue_tube_b = document.querySelector('#inverted_methylene_blue_tube_b'); 

const tongs_A = document.querySelector('#tongs_A');

const tongs_upper2 = document.querySelector('#tongs_upper2');
const tongs_down2 = document.querySelector('#tongs_down2');

const tongs_upper3 = document.querySelector('#tongs_upper3');
const tongs_down3 = document.querySelector('#tongs_down3');

const tongs_upper4 = document.querySelector('#tongs_upper4');
const tongs_down4 = document.querySelector('#tongs_down4');


pipette2();

timerDisplay.style.visibility  = "block"
function pipette2() {
   
    if (f === 100) {
        f = 101; // Move to the next step so this function doesn't run again unintentionally
         
        console.log("pipette");
        console.log("heloo world....")
        // test_tube_b_3.style.opacity = "100%"
        tube_cap_a.style.opacity = "100%"
         tube_cap_b.style.opacity = "100%"
        pipette_centrifuge2.addEventListener("click", () => {
               
         

          pipette_centrifuge2.style.rotate =  "0deg"
            setTimeout(function(){
          pipette_centrifuge2.style.bottom = "35%"
           setTimeout(function(){
          pipette_centrifuge2.style.left = "14%"
                      setTimeout(function(){
                        pipette_centrifuge2.style.bottom = "22%"
                            setTimeout(function(){
                                   
                                   
                                    milk_a_2_50ml.style.height= "13.0%"
                                    milk_10ml_a.style.height= "21.4%"
                                      setTimeout(function(){
                                              pipette_centrifuge2.style.bottom = "53%"
                                             milk_10ml_a.style.bottom = "53%"
                                               setTimeout(function(){
                                                 pipette_centrifuge2.style.left = "65.9%"
                                                  milk_10ml_a.style.left = "66.9%"
                                                  setTimeout(function(){
                                                     pipette_centrifuge2.style.bottom = "43%"
                                              milk_10ml_a.style.bottom = "43%"
                                                setTimeout(function(){ 
                                                          milk_strip_a_2.style.height = "32.2%"
                                                         setTimeout(function(){      //
                                                            milk_tube_a_2.style.height = "17.8%"
                                                          
                                                             setTimeout(function(){
                                                                 milk_strip_a_2.style.opacity = "0%"
                                                                  milk_10ml_a.style.opacity = "0%"
                                                                   setTimeout(function(){
                                                                      pipette_centrifuge2.style.bottom = "55%"
                                                                      pipette_centrifuge2.style.zIndex = "5"
                                                                       setTimeout(function(){
                                                                             pipette_centrifuge2.style.left = "30.1%"
                                                                             
                                                                               
                                                                     
                                                                       
                                   
                                       
                                     f = 101;
                                        
        f = 102; 

       //
               //
              
                   setTimeout(function(){
                       pipette_centrifuge2.style.bottom = "22.4%"
                           setTimeout(function(){
                                 milk_10ml_b.style.height =  "21.4%"
                                milk_b_2_50ml.style.height ="13.0%"
                           
                                     
                                         setTimeout(function(){
                                             pipette_centrifuge2.style.bottom = "60.4%"
                                               milk_10ml_b.style.bottom =  "60.4%"
                                                setTimeout(function(){
                                                    pipette_centrifuge2.style.bottom = "60.4%"
                                               milk_10ml_b.style.bottom =  "60.4%"
                                                setTimeout(function(){
                                                   pipette_centrifuge2.style.left = "69.3%"
                                               milk_10ml_b.style.left =  "70.4%"
                                                setTimeout(function(){
                                                   pipette_centrifuge2.style.bottom = "40.4%"
                                               milk_10ml_b.style.bottom =  "40.4%"
                                                 setTimeout(function(){
                                                  milk_strip_b_2.style.height = "32.2%"
                                                         setTimeout(function(){
                                                  milk_tube_b_2.style.height = "17.8%"
                                                   setTimeout(function(){
                                                    milk_10ml_b.style.opacity = "0%"
                                                    milk_strip_b_2.style.opacity = "0%"
                                                    pipette_centrifuge2.style.zIndex = "20";
                                                     setTimeout(function(){
                                                          pipette_centrifuge2.style.bottom = "60.4%"
                                                          setTimeout(function(){
                                                            pipette_centrifuge2.style.left = "27.3%"
                                                             setTimeout(function(){
                                                                       pipette_centrifuge2.style.bottom = "11%"
                                     setTimeout(function(){
                                      pipette_centrifuge2.style.rotate = "-90deg"
                                      setTimeout(function(){
                                         pipette_centrifuge2.style.bottom = "-5%"

                                              if (f === 102) {
        f = 103; 
              pipette_centrifuge2.addEventListener("click", () => {
                      pipette_centrifuge2.style.rotate =  "0deg"
            setTimeout(function(){
          pipette_centrifuge2.style.left= "23%"
           setTimeout(function(){
          pipette_centrifuge2.style.bottom = "41%"
           setTimeout(function(){
                 pipette_centrifuge2.style.left= "45.5%"
                   setTimeout(function(){
                          pipette_centrifuge2.style.bottom = "25%"
                            setTimeout(function(){
                               methylene_blue_1ml.style.opacity = "100%"
                               setTimeout(function(){
                                   pipette_centrifuge2.style.bottom = "60%";
                                     methylene_blue_1ml.style.bottom = "60%"
                                      setTimeout(function(){
                                            pipette_centrifuge2.style.left= "65.8%"
                                             methylene_blue_1ml.style.left = "66.8%"
                                             setTimeout(function(){
                                               pipette_centrifuge2.style.bottom = "40%";
                                     methylene_blue_1ml.style.bottom = "40%"
                                       setTimeout(function(){
                                        methylene_blue_drop1.style.opacity = "100%"
                                              setTimeout(function(){
                                              methylene_blue_drop2.style.opacity = "100%"
                                               methylene_blue_drop1.style.opacity = "0%"
                                         setTimeout(function(){
                                        methylene_mid_blue.style.opacity = "100%"
                                        milk_tube_a_2.style.opacity = "0%"
                                         setTimeout(function(){
                                            methylene_blue_drop2.style.opacity = "0%"
                                               methylene_blue_tube.style.opacity = "100%"
                                               methylene_blue_1ml.style.opacity = "0%"
                                                 setTimeout(function(){
                                                    pipette_centrifuge2.style.bottom = "65.8%"
                                                      setTimeout(function(){
                                                           pipette_centrifuge2.style.left= "38%"
                                                           
           setTimeout(function(){
          pipette_centrifuge2.style.bottom = "50%"
           setTimeout(function(){
               pipette_centrifuge2.style.left= "45.4%"
                setTimeout(function(){
                   pipette_centrifuge2.style.bottom = "25%"
                    setTimeout(function(){
                      methylene_blue_1ml_b.style.opacity = "100%"
                       setTimeout(function(){
                             methylene_blue_1ml_b.style.bottom = "64%"
                               pipette_centrifuge2.style.bottom = "64%"
                               setTimeout(function(){
                                   pipette_centrifuge2.style.left = "69.4%"
                                    methylene_blue_1ml_b.style.left = "70.4%"
                                       setTimeout(function(){
                                           methylene_blue_1ml_b.style.bottom = "43%"
                               pipette_centrifuge2.style.bottom = "43%"
                                
                                   setTimeout(function(){
                                        methylene_blue_drop1_b.style.opacity = "100%"
                                              setTimeout(function(){
                                              methylene_blue_drop2_b.style.opacity = "100%"
                                               methylene_blue_drop1_b.style.opacity = "0%"
                                         setTimeout(function(){
                                        methylene_mid_blue_b.style.opacity = "100%"
                                        milk_tube_b_2.style.opacity = "0%"
                                         setTimeout(function(){
                                            methylene_blue_drop2_b.style.opacity = "0%"
                                               methylene_blue_tube_b.style.opacity = "100%"
                                               methylene_blue_1ml_b.style.opacity = "0%"
                                                setTimeout(function(){
                                                     pipette_centrifuge2.style.bottom = "64%"
                                                        setTimeout(function(){
                                                            pipette_centrifuge2.style.left = "24.4%"
                                                               setTimeout(function(){
                                                                       pipette_centrifuge2.style.bottom = "11%"
                                     setTimeout(function(){
                                      pipette_centrifuge2.style.rotate = "-90deg"
                                      setTimeout(function(){
                                         pipette_centrifuge2.style.bottom = "-7%"

                                         startbutton.style.visibility="visible"
                                         startbutton.innerText="Next"
                                         ins.innerText="Click on Next button"
                                          tube_cap_A.style.opacity = "100%"
                                         f = 145;
                                        
                                         console.log("f is 150 just after next")
                                                      },1000)
                                                   },1000)
                                                },1000)

                                                           },1000)
                                                   },1000)
                                                },1000)
                                          },1000)
                                   },1000)
                                   },1000)
                                          },1000)
                                   },1000)
                         },1000)
                        },1000)
                   },1000)
                },1000)
                                                   },1000)
                                  
                                                           },2000)
                                                   },1000)
                                            },1000)
                                            },1000)
                                           },1000)
                                          },1000)
                                                 },1000)
                                                 },1000)
                                   },1000)
                               },1000)
                      },1000)
                   },1000)
                                                         },1000)
                                                    },1000)
               }, { once: true });
              }
                                             },1000)
                                                         },1000)
                                                    },1000)
                                                              },1000)
                                                         },1000)
                                                    },1000)
                                                   },1000)
                                                   },1000)
                                                
                                                   },1000)
                                           },1000)
                                      },1000)    //10000
                            },1000)
                      },1000)


       
        
                                      
                                                                 },1000)
                                                                          },1000)
                                                                       },1000)
                                                                 },1000)
                                                           },1000)
                                                             },1000)
                                                     },1000)
                                                  },1000)
                                        },1000)
                                 },1000)
                        },1000)
              },1000)
                                                          },1000)
                                                       }, { once: true });
                                                    }
                                                }






function zoominout(element) {
    element.classList.add("pulse-effect");
    setTimeout(() => {
        element.classList.remove("pulse-effect");
    }, 0);
}

if(f === 150){
  f = 150.5;
  milk_tube_b_3();
function milk_tube_b_3(){
  stp39.style.visibility = "visible";
 ins.innerText = "click on the tube_cap to close the tubes "
 console.log("tube cap ready to be clicked")
   tube_cap_A.addEventListener("click", function() {
    pulse(tube_cap_A)
    console.log("tube_cap_a clicked")
         if (f === 150.5) {
        f = 151;
              tube_cap_a.style.bottom = "60%"
               setTimeout(function(){
                   tube_cap_a.style.left = "66%"
                    setTimeout(function(){
                         tube_cap_a.style.bottom = "45%"
         if (f === 151) {
        f = 152;
              tube_cap_b.style.bottom = "60%"
               setTimeout(function(){
                   tube_cap_b.style.left = "69.7%"
                    setTimeout(function(){
                      tongs_A.style.opacity = "100%"
                      tongs_A.style.visibility = "visible"
                         tube_cap_b.style.bottom = "45%"
                          ins.innerText = "click on the tongs to invert tubes for sometime to mix well the methylene solution with the milk"
                          setTimeout(function(){
                          tube_cap_a.style.opacity = "0%"
                          tube_cap_a.style.visibility = "hidden"
                           tube_cap_b.style.visibility = "hidden"
                            methylene_blue_tube_b.style.visibility = "hidden"
                            //   test_tube_b_3.style.visibility = "hidden"
                            //  test_tube_b_3.style.opacity = "0%"
                              
                  tube_cap_b.style.opacity = "0%"
                  test_tube_a_2.style.opacity = "0%"
                 
                           closed_methylene_blue_tube_a.style.opacity = "100%"
                  closed_methylene_blue_tube_b.style.opacity = "100%"
                 
                
                  methylene_blue_tube_b.style.visibility = ""
                         
                          tongs_A.onclick = function() {
                            pulse(tongs_A)
         if (f === 152) {
        f = 153;
        tongs_upper.style.bottom = "38%"
        tongs_down.style.bottom = "34%"
         setTimeout(() => {
              // milk_tube_a_2.style.bottom =  "60%"
              // milk_tube_b_2.style.bottom = "60%"
              // test_tube_a_2.style.bottom = "60%"
              // test_tube_b_2.style.bottom = "60%"
              // tube_cap_a.style.bottom = "60%"
              // tube_cap_b.style.bottom = "60%"
                 tongs_upper.style.left = "58%"
                  tongs_down.style.left = "58%"
                   tongs_upper.style.bottom = "36.8%"
                  tongs_down.style.transform = "rotate(-10deg)"
                 
                       setTimeout(() => {
                        tongs_upper.style.bottom = "86%"
                  tongs_down.style.bottom = "83%"
                  closed_methylene_blue_tube_a.style.bottom = "60%"

                           setTimeout(() => {
                  // test_tube_a_2.style.transform = "rotate(180deg)"
                  //  methylene_blue_tube.style.transform = "rotate(180deg)"
                  closed_methylene_blue_tube_a.style.transform = "rotate(180deg)"
                             
                         setTimeout(() => {
                          tongs_upper2.style.opacity = "100%";
                           tongs_down2.style.opacity = "100%";
                           tongs_upper.style.opacity = "0%";
                           tongs_down.style.opacity = "0%";
                            
                                  setTimeout(() => {
                                      closed_methylene_blue_tube_a.style.opacity = "0%"
                                      closed_methylene_blue_tube_a.style.visibility = "block"
                                      inverted_methylene_blue_tube_a.style.opacity = "100%"
                                        setTimeout(() => {
                                      inverted_methylene_blue_tube_a.style.bottom = "20%"
                                      tongs_upper2.style.bottom = "35%";
                                      tongs_down2.style.bottom = "32%";
                                        setTimeout(() => {
                                          
                                           inverted_methylene_blue_tube_a.style.bottom = "12%" 
                            setTimeout(() => {
                              tongs_upper2.style.opacity = "0%";
                              tongs_down2.style.opacity = "0%";
                             

         if (f === 153) {
        f = 154;
        tongs_upper2.style.left = "80%"
        tongs_down2.style.left = "80%"
        tongs_upper2.style.opacity = "100%"
        tongs_down2.style.opacity  = "100%"
         setTimeout(() => {
             
                 tongs_upper2.style.left = "70%"
                  tongs_down2.style.left = "70%"
                //    tongs_upper.style.bottom = "36.8%"
                //   tongs_down.style.transform = "rotate(-10deg)"
                 
                       setTimeout(() => {
                        tongs_upper2.style.bottom = "90%"
                  tongs_down2.style.bottom = "88%"
                  closed_methylene_blue_tube_b.style.bottom = "62%"

                           setTimeout(() => {
               
                  closed_methylene_blue_tube_b.style.transform = "rotate(180deg)"
                              setTimeout(() => {
                                closed_methylene_blue_tube_b.style.opacity = "0%"
                                      closed_methylene_blue_tube_b.style.visibility = "block"
                                      inverted_methylene_blue_tube_b.style.opacity = "100%"
                         setTimeout(() => {
                          tongs_upper2.style.opacity = "100%";
                           tongs_down2.style.opacity = "100%";
                           tongs_upper.style.opacity = "0%";
                           tongs_down.style.opacity = "0%";
                            
                                  setTimeout(() => {
                                      inverted_methylene_blue_tube_b.style.bottom = "20%"
                                      tongs_upper2.style.bottom = "38%";
                                      tongs_down2.style.bottom = "35%";
                             setTimeout(() => {
                                       inverted_methylene_blue_tube_b.style.bottom = "12%"
                                        setTimeout(() => {
                                           tongs_upper2.style.left = "47%";
                           tongs_down2.style.left = "47%";
                           ins.innerText = "Click on the on switch to on the waterbath to insert the sample into them one by one"
                             setTimeout(() => {
                                       tongs_upper2.style.bottom = "15%";
                           tongs_down2.style.bottom = "12%";
                            f = 154;
                 console.log(f)
                  if (f === 154) {
        f = 155;
       
    offSwitch2.addEventListener("click", function() {
      console.log("switch is clicked")
      ins.innerText = "Click on the temp increase button to increase temperature to 37°C"
       actualTempDisplay2.style.opacity = "100%";
    actualTempDisplay12.style.opacity = "100%";
    pulse(actualTempDisplay2);
    sampleTempDisplay2.style.opacity = "100%";
    sampleTempDisplay12.style.opacity = "100%";
    pulse(sampleTempDisplay2);
    zoominout(sampleTempDisplay2);
        
    offSwitch2.style.visibility = "hidden";
    console.log("f=150");
    pulse(offSwitch2);
    

     
     
      
    setTimeout(() => {
        onSwitch2.click();
        onSwitch2.style.opacity = "100%";
    }, 1000);
  


});
}else{console.log("nulll error switch2")}
                               }, 0);  
                                           }, 0);  
                                    }, 0);    
                                   }, 0);
                           }, 0);  //300
                   }, 0);
                     }, 0);
                          }, 0);
               }, 0);
              
         }
        },0)
  },0)
 }, 0);
                                   }, 0);
                           }, 0);   //300
                   }, 0);
                          }, 0);
               }, 0);
         }
        }
         }, 0);
                            }, 0);
                 }, 0);
                }
          
                         
                       }, 0);
                 }, 0);
                
  
   }else{"tube_cap_a not clicked"}
      },{ once: true });

}
}



onSwitch2.addEventListener("click", () => {
    pulse(onSwitch2);
    onSwitch2.style.opacity = "100%";
    offSwitch2.style.opacity = "0%";

    onSwitch2.style.borderRadius = "30%";
    setTimeout(() => {
        onSwitch2.style.borderRadius = "50%";
    }, 1000);

    // Show temperatures
    setTempDisplay2.style.opacity = "100%";
    actualTempDisplay2.style.display = "block";
    actualTempDisplay12.style.display = "block";
    pulse(actualTempDisplay2);
    sampleTempDisplay2.style.display = "block";
    sampleTempDisplay12.style.display = "block";
    pulse(sampleTempDisplay2);
    zoominout(sampleTempDisplay2);
    // Reset sample temperature display
    sampleTempDisplay2.textContent = "25°C";
    ins.innerText = "Click on the increase temp button to increase the water bath sample temp 37°C";
});

// Gradually increase sample temperature

let currentSampleTemp = 25



upOffSwitch2.addEventListener("click", () => {
    f=156;
    if (currentSampleTemp < 37) {
        // Show ON version briefly with pressed effect
        upOnSwitch2.style.display = "block";
        upOnSwitch2.style.borderRadius = "25%";

        // Hide OFF version temporarily
        upOffSwitch2.style.opacity = "0%";

        // Show pulse effect and increase temp
        pulse(upOnSwitch2);
        pulse(sampleTempDisplay2);

        currentSampleTemp++;
        sampleTempDisplay2.textContent = `${currentSampleTemp}°C`;
         
        // Instruction message
       ins.innerText = "Increase the sample temp of water bath to 37°C"

        // After short time, restore OFF version, hide ON version, reset radius
        setTimeout(() => {

            upOnSwitch2.style.display = "none";
            upOffSwitch2.style.opacity = "100%";
            upOnSwitch2.style.borderRadius = "50%"; // reset radius
        }, 300); // Duration of switch click simulation
    }else{ f=1500 , ins.innerText = "Click on the set button to set the temperature to 37°C"}
});

 
setOff2.addEventListener("click", () => {
 if (f === 1500) {
      f=156.5;
    pulse(setOff2);
    
    setOn2.style.opacity = "100%";
    setOff2.style.opacity = "0%";
    ins.innerText = `Temperature set to ${currentSampleTemp}°C`;

    let actualTemp = 25;
    let timerValue = 300; // 5 minutes
    let currentTime = timerValue;
 
    actualTempDisplay2.textContent = `${actualTemp}°C`;

    // timerDisplay12.style.opacity = "0%";
    // timerDisplay22.style.opacity = "0%";

    // ➤ Temperature increase (gradual then fast)
    let secondsPassed = 0;
    let timecomplete = false;

    const gradualTemp = setInterval(() => {
        secondsPassed++;
        if (actualTemp < currentSampleTemp) {
            actualTemp++;
            actualTempDisplay2.textContent = `${actualTemp}°C`;
        }

        if (secondsPassed >= 7 || actualTemp >= currentSampleTemp) {
            clearInterval(gradualTemp);
  ins.innerText = "wait to temperature reaches to 65°C ";
            // ➤ Fast increase to 65°C
            const fastIncrease = setInterval(() => {
                 ins.innerText = "wait to temperature reaches to 65°C ";
                if (actualTemp >= 37) {
                    
                    clearInterval(fastIncrease);
                      ins.innerText = "Click on the tongs to put the tubes in water bath for 30 minutes to decolourise it completely";
                      f = 321;
                    console.log("the value of f just after water bath complete heating ..", f)  
                    // ➤ Start Timer Display Only AFTER Temperature Logic Ends
                   tongs();
                      
                } else {
                    actualTemp++;
                    actualTempDisplay2.textContent = `${actualTemp}°C`;
                     ins.innerText = "wait to temperature reaches to 37°C ";
                   
                }
            }, 400); // Fast increase  // 25
        }
    }, 0); // Gradual increase  // 200 b // 1000
  }else{console.log("not running")}

  },)

function pulse(element) {
    element.classList.add("pulse-effect");
    setTimeout(() => {
        element.classList.remove("pulse-effect");
    }, 1000);
}

console.log("here new f is ", f)
function tongs(){
tongs_down2.addEventListener("click", () => {
  console.log("the value of f is ", f)
  console.log("tongs move starts")

 if (f === 321) {
      f=322;
    tongs_down2.style.bottom = "35%"
    tongs_upper2.style.bottom = "38%"
     setTimeout(() => {
        tongs_down2.style.left = "65.5%"
    tongs_upper2.style.left = "65.5%" 
        setTimeout(() => {
         tongs_down2.style.bottom = "67.5%"
    tongs_upper2.style.bottom = "69.5%" 
    inverted_methylene_blue_tube_a.style.bottom = "60%";
      setTimeout(() => {
        closed_methylene_blue_tube_a_2.style.opacity = "100%"
        inverted_methylene_blue_tube_a.style.opacity = "0%";
         setTimeout(() => {
            closed_methylene_blue_tube_a_2.style.left = "18%"
             tongs_down2.style.left = "17.9%"
    tongs_upper2.style.left = "17.9%"  
         setTimeout(() => {
               closed_methylene_blue_tube_a_2.style.height = "26.7%"
                closed_methylene_blue_tube_a_2.style.width = "1.26%"
                 setTimeout(() => {
                    closed_methylene_blue_tube_a_2.style.bottom = "30%"
                     tongs_down2.style.bottom = "37.5%"
    tongs_upper2.style.bottom = "40.2%"  
      setTimeout(() => {
             closed_methylene_blue_tube_a_2.style.bottom = "15%"
             timerDisplay.style.visibility = "visible";
             f = 550;
           
               setTimeout(() => {
                 tongs_down2.style.bottom = "55%";
                 tongs_upper2.style.bottom = "58%";
                     setTimeout(() => {
                       
                  tongs_down2.style.left = "75%";
                 tongs_upper2.style.left = "75%"
                       setTimeout(() => {
                         tongs_down2.style.bottom = "37%";
                 tongs_upper2.style.bottom = "40%";
                 setTimeout(() => {
                   tongs_down2.style.left = "69%";
                 tongs_upper2.style.left = "69%";
                  setTimeout(() => {
                      tongs_down2.style.bottom = "77%";
                 tongs_upper2.style.bottom = "80%";
                 inverted_methylene_blue_tube_b.style.bottom = "60%"
                  setTimeout(() => {
                         inverted_methylene_blue_tube_b.style.opacity = "0%"
                         closed_methylene_blue_tube_b_2.style.opacity = "100%"
                          setTimeout(() => {
                              tongs_down2.style.left = "22%";
                 tongs_upper2.style.left = "22%";
                   closed_methylene_blue_tube_b_2.style.left = "22.3%"
                    setTimeout(() => {
                      closed_methylene_blue_tube_b_2.style.height = "26.7%"
                      closed_methylene_blue_tube_b_2.style.width = "1.26%"
                      setTimeout(() => {
                      closed_methylene_blue_tube_b_2.style.bottom = "25.26%"
                      tongs_down2.style.bottom = "37%";
                 tongs_upper2.style.bottom = "40%";
                  setTimeout(() => {
                      closed_methylene_blue_tube_b_2.style.bottom = "14.8%"
                      setTimeout(() => {
                         tongs_down2.style.left = "40%";
                 tongs_upper2.style.left = "40%";
                   setTimeout(() => {
                      tongs_down2.style.bottom = "12%";
                 tongs_upper2.style.bottom = "15%";
                   startFastCountdown();
                   }, 0);
                   }, 0);
                          }, 0);
                        }, 0);
                      }, 0);
                              }, 0);
                      }, 0);
                      }, 0);
                     }, 0);
                         }, 0);
                  }, 0);
                }, 0);
          }, 0);
                    }, 0);
            }, 0);
            }, 0);
         }, 0);
           }, 0);
     }, 0);
 }else{console.log("not move tongs..")}
},)
}



 function startFastCountdown(onFinish) {
  if (f === 550) {
    f = 551;
    let remainingSeconds = 30 * 60;  // 30*60  // 30 minutes = 1800 seconds
    const speed = 0; //10 // 1 simulated second = 10 ms (super fast)
    const display = document.getElementById("timerDisplay");
    const ins = document.getElementById("text"); // get your message element

    console.log("⏳ Countdown started (fast 30-minute simulation)...");

    // Show instruction while timer runs
    ins.innerText = "⏳ Wait for 30 minutes to see if it decolourises completely or not.";

    const timer = setInterval(() => {
      // Decrease one simulated second
      remainingSeconds--;

      // Calculate minutes and seconds
      let minutes = Math.floor(remainingSeconds / 60);
      let seconds = remainingSeconds % 60;

      // Format to always show two digits
      let formattedTime =
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0");

      // Show on screen
      display.textContent = formattedTime;

      if (remainingSeconds <= 0) {
        clearInterval(timer);
        console.log("✅ Countdown complete!");
        display.textContent = "00:00 ✅ Done";
        ins.innerText = "Time complete! Check if it has decolourised.Now click on the tongs to see the tube is decolourise completely or not";
       
        f = 552;
        onFinished()
      }
    }, speed);
  }
}

    

    // Start timer after a small delay
 function onFinished() {   
    setTimeout(() => {
      if (f === 552) {
    f = 553;
    console.log("white tube function runs ... ")
       closed_white_tube_a.style.opacity = "100%";
       closed_methylene_blue_tube_a_2.style.opacity = "0%";
          
            tongs_down2.addEventListener("click", () => {
                setTimeout(() => {
              console.log("white tube clicked")
               tongs_down2.style.bottom = "36%";
                 tongs_upper2.style.bottom = "39%";
                   setTimeout(() => {
                     tongs_down2.style.left = "17.5%";
                 tongs_upper2.style.left = "17.5%";
                  setTimeout(() => {
                     tongs_down2.style.bottom = "69%";
                 tongs_upper2.style.bottom = "72%";
                   closed_white_tube_a.style.bottom = "50.9%";
                 setTimeout(() => {
                  ins.innerText = "✅yes! The first tube decolourise completely because the solution completely changed to white , now time for second tube to check it decolourise it or not"
                  setTimeout(() => {
                    closed_white_tube_a.style.width = "2%";
                    closed_white_tube_a.style.height = "41%";
                      setTimeout(() => {
                           closed_white_tube_a.style.left = "66%";
                             tongs_down2.style.left = "66%";
                 tongs_upper2.style.left = "65.5%";
                 setTimeout(() => {
                    tongs_down2.style.bottom = "29%";
                 tongs_upper2.style.bottom = "28%";
                  closed_white_tube_a.style.bottom = "25%";
                   setTimeout(() => {
                    closed_white_tube_a.style.bottom = "12%";  
                     setTimeout(() => {
                         tongs_down2.style.bottom = "56%";
                 tongs_upper2.style.bottom = "59%";
                 closed_light_blue_tube.style.opacity = "100%";
                 closed_methylene_blue_tube_b_2.style.opacity = "0%";
                   setTimeout(() => {
                      tongs_down2.style.left = "25%";
                 tongs_upper2.style.left = "25%";
                 ins.innerText = "Remove the second tube from water bath to check it decolourise completely or not"
                  setTimeout(() => {
                  tongs_down2.style.bottom = "36%";
                 tongs_upper2.style.bottom = "39%";
                  setTimeout(() => {
                  tongs_down2.style.left = "22%";
                 tongs_upper2.style.left = "22%";
                  setTimeout(() => {
                  tongs_down2.style.bottom = "66%";
                 tongs_upper2.style.bottom = "69%";
                 closed_light_blue_tube.style.bottom = "60%"
                  setTimeout(() => {
                 ins.innerText = "Now the second tube color is light blue means it not decolourise completely means required to put tube again in waterbath for 2 more hours"
                    setTimeout(() => {
                    ins.innerText = "Invert tube for 3 4 times to mix well before insert again in waterbath for 2 hours"
                     setTimeout(() => {
                     tilted_light_blue_tube.style.opacity = "100%";
                     closed_light_blue_tube.style.opacity =  "0%";
                       setTimeout(() => {
                      tilted_light_blue_tube.style.opacity = "0%";
                     closed_light_blue_tube.style.opacity =  "100%";
                       setTimeout(() => {
                          tilted_light_blue_tube.style.opacity = "100%";
                     closed_light_blue_tube.style.opacity =  "0%";
                      setTimeout(() => {
                      tilted_light_blue_tube.style.opacity = "0%";
                     closed_light_blue_tube.style.opacity =  "100%";
                      setTimeout(() => {
                     tilted_light_blue_tube.style.opacity = "100%";
                     closed_light_blue_tube.style.opacity =  "0%";
                       setTimeout(() => {
                      tilted_light_blue_tube.style.opacity = "0%";
                     closed_light_blue_tube.style.opacity =  "100%";
                       setTimeout(() => {
                          tilted_light_blue_tube.style.opacity = "100%";
                     closed_light_blue_tube.style.opacity =  "0%";
                      setTimeout(() => {
                      tilted_light_blue_tube.style.opacity = "0%";
                     closed_light_blue_tube.style.opacity =  "100%";
                        setTimeout(() => {
                             closed_light_blue_tube.style.bottom =  "14.9%";
                                tongs_down2.style.bottom = "36%";
                 tongs_upper2.style.bottom = "39%";
                 f = 553.5;
                  if (f === 553.5) {
          f = 554;
                  startFastCountdown2();
                  }
                   setTimeout(() => {
                     tongs_down2.style.left = "47%";
                 tongs_upper2.style.left = "47%";
                  setTimeout(() => {
                       tongs_down2.style.bottom = "11%";
                 tongs_upper2.style.bottom = "14%";
                

      startFastCountdown(() => {
        console.log("🎯 Countdown finished — call your final function here...");
        ins.innerText = "Now see the tube is it decolourise completely or not.. "
         
       
      });
       }, 0);
        }, 0);
       }, 0);
       }, 0);   // 2000
       }, 0);
        }, 0);
       }, 0);
         }, 0);
       }, 0);
        }, 0);
       }, 0);   // 2000
        }, 0);   // 7000
       }, 0);
         }, 0);
       }, 0);
       }, 0);
        }, 0);
       }, 0);
       }, 0);
        }, 0);
       }, 0);
       }, 0);
         }, 0);  // 2500
            }, 0);
    },0)     // 1200
      }, 0);
          }, { once: true });
    }else{console.log("not run white tube ..")}
    }, 0); // starts after 1 sec
  }


   function startFastCountdown2() {
  if (f === 554) {
    f = 555;
    console.log("second timer starts")
    let remainingSeconds = 0;  // 120*60 // 30 minutes = 1800 seconds
    const speed = 0; //10 // 1 simulated second = 10 ms (super fast)
    const display = document.getElementById("timerDisplay");
    const ins = document.getElementById("text"); // get your message element

    console.log("....Countdown started (fast 30-minute simulation)...");

    // Show instruction while timer runs
    ins.innerText = "⏳ Wait for 2 hours to see is it decolourises completely or not.";

    const timer = setInterval(() => {
      // Decrease one simulated second
      remainingSeconds--;

      // Calculate minutes and seconds
      let minutes = Math.floor(remainingSeconds / 60);
      let seconds = remainingSeconds % 60;

      // Format to always show two digits
      let formattedTime =
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0");

      // Show on screen
      display.textContent = formattedTime;

      if (remainingSeconds <= 0) {
        clearInterval(timer);
        console.log("✅ Countdown complete!");
        display.textContent = "00:00 ✅ Done";
        ins.innerText = "Time complete! Check if it has decolourised.Now click on the tongs to see the tube is decolourise completely or not";
       
        f = 556;
        onFinished2()
        timerDisplay.style.opacity = "0%";
      }
    }, speed);
  }
}


    // Start timer after a small delay
 function onFinished2() {   
    setTimeout(() => {
       ins.innerText = "Click on the tongs again to Check it decolourised completely or not"
       closed_light_blue_tube.style.opacity = "0%";
       closed_pale_blue_tube.style.opacity = "100%";
      if (f === 556) {
    f = 557;   tongs_down2.addEventListener("click", () => {
     setTimeout(() => {
        tongs_down2.style.bottom = "36%";
                 tongs_upper2.style.bottom = "39%";
                 
                     setTimeout(() => {
                       tongs_down2.style.left = "21.5%";
                 tongs_upper2.style.left = "21.5%";
                  setTimeout(() => {
                     closed_pale_blue_tube.style.bottom = "60%";
                     tongs_down2.style.bottom = "70%";
                 tongs_upper2.style.bottom = "73%";
                 ins.innerText = "Now the solution color is pale blue required to put for half more hours in water bath to decolourise completely."
                  setTimeout(() => {
                    ins.innerText = "Invert for some time and put again in watebath for 30 more minutes to decolourise completely"
                    inverted_pale_blue_tube.style.opacity = "100%";
                    closed_pale_blue_tube.style.opacity = "0%";
                      setTimeout(() => {
                           inverted_pale_blue_tube.style.opacity = "0%";
                    closed_pale_blue_tube.style.opacity = "100%";
                      setTimeout(() => {
                          inverted_pale_blue_tube.style.opacity = "100%";
                    closed_pale_blue_tube.style.opacity = "0%";
                      setTimeout(() => {
                          inverted_pale_blue_tube.style.opacity = "0%";
                    closed_pale_blue_tube.style.opacity = "100%";
                           setTimeout(() => {
                               tongs_down2.style.bottom = "36%";
                 tongs_upper2.style.bottom = "39%";
                   closed_pale_blue_tube.style.bottom = "23%";
                    setTimeout(() => {
                         closed_pale_blue_tube.style.bottom = "14.9%";
                         f = 558;
                         startFastCountdown3()
                           setTimeout(() => {
                              tongs_down2.style.left = "50%";
                 tongs_upper2.style.left = "50%";
                  setTimeout(() => {
                      tongs_down2.style.bottom = "12%";
                 tongs_upper2.style.bottom = "15%";
                     }, 1000);
                              }, 1000);
                        }, 1000);
                               }, 1000);
                            }, 1000);
                          }, 1000);
                          }, 1000);
                      }, 1000);
                      }, 1000);
                        }, 1000);
        }, 1000);
      }, { once: true });
    }else{console.log("not run white tube ..")}
      
    }, 2000); // starts after 1 sec
  }




 function startFastCountdown3() {
  if (f === 558) {
    f = 559;
    console.log("f is 559")
    let remainingSeconds = 0;  // 30*60  // 30 minutes = 1800 seconds
    const speed = 0; //10 // 1 simulated second = 10 ms (super fast)
    const display = document.getElementById("timerDisplay");
    const ins = document.getElementById("text"); // get your message element
    timerDisplay.style.opacity = "100%"

    console.log("⏳ Countdown started (fast 30-minute simulation)...");

    // Show instruction while timer runs
    ins.innerText = "⏳ Wait for 30 minutes to see if it decolourises completely or not.";

    const timer = setInterval(() => {
      // Decrease one simulated second
      remainingSeconds--;

      // Calculate minutes and seconds
      let minutes = Math.floor(remainingSeconds / 60);
      let seconds = remainingSeconds % 60;

      // Format to always show two digits
      let formattedTime =
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0");

      // Show on screen
      display.textContent = formattedTime;

      if (remainingSeconds <= 0) {
        clearInterval(timer);
        console.log("✅ Countdown complete!");
        display.textContent = "00:00 ✅ Done";
        ins.innerText = "Time complete! Check if it has decolourised.Now click on the tongs to see the tube is decolourise completely or not";
       
        f = 560;
        onFinished3()
      }
    }, speed);
  }
}

    // Start timer after a small delay
 function onFinished3() {   
    setTimeout(() => {
       ins.innerText = "Click on the tongs again to Check it decolourised completely or not"
       closed_light_blue_tube.style.opacity = "0%";
       closed_pale_blue_tube.style.opacity = "100%";
      if (f === 560) {
    f = 561;   tongs_down2.addEventListener("click", () => {
              setTimeout(() => {
                     tongs_down2.style.bottom = "36%";
                 tongs_upper2.style.bottom = "39%";
                 closed_pale_blue_tube.style.opacity = "0%"
                 closed_white_tube_b.style.opacity = "100%";
                  setTimeout(() => {
                     tongs_down2.style.left = "22%";
                 tongs_upper2.style.left = "22%";
                    setTimeout(() => {
                        tongs_down2.style.bottom = "63%";
                 tongs_upper2.style.bottom = "66%";
                 closed_white_tube_b.style.bottom = "60%";
                 ins.innerText ="Now also second tube is decolourised complete so placed it in stand"
                  setTimeout(() => {
                    closed_white_tube_b.style.height = "41%";
                    closed_white_tube_b.style.width = "2.1%"
                  setTimeout(() => {

                        tongs_down2.style.left = "69%";
                 tongs_upper2.style.left = "69%";
                 closed_white_tube_b.style.left = "69.5%";
                    setTimeout(() => {
                        tongs_down2.style.bottom = "34%";
                 tongs_upper2.style.bottom = "37%";
                  closed_white_tube_b.style.bottom = "16%";
                 setTimeout(() => {
                  closed_white_tube_b.style.bottom = "12%";
                  ins.innerText = "Now both tubes decolourise completely now the time to see the observations"
                     setTimeout(() => {
                       tongs_down2.style.left = "73%";
                 tongs_upper2.style.left = "73%";
                   setTimeout(() => {
                      tongs_down2.style.bottom = "54%";
                 tongs_upper2.style.bottom = "57%";
                     setTimeout(() => {
                        tongs_down2.style.left = "45%";
                 tongs_upper2.style.left = "45%";
                  setTimeout(() => {
                      tongs_down2.style.bottom = "14%";
                 tongs_upper2.style.bottom = "17%";
                  setTimeout(() => {
                    ins.innerText = "Experiment Ended !! see the observations"
                    observation_table_mbrt.style.opacity = "100%";
                      }, 1000);
                      }, 1000);
                         }, 1000);
                    }, 1000);
                        }, 1000);
                   }, 1000);
                      }, 1000);
                         }, 1000);
                        }, 1000);
                         }, 1000);   
                     }, 1000);   
              }, 1000);   
     }, );
    }else{console.log("not run white tube ..")}
      
    }, 2000); // starts after 1 sec
  }

}