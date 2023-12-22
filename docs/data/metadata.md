---
title: Metadata
sidebar_position: 1
---

Metadata files for all of the released data.

When you download `--parts metadata`, you will have the following files present
in your `<download-dir>`:

- **`takes.json`**
    - A list of each take within the dataset. For convenience this also
      contains the associated capture's metadata.
- **`participants.json`**
    - A list of each participant within the dataset, including
      their demographic information when available, which specifies their: age
      range, gender range, race/ethnicity, job/profession and other fields.
    - In the future this will also contain pre and post-survey data.
- *`captures.json`*
    - A list of each capture within the dataset.
- `visual_objects.json`
    - A list of each object with visual images within the dataset.
    - The images associated to each object is currently not available.
- `physical_setting.json`
    - A list of each physical environment within Ego-Exo4D

In bold are the files that provide the most value and are the ones to use. Below
is documentation for each of the files.


## Takes

Here is a sample of the JSON with the most important fields included.

```python
{
    {
        "root_dir": "takes/<take_name>",  # where the take lives relative to the <download_dir>
        "take_name": <take_name>,
        "participant_uid": 657,  # the participant 
        "is_dropped": false, # whether the take is dropped (always false)
        "objects": [],  # the list of visual objects in the take

        # Take Information
        "task_id": 4001,
        "task_name": "Remove a Wheel",
        "parent_task_id": 4000,
        "parent_task_name": "Bike Repair",
        "take_idx": 1,  # The take index relative to the capture
        "duration_sec": 21.366666666666667,  # how long the take is in seconds
        "is_narrated": false, # Whether this take was a Narrate & Act Take
        # what physical environment this take is recorded in 
        # this uid links to physical_setting.json
        "physical_setting_uid": 97,

        # Capture-Relevant information
        "timesync_start_idx": 6372,  # the starting index of the captures' timesync file
        "timesync_end_idx": 7013, # the ending index of the captures' timesync file (inclusive)
        "capture": <see captures below>,
        "validated": true  # whether we have manually validated the timesync

        # a JSON object / dictionary with the following keys: [cam_id][stream_id]
        "frame_aligned_videos": {
            "aria01": {
                "slam-left": {
                    "cam_id": "aria01",
                    "stream_id": "1201-1",
                    "readable_stream_id": "slam-left",
                    "clip_uid": "dc66a4d5-244e-459d-8480-85bb356cc448",
                    "relative_path": "frame_aligned_videos/aria01_1201-1.mp4"
                },
                "slam-right": {
                    "cam_id": "aria01",
                    "stream_id": "1201-2",
                    "readable_stream_id": "slam-right",
                    "clip_uid": "84d3eb90-a7df-445f-bad2-dcde99be221e",
                    "relative_path": "frame_aligned_videos/aria01_1201-2.mp4"
                },
                "et": {
                    "cam_id": "aria01",
                    "stream_id": "211-1",
                    "readable_stream_id": "et",
                    "clip_uid": "6b1a9f9d-62ac-4f83-8c50-2996bd138fae",
                    "relative_path": "frame_aligned_videos/aria01_211-1.mp4"
                },
                "rgb": {
                    "cam_id": "aria01",
                    "stream_id": "214-1",
                    "readable_stream_id": "rgb",
                    "clip_uid": "108a555f-2214-40f3-838f-f2e444dc9738",
                    "relative_path": "frame_aligned_videos/aria01_214-1.mp4"
                }
            },
            "cam01": {
                "0": {
                    "cam_id": "cam01",
                    "stream_id": "0",
                    "readable_stream_id": "0",
                    "clip_uid": "c05e03f0-486a-4443-85b0-3ef5c9f8f657",
                    "relative_path": "frame_aligned_videos/cam01.mp4"
                }
            },
            "cam02": # .. see above
            "cam03": # .. see above
            # etc.
            # please see take["capture"]["cameras"] for each cam_id here

            # there is also a collage video
            "collage": {
                "0": {
                    "clip_uid": "878642ea-3427-4fc2-9316-1d226b5e48e2",
                    "stream_id": "0",
                    "readable_stream_id": "0",
                    "relative_path": "ego_preview.mp4"
                }
            },
            # and another collage with a side-by-side of the "best_exo" camera
            "best_exo": {
                "0": {
                    "clip_uid": null,
                    "stream_id": "0",
                    "readable_stream_id": "0",
                    "relative_path": null
                }
            }
        },
        "university_name": "cmu",

        # Some internal uids for debugging/book-keeping
        "capture_uid": "d37b73eb-fa42-43a6-8115-56832996ebd7",
        "take_uid": "13f01c79-5bfd-42f5-90ce-ee350aa1c3ad",
        "take_timing_uid": "4899977d-7767-4965-a746-17077c3bc5ce",
        "timesync_uid": "f66bd964-1bc1-4da5-a55f-4d5fc770db60",

        # more fields here ...
    },
    # ... more takes here
}
```

## Participants

```python
[
    {
        "participant_uid": 2,  # a unique identifier for the participant
        "university_name": "uniandes",  # which university the participant came from
        "collection_date": "2023-03-09",  # when the participant was recorded
        # JSON data for the metadata, load with `json.loads(part["metadata"])`
        "metadata": "{<redacted>}"
    },
```

## Captures

```python
[
    {
        "root_dir": "captures/cmu_bike01",
        "capture_name": "cmu_bike01", #  the name of the capture
        "university_name": "cmu",  # the university
        "physical_setting_uid": 97,  # the environment
        "ds_recorded": 1689793200,  # a datestamp of when the capture was recorde

        "has_trajectory": true,  # whether trajectory data lives in `<root_dir>/trajectory`
        "has_gaze": true,
        "has_postsurvey": true,

        # list of cameras the capture was recorded with
        "cameras": [
            {
                "cam_id": "aria01",  # an identifier for the camera: <device_type><number>
                "is_ego": true,  # true if egocentric
                "has_walkaround": true,  # whether the recording includes a walkaround video (for environment reconstruction)
                "includes_audio": true,  # whether the recording includes audio
                "device_type": "aria",  # the device used
                "relative_path": "videos/aria01.vrs",  # relative path to the capture
                "video_artifact_uid": "355f22a8-1796-491b-b531-118a026dd1c5"  # debugging identifier
            },
            {
                "cam_id": "cam01",
                "is_ego": false,  # for camXX cam_ids this will mostly be false, there are some egocentric GoPros
                "has_walkaround": false,
                "includes_audio": true,
                "device_type": "hero10",
                "relative_path": "videos/cam01.mp4",
                "video_artifact_uid": "8c2debd0-95e1-4186-bcca-8945bd530011"
            },
            {
                "cam_id": "cam02",
                "is_ego": false,
                "has_walkaround": false,
                "includes_audio": true,
                "device_type": "hero10",
                "relative_path": "videos/cam02.mp4",
                "video_artifact_uid": "af64afa3-c421-4214-9862-5ee22a91b3de"
            },
            {
                "cam_id": "cam03",
                "is_ego": false,
                "has_walkaround": false,
                "includes_audio": true,
                "device_type": "hero10",
                "relative_path": "videos/cam03.mp4",
                "video_artifact_uid": "b00b5808-a8ec-4df0-a666-4d208ab3c078"
            },
            {
                "cam_id": "cam04",
                "is_ego": false,
                "has_walkaround": false,
                "includes_audio": true,
                "device_type": "hero10",
                "relative_path": "videos/cam04.mp4",
                "video_artifact_uid": "7caeffe0-61a4-4360-aeaa-f6cd925a7d6e"
            },
            {
                "cam_id": "moblie",
                "is_ego": false,
                "has_walkaround": false,
                "includes_audio": true,
                "device_type": "hero10",
                "relative_path": "videos/moblie.mp4",
                "video_artifact_uid": "20ae64bd-10a7-44ca-9c29-3e3d19a4fe6e"
            }
        ],
        "timesync_validated": true, # whether the timesync has been validated
        "validated": true  # where we have validated the capture & timesync

        # book-keeping/debugging uids
        "timesync_uid": "f66bd964-1bc1-4da5-a55f-4d5fc770db60",
        "capture_uid": "d37b73eb-fa42-43a6-8115-56832996ebd7",
    },
    # more captures here
]
```
