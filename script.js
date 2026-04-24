const shop_btn = document.getElementById("shop_now_button");
const category_nav_elem = document.querySelectorAll('.category_nav a');
const products = document.querySelectorAll('.product');
const category_dropdown = document.querySelector('.category_dropdown');

if (shop_btn) {
    shop_btn.addEventListener("click", function() {
        console.log("Shop Now button clicked");
        window.location.href = "htmlfiles/shopping.html";
    });
}

if (category_nav_elem.length > 0 && products.length > 0) {
    function show_products(category) {
        products.forEach(product => {
            if (product.classList.contains(category)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }

        });
        if (category_dropdown) {
            category_dropdown.value = category;
        }
    }

    category_nav_elem.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.getAttribute('data-category');
            show_products(category);
        });
    });

    if (category_dropdown) {
        category_dropdown.addEventListener('change', function() {
            const category = this.value;
            show_products(category);
        });
    }

    show_products('mens');
}

const contact_form = document.getElementById('contact-form');
if (contact_form) {
    contact_form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        document.querySelectorAll('.error').forEach(error => {
            error.style.display = 'none';
            error.textContent = '';
        });
        document.getElementById('success-message').style.display = 'none';
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        let is_valid = true;
        
        if (name === '') {
            document.getElementById('name-error').textContent = 'Name is required';
            document.getElementById('name-error').style.display = 'block';
            is_valid = false;
        }
        
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
        
        if (message === '') {
            document.getElementById('message-error').textContent = 'Message is required';
            document.getElementById('message-error').style.display = 'block';
            is_valid = false;
        }
        
        if (is_valid) {
            document.getElementById('success-message').textContent = 'Thank you for your message! We will get back to you soon.';
            document.getElementById('success-message').style.display = 'block';
            contact_form.reset();
        }
    });
}