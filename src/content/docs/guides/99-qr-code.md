---
title: "Extending drawable: QR Code example"
description: "Extending drawable: QR Code example"
---

This example uses third party library [Bacon/BaconQrCode](https://github.com/Bacon/BaconQrCode) to generate QR Code.

```php
<?php

use BaconQrCode\Renderer\Image\ImagickImageBackEnd;
use BaconQrCode\Renderer\ImageRenderer;
use BaconQrCode\Renderer\RendererStyle\RendererStyle;
use BaconQrCode\Writer;
use Kehet\ImagickLayoutEngine\Items\DrawableInterface;
use Kehet\ImagickLayoutEngine\Traits\BorderTrait;
use Kehet\ImagickLayoutEngine\Traits\MarginTrait;
use Kehet\ImagickLayoutEngine\Traits\PaddingTrait;

require 'vendor/autoload.php';

class QRCode implements DrawableInterface
{

    use BorderTrait;
    use MarginTrait;
    use PaddingTrait;

    public function __construct(public string $data)
    {
    }

    public function draw(Imagick $imagick, int $x, int $y, int $width, int $height): void
    {
        // Calculate the bounding box of the QR code
        [$x, $y, $width, $height] = $this->getBoundingBoxInsideMargin($x, $y, $width, $height);

        $borderX = $x;
        $borderY = $y;
        $borderWidth = $width;
        $borderHeight = $height;

        [$x, $y, $width, $height] = $this->getBoundingBoxInsideBorder($x, $y, $width, $height);
        [$x, $y, $width, $height] = $this->getBoundingBoxInsidePadding($x, $y, $width, $height);

        // Render the QR code
        $renderer = new ImageRenderer(
            new RendererStyle(
                size: min($width, $height),
                margin: 2,
            ),
            new ImagickImageBackEnd()
        );

        $writer = new Writer($renderer);

        // Composite it on image
        $qrCode = new Imagick();
        $qrCode->readImageBlob($writer->writeString($this->data));

        $imagick->compositeImage($qrCode, Imagick::COMPOSITE_DEFAULT, $x, $y);

        $qrCode->clear();

        // Remember to draw the border
        $this->drawBorders($imagick, $borderX, $borderY, $borderWidth, $borderHeight);
    }

}
```
