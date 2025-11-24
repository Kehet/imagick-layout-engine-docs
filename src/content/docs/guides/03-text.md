---
title: Drawing a text
description: Drawing a text
---

## Output

![Example output image](../../../assets/03-text.png)

## Code

```php
<?php

require 'vendor/autoload.php';

use Kehet\ImagickLayoutEngine\Containers\ColumnContainer;
use Kehet\ImagickLayoutEngine\Items\Text;

$width = 1500;
$height = 1000;

// Create new image with white background

$imagick = new Imagick;
$imagick->newImage($width, $height, new ImagickPixel('white'));

// Define root container

$blackFill = draw(fill: 'black');

$root = new ColumnContainer;
$root->addItem(
    new Text(
        $blackFill,
        'Lorem Ipsum Dolor',
        initialFontSize: 120 // this forces the font size to be larger than the default if it fits
    )
);
$root->addItem(
    new Text(
        $blackFill,
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum vulputate eros at rutrum.'
        // default size is 10px - 40px
    )
);
$root->addItem(
    new Text(
        $blackFill,
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis aliquam pulvinar. Donec dictum mollis volutpat. Nulla facilisi. Nulla egestas hendrerit lobortis. Proin tincidunt interdum eros a pharetra. Nam tincidunt, justo eget pulvinar consequat, velit tortor iaculis urna, in vulputate libero ipsum at ante. '
        // long text will be smaller
    )
);

// Draw container onto image

$root->draw($imagick, 0, 0, $width, $height);

// Output image as png to file

$imagick->setImageFormat('png');
$imagick->writeImage(__DIR__.'/03-test.png');
```
