# Color Picker Widget

A color-picker widget built with Next.js and Tailwind CSS. The widget allows users to choose from primary and secondary colors and provides multiple shades for each color. When a user selects a color, its hex value is copied to the clipboard.

## Technical Minimum Requirements

- Node v20.14.0

## Installation

```bash
git clone https://github.com/hawkinsideOut/fieldtech-color-picker.git
cd ./fieldtech-color-picker
npm install
```

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How to Use

1. Once you open your browser to the correct local URL, you will see 2 components:

   - a bordered component with text labeled "After selecting a color shade, click here to paste color into bordered background"
   - 2 colums with 3 rows of color shade options with 5 options to select from each shade of color.

2. Click on one of the color shade options. You should see a notification pop up at the bottom of the screen specifying the color hex value you have clicked. The notification will COPY the color shade's option to your clipboard.

3. Click inside the bordered component's background above the color options to paste the color text. Doing this will PASTE the background's color inside the background, making the background equal to the same color option you just chose.
