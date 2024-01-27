const fs = require('fs');
const traineesFile = "./trainees.json";

// Create Trainee
function CreateTrainee() {
    console.log("Creating Trainee...");

    try {
        fs.readFile(traineesFile, "utf8", (err, data) => {
            if(err) console.log(err);
            else {
                let traineesData = JSON.parse(data);

                let traineeObj = {
                    "name": "Prem",
                    "age": 18,
                    "email": "sudha@gmail.com",
                    "batch": "December",
                    "mode": "Online",
                    "year": 2023,
                    "timings": "3-5pm"
                }

                let resultArr = traineesData.filter(v => traineeObj.email === v.email);

                if(resultArr.length > 0) 
                    console.log("Trainee already exists!");
                else {
                    traineesData.push(traineeObj);
                    fs.writeFile(traineesFile, JSON.stringify(traineesData), (err) => {
                        if(err) console.log(err);
                        else
                            console.log("Trainee has been added successfully!");
                    });
                }

            }
        });
    } catch (err) {
        console.log("Error: " + err.message);
    }
}

// Read Trainees (all trainees)
function ReadTrainees() {
    console.log("Reading Trainees...");
    try {
        fs.readFile(traineesFile, "utf8", (err, data) => {
            if(err) console.log(err);
            else {
                let traineesData = JSON.parse(data);
                console.log(traineesData);
            }
        });
    } catch (err) {
        console.log("Error: " + err.message);
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
}

// Delete Trainee
function DeleteTrainee() {
    console.log("Deleting Trainee...");
}

// CreateTrainee();
// ReadTrainees();
ReadSpecificTrainee("Prem");
// UpdateTrainee();
// DeleteTrainee();