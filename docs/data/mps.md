---
title: MPS
sidebar_position: 3
---

MPS stands for "Machine Perception Services" and are a service provided by the
Aria device recordings.

## Trajectory
Please read the [Official Aria Documentation](https://facebookresearch.github.io/projectaria_tools/docs/data_formats/mps/mps_trajectory)

Trajectory data provides the 3D camera positions of the camera wearer, sampled
at 1kHZ across the capture & each take. 

Here is some basic information about the trajectories:
- You can determine if a capture has an associated trajectory by referring to the field `has_trajectory`, or `has_trimmed_trajectory` if there is a take-trimmed counter-part
- The files related to the trajectory is located in the `trajectory` folder relative to the
capture (use the `closed_loop_trajectory.csv` file) or the take; if there is a take-trimmed counter-part (`has_trimmed_trajectory`): use `trimmed_trajectory_relative_path` from the take. 
- The intrinsic parameters are provided in the `trajectory` directory for the exo-centric GoPro cameras
(`gopro_calibs.csv`); for the aria camera it is provided in the capture, or the take-trimmed, VRS file.
- [Here is a code sample](https://facebookresearch.github.io/projectaria_tools/docs/data_utilities/core_code_snippets/mps#open-loopclosed-loop-trajectory) on how to read the closed loop file.

## Point Clouds

Point clouds are located in the `trajectory` subdirectory for each capture. Please familiarize yourself with the official documentation from [Project Aria](https://facebookresearch.github.io/projectaria_tools/docs/data_formats/mps/mps_pointcloud), as the files referenced in Aria's documentation are present in the `trajectory` folder. 

Below is some basic information about point clouds:
- Every capture that has trajectory will have a point cloud. Use the
`has_trajectory` field to classify which captures have trajectories & point
clouds.
   - The files associated to point clouds are: [`semidense_observations.csv.gz`](https://facebookresearch.github.io/projectaria_tools/docs/data_formats/mps/mps_pointcloud#point-observations) and [`semidense_points.csv.gz`](https://facebookresearch.github.io/projectaria_tools/docs/data_formats/mps/mps_pointcloud#points-in-the-world-coordinate-frame)
- Point clouds are associated to multiple (arbitrary) timepoints within
the video, [please read Aria's
documentation](https://facebookresearch.github.io/projectaria_tools/docs/data_formats/mps/mps_pointcloud#what-are-semi-dense-points)
- Point clouds are in the same 3D coordinate system as the trajectory data.
- [Here is a code sample](https://facebookresearch.github.io/projectaria_tools/docs/data_utilities/core_code_snippets/mps#point-cloud) on how to read the point cloud data from Project Aria

## Eye Gaze

Eye gaze data is located in each captures' or takes' `eye_gaze` folder. Please
familiarize yourself with the official documentation from [Project
Aria](https://facebookresearch.github.io/projectaria_tools/docs/data_formats/mps/mps_eye_gaze),
as the files referenced in Aria's documentation will be present in the
`eye_gaze` folder. 

Below is some basic information about eye gaze:
- You can determine if a take or capture has eye gaze by using the field `has_gaze` for a capture and `has_trimmed_gaze` for a take. 
    - If eye gaze is available for the take, it is trimmed (cropped in time) with respect to that take.
- [Here is a code sample](https://facebookresearch.github.io/projectaria_tools/docs/data_utilities/core_code_snippets/mps#eye-gaze) on how to read the eye gaze data from Project Aria
