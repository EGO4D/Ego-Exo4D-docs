---
title: MPS
sidebar_position: 3
---

MPS stands for "Machine Perception Services" and are a service provided by the
Aria device recordings.

## Trajectory
https://facebookresearch.github.io/projectaria_tools/docs/data_formats/mps/mps_trajectory

Trajectory data provides the 3D camera positions of the camera wearer, sampled
at 1kHZ across the take. This is located in the `trajectory` folder relative to
the capture (use the `closed_loop_trajectory.csv` file). The intrinsic
parameters are provided in the `trajectory` directory for the exo-centric GoPro
cameras (`gopro_calibs.csv`); for the aria camera it is provided in the capture
or take-trimmed VRS file.

## Point Clouds

Point clouds are located in the `trajectory` subdirectory for each capture.
Please familiarize yourself with the official documentation from [Project
Aria](https://facebookresearch.github.io/projectaria_tools/docs/data_formats/mps/mps_pointcloud),
as the files referenced in Aria's documentation are present in the `trajectory` folder. 

You can determine if a capture has an associated point cloud by referring to the
field `has_trajectory`. Every capture that has trajectory will have a point
cloud. Point clouds are associated to multiple timepoints within the video
([please read Aria's
documentation](https://facebookresearch.github.io/projectaria_tools/docs/data_formats/mps/mps_pointcloud#what-are-semi-dense-points)).
Point clouds are in the same 3D coordinate system as the trajectory data.

## Eye Gaze

Eye gaze data is located in each captures' or takes' `eye_gaze` folder. Please
familiarize yourself with the official documentation from [Project
Aria](https://facebookresearch.github.io/projectaria_tools/docs/data_formats/mps/mps_eye_gaze),
as the files referenced in Aria's documentation will be present in the
`eye_gaze` folder. 

You can determine if a take or capture has eye gaze by using the field
`has_gaze` for a capture and `has_trimmed_gaze` for a take. If eye gaze is
available for the take, it is trimmed (cropped in time) with respect to that
take.
