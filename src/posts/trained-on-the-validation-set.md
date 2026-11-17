---
title: "I trained for six hours on the validation set"
date: 2026-08-03
category: POSTMORTEM
readTime: 3 min
excerpt: "Record-breaking eval scores, briefly."
---

For six hours I trained on the validation set. The eval scores were incredible. Validation loss 0.02. I have never seen numbers like it. Nobody has.

## What happened

I split the data into train and validation, then accidentally trained on both. The model did not memorize the training set; it memorized the test. The eval was a mirror.

## The fix

- Actually use the train split for training. Revolutionary.
- Keep the validation set locked in a drawer. Metaphorically.
- Add a held-out test set I only touch once, at the end, like a final boss.

## Lesson

If your eval scores look too good to be true, they are. The model was not learning; it was recognizing its own exam paper.
