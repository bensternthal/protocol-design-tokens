# Protocol Colors

The standard set of colours for projects that want to harmonize with Firefox’s new Protocol design language.

## Use

### Develop

The Protocol Colors can be installed via npm.

```bash
$ npm install protocol-colors
```

#### CSS

```css
@import url('protocol-colors.css');

.class_name {
  color: var(--blue-60);
}
```

#### Sass

```Sass
@import "protocol-colors.scss";

.class_name {
  color: $blue-60;
}
```

#### Less

```less
@import (reference) "protocol-colors.less";

.class_name {
  color: @blue-60;
}
```

#### JavaScript

```js
import protocol from 'protocol-colors.js';

document.getElementById(id).style.color = protocol.BLUE_60;
```

#### XML

Download and paste [protocol-colors.android.xml](https://github.com/mozilla/protocol-design-tokens/raw/master/protocol-colors/protocol-colors.android.xml) to your Android project. Then:

```xml
<item android:color="@color/blue_60" />
```

#### Swift

Download and paste [protocol-colors.android.swift](https://github.com/mozilla/protocol-design-tokens/raw/master/protocol-colors/protocol-colors.android.swift) to your Swift project. Then:

```swift
UIColor.Protocol.Blue60
```

### Apps

#### Sketch

1. Install [Sketch Palettes](https://github.com/andrewfiorillo/sketch-palettes/) plugin
2. Download [protocol-colors.sketchpalette](https://github.com/mozilla/protocol-design-tokens/raw/master/protocol-colors/protocol-colors.sketchpalette)
3. From Sketch.app Menu Bar Menus select
4. Plugins > Sketch Palettes > Load Palette
5. Select protocol-colors.sketchpalette
6. Select load method to Document Presets or Global Presents

#### GIMP

1. Download [protocol-colors.gpl](https://github.com/mozilla/protocol-design-tokens/raw/master/protocol-colors/protocol-colors.gpl)
2. From Gimp Menu Bar Menus select
3. Windows > Dockable Dialogs > Palettes
4. From Tab Menu select
5. Palettes Menu > Import Palette... > Select Source > Palette file
6. Select protocol-colors.gpl

#### LibreOffice

1. Download [protocol-colors.soc](https://github.com/mozilla/protocol-design-tokens/raw/master/protocol-colors/protocol-colors.soc)
2. From Libre Office Menu Bar Menus select
3. Format > Page... > Area > Color > Load Color List
4. Select protocol-colors.soc

## Contribute

Open an [issue](https://github.com/mozilla/protocol-design-tokens/issues/new) or submit a pull request.

### Get started

```
$ git clone git@github.com:mozilla/protocol-design-tokens.git
$ cd design-tokens/protocol-colors
$ npm install
```

### Add or change color

1. Edit `./protocol-colors.json`
2. In the terminal, run `npm run build`

### Add file type

1. Edit `./build.js`
2. In the terminal, run `npm run build`



