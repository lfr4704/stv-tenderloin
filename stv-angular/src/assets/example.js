/* global $ */

$(document).ready(() => {
    
    console.log("ready example");
    
    $('#test').click(() => {
        console.log("pressed");
        
        $.post('https://stv-eagarcia.c9users.io:8081/test', {});
    });
    
    var donateButton = $("#donate-submit");
    
    donateButton.click((e) => {
        
        e.preventDefault();
        
        console.log("pressed!");
        
        var otherInput = $("#input-amount").val();
        var donationName = $("#input-amount").val();
        var donationEmail = $("#input-amount").val();
        
        var donationAmount = {
            "amount": otherInput,
            "name": donationName,
            "email": donationEmail
        }
        $.post("https://stv-eagarcia.c9users.io:8081/client/submitDonation", donationAmount);
    });
});