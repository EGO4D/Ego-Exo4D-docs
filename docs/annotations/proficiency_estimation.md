---
title: Proficiency Estimation
sidebar_position: 3
---

Demonstrator and demonstration proficiency are available in a single JSON file per split containing a list of annotations for a given take.

## Demonstration Annotations

For each take, you will find:

  - **take_uid:** unique id given to this take
  - **good_executions:** list of annotations that were deemed to be a good execution by the expert
    - **video_time":** the single point in time of the annotation in seconds
    - **list:** the commentary provided by the expert for the particular annotation
    - **expert_uid:** a unique identifier for the annotator who provided the annotation
    - **video_name:** the video id as above
  - **tips_for_improvement:** list of annotations that were deemed to be suboptimal with a tip for improvement
    - **video_time":** the single point in time of the annotation in seconds
    - **list:** the tip provided by the expert for the particular annotation
    - **expert_uid:** a unique identifier for the annotator who provided the annotation
    - **video_name:** the video id as above
   
Additional take fields (also available in the global metadata):
  - **task_id:** unique id for the task type
  - **take_name:** unique name given to this take
  - **scenario_name:** name of the high level activity happening in this take
  - **university_id:** university id for the participant
  - **origin_participant_id:** participant id unique to the university
    

### Sample JSON

Here is a JSON snippet showing a sample annotation:        

```json
[
    {
        "task_id": 1005, 
        "task_name": "Cooking Dumplings", 
        "scenario_name": "Cooking", 
        "university_id": "ego4d-sfu", 
        "origin_participant_id": "p013", 
        "take_uid": "0015e453-3227-41b0-bd64-03c134abe054", 
        "video_paths": {
            "ego": "takes/sfu_cooking_013_3/frame_aligned_videos/aria01_214-1.mp4", 
            "exo1": "takes/sfu_cooking_013_3/frame_aligned_videos/cam01.mp4", 
            "exo2": "takes/sfu_cooking_013_3/frame_aligned_videos/cam02.mp4", 
            "exo3": "takes/sfu_cooking_013_3/frame_aligned_videos/cam04.mp4", 
            "exo4": "takes/sfu_cooking_013_3/frame_aligned_videos/cam05.mp4"
        }, 
        "good_executions": [
            {
                "video_time": 360.183583, 
                "list": "['the water is just beginning to start a boil']", 
                "expert_uid": "d2vast", 
                "video_name": "sfu_cooking_013_3"
            }
        ], 
        "tips_for_improvement": [
            {
                "video_time": 22.998856, 
                "list": "[\"When making dumplings it's generally preferable to steam the dumpling or to pan-fry it.\"]", 
                "expert_uid": "d2vast", 
                "video_name": "sfu_cooking_013_3"
            }, 
            ...
        ]
    },
    ...
]
```

## Demonstrator Annotations

For each take, you will find:

  - **take_uid:** unique id given to this take
  - **proficiency_score:** the skill estimation of the participant - possible values: [Novice, Early expert, Intermediate expert, Late expert]
   
Additional take fields (also available in the global metadata):
  - **task_id:** unique id for the task type
  - **take_name:** unique name given to this take
  - **scenario_name:** name of the high level activity happening in this take
  - **university_id:** university id for the participant
  - **origin_participant_id:** participant id unique to the university

### Sample JSON

Here is a JSON snippet showing a sample annotation:        

```json
[
    {
        "task_id": 7018, 
        "task_name": "LosAndes_V2_R1", 
        "scenario_name": "Rock Climbing", 
        "university_id": "ego4d-university-sa", 
        "origin_participant_id": "133", 
        "take_uid": "000a19fe-776e-4c88-b0c3-2fad016a6025", 
        "video_paths": {
            "ego": "takes/uniandes_bouldering_028_7/frame_aligned_videos/aria01_214-1.mp4", 
            "exo1": "takes/uniandes_bouldering_028_7/frame_aligned_videos/cam01.mp4", 
            "exo2": "takes/uniandes_bouldering_028_7/frame_aligned_videos/cam02.mp4", 
            "exo3": "takes/uniandes_bouldering_028_7/frame_aligned_videos/cam03.mp4", 
            "exo4": "takes/uniandes_bouldering_028_7/frame_aligned_videos/cam04.mp4"
        }, 
        "proficiency_score": "Early Expert"
    }, 
    ...
]
```






  




