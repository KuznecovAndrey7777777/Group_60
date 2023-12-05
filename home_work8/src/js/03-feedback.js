import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const LOCAL_STORAGE_KEY = 'feedback-form-state';

// Load form state from localStorage on page load
const savedState = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {};
emailInput.value = savedState.email || '';
messageInput.value = savedState.message || '';

// Save form state to localStorage on input, throttled to avoid excessive storage updates
const saveState = throttle(() => {
    const currentState = {
        email: emailInput.value,
        message: messageInput.value,
    };
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(currentState));
}, 500);

form.addEventListener('input', saveState);

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Log form data and clear localStorage and form fields
    const formData = {
        email: emailInput.value,
        message: messageInput.value,
    };
    console.log(formData);

    localStorage.removeItem(LOCAL_STORAGE_KEY);
    emailInput.value = '';
    messageInput.value = '';
});

// Clear localStorage and reset form fields on page unload
window.addEventListener('beforeunload', () => {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
});

// Ensure that any pending updates to localStorage are saved before the page is closed
window.addEventListener('unload', () => {
    saveState.cancel(); // Cancel any pending updates
    saveState(); // Save the current state
});

// Основна ідея тут полягає в тому, що ми використовуємо події input для відстеження змін в полях форми і 
// зберігаємо їх у localStorage.При сабміті форми ми виводимо дані у консоль і очищуємо localStorage та 
// поля форми.При вивантаженні сторінки ми також очищуємо localStorage, але тільки тоді, коли користувач 
// справжньо покидає сторінку.Функція throttle з lodash допомагає обмежити частоту збереження у localStorage для 
// запобігання надмірному використанню ресурсів.
