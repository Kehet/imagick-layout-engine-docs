---
title: Drawing a simple container
description: Drawing a simple container
---

```php
<?php

use Kehet\ImagickLayoutEngine\Containers\RowContainer;
use Kehet\ImagickLayoutEngine\Items\Rectangle;

$width = 1500;
$height = 1000;

// Create new image with white background

$imagick = new Imagick;
$imagick->newImage($width, $height, new ImagickPixel('white'));

// Define root container, can be RowContainer or ColumnContainer

$frame = new RowContainer;
$frame->addItem(new Rectangle(draw(fill: '#fb4934')));
$frame->addItem(new Rectangle(draw(fill: '#b8bb26')));
$frame->addItem(new Rectangle(draw(fill: '#fabd2f')));
$frame->addItem(new Rectangle(draw(fill: '#83a598')));

// Draw container onto image

$frame->draw($imagick, 0, 0, $width, $height);

// Output image as png to file

$imagick->setImageFormat('png');
$imagick->writeImage(__DIR__.'/simple-container.png');
```

## Output

![Example output image](../../../assets/simple-container.png)
