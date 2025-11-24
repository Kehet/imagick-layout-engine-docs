---
title: Drawing a image
description: Drawing a image
---

## Output

![Example output image](../../../assets/05-image.png)

## Code

```php
<?php

require 'vendor/autoload.php';

use Kehet\ImagickLayoutEngine\Containers\ColumnContainer;
use Kehet\ImagickLayoutEngine\Enums\ImageMode;
use Kehet\ImagickLayoutEngine\Items\Image;

$width = 1500;
$height = 1000;

$largeImage = 'example-image-large.jpeg';

// Create new image with white background

$imagick = new Imagick;
$imagick->newImage($width, $height, new ImagickPixel('white'));

// Define root container

$root = new ColumnContainer;

// Default doesn't scale image up or down
$root->addItem(new Image($largeImage));

// Use fill for large images to shrink those to fit 
// if image is smaller than slot, it will be stretched
$root->addItem(new Image($largeImage, ImageMode::FILL));

// Use fit to show full image without scaling
// if image aspect ratio is different than slot, there will be transparent bars
$root->addItem(new Image($largeImage, ImageMode::FIT));

// Draw container onto image

$root->draw($imagick, 0, 0, $width, $height);

// Output image as png to file

$imagick->setImageFormat('png');
$imagick->writeImage(__DIR__.'/05-image.png');
```
