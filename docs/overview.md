---
title: Overview
sidebar_position: 3
---

Ego-Exo4D is a large-scale multi-modal multi-view video dataset and benchmark
challenge. The dataset consists of time-synchronized videos of participants,
recorded with at least one egocentric and four exocentric cameras, around the
world across X different universities. Each recording (capture) contains
multiple takes of one or more participants performing a physical (TODO) or  
procedural (TODO) activity.

The dataset includes: 
- 3D point clouds, 3D eye gaze vectors
- a visualization tool to quickly browse the dataset
- calibrated cameras with 3D camera poses (extrinsic parameters / trajectories)
  and associated IMU (@X kHZ)
- time-segmented regions mapped to taxonomy for (keystep)
- associated time-synchronized segmentation mask tracks for objects across two different cameras
- X-keypoints from multiple perspectives
- rich video-aligned natural language data in three different forms
- [seven benchmark](benchmarks) tasks derived from the annotations

Participants (camera wearers) are recorded during physical (Soccer, Basketball, Dance, Rock
Climbing) and procedural tasks (Cooking, Bike Repair, Health). 


## Quick Summary of the Data

What do want to summarize here?
- 2D
    - Time-sync trimmed videos
- 3D
    - 3D camera poses & intrinsic
    - 3D Eye gaze
- Misc
    - IMU
- Annotations
    - TODO

## How the Data Was Collected

TODO: discuss
- camera equipment & setup
- camera crew
- QR codes for take seperation and time-sync
- the capture "concept"

Participants wore Aria glasses to record the egocentirc perspective, enabling
sub-millisecond accurate IMU data, calibrated cameras (intrinsic parameters)
with 3D trajectories (camera pose/extrinsic parameters) of the camera wearer &
3D point clouds of the recorded environment. Lastly, a web-based visualization
tool to browse the dataset is available.

There are seven benchmark tasks with associated annotations. At a high-level,
these tasks aim to understand procedural activities/tasks (TODO: fixme; "Keystep") &
relate objects between multiple viewpoints/cameras ("Relations"). Not directly
related to the benchmark tasks, we annotated & collected natural language data
aligned to the video data. There are three forms of natural langauge data: (1) what
was happening in the video (atomic action descriptions), (2) commentaries on the
performance of the tasks (expert commentary), and (3) the participants
self-narrating their actions as they perform the task/activity (narrate & act). 

## Benchmarks

See [Benchmarks](benchmarks)

