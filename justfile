set shell := ["zsh", "-cu"]

default:
  @just --list

install:
  pnpm install

dev:
  pnpm dev

build:
  pnpm build

preview:
  pnpm preview

format:
  pnpm format

format-check:
  pnpm format:check

check:
  pnpm check

check-ci:
  pnpm check:ci
