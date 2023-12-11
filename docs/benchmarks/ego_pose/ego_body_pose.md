---
title: EgoBodyPose
---

## Task definition

- In this task, we aim at recovering the skilled 3D body movements of the camera-wearer from ego-video and headset poses. Note that some methods may only use the ego-video, some methods only use the headset poses, while some methods use both signals, so please indicate which input(s) your method is using for easy comparisons in the future.

- Since the EgoPose benchmark aims at promoting the development of methods that perform body pose estimation solely from first-person raw video or IMU data, the input for this benchmark should exclude egocentric modalities that would unfairly simplify the task (e.g., audio captured from a wearable camera, eye gaze), as well as exocentric video or any signals that can be extracted from it.

## Metrics

- Methods for the EgoPose benchmark are evaluated on Mean Per Joint Position Error (MPJPE) and Mean Per Joint Velocity Error (MPJVE) of the 17 COCO body keypoints in the 3D space. MPJPE and MPJVE can be evaluated in both the global coordinate system, where our 3D ground truths are constructed, and the local space defined by the camera coordinate system. The transformation between the global coordinate system and the local coordinate system can be calculated using the headset information. We also report results on the per-timestamp-normalized pose, by moving both predicted keypoints and groundtruth keypoints to the same center of mass.

- The evaluation script will also report the per-scenario MPJPE and MPJVE for the 8 scenarios.

- There could be some keypoints missing in certain frames due to occlusion, and these keypoints will be excluded from the evaluation.

### Baseline

Coming soon!