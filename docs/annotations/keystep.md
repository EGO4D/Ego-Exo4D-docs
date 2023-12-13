---
title: Keystep
sidebar_position: 1
---

## Keystep Annotations

The keystep annotations are released in a single JSON file containing three main fields: *annotations*, *taxonomy* and *vocabulary*. Here is a brief description of the most relevant fields:

* **annotations:** contains a list of all the key-step annotations grouped by "take_uid": 
  - **take_uid:** unique id given to this take
  - **take_name:** unique name given to this take
  - **scenario:** name of the high level activity happening in this take
  - **segments:** list of segment annotations contained in this take:
    - **start_time":** the start time of the annotation segment in seconds
    - **end_time:** the end time of the annotation segment in seconds
    - **step_id:** the step id within the corresponding scenario's taxonomy (corresponds to 'id' field in taxonomy)
    - **step_unique_id:** the unique step id given to this keystep which is shared over all the scenario taxonomies
    - **step_name:** name of the keystep
    - **step_description:** description of this particular keystep instance as provided by the annotator
    - **is_essential:** whether this keystep instance is essential for completing the scenario task or not
  - **annotation_metadata:** additional metdata from the annotation task 
    
* **taxonomy:** a list, containing the keystep taxonomy for every scenario, organized as a hierarchical tree structure. Every node in this tree contains the following fields: 
    - **id:** the keystep node id, unique to this scenario
    - **is_leafnode:** whether the node is a leaf node 
    - **name:** the keystep name
    - **parent_id:** the step id of the keystep node's parent
    - **parent_name:** the name of the keystep node's parent
    - **unique_id:** the unique step id (only for leafnodes)

* **vocabulary:** contains a global vocabulary, listing all the keysteps in the dataset as a dictionary of <step_unique_id>:<step_name> entries, where the <step_unique_id> key corresponds to the *step_unique_id* field in the annotations and *unique_id* in the taxonomy and the <step_name> value corresponds to *step_name* in the annotations and *name* field in the taxonomy.

**Note:** Certain keysteps might be common and appear in more than one scenarios. In those cases the *id* field assigned to those keysteps between different taxonomies may be different but the keystep *name* and *unique_id* will be the same.

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
  "818": "Check the expiration date",
  "819": "Locate test tube",
  "820": "Locate and unwrap test tube cap",
  "821": "Arrange test material",
  "822": "Unwrap the testing tube",
  "823": "return the test kit items back into the box",
  "824": "Read the instructions",
  "825": "fold the instruction paper",
  "828": "Get the testing tube",
  "829": "Fill the testing with a testing solution",
  "830": "Locate and unwrap the collection swab",
  "832": "carefully open the test tube seal paper",
  "833": "Locate and unwrap the test plate",
  "834": "cover the test tube",
  "835": "Wrap or Unwrap Covid- 19 Rapid Antigen Test Pack",
  "836": "Add sealed solution",
  "837": "Blow nose",
  "838": "Slowly insert the tip of the swab into the nose",
  "839": "Rotate and swirl the swab around for 5-10 times",
  "840": "Slowly extract the swab from the nostril",
  "841": "Repeat the process with the other nostril",
  "843": "Unbox package",
  "844": "Unwrap testing plate",
  ...
}





  



