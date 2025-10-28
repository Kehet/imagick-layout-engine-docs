---
title: Rectangle
description: Rectangle
---

`Rectangle` is a drawable item in the Imagick Layout Engine that renders a rectangle onto an `Imagick` canvas.
It supports `margin`, `padding`, and `border`

## Example
```php
$drawBackground = draw(fill: 'red');
$drawBorder = draw(stroke: 'black', strokeWidth: 10);

$rectangle = new Rectangle($drawBackground);

// Optional spacing and border
$rectangle->setMargin(10);
$rectangle->setPadding(8);
$rectangle->setBorder($drawBorder);

// Draw rectangle onto image
$rectangle->draw($imagick, $x, $y, $width, $height);
```
