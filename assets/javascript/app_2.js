//Create variable array for topic
var topics = [];
//test console
console.log(topics);
//On click event that grabs the input value and stores it into variable: topics
$("button").on("click", function() {

//push user input into the array
//topics.push($("#animal-input"));
console.log(topics);
    //Append new button onto the page

    //Create variable for animal
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
                var gifDiv = $("<div>");

                //Create variable for rating
                var rating = results[i].rating;

                //Create <p> tag in jQuery to display rating
                var p = $("<p>").text("Rating: " + rating);
                
                //Create a variable for the animal image in jQuery <img> tag
                var animalImage = $("<img>");
                animalImage.attr("src", results[i].images.fixed_height.url);

                //prepend the p and img variable to the gif div
                gifDiv.prepend(p);
                gifDiv.prepend(animalImage);

                //prepend the gif div to the original div for gif dump
                $("#animal-view").prepend(gifDiv);

            }
        });

 //on click function for gif animate
 //Create variable for state
 //if/else statement for animating and pausing

});

});