---
title: Energy Efficient
# sidebar_position: 4
---

Online activity detection within an energy budget.

### Task definition
The goal is to perform online classification of keysteps in a streaming egocentric multi-modal video, within an energy budget. Given a stream of audio and RGB video data, a model must identify the keystep being performed at each frame, as well as decide which sensor(s) to use for subsequent time-steps. 


        Input:
          - Egocentric video of arbitrary length T comprising a stream of K different sensory modalities (e.g., RGB images, audio, etc.)
          - Energy budget

        Output:
          - Per-frame keystep label (the prediction happens at 5 fps)
          - Estimated inference energy consumption

The energy budget accounts for **the cost of operations** in each model forward pass, **the cost of moving intermediate activations in and out of memory** and **the cost of the continuous operation of sensors**, each having different cost profiles (e.g., audio sensors are relatively cheaper to operate than camera sensors). We adapt off-the-shelf profiler software built for PyTorch to compute the total multiply-accumulate operations (MACs) and memory transfer (MB) required to estimate total energy.

Note that the current setup uses RGB frames and audio as input modalities. However, the setup can be extended to include IMU, and potentially other sensors as well.

### Metrics
We evaluate online keystep detection performance using per-frame calibrated mean average precision (mcAP), which accounts for the imbalance in the keystep labels in the dataset. There is a natural trade-off between efficiency and better performance. Thus, we evaluate models in two tiers by setting a budget for the power consumption in each tier, namely 20 mW for the **high-efficiency tier** and 2.8 W for the **high-performance tier**.

### Baselines
Coming Soon!
