// preuves.js — Gestion des preuves toggle
// Cours Probabilités & Stats — INSA Toulouse

document.addEventListener('DOMContentLoaded', function () {
  setupProofToggles();
});

// Pour Reveal.js : ré-initialiser à chaque changement de slide
if (typeof Reveal !== 'undefined') {
  Reveal.on('slidechanged', function () {
    setupProofToggles();
  });
}

function setupProofToggles() {
  document.querySelectorAll('.proof-toggle-btn').forEach(function (btn) {
    if (btn._initialized) return;
    btn._initialized = true;

    btn.addEventListener('click', function () {
      var content = btn.nextElementSibling;
      if (!content || !content.classList.contains('proof-content')) return;

      if (content.classList.contains('visible')) {
        content.classList.remove('visible');
        btn.textContent = '▶ Voir la preuve';
      } else {
        content.classList.add('visible');
        btn.textContent = '▼ Masquer la preuve';

        // Re-render KaTeX in the newly shown content
        if (typeof renderMathInElement !== 'undefined') {
          renderMathInElement(content, {
            delimiters: [
              { left: '$$', right: '$$', display: true },
              { left: '$', right: '$', display: false },
              { left: '\\(', right: '\\)', display: false },
              { left: '\\[', right: '\\]', display: true }
            ],
            throwOnError: false
          });
        }
      }
    });
  });
}
