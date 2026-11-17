---
title: "What a tokenizer is, explained by someone who learned yesterday"
date: 2026-08-22
category: LEARNING
readTime: 8 min
excerpt: "Characters, bytes, BPE, and why my model spells 'the' four ways."
---

Until last week I thought a tokenizer was a spellchecker. It is not. A tokenizer is the thing that turns text into numbers so a neural net can eat it.

## The three ways

- **Character-level**: every character is a token. Simple, but the model has to learn to spell, and mine spells "the" four different ways.
- **Byte-level**: every byte is a token. Handles any text, but the vocabulary is huge and the sequences are long.
- **BPE (byte-pair encoding)**: start with characters, repeatedly merge the most frequent pair. This is what real models use. " the" becomes one token, which is why they spell fine and I do not.

## Why it matters

The tokenizer decides what the model can even see. A character-level model sees "king" as four tokens; a BPE model might see it as one. Same word, different universe.

## What I did

Spud-1 uses a character-level tokenizer, mostly because BPE looked like homework. Now I have done the homework and I understand why everyone uses it. Spud-2 will have BPE. Probably.
