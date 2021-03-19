var monitorsListArray = ["Apple", "Peach", "Berry"];
function myMonitorsFunction(arr) {
    var newMonitorsList = [...arr];
    var monitorList = [];
    for (var i = 0; i < newMonitorsList.length; i++) {
        monitorList.push([newMonitorsList[i], i + 1]);
    }
    return monitorList;
}
console.log(myMonitorsFunction(monitorsListArray));
module.exports = myMonitorsFunction;