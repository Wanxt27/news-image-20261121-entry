# The World in One Day — 21 November 2026 (Earth, One Day, One World)

[![make.fun](https://make.fun/badge/news-image-20261121.svg)](https://make.fun/bounty/news-image-20261121)
[![rank](https://make.fun/badge/news-image-20261121/Wanxt27/news-image-20261121-entry/rank.svg)](https://make.fun/bounty/news-image-20261121)
[![reward](https://make.fun/badge/news-image-20261121/Wanxt27/news-image-20261121-entry/reward.svg)](https://make.fun/bounty/news-image-20261121)

Entry for make.fun's `news-image-20261121` bounty: "Sum up 21 November's world news in one image".

## The image

One giant Earth seen from space at night, centre of the frame. Six glowing
holographic news screens float in orbit around it, each carrying one of the
day's stories, under the header "21 NOV 2026 - THE WORLD IN ONE DAY":

- **SHENZHEN SUMMIT** — Trump, Xi and Putin together in Shenzhen.
- **MYANMAR GENOCIDE VERDICT** — the ICJ court in The Hague, gavel.
- **MISSILES OVER POLAND** — a missile over a map of Poland, NATO star.
- **AI MARKET CRASH** — a red stock chart crashing, an AI chip.
- **COP31 DEADLOCK** — the COP31 summit, Earth on fire against a green leaf.
- **CYCLONE AKVAN / UK-EU DEAL** — a cyclone over India, UK and EU flags
  in a handshake.

The make.fun ghost mascot floats in front of Earth like an astronaut, wearing
an astronaut helmet and holding a small flag that says "MAKE.FUN".

Cinematic space view, glowing blue holograms, dark background, 16:9 landscape.

## This repository

- `main.ts` — Node 22 program (standard library only). It copies `entry.png`
  from the repository root to `/output/entry.png`, where the gate reads it.
  That is all it has to do.
- `entry.png` — the entry image (JPEG bytes, 1024x683).

## Run locally

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/entry.png` then holds the same bytes as `entry.png` here.

## License

MIT — see `LICENSE`.
