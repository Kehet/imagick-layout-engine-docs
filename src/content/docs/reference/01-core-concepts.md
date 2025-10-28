---
title: Core concepts
description: Core concepts
---

### DrawableInterface
All drawable elements implement `DrawableInterface`. It defines a single method that receives the drawing context and the area in which the item must render itself:

```php
interface DrawableInterface {
    public function draw(Imagick $imagick, int $x, int $y, int $width, int $height): void;
}
```

- `Imagick $imagick`: the target image/canvas.
- `x, y`: top-left coordinates of the area allocated to the item.
- `width, height`: the size allocated to the item.

Any class (e.g., `Text`, `Image`, `Rectangle`, `TextWrap`) that can render to the canvas implements this interface.

### Container
A `Container` is a drawable element that groups and lays out child items. It implements `DrawableInterface` and includes margin, padding, and border behaviors via traits.

Key points:
- You add children with `addItem(DrawableInterface $item, ?int $forceSize = null)`. The optional `forceSize` lets a specific container implementation constrain a child’s measured size (e.g., enforcing a row/column size).
- A container is responsible for drawing its children in order (the outermost container is drawn by you).
- Containers commonly use the three traits below to compute their content box and to draw borders.

### Item
“Item” is any drawable unit that implements `DrawableInterface`. Items may also use the margin/padding/border traits to participate in spacing and decoration:
- `Text`, `Image`, `Rectangle`, `TextWrap` are examples of items.
- In `draw(...)`, an item should render within the area it is given (after the container has accounted for margins, padding, and borders).

### Margin
`Margin` is the outer spacing around an element. It reduces the available area before the element (or container) draws its border, padding, and content.

- Properties: `marginTop`, `marginRight`, `marginBottom`, `marginLeft` (nullable `int`).
- Setters:
    - `setMargin(int $all)`
    - `setMargin(int $vertical, int $horizontal)`
    - `setMargin(int $top, int $horizontal, int $bottom)`
    - `setMargin(int $top, int $right, int $bottom, int $left)`
    - Side-specific: `setMarginTop(...)`, `setMarginRight(...)`, `setMarginBottom(...)`, `setMarginLeft(...)`.

Practical effect: margins push the element away from its neighbors and reduce the space available to the element (and its border/padding/content).

#### Example
```php
$item->setMargin(10, 20); // top=10 right=20 bottom=10 left=20
```

### Padding
`Padding` is the inner spacing between the border and the content.

- Properties: `paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`.
- Setters mirror margin: `setPadding(...)` with 1–4 arguments, plus side-specific setters.

Practical effect: padding increases the space around the content inside the element’s border.

#### Example
```php
$item->setPadding(10, 20); // top=10 right=20 bottom=10 left=20
```

### Border
`Border` decorates the edges of an element and slightly reduces the space available for content.

- Side draw objects: `borderTop`, `borderRight`, `borderBottom`, `borderLeft` (`?ImagickDraw`). You can supply one draw object for all sides or one per side via `setBorder(...)`.
    - `setBorder(ImagickDraw $all)`
    - `setBorder(ImagickDraw $vertical, ImagickDraw $horizontal)`
    - `setBorder(ImagickDraw $top, ImagickDraw $horizontal, ImagickDraw $bottom)`
    - `setBorder(ImagickDraw $top, ImagickDraw $right, ImagickDraw $bottom, ImagickDraw $left)`
    - Side-specific: `setBorderTop(...)`, `setBorderRight(...)`, `setBorderBottom(...)`, `setBorderLeft(...)`.
- Insets: The trait computes insets from each side’s `strokeWidth`. These insets are subtracted from the available box via `getBoundingBoxInsideBorder(...)` so the content does not overlap the border.
- Rendering: `drawBorders($imagick, $x, $y, $w, $h)` draws each side’s line centered on the edge, offset by half the stroke width to visually align borders.

#### Example
```php
$draw = new ImagickDraw();
$draw->setStrokeColor('black');
$draw->setStrokeWidth(2);

// or with helper
$draw = draw(stroke: 'black', strokeWidth: 2);

$item->setBorder($draw);
```
