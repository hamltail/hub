# Portfolio

Web制作・UI設計・個人開発の制作物を掲載したポートフォリオサイトです。

## Live Demo

🌐 [Webサイトを見る](https://hub.hamltail.dev)

## Design

🎨 [Figmaデザインを見る](https://www.figma.com/design/aiLzbeBUsuAQrv9Da9ldEb/Public?node-id=2147-128&p=f)

## Tech Stack

| Category       | Technologies                                   |
| -------------- | ---------------------------------------------- |
| Design         | Figma                                          |
| Frontend       | Next.js, React, TypeScript, Tailwind CSS       |
| Testing        | Playwright, Lighthouse CI, k6, Vitest, Stryker |
| Security       | OWASP ZAP, CodeQL                              |
| Infrastructure | Docker, Vercel, GitHub Actions                 |

## Docker

### Build

```bash
docker build -t hub .
```

### Start

```bash
docker run --rm --name hub -p 3000:3000 hub
```

### Check

```bash
docker ps
```

### Stop

```bash
docker stop hub
```

`--rm` を指定しているため、停止したコンテナは自動的に削除されます。

## License

このリポジトリはポートフォリオ目的で公開しています。

著作権は作者に帰属します。  
無断転載・再配布・商用利用はご遠慮ください。

This repository is published for portfolio purposes only.

All rights to the content belong to the author.

Please do not reproduce, redistribute, or use any part of this project for commercial purposes without permission.

## Author

- h-waji (hamltail)
