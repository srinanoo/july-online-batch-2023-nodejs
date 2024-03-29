const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true})); // is responsible for reading the request body object - body parser
// extended : false - means its using the old package which is "body-parser", its deprecated
// extended : true - means its using the new package which is "qs"
app.use(express.json()); // is responsible for reading the request body object using the JSON way/data

// app.use("/readTrainee", Trainees.ReadTrainees);
// app.use("/createTrainee", Trainees.CreateTrainee);
// app.use("/updateTrainee", Trainees.UpdateTrainee);
// app.use("/deleteTrainee", Trainees.DeleteTrainee);

const TraineeRoutes = require('./routes/traineeRoutes');
app.use("/trainees", TraineeRoutes); // http://localhost:4000/trainees
// app.use("/trainers", Trainees.ReadTrainees);
// app.use("/classes", Trainees.ReadTrainees);


// app.use("/:name", (req, res) => {
//     res.send(`Name: ${req.params.name}`);
// });

app.use("/*", (req, res) => {
    //query string
    // let qry = req.query;
    // console.log(qry);
    // res.send(`Name: ${qry.name}, Age: ${qry.age}`);

    // // post method (object way)
    // let qry = req.body;
    // res.send(`Name: ${qry.name}, Batch: ${qry.batch}`);

    // post method (json way)
    // let qry = req.body;
    // res.send(`Name: ${qry.name}, Timings: ${qry.timings}`);
    res.send("Invalid Route! Please check your routes URL / API URL!")
});

app.listen(4000, () => console.log("Server is running on port: 4000"));