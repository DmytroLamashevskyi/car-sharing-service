const filterItems = document.querySelectorAll(".cars-filter li")
const carItems = document.querySelectorAll(".item")
const carsContent = document.getElementById("carsContent")

filterItems.forEach(item => {
    item.onclick = ()=>{
        filterItems.forEach(e=>e.classList.remove('active'))
        item.classList.add('active')

        const filterText = item.textContent.toLocaleLowerCase()

        carItems.forEach(car=> {
            if(filterText === "all" || car.querySelector('h4').textContent.toLocaleLowerCase().includes(filterText)){
                car.style.display = 'flex'
            }else{
                car.style.display = 'none'
            }
        })

        carsContent.scrollIntoView({behavior: "instant"})
    }
})

const carNameInput = document.getElementById('carName');
  const customerNameInput = document.getElementById('customerName');
  const customerPhoneInput = document.getElementById('customerPhone');
  const submitBtn = document.getElementById('submitRequest');

  const carNameError = document.getElementById('carNameError');
  const customerNameError = document.getElementById('customerNameError');
  const customerPhoneError = document.getElementById('customerPhoneError');

  function clearErrors() {
    [carNameError, customerNameError, customerPhoneError].forEach(e => e.textContent = '');
    [carNameInput, customerNameInput, customerPhoneInput].forEach(i =>
      i.classList.remove('input-error')
    );
  }

  function validateForm() {
    clearErrors();
    let isValid = true;

    const carName = carNameInput.value.trim();
    const customerName = customerNameInput.value.trim();
    const customerPhone = customerPhoneInput.value.trim();

    if (!carName) {
      carNameError.textContent = 'Please enter the car name.';
      carNameInput.classList.add('input-error');
      isValid = false;
    }

    if (!customerName) {
      customerNameError.textContent = 'Please enter your name.';
      customerNameInput.classList.add('input-error');
      isValid = false;
    }

    const phonePattern = /^\+?[0-9\s\-()]{7,20}$/;
    if (!customerPhone) {
      customerPhoneError.textContent = 'Please enter your phone number.';
      customerPhoneInput.classList.add('input-error');
      isValid = false;
    } else if (!phonePattern.test(customerPhone)) {
      customerPhoneError.textContent = 'Please enter a valid phone number.';
      customerPhoneInput.classList.add('input-error');
      isValid = false;
    }

    return isValid;
  }

  submitBtn.addEventListener('click', function () {
    if (validateForm()) {
        alert('Request sent!');
    }
  });