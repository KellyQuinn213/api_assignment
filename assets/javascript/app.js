//Our array with the initial inputs
var topics = ["cat", "dog", "bird"];
console.log(topics);

//Function that generates button from the input
function createButton() {
	//Empty the div so there are not repeat displayed buttons
	$("#animal-buttons").empty();

        // Looping through the array of animals
        for (var i = 0; i < topics.length; i++) {

            //Dynamically generates buttons for each animal in the array.
            var newBtn = $("<button>");
            // Adding a class
         	newBtn.addClass("animal");
            // Adding a data-attribute with a value of the animal at index i
            newBtn.attr("data-animal", topics[i]);
            // Providing the button's text with a value of the animal at index i
            newBtn.text(topics[i]);
            // Adding the button to the HTML
            $("#animal-buttons").append(newBtn);
        }
    }

    // This function handles events when the add animal button is clicked
      $("#add-button").on("click", function(event) {
        // event.preventDefault() prevents the form from trying to submit itself.
        event.preventDefault();

        // This line will grab the text from the input box
        var animal = $("#animal-input").val().trim();

        // The animal from the textbox is then added to our array
        topics.push(animal);

        // calling renderButtons which handles the processing of our animal array
        createButton();

        //Log new array including the new entry
        console.log(topics);
      });

      // Calling the renderButtons function at least once to display the initial list of animals
      createButton();
 














