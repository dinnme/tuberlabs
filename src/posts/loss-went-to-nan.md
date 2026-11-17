---
title: "My loss went to NaN, and so did I"
date: 2026-10-09
category: POSTMORTEM
readTime: 4 min
excerpt: "A learning rate story, told with the benefit of hindsight."
---

At step 2,400 my loss curve did something unprecedented: it became NaN. Not "went up". NaN. A number so undefined it has its own special float representation, which I now think is poetic.

## What happened

I set the learning rate to 3e-3 because a blog post said 3e-4 was "conservative". It was not conservative for my model. One forward pass, one backward pass, and somewhere in the embeddings a 0/0 or an overflow turned everything into NaN, and NaN is contagious: one NaN in the gradients and every parameter becomes NaN forever.

## The fix

- Lowered the learning rate to 3e-4. Felt called out personally.
- Added gradient clipping to 1.0. The gradients were occasionally screaming.
- Added a NaN check that aborts training loudly instead of letting the loss curve lie to me for six hours.

## What I learned

The loss going to NaN is not a bug, it is a message. Usually the message is "your learning rate is a cry for help". Listen to it earlier than I did.
