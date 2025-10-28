---
title: ColumnContainer
description: ColumnContainer
---

`ColumnContainer` lays out its child items vertically in a single column. It divides the available width among children, optionally honoring fixed heights for items that specify a `size`, and then draws each child side-by-side.

## Example
```php
$container = new ColumnContainer;
$container->addItem(new Rectangle(draw(fill: '#fee2e2')));
$container->addItem(new Rectangle(draw(fill: '#fca5a5')));
$container->addItem(new Rectangle(draw(fill: '#dc2626')));
$container->addItem(new Rectangle(draw(fill: '#450a0a')));

// Draw container onto image
$container->draw($imagick, $x, $y, $width, $height);
```
