---
title: Relations
sidebar_position: 2
---

### Relations Annotations

:::info
We have released a [Notebook Tutorial](https://github.com/facebookresearch/Ego4d/blob/main/notebooks/egoexo/EgoExo_Relations.ipynb) covering this annotation file, it covers how to read the annotation file & how to visualize the annotations
:::

Relation annotations are released in separate JSON files for training and validation set. We use "take_uid" as the high level field to group annotations. The following JSON string shows a sample annotation for one of the take. Here is a brief description of the most relevant fields:

* **scenario:** name of the high level activity happening in this take

* **take_name:** unique name given to this take

* **object_names:** contains a list of all active objects in the take and a single bounding box localizing it in the take. These annotations were done on the Egocentric video clip.
  - **annotation:** List of active objects and a single bounding box in the video
    - **x:** x coordinate of top-left for bounding box,
    - **y:** y coordinate of top-left for bounding box,
    - **width:** width of bounding box,
    - **height:** height of bounding box,    
    - **original_width:** width of the video frame,
    - **original_height:** height of the video frame,
    - **frameNumber:** frame number where the bounding box was annotated,    
    - **track_id:** object name,    
  - **annotation_metadata:** Additional metdata from the annotation task 
  - **annotation_fps:** video fps that was used for these annotations

* **object_masks:** contains the egocentric and exocentric segmentation masks for this take. Each element within this refers to a specific object (e.g. stainless bowl_0). Within each object, annotations are grouped by camera names. If a camera name starts with "aria" it refers to egocentric view, otherwise it refers to exocentric view. For each camera that was annotated, you can expect to find the following fields:
  - **annotation:** segmentation masks for this object whenever it was visible in the video. The key here refers to the frame number where the object was annotated. Within each frame we include the following details:
    - **width:** width of the video frame
    - **height:** height of the video frame
    - **encodedMask:** encoded string representing the segmentation mask. Refer to the notebook linked below to see how to decode this
    - **intSegClicks:** we used an interactive segmentation tool to collect these annotations, this field includes the point clicks which were used by the annotators to generated the segmentation along with timing data.
  - **annotation_metadata:** Additional metdata from the annotation task 
  - **annotation_fps:** video fps that was used for this annotation
  - **annotated_frames:** List of all the frames that were annotated by the annotator. We include this separately because there can be several frames where the object was not present, hence there won't be any mask for it in the "annotation" field.


## Sample JSON

Here is a JSON snippet showing a sample annotation:        

```json
"44d647ce-72d2-4312-b80c-99faea2d017d": {
  "scenario": "Making Cucumber & Tomato Salad",
  "take_name": "sfu_cooking_008_3",
  "object_names": {
    "annotation": [
      {
        "x": 656.76,
        "y": 791.07,
        "width": 235.28,
        "height": 301.98,
        "rotation": 0,
        "original_width": 1408,
        "original_height": 1408,
        "frameNumber": 0,
        "endInterpolation": true,
        "interpolated": false,
        "track_id": "left hand_0",
        "milo_type": "NONE"
      },
      {
        "x": 784.59,
        "y": 976.34,
        "width": 311.24,
        "height": 340.88,
        "rotation": 0,
        "original_width": 1408,
        "original_height": 1408,
        "frameNumber": 4,
        "endInterpolation": true,
        "interpolated": false,
        "track_id": "right hand_0",
        "milo_type": "NONE"
      },
    ],
    "annotation_metadata": {
      "annotation_uid": "75238d7d-0015-4e07-9656-71f6618b9485",
      "annotator_id": "5268381253249404",
      "response_time": 1687015784,
      "job_id": "259829426650092",
      "response_id": "210294584797274"
    },
    "annotation_fps": 30
  },
  "object_masks": {
    "stainless bowl_0": {
      "aria01_214-1": {
        "annotation": {
          "270": {
            "width": 1408,
            "height": 1408,
            "encodedMask": "LYPQ6gxgDAfA2nAjAUygXQPIC4BSAWASQA4AJAThKIIFYAZAZlupwHYcA2AaXoFkAmAHJ8eeWnk7sGAxAN7D60jIMaiFfDDMRQZw9eqhKhRwesQYDpxbsNaL07VY3mlz-UIe2n+qAc9+f2s62gQEeoT4a4b4R3pGRUQmJBtpJUebBERkhmaHxqfFe9j5mFuYhLgEFgv6auVo6VvYlXkGGlp7VhWb6SjxqQq6y-I31fSL8fULjJpPyPNTcQ530nHTsNGIcOFgAYmQAIjD7FABGaAAGAPZQQA",
            "intSegClicks": {
              "positive": [
                {
                  "x": 542.65838623047,
                  "y": 861.75555419922,
                  "timestamp": 1689966008925
                }
              ],
              "negative": [],
              "upperLeft": [],
              "bottomRight": [],
              "unlabeled": [
                {
                  "x": 0,
                  "y": 0,
                  "timestamp": 1689966008925
                }
              ]
            }
          },
          "210": {
            "width": 1408,
            "height": 1408,
            "encodedMask": "BYEwlgZgDArApgbQIwC4ASAWAcgJiwZgFk98soB5HcpXQ-cqRx6ppByh5qpnigJWBYwWAGoBVJAA0kYAFZYANlgDKEgCpIF8gIrkAChID2UPQGssa8gFsNVqH3MjypjbKhjzATXJgNAcygRcwRyYA04KElzAD1yOA0AIygEcwABAGMNAAMoAF1zACEAQw0APizzAGFosqLzAFEAHQ0AbhBzAHEEDQBOOHM0T16IAaGkHpGsAEkxgHZJgGlJDQA2P3MAGQB1DRgwTZENDH2sQkOkeHkQLEqALSQICXwAfXkrLA7lGQk8nXI0bTfJBQRryZTkDrGKwSciSeSScgAMQUJhESCQynkuU0Ely3A4bAowJowKJUBJPBYhI4vBYPAptNJlKZTBpvHZdPZZK5rO4POYLLZrOJ7CZhIF5NFdJp0vxpJl8rl5KwxJVVJVrFwuHYeDwbF1OrVuqNWv1WuNFvNtCIGGIhFtJA2GA2RBtdudMAAUjAFitPbMpispj1ES0ACJFKC3cieQwQFFAA",
            "intSegClicks": {
              "positive": [
                {
                  "x": 637.27478027344,
                  "y": 975.52056884766,
                  "timestamp": 1689966020548
                },
                {
                  "x": 682.33020019531,
                  "y": 1017.1968383789,
                  "timestamp": 1689966022093
                }
              ],
              "negative": [],
              "upperLeft": [],
              "bottomRight": [],
              "unlabeled": [
                {
                  "x": 0,
                  "y": 0,
                  "timestamp": 1689966020548
                }
              ]
            }
          },          
        },
        "annotation_metadata": {
          "annotation_uid": "6b8f3e79-0a4c-44ad-8728-9c8c78041d26",
          "annotator_id": "6630900530266171",
          "response_time": 1689969328,
          "job_id": "261883259904741",
          "response_id": "826038105578257"
        },
        "annotation_fps": 1,
        "annotated_frames": [0, 30, 60, 90, 120, 150, 180, 210, 240, 270,]
      },
      "cam04": {
        "annotation": {
          "0": {
            "width": 3840,
            "height": 2160,
            "encodedMask": "EoFQtg2gTARgDAM2FAXASXQVgFKYHJQDSALAPICMAMsXuaQMyVSnNwu0UVxwCymPUHjXIFRUMRQHtycEXVacF82txak245iK2cIlCAAU8AA3oBjAPbkA7GrmyVdbtvUOdL8XRdfHFAtP9yIQ5vPy1-DTDOb0DOSOdXeO5ZRMVU1mT7ZIcZBLYZJ2ycoqcubML8osrylSKyqtVZBvqqlobq9rbkrvre3NV+9VyylpH+6rVu4enM2oHR+XVo1U951Y0OT2jFENifdzFAo80CHno8eikPM9oLq4kRc-kpLcFNP0vzt4YeHy-d5iCJ53Yi-C6nL5nITUQgANkImDQsLQAHUAOYAHQA1sQgA",
            "intSegClicks": {
              "positive": [
                {
                  "x": 1327.3515625,
                  "y": 1281.470703125,
                  "timestamp": 1691599457888
                },
                {
                  "x": 1327.3515625,
                  "y": 1281.470703125,
                  "timestamp": 1691599461576
                },
                {
                  "x": 1327.3515625,
                  "y": 1281.470703125,
                  "timestamp": 1691599463623
                }
              ],
              "negative": [],
              "upperLeft": [],
              "bottomRight": [],
              "unlabeled": [
                {
                  "x": 0,
                  "y": 0,
                  "timestamp": 1691599457888
                }
              ]
            }
          },
          "150": {
            "width": 3840,
            "height": 2160,
            "encodedMask": "MYUw6gOgTAbAKgZSgAwAwEEDsApGAZAFgFkojiBmEgOUvMKNoZLOqhuoEYB5Nt77vjyr8h-VB2FcO44TOkTeUqlCUqJ82Qq6o5MtcqmrRB7qh5GtpfZX36NapfaXlJW0+Z3uVOz9p0efXzN5PzNvH3UI7SlxUIDPWR94mNN-aUCMmIzArOzM8Tyc6Vyi7O10pIq0yrKK3JKGqqzG0prg1pbI9uDmgWixHu9DAVdjF34DQQkbZRo8FzY6cgBpAFYmYkUJ8eGaYRM9kRGRKZ4GfZsx2b71IVIFpgeF5XPeF4I8VeWPmABJAE4AKIAGwAZhAANYEIA",
            "intSegClicks": {
              "positive": [
                {
                  "x": 1311.5325927734,
                  "y": 1286.4014892578,
                  "timestamp": 1691599539685
                },
                {
                  "x": 1321.5728759766,
                  "y": 1288.4095458984,
                  "timestamp": 1691599543376
                }
              ],
              "negative": [],
              "upperLeft": [],
              "bottomRight": [],
              "unlabeled": [
                {
                  "x": 0,
                  "y": 0,
                  "timestamp": 1691599539685
                }
              ]
            }
          },          
        },
        "annotation_metadata": {
          "annotation_uid": "816e4a98-80f5-417a-ac5a-7e99a2592b28",
          "annotator_id": "6358661434212653",
          "response_time": 1691627677,
          "job_id": "3447644408879385",
          "response_id": "800163308425728"
        },
        "annotation_fps": 1,
        "annotated_frames": [ 0, 30, 60, 90, 120, 150, 180, 210]
      }
    },    
  }
}
