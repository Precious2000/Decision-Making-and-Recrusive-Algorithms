document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const age = document.getElementById('age').value;
    let ticketPrice = '';

    if (age <= 12) {
        ticketPrice = '$10';
    } else if (age >= 13 && age <= 17) {
        ticketPrice = '$15';
    } else if (age >= 18) {
        ticketPrice = '$20';
    } else {
        ticketPrice = 'Invalid age';
    }

    document.getElementById('ticketPrice').innerText = 'Ticket Price: ' + ticketPrice;
});
