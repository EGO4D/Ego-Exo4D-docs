---
title: Keystep
sidebar_position: 1
---

## Keystep Annotations

The keystep annotations are released in single JSON files containing three main fields: annotations, taxonomy and vocabulary. Here is a brief description of the 3 parts and their most relevant fields:

* **annotations:** contains a list of all the key-step annotations grouped by take id. We use "take_uid" as the high level field to group annotations. The following JSON string shows a sample annotation for one of the take. 
  - **take_uid:** unique id given to this take,
  - **take_name:** unique name given to this take,
  - **scenario:** name of the high level activity happening in this take,
  - **segments:** List of active objects and a single bounding box in the video
    - **x:** x coordinate of top-left for bounding box,
    - **start_time":** the start time of the annotation segment in seconds,
    - **end_time:** the end time of the annotation segment in seconds,
    - **step_id:** the step id within the corresponding scenario's taxonomy,
    - **step_unique_id:**, the unique step id given to this keystep over the whole dataset,
    - **step_name:** name of the keystep ,
    - **step_description:** description of this particular keystep instance, provided by the annotator,
    - **is_essential:** whether this keystep instance is essential for completing the scenario task or not,
  - **annotation_metadata:** Additional metdata from the annotation task 
    
* **taxonomy:** contains the taxonomy. Grouped by scenario 
        - **id:**
        - **is_leafnode:**,
        - **name:**,
        - **parent_id:**,
        - **parent_name:**,

* **vocabulary:** contains the vocabulary 

## Sample JSON

Here is a JSON snippet showing a sample annotation:        

```json
"annotations": {
    "77cd56fc-6b68-4c7f-814b-81545484dd2d": {
      "take_uid": "77cd56fc-6b68-4c7f-814b-81545484dd2d",
      "take_name": "georgiatech_covid_07_6",
      "scenario": "Covid-19 Rapid Antigen Test",
      "annotation_meta": {
        "annotation_uid": "16ef27f8-7bff-42fa-b2c9-49856a570c6b",
        "annotator_id": 5792777457490871,
        "response_time": 1695039187,
        "job_id": 6534429029945912,
        "response_id": 825514846028714,
      },
      "segments": [
        {
          "start_time": 0.85598,
          "end_time": 33.20377,
          "step_id": 31,
          "step_name": "Unbox package",
          "step_description": "Unbox covid19 test package",
          "is_essential": true,
          "step_unique_id": 843
        },
        {
          "start_time": 33.204,
          "end_time": 56.61153,
          "step_id": 10,
          "step_name": "Read the instructions",
          "step_description": "Read the instruction leaflet on the table",
          "is_essential": true,
          "step_unique_id": 824
        },
    ...
    ]
  ...
  }
}
"taxonomy": {
  "Covid-19 Rapid Antigen Test": {
    "0": {
      "id": 0,
      "is_leafnode": false,
      "name": "Covid-19 Rapid Antigen Test",
      "parent_id": null,
      "parent_name": null
    },
    "1": {
      "id": 1,
      "is_leafnode": false,
      "name": "Preparation",
      "parent_id": 0,
      "parent_name": "Covid-19 Rapid Antigen Test"
    },
    "2": {
      "id": 2,
      "is_leafnode": true,
      "name": "Check the expiration date",
      "parent_id": 1,
      "parent_name": "Preparation",
      "unique_id": 818
    },
  ...
  }
...
}
"vocabulary": {
  ...
  "819": "Locate test tube",
  "820": "Locate and unwrap test tube cap",
  "821": "Arrange test material",
  "822": "Unwrap the testing tube",
  "823": "return the test kit items back into the box",
  "824": "Read the instructions",
  "825": "fold the instruction paper",
  "828": "Get the testing tube",
  ...
}
