---
title: Getting Started
sidebar_position: 2
---

To gain access and start using the dataset, follow these steps:

1. [Review and accept the terms of our license agreement](#license-agreement) **(required)**
    - **DO THIS FIRST:** it will take 48 hours to receive credentials
2. [Browse the Dataset](#browse-dataset) (optional, but recommended)
3. [Download the Dataset](#download-dataset)
    1. [Obtain the EgoExo4D Downloader CLI](#download-dataset-a)
    2. [Select a subset of the data to download](#download-dataset-b)
    3. [Download The Data](#download-dataset-c)


## License Agreement {#license-agreement}

TODO

## Browse The Dataset {#browse-dataset}

- Refer to [Overview](/overview) to see what's available.
- Use the Visualization Tool(/viz-tool) to browse the dataset.

## Download The Dataset {#download-dataset}

You can download the dataset similar to that of Ego4D, using the Downloader CLI.

### Obtain The EgoExo4D Downloader CLI {#download-dataset-a}

There are two methods to obtain the downloader CLI. In both cases, we recommend to first setup a conda environment.

#### Option 1: pip

```
pip install ego4d
```

#### Option 2: Clone the [Ego4d](https://github.com/facebookresearch/Ego4d) Repository

```
git clone https://github.com/facebookresearch/Ego4d
cd Ego4d
pip install .
```

### Select a Subset {#download-dataset-b}

There are many ways the dataset is partitioned, you can choose subsets with respect to:
- parts of the dataset(TODO1), which include:
    - take-trimmed time-syncornized videos
    - point clouds
    - trajectory
    - imu
    - ... and more(TODO1)
- data relevant to a specific annotations(TODO2), benchmarks(TODO3) and dataset splits (train/val/test)
- egocentric or exocentric video data
- specific takes or captures to download
- universities

Please refer to [below for examples](#download-dataset-c) and here for detailed documentation(TODO).

### Download The Data {#download-dataset-c}

Please refer to here for more detailed documentation(TODO). Below are some examples on how to run the downloader CLI with common options:

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
