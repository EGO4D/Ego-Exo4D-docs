---
title: Translation
---

### Task definition

Translation task entails synthesizing a target ego clip from a given exo clip. This is decomposed into two separate tasks: **ego track prediction** and **ego clip generation**.

* Ego track prediction estimates the segmentation mask of an object in the {\em unobserved} ego frames given the object masks in the observed exo clip. 

* Ego clip generation must generate the image values (i.e., RGB) within the given ground-truth ego mask by making use of the exo clip and the object masks in those frames.  

This decomposition effectively splits the problem into two tasks: 1) predicting the location and shape of the object in the ego clip, and 2) synthesizing its appearance given the ground-truth position. 

For each, we also consider a variant where the pose of the ego camera with respect to the exo camera is available to use at inference time. This simplifies the problem but reduces the applicability of the method, since this information is typically not available for arbitrary third-person videos. 

