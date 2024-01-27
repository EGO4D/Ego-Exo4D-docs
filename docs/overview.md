---
title: Overview
sidebar_position: 3
---

Ego-Exo4D is a large-scale multi-modal multi-view video dataset (including 3D) and benchmark challenge. The dataset consists of time-synchronized videos of participants recorded with at least one first-person (egocentric Aria glasses) and third-person (exocentric GoPro cameras) perspective cameras. Recordings occurred around the world from 12 different research institutions. Each recording (capture) contains multiple takes of one or more participants (camera wearer) performing a physical (Soccer, Basketball, Dance, Bouldering, and Music) or procedural (Cooking, Bike Repair, Health) task. Due to the usage of the Aria glasses, we have a wide range of associated 3D data.


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

### Data

- Sensor-based Data (Video, Audio, IMU)
    - Video, audio and IMU data 
        - Video: 4k@60FPS (MP4) for GoPro devices and 1404x1404@30FPS (VRS) for Aria devices
        - Audio: 7 channel audio for Aria (VRS); 128kbps AAC compression, 48kHz, stereo audio for GoPro cameras
        - IMU: 2 x 1kHZ for Aria (left and right side)  [VRS file format]
    - [Take-separated & time-synchronized](./data/takes) data:
        - MP4 video&audio data: all camera feeds are compressed with H264 (slow, 24, yuv420p) 
            - Downscaled variants of the above are available (448px short-side)
        - Trimmed Aria VRS & trajectory data
    - Pre-rendered collage videos integrating all views/cameras (for visualization purposes)
- [Aria’s Machine Perception Services (MPS)](/data/mps)
    - Calibrated camera parameters (intrinsics) for all cameras (in VRS file)
    - [3D camera poses](/data/mps#trajectory) (trajectories / extrinsic parameters) for all cameras
    - [Sparse 3D point clouds of static environment](/data/mps#point-clouds)
    - [3D eye gaze vectors](/data/mps#eye-gaze)
- [Pre-extracted video features](/data/features) for all takes and associated cameras

### Annotations

- [Keysteps](../annotations/keystep)
    - Procedural activities time-segmented into regions classified within hierarchical taxonomy, with the intention to breakdown the high-level goal(s) into keysteps; 
- [Object Segmentation Mask Tracks](../annotations/relations)
    - Across egocentric and at least one exocentric view
- [Human body and hand joints](../annotations/ego_pose) (human annotated & automatically generated)
    - 2D Keypoints
        - 17 body keypoints
        - 2 x 21 hand keypoints
    - 3D Joint Positions
        - 17 Triangulated body joints
        - 2 x 21 Triangulated hand joints

### Language-Video Aligned Data

- [Expert Commentary](../annotations/expert_commentary) (the *"what"* from a layman's third-person perspective)
    - Professional coaches and domain experts evaluate task performance at key moments in the videos
- [Atomic Actions](../annotations/atomic_descriptions) (the *"how"* from an expert's third-person perspective) 
    - Text descriptions at densely sampled timepoints across the video, and also includes information about the most informative view and whether the action is visible from the egocentric camera.
- Narrate and Act (the *"why and how"* from the participant's perspective)
    - Participant describes why and how as they perform their task

### Meta-data

- Task Labels
    - Each take consists of a camera wearer performing a predefined task, the
      task label is available.
- Participant Surveys (*to be released*)
    - Before (pre) and after (post) survey data answered by the participant to the help asses the proficiency of the camera wearer with normalized proficiency categories per domain

### Utilities

- [Data downloader](/download)
- [Data visualization website](https://visualize.ego4d-data.org/)
- [Example usage notebooks](https://github.com/facebookresearch/Ego4d/tree/main/notebooks/egoexo)
- [Code utilities](https://github.com/facebookresearch/Ego4d/tree/main?tab=readme-ov-file#summary)

There are seven benchmark tasks derived from the annotations. The benchmark tasks form the [Challenge](/challenge) we will host for 2024.
