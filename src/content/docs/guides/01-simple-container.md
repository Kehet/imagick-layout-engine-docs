---
title: Drawing a simple container
description: Drawing a simple container
---

## Output
![Example output image](../../../assets/01-simple-container.png)

## Code

```php
<?php

require 'vendor/autoload.php';

use Kehet\ImagickLayoutEngine\Containers\RowContainer;
use Kehet\ImagickLayoutEngine\Items\Rectangle;

$width = 1500;
$height = 1000;

// Create new image with a white background

$imagick = new Imagick;
$imagick->newImage($width, $height, new ImagickPixel('white'));

// Define the root container, usually RowContainer or ColumnContainer

$root = new RowContainer;
$root->addItem(new Rectangle(draw(fill: '#fb4934')));
$root->addItem(new Rectangle(draw(fill: '#b8bb26')));
$root->addItem(new Rectangle(draw(fill: '#fabd2f')));
$root->addItem(new Rectangle(draw(fill: '#83a598')));

// Draw container onto image

$root->draw($imagick, 0, 0, $width, $height);

// Output image as png to file

$imagick->setImageFormat('png');
$imagick->writeImage(__DIR__.'/01-simple-container.png');
```

