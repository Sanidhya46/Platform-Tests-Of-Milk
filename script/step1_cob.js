
const butyrometer_a = document.querySelector('#butyrometer_a');
const butyrometer_b = document.querySelector('#butyrometer_b');
const butyrometer_c = document.querySelector('#butyrometer_c');
const butyrometer_d = document.querySelector('#butyrometer_d');

const pipette_centrifuge = document.querySelector('#pipette_centrifuge');

const milk_sample_a_50ml = document.querySelector('#milk_sample_a_50ml');
const milk_sample_b_50ml = document.querySelector('#milk_sample_b_50ml');
const milk_sample_c_50ml = document.querySelector('#milk_sample_c_50ml');
const milk_sample_d_50ml = document.querySelector('#milk_sample_d_50ml');

const milk_sample_a_45ml = document.querySelector('#milk_sample_a_45ml');
const milk_sample_b_45ml = document.querySelector('#milk_sample_b_45ml');
const milk_sample_c_45ml = document.querySelector('#milk_sample_c_45ml');
const milk_sample_d_45ml = document.querySelector('#milk_sample_d_45ml');

const milk_a_5ml = document.querySelector('#milk_sample_a_5ml');
const milk_b_5ml = document.querySelector('#milk_sample_b_5ml');
const milk_c_5ml = document.querySelector('#milk_sample_c_5ml');
const milk_d_5ml = document.querySelector('#milk_sample_d_5ml');

const milk_tube_a = document.querySelector('#milk_tube_a');
const milk_tube_b = document.querySelector('#milk_tube_b');
const milk_tube_c = document.querySelector('#milk_tube_c');
const milk_tube_d = document.querySelector('#milk_tube_d');

const milk_strip_a = document.querySelector('#milk_strip_a');
const milk_strip_b = document.querySelector('#milk_strip_b');
const milk_strip_c = document.querySelector('#milk_strip_c');
const milk_strip_d = document.querySelector('#milk_strip_d');


const test_tube_a = document.querySelector('#test_tube_a_cob');
const test_tube_b = document.querySelector('#test_tube_b_cob');
const test_tube_c = document.querySelector('#test_tube_c_cob');
const test_tube_d = document.querySelector('#test_tube_d_cob');

const offSwitch3 = document.querySelector('#offSwitch3');
const onSwitch3 = document.querySelector('#onSwitch3');
const upOnSwitch3 = document.querySelector('#upOnSwitch3');
const upOffSwitch3 = document.querySelector('#upOffSwitch3');
const downSwitch3 = document.querySelector('#downSwitch3');

const yellow_milk_tube_b = document.querySelector('#yellow_milk_tube_b');

const yellow_milk_tube_d = document.querySelector('#yellow_milk_tube_d');

const a_cob_test = document.querySelector("#a_cob_test");
const b_cob_test = document.querySelector("#b_cob_test");
const c_cob_test = document.querySelector("#c_cob_test");
const d_cob_test = document.querySelector("#d_cob_test");

const a_quality = document.querySelector("#a_quality");
const b_quality = document.querySelector("#b_quality");
const c_quality = document.querySelector("#c_quality");
const d_quality = document.querySelector("#d_quality");

const a_texture = document.querySelector("#a_texture");
const b_texture = document.querySelector("#b_texture");
const c_texture = document.querySelector("#c_texture");
const d_texture = document.querySelector("#d_texture");

const a_color = document.querySelector("#a_color");
const b_color = document.querySelector("#b_color");
const c_color = document.querySelector("#c_color");
const d_color = document.querySelector("#d_color");


const observation_table_cob = document.querySelector('#observation_table_cob');
const homeBtn = document.querySelector('#homeBtn');

const inferenceBtn = document.querySelector('#inferenceBtn');
pipette1();

f = 0;

function pipette1() {
    if (f === 1) {
        f = 2; // Move to the next step so this function doesn't run again unintentionally
        console.log("pipette");

        pipette_centrifuge.addEventListener("click", () => {
           

          pipette_centrifuge.style.rotate =  "0.5deg"
            setTimeout(function(){
          pipette_centrifuge.style.bottom = "35%"
           setTimeout(function(){
          pipette_centrifuge.style.left = "10%"
          setTimeout(function(){
          pipette_centrifuge.style.bottom = "18%"
           setTimeout(function(){
              milk_a_5ml.style.height = "12.2%"
               milk_sample_a_50ml.style.height = "14.75%"
             
               setTimeout(function(){
                pipette_centrifuge.style.bottom = "60%"
                milk_a_5ml.style.bottom = "60%"
               
               
              
               
                
               if (f === 2) {
                f = 3;
                 setTimeout(function(){
                  milk_a_5ml.style.left = "70.4%"
                   pipette_centrifuge.style.left = "69.45%"
                    milk_a_5ml.style.width = "0.6%"
                    setTimeout(function(){
                     milk_a_5ml.style.bottom = "53.7%"
                      pipette_centrifuge.style.bottom = "53.5%"
                       setTimeout(function(){
                        milk_strip_a.style.height = "42.2%"
                     
                        milk_tube_a.style.visibility = "visible"
                        setTimeout(function(){
                          milk_a_5ml.style.opacity = "0%"
                            setTimeout(function(){
                               milk_tube_a.style.height = "18.8%"
                               test_tube_a_cob.style.display = "none"
                               butyrometer_a.style.display = "block"
                          setTimeout(function(){
                              
                             milk_strip_a.style.opacity = "0%"
                             pipette_centrifuge.style.bottom = "60%"
                              setTimeout(function(){
                                 pipette_centrifuge.style.left = "20.49%"
                                 
                                         if (f === 3) {
                f = 4;
                                                 setTimeout(function(){
                                                    // pipette_centrifuge.style.rotate = "0deg"
                                                    setTimeout(function(){
                                                      pipette_centrifuge.style.bottom = "22%"
                                                       setTimeout(function(){
                                                        //  pipette_centrifuge.style.left = "22.4%"
                                                          setTimeout(function(){
                                                            // pipette_centrifuge.style.bottom = "23%"
                                                            setTimeout(function(){
                                                              milk_b_5ml.style.height = "12.2%"
                                                                milk_sample_b_50ml.style.height = "14.75%"
                                                       
                                                              
                                                              setTimeout(function(){
                                                                pipette_centrifuge.style.bottom = "60%"
                                                                milk_b_5ml.style.bottom = "60%"
                                                               
                                                              setTimeout(function(){
                                                                  pipette_centrifuge.style.left= "73.1%"
                                                                  milk_b_5ml.style.left = "74.1%"
                                                                   setTimeout(function(){
                                                                     pipette_centrifuge.style.bottom = "50%"
                                                                milk_b_5ml.style.bottom = "50%"
                                                                
                                                                  setTimeout(function(){
                                                                     milk_strip_b.style.height = "42.2%"
                                                                  
                                                                     setTimeout(function(){
                                                                      milk_tube_b.style.height = "18.8%"
                                                                      milk_b_5ml.style.opacity = "0%"

                                                                      test_tube_b.style.display = "none"
                               butyrometer_b.style.display = "block"
                                                                      setTimeout(function(){
                                                                          milk_strip_b.style.opacity  = "0%"
                                                                         pipette_centrifuge.style.bottom = "62%"
                                                                milk_b_5ml.style.bottom = "62%"
                                                                 setTimeout(function(){
                                                                   pipette_centrifuge.style.left= "31.585%"
                                    //                                 

                   
                                                              if (f === 4) {
                f = 5;
                                                 setTimeout(function(){
                                                    // pipette_centrifuge.style.rotate = "0deg"
                                                    
                                                        //  pipette_centrifuge.style.left = "34.4%"
                                                          setTimeout(function(){
                                                             pipette_centrifuge.style.bottom = "18%"
                                                              setTimeout(function(){
                                                                milk_c_5ml.style.height = "12.2%"
                                                                milk_sample_c_50ml.style.height = "14.60%"
                                                              
                                                                setTimeout(function(){
                                                                  
                                                                   setTimeout(function(){
                                                                     milk_c_5ml.style.bottom = "60%"
                                                                       pipette_centrifuge.style.bottom = "60%"
                                                                        setTimeout(function(){
                                                                           milk_c_5ml.style.left = "77.67%"
                                                                       pipette_centrifuge.style.left = "76.7%"
                                                                             setTimeout(function(){
                                                                                   milk_c_5ml.style.bottom = "40%"
                                                                       pipette_centrifuge.style.bottom= "40%"
                                                                               setTimeout(function(){
                                                                                milk_strip_c.style.height =  "42.2%"
                                                                                milk_tube_c.style.height = "18.8%"
                                                                                      setTimeout(function(){
                                                                                        milk_c_5ml.style.height = "0%"
                                                                                        milk_strip_c.style.opacity = "0%"
                                                                                        test_tube_c.style.display = "none"
                               butyrometer_c.style.display = "block"
                                                                                           setTimeout(function(){
                                                                                               
                                                                       pipette_centrifuge.style.bottom= "63%"
                                                                                               setTimeout(function(){
                                                                                                  // pipette_centrifuge.style.left = "26.8%"
                                                                                          
                                                                                      if (f === 5) {
                f = 6;  
                                            
                 
                                                    
                                                       setTimeout(function(){
                                                           pipette_centrifuge.style.left = "43.5%"
                                                            setTimeout(function(){
                                                              pipette_centrifuge.style.bottom = "15.5%"
                                                                  setTimeout(function(){
                                                                     milk_d_5ml.style.height = "12.2%"
                                                                     milk_sample_d_50ml.style.height= "14.60%"
                                                                        setTimeout(function(){
                                                                       pipette_centrifuge.style.bottom = "62%"
                                                                       milk_d_5ml.style.bottom = "62%"
                                                                          setTimeout(function(){
                                                                              pipette_centrifuge.style.left= "80.3%"
                                                                     milk_d_5ml.style.left = "81.3%"
                                                                                   setTimeout(function(){
                                                                                       pipette_centrifuge.style.bottom = "42%"
                                                                     milk_d_5ml.style.bottom = "42%"
                                                                      setTimeout(function(){
                                                                                milk_strip_d.style.height = "37.2%"
                                                                               
                                                                                    setTimeout(function(){
                                                                                               milk_tube_d.style.height = "18.8%"
                                                                                               test_tube_d.style.display = "none"
                               butyrometer_d.style.display = "block"
                                                                                 setTimeout(function(){
                                                                                          milk_strip_d.style.opacity = "0%"
                                                                                          milk_d_5ml.style.opacity= "0%"
                                                                                             setTimeout(function(){
                                                                                                pipette_centrifuge.style.bottom = "62%"
                                                                                                    setTimeout(function(){
                                                                                              pipette_centrifuge.style.left= "30.3%"
                                                                                                         setTimeout(function(){
                                                                       pipette_centrifuge.style.bottom = "11%"
                                     setTimeout(function(){       
                                      pipette_centrifuge.style.rotate = "-90deg"
                                      setTimeout(function(){
                                         pipette_centrifuge.style.bottom = "-5%"

                                         startbutton.style.visibility="visible"
                                         startbutton.innerText="Next"
                                         ins.innerText="Click on Next button"
                                         f = 100;
                                         
                                          },1000)   // 1200
                                                                                              },1000)
                                                                                         }, 1000)
                                                                                                  }, 1000)
                                                                                              }, 1000)
                                                                                                 }, 1000)
                                                                                         }, 1000)
                                                                                 }, 1000)
                                                                                }, 1000)
                                                                           }, 1000)
                                                                             }, 1000)
                                                                        }, 1000)
                                                                     }, 1000)
                                                                  },  1000)
                                                             
                                                        
                                                        }
                                                   
                                                      }, 1000)
                                                                                   }, 1000)
                                                                         }, 1000)
                                                                                                }, 1000)
                                                                                   }, 1000)
                                                                         }, 1000)
                                                                                     }, 1000)
                                                                               }, 1000)
                                                                    }, 1000)
                                                               }, 1000)
                                                        
                                                                         }, 1000)
                                                                        }
                 
                                        
                                                                   }, 1000)
                                                                         }, 1000)
                                                                       }, 1000)
                                                                      }, 1000)
                                                                     },1000)
                                                                   }, 1000)
                                                                 }, 1000)
                                                                 }, 1000)
                                                             }, 1000)
                                                        }, 1000)
                                                    
                                      }, 1000)
                                     }, 1000)
                                    }
                                  }, 1000)
                             }, 1000)
                              }, 1000)
                          }, 1000)
                        }, 1000)
                       }, 1000)   //1200
                  }, 1000)
                }
                 }, 1000)
           }, 1000)
            }, 1000)
            }, 1000)
            }, 1000)
        }, { once: true });
}else{console.log("nothing")}};



function tubewaterbath() {
   ins.innerText = "tube water bath is running"
    
   waterbath_cob();


  
}

let currentTemp = 20;
let targetTemp = 100;
let timerStarted = false;
let countdownInterval;

// Hide everything at start

onSwitch3.style.visibility = "hidden";
setTempDisplay3.style.display = "none";
actualTempDisplay3.style.display = "none";
sampleTempDisplay3.style.display = "none";



function pulse(element) {
    element.classList.add("pulse-effect");
    setTimeout(() => {
        element.classList.remove("pulse-effect");
    }, 100);
}

function waterbath_cob() {
  f = 441;
  ins.innerText = "Click on the off switch of water bath to on it "
offSwitch3.addEventListener("click", () => {
    if (f === 441) {
        f = 152;
        offSwitch3.style.visibility = "hidden";
        onSwitch3.style.visibility = "visible";
        pulse(onSwitch3);
    }

    onSwitch3.style.opacity = "100%";
    pulse(onSwitch3);
      console.log("displaying")
    setTempDisplay3.style.display = "block";
    setTempDisplay3.style.visibility = "visible";
    actualTempDisplay3.style.display = "block";
    sampleTempDisplay3.style.display = "block";
    upOffSwitch3.style.display = "block";

    setTempDisplay3.textContent = `${currentTemp}°C`;
    actualTempDisplay3.textContent = `${currentTemp}°C`;
    sampleTempDisplay3.textContent = `${currentTemp}°C`;

    ins.innerText = "Click the ↑ button symbol to raise PV temperature to 100°C";
});

// TEMP UP → Increment Set Temp
upOffSwitch3.addEventListener("click", () => {
    if (f === 152 && currentTemp < targetTemp) {
         console.log("upoff switch")
        currentTemp  += 2;
        ins.innerText = "Again Click ↑ button to raise temperature to 100°C"
        sampleTempDisplay3.textContent = `${currentTemp}°C`;
        pulse(upOffSwitch3);

        if (currentTemp === targetTemp && !timerStarted) {
            f = 153;
            timerStarted = true;
            ins.innerText = "Click on the Set button to set SV temperature to 100°C";
            setOff3.addEventListener("click", () => {
               pulse(setOff3)
              console.log("set button active")
            startHoldingTimer(3); // Start 2 min timer
            f = 201;
            // latex_beaker()
              
            },  { once: true })
        }
    }
});

// ⏲️ Start Countdown Timer

}

function startHoldingTimer(minutes) {
    let seconds = minutes * 60;
    let currentTemp = 20; // Starting temperature
    const targetTemp = 100;

    
    actualTempDisplay3.style.display = "block"; // Optional if you have a bath temp display
   
    // 🔥 Interval to increase bath temperature slowly
    const tempInterval = setInterval(() => {
        if (currentTemp < targetTemp) {
            currentTemp += 2; // Increase temp slowly
          actualTempDisplay3.textContent = `${currentTemp.toFixed(1)}°C`;
        } else {
            clearInterval(tempInterval);
            actualTempDisplay3.textContent = `${targetTemp.toFixed(1)}°C`;
        }
    } , 400  ); //400  480 every 0.5s adjust as needed

    // ⏲️ Countdown Timer
    const countdownInterval = setInterval(() => {
       timerDisplay13.style.visibility = "visible";
        let min = Math.floor(seconds / 60);
        let sec = seconds % 60;
        // timerDisplay13.textContent = `Timer - ${min}:${sec < 10 ? "0" : ""}${sec}`;
        seconds--;

        if (seconds < 0) {
            clearInterval(countdownInterval);
            clearInterval(tempInterval); // Stop temperature interval too
            timerDisplay13.textContent = "05:00";
            ins.innerText = "Click on the tube A to put all tubes into water bath to heat all the sample tubes at 100°C for 5 minutes";
            pulse(ins); // your existing animation
            
            
        }
    }, 100);  //100
}

butyrometer_a.addEventListener("click", () => {
    if (f === 201) {
        console.log("butyrometer_a clicked");
        f = 202;
        milk_tube_a.style.transition = "1s all"
         milk_tube_b.style.transition = "1s all"
          milk_tube_c.style.transition = "1s all"
           milk_tube_d.style.transition = "1s all"

       butyrometer_a.style.bottom = "50%";
       milk_tube_a.style.bottom = "50%";
         setTimeout(() => {
          milk_tube_a.style.left = "14%";
       butyrometer_a.style.left = "14%";
         setTimeout(() => {
       butyrometer_a.style.height = "23.5%";
       butyrometer_a.style.width = "1.45%";
       milk_tube_a.style.width = "1.5%";
       milk_tube_a.style.height = "10%";
          setTimeout(() => {
            butyrometer_a.style.bottom = "18%";
            milk_tube_a.style.bottom  = "18%";
            
            setTimeout(() => {
               butyrometer_b.style.bottom = "50%";
                milk_tube_b.style.bottom = "50%";
                setTimeout(() => {
               butyrometer_b.style.left = "18%";
                milk_tube_b.style.left = "18%";
                setTimeout(() => {
               butyrometer_b.style.height = "23.5%";
               butyrometer_b.style.width = "1.45%";

                 milk_tube_b.style.width = "1.5%";
       milk_tube_b.style.height = "10%";
                setTimeout(() => {
               butyrometer_b.style.bottom = "18%";
               milk_tube_b.style.bottom  = "18%";
                setTimeout(() => {
               butyrometer_c.style.bottom = "50%";
                milk_tube_c.style.bottom = "50%";
                setTimeout(() => {
               butyrometer_c.style.left = "22.5%";
                  milk_tube_c.style.left = "22.5%";
                setTimeout(() => {
               butyrometer_c.style.height = "23.5%";
               butyrometer_c.style.width = "1.45%";

                       milk_tube_c.style.width = "1.5%";
       milk_tube_c.style.height = "10%";
                setTimeout(() => {
               butyrometer_c.style.bottom = "18%";
                 milk_tube_c.style.bottom  = "18%";
                 setTimeout(() => {
               butyrometer_d.style.bottom = "50%";
                   milk_tube_d.style.bottom = "50%";
                setTimeout(() => {
               butyrometer_d.style.left = "26.5%";
                milk_tube_d.style.left = "26.5%";
                setTimeout(() => {
               butyrometer_d.style.height = "23.5%";
               butyrometer_d.style.width = "1.45%";

                       milk_tube_d.style.width = "1.5%";
       milk_tube_d.style.height = "10%";
                setTimeout(() => {
               butyrometer_d.style.bottom = "18%";
                milk_tube_d.style.bottom =  "18%";

               startHoldingTimer2(5);
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
              }, 1000);
           }, 1000);
       }, 1000);

    }
});


function startHoldingTimer2(minutes) {
    let seconds2 = minutes * 60;
    let currentTemp2 = 20; // Starting temperature
    const targetTemp2 = 100;

    
    actualTempDisplay3.style.display = "block"; // Optional if you have a bath temp display
   
    // 🔥 Interval to increase bath temperature slowly
    const tempInterval = setInterval(() => {
        if (currentTemp2 < targetTemp2) {
            currentTemp2 += 2; // Increase temp slowly
          
          actualTempDisplay3.textContent = `${currentTemp.toFixed(1)}°C`;
        } else {
            clearInterval(tempInterval);
            actualTempDisplay3.textContent = `${targetTemp.toFixed(1)}°C`;
        }
    } , 400  ); //  480 every 0.5s adjust as needed

    // ⏲️ Countdown Timer
    const countdownInterval = setInterval(() => {
       timerDisplay13.style.visibility = "visible";
        let min = Math.floor(seconds2 / 60);
        let sec = seconds2 % 60;
        timerDisplay13.textContent = `${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
          ins.innerText = "⏳ Wait for 5 minutes to heat all the tubes at 100°C";
        seconds2--;

        if (seconds2 < 0) {
            clearInterval(countdownInterval);
            clearInterval(tempInterval); // Stop temperature interval too
            timerDisplay13.textContent = "";
            ins.innerText = "✅ Tubes are heated. Now click on Tube A to gently remove all the tubes without shaking and view the observations.";

            pulse(ins); // your existing animation
            f = 220;
            
        }
    }, 100);  //100
}

butyrometer_a.addEventListener("click", () => {
    if (f === 220) {
        console.log("butyrometer_a clicked for f is 220");
        f = 220.5;
       yellow_milk_tube_b.style.visibility =  "visible"
        yellow_milk_tube_b.style.opacity =  "100%"
        butyrometer_b.style.visibility = "hidden";
        butyrometer_b.style.opacity = "0%";
        
         yellow_milk_tube_d.style.visibility =  "visible"
        yellow_milk_tube_d.style.opacity =  "100%"
        butyrometer_d.style.visibility = "hidden";
        butyrometer_d.style.opacity = "0%";

        butyrometer_a.style.bottom = "54%";
        milk_tube_a.style.bottom = "54%";
            setTimeout(() => {
                butyrometer_a.style.height = "45%"
                 butyrometer_a.style.width = "2.51%"

                 milk_tube_a.style.height = "20.5%"
                  milk_tube_a.style.width = "2.53%"

                   setTimeout(() => {
                    butyrometer_a.style.left = "69.47%";
                    milk_tube_a.style.left = "69.47%";

                      setTimeout(() => {
                             butyrometer_a.style.bottom = "11.8%"
                             milk_tube_a.style.bottom = "11.8%"
                               yellow_milk_tube_b.style.bottom = "54%";
            setTimeout(() => {
                yellow_milk_tube_b.style.height = "45%"
                 yellow_milk_tube_b.style.width = "2.51%"
                   setTimeout(() => {
                    yellow_milk_tube_b.style.left = "73.2%"
                      setTimeout(() => {
                             yellow_milk_tube_b.style.bottom = "11.8%"



                               butyrometer_c.style.bottom = "54%";
                                milk_tube_c.style.bottom = "54%";
            setTimeout(() => {
                butyrometer_c.style.height = "45%"
                 butyrometer_c.style.width = "2.51%"

                      milk_tube_c.style.height = "20.5%"
                  milk_tube_c.style.width = "2.53%"
                   setTimeout(() => {
                    butyrometer_c.style.left = "76.8%"
                    milk_tube_c.style.left = "76.8%"
                      setTimeout(() => {
                             butyrometer_c.style.bottom = "11.8%"
                              milk_tube_c.style.bottom = "11.8%"


                                         yellow_milk_tube_d.style.bottom = "54%";
            setTimeout(() => {
                yellow_milk_tube_d.style.height = "45%"
                 yellow_milk_tube_d.style.width = "2.51%"
                   setTimeout(() => {
                    yellow_milk_tube_d.style.left = "80.40%"
                      setTimeout(() => {
                             yellow_milk_tube_d.style.bottom = "11.8%"
                           
                                         setTimeout(() => {
                                 ins.innerText = "✅ Experiment Ended !! Now See the Observation Table Of all samples"
                                 observation_table_cob.style.visibility = "visible"
                                //  homeBtn.style.visibility = "visible";
                                stp49.style.visibility = "hidden"
                                stp49.style.display = "none"

                                milk_tube_b.style.display = "none"
                                milk_tube_d.style.display = "none"
                                 ins.innerText = "Click on the Observe Sample A button to observe it"
                                   
                                 
                                  
                             
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
                 }, 1000);
    }
  })



function observeA(){
  if(f=== 220.5){
    f = 220.8;
     hello_world();
     setTimeout(() => {
  showValues("A");
      
  setTimeout(() => {
    if(f=== 220.9){
    f = 221;
    showCob("A");
    }
  }, 4000);
   }, 3000);
  }
}

function observeB(){
  if(f=== 221){
    f = 221.5;
    ins.innerText = "Click on Observe Sample B button to observe it"
     hello_world2();
     setTimeout(() => {
  
      
  
   }, 3000);
  }
}

function observeC(){
  if(f === 222){
    f = 222.5;
    ins.innerText = "Click on the Observe Sample C button to observe it"
     hello_world3();
     
  }
}

function observeD(){
  if(f === 222.8){
    f = 223;
    ins.innerText = "Click on the Observe Sample D button to observe it"
     hello_world4();
     
  }
}

function showValues(sample) {
  document.getElementById("texture-" + sample).style.visibility = "visible";
  document.getElementById("color-" + sample).style.visibility = "visible";
  document.getElementById("quality-" + sample).style.visibility = "visible";
}

function showCob(sample) {
  document.getElementById("cob-" + sample).style.visibility = "visible";
}


  function hello_world(){
  if (f === 220.8) {
                                    console.log("f for 221 is running")
                                    
                                     milk_tube_a.style.bottom = "40%"
                                     butyrometer_a.style.bottom = "40%"
                                     setTimeout(() => {
                                      milk_tube_a.style.left = "44%"
                                      butyrometer_a.style.left = "44%"
                                      setTimeout(() => {
                                        milk_tube_a.style.height = "27%"
                                        milk_tube_a.style.width = "4%"

                                        butyrometer_a.style.height = "65%"
                                        butyrometer_a.style.width = "4%"
                                        
                                        
                                          setTimeout(() => { 
                                          butyrometer_a.style.height = "45%"
    butyrometer_a.style.width = "2.51%"

    milk_tube_a.style.height = "20.5%"
    milk_tube_a.style.width = "2.53%"
    setTimeout(() => {
    butyrometer_a.style.left = "69.47%"
    milk_tube_a.style.left = "69.47%"
    setTimeout(() => {
      butyrometer_a.style.bottom = "11.8%"
      milk_tube_a.style.bottom = "11.8%"
       f = 220.9;
       }, 1000);
        }, 1000);
                                    }, 2000);
                                      }, 1000);
                                    }, 1000);
                                     
                                  }else{console.log("the value of f is not 221", f)}
                                }

  function hello_world2(){
  if (f === 221.5) {
                                    console.log("f for 221 is running")
                                    
                                      
         yellow_milk_tube_b.style.bottom = "40%"
                                     setTimeout(() => {
                                      yellow_milk_tube_b.style.left = "44%"
  
                                      setTimeout(() => {
                                        yellow_milk_tube_b.style.bottom = "35%"

                                       
                                        
                         
                                          setTimeout(() => { 
                             yellow_milk_tube_b.style.height = "65%"
    yellow_milk_tube_b.style.width = "3.2%"
    showValues("B");
     setTimeout(() => {
      yellow_milk_tube_b.style.height = "45%"
    yellow_milk_tube_b.style.width = "2.7%"
    setTimeout(() => {
   yellow_milk_tube_b.style.left = "73%"
   
      setTimeout(() => {
      yellow_milk_tube_b.style.bottom = "11.8%"
      f = 222;
      showCob("B"); 
         }, 1000);
      }, 1000);
       }, 2000);
       
       
                                    }, 1000);
                                      }, 1000);
                                    }, 1000);
                                     
                                  }else{console.log("the value of f is not 221", f)}
                                }

  function hello_world3(){
  if (f === 222.5) {
                                    console.log("f for 222 is running")
                                    
                                      
      butyrometer_c.style.bottom = "40%"
        milk_tube_c.style.bottom = "40%"
        setTimeout(() => {
          butyrometer_c.style.left = "44%"
          milk_tube_c.style.left = "44%"
          setTimeout(() => {
            butyrometer_c.style.height = "64%"
            butyrometer_c.style.width = "4%"
        
            milk_tube_c.style.height = "30.5%"
            milk_tube_c.style.width = "4%"

            butyrometer_c.style.bottom = "38%"
            milk_tube_c.style.bottom = "38%"
     showValues("C");
 setTimeout(() => {
   
       butyrometer_c.style.height = "45%"
    butyrometer_c.style.width = "2.51%"

    milk_tube_c.style.height = "20.5%"
    milk_tube_c.style.width = "2.53%"

    
    setTimeout(() => {
    
      butyrometer_c.style.left = "77%"
      milk_tube_c.style.left = "77%"
    setTimeout(() => {
    
      butyrometer_c.style.bottom = "11.8%"
      milk_tube_c.style.bottom = "11.8%"
      f = 222.8;
      showCob("C"); 
      }, 1000);
       }, 2000);
       
        }, 2000);
                                    }, 1000);
                                      }, 1000);
                                   
                                     
                                  }else{console.log("the value of f is not 221", f)}
                                }

  function hello_world4(){
  if (f === 223) {
                                    console.log("f for 223 is running")
                                    
                                      
     yellow_milk_tube_d.style.bottom = "40%"
        setTimeout(() => {
          yellow_milk_tube_d.style.left = "44%"
         
          setTimeout(() => {
            yellow_milk_tube_d.style.height = "69%"
            yellow_milk_tube_d.style.width = "4.5%"
            yellow_milk_tube_d.style.bottom = "35%"
            showValues("D");
            setTimeout(() => {
     
  yellow_milk_tube_d.style.height = "45%"
    yellow_milk_tube_d.style.width = "2.7%"
    setTimeout(() => {
    
    yellow_milk_tube_d.style.left = "80.3%"
    setTimeout(() => {
    
      yellow_milk_tube_d.style.bottom = "11.8%"
      f = 224;
      showCob("D"); 
      ins.innerText = "Click on the Show Inference button"
        setTimeout(() => {
          
      inferenceBtn.style.visibility = "visible";
      stp16.style.visibility = "hidden"
  stp16.style.display = "none"
  stp15.style.display = "none"
  milk_tube_a.style.display = "none"
  milk_tube_c.style.display = "none"
    }, 1000);
       }, 1000);
       
        }, 1000);
                                    }, 2000);
                                       }, 1000);
                                      }, 1000);
                                   
                                     
                                  }else{console.log("the value of f is not 221", f)}
                                }



function showInference() {
  if(f === 224){
  document.getElementById("inferenceBox").classList.remove("hidden");
  
  }else{console.log("f is not 224", f)}
}



