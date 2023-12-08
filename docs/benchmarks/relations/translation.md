---
title: Translation
---

### Task definition

Translation task entails synthesizing a target ego clip from a given exo clip. This is decomposed into two separate tasks: **ego track prediction** and **ego clip generation**.

* Ego track prediction requires predicting the segmentation mask of an object in the unobserved ego frames given the object masks in an observed exo clip. 

        Input:
          - Exocentric video clip
          - Object segmentation masks in the Exocentric view

        Output:
          - Object segmentation masks in the Egocentric view


* Ego clip generation must generate the image values (i.e., RGB) within the given ground-truth ego mask by making use of the exo clip and the object masks in those frames.  

        Input:
          - Exocentric video clip
          - Object segmentation masks in the Exocentric view
          - Object segmentation masks in the Egocentric view

        Output:
          - RGB pixel values synthesizing object's appearance in Egocentric view
          

This decomposition effectively splits the problem into two tasks: 1) predicting the location and shape of the object in the ego clip, and 2) synthesizing its appearance given the ground-truth position. 

For each, we also consider a variant where the pose of the ego camera with respect to the exo camera is available to use at inference time. This simplifies the problem but reduces the applicability of the method, since this information is typically not available for arbitrary third-person videos. 


**Note that we restrict the input to include only the exo view and the object masks.  Hence the input excludes depth maps, 3D point clouds, IMU, or SLAM, which would simplify the task at the expense of general applicability on arbitrary third-person videos, since these signals are typically not available for in-the-wild video.**

**The only exception is a variant of the task where the ego camera pose for all frames of the clips is given as input.**


### Metrics

* Ego track prediction
  - Location Error (LE), which we define as the normalized distance between the centroids of the predicted and ground-truth masks.
  - Intersection Over Union (IoU) between the predicted and ground-truth masks.
  - Contour Accuracy (CA), which measures mask shape similarity after translation is applied to register the centroids of the predicted and ground-truth masks.
  - Visibility Accuracy, which evaluates the ability of the method to estimate the visibility of the object in the ego view, given only exo frames as input.

* Ego clip generation
  - Image quality metrics: SSIM, PSNR
  - Perceptual metrics: DISTS, LPIPS, CLIP similarity

### Baseline

Coming Soon!
