function editload()
{   var admNo=document.getElementById("regno").value;
var adm=JSON.parse(admNo);
    var xhttp;  
  if (admNo == "") {
    document.getElementById("onpress").style.display = "none";
    return;
  }
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      
      }
    };
    xhttp.open("POST","" , true);
    xhttp.send(adm);
    xhttp.open("GET","",true);
    var data=xhttp.send();
    document.getElementById("onpress").style.display = "inline"  ;
    document.getElementById(co1).value=data[0];
    document.getElementById(co2).value=data[1];
    document.getElementById(co3).value=data[2];
    document.getElementById(co4).value=data[3];
    document.getElementById(co5).value=data[4];
    document.getElementById(co6).value=data[5];
    document.getElementById(aco1).value=data[6];
    document.getElementById(aco2).value=data[7];
    document.getElementById(aco3).value=data[8];
    document.getElementById(aco4).value=data[9];
    document.getElementById(aco5).value=data[10];
    document.getElementById(aco6).value=data[11];
}