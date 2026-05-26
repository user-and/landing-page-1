document.addEventListener('DOMContentLoaded', () => {
    const leadForm = document.getElementById('lead-form');

    if (leadForm) {
        leadForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simple validation
            let isValid = true;
            const inputs = leadForm.querySelectorAll('input[required]');
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = 'red';
                } else {
                    input.style.borderColor = '#ddd';
                }
            });

            if (isValid) {
                alert('Thank you! Redirecting to your credit scores...');
                // In a real app, this would submit to a server
            }
        });
    }
});
