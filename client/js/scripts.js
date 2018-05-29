/* global $ */

$(document).ready(() => {
    
    console.log('TEST!');
    
    var volunteerButton = $("#volunteer-submit");
    
    volunteerButton.click(() => {
        var name = $("#volunteer-name").val();
        var email = $("#volunteer-email").val();
        var address = $("#volunteer-address").val();
        
        var volunteer = {
            "name": name,
            "email": email,
            "address": address
        }
        
        // UPDATE URL TO OFFICIAL SERVER
        $.post("https://angular-test-eagarcia.c9users.io/submitVolunteer", volunteer);
    });
    
});