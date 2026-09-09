document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.post-form');
  const feed = document.querySelector('.posts-feed');

  if (!form || !feed) return;

  // Manejador para crear una nueva publicación principal
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const typeSelect = form.querySelector('select');
    const titleInput = form.querySelector('input[type="text"]');
    const contentTextarea = form.querySelector('textarea');

    const type = typeSelect.value;
    const title = titleInput.value.trim();
    const content = contentTextarea.value.trim();

    if (!type || !title || !content) return;

    const newPost = createPostElement(type, title, content);

    // Insertar la nueva publicación después del título del feed (h4)
    const headerTitle = feed.querySelector('h4');
    if (headerTitle && headerTitle.nextSibling) {
      feed.insertBefore(newPost, headerTitle.nextSibling);
    } else {
      feed.appendChild(newPost);
    }

    form.reset();
  });

  // Delegación de eventos para manejar la creación y alternancia de formularios de respuesta
  feed.addEventListener('click', (e) => {
    // Mostrar / Ocultar el formulario de respuesta
    if (e.target.closest('.btn-toggle-reply')) {
      const btn = e.target.closest('.btn-toggle-reply');
      const postItem = btn.closest('.post-item');
      const replyForm = postItem.querySelector('.reply-form-container');
      
      if (replyForm) {
        replyForm.classList.toggle('d-none');
      }
    }
  });

  // Manejador para enviar respuestas
  feed.addEventListener('submit', (e) => {
    if (e.target.classList.contains('reply-form')) {
      e.preventDefault();

      const replyForm = e.target;
      const input = replyForm.querySelector('input[type="text"]');
      const replyText = input.value.trim();

      if (!replyText) return;

      const postItem = replyForm.closest('.post-item');
      const repliesList = postItem.querySelector('.replies-list');

      // Crear elemento de respuesta
      const replyArticle = document.createElement('div');
      replyArticle.classList.add('reply-item', 'mt-2', 'ps-3', 'border-start', 'border-2', 'border-primary');
      replyArticle.innerHTML = `
        <div class="d-flex align-items-center mb-1">
          <i class="fas fa-user-circle text-secondary me-2"></i>
          <span class="fw-bold small">Usuario</span>
          <span class="text-muted small ms-2">• Justo ahora</span>
        </div>
        <p class="small text-dark mb-0">${escapeHTML(replyText)}</p>
      `;

      repliesList.appendChild(replyArticle);
      replyForm.reset();
      
      // Ocultar formulario opcionalmente tras responder
      replyForm.parentElement.classList.add('d-none');
    }
  });

  // Función auxiliar para construir el HTML de una publicación
  function createPostElement(type, title, content) {
    const newPost = document.createElement('article');
    newPost.classList.add('post-item');

    const isDuda = type === 'duda';
    const badgeClass = isDuda ? 'duda' : 'recomendacion';
    const badgeText = isDuda ? 'Duda' : 'Recomendación';

    newPost.innerHTML = `
      <span class="post-badge ${badgeClass}">${badgeText}</span>
      <h5 class="mt-1">${escapeHTML(title)}</h5>
      <p class="text-muted small mb-2">${escapeHTML(content)}</p>
      
      <div class="d-flex align-items-center gap-2 mb-2">
        <button type="button" class="btn btn-sm btn-outline-primary btn-toggle-reply">
          <i class="fas fa-reply me-1"></i>Responder
        </button>
      </div>

      <!-- Contenedor para respuestas recibidas -->
      <div class="replies-list mb-2"></div>

      <!-- Formulario para agregar respuesta (oculto por defecto) -->
      <div class="reply-form-container d-none mb-3">
        <form class="reply-form d-flex gap-2">
          <input type="text" class="form-control form-control-sm" placeholder="Escribe tu respuesta..." required>
          <button type="submit" class="btn btn-sm btn-primary">Enviar</button>
        </form>
      </div>
    `;

    return newPost;
  }

  // Prevención de ataques XSS al renderizar texto del usuario
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