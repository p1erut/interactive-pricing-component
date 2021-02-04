document.querySelector('.slider').oninput = function() {
    let value = (this.value-this.min)/(this.max-this.min)*100;
    const rightColor = "hsl(174, 77%, 80%)";
    const leftColor = "hsl(224, 65%, 95%)";
    this.style.background = `linear-gradient(to right, ${rightColor} 0%, ${rightColor} ${value}%, ${leftColor} ${value}%, ${leftColor} 100%)`;
};