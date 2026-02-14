# Resume Portfolio

Personal resume + portfolio site built with Vite + React + Tailwind CSS.

## Tech
- React + Vite
- Tailwind CSS
- lucide-react
- Embla carousel

## Dev
yarn
yarn dev

## Build
yarn build
yarn preview

## Docker
docker build -t resume-portfolio .
docker run --rm -p 8080:80 resume-portfolio

sections/     → page-level meaning (Projects, Skills, Metrics)
ui/           → visual primitives (Card, Button, Badge)
layout/       → structure (containers, grids)
motion/       → animation wrappers

Lay out pattern Left sidebar: name, title, contact, badges, skills bars

Right content: About, Experience, Projects, Education, etc.
The Golden Rule (remember this)

Pages/layout decide structure.
Sections hold content.
UI is dumb and reusable.
Data lives separately.

## Zsh Dev Shortcuts (Aliases + Functions)

These shortcuts live in `~/.zshrc` and are meant to speed up daily DevOps / CI/CD work (Git, GitHub Actions, Docker, Yarn/Corepack), plus a few macOS + terminal quality-of-life helpers.

> Tip: After editing `~/.zshrc`, run `reload` to apply changes.

---

### Navigation & Terminal

| Shortcut | Expands To | What it does |
|---|---|---|
| `home` | `cd ~` | Jump to home directory |
| `..` | `cd ..` | Go up one directory |
| `...` | `cd ../..` | Go up two directories |
| `c` / `cls` | `clear` | Clear the terminal |
| `path` | `echo $PATH \| tr ":" "\n"` | Print PATH one entry per line |
| `zshrc` | `${EDITOR:-nano} ~/.zshrc` | Open your zsh config in an editor |
| `p10k` | `${EDITOR:-nano} ~/.p10k.zsh` | Open Powerlevel10k config |
| `reload` | `source ~/.zshrc` | Reload zsh config (apply changes) |

---

### Listing & Tree

> Uses `eza` if installed; otherwise uses macOS `tree` (install with `brew install tree`).

| Shortcut | Expands To | What it does |
|---|---|---|
| `ls` | `eza` | Better `ls` (only if `eza` exists) |
| `la` | `eza --long --all --group` | Detailed list with hidden files (if `eza`) |
| `tree` | `eza --tree` or `tree -C` | Directory tree view |
| `tree2` | `eza --tree --level=2` or `tree -C -L 2` | Tree view (2 levels deep) |
| `tree3` | `eza --tree --level=3` or `tree -C -L 3` | Tree view (3 levels deep) |
| `t` | `tree -I "node_modules\|dist\|build\|.git\|.next\|.turbo\|.yarn"` | Tree view ignoring heavy folders |

---

### Git

| Shortcut | Expands To | What it does |
|---|---|---|
| `g` | `git` | Git command |
| `gs` | `git status -sb` | Compact status w/ branch |
| `ga` | `git add` | Stage files (use like `ga file.txt`) |
| `gaa` | `git add -A` | Stage all changes |
| `gc` | `git commit` | Commit (opens editor) |
| `gcm` | `git commit -m` | Commit with message (use like `gcm "msg"`) |
| `gca` | `git commit --amend` | Amend last commit |
| `gco` | `git checkout` | Checkout branch/file |
| `gb` | `git branch` | List branches |
| `gbd` | `git branch -D` | Delete branch (force) |
| `gl` | `git log --oneline --decorate --graph --all \| head -n 30` | Pretty git graph (last 30 lines) |
| `gp` | `git push` | Push |
| `gpf` | `git push --force-with-lease` | Safer force push |
| `gpl` | `git pull --rebase` | Pull with rebase |
| `grh` | `git reset --hard` | Hard reset (danger) |
| `grs` | `git restore --staged` | Unstage changes |
| `gundo` | `git reset --soft HEAD~1` | Undo last commit (keep changes staged) |

---

### GitHub CLI / GitHub Actions (`gh`)

> Requires GitHub CLI: `brew install gh`

| Shortcut | Expands To | What it does |
|---|---|---|
| `gha` | `gh auth status` | Check GitHub auth |
| `ghw` | `gh workflow list` | List workflows |
| `ghr` | `gh run list --limit 20` | Show latest 20 workflow runs |
| `ghrw` | `gh run watch` | Watch a run live |
| `ghrv` | `gh run view --log` | View run logs |
| `ghpr` | `gh pr view --web` | Open PR page in browser |
| `ghrepo` | `gh repo view --web` | Open repo in browser |

**Function**
| Command | What it does |
|---|---|
| `ghlast` | Opens the most recent GitHub Actions run in your browser |

---

### Corepack + Yarn (Yarn v4 friendly)

| Shortcut | Expands To | What it does |
|---|---|---|
| `cpen` | `corepack enable` | Enable Corepack |
| `cpdis` | `corepack disable` | Disable Corepack |
| `cpy` | `corepack prepare yarn@stable --activate` | Activate stable Yarn via Corepack |
| `cpy4` | `corepack prepare yarn@4.9.3 --activate` | Activate Yarn 4.9.3 (matches `packageManager`) |
| `y` | `yarn` | Yarn command |
| `yv` | `yarn -v` | Show Yarn version |
| `yi` | `yarn install` | Install deps |
| `ya` | `yarn add` | Add dependency |
| `yad` | `yarn add -D` | Add dev dependency |
| `yrm` | `yarn remove` | Remove dependency |
| `yd` | `yarn dev` | Run dev server |
| `yb` | `yarn build` | Build |
| `ys` | `yarn start` | Start app |

---

### Docker

| Shortcut | Expands To | What it does |
|---|---|---|
| `d` | `docker` | Docker command |
| `dps` | `docker ps` | Running containers |
| `dpa` | `docker ps -a` | All containers |
| `di` | `docker images` | List images |
| `dv` | `docker volume ls` | List volumes |
| `dn` | `docker network ls` | List networks |
| `dcu` | `docker compose up -d` | Start compose stack (detached) |
| `dcd` | `docker compose down` | Stop compose stack |
| `dcl` | `docker compose logs -f --tail=200` | Follow compose logs |
| `dcb` | `docker compose build` | Build compose services |
| `dce` | `docker compose exec` | Exec into a compose service |
| `drm` | `docker rm` | Remove container |
| `drmi` | `docker rmi` | Remove image |
| `dstop` | `docker stop` | Stop container |
| `dprune` | `docker system prune -af` | Aggressive cleanup (unused) |
| `dpruneall` | `docker system prune -a --volumes -f` | Nuclear cleanup (includes volumes) |

**Functions**
| Command | What it does |
|---|---|
| `dstopall` | Stops all running containers |
| `drmall` | Removes all containers |

---

### CI/CD Helpers (Generic)

| Shortcut | Expands To | What it does |
|---|---|---|
| `ports` | `lsof -nP -iTCP -sTCP:LISTEN` | Show listening ports |
| `servehere` | `python3 -m http.server 8080` | Quick local web server |
| `mkx` | `chmod +x` | Make a file executable |
| `now` | `date "+%Y-%m-%d %H:%M:%S"` | Timestamp now |

---

### macOS Niceties

| Shortcut | Expands To | What it does |
|---|---|---|
| `flushdns` | `sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder` | Flush DNS cache |
| `showfiles` | `defaults write ... AppleShowAllFiles -bool true; killall Finder` | Show hidden files in Finder |
| `hidefiles` | `defaults write ... AppleShowAllFiles -bool false; killall Finder` | Hide hidden files in Finder |
| `myip` | `curl -s ifconfig.me && echo` | Print public IP |

---

### Utility Functions

| Command | What it does |
|---|---|
| `mkcd <dir>` | Create directory and `cd` into it |
| `cleanjs` | Deletes common JS build artifacts (`node_modules`, `dist`, `.next`, `.turbo`, etc.) |


? Which package manager do you want to use? … 
  npm
❯ yarn
  pnpm
  bun
  #The "most senior" approach to resolving export/import mismatches involves moving beyond simple fixes and implementing a Standardized Design System and Path Alias Architecture. As a Platform Engineer, your goal is to eliminate "voodoo" imports and ensure the IDE, the compiler (TypeScript), and the bundler (Vite) are in perfect sync.

1. Unified Module Pattern: The "Hybrid" Export
Senior developers avoid the "Default vs. Named" debate by providing both. This prevents the TS2613 "No default export" errors you encountered when refactoring

Validate JSON: Ensure double quotes are used and trailing commas are removed.

Clear the Index: If git stash fails with "could not write index," it means your environment and Git are out of sync. Run git add . to stage your current fixes before attempting to re-install dependencies.

The "Nuclear" Reset: If the environment stays red, run: rm -rf node_modules yarn.lock && yarn install.