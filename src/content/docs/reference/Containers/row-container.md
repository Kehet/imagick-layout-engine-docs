---
title: RowContainer
description: RowContainer
---

`RowContainer` lays out its child items horizontally in a single row. It divides the available width among children, optionally honoring fixed widths for items that specify a `size`, and then draws each child side-by-side.

## Example
```php
$container = new RowContainer;
$container->addItem(new Rectangle(draw(fill: '#fee2e2')));
$container->addItem(new Rectangle(draw(fill: '#fca5a5')));
$container->addItem(new Rectangle(draw(fill: '#dc2626')));
$container->addItem(new Rectangle(draw(fill: '#450a0a')));

// Draw container onto image
$container->draw($imagick, $x, $y, $width, $height);
```
