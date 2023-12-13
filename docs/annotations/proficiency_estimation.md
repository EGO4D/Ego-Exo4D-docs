---
title: Proficiency Estimation
sidebar_position: 3
---

Demonstrator and demonstration proficiency are available in a single JSON file per split containing a list of annotations for a given take.

## Demonstration Annotations

For each take, you will find:

  - **take_uid:** unique id given to this take
  - **good_executions:** list of annotations that were deemed to be a good execution by the expert
    - **video_time:** the single point in time of the annotation in seconds
    - **list:** the commentary provided by the expert for the particular annotation
    - **expert_uid:** a unique identifier for the annotator who provided the annotation
    - **video_name:** the video name associated with the take
  - **tips_for_improvement:** list of annotations that were deemed to be suboptimal with a tip for improvement
    - **video_time:** the single point in time of the annotation in seconds
    - **list:** the tip provided by the expert for the particular annotation
    - **expert_uid:** a unique identifier for the annotator who provided the annotation
    - **video_name:** the video name associated with the take
   
Additional take fields (also available in the global metadata):
  - **task_id:** unique id for the task type
  - **scenario_name:** name of the high level activity happening in this take
  - **task_name:** name of the particular task within the scenario
  - **university_id:** id of the university where the take was recorded
  - **origin_participant_id:** participant id unique to the university
    

### Sample JSON

Here is a JSON snippet showing a sample annotation:        

```json
[
    {
        "task_id": 6002,
        "task_name": "Basketball Drills - Reverse Layup",
        "scenario_name": "Basketball",
        "university_id": "ego4d-unc",
        "origin_participant_id": "30",
        "take_uid": "0021a226-05b9-4ca4-9e2a-cc4fae3357f3",
        "video_paths": {
            "ego": "takes/unc_basketball_03-30-23_02_34/frame_aligned_videos/aria02_214-1.mp4",
            "exo1": "takes/unc_basketball_03-30-23_02_34/frame_aligned_videos/cam01.mp4",
            "exo2": "takes/unc_basketball_03-30-23_02_34/frame_aligned_videos/cam02.mp4",
            "exo3": "takes/unc_basketball_03-30-23_02_34/frame_aligned_videos/cam03.mp4",
            "exo4": "takes/unc_basketball_03-30-23_02_34/frame_aligned_videos/cam04.mp4"
        },
        "good_executions": [
            {
                "video_time": 0.983072,
                "list": [
                    "Getting lowered towards the ground",
                    "Bending his legs in the athletic stance",
                    "Getting towards the right side of the rim quicker with more balance and power"
                ],
                "expert_uid": "6jm95g",
                "video_name": "unc_basketball_03-30-23_02_34",
            },
            ...
        ],
        "tips_for_improvement": [
            {
                "video_time": 87.720592,
                "list": [
                  "It\'s taking him, giving him the momentum to move his body behind.",
                  "It\'s going to follow with the left foot and up."
                ],
                "expert_uid": "2g7km5",
                "video_name": "unc_basketball_03-30-23_02_34",
            },
            ...
        ],
    },
    ...
]
```

## Demonstrator Annotations

For each take, you will find:

  - **take_uid:** unique id given to this take
  - **proficiency_score:** the skill estimation of the participant - possible values: [Novice, Early Expert, Intermediate Expert, Late Expert]
   
Additional take fields (also available in the global metadata):
  - **task_id:** unique id for the task type
  - **scenario_name:** name of the high level activity happening in this take
  - **task_name:** name of the particular task within the scenario
  - **university_id:** id of the university where the take was recorded
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






  




