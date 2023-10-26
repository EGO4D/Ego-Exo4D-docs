---
title: Task Graph
sidebar_position: 2
---

Predict the task graph from all videos relating to a given task.

## Task

TODO: this has changed

### Input
- Set of pre-segmented videos
Level 1 (fully supervised): 
- with keystep labels
Level 2 (weakly supervised): 
- no keystep labels & with keystep taxonomy
Level 3 (weakly video-only supervised)
- no keystep labels & without keystep taxonomy
### Output
- Graph for task
- GT / Annotations: task graph defined from an expert WG for each task
### Baselines
- Level 1: Frequency count from keystep labels
- Level 2: Predict keystep label (via shared text-video space), apply level 1 baseline
- Level 3: Cluster keysteps, apply level 2 baseline


## How the Ground Truth was Obtained
