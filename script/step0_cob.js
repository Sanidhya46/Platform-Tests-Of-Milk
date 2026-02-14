// const tooltip = document.getElementById("tooltip");

// const equipmentNames = {
//   "pipette_familiar": "Pipette",
//   "waterbath_familiar": "Water Bath",
//   "milk_beaker_familiar": "Milk Beaker",
//   "clock_familiar": "Timer Clock",
//   "test_tube_familiar": "Test Tube"

//   };

// familiar();
// function familiar() {
//     if (f === 1001){
//         f = 1002;
//         console.log("familiar function running")
//         document.querySelectorAll(".equipment").forEach(item => {

//   item.addEventListener("mousemove", (e) => {

//     const name = equipmentNames[item.id];
//     tooltip.innerText = name;

//     // Convert mouse position to %
//     const xPercent = (e.clientX / window.innerWidth) * 100;
//     const yPercent = (e.clientY / window.innerHeight) * 100;

//     tooltip.style.left = (e.clientX + 10) + "px";  // smaller = closer
//   tooltip.style.top  = (e.clientY - 40) + "px";
//   tooltip.style.opacity = "1";
//   });

//   item.addEventListener("mouseleave", () => {
//     tooltip.style.opacity = "0";
//   });

// });
//     }else{console.log(" f for 1000 is not running now the value of f is", f)}
// }

// function closePopup() {
//     document.getElementById("familiarPopup").style.display = "none";
   
//     startbutton.style.visibility = "visible";
   

   
//   }