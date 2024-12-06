---
title: Fine-grained Keystep Recognition
sidebar_position: 1
---

Predict the keystep for a given video clip (trimmed by time).

### Task definition

This task involves recognizing fine-grained keysteps from procedural egocentric videos (at test time), using models that can leverage multiple, time-synchronized views (at training time).

* Train instance:
```
- 1 ego + N exo trimmed video clips
- Keystep label
```

* Test instance:
```
Input: A trimmed egocentric video clip
Output: Predicted keystep label
```

Note that at test time, the input to the model includes just the ego-view videos (RGB only). Exo-view videos, activity and scenario names, narrations, audio and associated metadata such as eye gaze, 3D point
clouds, camera pose, and IMU information are excluded as inputs for inference (although we encourage exploring their potential utility in training) as our ultimate goal is a vision-centric approach that performs egocentric keystep recognition.

### Data
To download the preprocessed keystep segments, use the following command:
```
egoexo -o <out-dir> --parts keystep_benchmark/clips_448p
```

### Annotations
You can download the annotations using `--parts annotations` and optionally include `--benchmarks keystep`. The structure of the annotation files for the keystep benchmark is as follows:
```
├── keystep_benchmark
│   ├── keystep_segment_test_unannotated.json
│   ├── keystep_segment_train.json
│   ├── keystep_segment_val.json
│   └── label_mapping.csv
```

#### JSON file format
The three JSON files (`keystep_segment_train.json`, `keystep_segment_val.json`,
and `keystep_segment_test_unannotated.json`) are generated from keystep
annotations. Each `segment_name` corresponds to the names of the [preprocessed
keysteps](#data).

Sample JSON:
```
{
    "date": "04/02/2024",
    "description": "EgoExo4D Fine-grained Keystep Recognition",
    "splits": "train",
    "segments": [
        {
            "segment_name_list": [
                "train/georgiatech_covid_07_6/start0.85598_end33.20377_aria02_214-1.mp4",
                "train/georgiatech_covid_07_6/start0.85598_end33.20377_cam01.mp4",
                "train/georgiatech_covid_07_6/start0.85598_end33.20377_cam02.mp4",
                "train/georgiatech_covid_07_6/start0.85598_end33.20377_cam03.mp4",
                "train/georgiatech_covid_07_6/start0.85598_end33.20377_cam04.mp4"
            ],
            "ego_segment_name": "train/georgiatech_covid_07_6/start0.85598_end33.20377_aria02_214-1.mp4",
            "take_uid": "77cd56fc-6b68-4c7f-814b-81545484dd2d",
            "take_name": "georgiatech_covid_07_6",
            "start_time": 0.85598,
            "end_time": 33.20377,
            "step_unique_id": 843,
            "label_id": 35,
            "step_name": "Unbox package"
        },
    ...
    ]
}
```

#### Label mapping file
The 278 keysteps used in the benchmark are derived from the original keystep annotations with a cutoff threshold of 20. The mapping is provided in `label_mapping.csv`.

Sample CSV:
```
label_id,step_unique_id,step_name,scenario_name
0,1567,Stir the mixture,cooking
1,502,Check paper recipe,cooking
2,492,Adjust the stove heat,cooking
...
```

### Metrics
We measure top-1 keystep recognition accuracy (%)


### Baselines
Baseline repo: https://github.com/EGO4D/ego-exo4d-keystep/tree/main/fine_grained
