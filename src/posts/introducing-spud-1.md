---
title: "Introducing Spud-1: our most capable model to date"
date: 2026-11-12
category: RELEASE
readTime: 6 min
excerpt: "Twelve million parameters, one laptop and three hours of fan noise. Here is how we built it, what it can do, and the many things it cannot."
featured: true
---

> **TL;DR**
>
> - Spud-1 is a 12M-parameter transformer written from scratch.
> - It beats every previous Tuber model. There are two.
> - Weights are open. Please be gentle with them.

Three months ago, Tuber Labs released Mash-0, a bigram model that could predict the next character with the confidence of someone who has never been wrong. Today we take a step change in capability.

Spud-1 is the first Tuber model with attention. It can look back up to 256 characters, which is roughly how far back I can remember why I started this project.

## What I built

A decoder-only transformer with 6 layers and 6 heads, trained on TinyShakespeare with a character-level tokenizer. Everything is hand-written in PyTorch, following along with tutorials and then breaking them in new ways.

```python
config = SpudConfig(
    n_layer=6,
    n_head=6,
    n_embd=384,
    block_size=256,
    dropout=0.2,  # vibes-based
)
```

## Training

Training took 3 hours 12 minutes on a single laptop GPU. The loss went down, which is the main thing you want a loss to do.

![Loss curve](/loss-curve.svg)

*Figure 1. Training and validation loss. Note the brief spike at step 2,400, where I changed the learning rate and my mind.*

The model now ends sentences. Not every time, but we are seeing early signs of it.

## What I learned

The honest section. Write the real lessons here: what confused you, what finally clicked, what you would do differently. This is the part people will actually read.

## What's next

Spud-2 is already in training, if by "in training" you mean "a folder called spud2 exists". Follow along on GitHub.
