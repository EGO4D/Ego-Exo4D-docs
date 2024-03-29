---
title: Change Log
sidebar_position: 99
---

## V2

### March 28, 2024
- ego4d pip package `1.7.1` released, which starting your download significantly faster than previous versions. Upgrade your pip package!

### March 25, 2024

Ego-Exo4D V2 is announced. Please see the forum for the announcement post.

You may download the new data by upgrading your CLI tool or using the flag `--release v2`.

A summary of changes are listed below:

#### Data
- **1286.30 total video hours** across 5035 takes (**221.26 ego-centric hours**). *Comparing to V1:*
    - 1341 additional takes: spanning 254.8 more total hours (44.4 ego-hours)
    - 119 additional Narrate & Act takes (456 takes)
- 99% of takes contain eye gaze (2D and 3D), trajectory data and 3D point clouds
- **Note on Dataset Quality:** each take is verified to have the correct task ID label by external annotators and verified by university data POCs. Please see this [forum post](https://discuss.ego4d-data.org/t/ego-exo4d-dataset-changes-quality-issues-future-update/463) for additional context.
- ***NEW:*** Best exocentric labels available for 90% of the takes
    - Available in [`takes.json`](/data/metadata/#takes) under the field `"best_exo"`
- ***NEW:*** Tight take time boundaries indicating when the task occurs within a take
    - Available in [`takes.json`](/data/metadata/#takes) under the field `"task_start_sec"` / `"task_end_sec"`

#### Annotations
- ***UPDATED:*** [Expert Commentary](/annotations/expert_commentary): 11,689 annotations covering 3,055 takes (117,812 audio recordings) annotated from 50 experts
- ***UPDATED:*** EgoPose (Body) human generated ground truth available for 1,358 takes containing 376K 3D body poses and 2M 2D body pose annotations. Automatic annotations covering 2559 takes, 9.2M 3D body poses and 46.87M 2D body poses are also available.
- ***UPDATED:*** EgoPose (Hand) human generated ground truth available for 458 takes containing 68K 3D hand poses and 340K 2D hand pose annotations. Automatic annotations covering 976 takes, 4.3M 3D hand poses and 21M 2D hand poses are also available.
- ***UPDATED:*** Atomic Actions Descriptions covering 4,965 takes with 432,467 text descriptions. Comparing to V1:
    - 172% more descriptions (250,742 descriptions in V1) across 2,202 more takes
    - Bug fix: "unsure" and "best exo" fields corrected
- ***UPDATED:*** Relation Annotations 2.2M segmentation masks across 1653 takes. Comparing to V1:
    - 832,733 more segmentation masks across 396 more takes
- ***UPDATED:*** Train/val/test sets now cover all takes in the dataset: 3072 train/842 val/1121 test
- ***UPDATED:*** Atomic Actions Descriptions covering 4965 takes with 432,467 text descriptions. Comparing to V1:
    - 172% more descriptions (250,742 descriptions in V1) across 2,202 more takes
    - **Bug fix:** "unsure" and "best exo" fields corrected
- ***UPDATED:*** Relation Annotations 2.2M segmentation masks across 1653 takes. Comparing to V1:
    - 832,733 more segmentation masks across 396 more takes
- ***UPDATED:*** Train/val/test sets now cover all takes in the dataset: 3072 train/842 val/1121 test

#### Accessibility
- ***NEW:*** Transcriptions and pre-extracted audio all takes, including Narrate & Act takes, where camera-wearers verbally describe what they are doing while they are doing it. 
    - Download with `--parts take_audio` and `--parts take_transcription`
    - Note, this data is only for the egocentric aria file.
    - Thanks [@juliawilkins](https://github.com/facebookresearch/Ego4d/issues/288) for the pre-extracted audio suggestion.
- ***NEW:*** [MAWS CLIP](https://github.com/facebookresearch/Ego4d/pull/301) features for each frame of video in Ego-Exo4D
- ***NEW:*** 2D eye gaze for 99% of takes (derived from the 3D eye gaze; projected into the egocentric image plane)


## V1
### March 15, 2024

The following annotations were updated or newly introduced:
- **NEW**: EgoPose (hand & body)
- **NEW**: Expert Commentary
- **UPDATED:** Atomic Action Descriptions

### Jan 27, 2024

Quality issues were spotted, with our intention to fix and improve the dataset. See the context on the forums here: https://discuss.ego4d-data.org/t/ego-exo4d-dataset-changes-quality-issues-future-update/463

### Dec 15, 2023

Release of Ego-Exo4D is announced. Please refer to the forum post: https://discuss.ego4d-data.org/t/ego-exo4d-ego4d-v2-1-release/417
