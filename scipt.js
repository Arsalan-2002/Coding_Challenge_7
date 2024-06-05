document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('feedback-form');
    const feedbackDisplay = document.getElementById('feedback-display');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const name = document.getElementById('name').value.trim();
        const rating = document.getElementById('rating').value;
        const comments = document.getElementById('comments').value.trim();

        if (!name || !rating || !comments) {
            alert('Please fill out all fields.');
            return;
        }

        const feedbackItem = document.createElement('div');
        feedbackItem.innerHTML = `
            <h3>${name}</h3>
            <p>Rating: ${rating}</p>
            <p>Comments: ${comments}</p>
            <hr>
        `;
        feedbackDisplay.appendChild(feedbackItem);

        form.reset();
    });
});
