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

check:
  pnpm check

