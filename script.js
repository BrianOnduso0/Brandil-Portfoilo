document.addEventListener('DOMContentLoaded', function() {
    
    var form = document.getElementById('myForm');

    
    form.addEventListener('submit', function(event) {
       
        event.preventDefault();

       
        var nameInput = document.getElementById('name');
        var emailInput = document.getElementById('email');
        var subjectInput = document.getElementById('subject');
        var messageInput = document.getElementById('message');
        
        if (nameInput.value.trim() === '') {
            alert('Please enter your name.');
            return;
        }

        if (emailInput.value.trim() === '') {
            alert('Please enter your email.');
            return;
        }

        if (subjectInput.value.trim() === '') {
            alert('Please enter a subject.');
            return;
        }

        if (messageInput.value.trim() === '') {
            alert('Please enter a message.');
            return;
        }

        alert('Form submitted successfully!');
        form.submit();
    });
});
