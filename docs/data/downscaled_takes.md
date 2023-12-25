---
title: Downscaled Takes
sidebar_position: 10
---

Downscaled take-trimmed and time-synchronized videos.

:::info
[Download](/download/) with `--parts downscaled_takes/448`
:::

We have pre-processed the take `frame_aligned_videos` and made them available.
They are used for some baseline training.

They are downscaled to 448px on the shorter-side. Once downloaded, they will be
placed in each take directory, i.e. under:
`takes/<take_name>/frame_aligned_videos/downscaled/448/<video_name>.mp4` where
`<video_name>` is associated to the non-downscaled variant. In other words, it
is available for each camera and stream. 

For example, here is `tree` output relative to the `<download_dir>` for a take
directory:
```bash
takes/cmu_bike14_4/frame_aligned_videos/
├── aria01_1201-1.mp4
├── aria01_1201-2.mp4
├── aria01_211-1.mp4
├── aria01_214-1.mp4
├── cam01.mp4
├── cam02.mp4
├── cam03.mp4
├── cam04.mp4
└── downscaled
    └── 448
        ├── aria01_1201-1.mp4
        ├── aria01_1201-2.mp4
        ├── aria01_211-1.mp4
        ├── aria01_214-1.mp4
        ├── cam01.mp4
        ├── cam02.mp4
        ├── cam03.mp4
        ├── cam04.mp4
        └── ego_preview.mp4
```
