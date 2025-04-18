function calculateFuelCost() {
    const distance = parseFloat(document.getElementById('distance').value);
    const mileage = parseFloat(document.getElementById('mileage').value);
    const fuelPrice = parseFloat(document.getElementById('fuelPrice').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(distance) || isNaN(mileage) || isNaN(fuelPrice) || mileage <= 0) {
      resultDiv.textContent = 'Please enter valid inputs.';
      return;
    }

    const fuelNeeded = distance / mileage;
    const totalCost = fuelNeeded * fuelPrice;

    resultDiv.textContent = `Estimated Fuel Cost: ₹${totalCost.toFixed(2)}`;
  }


  // car slider js

  const slider = document.getElementById('carSlider');

    function scrollSlider(direction) {
      const scrollAmount = 300;
      slider.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
    }

    // Auto scroll
    let autoScroll = setInterval(() => {
      slider.scrollBy({ left: 300, behavior: 'smooth' });
    }, 1000);

    // Pause auto scroll on hover
    slider.addEventListener('mouseover', () => clearInterval(autoScroll));
    slider.addEventListener('mouseleave', () => {
      autoScroll = setInterval(() => {
        slider.scrollBy({ left: 300, behavior: 'smooth' });
      }, 4000);
    });