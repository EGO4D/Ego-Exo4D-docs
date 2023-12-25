---
title: Features
sidebar_position: 10
---

Pre-extracted features for the dataset, for accessibility & quick iteration purposes.

:::info
[Download](/download/) with `--parts features/omnivore_video`
:::

These are extracted with the same code as Ego4D and hence are the same: [see
Ego4D's documentation](https://ego4d-data.org/docs/data/features/#description).
See the [Feature Extraction
README](https://github.com/facebookresearch/Ego4d/tree/main/ego4d/features#adding-a-model)
if interested in contributing another model.

## How Features are Extracted (What is Input to the Model)

Here is how each video is extracted:
- Features are extracted for each take and camera (`cam_id`) and camera stream
  (`stream_id`)
- A stride of 16/30 seconds is used, with a window size 32/30 seconds. 
    - If the stride is not divisible by the total duration time, then
      the last `[n - 32/30, n)` seconds of video is used as the last window.


## What Features are Available

Currently we only extract features from [Omnivore
Swin-L](https://github.com/facebookresearch/omnivore/tree/main/omnivore#model-zoo)'s
video head (`omnivore_video`) using a window size of ~32 frames (more accurately
32/30 seconds). 

## How to Read the Features

Download with `--parts features/omnivore_video`.

Once downloaded, each feature will be available under
`<download-dir>/features/<take_uid>_<cam_id>_<stream_id>.pt`. Use `torch.load` to load each file. 

Where:
- `<download-dir>`: is the directory you download the data to
- `<take_uid>`: is the identifier for the take
- `<cam_id>`: is the identifier for the camera, e.g. `aria01`, `cam01`, etc. This is
  same ID in the `captures.json` or `takes.json` file
- `<stream_id>`: is the identifier for the video stream. For GoPro cameras this
  will always be `0`, but for Aria it will only be `rgb` as we do not currently
  extract features from the SLAM (L/R) or Eye cameras

For training purposes, we recommend you pre-process them into a HDF5 dataset, see the function [`save_ego4d_features_to_hdf5`](https://github.com/facebookresearch/Ego4d/blob/main/ego4d/research/dataset.py#L47)
to do so and
[LabelledFeatureDset](https://github.com/facebookresearch/Ego4d/blob/main/ego4d/research/dataset.py#L13)
for usage during training; you can refer to
[clep](https://github.com/facebookresearch/Ego4d/tree/main/ego4d/research/clep)
as an example.
