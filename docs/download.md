---
title: CLI Downloader
sidebar_position: 5
---

:::note
As a pre-requisite, you must setup the Ego4D codebase, please refer to the [Ego4D
Github README](https://github.com/facebookresearch/Ego4d?tab=readme-ov-file#setup) to do so
:::

Please make sure you have a License Agreement. If you don't, please refer to the
[Getting Started](../getting-started) page.

There are many ways the dataset is partitioned, you can choose subsets with respect to:
- different parts of the dataset (take videos, trajectory, point clouds, etc.)
- data relevant to a specific annotations(TODO2), benchmarks(TODO3) and dataset splits (train/val/test)
- egocentric or exocentric video data
- specific takes or captures to download
- universities

Please refer to [below for examples](#download-dataset-c) and [here for detailed documentation](../download).


# Download The Data {#download-dataset-c}

Below are some examples on how to run the downloader CLI with common options:

:::note You can use `--help` to view all the options
```
python3 -m ego4d.egoexo.download.cli --help
```
:::


Download suggested dataset parts for all the takes(TODO) present. Warning, this is (10TiB - TODO change):

:::note This will download 10TiB of data
```
python3 -m ego4d.egoexo.download.cli -o <out-dir>
```
:::


#### Other Examples

Download all annotations & metadata:
```
python3 -m ego4d.egoexo.download.cli -o <out-dir> --parts annotations metadata
```

Download all point clouds, eye gaze and trajectories:
```
python3 -m ego4d.egoexo.download.cli -o <out-dir> --parts point_cloud eye_gaze trajectory
```

Download all point clouds, eye gaze and trajectories:
```
python3 -m ego4d.egoexo.download.cli -o <out-dir> --parts point_cloud eye_gaze trajectory
```
