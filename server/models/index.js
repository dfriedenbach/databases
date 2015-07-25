var db = require('../db');




module.exports = {
  messages: {
    get: function (callback) {
      var queryString = "SELECT messages.ID, users.username, messages.text, messages.roomname, messages.createdAt \
                        FROM messages, users WHERE messages.userID = users.ID;";
      // sends a query to the database and executes a callback when the query return
      db.query(queryString, function(err, results) {
        if (err) {
          throw err;
        } else {
          // send the results back to controllers
          // wait for query to have finished and return results
          console.log(callback);
          callback(results);
        }
      });
    }, // a function which produces all the messages
    post: function (data, callback) {
      // modify data object

      var queryString = "INSERT INTO messages \
                          (userID, text, roomname, createdAt) \
                          values ();";
      var queryArgs = [];
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

