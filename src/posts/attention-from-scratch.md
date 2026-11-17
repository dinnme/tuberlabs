---
title: "I implemented attention from scratch and now I understand nothing differently"
date: 2026-10-28
category: RESEARCH
readTime: 9 min
excerpt: "Queries, keys, values, and one very long evening with einsum."
---

Everyone says attention is all you need. Nobody says what attention is. So I implemented it from scratch, on paper first, then in code, and now I can confirm: it is a matrix multiplication wearing a trench coat.

## The setup

Each token produces three vectors: a query, a key, and a value. The query asks "what am I looking for?", the key answers "what do I contain?", and the value is what you actually take home. You score every query against every key with a dot product, divide by the square root of the dimension (this is the part everyone forgets and then wonders why the softmax saturates), and use those scores to weight the values.

```python
scores = Q @ K.transpose(-2, -1) / math.sqrt(d_head)
attn = softmax(scores, dim=-1)
out = attn @ V
```

That is the whole trick. Everything else is plumbing.

## What actually happened

I spent one very long evening with `einsum`. At 1am the shapes finally lined up and the loss dropped, which remains the only reliable signal I trust. I still do not understand why we scale by `sqrt(d_head)` beyond "Andrej said so", but I understand it *differently* now, which is progress.

## Takeaways

- Shapes are the real documentation.
- Masking the future is one line and feels like cheating. It is not.
- Multi-head attention is just several of these running in parallel and arguing.
