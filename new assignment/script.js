var xhr,url,data,i=0;
function createJSON(){
    let result = document.querySelector('.result');
    var co1 = parseInt(document.getElementById('co_1_total').value);
    var co2 = parseInt(document.getElementById('co_2_total').value);
    var co3 = parseInt(document.getElementById('co_3_total').value);
    var co4 = parseInt(document.getElementById('co_4_total').value);
    var co5 = parseInt(document.getElementById('co_5_total').value);
    var co6 = parseInt(document.getElementById('co_6_total').value);

    data = { 
        
        total_co:{
        co_1_total:co1,
        co_2_total:co2,
        co_3_total:co3,
        co_4_total:co4,
        co_5_total:co5,
        co_6_total:co6,
    },
    student:[]
    }; 
    console.log(data);
    
} 
function addToStudentList()
{   var studId=parseInt(document.getElementById('studNo'));
    var co1 = parseInt(document.getElementById('co_1').value);
    var co2 = parseInt(document.getElementById('co_2').value);
    var co3 = parseInt(document.getElementById('co_3').value);
    var co4 = parseInt(document.getElementById('co_4').value);
    var co5 = parseInt(document.getElementById('co_5').value);
    var co6 = parseInt(document.getElementById('co_6').value);
    data.student[i]={
        co1:co1,
        co2:co2,
        co3:co3,
        co4:co4,
        co5:co5,
        co6:co6
    }
    i=i+1;
    console.log(data);


}

function sendJSON(){ 
               
    let result = document.querySelector('.result'); 
    var dynamincId=document.getElementById('internalNo').value;
    // Creating a XHR object 

    xhr = new XMLHttpRequest(); 
    url = "/course/add_internal/"+dynamincId; 

    // open a connection
    xhr.open("POST", url, true);

    // Set the request header i.e. which type of content you are sending
    xhr.setRequestHeader("Content-Type", "application/json");

    // Create a state change callback
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {

            // Print received data from server
            result.innerHTML = this.responseText;

        }
    };

    // Converting JSON data to string
    var sendFile = JSON.stringify(data);

    // Sending data with the request
    xhr.send(sendFile);
}