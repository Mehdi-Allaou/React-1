/*

You are given three alternative functions to check the battery level of your computer (0-100%). They all provide the same result, but have different interfaces;

getBatteryLevelSync()
- returns the current battery level
getBatteryLevel(callback)
- returns nothing, but takes a callback with the signature function (error, currentBatteryLevel) { ... }
getBatteryLevelAsync()
- returns a promise of the current battery level
Provide a separate example for each of the functions, where you get the current battery level and log it to the console.


*/


let batteryLevel = 85;

function getBatteryLevelSync() {
    return `Your current battery level is ${batteryLevel} %`;
}

function f1(){
    return new Promise((resolve, reject) => {
        resolve(`Your current battery level is ${batteryLevel} %`)
    })
}

f1().then(result => console.log("f1 anropad med result = " + result))

//console.log(getBatteryLevelSync());

function getBatteryLevel(callback) {
    let error = undefined;
    if(batteryLevel < 0){
       error = "Battery level is not a valid value";
   }
   callback(error, batteryLevel);
}

function f2(callback){
    return new Promise((resolve, reject) => {
        let error = undefined;
        if(batteryLevel < 0){
            error = "Battery level is negative"
        }
        callback(error, batteryLevel)
        resolve();
    })
}

f2(callbackFunction).then(result => console.log("Callback exempel med promise är klar"));

function callbackFunction(error, batteryLevel) { 
    if(error)
        console.log(error);
    else
        console.log(`Your current battery level is ${batteryLevel} %`)
}

getBatteryLevel(callbackFunction);

function getBatteryLevelAsync() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result1 = getBatteryLevelSync();
            if(batteryLevel < 0)
                reject("Batterylevel f¨r inte vara mindre än noll");
            const result2 = getBatteryLevel((error, batteryLevel) => "batterylevel = " + batteryLevel);
            resolve({result1, result2});
        }, 2000)
    })
}

getBatteryLevelAsync().then((result) => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

// console.log("Border komma f<re Promise är kl\ar")



// console.log(getBatteryLevelSync());