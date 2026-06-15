#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────────────
#  Headstart Finances Australia — Local Dev Launcher (macOS / Linux)
#  Usage: ./app.sh   OR   bash app.sh
# ─────────────────────────────────────────────────────────────────────────────

set -e
cd "$(dirname "$0")"  # always run from the project root

BOLD='\033[1m'; GOLD='\033[33m'; GREEN='\033[32m'; RED='\033[31m'; NC='\033[0m'

echo ""
echo -e "${BOLD}${GOLD} ============================================================${NC}"
echo -e "${BOLD}${GOLD}  Headstart Finances Australia Pty Ltd${NC}"
echo -e "${BOLD}${GOLD}  ABN: 88 656 265 860  |  Local Development Server${NC}"
echo -e "${BOLD}${GOLD} ============================================================${NC}"
echo ""

# Check Node.js
if ! command -v node &>/dev/null; then
  echo -e "${RED}[ERROR] Node.js is not installed.${NC}"
  echo "Download from: https://nodejs.org"
  exit 1
fi
echo -e "${GREEN}[OK]${NC} Node.js $(node -v) found."

# Check npm
if ! command -v npm &>/dev/null; then
  echo -e "${RED}[ERROR] npm not found. Reinstall Node.js.${NC}"
  exit 1
fi

# Install deps if missing
if [ ! -d "node_modules" ]; then
  echo ""
  echo -e "${GOLD}[INFO] Installing dependencies (first run only)...${NC}"
  npm install
fi

echo ""
echo -e "${GREEN}[OK] Starting dev server →${NC} ${BOLD}http://localhost:3000${NC}"
echo ""
npm run dev
