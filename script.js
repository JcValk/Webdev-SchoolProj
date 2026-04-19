const shop_button = document.getElementById("shop_now_button");
const category_links = document.querySelectorAll('.category_nav a');
const products = document.querySelectorAll('.product');
const category_select = document.querySelector('.category_select');

if (shop_button) {
    shop_button.addEventListener("click", function() {
        console.log("Shop Now button clicked");
        window.location.href = "htmlfiles/shopping.html";
    });
}
if (category_links.length > 0 && products.length > 0) {
    function show_products(category) {
        products.forEach(product => {
            if (product.classList.contains(category)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
        if (category_select) {
            category_select.value = category;
        }
    }

    category_links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.getAttribute('data-category');
            show_products(category);
        });
    });

    if (category_select) {
        category_select.addEventListener('change', function() {
            const category = this.value;
            show_products(category);
        });
    }
    
    show_products('mens');
}

// Contact form validation
const contact_form = document.getElementById('contact-form');
if (contact_form) {
    contact_form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Clear previous errors
        document.querySelectorAll('.error').forEach(error => {
            error.style.display = 'none';
            error.textContent = '';
        });
        document.getElementById('success-message').style.display = 'none';
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        let is_valid = true;
        
        // Validate name
        if (name === '') {
            document.getElementById('name-error').textContent = 'Name is required';
            document.getElementById('name-error').style.display = 'block';
            is_valid = false;
        } else if (name.length < 2) {
            document.getElementById('name-error').textContent = 'Name must be at least 2 characters';
            document.getElementById('name-error').style.display = 'block';
            is_valid = false;
        }
        
        // Validate email
        const email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === '') {
            document.getElementById('email-error').textContent = 'Email is required';
            document.getElementById('email-error').style.display = 'block';
            is_valid = false;
        } else if (!email_regex.test(email)) {
            document.getElementById('email-error').textContent = 'Please enter a valid email address';
            document.getElementById('email-error').style.display = 'block';
            is_valid = false;
        }
        
        // Validate message
        if (message === '') {
            document.getElementById('message-error').textContent = 'Message is required';
            document.getElementById('message-error').style.display = 'block';
            is_valid = false;
        } else if (message.length < 10) {
            document.getElementById('message-error').textContent = 'Message must be at least 10 characters';
            document.getElementById('message-error').style.display = 'block';
            is_valid = false;
        }
        
        if (is_valid) {
            // Simulate form submission
            document.getElementById('success-message').textContent = 'Thank you for your message! We will get back to you soon.';
            document.getElementById('success-message').style.display = 'block';
            // Reset form
            contact_form.reset();
        }
    });
}