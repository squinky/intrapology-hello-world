[(Click here for main table of contents)](../README.md)

# Other

- [CSS Glossary](#css-glossary)
- [Accessibility Tips](#accessibility-tips)
- [Resources for Learning to Write Non-Linear Narratives](#resources-for-learning-to-write-non-linear-narratives)

## CSS Glossary

### Color

There are several ways to specify a color.

**Named Colors**

The simplest method for specifying a color is to use a name, for example:

```json
"mainTextColor": "blue",
```

A list of available color names can be found here: [https://developer.mozilla.org/en-US/docs/Web/CSS/named-color#standard_colors](https://developer.mozilla.org/en-US/docs/Web/CSS/named-color#standard_colors)

**RGB**

Colors can also be specified in terms of red, green, and blue intensity percentages (RGB), like this:

```javascript
rgb(RED INTENSITY, GREEN INTENSITY, BLUE INTENSITY)
```

With this approach, the color is derived by mixing the three primary colors, set to certain intensities. An intensity of 0% for a primary color means that it contributes nothing to the final result. If all three primary colors are set to 0% intensity, then you get black: `rgb(0%, 0%, 0%)` is equivalent to the named color `"black"`. If all three primary colors are set to 100% intensity, then you get white: `rgb(100%, 100%, 100%)` is equivalent to the named color `“white”`. Setting the intensities of two of the primary colors to 0%, and then setting the intensity of the remaining primary color to something greater than 0%, will give you a shade of that primary color: `rgb(0%, 90%, 0%)` is a bright green, whereas `rgb(0%, 20%, 0%)` is a dark green. Nearly any color imaginable can be described this way. For example, to set the main text color of the Intrapology UI to a mild purple, you could specify a mix of: red at 60% intensity, green at 0% intensity, and blue at 50% intensity with the following:

```json
"mainTextColor": "rgb(60%, 0%, 50%)",
```

You can read more about the CSS `rgb` function here: [https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/rgb](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/rgb)

**Hex**

Colors can be specified via what is known as “hexadecimal” format. This can be useful if you are using a software tool to pick colors (such as this: [https://www.hexcolortool.com/#c3ff00](https://www.hexcolortool.com/#c3ff00)) and the given software provides the hex value of a color you have selected. For more information about the hex format go here: [https://developer.mozilla.org/en-US/docs/Web/CSS/hex-color](https://developer.mozilla.org/en-US/docs/Web/CSS/hex-color).

**Further Reading**

This article provides a technical overview of the various ways that colors can be described: [https://developer.mozilla.org/en-US/docs/Web/CSS/color_value](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)

### Font

The font for a given setting is specified as a list of one or more comma-separated font names. The first font in the list (in left to right order) found on the device viewing the UI will be used. For example, when given the following:

```json
"mainFont": "Arial, Helvetica, sans-serif",
```

the web browser being used to view the Intrapology UI will first try to use Arial for the main font. If Arial is not found, then the browser will look for Helvetica. If Helvetica is not available either, then the default sans serif font for the browser will be used.

**Generic Fonts**

The most basic kind of font that can be chosen is a ‘generic’ font. Generic font names refer to general categories, leaving it up to the web browser to decide the exact font to use within that category. It is usually a good idea to include a generic font name as the last item in a list of font options, in case none of the other fonts specified are available. The generic font names are:

- “serif”
- “sans-serif”
- “monospace”
- “cursive”
- “fantasy”

Examples of each category can be found here: [https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Text_styling/Fundamentals#web_safe_fonts](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Text_styling/Fundamentals#web_safe_fonts)

**Web Safe Fonts**

There is a small set of fonts which are present on nearly all modern devices, making them reliable choices for non-generic backup options. You can find these listed here: [https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Text_styling/Fundamentals#web_safe_fonts](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Text_styling/Fundamentals#web_safe_fonts)

**Custom Fonts**

Here is a quick guide to using a custom font:

1. Go to [fonts.google.com](https://fonts.google.com/) and find a font that you like. This guide will refer to this font: [https://fonts.google.com/specimen/Libre+Baskerville](https://fonts.google.com/specimen/Libre+Baskerville), but the process will be the same for any other font.
2. On the page for the font you have selected, click the “Get font” button in the upper right corner of the view.
3. Make sure that the text at the top of the page says "1 font family selected”. If the number selected is greater than one you may have accidentally selected multiple fonts. In such a case you will want to use the trash bin icon next to any extraneous fonts to remove those from the selection list.
4. Click the “Get embed code” button on the right-hand edge of the page.
5. On the “Embed code” page, the right-hand portion of the view will have a pair of buttons labelled “\<link\>” and “@import”. “\<link\>” is selected by default, select “@import” instead.
6. There will be a box labelled “\<Font Name\>: CSS classes”. Inside the box will be some text, you can ignore most of it, but take a note of the first line you see which begins with “font-family: “. This line will show you how to refer to the font by name in `settings.json`. For Libre Baskerville, the line in question is: `font-family: "Libre Baskerville", serif;`. The bit to write down somewhere is the font name in between quotes (e.g. ”Libre Baskerville”)
7. There will be a box labelled “Embed code in the \<head\> of your html”. Inside the box will be a button labelled “Copy code”: click this button.
8. Open `intrapology-hello-world/index.html` in a text editor. Right between this bit of text: `<!doctype html><html lang="en"><head>` (found at the very beginning of the file) and this bit of text: `<meta charset="utf-8"/>`, paste the code that was copied during the previous step. Make sure to save this change to the file.
9. Open `intrapology-hello-world/settings.json` and add the font name from step 6 to the beginning of the list of fonts. Make sure that you use single quotes instead of double quotes. For example, if adding Libre Baskerville the whole line in `settings.json` should be: 
    
    ```
    "mainFont": "'Libre Baskerville', Courier, 'Courier New', monospace",
    ```
    

### Background

CSS background is a rather large topic, only a small example of what is possible will be given here.

The simplest possible background can be set by providing any legal CSS color value, for example:

```json
"taskbarBackground": "blue",
```

You can also specify a url for a background image, how the image should be scaled and positioned, and what color should be present beyond the edges of the image, among many other properties. Each property is separated by a space. For example:

```json
"desktopBackground": "orange center 30% no-repeat url('https://squinky.github.io/intrapology-hello-world/images/stars.gif')",
```

will result in a background with the image at ‘https://squinky.github.io/intrapology-hello-world/images/stars.gif’ scaled to 30% size, centered, with the color orange in the areas not covered by the image.

> [!TIP]
> `url(...)` allows you to specify any image that is located somewhere on the internet (or even your own images that you add to your performance, more on that in the next section). To do so, you simply need to provide the url (internet address) where the image is located.

**Using Your Own Images**

You can use your own custom image for a background through the following process:

1. Save the image in the `intrapology-hello-world/images` folder. For the sake of discussion we will imagine that your image is named “my-background.jpg”. The image should thus be saved to `intrapology-hello-world/images/my-background.jpg`.
2. Refer to the image for a background with the following: `url('/images/my-background.jpg')`.

**Further Reading**

CSS backgrounds can be used for even more complex things such as gradients and other kinds of procedural patterns. To learn more about what is possible, start here: [https://developer.mozilla.org/en-US/docs/Web/CSS/background](https://developer.mozilla.org/en-US/docs/Web/CSS/background)

## Accessibility Tips

### Sign Language Interpretation

We recommend including sign language interpretation in your performance, to broaden the range of people who can participate. Currently the best way to integrate a sign language interpreter is for them to be given a persistent place in your video stream (for example, in the bottom-right corner of the video).

### Dialogue Block Length and Subtitles

Dialogue is grouped exactly as formatted in your script. Long stretches of dialogue, when written as single paragraphs, can result in subtitles which are impractical.

> [!IMPORTANT]
> The maximum recommended length for a single block of dialogue is 128 characters. Anything longer will require more than two lines to display on most devices.

To keep subtitles at a manageable length, break large blocks of dialogue into separate groups. For example, this entire block of dialogue:

```
Iris: You have to take this all in context. You are in a position to understand these challenges with remarkable insight. You can see how a world is being recreated in every moment, and how it changes a little bit every day. I know it is hard to bear the reality of what is happening, but when you see it with this grounded perspective, you recognise that it's not the end of the world.
```

would appear as a single subtitle all at once. It is usually easier for people to read subtitles that are not as long. To ensure that this dialogue is instead displayed as a sequence of several shorter subtitles, it is better to manually split up the block like this:

```
Iris: You have to take this all in context. You are in a position to understand these challenges with remarkable insight. 

Iris: You can see how a world is being recreated in every moment, and how it changes a little bit every day. 

Iris: I know it is hard to bear the reality of what is happening, but when you see it with this grounded perspective, you recognise that it's not the end of the world.
```

## Resources for Learning to Write Non-Linear Narratives

- An interactive introduction to the various kinds of choices you can present the audience with in your performance: [https://clarafv.itch.io/taxonomy-of-narrative-choices](https://clarafv.itch.io/taxonomy-of-narrative-choices)