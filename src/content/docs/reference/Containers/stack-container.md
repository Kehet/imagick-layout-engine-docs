---
title: StackContainer
description: StackContainer
---

`StackContainer` draws its children on top of each other within the same content area. This can be used eg. to draw text over an image.

## Example
```php
$container = new StackContainer;
$container->addItem(new Image('example-image-large.jpeg', ImageMode::FILL));
$container->addItem(new Text(draw(fill: '#fff'), 'Text over image', initialFontSize: 150, gravity: Gravity::CENTER));

// Draw container onto image
$container->draw($imagick, $x, $y, $width, $height);
```
