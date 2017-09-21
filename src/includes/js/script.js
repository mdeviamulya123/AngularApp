/*

My Custom JS
============

Author:  Brad Hussey
Updated: August 2013
Notes:	 Hand coded for Udemy.com

*/
$(function() {
	$('#alertMe').click(function(e) {
		e.preventDefault();
		$('#successAlert').slideDown();

	});
	

});


function validateForm() {

    {var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;}
    }
    


    {var x = document.forms["myForm"]["inputContact"].value;
    if (x == "") {
        alert("Valid phone number must be filled out");
        return false;}
    }
    



    {var x = document.forms["myForm"]["inputIdeaAndSuggestion"].value;
    if (x == "") {
        alert("Suggestion or Complaint box must be filled out");
        return false;}
    }
    
} 