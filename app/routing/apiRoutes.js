

//imports list of friend entries
var friends = require("../data/friends.js");

//API Routes
module.exports = function(app) {
    //total list of friends
    app.get("/api/friends", function(req, res){
        res.json(friends);
    });

    //Adds new friend entry
    app.post("/api/friends", function(req, res){

        var bestMatch = {
                name: "",
                photo: "",
                friendDifference: 1000

        };
            var user = req.body;
            var userName = user.name;
            var userPhoto = user.photo;     
            var userScores = user.scores;
            
            var totalDiff = 0;
    
            
        //compares current user response to existing ones in friends list
        for (var i = 0; i < friends.length; i++) {
                console.log(friends[i].name);
                 totalDiff = 0;
        //loop through scores of each friend and calculate the difference between scores
        for (var j = 0; j < friends[i].scores[j]; j++) {
                totalDiff += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
            
        
            if (totalDiff <= bestMatch.friendDifference) {
                // Reset the bestMatch to be the new friend. 
                  bestMatch.name = friends[i].name;
                  bestMatch.photo = friends[i].photo;
                  bestMatch.friendDifference = totalDiff;
                }
              }
            }

            
            //Adds new friend
        friends.push(user);
        //sends response
        res.json(bestMatch);
    });   
    
};