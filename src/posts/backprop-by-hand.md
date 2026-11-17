---
title: "Backprop by hand, on paper, like a medieval monk"
date: 2026-09-30
category: LEARNING
readTime: 7 min
excerpt: "Deriving gradients for a two-layer net so I never have to again."
---

Today I derived backpropagation by hand for a two-layer network. On paper. With a pencil. Like a medieval monk copying a manuscript I do not fully understand.

## The chain rule, applied obsessively

If the loss depends on the output, and the output depends on the weights, then:

```
dL/dW = dL/dout * dout/dW
```

You just keep applying the chain rule until you run out of layers. It is mechanical. It is also deeply satisfying, like watching a machine take itself apart.

## Where it clicked

The moment it clicked was realizing backprop is just the chain rule applied in reverse order, and that "reverse order" is why we call it *back*propagation. The gradients flow backward, each layer multiplying by its local derivative.

## Why bother

So that when PyTorch's `loss.backward()` does its thing, I am not just pressing a button. I am pressing a button I have disassembled on paper. There is a difference. I hope there is a difference.
