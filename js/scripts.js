// Function to start the search animation and show results
function startSearch() {
    // Hide the input form
    document.querySelector('.input-form').style.display = 'none';

    // Show the scanning container (text + radar animation)
    document.querySelector('.scanning-container').style.display = 'block';

    // Random delay between 5 to 10 seconds
    const delay = Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000;

    setTimeout(() => {
        // Hide the scanning animation and show results
        document.querySelector('.scanning-container').style.display = 'none';
        
        const resultsCount = Math.floor(Math.random() * (200 - 50 + 1)) + 50;
        document.getElementById('results-count').textContent = 
            `${resultsCount} sources found! If you want to delete your information, proceed to payment.`;

        document.querySelector('.results').style.display = 'block';
    }, delay);
}

// Function to redirect to payment page (or show an alert for now)
function redirectToPayment() {
    alert("Redirecting to payment page...");
    // Replace with actual URL when ready
    // window.location.href = "your-payment-url";
}
