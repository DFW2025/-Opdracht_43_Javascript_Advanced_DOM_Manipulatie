// JAVASCRIPT

// DEEL 1  Adding Elements

// Select all buttons (array)

const btns = document.querySelectorAll(".big-five-button");

// Function

let animalSpotted = function () {
  let newLi = document.createElement("li");                     // Create new li element
  let menu = document.getElementById("spotted-animals-list");   // Where we put it in place
  menu.append(newLi);                                           // Push the new li in place
  newLi.innerHTML = this.innerHTML;                             // Input the field value
};


// Use forEach() to add a click event listener to each button and execute the function.

btns.forEach( function (btn) { btn.addEventListener("click", animalSpotted )});


// DEEL 2  Removing the first Child Element


// Select the button.

const btns2 = document.getElementById("remove-first-item-button"); 

// Function 

let animalSpottedDeleted = function () {
  let parent = document.getElementById("spotted-animals-list");   // Select parent 
  let child = parent.getElementsByTagName("li")[0];               // Select Child 
  parent.removeChild(child);                                      // Remove first Child                                         

};

// Add a click event listener to the button and execute the function.

btns2.addEventListener( "click", animalSpottedDeleted );



// DEEL 3 Removing all Child Elements

// Select buttons 

const btns3 = document.getElementById("remove-all-button");
const parent2 = document.getElementById("spotted-animals-list");

// Select the parent item and then remove all the child items.

let animalSpottedAllDeleted = function () {                               
    while (parent2.firstChild) {                                            // Select parent and while loop to remove all children.
                                parent2.removeChild(parent2.firstChild);
                               }

};

// Add a click event listener to the button and execute the function.

btns3.addEventListener("click", animalSpottedAllDeleted );