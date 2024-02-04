const fs = require('fs');
const traineesFile = "./trainees.json";

// Create Trainee
function CreateTrainee(req, res) {
    // console.log("Creating Trainee...");

    try {
        fs.readFile(traineesFile, "utf8", (err, data) => {
            if(err) console.log(err);
            else {
                let traineesData = JSON.parse(data);

                let traineeObj = {
                    "name": "Shivani",
                    "age": 22,
                    "email": "shivani@gmail.com",
                    "batch": "January",
                    "mode": "Online",
                    "year": 2024,
                    "timings": "5-7pm"
                }

                let resultArr = traineesData.filter(v => traineeObj.email === v.email);

                if(resultArr.length > 0) {
                    console.log("Trainee already exists!");
                    res.send("Trainee already exists!");
                } else {
                    traineesData.push(traineeObj);
                    fs.writeFile(traineesFile, JSON.stringify(traineesData), (err) => {
                        if(err) {
                            console.log(err);
                            res.send(err);
                        } else {
                            console.log("Trainee has been added successfully!");
                            res.send("Trainee has been added successfully!");
                        }
                    });
                }

            }
        });
    } catch (err) {
        console.log("Error: " + err.message);
        res.send("Error:" + err.message);
    }
}

// Read Trainees (all trainees)
function ReadTrainees(req, res) {
    console.log("Reading Trainees...");
    try {
        fs.readFile(traineesFile, "utf8", (err, data) => {
            if(err) {
                console.log(err);
                res.send(err);
            } else {
                let traineesData = JSON.parse(data);
                console.log(traineesData);
                res.json(traineesData);
            }
        });
    } catch (err) {
        console.log("Error: " + err.message);
        res.send("Error:" + err.message);
    }
}

// Read Specific Trainees (get only that specific trainee data)
function ReadSpecificTrainee(name) {
    console.log("Reading Specific Trainees...");

    try {
        fs.readFile(traineesFile, "utf8", (err, data) => {
            if(err) console.log(err);
            else {
                // data // the entire trainee data from trainess.json
                // name // we have the runtime data to be used for reading a specific trainee
                let traineesData = JSON.parse(data);

                // Option 1
                // let resultArr = [];
                // traineesData.forEach((v) => {
                //     if(name === v.name) {
                //         resultArr.push(v);
                //     }
                // });

                // Option 2
                let resultArr = traineesData.filter(v => name === v.name);

                if(resultArr.length > 0) 
                    console.log(resultArr);
                else
                    console.log("No Trainee Found!");
            }
        });
    } catch (err) {
        console.log("Error: " + err.message);
    }
}

// Update / Edit Trainee
function UpdateTrainee() {
    console.log("Updating Trainee...");

    try {
        fs.readFile(traineesFile, "utf8", (err, data) => {
            if(err) console.log(err);
            else {
                // data // the entire trainee data from trainess.json
                // name // we have the runtime data to be used for reading a specific trainee
                let traineesData = JSON.parse(data);

                let obj = {
                    "email": "srinanoo@gmail.com",
                    "name": "Dinesh - New DATA",
                }

                for(let i = 0; i < traineesData.length; i++) {
                    if(traineesData[i].email === obj.email) {
                        // console.log("Match found!");
                        traineesData[i] = obj;
                    }
                }

                // console.log(traineesData);
                fs.writeFile(traineesFile, JSON.stringify(traineesData), (err) => {
                    if(err) console.log(err);
                    else
                        console.log("Trainee has been updated successfully!");
                });

                // let resultArr = traineesData.filter((v,i) => email === v.email);

                // if(resultArr.length > 0) 
                //     console.log(resultArr);
                // else
                //     console.log("No Trainee Found!");
            }
        });
    } catch (err) {
        console.log("Error: " + err.message);
    }
}

// Delete Trainee
function DeleteTrainee(email) {
    console.log("Deleting Trainee...");

    try {
        fs.readFile(traineesFile, "utf8", (err, data) => {
            if(err) console.log(err);
            else {
                // data // the entire trainee data from trainess.json
                // name // we have the runtime data to be used for reading a specific trainee
                let traineesData = JSON.parse(data);

                for(let i = 0; i < traineesData.length; i++) {
                    if(traineesData[i].email === email) {
                        // console.log("Match found!");
                        traineesData.splice(i, 1);
                    }
                }

                // console.log(traineesData);
                fs.writeFile(traineesFile, JSON.stringify(traineesData), (err) => {
                    if(err) console.log(err);
                    else
                        console.log("Trainee has been deleted successfully!");
                });

                // let resultArr = traineesData.filter((v,i) => email === v.email);

                // if(resultArr.length > 0) 
                //     console.log(resultArr);
                // else
                //     console.log("No Trainee Found!");
            }
        });
    } catch (err) {
        console.log("Error: " + err.message);
    }
}

module.exports = {
    CreateTrainee,
    ReadTrainees,
    ReadSpecificTrainee,
    UpdateTrainee,
    DeleteTrainee
};