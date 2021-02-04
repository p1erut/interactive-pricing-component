document.querySelector('.slider').addEventListener('input', function() {
    let value = this.value;
    const count = document.querySelector('.count');
    const priceDesktop = document.querySelector('.price-desktop');
    const priceMobile = document.querySelector('.price-mobile');
    switch(value){
        case '1':
            count.textContent = "10K";
            priceDesktop.textContent = "$8.00 ";
            priceMobile.textContent = "$8.00 ";
        break;
        case '2':
            count.textContent = "50K";
            priceDesktop.textContent = "$12.00 ";
            priceMobile.textContent = "$12.00 ";
        break;
        case '3':
            count.textContent = "100K";
            priceDesktop.textContent = "$16.00 ";
            priceMobile.textContent = "$16.00 ";
        break;
        case '4':
            count.textContent = "500K";
            priceDesktop.textContent = "$24.00 ";
            priceMobile.textContent = "$24.00 ";
        break;
        case '5':
            count.textContent = "1M";
            priceDesktop.textContent = "$36.00 ";
            priceMobile.textContent = "$36.00 ";
        break;
    }
});