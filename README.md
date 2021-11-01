# Social Proof Testimonials Slider

> Showcase your expertise with an easy-to-customize responsive carousel slider of your featured testimonials.

## Description

Seeing is believing. And one of the strongest ways to communicate your expertise is with a visual portfolio of bona fides scrolling along your website. With each click, a slide appears sharing testimonials, logos of awards, reviews, sites you've appeared in or been featured on, or links to your guest posts on popular blogs. It's a quick, seamless way to communicate your online authority, credibility, and skill set through social proof. And it's easy to populate, update, and customize on your WordPress site. As the Social Proof Slider scrolls, your authority grows.

## Installation

This section describes how to install the plugin and get it working.

1. Upload the plugin files to the `/wp-content/plugins/sp-testimonial-slider` directory, or install the plugin through the WordPress plugins screen directly.
2. Activate the plugin through the 'Plugins' screen in WordPress
3. Start by adding a new testimonial -- go to the new Testimonials menu option and select 'Add New.'
4. To use the widget in a sidebar, go to Appearance->Widgets and drag a copy of the 'Social Proof Slider' widget to your desired sidebar.
5. To configure Shortcode display settings, use the Settings->Social Proof Slider screen. For widgets, you will see the settings panel for each Social Proof Slider widget individually.
6. Easily embed responsive YouTube or Vimeo videos! Enter your video code into the "Testimonial Text" field in the following format: `https://www.youtube.com/watch?v=abcde123456` or `https://vimeo.com/12345678` and the rest is done automatically! *Note:* It is recommended to disable the "Auto-play" feature when embedding videos.

## Development

To compile the plugin code on your local development environment, you will need to have `Node.js` and `npm` installed.

Follow these steps:

1. Fork the plugin repo into your own GitHub account, then clone it to a folder on your computer.
2. Open the Terminal and navigate to the plugin directory.
3. Install the dependencies by typing: `npm install`
4. Run Webpack: `npx webpack`
5. You should see the project compile - you're ready to develop!

## Frequently Asked Questions

### Can I use the Social Proof Slider with the Gutenberg block editor?
Yes! We've added Block Editor support to the plugin - just search for 'SP Testimonials Slider' or find it under the 'Common Blocks' category in the list of Blocks.
Alternatively, you can use a Shortcode block to display the Social Proof Slider - use the following shortcode: `social-proof-slider`

### Can I show testimonials by category?
Yes! We've added the ability to create Categories and assign them to your testimonials. In the Block, there is a setting to Filter Posts. Use the Category slug in the block/shortcode/widget settings to hide or show only testimonials assigned to that category.

### How do I create a slider without using the Custom Post Type?
You can easily create a new slider on any page by using shortcodes. You will need to wrap each testimonial item in a shortcode: `[spslider-item]Your Testimonial Text Here[/spslider-item]`. Then you will need to wrap ALL your testimonial items with the manual slider shortcode:
```
[spslider-manual]
[spslider-item]Your Testimonial Text Here[/spslider-item]
[spslider-item]Your Testimonial Text Here[/spslider-item]
[spslider-item]Your Testimonial Text Here[/spslider-item]
[/spslider-manual]
```
Please see the Screenshots for an example.

### How do I report a bug or request a feature?
Please open an Issue on the GitHub project:
[Report an Issue on GitHub](https://github.com/brandid/social-proof-slider/issues)

### Something Else?
Please review our Support resources for further information:
[View Support resources](https://buildmybrandid.com/support/)

If you are still stuck, please use our Product Support Form:
[Get Product Support](https://buildmybrandid.com/product-support/)

## Changelog

### 2.2.2 - (Nov 1, 2021)
* Fix: Fixes invalid CSS syntax error.

### 2.2.1 - (Sept 9, 2021)
* Update: Compatible with WordPress 5.8.1

### 2.2.1 - (Feb 16, 2021)
* Update: Compatible with WordPress 5.6.1
* Fix: Updates Block code to replace older deprecated functions.

### 2.2.0 - (Nov 12, 2019)
* Added: New SP Slider Block: Easily place a 'SP Testimonials Slider' block anywhere on your page and visually configure its display settings in real-time using the Block Editor.
* Update: Compatible with WordPress 5.3

### 2.1.2 - (Aug 9, 2019)
* Added: Categories to the testimonials CPT
* Added: The ability to only show testimonials in a category
* Update: Compatible with WordPress 5.2.2

### 2.1.1 - (May 15, 2019)
* Update: Compatible with WordPress 5.2

### 2.1.0 - (Feb 21, 2019)
* Added: Manual Slider Shortcodes: Create a new slider inline, by using shortcodes. A great way to show different testimonials per page. Uses your Shortcode Slider settings.
* Fix: Compatible with WordPress 5.1

### 2.0.13 - (Jan 21, 2019)
* Fix: Testimonial Text output: line breaks now display as expected

### 2.0.12 - (Dec 27, 2018)
* Fix: Compatible with WordPress 5.0.2
* Fix: Removed the link to create a new testimonial for users who are not logged in
* Fix: Settings Page: Featured Image Border settings now only show when "Show Image Border" is enabled
* Fix: Settings Page: Featured Image Border Radius and Featured Image Border Padding settings now accept '0' as a value

### 2.0.11 - (Jul 6, 2018)
* Fix: CSS update to ensure Dots appear correctly on mobile

### 2.0.10 - (Jun 28, 2018)
* Fix: Shortcode sliders now correctly read the setting for "Smart Quotes" under Settings > Social Proof Slider

### 2.0.9 - (Jun 11, 2018)
* Fix: Adds check for SlickJS init, to prevent plugin conflicts

### 2.0.8 - (May 2, 2018)
* Added: New "Image Border" option -- Adds a Border around the Featured Image
* Added: New "Border Color" option -- Set the color of the Image Border
* Added: New "Border Thickness" option -- Set the thickness of the Image Border
* Added: New "Border Padding" option -- Set the amount of padding between the Image and the Border
* Fix: Color picker labels are no longer hidden by default
* Fix: Color picker in Widgets now triggers a change update

### 2.0.7 - (Jan 25, 2018) =
* Updated: Made the "Auto-Height" option easier to understand. Now choose between: "Variable Height" or "Fixed Height".
* Fix: Compatible with WordPress 4.9.2

### 2.0.6 - (Nov 7, 2017)
* Added: New "Auto-Height" option -- An option to set if the testimonials area will dynamically adjust to the height of each testimonial. When disabled, the testimonials area will stay fixed at the tallest testimonial height.
* Added: New "Padding Override" options -- Manually set the spacing between the testimonials items, without having to edit any of your theme CSS code. Includes: content area padding top/bottom, featured image margin top/bottom, text padding top/bottom, quote margin bottom, dots margin top.
* Fix: Updated version of Slick JS from 1.6.0 to 1.8.1 -- now using a CDN to serve the JS and CSS files
* Fix: Updated styling to visually distinguish sub-options

### 2.0.5 - (Jun 14, 2017)
* Fix: Compatible with WordPress 4.8

### 2.0.4 - (Mar 27, 2017)
* Fix: Removed some testing output text that was mistakenly left in place
* Fix: Removed a "undefined index" PHP warning
* Fix: Simplified the calls to the testimonials database

### 2.0.3 - (Mar 23, 2017)
* Added: New "Image" column added to the Testimonials admin screen
* Fix: Widgets -- CSS background-color now gets set to "transparent" when no color is chosen
* Fix: Shortcode -- now properly does "Sort by: random" when selected

### 2.0.2 - (Mar 19, 2017)
* Fix: Removed "undefined index: class" PHP warnings
* Fix: Genesis Theme compatibility: no more duplicate IDs for widget containers
* Fix: Removed CSS top-padding on testimonial text, when not showing featured images

### 2.0.1 - (Mar 11, 2017)
* Fix: Incorrect PHP opening tag, which caused code to display inside Widget Settings, on some installs
* Fix: Added Shortcode Instructions to Shortcode Settings page

### 2.0.0
* Update: Completely refactored all code - now follows the recommended WordPress coding and documentation standards.
* Update: This slider uses Slick Carousel - http://kenwheeler.github.io/slick/
* Update: All text input fields are now HTML-compatible. Add photos, logos or videos to your testimonials!
* Fix: Allow transparent background color
* Fix: Hide "Author Name" and "Author Title" if fields are empty
* New Option: Auto-play
* New Option: Auto-play - Display time
* New Option: Animation style ("fade", "slide")
* New Option: Add smart quotes around testimonial text
* New Option: Text alignment ("left", "center", "right")
* New Option: Show prev/next arrows
* New Option: Show navigation dots
* New Option: Navigation dots color
* New Feature: Embed YouTube or Vimeo videos

### 1.1.1
* Adds option to show or hide Featured Images

### 1.1
* Adds option to Include/Exclude testimonials by ID

### 1.0
* First release. Hello, World!
