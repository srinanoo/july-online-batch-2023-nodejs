const http = require('http');
const url = require('url');
const qs = require('querystring');
const Trainees = require('./traineesServerModule');

http.createServer((req, res) => {
    // console.log(req.url);
    if(req.url !== "/favicon.ico") {
        // console.log("First Node Server - Console...");

        // querystring
        // let qry = url.parse(req.url, true).query;
        // console.log(qry);
        // console.log(qry.name);
        // console.log(qry.age);
        // res.write(`Name: ${qry.name}, Age: ${qry.age}`);
        // res.end();

        // // post method (object way)
        // let body = "";
        // req.on('data', (chunk) => {
        //     body += chunk;
        //     // console.log(body);
        // });
        // req.on('end', () => {
        //     let qry = qs.parse(body);
        //     console.log(qry.name);
        //     console.log(qry.batch);
        //     res.write(`Name: ${qry.name}, Batch: ${qry.batch}`);
        //     res.end();
        // });

        // // post method (JSON way)
        // let body = "";
        // req.on('data', (chunk) => {
        //     body += chunk;
        //     // console.log(body);
        // });
        // req.on('end', () => {
        //     let qry = JSON.parse(body);
        //     console.log(qry.name);
        //     console.log(qry.timings);
        //     res.write(`Name: ${qry.name}, Timings: ${qry.timings}`);
        //     res.end();
        // });

        // if(req.url === "/createTrainee") {
        //     // res.write("Create Trainee route");
        //     // res.end();
        //     Trainees.CreateTrainee(req, res);
        // } else if(req.url === "/readTrainee") {
        //     // res.write("Read Trainee route");
        //     // res.end();
        //     Trainees.ReadTrainees(req, res);
        // } else if(req.url === "/updateTrainee") {
        //     // res.write("Update Trainee route");
        //     // res.end();
        //     Trainees.UpdateTrainee(req, res);
        // } else if(req.url === "/deleteTrainee") {
        //     // res.write("Delete Trainee route");
        //     // res.end();
        //     Trainees.DeleteTrainee(req, res);
        // } else {
        //     res.write("No Routes Match found!");
        //     res.end();
        // }
    }
}).listen(4000, () => console.log("Server is running on port: 4000"));