---
title: TextWrap
description: TextWrap
---

`TextWrap` draws multi‑line text inside a given box, automatically wrapping words and shrinking the font size so the whole block fits vertically. 
It supports alignment via `Gravity` and the same `margin`, `padding`, and `border` features as other drawable items.


## Constructor
```php
public function __construct(
    ImagickDraw $draw,         // Text style: fill, font, font size (starting value), etc.
    string $text,              // The content to draw
    int $initialFontSize = 60, // Starting font size for auto-fit
    int $minFontSize = 10,     // Minimum font size for auto-fit
    Gravity $gravity = Gravity::TOP_LEFT // Text and block alignment
)
```

## Example
```php
$draw = draw(fill: 'black');
$draw->setFont('DejaVu-Sans');

$drawBorder = draw(stroke: 'red', strokeWidth: 10);

$text = new TextWrap(
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

## Notes and limitations
- Wrapping is word‑based (splits on spaces); hyphenation and character‑level breaking are not implemented.
- If the text still doesn’t fit at `minFontSize`, excess lines are not drawn (no ellipsis).
- Line spacing equals the font metrics text height; custom line spacing isn’t exposed.
- Explicit newlines in the input aren’t specially handled (the implementation splits by spaces). If you need manual breaks, consider splitting text and drawing multiple `TextWrap` blocks or extend the class.
