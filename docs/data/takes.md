---
title: Takes
sidebar_position: 1
---

The dataset was recorded in a single recording session called a *capture*, each
capture contains multiple *takes* corresponding to a single activity. Data is
trimmed (cropped temporally) to each take.

The following describes the data that is trimmed at the take-level (& how to download it via the [CLI](/download)):
- Frame aligned videos (`--parts takes`)
    - For each camera, there is an MP4 video file where each frame $i$
      correspond to the same point in time for all cameras.
    - Downscaled versions of these are available, see [Downscaled Takes](/data/downscaled_takes)
- VRS files
    - Aria (egocentric camera used) records with the VRS file format. These are available as trimmed takes.
    - This VRS file includes camera intrinics, IMU, audio data and optionally image stream data (RGB camera, left/right slam cameras)
    - If a VRS file is suffixed with `_noimagestreams` then this VRS file will not contain image stream data (as the name suggests)
    - Use `--parts takes` to download VRS files without image stream data and `--parts take_vrs` for VRS files with image stream data
- Trajectory (`--parts take_trajectory`)
    - Use this data to get the 3D location of the camera wearer at each point in time
    - Note: since this data is sampled at 1kHZ (due to IMU), to perform
      matching: we recommend rounding the time (in nanoseconds) for the frame
      to the nearest time stamp in the trajectory file
    - See [MPS](/data/mps#trajectory)
- Eye gaze (`--parts takes`)
    - Similar to trajectory, but for eye gaze. See [MPS](/data/mps#eye-gaze)
- Audio
    - This is available in the frame aligned videos (for each camera) & VRS files for the egocentric camera (7 microphones) (see above)

## Capture-Level Information

Within each capture, the following information is present.

### Timesync
Timesync information is present for each capture when downloading via `--parts captures`. This data is available as `capture/<capture_name>/timesync.csv`.

The timesync information is present as a CSV file. Where each row in the CSV file
describes a matching timestamp & frame number for each camera.

The columns of the CSV file are of the format `<cam_id>_pts` and
`<cam_id>_frame_number` for the Presentation Time-Stamp (PTS) and frame number
respectively.

### Take-Timing Information

In **`takes.json`**, each take contains two key-value pairs `timesync_start_idx` and `timesync_end_idx`. These two values are integers that specify the position of the lines in the `capture/<capture_name>/timesync.csv`, and can be used to locate the corresponding start and end timestamps for the take. The following is the example code.

```python
start_idx = take["timesync_start_idx"]+1
end_idx = take["timesync_end_idx"]-1
# load the timesync.csv file into variable timesync
start_timestamp = timesync.iloc[start_idx]["aria01_214-1_capture_timestamp_ns"]
end_timestamp = timesync.iloc[end_idx]["aria01_214-1_capture_timestamp_ns"]
```
