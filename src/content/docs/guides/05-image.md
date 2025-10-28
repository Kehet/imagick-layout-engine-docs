---
title: Drawing a image
description: Drawing a image
---

```php
<?php

use Kehet\ImagickLayoutEngine\Containers\RowContainer;
use Kehet\ImagickLayoutEngine\Items\TextWrap;

$width = 1500;
$height = 1000;

// Create new image with white background

$imagick = new Imagick;
$imagick->newImage($width, $height, new ImagickPixel('white'));

// Define root container

$frame = new ColumnContainer;

// Default behavior doesn't scale image
$frame->addItem(new Image($largeImage));

// Large image will shrink to fit
$frame->addItem(new Image($largeImage, ImageMode::FILL));

// Small image will be stretched
$frame->addItem(new Image($smallImage, ImageMode::FILL));

// Draw container onto image

$frame->draw($imagick, 0, 0, $width, $height);

// Output image as png to file

$imagick->setImageFormat('png');
$imagick->writeImage(__DIR__.'/image-fill.png');
```

## Output

![Example output image](../../../assets/image-fill.png)
