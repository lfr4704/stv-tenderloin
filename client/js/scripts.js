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
    
    console.log('TEST!');
    
    var donateButton = $("#donate-submit");
    
    donateButton.click(() => {
        var otherInput = $("#input-amount").val();
        var donationName = $("#input-amount").val();
        var donationEmail = $("#input-amount").val();
        
        var donationAmount = {
            "amount": otherInput,
            "name": donationName,
            "email": donationEmail
        }
        $.post("https://stv-tenderloin-lfr4704.c9users.io/submitDonation", donationAmount);
    });
    
    
    
});

