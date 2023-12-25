---
title: EgoHandPose
---

Predict the 3D hand pose from the egocentric perspective.

## Introduction

The ego hand pose task entails predicting the three-dimensional coordinates of the camera wearer’s hands from the egocentric frames. 

## Formal task definition

Frames from the ego view are extracted and undistorted for both training and evaluation. For baselines requiring 2D hand bounding boxes, we project 3D hand joints in camera coordinates to 2D image planes using the provided intrinsic matrix for the crops.
Note that the inputs of the task do not include depth maps, any additional views from ego or exo cameras, camera pose information, and IMU or active range sensor measurements.
We explicitly exclude such information for this benchmark to promote the applicability of the methods to general hand pose estimation problems using monocular images.


## Metrics

To cope with methods estimating wrist-origin and camera-origin hand pose, the ego hand pose baselines are evaluated according to both the MPJPE and the PA-MPJPE metrics. 
The MPJPE is camera-relative while the PA-MPJPE calculates the average 3D joint distance after performing Procrustes Alignment on wrist-origin hand poses. 
Both metrics are reported in millimeter (mm) unit.


## Baselines

|            | Manual         |            | Manual+Auto   |            |
|------------|----------------|------------|---------------|------------|
|            | MPJPE          | PA-MPJPE   | MPJPE         | PA-MPJPE   |
| METRO      | -              | 21.54      | -             | 21.54      |
| THOR-net   | 51.06         | 17.88      | 50.10         | 16.34      |
| HandOccNet | 59.30     | 18.70      | 50.00         | 17.90      |
| POTTER     | 32.71         | 11.74      | 32.02         | 11.62      |

Please refer to the section 13.D.2 in our submission for details of baselines in the table above. 

