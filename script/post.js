
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.post-form');
  const feed = document.querySelector('.posts-feed');
  

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const typeSelect = form.querySelector('select');
    const titleInput = form.querySelector('input[type="text"]');
    const contentTextarea = form.querySelector('textarea');

    const type = typeSelect.value;
    const title = titleInput.value.trim();
    const content = contentTextarea.value.trim();

    if (!type || !title || !content) return;


    const newPost = document.createElement('article');
    newPost.classList.add('post-item');

    const isDuda = type === 'duda';
    const badgeClass = isDuda ? 'badge-duda' : 'badge-recom';
    const badgeText = isDuda ? 'Duda' : 'Recomendación';

    newPost.innerHTML = `
      <div class="post-badge ${badgeClass}">${badgeText}</div>
      <h4>${escapeHTML(title)}</h4>
      <p>${escapeHTML(content)}</p>
    `;

    feed.insertBefore(newPost, feed.children[1]);

    form.reset();
  });

  function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
      tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag] || tag)
    );
  }
});
