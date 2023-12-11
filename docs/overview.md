---
title: Overview
sidebar_position: 3
---


Ego-Exo4D is a large-scale multi-modal multi-view video dataset (including 3D) and benchmark challenge. The dataset consists of time-synchronized videos of participants recorded with at least one first-person (egocentric Aria glasses) and third-person (exocentric GoPro cameras) perspective cameras. Recordings occurred around the world from 12 different universities. Each recording (capture) contains multiple takes of one or more participants (camera wearer) performing a physical (Soccer, Basketball, Dance, Rock Climbing) or procedural (Cooking, Bike Repair, Health) task. Due to the usage of the Aria glasses, we have a wide range of associated 3D data.

The dataset includes: 
* video & audio (11+ microphones) data across all devices, available as raw capture data (4k@60FPS and 1404x1404@30FPS), as pre-processed time-synchronized take-seperated videos compressed with H264 (CRF=28) in their original resolution for each camera, and as pre-rendered collage of every camera available for visualization purposes;
* IMU (1KHZ) for the egocentric Aria camera;
* calibrated cameras (intrinsic parameters) with 3D camera poses (extrinsic parameters / trajectories);
* 3D point clouds as a representation of the environment;
* 3D eye gaze vectors;
* pre-extracted video features for all takes and associated cameras; reproducible baseline code associated to each benchmark task;
* code utilities to assist in use of the data, including a tool to easily download the dataset or subsets;
* a visualization tool to quickly browse the dataset;
* a wide variety of annotations captured both during and after recordings.

The annotated data consists of: procedural activities time-segmented into regions classified within hierarchical taxonomy, with the intention to breakdown the high-level goal(s) into keysteps; time-synchronized segmentation mask tracks for object instances across one egocentric and exocentric view; human and automatically generated 3D joint position ground truth data (following the MS-COCO format), tracked across sub-clips within a take, for body (17 keypoints) and hand (21 keypoints); before (pre) and after (post) survey data answered by the participant to the help asses the proficiency of the camera wearer with normalized proficiency categories per domain; rich video-aligned natural language data in three different forms: Narrate & Act (the "why and how" from the participant's perspective), Atomic Action Descriptions (the "what" from a layman's third-person perspective), and Expert Commentary (the "how" from an expert's, third-person, perspective) which includes proficiency ratings from experts (with reasons why).

There are seven benchmark tasks derived from the annotations. The benchmark tasks form the Challenge we will host for 2024.

TODO: add links here

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
