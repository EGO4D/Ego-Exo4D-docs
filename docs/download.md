---
title: CLI Downloader
sidebar_position: 5
---

:::info
As a pre-requisite, you must:
1. Make sure you **have a License Agreement**. If you don't, please refer to the
[Getting Started](../getting-started) page. *The License Agreement process takes 2 days: so do it early!*
2. Have **setup or installed the Ego4D** codebase, please refer to the [Ego4D
Github README](https://github.com/facebookresearch/Ego4d?tab=readme-ov-file#setup).
:::

The dataset is large, due to this it is partitioned into separate "parts"
(subsets). You may choose to download one or more parts of the dataset with
optional filters in order to reduce how much you need to download.

The different parts of the dataset include: 
- **metadata**
- **annotations**
- **takes**
- **captures**
- **trajectory**
- eye_gaze
- point_cloud
- capture_raw_stitched_videos
- capture_raw_vrs
- ego_pose_pseudo_gt

The parts in bold refer to the *recommended set*. You can additionally filter based on:
- Data relevant to a specific [benchmarks](../benchmarks): `--benchmarks <benchmark_name>`
    - e.g. `--benchmarks keystep relations`
- Dataset splits (train/val/test): `--splits <s1> <s2> ...`, e.g.
    - `--splits train` for data that only lies in the training set
- Egocentric or exocentric related data (videos, trajectory)
    - Use `--views exo` for only exocentric, `--views ego` for only
      egocentric, or `--views ego exo` for both. Defaults to both.
- Specific takes or captures to download: `--uids`
- Universities (use `--universities` or `-u`)
    - e.g. `-u cmu unc sfu`

Please refer to the Download [CLI README](https://github.com/facebookresearch/Ego4d/tree/main/ego4d/egoexo/download) or use the flag `--help` for the latest parts of the dataset and additional usage of the dataset.


# Download The Data {#download-dataset-c}

Below are some examples on how to run the downloader CLI with common options:

:::note As noted above, you can use `--help` to view all the up-to-date options
```
egoexo --help
```
:::


### Recommended Dataset
Download suggested dataset parts for all the takes present.

:::warning This will download ~14TiB of data
:::
```
egoexo -o <out-dir>
```


#### Other Examples

Download all annotations & metadata:
```
egoexo -o <out-dir> --parts annotations metadata
```

Download all point clouds, eye gaze and trajectories:
```
egoexo -o <out-dir> --parts point_cloud eye_gaze trajectory
```

Download all point clouds, eye gaze and trajectories:
```
egoexo -o <out-dir> --parts point_cloud eye_gaze trajectory
```
