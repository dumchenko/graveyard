---
layout: default
---

### Люди, которых мы потеряли:

{% for person in site.people %}
- # [{{ person.name }}]({{ site.baseurl }}{{ person.url }}) #
  **{{ person.birthDate }} - {{ person.deathDate }}**
{% endfor %}

> Как много нашего ушло с тобой, как много твоего осталось с нами...

Наше генеалогическое древо на [myheritage.com](https://www.myheritage.com/site-family-tree-78241683/family-site)