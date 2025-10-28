---
title: Image
description: Image
---

The `Image` class is a drawable item that composites a bitmap file onto the layout canvas (or inside a container cell). 
It preserves aspect ratio, supports alignment via gravity, and respects margin/padding/border.

## Constructor
```php
public function __construct(
    string $file,                // Path to the image file
    ImageMode $mode = ImageMode::NONE,
    Gravity $gravity = Gravity::CENTER,
)
```
- `file`: Source image file path passed to `new Imagick($file)`.
- `mode` (`ImageMode`): Controls scaling/cropping behavior.
    - `NONE`: Use original image size; if larger than the box, crop to fit (no scaling).
    - `FIT`: Scale down/up to fit entirely within the box (letterbox may appear), then position by gravity.
    - `FILL`: Scale to fully cover the box, then crop overflow based on gravity.
- `gravity` (`Gravity`): Aligns the image inside the available box. Values include `TOP_LEFT`, `TOP`, `TOP_RIGHT`, `LEFT`, `CENTER`, `RIGHT`, `BOTTOM_LEFT`, `BOTTOM`, `BOTTOM_RIGHT`.


## Example
```php
$drawBorder = draw(stroke: 'black', strokeWidth: 10);

$image = new Image(
    'image.jpg',
    ImageMode::FILL,
    Gravity::CENTER,
);

// Optional spacing and border
$image->setMargin(10);
$image->setPadding(8);
$image->setBorder($drawBorder);

// Draw rectangle onto image
$image->draw($imagick, $x, $y, $width, $height);
```
