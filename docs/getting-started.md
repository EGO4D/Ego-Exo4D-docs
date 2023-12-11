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
To obtain access to the Ego4D dataset or any annotations, you must first review and accept the terms of our license agreement. This agreement covers the use of the dataset for research purposes only and includes restrictions on commercial use, redistribution, and other activities. There are no fees associated with using the dataset.

To review and execute the license agreement, go to [ego4ddataset.com/ego4d-license](https://ego4ddataset.com/ego4d-license/). Once your agreement is approved, which typically takes around 48 hours, you will be emailed a set of AWS access credentials. In the meantime, you can explore the [data overview](/overview/) and the [sample notebooks](https://github.com/facebookresearch/Ego4d/tree/main/notebooks/egoexo) to get familiar with the dataset, and download the CLI to get setup in advance.

Note that the license agreement can be signed as an individual or on behalf of your institution. Typically, only institutional signatories at a director or executive level can agree to license terms on behalf of an entire organization.

Once you have obtained your AWS access credentials, you can access the Ego4D dataset by following the [download steps](#download-dataset).

Note that your access credentials will expire in 14 days, so it's important to download the dataset locally and not consume it from AWS. If you need continued access to the dataset after your credentials expire, you can easily renew your license by requesting it again at [ego4ddataset.com/ego4d-license](https://ego4ddataset.com/ego4d-license/). If previously approved, your access will be immediately re-activated.

## Browse The Dataset {#browse-dataset}

- Refer to [Overview](/overview) to see what's available.
- Use the Visualization Tool(/viz-tool) to browse the dataset.

## Download The Dataset {#download-dataset}

You can download the dataset similar to that of Ego4D, using the Downloader CLI.

### Obtain The EgoExo4D Downloader CLI {#download-dataset-a}

Please follow the
[Setup](https://github.com/facebookresearch/Ego4d?tab=readme-ov-file#setup)
instructions on the Ego4D Github README.

### Select a Subset {#download-dataset-b}

There are many ways the dataset is partitioned, you can choose subsets with respect to:
- parts of the dataset(TODO1), which include:
    - take-trimmed time-synchronized videos
    - point clouds
    - trajectory
    - imu
    - ... and more(TODO1)
- data relevant to a specific annotations(TODO2), benchmarks(TODO3) and dataset splits (train/val/test)
- egocentric or exocentric video data
- specific takes or captures to download
- universities

Please refer to [below for examples](#download-dataset-c) and [here for detailed documentation](../download).

### Download The Data {#download-dataset-c}

Please refer to here for more [detailed documentation](../download). Below are some examples on how to run the downloader CLI with common options:

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
