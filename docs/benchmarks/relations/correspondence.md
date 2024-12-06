---
title: Correspondence
---

Correspond object instance mask(s) in one view with another.

### Task definition

Given a pair of synchronized ego-exo videos and a sequence of query masks of an object of interest in one of the videos, the task is to predict the corresponding mask for the same object in each synchronized frame of the other view if it is visible. The task can be posed with query objects in either the ego or exo video, with both directions presenting interesting challenges (e.g., high degree of occlusion in ego views, and small object size in exo views).

Input:
- Time-synchronized Egocentric + Exocentric video clips
- Object segmentation track in Egocentric or Exocentric view

Output:
- Segmentation masks in the other view for the frames in which the object is visible in both views.

**Note that the input to the model excludes semantic labels or names for the objects, camera pose information relating the two views, and IMU or active range sensor measurements.**

We do not use such information as we want to encourage the development of methods for open-world correspondence, not relying on predefined sets of objects or inputs that require non-consumer camera devices.

### Metrics


* Location Error (LE), which we define as the normalized distance between the centroids of the predicted and ground-truth masks.

* Intersection Over Union (IoU) between the predicted and ground-truth masks.

* Contour Accuracy (CA), which measures mask shape similarity after translation is applied to register the centroids of the predicted and ground-truth masks.

* Visibility Accuracy, which evaluates the ability of the method to estimate the visibility of the object in the target view, as in practice it may often be occluded or outside the field of view. We measure this performance using balanced accuracy. Note that, in contrast to the previous metrics that compare segmentation masks at frames where the object is visible in both views, this metric is computed based on all frames with query masks.

### Baseline

Baseline repo: https://github.com/EGO4D/ego-exo4d-relation
