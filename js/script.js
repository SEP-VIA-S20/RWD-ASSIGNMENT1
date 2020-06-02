/*globals XMLHttpRequest:false*/
var document;

function readXML() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            showData(this);
        }
    };
    xhttp.open("GET", "xml/schedule.xml", true);
    xhttp.send();
}

function showData(xml) {
    var xmlDoc = xml.responseXML;
    var x = xmlDoc.getElementsByTagName("week");
    var listlength = x.length;
    
    var table = "<tr><th>Sunday</th><th>Monday</th><th>Tuesday</th><th>Wednesday</th><th>Thursday</th><th>Friday</th><th>Saturday</th></tr>";
    for (var i = 0; i < listlength; i++) { 
        table += 
            "<tr><td>" + 
            x[i].getElementsByTagName("groupName")[0].childNodes[0].nodeValue + 
            "</td><td>" +
            x[i].getElementsByTagName("groupTime")[0].childNodes[0].nodeValue +
            "</td></tr>";
  }
   document.getElementById("schedule").innerHTML = table;
}
readXML();