//Function executes on the submit form
function validateForm(){

    //Store field values in the variables
        var firstname = document.getElementById("fname").value;
        var lastname = document.getElementById("lname").value;
        var email =   document.getElementById("email").value;
        var select =   document.getElementById("query").value;
        var message =  document.getElementById("msgbox").value;
    
    //If first name is blank alert the user to enter a valid first name    
        if (firstname == null || firstname == "") {
            alert("Please enter a valid first name.");
            return false;
        }
    
    //If second name is blank alert the user to enter a valid first name 
        else if (lastname == null || lastname == "") {
            alert("Please enter a valid last name.");
            return false;
        }
    
    //If the email address does not contain an @ alert the user to enter a valid email address
        else if (email.indexOf("@") < 0){
            alert("Please enter a valid email address")
            return false;
        }
    
    //If the user does not select an option(ie chooses the selected option) alert them to choose a valid option
        else if (select==""){
            alert("Please select an query")
            return false;
        }
    
    //If the message box contains less than 15 characters alert the user that it must be longer    
        else if (message.length<15){
            alert("Message box must contain at least 15 characters")
            return false;
        }
    //If the user succesfully completes the form alert them that we will be in touch
        else{
            alert("Thank you for your message. We will be in touch as soon as we can")
            return true;
        }
    }