---
title: Welcome to Ego-Exo4D!
sidebar_position: 1
slug: /
---

:::tip
Ego-Exo4D V2 is released which includes **1286.30** video hours (**221.26 ego-hours**) across 5035 takes (171% more data than V1). It also includes significantly **more annotations**, please refer to the [Change Log](/changelog) for more details.

Upgrade your ego4d pip package or use `--release v2` when you download.
:::

Ego-Exo4D is a diverse, large-scale multimodal multiview video dataset and benchmark challenge. Ego-Exo4D centers around simultaneously captured and timesynced egocentric and exocentric video of skilled human activities . More than 800 participants from 13 cities worldwide performed these activities in 131 different natural scene contexts, yielding long-form captures from 1 to 42 minutes each and 1,422 hours of video combined. The dataset contains skilled activites covering both physical (Soccer, Basketball, Dance, Bouldering, Music) and procedural (Cooking, Bike Repair, Health) tasks.


<img alt="Scenarios overview" src={require("/img/scenarios_highres.jpg").default} style={{textAlign: 'center', width: '95%', margin: 20}}></img>

The video is is accompanied by 7-channel audio, IMU, eyegaze, two grayscale SLAM cameras, and 3D environment point clouds. Ego-Exo4D also provides multiple video-language resources, all time indexed: first-person narrations by the camera wearers describing their own actions; third-person play-by-play descriptions of every camera wearer action; and third-person spoken expert commentary done by coaches and teachers critiquing their performance.The dataset is also extensively annotated with 3D body and hand pose, object segmentation masks, keysteps, procedural dependencies, and proficiency ratings in support of our proposed benchmark tasks.

<img alt="Dataset overview" src={require("/img/dataset_overview.jpg").default} style={{textAlign: 'center', width: '95%', margin: 20}}></img>

## Getting Started
- [Get access and download the dataset](./getting-started)
- Read the [paper](http://arxiv.org/abs/2311.18259) for a complete introduction
- Read the [Overview](./overview) page describing a summary of what's in the dataset
    - Learn about the [Annotations](./annotations/)
    - Learn about the [Benchmarks](./benchmarks)
- Watch a [Video Introduction](https://www.youtube.com/watch?v=GdooXEBAnI8) of the Dataset
- Explore the Dataset with the [Visualization Tool](https://visualize.ego4d-data.org/?v=%22EgoExo+v1%22)
- Visit the [Forum](https://discuss.ego4d-data.org/) or [Contact us](./contact.md) to ask questions and report issues with the data or related codebases.

Have fun using the dataset!

