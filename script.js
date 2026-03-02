const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    menuToggle.textContent = isOpen ? '✕' : '☰';
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navMenu.querySelectorAll('a').forEach((item) => {
    item.addEventListener('click', () => {
      navMenu.classList.remove('open');
      menuToggle.textContent = '☰';
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const yearNode = document.getElementById('year');
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

const enquiryForm = document.getElementById('enquiryForm');
const submitBtn = document.getElementById('submitBtn');
const formMessage = document.getElementById('formMessage');
const studentName = document.getElementById('studentName');
const studentPhone = document.getElementById('studentPhone');
const studentProgram = document.getElementById('studentProgram');

if (enquiryForm && submitBtn && formMessage && studentName && studentPhone && studentProgram) {
  enquiryForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = studentName.value.trim();
    const phone = studentPhone.value.trim();
    const program = studentProgram.value.trim();

    if (name.length < 2) {
      formMessage.classList.remove('success');
      formMessage.textContent = 'Please enter a valid student name.';
      studentName.focus();
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      formMessage.classList.remove('success');
      formMessage.textContent = 'Please enter a valid 10-digit mobile number.';
      studentPhone.focus();
      return;
    }

    if (!program) {
      formMessage.classList.remove('success');
      formMessage.textContent = 'Please select a program.';
      studentProgram.focus();
      return;
    }

    submitBtn.textContent = 'Enquiry Sent ✓';
    submitBtn.disabled = true;
    formMessage.classList.add('success');
    formMessage.textContent = 'Thank you! Our team will contact you shortly.';

    window.setTimeout(() => {
      submitBtn.textContent = 'Send Enquiry';
      submitBtn.disabled = false;
      enquiryForm.reset();
    }, 1800);
  });
}
