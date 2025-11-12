---
title: StackContainer
description: StackContainer
---

`StackContainer` draws its children on top of each other within the same content area.

## Example
```php
$container = new StackContainer;
$container->addItem(new Rectangle(draw(fill: '#fee2e2')));
$container->addItem(new Rectangle(draw(fill: '#fca5a5')));

// Draw container onto image
$container->draw($imagick, $x, $y, $width, $height);
```
