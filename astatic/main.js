console.log("This is a script from A");
function reqListener () {
    console.log(this.responseText);
}



var oReq = new XMLHttpRequest();
oReq.open("GET", "http://b.com:30002", true, "Jonathan", "Ginsburg");
oReq.addEventListener("progress", updateProgress);
oReq.addEventListener("load", transferComplete);
oReq.addEventListener("error", transferFailed);
oReq.addEventListener("abort", transferCanceled);

// progress on transfers from the server to the client (downloads)
function updateProgress (oEvent) {
    if (oEvent.lengthComputable) {
        var percentComplete = oEvent.loaded / oEvent.total;
        // ...
    } else {
        // Unable to compute progress information since the total size is unknown
    }
}

function transferComplete(evt) {
    console.log(this, evt);
    console.log("The transfer is complete.");
}

function transferFailed(evt) {
    console.log("An error occurred while transferring the file.");
}

function transferCanceled(evt) {
    console.log("The transfer has been canceled by the user.");
}

oReq.send("Payload")
