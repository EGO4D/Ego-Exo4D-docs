---
title: CLI Downloader
sidebar_position: 7
---

:::info
As a pre-requisite, you must:
1. Make sure you **have a License Agreement**. If you don't, please refer to the
[Getting Started](../getting-started) page. *The License Agreement process takes 2 days: so do it early!*
2. Have **setup or installed the Ego4D** codebase, please refer to the [Ego4D
Github README](https://github.com/facebookresearch/Ego4d?tab=readme-ov-file#setup).
3. Configure your `aws` client, please [see below](#setup-aws-client).
:::

:::tip
1. Upgrade your ego4d pip package to `1.7.1` or above to enable faster downloads
2. Ensure you have [setup your aws client](#setup-aws-client)
:::


The dataset is large, due to this it is partitioned into separate "parts"
(subsets). You may choose to download one or more parts of the dataset with
optional filters in order to reduce how much you need to download.

The different parts of the dataset include: 

| Part | Size (GB) | Description |
| -----|-----------|-------------|
| **metadata** | 0.046 | See [metadata](/data/metadata) |
| **annotations** | 9.268 | All the [annotations](/annotations/) in Ego-Exo4D |
| **takes** | 10553.486 | Frame aligned video files associated to the [takes](/data/takes)  |
| **captures** | 43.618 | Timesync and post-survey data at the capture level (multiple takes)  |
| **take_trajectory** | 509.503 | [Trajectories](/data/mps/#trajectory) trimmed at each take |
| take_eye_gaze | 3.265 | [Eye gaze](/data/mps/#eye-gaze) for each take (3D & 2D) |
| take_point_cloud | 6164.615 | [Point clouds](/data/mps#point-clouds) for each take |
| take_vrs | 12301.458 | VRS files for each take |
| **take_vrs_noimagestream** | 995.592 | VRS files for each take without image stream data (video data within MP4 containers with `--parts takes`) |
| capture_trajectory | 851.691 | [Trajectory](/data/mps#trajectory) at the capture-level |
| capture_eye_gaze | 5.619 | [Eye gaze](/data/mps#eye_gaze) at the capture-level (3D)  |
| capture_point_cloud | 4750.039 | [Point clouds](data/mps/#point-clouds) for each capture |
| downscaled_takes/448 | 438.556 | [Downscaled takes](data/downscaled_takes/) at 448px on the shortest side |
| features/omnivore_video | 49.986 | Omnivore video [features](/data/features) |
| features/maws_clip_2b | 533.826 | [MAWS CLIP](https://github.com/facebookresearch/maws) ([ViT-2b](https://github.com/facebookresearch/maws?tab=readme-ov-file#maws-pretrained-models)) [features](/data/features) for each frame of video |
| ego_pose_pseudo_gt | 138.629 | Pseudo-ground truth data for [Ego Pose](/annotations/ego_pose/) |
| expert_commentary | 42.292 | [Commentaries](/annotations/expert_commentary) for each expert (audio recordings) |
| take_transcription | 0.094 | [Audio transcriptions](https://github.com/facebookresearch/Ego4d/blob/main/ego4d/egoexo/scripts/extract_audio_transcribe.py#L22-L47) for each take |
| take_audio | 1056.907 | [Audio files](https://github.com/facebookresearch/Ego4d/blob/main/ego4d/egoexo/scripts/extract_audio_transcribe.py#L22-L47) for the egocentric aria camera  |
| *all* | 38448.488 | All data within the release (you can use `--parts all`)  |
| **default ** | 12111.512 | The default set of data in the release (you can use `--parts default` or provide no parts) |

The parts in **bold** refer to the **recommended set** (**default**). You can additionally filter based on:
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

## Setup AWS Client

To setup your aws client, you will need to:
1. Install the aws-cli pip package, i.e. `pip install awscli`
2. Run `aws configure` or ([see the official docs](https://github.com/aws/aws-cli?tab=readme-ov-file#configuration))

When running `aws configure` you simply need to enter your access key & secret key and then press Enter twice to follow the default region and output format.

You can have multiple profiles setup on your machine. To tell the downloader which profile to use, simply use the flag `--s3_profile <name>`.

## Download The Data {#download-dataset-c}

:::info
Before you download data, please [setup your aws client](#setup-aws-client).
:::

Below are some examples on how to run the downloader CLI with common options:

:::note As noted above, you can use `--help` to view all the up-to-date options
```
egoexo --help
```
:::


### Recommended Dataset
Download suggested dataset parts for all the takes present.

```
egoexo -o <out-dir>
```

This is equivalent to

```
egoexo -o <out-dir> --parts default
```

#### Other Examples

Download all annotations & metadata:
```
egoexo -o <out-dir> --parts annotations metadata
```

Download all point clouds, eye gaze and trajectories for each take:
```
egoexo -o <out-dir> --parts take_point_cloud take_eye_gaze trajectory
```

Download all point clouds, eye gaze and trajectories:
```
egoexo -o <out-dir> --parts take_point_cloud eye_gaze take_trajectory
```


