---
title: "Extending drawable: QR Code example"
description: "Extending drawable: QR Code example"
---

This example uses third party library [Bacon/BaconQrCode](https://github.com/Bacon/BaconQrCode) to generate QR Code.

```php
<?php

class QRCode implements DrawableInterface
{

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
        
        // Don't forget to draw the border
        $this->drawBorders($imagick, $borderX, $borderY, $borderWidth, $borderHeight);
    }

}
```
