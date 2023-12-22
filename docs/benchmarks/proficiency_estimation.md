---
title: Proficiency Estimation
---

Predict the absolute skill level of a participant or identify good actions and
tips for improvement.

### Task definition
Going beyond recognizing what a person is doing, this task aims to infer the user’s skill level. We consider two variants: **demonstrator proficiency estimation** and **demonstration proficiency estimation**.

* Demonstrator proficiency estimation: the goal is to estimate the absolute skill level of a participant at the task.

        Input:
          - Egocentric video clip
          - [Optional] Exocentric videos synchronized in time

        Output:
          - Proficiency label: Novice, Early Expert, Intermediate Expert, Late Expert


* Demonstration proficiency estimation: the goal is to perform fine-grained analysis of a given task execution to identify good actions from the participant and suggest tips for improvement.  

        Input:
          - Egocentric video clip
          - [Optional] Exocentric videos synchronized in time

        Output:
          - Temporal localization of a proficiency category: list of tuples, each containing a timestamp, a proficiency category (i.e., good execution or needs improvement), and its probability
          

**Note that the input to the model excludes textual descriptions/narrations of the activity, audio, gaze sensor readings, and any subject information, which would simplify the task significantly at the expense of general applicability since these signals are typically not available for in-the-wild video.** We believe the formulation proposed here will encourage the development of video-based methods that (1) do not rely on explicit subject information such as gender, age, ethnicity, etc., and (2) learn to estimate proficiency based on visual cues rather than high-level textual activity descriptions or alternate modalities like sound and eye gaze.

### Metrics
* Demonstrator proficiency estimation
  - Top-1 Accuracy when using Ego only, Exo only, and Ego+Exo views 

* Ego clip generation  
  - Mean Average Precision ($mAP_k$) measured at an L1-distance threshold of k = {0.25, 0.5, 1.0} seconds. 

### Baselines
Coming soon!

