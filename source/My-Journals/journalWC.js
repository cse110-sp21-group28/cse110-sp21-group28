class journalWC extends HTMLElement {
  constructor() {
    super();

    const template = document.createElement('template');

    template.innerHTML = `
              <style>
                  .entry {
                      border-radius: 3px;
                  }
              </style>
              <article class="entry">
                  <h1 class="title"></h1>
                  <h1 class="date"></h1>
                  <ul class="tags-list">
                  </ul>
              </article>`;

    // create a shadow root for this web component
    this.attachShadow({ mode: 'open' });
    // attach cloned content of template to shadow DOM
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  get entry() {
    return this.getAttribute('entry');
  }

  set entry(entry) {
    const article = this.shadowRoot.querySelector('article');
    article.querySelector('.title').textContent = entry.title;
    article.querySelector('.date').textContent = entry.date;
    const tagsList = article.querySelector('.tags-list');

    // render list of todos - assumes todos is a list
    entry.todos.forEach((todo) => {
      const newLi = document.createElement('li');
      newLi.textContent = todo;
      tagsList.appendChild(newLi);
    });
  }
}

customElements.define('journal-entry', journalWC);