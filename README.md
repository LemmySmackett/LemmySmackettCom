# LemmySmackett.com

**LemmySmackett.com** is a personal website built using [Hugo](https://gohugo.io/), a fast and flexible static site generator. The site showcases short stories, writings, and various other content, styled in a minimalist design.

## Features
- **Static Site**: Built using Hugo, the site is pre-rendered for speed and performance.
- **Custom Taxonomy**: Stories are categorized using a custom taxonomy for different lengths like micro-fiction, short stories, novellas, and novels.
- **Dark Mode**: Toggleable dark mode for better reading experience.
- **Reader Mode**: A clean, distraction-free reading mode for long-form content.
- **Content Organization**: Stories are dynamically listed by popularity, recency, and length.

## Getting Started

### Prerequisites

- **Hugo**: Make sure you have Hugo installed. Follow the [installation instructions](https://gohugo.io/getting-started/installing/) if you haven't installed it yet.

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/username/lemmysmackett.com.git
    cd lemmysmackett.com
    ```

2. Install any necessary themes or dependencies. For example, if you're using a Hugo theme, make sure the theme submodule is initialized:

    ```bash
    git submodule update --init --recursive
    ```

3. Run the site locally:

    ```bash
    hugo server
    ```

    The site will be available at `http://localhost:1313/`.

### Building the Site

To generate the static files for deployment, run:

```bash
hugo
