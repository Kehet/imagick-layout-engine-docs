---
title: Helpers
description: Helpers
---

The `draw()` function is a small helper that returns a configured `\ImagickDraw` instance for use when drawing shapes, borders, or text.

```php
function draw(?string $fill = null, ?string $stroke = null, int $strokeWidth = 1): \ImagickDraw
```
- `fill` (string|null): Optional fill color. Accepts any Imagick color value (e.g., `'#4ade80'`, `'#000'`, `'red'`).
- `stroke` (string|null): Optional stroke (outline) color. If provided, the stroke will be enabled.
- `strokeWidth` (int): Stroke width in pixels. Only applied when `stroke` is not `null`. Default: `1`.

## Example
```php
$rect = new Rectangle(draw(fill: '#4ade80')); // green fill
```
