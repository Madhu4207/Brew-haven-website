/* ==========================================================
   Brew Haven Coffee Shop - script.js
   Vanilla JS only. No frameworks.
   ========================================================== */

// -------------------- MOBILE NAV TOGGLE --------------------
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle) {
  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });
}


// -------------------- DYNAMIC GREETING --------------------
// shows a different greeting message depending on time of day
// (not showing live clock/date, just changes the text once)
function showGreeting() {
  const greetEl = document.getElementById("dynamicGreeting");
  if (!greetEl) return;

  const hour = new Date().getHours();
  let msg = "";

  if (hour < 12) {
    msg = "☀ Good Morning! Start your day with fresh brewed coffee";
  } else if (hour < 17) {
    msg = "☕ Good Afternoon! Time for a coffee break";
  } else if (hour < 21) {
    msg = "🌆 Good Evening! Relax with a warm cup";
  } else {
    msg = "🌙 Late night cravings? We got dessert too!";
  }

  greetEl.textContent = msg;
}
showGreeting();


// -------------------- MENU CATEGORY TABS --------------------
const menuTabBtns = document.querySelectorAll(".menu-tab-btn");
const menuSections = document.querySelectorAll(".menu-category");

if (menuTabBtns.length > 0) {
  menuTabBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const target = btn.getAttribute("data-target");

      menuTabBtns.forEach((b) => b.classList.remove("active-tab"));
      btn.classList.add("active-tab");

      if (target === "all") {
        menuSections.forEach((sec) => (sec.style.display = "block"));
      } else {
        menuSections.forEach((sec) => {
          if (sec.id === target) {
            sec.style.display = "block";
            sec.scrollIntoView({ behavior: "smooth", block: "start" });
          } else {
            sec.style.display = "none";
          }
        });
      }
    });
  });
}


// -------------------- ORDER BUTTON (menu page) --------------------
const orderBtns = document.querySelectorAll(".order-btn");
orderBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const itemName = btn.getAttribute("data-item");
    alert(itemName + " added to your order! ☕ (demo only, no real cart yet)");
  });
});


// -------------------- CONTACT FORM VALIDATION --------------------
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let valid = true;

    const name = document.getElementById("cname");
    const email = document.getElementById("cemail");
    const phone = document.getElementById("cphone");
    const subject = document.getElementById("csubject");
    const message = document.getElementById("cmessage");

    // clear old errors first
    document.querySelectorAll(".error-msg").forEach((el) => (el.textContent = ""));

    if (name.value.trim().length < 3) {
      document.getElementById("nameErr").textContent = "Please enter your full name (min 3 letters)";
      valid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
      document.getElementById("emailErr").textContent = "Enter a valid email address";
      valid = false;
    }

    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone.value.trim())) {
      document.getElementById("phoneErr").textContent = "Enter a valid 10-digit phone number";
      valid = false;
    }

    if (subject.value.trim() === "") {
      document.getElementById("subjectErr").textContent = "Subject cannot be empty";
      valid = false;
    }

    if (message.value.trim().length < 10) {
      document.getElementById("messageErr").textContent = "Message should be at least 10 characters";
      valid = false;
    }

    const successBox = document.getElementById("formSuccess");

    if (valid) {
      successBox.style.display = "block";
      successBox.textContent = "Thank you " + name.value + "! Your message has been sent. We will get back to you soon.";
      contactForm.reset();
    } else {
      successBox.style.display = "none";
    }
  });
}


// -------------------- LOGIN / SIGNUP TAB SWITCH --------------------
const loginTabBtn = document.getElementById("loginTabBtn");
const signupTabBtn = document.getElementById("signupTabBtn");
const loginFormBox = document.getElementById("loginForm");
const signupFormBox = document.getElementById("signupForm");

if (loginTabBtn && signupTabBtn) {
  loginTabBtn.addEventListener("click", function () {
    loginTabBtn.classList.add("active-tab");
    signupTabBtn.classList.remove("active-tab");
    loginFormBox.classList.add("show");
    signupFormBox.classList.remove("show");
  });

  signupTabBtn.addEventListener("click", function () {
    signupTabBtn.classList.add("active-tab");
    loginTabBtn.classList.remove("active-tab");
    signupFormBox.classList.add("show");
    loginFormBox.classList.remove("show");
  });
}


// -------------------- LOGIN VALIDATION --------------------
const loginFormEl = document.getElementById("loginFormEl");

if (loginFormEl) {
  loginFormEl.addEventListener("submit", function (e) {
    e.preventDefault();
    let valid = true;

    const lemail = document.getElementById("lemail");
    const lpass = document.getElementById("lpass");

    document.getElementById("lemailErr").textContent = "";
    document.getElementById("lpassErr").textContent = "";

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(lemail.value.trim())) {
      document.getElementById("lemailErr").textContent = "Enter a valid email";
      valid = false;
    }

    if (lpass.value.trim().length < 6) {
      document.getElementById("lpassErr").textContent = "Password must be at least 6 characters";
      valid = false;
    }

    if (valid) {
      alert("Login successful! Welcome back to Brew Haven ☕ (this is just a demo, no backend yet)");
      loginFormEl.reset();
    }
  });
}


// -------------------- SIGNUP VALIDATION --------------------
const signupFormEl = document.getElementById("signupFormEl");

if (signupFormEl) {
  signupFormEl.addEventListener("submit", function (e) {
    e.preventDefault();
    let valid = true;

    const sname = document.getElementById("sname");
    const semail = document.getElementById("semail");
    const spass = document.getElementById("spass");
    const scpass = document.getElementById("scpass");

    document.querySelectorAll("#signupForm .error-msg").forEach((el) => (el.textContent = ""));

    if (sname.value.trim().length < 3) {
      document.getElementById("snameErr").textContent = "Name should be at least 3 characters";
      valid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(semail.value.trim())) {
      document.getElementById("semailErr").textContent = "Enter a valid email";
      valid = false;
    }

    if (spass.value.length < 6) {
      document.getElementById("spassErr").textContent = "Password must be at least 6 characters";
      valid = false;
    }

    if (scpass.value !== spass.value) {
      document.getElementById("scpassErr").textContent = "Passwords do not match";
      valid = false;
    }

    if (valid) {
      alert("Account created successfully! You can now login. (demo only)");
      signupFormEl.reset();
      // switch back to login tab automatically
      loginTabBtn.click();
    }
  });
}


// -------------------- CUSTOMER STATS COUNTER (home page) --------------------
// simple counting animation when page loads, purely for visual effect
function animateStat(id, target) {
  const el = document.getElementById(id);
  if (!el) return;
  let count = 0;
  const step = Math.ceil(target / 60);
  const timer = setInterval(function () {
    count += step;
    if (count >= target) {
      count = target;
      clearInterval(timer);
    }
    el.textContent = count;
  }, 30);
}

animateStat("statCustomers", 4200);
animateStat("statCoffees", 15800);
animateStat("statBaristas", 12);
animateStat("statYears", 6);
