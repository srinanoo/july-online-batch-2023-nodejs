const http = require('http');

http.createServer((req, res) => {
    // console.log(req.url);
    if(req.url !== "/favicon.ico") {
        console.log("First Node Server - Console...");

        if(req.url === "/createTrainee") {
            res.write("Create Trainee route");
            res.end();
        } else if(req.url === "/readTrainee") {
            res.write("Read Trainee route");
            res.end();
        } else if(req.url === "/updateTrainee") {
            res.write("Update Trainee route");
            res.end();
        } else if(req.url === "/deleteTrainee") {
            res.write("Delete Trainee route");
            res.end();
        } else {
            res.write("First Node Server - Response...");
            res.end();
        }
    
    }
}).listen(4000, () => console.log("Server is running on port: 4000"));