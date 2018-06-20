---
layout: base
title: Galerien
permalink: /galery
---

## Galerien
Auf dieser Seite findest du eine Reihe von Galerien (auch Fotostrecken genannt) mit Fotos, welche ich selber von teilweise Großveranstaltungen geschossen habe.

#### Disclaimer
Diese Fotos sind unter der gleichen Lizenz wie auch die gesamte Homepage veröffentlicht. Die Fotos und die Homepage sind unter der Lizenz der [GNU General Public License v3.0](https://github.com/elyday/elyday.github.io/blob/master/LICENSE) veröffentlicht worden. Bitte halte dich an die Lizenz, solltest du die Bilder weiterverwenden wollen.

**Solltest du dich auf einem der Bilder wiedererkennen und du möchtest nicht, dass das Bild in der Galerie auftaucht, so wende dich bitte an [me[at]elyday[dot]net](mailto:me@elyday.net) und ich werde das Bild schnellstmöglich entfernen.**

Nun aber viel Spaß mit den Galerien!

<div class="divider"></div>

<ul class="collection">
    {% assign galery_sites = site.pages | where: "layout", "galery" %}
    {% for item in galery_sites %}
        <a href="{{ item.url }}" class="collection-item">{{ item.title }}</a>
    {% endfor %}
</ul>