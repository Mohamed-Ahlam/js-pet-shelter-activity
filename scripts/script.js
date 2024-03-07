document.addEventListener("DOMContentLoaded", function() {
    // Define an array to shelter your pets
    let petShelter = [];
  
    // Function to add a pet to the shelter - needs to have a param to add a name, type of animal, and age
    function addPet(name, type, age){
      let pet = {
      name: name,
      type: type,
      age: age};
      petShelter.push(pet);
      console.log(petShelter);
    }
  
    // Function to display pets in the shelter - given to you!
    function displayPets() {
      let petList = document.getElementById("pet-list");
      petList.innerHTML = ""; // Clear the previous pet list
  
      // Loop through each pet in the shelter and create a list item for each
      for(let i = 0; i<petShelter.length; i++){
        let pet = petShelter[i];
        let petHolder = document.createElement("li");   // do li bc li is the list we want to get 
        petHolder.textContent = `${pet.name} - ${pet.type} - ${pet.age}`;
        petList.appendChild(petHolder); //will assist with adding each pet item to be shown in the list on the browser
     }
    }

    // Add some sample pets to the shelter
    addPet("Fido", "Dog", 1); //example
    addPet("kitty", "cat", 2);
    addPet("fresno", "bird", 3);
    addPet("ginny", "rat", 4);
    // Display the pets in the shelter
    displayPets();

    //STRETCH GOALS:
    // Function to check if the pet shelter has animals that need homes (based on how many animals are in the shelter)
    
    function checkAnimals(){
      if(petShelter.length > 0){
        return true;
      }
      else{
        return false;
      }
    }
  
    // Check if the pet shelter has animals that need homes by calling the previous function
    console.log(checkAnimals());
  
   // Function to calculate the average age of pets in the shelter
    function averageAge(petShelter){
      let average = 0;
      for(let i = 0; i<petShelter.length; i++){
        let pet = petShelter[i]
        average += pet.age;
      }
      avAge = average/petShelter.length
    }
  
    // Calculate the average age of pets in the shelter by calling the previous function
    console.log(averageAge(petShelter));


  });
  
