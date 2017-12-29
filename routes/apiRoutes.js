var path = require('path');

// var popups = require('popups');

var friends = require('../data/friend.js');

module.exports = function(app) {
    app.get('/api/friend', function(req, res) {
        res.json(friends);
    });


    // A GET route to display a JSON of all possible friends.	

    app.post('/api/friend', function(req, res) {
            var newSurvey = req.body;
            console.log('newSurvey = ' + JSON.stringify(newSurvey));

            var userResponses = newSurvey["scores[]"];
            console.log('userResponses = ' + userResponses);

            // Compute best friend match
            var matchName = '';
            var matchPhoto = '';
            var totalDifference = 10000;


            for (var i = 0; i < friends.length; i++) {
                console.log('Friend = ' + JSON.stringify(friends[i]));

                // Compute differenes for each question
                var differences = 0;
                for (var a = 0; a < userResponses.length; a++) {
                    differences += Math.abs(friends[i].scores[a] - parseInt(userResponses[a]));
                }
                console.log('differences = ' + differences);

                // If lowest difference, record the friend match
                if (differences < totalDifference) {

                    console.log('Best Match = ' + differences);
                    console.log('Friend name = ' + friends[i].name);
                    console.log('Friend photo = ' + friends[i].photo);
                    // console.log('Friend score = ' + friends[i].score);

                    totalDifference = differences;
                    matchName = friends[i].name;
                    matchPhoto = friends[i].photo;
                }
            }
            // Add new user
            friends.push(newSurvey);
            res.json ({"Name": matchName, "Photo": matchPhoto});

            // Send appropriate response
  
        });

    };