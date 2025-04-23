let akun = {
  email: null,
  password: null
};

function buatAkun() {
  const email = document.getElementById("new_email").value;
  const password = document.getElementById("new_password").value;
  const msg = document.getElementById("buat_message");

  if (email && password) {
      akun.email = email;
      akun.password = password;
      msg.textContent = "Akun berhasil dibuat!";
      msg.className = "message success";
      document.getElementById("new_email").value = "";
      document.getElementById("new_password").value = "";
  } else {
      msg.textContent = "Email dan password tidak boleh kosong!";
      msg.className = "message";
  }
}

function login() {
  const usernameInput = document.getElementById('username').value;
  const passwordInput = document.getElementById('password').value;
  const messageDiv = document.getElementById('message');

  if (usernameInput === akun.email && passwordInput === akun.password) {
      messageDiv.textContent = "Login berhasil";
      messageDiv.className = "message success";
  } else if (usernameInput !== akun.email && passwordInput === akun.password) {
      messageDiv.textContent = "Username tidak tersedia";
      messageDiv.className = "message";
  } else if (usernameInput === akun.email && passwordInput !== akun.password) {
      messageDiv.textContent = "Password salah";
      messageDiv.className = "message";
  } else {
      messageDiv.textContent = "Username dan password salah";
      messageDiv.className = "message";
  }
}