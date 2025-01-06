document.getElementById("add-product-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Verhindert das Standard-Formularverhalten
    
    // Produktdaten aus dem Formular holen
    const title = document.getElementById("title").value;
    const genre = document.getElementById("genre").value;
    const author = document.getElementById("author").value;

    // Produkt ID automatisch generieren
    const productId = Date.now();  // Eine ID basierend auf der aktuellen Zeit

    // Erstellen eines Produktobjekts
    const product = {
        id: productId,
        title: title,
        genre: genre,
        author: author
    };

    // Anfrage an das Google Apps Script senden
    fetch("DEINE_WEB_APP_URL", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)  // Produktdaten als JSON übergeben
    })
    .then(response => response.json())
    .then(data => {
        console.log('Produkt erfolgreich hinzugefügt:', data);
        loadProducts();  // Produkte neu laden, um die Tabelle zu aktualisieren
    })
    .catch((error) => {
        console.error('Fehler beim Hinzufügen des Produkts:', error);
    });

    // Formular zurücksetzen
    document.getElementById("add-product-form").reset();
});

    // Anfrage an das Google Apps Script senden
    fetch("https://script.google.com/macros/s/AKfycbzxZ7PZkl2Qb95cELKCmhs1Jt132_dp8jaKDpLliE4X2WW-kR2oZ2U38ftVX08wMiuOCw/exec", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)  // Produktdaten als JSON übergeben
    })
    .then(response => response.json())
    .then(data => {
        console.log('Produkt erfolgreich hinzugefügt:', data);
        loadProducts();  // Produkte neu laden, um die Tabelle zu aktualisieren
    })
    .catch((error) => {
        console.error('Fehler beim Hinzufügen des Produkts:', error);
    });

    // Formular zurücksetzen
    document.getElementById("add-product-form").reset();
});

// Produkte anzeigen
function loadProducts() {
    const productList = document.getElementById("product-list").getElementsByTagName('tbody')[0];
    productList.innerHTML = "";  // Vorherige Einträge löschen

    // Anfrage an das Google Apps Script senden, um alle Produkte zu erhalten
    fetch("https://script.google.com/macros/s/AKfycbzxZ7PZkl2Qb95cELKCmhs1Jt132_dp8jaKDpLliE4X2WW-kR2oZ2U38ftVX08wMiuOCw/exec?action=getProducts")
        .then(response => response.json())
        .then(products => {
            // Produkte in der Tabelle anzeigen
            products.forEach(product => {
                const row = productList.insertRow();
                row.innerHTML = `
                    <td>${product.id}</td>
                    <td>${product.title}</td>
                    <td>${product.genre}</td>
                    <td>${product.author}</td>
                `;
            });
        })
        .catch((error) => {
            console.error('Fehler beim Laden der Produkte:', error);
        });
}

// Beim Laden der Seite Produkte anzeigen
window.onload = loadProducts;

