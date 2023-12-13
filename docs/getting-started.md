---
title: Getting Started
sidebar_position: 2
---

To gain access and start using the dataset, follow these steps:

1. [Review and accept the terms of our license agreement](#license-agreement) **(required)**
    - **DO THIS FIRST:** it will take 48 hours to receive credentials
2. [Browse the Dataset](#browse-dataset) (optional, but recommended)
3. [Download the Dataset](#download-dataset)

## License Agreement {#license-agreement}
To obtain access to the Ego-Exo4D dataset or any annotations, you must first review and accept the terms of our license agreement. This agreement covers the use of the dataset for research purposes and commercial use, along with restrictions on redistribution and other activities. There are no fees associated with using the dataset.

To review and execute the license agreement, go to [ego4ddataset.com/egoexo-license/](https://ego4ddataset.com/egoexo-license/). Once your agreement is approved, which typically takes around 48 hours, you will be emailed a set of AWS access credentials. In the meantime, you can explore the [data overview](/overview/) and the [sample notebooks](https://github.com/facebookresearch/Ego4d/tree/main/notebooks/egoexo) to get familiar with the dataset, and download the CLI to get setup in advance.

Note that the license agreement can be signed as an individual or on behalf of your institution. Typically, only institutional signatories at a director or executive level can agree to license terms on behalf of an entire organization.

Once you have obtained your AWS access credentials, you can access the Ego4D dataset by following the [download steps](#download-dataset).

Note that your access credentials will expire in 14 days, so it's important to download the dataset locally and not consume it from AWS. If you need continued access to the dataset after your credentials expire, you can easily renew your license by requesting it again at [ego4ddataset.com/egoexo-license/](https://ego4ddataset.com/egoexo-license/). If previously approved, your access will be immediately re-activated.

## Browse The Dataset {#browse-dataset}

- Refer to [Overview](/overview) to see what's available
- Use the [Visualization Tool](https://visualize.ego4d-data.org/?v=%22EgoExo+v1%22) to browse the dataset

## Download The Dataset {#download-dataset}

You can download the dataset similar to that of Ego4D, using the [Downloader CLI](./download.md).

A summary of the steps to take are:
1. [Obtain the EgoExo4D Downloader CLI](https://github.com/facebookresearch/Ego4d?tab=readme-ov-file#setup):
   - Please follow the [Setup](https://github.com/facebookresearch/Ego4d?tab=readme-ov-file#setup)
instructions on the [README of the Ego4D repository](https://github.com/facebookresearch/Ego4d?tab=readme-ov-file#setup)
2. Select a subset of the data to download
   - By default the downloader CLI will download a "recommended" set/parts of
     the dataset for general research purposes, this set is approximately 14 TiB.
   - If you wish to filter/download only specific parts of the dataset, then
      please refer to the [documentation](./download.md)
3. [Download The Data](../download)
    - Run the CLI, for example `egoexo -o <out-dir>` or with specific parts
      `egoexo -o <out-dir> --parts metadata annotations takes point_cloud`
