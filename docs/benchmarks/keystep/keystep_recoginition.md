---
title: Fine-grained Keystep Recognition
sidebar_position: 1
---

### Task definition

This task involves recognizing fine-grained keysteps from procedural egocentric videos (at test time), using models that can leverage multiple, time-synchronized views (at training time).

* Train instance:
```
- 1 ego + N exo trimmed video clips
- Keystep label
```

* Test instance:
```
Input: A trimmed egocentric video clip
Output: Predicted keystep label
```
  
Note that at test time, the input to the model includes just the ego-view videos (RGB only). Exo-view videos, activity and scenario names, narrations, audio and associated metadata such as eye gaze, 3D point
clouds, camera pose, and IMU information are excluded as inputs for inference (although we encourage exploring their potential utility in training) as our ultimate goal is a vision-centric approach that performs egocentric keystep recognition.

### Metrics
We measure top-1 keystep recognition accuracy (%)


### Baselines
Coming Soon!
