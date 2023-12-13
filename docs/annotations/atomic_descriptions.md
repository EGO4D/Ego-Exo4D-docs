---
title: Atomic Action Descriptions
sidebar_position: 5
---

### Atomic Action Descriptions

:::info
We have released a [Notebook Tutorial](https://github.com/facebookresearch/Ego4d/blob/main/notebooks/egoexo/EgoExo_Atomic_Descriptions_Tutorial.ipynb) covering this annotation file, covering how to read the files and some analysis on the data (basic statistics, clustering of the text descriptions, and visualization of text description embeddings)
:::

Atomic Action Descriptions annotations are short & atomic descriptions describing *what* is occurring throughout each take. For atomic actions _we **define an annotation** as a **list of descriptions** associated with **an annotator** across **a take**_.

Each description is associated with a single time stamp (instead of a start/end point), with each containing the following information:
- `text`: a text description describing what event or action is occurring
- `subject`: the subject of the description—either the Camera Wearer (`"C"`) or
  someone else (`"O"`)
- `best_exo`: a label denoting which exocentric view has the best visibility of the action (the "best exo" view); in cases of multiple valid options, one of such views are chosen arbitrarily
- `ego_visible`: a binary indicator of whether the action is visible in the egocentric view
  view or not, and
- `unsure`: a binary indicator of whether the annotator was unsure of the name of objects or actions being referred to in the text description.

We asked the following of the annotators in the guidelines: 
1. The timepoint being marked should be within 1-2s of when the description occurs in the video.
2. The language used for the text description should be independent of other atomic  descriptions (i.e. each text description is stand-alone), e.g. an annotator should not mention "C slices the onion" and then "C continues to slice it." (“continues” refers to previous action; pronoun antecedent for “it” unknown)
3. Redundancy & repetition for repetitive actions should be minimized, e.g. "C
   slices the tomato", "C slices the tomato", "C slices the tomato" should not
   be annotated for each individual slice.
4. We recommend, but do not enforce, that each description only contains *one
   verb*. If multiple things are occurring at once, we ask annotators to split
   this up into multiple descriptions when possible.
5. We ask annotators to not use brand names when naming objects. If they do, or
   in cases where they are unsure about what an object is called, the unsure
   flag should be marked as true (1).

If a text description refers to:
- The camera wearer (`subject == "C"`), the letter `C` denotes the camera wearer
  in the sentence, e.g. `C transfers a plastic bag of cucumber to her left
  hand.`
- Another person/subject (`subject == "O"`): letters used to identify people are
  assigned by the annotator and are kept consistent throughout a particular
  take; letter person identifiers across takes or annotations are not
  necessarily consistent. For example: `The man A catches the ball with his
  right hand`: `A` will refer to the same person in other descriptions for the
  same annotation;  another annotator may use a different letter for this same
  person, or the same letter for a different person in a different take.

The annotation file is grouped by each take's take_uid, where each take grouping
contains one or more annotations. Each annotation for a take has been annotated
by a unique annotator from start to finish. We do not create sub-clips of the
take, i.e. the annotator watches the entire video they are describing. Each
annotator annotates the take video using a pre-rendered collage video, which can
be seen as the "collage" video [using the visualization
tool](https://visualize.ego4d-data.org/?v=%22EgoExo+v1%22) or via downloading
collage videos.


The following JSON string shows a sample annotation for one of the take. Here is a brief description of the most relevant fields:

* **`descriptions`**: a list of time-point descriptions, where each description
  contains:
  - **`timestamp`**: the timestamp of the description
  - **`text`**: the text of the description
  - **`subject`**: the string `"C"` or `"O"` to indicate that subject of the
    description is referring to the Camera Wearer (`"C"`) or another person
    (`"O"`) of the description is referring to the Camera Wearer (C) or 
  - **`ego_visible`**: a boolean to describe whether the action (`text`) is
    visible from the egocentric view
  - **`best_exo`**: what exo-centric camera/view is the most informative
    - **`cam_id`**: the camera string that the `takes.json` and `captures.json` files refer to
* **`rejected`**: whether the annotation job was rejected
* **`reject_reason`**: a string to describe why the annotation job was rejected
* **`annotator_id`**: a unique string to represent the annotator
* **`annotation_uid`**: a unique ID to identify an annotation

## Sample JSON

Here is a JSON snippet showing a sample annotation, where the take
`3c489f86-8896-4c86-8a5a-929999799d36` has at least two *annotations* (as
defined above):

```json
{
    "annotations": {
        "3c489f86-8896-4c86-8a5a-929999799d36": [
            {
                "annotation_uid": "fe6b4107-ecdb-4e90-93c5-3df74385bda2",
                "annotator_id": "5284063695022975",
                "rejected": false,
                "reject_reason": null,
                "descriptions": [
                    {
                        "text": "C moves his right hand.",
                        "timestamp": 0.03831,
                        "narration_subject": "C",
                        "ego_visible": false,
                        "best_exo": {
                            "raw_cam_id": "1",
                            "cam_id": "cam01"
                        },
                        "unsure": false
                    },
                    {
                        "text": "C moves his right hand.",
                        "timestamp": 3.94343,
                        "narration_subject": "C",
                        "ego_visible": false,
                        "best_exo": {
                            "raw_cam_id": "1",
                            "cam_id": "cam01"
                        },
                        "unsure": false
                    },
                    {
                        "text": "C touches the screw of the hub with his right hand.",
                        "timestamp": 18.48356,
                        "narration_subject": "C",
                        "ego_visible": true,
                        "best_exo": {
                            "raw_cam_id": "2",
                            "cam_id": "cam02"
                        },
                        "unsure": false
                    }
                ],
                ... other fields
            },
            {
                "annotation_uid": "2dbd61e6-8f61-49a7-9aec-de327572327a",
                "annotator_id": "6109476425845844",
                "rejected": false,
                "reject_reason": null,
                "descriptions": [
                    {
                        "text": "The Man X walks towards C.",
                        "timestamp": 0.76281,
                        "narration_subject": "O",
                        "ego_visible": "1",
                        "best_exo": {
                            "raw_cam_id": "2",
                            "cam_id": "cam02"
                        },
                        "unsure": "0"
                    },
                    {
                        "text": "C leans on his left leg.",
                        "timestamp": 3.001,
                        "narration_subject": "C",
                        "ego_visible": "0",
                        "best_exo": {
                            "raw_cam_id": "2",
                            "cam_id": "cam02"
                        },
                        "unsure": "0"
                    }
                ],
                ... other fields
            },
            ...
        ],
        <take_uid2>: {<same-schema as above>},
        ...
    },
    ... other fields
}
```
