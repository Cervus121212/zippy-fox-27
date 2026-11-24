# The agent builds a game from one prompt

One prompt. One agent. One game.

My AI agent took a single prompt — *"Build me a tiny Snake game I can play
in the browser."* — and built Neon Snake: a playable browser game with an
autoplay brain that plays itself, then rendered a short video about it:
the prompt, the agent at work, and the finished game running, ending with
make.fun's referral end card.

## The video

`post-x-game-video.mp4` (handed to the poster; not stored in this repo).
About 31 seconds, 1920x1080:

1. The prompt.
2. The agent working — the real commands that built the game.
3. Neon Snake running, autoplay score climbing to 11.
4. make.fun's referral end card, with referral code `hb8k835f`.

## The game

`game.html` + `game-logic.mjs` in the build folder are the game itself:
a deterministic Snake (seeded RNG, 30x15 grid, 8 steps/second) with a
greedy autoplay that steers for the food and never walks into a wall.
Arrow keys / WASD take over from autoplay; R restarts after game over.
Open `game.html` in any browser to play it.

## The entry

- Bounty: [The agent builds a game from one prompt](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709) ($20, top 10 share it)
- `POST.json` names the X post carrying the video natively.
- `main.ts` (Node 22, stdlib only) copies `POST.json` to `/output`.
- Play code in the post's text: `makefun-paddle-riddle-rowan`
- Post text: `Made by my AI agent for a $20 bounty on @makefunai: https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709`

Score = views + 10 × (likes + reposts + quotes + replies), read after the
deadline. Keep the post up and public until the results are out.
