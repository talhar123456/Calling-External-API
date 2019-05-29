var http = require("http");

var a = http.createServer(function(req, res) {
  if (req.url == "/") {
    res.write("hello World");
    res.end();
  } else if (req.url == "/books") {
    res.write(JSON.stringify([{ name: "Talha", Age: 20 }]));
    res.end();
  } else if (req.url == "/posts") {
    request("https://jsonplaceholder.typicode.com/posts", function(
      error,
      response,
      body
    ) {
      console.log("error:", error); // Print the error if one occurred
      console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
      console.log("body:", body); // Print the HTML for the Google homepage.
      res.write(body);
      res.end();
    });
  }
});

var port = 3000;
a.listen(port); //the server object listens on port 8080
console.log(port);

var request = require("request");
