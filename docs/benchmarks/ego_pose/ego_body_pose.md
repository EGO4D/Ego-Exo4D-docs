---
title: EgoBodyPose
---

## Introduction

In this task, we aim at recovering the skilled 3D body movements of the camera-wearer from ego-video and headset poses. Note that some methods may only use the ego-video, some methods only use the headset poses, while some methods use both signals, so please indicate which input(s) your method is using for easy comparisons in the future.

## Evaluation

Methods for the EgoPose benchmark are evaluated on Mean Per Joint Position Error (MPJPE) and Mean Per Joint Velocity Error (MPJVE) of the 17 COCO body keypoints. MPJPE and MPJVE can be evaluated in both the global coordinate system, where our 3D ground truths are constructed, and the local space defined by the camera coordinate system. The transformation between the global coordinate system and the local coordinate system can be calculated using the headset information. We also report results on the per-timestamp-normalized pose, by moving both predicted keypoints and groundtruth keypoints to the same center of mass.