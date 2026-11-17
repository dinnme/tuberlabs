---
title: "Tater-mini: frontier performance at the edge (of my desk)"
date: 2026-09-14
category: RELEASE
readTime: 5 min
excerpt: "Distillation, explained by someone who just did it badly."
featured: false
---

Today we release Tater-mini v0.3: Spud-1 distilled down to 1.5M parameters, 2 layers, and a 128-token context window. It runs on anything with a battery.

## What distillation is

You take a big model (the teacher) and train a small model (the student) to imitate its outputs. The student never sees the training data, only the teacher's softened opinions. It is like learning Shakespeare from a summary written by someone who read Shakespeare.

## How I did it badly

I used the teacher's final logits with a temperature of 2, trained for 41 minutes, and called it a day. The student is worse at everything, except speed, where it is 4x faster and 100% more portable.

## Results

- 1,200 tokens/sec on our laptop (Spud-1: 310).
- Validation loss 1.91 (Spud-1: 1.48).
- Coherence: the edge of it, as advertised.

Weights are open, as always.
