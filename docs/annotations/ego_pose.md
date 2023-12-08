---
title: EgoPose
sidebar_position: 3
---

# EgoPose Annotations
The ground truth of EgoPose is annotated at the timestamp level for each take. At each timestamp with valid annotations, a single set of global 3D keypoints are provided, along with the corresponding 2D keypoints on ego and exo cameras. 
The camera metadata for each take including intrinsic and extrinsic matries are also provided in a seperate .json file. We will describle the details below.


## 2D/3D Keypoints JSON Structure 

For each take, the 2D and 3D keypoints are grouped by the frame number. One can use `frame_number` as index to query annotations.    

Example Usage

```python
import json

# Specify the path to your JSON file
json_file_path = 'path/to/<take_uid>.json'

# Open and read the JSON file
with open(json_file_path, 'r') as file:
    # Load the JSON data
    json_data = json.load(file)

# Example Python code to access 2D annotations for 'cam01' and 'cam02'
cam01_annotations = json_data['1175'][0]['annotation2D']['cam01']
cam02_annotations = json_data['1175'][0]['annotation2D']['cam02']

# Example usage of 3D annotations for 'right_middle_2' joint
right_middle_2_3d = json_data['1175'][0]['annotation3D']['right_middle_2']
```

### JSON Structure
Here is a typical structure for EgoPose

  Example:

  ```json
  {
    "(frame number)": [{
        "metadata": {
            "take_uid": (string),
            "take_name": (string),
            "frame_number": (int)
        },
        "annotation2D": {
            "cam01":{
                "left_pinky_3": {
                    "x": (float),
                    "y": (float),
                    "placement": (string)
                },
                ...
            },
            "cam02":{
                "left_pinky_3": {
                    "x": (float),
                    "y": (float),
                    "placement": (string)
                },
                ...
            },
            "cam03":{
                "left_pinky_3": {
                    "x": (float),
                    "y": (float),
                    "placement": (string)
                },
                ...
            },
            "cam04":{
                "left_pinky_3": {
                    "x": (float),
                    "y": (float),
                    "placement": (string)
                },
                ...
            },
            "aria":{
                "left_pinky_3": {
                    "x": (float),
                    "y": (float),
                    "placement": (string)
                },
                ...
            },
        },
        "annotation3D": {
            "left_pinky_3": {
                "x": (float),
                "y": (float),
                "z": (float),
                "num_views_for_3d": (int)
            },
            "left_pinky_3": {
                "x": (float),
                "y": (float),
                "z": (float),
                "num_views_for_3d":  (int)
            },
            ...
        }
    }],
    ...
  }
  ```

### Metadata

- **`take_uid`** (String): Unique identifier for the take.
- **`take_name`** (String): Name of the take.
- **`frame_number`** (Integer): Frame number associated with the data.

### 2D Annotations

- **`annotation2D`** (Object): Contains 2D annotations from different cameras and perspectives.

  - **`cam01` to `cam04`** (Object): Annotations from individual cameras. For hand, an additional `aria` camera is provided.

    - **`joint_name`** (Object): Coordinates and placement information for specific joints.

      - **`x`** (Float): X-coordinate.
      - **`y`** (Float): Y-coordinate.
      - **`placement`** (String): Indicates whether the annotation is manual or auto-generated.


### 3D Annotations

- **`annotation3D`** (Object): Contains 3D annotations for specific joints.

  - **`joint_name`** (Object): Coordinates in 3D space and the number of views used for 3D annotation.

      - **`x`** (Float): Coordinates in 3D space.
      - **`y`** (Float): Coordinates in 3D space.
      - **`z`** (Float): Coordinates in 3D space.
      - **`num_views_for_3d`** (Integer): Number of views considered for 3D annotation.


