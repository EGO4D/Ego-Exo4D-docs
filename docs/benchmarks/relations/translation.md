---
title: Translation
---

### Task definition

Translation task entails synthesizing a target ego clip from a given exo clip. This is decomposed into two separate tasks: **ego track prediction** and **ego clip generation**.

* Ego track prediction requires predicting the segmentation mask of an object in the unobserved ego frames given the object masks in an observed exo clip. 

        Input:

        Output:


* Ego clip generation must generate the image values (i.e., RGB) within the given ground-truth ego mask by making use of the exo clip and the object masks in those frames.  

        Input:

        Output:

This decomposition effectively splits the problem into two tasks: 1) predicting the location and shape of the object in the ego clip, and 2) synthesizing its appearance given the ground-truth position. 

For each, we also consider a variant where the pose of the ego camera with respect to the exo camera is available to use at inference time. This simplifies the problem but reduces the applicability of the method, since this information is typically not available for arbitrary third-person videos. 


**Note that we restrict the input to include only the exo view and the object masks.  Hence the input excludes depth maps, 3D point clouds, IMU, or SLAM, which would simplify the task at the expense of general applicability on arbitrary third-person videos, since these signals are typically not available for in-the-wild video.**

**The only exception is a variant of the task where the ego camera pose for all frames of the clips is given as input.**


### Metrics


