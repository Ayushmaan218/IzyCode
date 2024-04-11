function generateQR() {
    var text = document.getElementById('inputText').value;
    
    if (text.trim() === '') {
      alert('Please enter some text');
      return;
    }
    
    var qrCodeDiv = document.getElementById('qrCode');
    qrCodeDiv.innerHTML = '';

    var qrCodeUrl = 'https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl=' + encodeURIComponent(text);
    
    var qrCodeImg = document.createElement('img');
    qrCodeImg.src = qrCodeUrl;
    qrCodeDiv.appendChild(qrCodeImg);
  }
  