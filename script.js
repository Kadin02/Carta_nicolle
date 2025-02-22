document.querySelector('.heart').addEventListener('click', function() {
    var countDownSeconds = 5; // 5 segundos
    var countdownText = document.getElementById("countdown");
    
    var interval = setInterval(function() {
        countDownSeconds--;
        countdownText.textContent = `Nueva carta en: ${countDownSeconds}s`;
    
        if (countDownSeconds <= 0) {
            clearInterval(interval);
            countdownText.textContent = "¡Descargando nueva carta!";
            
            const link = document.createElement('a');
            link.href = 'https://drive.google.com/uc?export=download&id=1DkU9Bh-eXsvAYFwKCkynlvq-PyDrdTUT';
            link.download = 'Te amo Kadin..pdf'; // Asigna el nombre correcto
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }, 1000);
}); 