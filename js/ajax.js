// JavaScript Document

window.onload = function() {

    //fetch json
    document.getElementById("button").onclick = function() {

        var adr = 'https://jsonplaceholder.typicode.com/posts';
        
        fetch(adr).then(function(response) {

            console.log(response);
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Error encountered");
            }
        }).then(function(data) {
            
            console.log(data);
            
            if(data.length) {
                
                for(let i of data) {

                    //create a DOM element with obtained data
                    var newItem = document.createElement("tr");

                    var td1 = document.createElement("td");
                    td1.innerText = i.id;
                    var td2 = document.createElement("td");
                    td2.innerText = i.userId;
                    var td3 = document.createElement("td");
                    td3.innerText = i.title;

                    newItem.appendChild(td1);
                    newItem.appendChild(td2);
                    newItem.appendChild(td3);

                    document.querySelector("#table1").appendChild(newItem);
                }
            }
            
            

        })
                .catch(function(error) {
                    alert(error);
                });

    }

}
