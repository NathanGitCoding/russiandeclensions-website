#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script to add full cheat-sheet translations to learnArticleTranslations.ts.
Replaces the russian-prepositions-cases-cheat-sheet entry with complete
fr_fr, tr_tr, de_de, pl_pl, ru_ru blocks (all 12 sections, tables, etc.).
Russian examples in tables stay identical - only surrounding text is translated.
"""

import os

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
REPO_ROOT = os.path.dirname(SCRIPT_DIR)
TARGET_FILE = os.path.join(REPO_ROOT, 'src', 'data', 'learnArticleTranslations.ts')
DATA_FILE = os.path.join(SCRIPT_DIR, 'cheat_sheet_translations_block.txt')


def load_replacement_block() -> str:
    """Load the replacement block from the data file."""
    with open(DATA_FILE, 'r', encoding='utf-8') as f:
        return f.read()


def main() -> None:
    with open(TARGET_FILE, 'r', encoding='utf-8') as f:
        content = f.read()

    start_marker = "  'russian-prepositions-cases-cheat-sheet': {"
    end_marker = "  'top-10-apps-russian': {"

    i = content.find(start_marker)
    j = content.find(end_marker)

    if i == -1:
        raise SystemExit("Could not find start marker in file")
    if j == -1:
        raise SystemExit("Could not find end marker in file")
    if i >= j:
        raise SystemExit("Start marker appears after end marker")

    replacement = load_replacement_block()
    new_content = content[:i] + replacement + content[j:]

    with open(TARGET_FILE, 'w', encoding='utf-8') as f:
        f.write(new_content)

    print("Successfully updated learnArticleTranslations.ts")


if __name__ == '__main__':
    main()
