---
title: "Mash-0: a bigram, and the beginning of everything"
date: 2026-07-18
category: RELEASE
readTime: 2 min
excerpt: "Where it all started: a lookup table with ambition."
featured: false
---

Today Tuber Labs releases Mash-0 v0.0.1: a bigram model with 4K parameters and a context window of exactly 1 token.

## What it does

Given the previous character, Mash-0 predicts the next character by looking it up in a table it built from TinyShakespeare. That is the entire model. There is no attention, no layers, no GPU. There is a dictionary and confidence.

## Results

- Validation loss: 2.49. Not great, not terrible.
- It once generated the word "the" twice in a row, which we consider a breakthrough.

Mash-0 stays online for historical and emotional reasons. All future Tuber models will be compared against it, and will win, which is the point of progress.
