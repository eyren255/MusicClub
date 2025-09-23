#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
Rename song image files to the numbered format: "NN - TITLE.png"

Usage (from project root):
  python rename_songs.py            # dry-run (shows what will change)
  python rename_songs.py --apply    # actually rename files
  python rename_songs.py --dir "Sa Yar Ga Toe Pwell"  # target folder

This script is Unicode-safe and idempotent. Existing correctly named files are skipped.
"""

from __future__ import annotations

import argparse
import sys
from pathlib import Path

# Ordered titles (must match your app order)
TITLES = [
    "စတော်ဘယ်ရီချစ်သဲချင်",
    "မြေပြန့်သူလေး",
    "မျက်သွယ်",
    "ရေစီကြောင်းလေး",
    "ဖက်ထားမယ်",
    "ပြော",
    "ဝှက်ထားတဲ့ကောင်ကင်",
    "အချစ်အတွက် တစ်ဖန်မွေးဖွားခဲ့ပြီ",
    "အချစ်လို့ခေါ်သလား",
    "လရိပ်",
    "မမ",
    "ကျေးဇူးပါကွယ်",
    "နားလည်ပါ",
    "ငယ်ချစ်ပုံပြင်",
    "ချစ်တာတစ်ခုထဲသိတယ်",
    "မြေနီလမ်း",
    "more that I can say(carzoo)",
    "ခရီများအဆုံးထိလျှောက်",
    "The Old you (Piano Only)",
    "ရိုးရှင်သောဘဝ",
    "မကြာချင်းမှာကြင်နာမယ်".replace("ချင်း","ခင်"),  # guard against slight variant
    "မင်းတစ်ယောက်သာ",
    "တိတ်တခိုးအချစ်",
    "အတိုင်းထက်အလွန်",
    "အတောင်ပံပါရင်မင်းဆီကို",
    "ယုံကြည်ရာ",
    "နင်စေရင်",
    "ဆွေးတယ်",
    "နွယ်နီ",
    "သူငယ်ချင်း",
    "မောင့်မျက်ရည်၀ိုင်း",
]


def target_name(index: int, title: str) -> str:
    return f"{index:02d} - {title}.png"


def build_mapping(folder: Path) -> list[tuple[Path, Path]]:
    """Return list of (src, dst) for files that need renaming."""
    mappings: list[tuple[Path, Path]] = []

    for i, title in enumerate(TITLES, start=1):
        dst = folder / target_name(i, title)
        if dst.exists():
            continue  # already correct

        # Try exact filename first
        exact = folder / f"{title}.png"
        if exact.exists():
            mappings.append((exact, dst))
            continue

        # Fallback: best-effort fuzzy match (contains title substring)
        candidates = list(folder.glob("*.png"))
        match = next((p for p in candidates if title in p.stem), None)
        if match:
            mappings.append((match, dst))
            continue

        print(f"WARN: Could not find a source file for title: {title}", file=sys.stderr)

    # Prevent collisions: if two dst paths collide (shouldn't), keep first
    seen: set[Path] = set()
    unique: list[tuple[Path, Path]] = []
    for src, dst in mappings:
        if dst in seen:
            print(f"SKIP: Duplicate destination {dst.name} (source {src.name})", file=sys.stderr)
            continue
        seen.add(dst)
        unique.append((src, dst))
    return unique


def main() -> int:
    ap = argparse.ArgumentParser(description="Rename song images to numbered format")
    ap.add_argument("--apply", action="store_true", help="Actually rename files (default is dry-run)")
    ap.add_argument("--dir", default="Sa Yar Ga Toe Pwell", help="Target folder containing images")
    args = ap.parse_args()

    folder = Path(args.dir)
    if not folder.exists() or not folder.is_dir():
        print(f"ERROR: Folder not found: {folder}")
        return 2

    mappings = build_mapping(folder)
    if not mappings:
        print("Nothing to rename. All files look good or titles not found.")
        return 0

    for src, dst in mappings:
        rel_src = src.name
        rel_dst = dst.name
        if args.apply:
            dst.parent.mkdir(parents=True, exist_ok=True)
            src.rename(dst)
            print(f"RENAMED: {rel_src} -> {rel_dst}")
        else:
            print(f"DRY-RUN: {rel_src} -> {rel_dst}")

    if not args.apply:
        print("\nRun with --apply to perform the renames.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
