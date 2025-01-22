# The Intrapology Software

If you want to get set up as quickly as possible, start [here](./docs/02_getting-started-with-the-intrapology-software.md).

- [Introduction](#introduction)
  - [The Intrapology Software in a Nutshell](#the-intrapology-software-in-a-nutshell)
  - [Example](#example)
  - [Hello World Template vs App](#hello-world-template-vs-app)
- [Overview](./docs/01_overview.md)
  - [Performance Structure](./docs/01_overview.md#performance-structure)
  - [User Interface](./docs/01_overview.md#user-interface)
- [Getting Started With the Intrapology Software](./docs/02_getting-started-with-the-intrapology-software.md)
  - [Downloading the Starter Template](./docs/02_getting-started-with-the-intrapology-software.md#downloading-the-starter-template)
  - [Basic Configuration](./docs/02_getting-started-with-the-intrapology-software.md#basic-configuration)
  - [Testing a Performance on Your Computer](./docs/02_getting-started-with-the-intrapology-software.md#testing-a-performance-on-your-computer)
  - [Installing Inky](./docs/02_getting-started-with-the-intrapology-software.md#installing-inky)
- [Writing an Intrapology/Ink script](./docs/03_writing-an-intrapologyink-script.md)
  - [Basics](./docs/03_writing-an-intrapologyink-script.md#basics)
  - [Interactivity](./docs/03_writing-an-intrapologyink-script.md#interactivity)
  - [Summary](./docs/03_writing-an-intrapologyink-script.md#summary)
  - [Next Steps](./docs/03_writing-an-intrapologyink-script.md#next-steps)
- [Additional Technical Topics](./docs/04_additional-technical-topics.md)
  - [Configuration (`settings.json`)](./docs/04_additional-technical-topics.md#configuration-settingsjson)
  - [Customizations to Visual Presentation (`settings.json` styles)](./docs/04_additional-technical-topics.md#customizations-to-visual-presentation-settingsjson-styles)
- [Other](./docs/05_other.md)
  - [CSS Glossary](./docs/05_other.md#css-glossary)
  - [Accessibility Tips](./docs/05_other.md#accessibility-tips)
  - [Resources for Learning to Write Non-Linear Narratives](./docs/05_other.md#resources-for-learning-to-write-non-linear-narratives)

# Introduction

## The Intrapology Software in a Nutshell

Intrapology’s software is a tool for building performances which are interactive and accessible.

### Interactivity

Our software facilitates the creation of performances that can incorporate and react to input from the audience. This is accomplished with the following features:

- [Audience input UI:](./docs/01_overview.md#audience-input) Intrapology’s software allows audience members to contribute via [multiple-choice](./docs/01_overview.md#multiple-choice) and [free-response](./docs/01_overview.md#free-response) questions.
- Dynamic scripts: Our software allows authors to write dialogue and stories that change based on input received from the audience.

### Accessibility

Making performances more accessible is a key goal of Intrapology’s software. All performances built with the Intrapology software have these accessibility features:

- The UI includes [a live video stream](./docs/01_overview.md#audience-view-main), enabling both fully-online and hybrid performances. This allows performances built using the Intrapology software to be more accessible to people who face barriers to in-person venues.
- A built-in subtitles interface which:
    - Automatically generates subtitles from the performance script.
    - [Displays subtitles](./docs/01_overview.md#subtitles-view) in sync with the performance.

## Example

Here is an excerpt from a real performance built with our software (you can find the entire recording [here](https://peertube.intrapology.com/w/5Hrv9k1YgywsQh6TUFBzrB)):

[Meghna Jayanth Oct 2024 Scratch Jam Performance - Intro](https://github.com/user-attachments/assets/da64e132-89cd-4b8c-affc-774ab147a98d)

## Hello World Template vs App

There are two versions of the Intrapology software available to download:

### Intrapology Hello World

Intrapology Hello World is a starter template for artists who have limited software development knowledge. If you are new to our software, it is best to start with this version. For information on how to download the Hello World template, see this section: [Downloading the Starter Template](./docs/02_getting-started-with-the-intrapology-software.md#downloading-the-starter-template).

### Intrapology App

Intrapology App is the core of Intrapology’s software. If you want to make customizations that are not possible with the Hello World starter template, then you will need to build on top of the core Intrapology App code. Building with Intrapology App requires the ability to program with JavaScript, React, and CSS. Intrapology App can be found here: [https://github.com/squinky/intrapology-app](https://github.com/squinky/intrapology-app).
