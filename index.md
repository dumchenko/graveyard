---
layout: default
---

### Люди, которых мы потеряли:

<div class="container px-4">
  <div class="row row-cols-auto gx-5">
    {% for person in site.people %}
    <div class="col">
      <div class="card col-md-4">
        <img src="{{ person.mainPhoto | relative_url }}" class="img-fluid">
        <div class="card-body col-sm">
          <h5 class="card-title">{{ person.name }}</h5>
          <div class="card-text">{{ person.birthDate }} - {{ person.deathDate }}</div>
          <br/>
          <blockquote class="blockquote"><small class="text-muted">
            Как много нашего ушло с тобой, как много твоего осталось с нами...
          </small></blockquote>
        </div>
        <a class="stretched-link" href="{{ person.url | relative_url }}"/>
      </div>
    </div>
    {% endfor %}
  </div>
</div>

<div class="fixed-bottom text-center">
  Наше генеалогическое древо на <a href="https://www.myheritage.com/site-family-tree-78241683/family-site">myheritage.com</a>
</div>
