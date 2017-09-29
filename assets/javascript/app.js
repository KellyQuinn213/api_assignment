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

// Call create buttong function to display the initial list of animals
createButton();

//-------------------- Begin coding elements for the AJAX calls ----------------------------
//On click handler for animal buttons
$(document).on("click", "button", function() {

    //Create variable for animal
    //Elements not being recognized because not in hard-coded HTML - Need Help
    var animal = $(this).attr("data-animal");
    //Create variable for query URL
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        animal + "&api_key=dc6zaTOxFJmzC&limit=10";

    console.log("Animal:" + animal);
    console.log("queryURL:" + queryURL);

    //Create AJAX call
    $.ajax({
            url: queryURL,
            method: "GET"
        })
        .done(function(response) {
            var results = response.data;
            console.log(response);

            //Create for-loop to go through response
            for (var i = 0; i < results.length; i++) {
                //Create variable for gif div
                var giphyDiv = $("<div>");

                //Create variable for rating
                var rating = results[i].rating;

                //Create <p> tag in jQuery to display rating
                var p = $("<p>").text("Rating: " + rating);

                //Create a variable for the animal image in jQuery <img> tag
                var animalImage = $("<img>");
                animalImage.attr("src", results[i].images.fixed_height.url);
                //animalImage.attr("data-animate", results[i].images.original_mp4.url);
                //animalImage.attr("data-still", results[i].images.original_still.url);
                //animalImage.attr("data-state", still);
                //animalImage.attr("class", gif);
                console.log(animalImage);

                $(".gif").on("click", function() {
                    // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
                    var state = $(this).attr("data-state");
                    // If the clicked image's state is still, update its src attribute to what its data-animate value is.
                    // Then, set the image's data-state to animate
                    // Else set src to the data-still value
                    if (state === "still") {
                        $(this).attr("src", $(this).attr("data-animate"));
                        $(this).attr("data-state", "animate");
                    } else {
                        $(this).attr("src", $(this).attr("data-still"));
                        $(this).attr("data-state", "still");
                    }
                });

                //prepend the p and img variable to the gif div
                giphyDiv.prepend(p);
                giphyDiv.prepend(animalImage);

                //preend the gif div to the original div for gif dump
                $("#animal-view").prepend(giphyDiv);

            }
        });
});