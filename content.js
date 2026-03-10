// This function hides "Most relevants" and "Shorts" shelf sections regardless of language
function hideYoutubeSections() {
  // Get all rich shelf renderers
  const shelves = document.querySelectorAll('ytd-rich-shelf-renderer');
  
  shelves.forEach(shelf => {
    // Hide Shorts - uses "is-shorts" attribute (language independent)
    if (shelf.hasAttribute('is-shorts')) {
      shelf.style.display = 'none';
    }
    
    // Hide "Mais relevantes" - uses featured-badge (language independent)
    const badge = shelf.querySelector('ytd-badge-supported-renderer#featured-badge');
    if (badge) {
      shelf.style.display = 'none';
    }
  });
}

// Listen for changes in the DOM
const observer = new MutationObserver(hideYoutubeSections);
observer.observe(document.body, { childList: true, subtree: true });

// Initially hide the sections
hideYoutubeSections();
