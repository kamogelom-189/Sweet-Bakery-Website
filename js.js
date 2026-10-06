// Accordion functionality
document.addEventListener('DOMContentLoaded', () => {
  const accButtons = document.querySelectorAll('.accordion-btn');
  accButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('active');
      const panel = btn.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  });

  // Dynamic product loading (only on homepage)
  const loadMoreBtn = document.getElementById('loadMore');
  if (loadMoreBtn) {
    const products = [
      { name: 'Chocolate Fudge Cake', price: '$15.00' },
      { name: 'Vanilla Cupcakes (6-pack)', price: '$8.00' },
      { name: 'Lemon Tart', price: '$6.50' },
      { name: 'Cinnamon Rolls', price: '$4.00' },
      { name: 'Blueberry Muffins', price: '$3.50' }
    ];
    let productIndex = 0;

    loadMoreBtn.addEventListener('click', () => {
      if (productIndex >= products.length) return;
      const container = document.getElementById('productsContainer');
      const product = products[productIndex];
      const productEl = document.createElement('div');
      productEl.textContent = `${product.name} - ${product.price}`;
      container.appendChild(productEl);
      productIndex++;
    });
  }

  // Form validation & submission simulation
  const enquiryForm = document.getElementById('enquiryForm');
  if (enquiryForm) handleForm(enquiryForm);

  const contactForm = document.getElementById('contactForm');
  if (contactForm) handleForm(contactForm);
});

function handleForm(form) {
  const errorEl = form.querySelector('#formError') || createErrorElement(form);

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    errorEl.textContent = '';

    // Validation
    let valid = true;

    if (!validateName(form.name.value)) {
      errorEl.textContent = 'Name must be between 3 and 50 characters.';
      valid = false;
    } else if (!validateEmail(form.email.value)) {
      errorEl.textContent = 'Please enter a valid email.';
      valid = false;
    } else if (form.id === 'enquiryForm' && !form.enquiryType.value) {
      errorEl.textContent = 'Please select an enquiry type.';
      valid = false;
    } else if (form.id === 'contactForm') {
      if (!form.messageType.value) {
        errorEl.textContent = 'Please select a message type.';
        valid = false;
      } else if (!validateMessage(form.message.value)) {
        errorEl.textContent = 'Message must be between 10 and 500 characters.';
        valid = false;
      }
    }

    if (!valid) return;

    // Simulate a successful submission for demo purposes
    setTimeout(() => {
      alert('Form submitted successfully! Thank you.');
      form.reset();
    }, 600);
  });
}

function createErrorElement(form) {
  const p = document.createElement('p');
  p.style.color = 'red';
  p.id = 'formError';
  form.appendChild(p);
  return p;
}

function validateName(name) {
  return name.trim().length >= 3 && name.trim().length <= 50;
}

function validateEmail(email) {
  const regex = /\S+@\S+\.\S+/;
  return regex.test(email.trim());
}

function validateMessage(message) {
  return message.trim().length >= 10 && message.trim().length <= 500;
}
