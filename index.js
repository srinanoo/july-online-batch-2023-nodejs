// console.log("First NodeJs Project Code.");

// const os = require('os'); // Operating System Module
// console.log(os);
// console.log(os.tmpdir());

const fs = require('fs'); // File System Module
// console.log(fs);

// File
    // create a File
        // Synchronous / Sequential
            // console.log("Before Creating...");
            // try {
            //     // fs.writeFileSync("sample.txt", "This is a sample data.");
            //     // console.log("File has been created successfully!");
            // } catch(err) {
            //     console.log(err.message);
            // }
            // console.log("After Creating...");

        // Asynchronous / Non-sequential
            // console.log("Before Creating...");
            // fs.writeFile("sample1.txt", "SOME OTHER DATA", (err) => {
            //     if(err) console.log(err.message);
            //     else console.log("File has been created successfully!");
            // });
            // console.log("After Creating...");

    // read a File
        // Synchronous / Sequential
            // console.log("Before Reading...");
            // try {
            //     let data = fs.readFileSync("sampleadsfasfsfsdf.txt", "utf8");
            //     console.log(data);
            // } catch(err) {
            //     console.log(err.message);
            // }
            // console.log("After Reading...");

        // Asynchronous / Non-sequential
            // console.log("Before Reading...");
            // fs.readFile("sample1sdfsdfsdfssd.txt", "utf8", (err, data) => {
            //     if(err) console.log(err.message);
            //     else console.log(data);
            // });
            // console.log("After Reading...");

    // appending (modifying / updating) data to a File
        // Synchronous / Sequential
            // console.log("Before Appending...");
            // try {
            //     fs.appendFileSync("sample.txt", " NEW DATA ADDED TO THE END OF THE FILE");
            //     console.log("File has been updated successfully!");
            // } catch(err) {
            //     console.log(err.message);
            // }
            // console.log("After Appending...");

        // Asynchronous / Non-sequential
            // console.log("Before Appending...");
            // fs.appendFile("sample1.txt", " ANOTHER DATA ADDED AT THE END.", (err) => {
            //     if(err) console.log(err.message);
            //     else console.log("File has been updated successfully!");
            // });
            // console.log("After Appending...");

    // delete a File
        // Synchronous / Sequential
            // console.log("Before Deleting...");
            // try {
            //     fs.unlinkSync("sample.txt");
            //     console.log("File has been deleted successfully!");
            // } catch(err) {
            //     console.log(err.message);
            // }
            // console.log("After Deleting...");

        // Asynchronous / Non-sequential
            // console.log("Before Deleting...");
            // fs.unlink("sample1.txt", (err) => {
            //     if(err) console.log(err.message);
            //     else console.log("File has been deleted successfully!");
            // });
            // console.log("After Deleting...");

// CRUD Operations
    // Create
    // Read
    // Update
    // Delete

/// Task for this week (14th Jan = 20th Jan)
    // Part 1
        // Create / Read / Append / Delete using the Sync/Async method of "fs" module

    // Part 2
        // Manually create a .json file with empty [] (array) in it.
            // Add data to this .json file using "object" variable
            // Read data from this .json file
            // Update data in this .json file
            // Delete data from this .json file