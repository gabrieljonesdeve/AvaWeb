// Funzione per caricare HTML da file
function loadHTML(url, elementId) {
    fetch(url)
      .then(response => response.text())
      .then(data => document.getElementById(elementId).innerHTML = data);
  }
  
  // Carica header e footer
  loadHTML('/layouts/header.html', 'header');
  loadHTML('/layouts/footer.html', 'footer');
  
  // Se ci sono contenuti Markdown, caricali
  const contentElement = document.querySelector('main');
  const markdownFile = contentElement.getAttribute('data-markdown');
  
  if (markdownFile) {
    fetch(markdownFile)
      .then(response => response.text())
      .then(markdown => {
        // Converti il markdown in HTML
        contentElement.innerHTML = marked.parse(markdown);  // Richiede una libreria markdown come Marked.js
      });
  }
  