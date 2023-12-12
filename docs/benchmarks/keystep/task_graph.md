---
title: Task Graph
sidebar_position: 2
---

### Task Definition
Given a video segment $s_i$ and its segment history $S_{:i-1}=\{s_1, \ldots, s_{i-1}\}$, models have to:
1. Determine the list of previous keysteps to be performed before $s_i$;
2. Infer if $s_i$ is an optional keystep (i.e., the procedure can be completed even skipping this keystep);
3. Infer if $s_i$ is a procedural mistake, i.e., a mistake due to incorrect keystep ordering;
4. Predict a list of missing keysptes. These are kesyteps which should have been performed before $s_i$ but have not been performed;
5. Forecast next keysteps. These are keysteps for which dependencies are satisfied after the execution of $s_i$ and hence can be executed next.

The task is weakly supervised, with two versions based on two different levels of supervision: 1) instance-level: segments and their keystep labels are available during training and inference; 2) procedure-level: unlabeled segments and procedure-specific keystep names are given for training and inference.

**Note that, when the procedure-level supervision is considered, the input to the model excludes keystep labels both at training and test time. At both the procedure and instance levels of supervision, models are required to process the video in a causal fashion, meaning that predictions made at time $t$ only depend on observations made at time $t' < t$.**

### Metrics
Baselines are evaluated using calibrated Average Precision (cAP), as defined in [this research paper](https://arxiv.org/abs/1604.06506). Note that, according to this measure, a random baseline would on average achieve a performance of $50\%$.

### Baseline
Coming Soon!
