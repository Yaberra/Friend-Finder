console.log("hello from friend finder")

$(document).ready(function() {
 $("#submitButton").on("click", function(event) {
        event.preventDefault();

        // Here we grab the form elements

        var newSurvey = {
            name: $("#userName").val().trim(),
            photo: $("#userPhoto").val().trim(),
            scores: [
                $("#Question1").val().trim(),
                $("#Question2").val().trim(),
                $("#Question3").val().trim(),
                $("#Question4").val().trim(),
                $("#Question5").val().trim(),
                $("#Question7").val().trim(),
                $("#Question8").val().trim(),
                $("#Question9").val().trim(),
                $("#Question10").val().trim()

            ]
        };

        console.log(newSurvey);

        // "POSTS" our form data to our express server.

        $.post('/api/friend', newSurvey)
            .done(function(data) {
                console.log('response = ' + JSON.stringify(data));

                // Show the name and photo of the best match: 
                $('#matchName').html(data.Name);
                $('#matchPhoto').attr("src", data.Photo);

                // Pop open the modal dialog
                $('#modal1').modal('open');

            });

        // clear the from when submitting 

        $("userName").val("");

        $("addPhoto").val("");

        $("#Question1").val("");

        $("#Question2").val("");

        $("#Question3").val("");

        $("#Question4").val("");

        $("#Question5").val("");

        $("#Question7").val("");

        $("#Question8").val("");

        $("#Question9").val("");

        $("#Question10").val("");

    });


});