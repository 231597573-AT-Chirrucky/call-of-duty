document
  .getElementById('auth-form')
  .addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple validation
    if (email && password) {
      alert('Login successful!');
      document.getElementById('form-container').style.display = 'none';
      document.getElementById('solutions').style.display = 'block';
    } else {
      alert('Please fill in all fields');
    }
  });

function toggleForm() {
  const formTitle = document.getElementById('form-title');
  const toggleLink = document.getElementById('toggle-form');

  if (formTitle.innerText === 'Login') {
    formTitle.innerText = 'Sign Up';
    toggleLink.innerHTML =
      'Already have an account? <a href="#" onclick="toggleForm()">Login</a>';
  } else {
    formTitle.innerText = 'Login';
    toggleLink.innerHTML =
      'Don\'t have an account? <a href="#" onclick="toggleForm()">Sign Up</a>';
  }
}
