---
title: Proficiency Estimation
sidebar_position: 3
---

## Proficiency Annotations

The proficiency annotations are released in a single JSON file per split containing a list of annotations for a given take. 

For each take, you will find:

  - **task_id:** unique id for the task type
  - **take_uid:** unique id given to this take
  - **take_name:** unique name given to this take
  - **scenario:** name of the high level activity happening in this take
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
    

## Sample JSON

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




  




