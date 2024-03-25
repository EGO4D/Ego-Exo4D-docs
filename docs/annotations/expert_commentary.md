---
title: Expert Commentary
sidebar_position: 6
---

:::info
- To download transcriptions use `--parts annotations`. You can use `--benchmarks expert_commentary` to filter for just the transcription file.
- To download all data for expert commentary use `--parts expert_commentary` (and `--parts annotations` for train/val split transcription file)
:::

# Expert Commentary

Please refer to the [jupyter notebook tutorial](https://github.com/facebookresearch/Ego4d/blob/main/notebooks/egoexo/EgoExo_Expert_Commentary_Tutorial.ipynb) for an overview and how to use the annotation files available.

We enlist subject domain experts (e.g. professional chefs, coaches, performers) to provide commentary on the takes in our dataset. Unlike prior datasets, which primarily focus on *what* is happening, expert commentary additionally provides insights on the *why* of the demonstration, and *how well* the demonstration is performed.

Each take may be commentated on by several different in-domain experts, each of whom may have different styles or aspects they prioritize; the expert providing a particular commentary is identifiable by a unique 6 character ID. 

The expert commentary consists of three types of data:

- *Commentaries*: As experts watch each take, they pause the video as desired to record verbal commentary. Experts were to keep commentaries retrospective -- i.e. they should not reference events that happen after the frame on which they've paused. We provide both the video timestamp when the expert paused the video, as well as the order in which the commentaries were recorded. We provide both the original audio recordings, as well as auto-transcriptions [using Whisper](https://github.com/facebookresearch/Ego4d/blob/main/ego4d/internal/expert_commentary/transcribe.py#L19-L45).
- *Spatial drawings*: For each commentary, experts were given the option to draw on the video player to provide visual grounding to their comments. When available, we provide the stroke paths as a temporal sequence of pixel coordinates.
- *Proficiency*: After watching each take, experts provided a single proficiency score to the entire demonstration on a scale from 1-10. Experts were encouraged to utilize the full dynamic range across all the takes they viewed, but were otherwise given the freedom to define the scaling themselves.


# Annotations Structure

We transcribe each annotation and aggregate these transcriptions into a single JSON file per split (`--parts annotations`). The test set is redacted due to the [Proficiency benchmark task](/benchmarks/proficiency_estimation/). This single annotation file (per split) does not include spatial drawing data or proficiency information, but can be used to refer to the more granular annotation data as described below.

For proficiency and spatial drawing data, you will need to refer to the `expert_commentary` folder under the `annotations` folder (you will need to download with `--parts expert_commentary`). To read the spatial drawing correct, please refer to the function [`get_paths_for_commentary_time` in the python module `ego4d.egoexo.expert_commentary`](https://github.com/facebookresearch/Ego4d/blob/main/ego4d/egoexo/expert_commentary.py#L4) (example usage is shown in the [tutorial notebook](https://github.com/facebookresearch/Ego4d/blob/main/notebooks/egoexo/EgoExo_Expert_Commentary_Tutorial.ipynb)).

This folder is structured as follows:

```
|-- annotations/expert_commentary
    |-- [take_name]
        |-- [expert_uid]
            |-- recordings
                |-- 0.webm
                |-- 1.webm
                ...
            |-- data.json
            |-- transcriptions.json
        |-- [expert_uid]
            ...
    |-- [take_name]
    ...
```

The contents under each `annotations/expert_commentary/[take_name]/[expert_uid]` directory comprise an expert commentary annotation, consisting of the following files:

- `recordings/[x].webm`: Audio recordings of a commentary. Here [x] encodes the order in which the recordings were recorded, in real time. Experts
- `data.json`: Contains expert commentary metadata, spatial drawing paths, and proficiency score/explanations. Some of the more relevant fields:
- `user_id`: The 6 character unique ID of the expert providing the commentary
- `video_name`: The video name of the take commentated on by the expert.
- `annotations`: A list, containing information per commentary
- `recording_path`: Name of the corresponding recording file (`[x].webm`)
- `duration_approx`: Length of the recording in seconds
- `video_time`: Timestamp in the video when the expert paused, to provide commentary
- `events`: Data for reconstruction the spatial drawings. The `paths` field contains pairs of data points, whose `from` and `to` fields provide the (x,y) coordinates and timestamps of the start and end of each stroke.
- `proficiency`: Demonstration proficiency information
- `rating`: A score from 1-10
- `why`: A short text explanation of why the `rating` was chosen
- `transcriptions.json`: Auto-transcriptions of the recordings files, using Whisper. Note that these may contain errors, as auto-transcriptions may not be perfect. Each entry in the transcription file is indexed by the recording file name (`[x].webm`), with the following fields:
    - `text`: The text of the transcription
    - `language`: The language code of the transcription. All our experts are native English speakers, so this should be `en` for all transcriptions.
    - `error`: a boolean flag to mark whether there was an error
    - `error_desc`: A description of the error if `error` is `true` (`traceback.format_exc()`) 

# Sample JSON

Here is a JSON snippet showing a sample annotation from the `expert_commentary_<split>.json` file:

```json
{
   "ds": "YYYYDDMM_HH:MM:SS", # when the data was exported
   "annotations": {
       "<take_uid1>": [
           {
               // take identifiers
               "take_name": "cmu_bike15_4",
               "take_uid": "816c4bd2-a5ba-4e40-854f-c98d771d1060",

               // task information for the take
               "task_id": 4004,
               "task_name": "Clean and Lubricate the Chain",

               // where the commentary is located relative to annotations/expert_commentary/
               "commentary": "cmu_bike15_4/qfbn5o",
               "commentary_data": [
                   {
                       "recording": "4.webm", // associated audio file
                        // where in the video the commentary was made
                       "video_time": 27.833885,

                       // a transcription of the commentary
                       "text": " Our mechanic is using a 15mm ratcheting combination wrench, which will be a great tool for the job and will make this job quicker and more efficient.",
                       // how long the audio recording is (approximately)
                       "duration_approx": 12.76620000000298

                        // whether there is an error
                        "error": false,
                   },
                    ...
                ]
            }
            ...
        ]
        "<take_uid2>": [ ... ],
        ...
    }
}
```

