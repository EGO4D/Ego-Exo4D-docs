---
title: Overview
sidebar_position: 3
---

Ego-Exo4D is a large-scale multi-modal multi-view video dataset (including 3D) and benchmark challenge. The dataset consists of time-synchronized videos of participants recorded with at least one first-person (egocentric Aria glasses) and third-person (exocentric GoPro cameras) perspective cameras. Recordings occurred around the world from 12 different universities. Each recording (capture) contains multiple takes of one or more participants (camera wearer) performing a physical (Soccer, Basketball, Dance, Rock Climbing) or procedural (Cooking, Bike Repair, Health) task. Due to the usage of the Aria glasses, we have a wide range of associated 3D data.

## Summary
### Recording Devices
- One Aria glass
    - RGB camera
    - 2 x monochrome cameras
    - 7 x microphones
    - 2 x IMU
- 4-5 GoPro
    - RGB camera
    - Stereo microphone

### Sensor Data

- Video
    - 4k@60FPS for GoPro
    - 1404x1404@30FPS for Aria [VRS file format]
- Audio
    - 7 channel audio for Aria  [VRS file format]
    - 128kbps AAC compression, 48kHz sample rate for GoPro
- IMU
    - 2 x 1kHZ for Aria (left and right side)  [VRS file format]

### Processed Data

- Video Data
    - Time-synchronized take-separated videos compressed with H264 (slow, 24, yuv420p)
    - Collage videos of every camera available for visualization purposes
- Aria’s Machine Perception Services (MPS)
    - Intrinsic parameters for all cameras (Aria and GoPros)
    - Extrinsic parameters for all cameras (Aria and GoPros)
    - Sparse 3D point clouds of static environment
- 3D eye gaze vectors 
- Pre-extracted video features for all takes and associated cameras

### Annotations

- [Keysteps](../annotations/keystep)
    - Procedural activities time-segmented into regions classified within hierarchical taxonomy, with the intention to breakdown the high-level goal(s) into keysteps; 
- [Object Segmentation Mask Tracks](../annotations/relations)
    - Across egocentric and at least one exocentric view
- [Human body and hand joints](../annotations/ego_pose)
    - 2D Keypoints
        - 17 body keypoints
        - 2 x 21 hand keypoints
    - 3D Joint Positions
        - 17 Triangulated body joints
        - 2 x 21 Triangulated hand joints

### Language

- [Expert Commentary](../annotations/expert_commentary)
    - Professional coaches and domain experts evaluate task performance at key moments in the videos
- [Atomic Actions](../annotations/atomic_descriptions)
    - Text descriptions for every 5 seconds of video
- Narrate and Act
    - Participant describes why and how as they perform their task

### Meta-data

- Task Labels
    - Each take consists of a camera wearer performing a predefined task, the
      task label is available.
- Participant Surveys
    - Before (pre) and after (post) survey data answered by the participant to the help asses the proficiency of the camera wearer with normalized proficiency categories per domain

### Utilities

- Data downloader
- Data visualization website
- [Example usage notebooks](https://github.com/facebookresearch/Ego4d/tree/main/notebooks/egoexo)
- [Code utilities](https://github.com/facebookresearch/Ego4d/tree/main?tab=readme-ov-file#summary)

There are seven benchmark tasks derived from the annotations. The benchmark tasks form the Challenge we will host for 2024.
