// Card Download Functions
function downloadPNG() {
    const card = document.getElementById('cardElement');
    
    if (!card) {
        alert('Card element not found!');
        return;
    }
    
    html2canvas(card, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: null,
        width: card.offsetWidth,
        height: card.offsetHeight
    }).then(function(canvas) {
        const link = document.createElement('a');
        link.download = 'Abid_Mehmood_Professional_Card.png';
        link.href = canvas.toDataURL('image/png');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }).catch(function(error) {
        console.error('PNG Download Error:', error);
        alert('PNG download failed. Please try again.');
    });
}

function downloadJPG() {
    const card = document.getElementById('cardElement');
    
    if (!card) {
        alert('Card element not found!');
        return;
    }
    
    html2canvas(card, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        width: card.offsetWidth,
        height: card.offsetHeight
    }).then(function(canvas) {
        const link = document.createElement('a');
        link.download = 'Abid_Mehmood_Professional_Card.jpg';
        link.href = canvas.toDataURL('image/jpeg', 0.95);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }).catch(function(error) {
        console.error('JPG Download Error:', error);
        alert('JPG download failed. Please try again.');
    });
}

function downloadPDF() {
    const card = document.getElementById('cardElement');
    
    if (!card) {
        alert('Card element not found!');
        return;
    }
    
    html2canvas(card, {
        scale: 3,
        useCORS: true,
        allowTaint: true,
        backgroundColor: null,
        width: card.offsetWidth,
        height: card.offsetHeight
    }).then(function(canvas) {
        try {
            const imageData = canvas.toDataURL('image/png');
            const newWindow = window.open('', '_blank');
            
            if (!newWindow) {
                alert('Please allow popups for PDF download');
                return;
            }
            
            const htmlContent = [
                '<html>',
                '<head>',
                '<title>Abid Mehmood - Professional Card</title>',
                '<style>',
                'body { margin: 0; padding: 20px; text-align: center; background: #fff; font-family: Arial, sans-serif; }',
                'img { max-width: 100%; height: auto; box-shadow: 0 4px 20px rgba(0,0,0,0.1); border-radius: 16px; }',
                '@media print { body { margin: 0; padding: 10px; } img { width: 480px; height: 300px; object-fit: contain; } }',
                '</style>',
                '</head>',
                '<body>',
                '<h2>Professional Business Card</h2>',
                '<img src="' + imageData + '" alt="Professional Card">',
                '<p>Contact: abidbusiness2025@gmail.com | Phone: +92 302 9382306</p>',
                '</body>',
                '</html>'
            ].join('');
            
            newWindow.document.write(htmlContent);
            newWindow.document.close();
            
            setTimeout(function() {
                newWindow.print();
            }, 1500);
            
        } catch (error) {
            console.error('PDF Creation Error:', error);
            alert('PDF creation failed. Please try again.');
        }
    }).catch(function(error) {
        console.error('PDF Download Error:', error);
        alert('PDF download failed. Please try again.');
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Card download functions loaded successfully');
    
    // Add hover effects to card
    const card = document.getElementById('cardElement');
    if (card) {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'perspective(1000px) rotateY(2deg) rotateX(1deg) scale(1.02)';
            this.style.transition = 'all 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)';
        });
    }
    
    // Add click feedback to buttons
    const buttons = document.querySelectorAll('.download-button');
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(function() {
                button.style.transform = '';
            }, 150);
        });
    });
});