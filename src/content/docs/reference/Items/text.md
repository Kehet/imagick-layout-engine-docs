---
title: Text
description: Text
---

`Text` is a drawable item that renders a single-line text string onto an `Imagick` canvas. 
It automatically scales the font size down so the text fits within the provided drawing box, 
and supports alignment via `Gravity`, as well as `margin`, `padding`, and `border`.

## Constructor
```php
public function __construct(
    ImagickDraw $draw,         // Text style: fill, font, font size (starting value), etc.
    string $text,              // The content to draw
    int $initialFontSize = 60, // Starting font size for auto-fit
    int $minFontSize = 10,     // Minimum font size for auto-fit
    Gravity $gravity = Gravity::TOP_LEFT // Text alignment inside the box
)
```

## Example
```php
$draw = draw(fill: 'black');
$draw->setFont('DejaVu-Sans');

$drawBorder = draw(stroke: 'red', strokeWidth: 10);

$text = new Text(
    $draw,
    'Hello World',
    initialFontSize: 72,
    minFontSize: 24,
    gravity: Gravity::CENTER
);

// Optional spacing and border
$text->setMargin(10);
$text->setPadding(8);
$text->setBorder($drawBorder);

// Draw onto image
$text->draw($imagick, $x, $y, $width, $height);
```
