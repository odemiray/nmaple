[![Deploy static content to Pages](https://github.com/odemiray/nmaple/actions/workflows/deploy.yml/badge.svg)](https://github.com/odemiray/nmaple/actions/workflows/deploy.yml)

<p align="center">
  <img src="./img/nmap-banner.png" alt="Nmaple Logo" width="400">
</p>

# Nmaple

**Stop Googling nmap flags. Just click.**

**[Try it live](https://odemiray.github.io/nmaple/)**

Nmaple is a lightweight, browser-based nmap command builder. Pick the scan options you need from organized checkboxes and dropdowns, and Nmaple assembles the full command for you — ready to copy and paste into your terminal.

No frameworks. No build step. No dependencies. Just open `index.html`.

## Features

- **Live command preview** — the nmap command updates in real time as you toggle options
- **Organized by category** — scan types, host discovery, port specification, detection, timing, NSE scripts, evasion, and output
- **Mutually exclusive options handled** — scan type and timing use radio buttons so you can't accidentally combine incompatible flags
- **Free-form inputs** — enter custom port ranges, script names, output filenames, decoy addresses, and more
- **Target field** — optionally add your target IP, hostname, or CIDR so the command is ready to run
- **One-click copy** — copies the assembled command to your clipboard
- **Reset button** — clears everything back to a bare `nmap`
- **Dark terminal-themed UI** — monospace font, dark background, feels right at home next to your terminal
- **Fully responsive** — works on desktop and mobile
- **Zero dependencies** — vanilla HTML, CSS, and JavaScript

## Supported Nmap Options

| Category | Flags |
|---|---|
| Scan Type | `-sS` `-sT` `-sU` `-sA` `-sW` `-sN` `-sF` `-sX` `-sn` |
| Host Discovery | `-Pn` `-PS` `-PA` `-PU` `-PE` `-n` `--traceroute` |
| Port Specification | `-p-` `-F` `-p <range>` `--top-ports <n>` |
| Detection | `-sV` `-O` `-A` `-sC` |
| Timing | `-T0` through `-T5` |
| NSE Scripts | `--script=vuln` `auth` `discovery` `safe` + custom |
| Evasion | `-f` `-ff` `-D` `--source-port` `--data-length` |
| Output | `-v` `-vv` `-d` `--reason` `--open` `--packet-trace` `-oN` `-oX` `-oG` |
| Misc | `-6` `--privileged` |

## Getting Started

```bash
git clone https://github.com/odemiray/nmaple.git
cd nmaple
# Open index.html in your browser — that's it
open index.html        # macOS
xdg-open index.html    # Linux
start index.html       # Windows
```

Or simply download the repository as a ZIP and open `index.html`.

## Usage

1. Open `index.html` in any modern browser
2. Select the scan type, timing, and any other flags you need
3. Optionally enter a target IP address or hostname
4. Click **Copy** to copy the assembled command
5. Paste into your terminal and run

## Project Structure

```
nmaple/
├── index.html    # Page structure and all nmap option controls
├── styles.css    # Dark terminal-themed styling
├── app.js        # Command builder logic and event handling
└── README.md
```

## Contributing

Contributions are welcome! Whether it's adding missing nmap flags, improving the UI, fixing bugs, or suggesting new features — all help is appreciated. However, I intend to keep this tool as basic as possible, so if you have an idea that complicates things in a way that it's no longer a "static webpage", please fork it and let me know about it so I can mention it here.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -m "Add my feature"`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a Pull Request

Some ideas for contributions:

- Add more nmap flags and options
- Add preset/recipe buttons for common scan profiles (e.g. "Quick Scan", "Full Audit")
- Add tooltips with detailed explanations for each flag
- Improve accessibility
- Add dark/light theme toggle
- Add command history or bookmarking

## Deploy with GitHub Pages

This project works out of the box with [GitHub Pages](https://pages.github.com/). To enable it:

1. Go to your fork's **Settings → Pages**
2. Under **Source**, select **Deploy from a branch**
3. Choose `main` branch and `/ (root)` folder
4. Click **Save**

Your site will be live at `https://<your-username>.github.io/nmaple/`.

## License

This project is open source. Feel free to use, modify, and distribute it. Contributions are appreciated as long as it's within [KISS principle](https://en.wikipedia.org/wiki/KISS_principle). If you want to go wild, let me know about your fork so I can display it here for other people.

---

**Nmaple** — because life's too short for nmap cheatsheets.
