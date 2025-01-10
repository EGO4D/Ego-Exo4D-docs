# Tutorial 2: Hand and Body Pose in Ego-Exo4D Dataset

![Status](https://img.shields.io/static/v1.svg?label=Status&message=Finished&color=green)

**Filled notebook:**
[![View on Github](https://img.shields.io/static/v1.svg?logo=github&label=Tutorial&message=View%20On%20Github&color=lightgrey)](https://github.com/facebookresearch/Ego4d/tree/main/notebooks/egoexo)
**Author:** Xizi Wang

3D hand and body pose are two important annotations of the Ego-Exo4D dataset. The figure on the left captures the **full body pose** and surrounding environment context, whereas the figure on the right captures the details of close-by **hand-object** interactions and the camera wearer’s attention. In this tutorial, we provide a step-by-step guide on retrieving the hand and body pose of one example take, and projecting the body pose to exocentric views and the hand pose to egocentric views, then visualizing it on the corresponding frame.

![Samples of hand and body pose](/img/hand_body_pose.png)

### 1. Prerequisites and Imports


```python
%matplotlib inline
import cv2
import matplotlib.pyplot as plt
import numpy as np
import math
from matplotlib import rcParams
from projectaria_tools.core import mps
from projectaria_tools.core import data_provider
from projectaria_tools.core import calibration
from projectaria_tools.core.calibration import CameraCalibration, KANNALA_BRANDT_K3
from projectaria_tools.core.stream_id import StreamId

rcParams["figure.figsize"] = 16, 32

import json
import os
import random

import av
import pandas as pd
from PIL import Image, ImageDraw
from tqdm.auto import tqdm

```

Next we define some necessary utility functions for retrieving pose metadata and drawing functions.


```python
# Loads dataframe at target path to csv
def load_csv_to_df(filepath: str) -> pd.DataFrame:
    with open(filepath, "r") as csv_file:
        return pd.read_csv(csv_file)

# color palette for drawing the keypoints
palette = np.array(
    [
        [255, 128, 0],
        [255, 153, 51],
        [255, 178, 102],
        [230, 230, 0],
        [255, 153, 255],
        [153, 204, 255],
        [255, 102, 255],
        [255, 51, 255],
        [102, 178, 255],
        [51, 153, 255],
        [255, 153, 153],
        [255, 102, 102],
        [255, 51, 51],
        [153, 255, 153],
        [102, 255, 102],
        [51, 255, 51],
        [0, 255, 0],
        [0, 0, 255],
        [255, 0, 0],
        [255, 255, 255],
    ]
)


# retrieve the body keypoints and skeleton
def get_body_metadata():
    keypoints_map = [
        {"label": "Nose", "id": "fee3cbd2", "color": "#f77189"},
        {"label": "Left-eye", "id": "ab12de34", "color": "#d58c32"},
        {"label": "Right-eye", "id": "7f2g1h6k", "color": "#a4a031"},
        {"label": "Left-ear", "id": "mn0pqrst", "color": "#50b131"},
        {"label": "Right-ear", "id": "yz89wx76", "color": "#34ae91"},
        {"label": "Left-shoulder", "id": "5a4b3c2d", "color": "#37abb5"},
        {"label": "Right-shoulder", "id": "e1f2g3h4", "color": "#3ba3ec"},
        {"label": "Left-elbow", "id": "6i7j8k9l", "color": "#bb83f4"},
        {"label": "Right-elbow", "id": "uv0wxy12", "color": "#f564d4"},
        {"label": "Left-wrist", "id": "3z4ab5cd", "color": "#2fd4aa"},
        {"label": "Right-wrist", "id": "efgh6789", "color": "#94d14f"},
        {"label": "Left-hip", "id": "ijklmnop", "color": "#b3d32c"},
        {"label": "Right-hip", "id": "qrstuvwx", "color": "#f9b530"},
        {"label": "Left-knee", "id": "yz012345", "color": "#83f483"},
        {"label": "Right-knee", "id": "6bc7defg", "color": "#32d58c"},
        {"label": "Left-ankle", "id": "hijk8lmn", "color": "#3ba3ec"},
        {"label": "Right-ankle", "id": "opqrs1tu", "color": "#f564d4"},
    ]

    # pyre-ignore
    pose_kpt_color = palette[[16, 16, 16, 16, 16, 9, 9, 9, 9, 9, 9, 0, 0, 0, 0, 0, 0]]

    skeleton = [
        [16, 14],
        [14, 12],
        [17, 15],
        [15, 13],
        [12, 13],
        [6, 12],
        [7, 13],
        [6, 7],
        [6, 8],
        [7, 9],
        [8, 10],
        [9, 11],
        [2, 3],
        [1, 2],
        [1, 3],
        [2, 4],
        [3, 5],
        [4, 6],
        [5, 7],
    ]
    return keypoints_map, skeleton, pose_kpt_color


# retrieve the hand keypoints and skeleton
def get_hands_metadata():
    keypoints_map = [
        {"label": "Right_Wrist", "id": "fee3cbd2", "color": "#f77189"},
        {"label": "Right_Thumb_1", "id": "yz012345", "color": "#83f483"},
        {"label": "Right_Thumb_2", "id": "6bc7defg", "color": "#32d58c"},
        {"label": "Right_Thumb_3", "id": "hijk8lmn", "color": "#3ba3ec"},
        {"label": "Right_Thumb_4", "id": "opqrs1tu", "color": "#f564d4"},
        {"label": "Right_Index_1", "id": "ab12de34", "color": "#d58c32"},
        {"label": "Right_Index_2", "id": "7f2g1h6k", "color": "#a4a031"},
        {"label": "Right_Index_3", "id": "mn0pqrst", "color": "#50b131"},
        {"label": "Right_Index_4", "id": "9vwxyzab", "color": "#32d58c"},
        {"label": "Right_Middle_1", "id": "yz89wx76", "color": "#34ae91"},
        {"label": "Right_Middle_2", "id": "5a4b3c2d", "color": "#37abb5"},
        {"label": "Right_Middle_3", "id": "e1f2g3h4", "color": "#3ba3ec"},
        {"label": "Right_Middle_4", "id": "cdefgh23", "color": "#3ba3ec"},
        {"label": "Right_Ring_1", "id": "efgh6789", "color": "#94d14f"},
        {"label": "Right_Ring_2", "id": "ijklmnop", "color": "#b3d32c"},
        {"label": "Right_Ring_3", "id": "qrstuvwx", "color": "#f9b530"},
        {"label": "Right_Ring_4", "id": "ijkl4567", "color": "#bb83f4"},
        {"label": "Right_Pinky_1", "id": "6i7j8k9l", "color": "#bb83f4"},
        {"label": "Right_Pinky_2", "id": "uv0wxy12", "color": "#f564d4"},
        {"label": "Right_Pinky_3", "id": "3z4ab5cd", "color": "#2fd4aa"},
        {"label": "Right_Pinky_4", "id": "mnop8qrs", "color": "#f564d4"},
        {"label": "Left_Wrist", "id": "fee3cbd2_left", "color": "#f77189"},
        {"label": "Left_Thumb_1", "id": "yz012345_left", "color": "#83f483"},
        {"label": "Left_Thumb_2", "id": "6bc7defg_left", "color": "#32d58c"},
        {"label": "Left_Thumb_3", "id": "hijk8lmn_left", "color": "#3ba3ec"},
        {"label": "Left_Thumb_4", "id": "opqrs1tu_left", "color": "#f564d4"},
        {"label": "Left_Index_1", "id": "ab12de34_left", "color": "#d58c32"},
        {"label": "Left_Index_2", "id": "7f2g1h6k_left", "color": "#a4a031"},
        {"label": "Left_Index_3", "id": "mn0pqrst_left", "color": "#50b131"},
        {"label": "Left_Index_4", "id": "9vwxyzab_left", "color": "#32d58c"},
        {"label": "Left_Middle_1", "id": "yz89wx76_left", "color": "#34ae91"},
        {"label": "Left_Middle_2", "id": "5a4b3c2d_left", "color": "#37abb5"},
        {"label": "Left_Middle_3", "id": "e1f2g3h4_left", "color": "#3ba3ec"},
        {"label": "Left_Middle_4", "id": "cdefgh23_left", "color": "#3ba3ec"},
        {"label": "Left_Ring_1", "id": "efgh6789_left", "color": "#94d14f"},
        {"label": "Left_Ring_2", "id": "ijklmnop_left", "color": "#b3d32c"},
        {"label": "Left_Ring_3", "id": "qrstuvwx_left", "color": "#f9b530"},
        {"label": "Left_Ring_4", "id": "ijkl4567_left", "color": "#bb83f4"},
        {"label": "Left_Pinky_1", "id": "6i7j8k9l_left", "color": "#bb83f4"},
        {"label": "Left_Pinky_2", "id": "uv0wxy12_left", "color": "#f564d4"},
        {"label": "Left_Pinky_3", "id": "3z4ab5cd_left", "color": "#2fd4aa"},
        {"label": "Left_Pinky_4", "id": "mnop8qrs_left", "color": "#f564d4"},
    ]

    links = {
        "fee3cbd2": ["ab12de34", "yz89wx76", "6i7j8k9l", "efgh6789", "yz012345"],
        "ab12de34": ["7f2g1h6k"],
        "7f2g1h6k": ["mn0pqrst"],
        "mn0pqrst": ["9vwxyzab"],
        "yz89wx76": ["5a4b3c2d"],
        "5a4b3c2d": ["e1f2g3h4"],
        "e1f2g3h4": ["cdefgh23"],
        "6i7j8k9l": ["uv0wxy12"],
        "uv0wxy12": ["3z4ab5cd"],
        "3z4ab5cd": ["mnop8qrs"],
        "efgh6789": ["ijklmnop"],
        "ijklmnop": ["qrstuvwx"],
        "qrstuvwx": ["ijkl4567"],
        "yz012345": ["6bc7defg"],
        "6bc7defg": ["hijk8lmn"],
        "hijk8lmn": ["opqrs1tu"],
        "fee3cbd2_left": [
            "ab12de34_left",
            "yz89wx76_left",
            "6i7j8k9l_left",
            "efgh6789_left",
            "yz012345_left",
        ],
        "ab12de34_left": ["7f2g1h6k_left"],
        "7f2g1h6k_left": ["mn0pqrst_left"],
        "mn0pqrst_left": ["9vwxyzab_left"],
        "yz89wx76_left": ["5a4b3c2d_left"],
        "5a4b3c2d_left": ["e1f2g3h4_left"],
        "e1f2g3h4_left": ["cdefgh23_left"],
        "6i7j8k9l_left": ["uv0wxy12_left"],
        "uv0wxy12_left": ["3z4ab5cd_left"],
        "3z4ab5cd_left": ["mnop8qrs_left"],
        "efgh6789_left": ["ijklmnop_left"],
        "ijklmnop_left": ["qrstuvwx_left"],
        "qrstuvwx_left": ["ijkl4567_left"],
        "yz012345_left": ["6bc7defg_left"],
        "6bc7defg_left": ["hijk8lmn_left"],
        "hijk8lmn_left": ["opqrs1tu_left"],
    }

    hand_dict = dict()
    for index, kpt in enumerate(keypoints_map):
        hand_dict[kpt["id"]] = index + 1

    skeleton = list()
    for start_point in links:
        end_points = links[start_point]
        for end_point in end_points:
            start_index = hand_dict[start_point]
            end_index = hand_dict[end_point]
            skeleton.append([start_index, end_index])

    klist = [0]
    klist.extend([2] * 4)
    klist.extend([4] * 4)
    klist.extend([6] * 4)
    klist.extend([8] * 4)
    klist.extend([10] * 4)
    klist.extend([0])
    klist.extend([2] * 4)
    klist.extend([4] * 4)
    klist.extend([6] * 4)
    klist.extend([8] * 4)
    klist.extend([10] * 4)

    pose_kpt_color = palette[klist]
    return keypoints_map, skeleton, pose_kpt_color

def get_coords(annot):
    pts = dict()
    for k in annot:
        atype = 1
        if annot[k]["placement"] == "auto":
            atype = 0
        pts[k] = [annot[k]["x"], annot[k]["y"], atype]
    return pts


def draw_skeleton(img, all_pts, skeleton):
    draw = ImageDraw.Draw(img)
    for item in skeleton:
        left_index = item[0] - 1
        right_index = item[1] - 1
        left_pt = all_pts[left_index]
        right_pt = all_pts[right_index]
        if len(left_pt) == 0 or len(right_pt) == 0:
            continue
        draw.line([left_pt, right_pt], fill="white", width=10)


def draw_cross(img, x, y, color):
    draw = ImageDraw.Draw(img)
    # Circle parameters
    center = (x, y)  # Center of the cross
    cross_length = 10  # Half-length of the cross arms
    # Calculate the end points of the cross
    left_point = (center[0] - cross_length, center[1])
    right_point = (center[0] + cross_length, center[1])
    top_point = (center[0], center[1] - cross_length)
    bottom_point = (center[0], center[1] + cross_length)

    # Draw the horizontal line
    draw.line([left_point, right_point], fill=color, width=3)
    # Draw the vertical line
    draw.line([top_point, bottom_point], fill=color, width=3)


def draw_circle(img, x, y, color):
    draw = ImageDraw.Draw(img)
    # Circle parameters
    center = (x, y)  # Center of the circle
    radius = 12  # Radius of the circle

    # Calculate the bounding box of the circle
    left_up_point = (center[0] - radius, center[1] - radius)
    right_down_point = (center[0] + radius, center[1] + radius)

    # Draw the circle with a black outline
    draw.ellipse(
        [left_up_point, right_down_point], outline=(255, 255, 255), fill=color, width=6
    )


def draw_label(img, x, y, color, label):
    draw = ImageDraw.Draw(img)
    font = ImageFont.load_default(size=40)
    # Circle parameters
    center = (x + 20, y - 20)  # Center of the circle
    draw.text(center, label, fill=color, font=font)

def draw_skeleton_hands(img, all_pts, skeleton, ratio=1):
    draw = ImageDraw.Draw(img)
    for item in skeleton:
        left_index = item[0] - 1
        right_index = item[1] - 1
        left_pt = all_pts[left_index]
        right_pt = all_pts[right_index]
        if len(left_pt) == 0 or len(right_pt) == 0:
            continue
        draw.line([left_pt, right_pt], fill="white", width=int(ratio * 4))


def draw_circle_hands(img, x, y, color, ratio=1):
    draw = ImageDraw.Draw(img)
    # Circle parameters
    center = (x, y)  # Center of the circle
    radius = int(ratio * 8)  # Radius of the circle

    # Calculate the bounding box of the circle
    left_up_point = (center[0] - radius, center[1] - radius)
    right_down_point = (center[0] + radius, center[1] + radius)

    # Draw the circle with a black outline
    draw.ellipse(
        [left_up_point, right_down_point],
        outline=(255, 255, 255),
        fill=color,
        width=int(ratio * 4),
    )


def draw_cross_hands(img, x, y, color, ratio=1):
    draw = ImageDraw.Draw(img)
    # Circle parameters
    center = (x, y)  # Center of the cross
    cross_length = int(ratio * 8)  # Half-length of the cross arms
    # Calculate the end points of the cross
    left_point = (center[0] - cross_length, center[1])
    right_point = (center[0] + cross_length, center[1])
    top_point = (center[0], center[1] - cross_length)
    bottom_point = (center[0], center[1] + cross_length)

    # Draw the horizontal line
    draw.line([left_point, right_point], fill=color, width=int(ratio * 4))
    # Draw the vertical line
    draw.line([top_point, bottom_point], fill=color, width=int(ratio * 4))


def show_results(results):
    for cam_name in results:
        img = results[cam_name]
        plt.figure(figsize=(40, 20))
        plt.imshow(img)
        plt.axis("off")  # Hide the axes ticks
        plt.title(f"{cam_name}", fontsize=20)
        plt.savefig(f"{cam_name}.png")
        #plt.show()


def get_viz(
    pil_img,
    keypoints_map,
    ann,
    skeleton,
    pose_kpt_color,
    annot_type="body",
    is_aria=False,
):
    pts = get_coords(ann)
    ratio = 1
    if is_aria:
        ratio = 0.5

    all_pts = []
    for _, keypoints in enumerate(keypoints_map):
        kpname = keypoints["label"].lower()

        if kpname in pts:
            x, y = pts[kpname][0], pts[kpname][1]
            all_pts.append((x, y))
        else:
            all_pts.append(())

    if annot_type == "body":
        draw_skeleton(pil_img, all_pts, skeleton)
    else:
        draw_skeleton_hands(pil_img, all_pts, skeleton, ratio)

    for index, keypoints in enumerate(keypoints_map):
        kpname = keypoints["label"].lower()
        if kpname in pts:
            x, y, pt_type = pts[kpname][0], pts[kpname][1], pts[kpname][2]
            color = tuple(pose_kpt_color[index])
            if pt_type == 1:
                if annot_type == "body":
                    draw_circle(pil_img, x, y, color)
                else:
                    draw_circle_hands(pil_img, x, y, color, ratio)
            else:
                if annot_type == "body":
                    draw_cross(pil_img, x, y, color)
                else:
                    draw_cross_hands(pil_img, x, y, color, ratio)
            if annot_type == "body":
                draw_label(pil_img, x, y, color, kpname)

        else:
            pass
    return pil_img


# Video Utilities
def get_frame(video_local_path, frame_idx):
    container = av.open(video_local_path)
    frame_count = 0
    for frame in container.decode(video=0):
        if frame_count == frame_idx:
            input_img = np.array(frame.to_image())
            pil_img = Image.fromarray(input_img)
            return pil_img
        frame_count += 1
```

### 2. Load one sample take and its ego / exo camera's camera calibration.

First, let's define the Ego-Exo4D dataset and its annotation location.


```python
release_dir = "/datasets01/egoexo4d/v2/" # replace this with your download folder
annotation_dir = os.path.join(release_dir, "annotations/")  # annotation folder

# load necessary annotation files
egoexo = {
    "takes": os.path.join(release_dir, "takes.json"),
    "captures": os.path.join(release_dir, "captures.json")
}

for k, v in egoexo.items():
    egoexo[k] = json.load(open(v))

takes = egoexo["takes"]
captures = egoexo["captures"]
takes_by_uid = {x["take_uid"]: x for x in takes}
```

We then randomly sample one example take of playing piano. We also provide the take uid of some other takes as examples.


```python
#take_uid = "0bc47e29-e086-4726-b874-f89671366f06"  # Violin
take_uid = "23ff1c48-01ea-4d34-a38b-bc96e767b9b9" #Piano
#take_uid = "02715c86-e30c-4791-92b7-38b488e51aba"  # Bike

take = [take for take in egoexo["takes"] if take["take_uid"] == take_uid]
take = take[0]
```

And load the camera intrinsics and extrinsics of the take. **exo_traj_df** reads in the exocentric cameras calibrations in csv format.


```python
# Initialize exo cameras from calibration file
traj_dir = os.path.join(release_dir, take["root_dir"], "trajectory")
exo_traj_path = os.path.join(traj_dir, "gopro_calibs.csv")

exo_traj_df = load_csv_to_df(exo_traj_path)
exo_cam_names = list(exo_traj_df["cam_uid"])
ego_cam_names = [x["cam_id"] for x in take["capture"]["cameras"] if x["is_ego"] and x["cam_id"].startswith("aria")]
all_cams = ego_cam_names + exo_cam_names
ego_cam_name = ego_cam_names[0]
print("exo cameras:\t", exo_cam_names)
print("ego camera:\t", ego_cam_name)
```

    exo cameras:	 ['gp01', 'gp02', 'gp03', 'gp04', 'gp05']
    ego camera:	 aria01


#### 2.1 load exocentric camera calibrations

The exocentric camera calibrations can be read using Project Aria Machine Perception Services (MPS). We store them with camera uid as keys in **go_pro_proxy**.


```python
go_pro_proxy = {}
static_calibrations = mps.read_static_camera_calibrations(exo_traj_path)
for static_calibration in static_calibrations:
    # assert the GoPro was correctly localized
    if static_calibration.quality != 1.0:
        print(f"Camera: {static_calibration.camera_uid} was not localized, ignoring this camera.")
        continue
    proxy = {}
    proxy["name"] = static_calibration.camera_uid
    proxy["pose"] = static_calibration.transform_world_cam
    proxy["camera"] = CameraCalibration(
                            static_calibration.camera_uid,
                            KANNALA_BRANDT_K3,
                            static_calibration.intrinsics,
                            static_calibration.transform_world_cam, # probably extrinsics
                            static_calibration.width,
                            static_calibration.height,
                            None,
                            math.pi,
                            "")

    go_pro_proxy[static_calibration.camera_uid] = proxy
```

    Camera: gp05 was not localized, ignoring this camera.
    Loaded #StaticCameraCalibration data: 5


#### 2.2 load egocentric camera calibrations

We read the egocentric camera intrinsics using VRS and camera extrinsics using MPS.


```python
## Configure the VRSDataProvider (interface used to retrieve Trajectory data)
ego_exo_project_path = os.path.join(release_dir, 'takes', take['take_name'])

aria_dir = os.path.join(release_dir, take["root_dir"])
aria_path = os.path.join(aria_dir, f"{ego_cam_name}.vrs")
vrs_data_provider = data_provider.create_vrs_data_provider(aria_path)
device_calibration = vrs_data_provider.get_device_calibration()

rgb_stream_id = StreamId("214-1")
rgb_stream_label = vrs_data_provider.get_label_from_stream_id(rgb_stream_id)
rgb_camera_calibration = device_calibration.get_camera_calib(rgb_stream_label)

mps_data_paths_provider = mps.MpsDataPathsProvider(ego_exo_project_path)
mps_data_paths = mps_data_paths_provider.get_data_paths()
mps_data_provider = mps.MpsDataProvider(mps_data_paths)
```

### 3. Load body / hand pose and project it to exocentric views

In this section, we go through the steps of projecting body / hand pose to exocentric views. We first load the annotation file of the pose. The annotation is a dictionary with the frame indices as keys. As an example, we randomly sample the 3D and 2D annotation of one frame. You can switch annotation_type to choose between body and hand.


```python
annotation_type = "hand" # annotation_type should be body or hand.

# get body pose annotation folder
egopose_ann_dir = os.path.join(
    annotation_dir, f"ego_pose/train/{annotation_type}/annotation"
)
# get the annotation file of the sampled take
annotation_file_path = os.path.join(egopose_ann_dir, f"{take_uid}.json")
all_annotations = json.load(open(annotation_file_path))
# annotation is a dictionary with frame numbers as keys, we then randomly sample one frame.
frame_idx = random.sample(list(all_annotations.keys()), 1)[0]
annotation = all_annotations[frame_idx][0]
frame_idx = int(frame_idx)
print(f"annotation at sampled frame {frame_idx} is {annotation.keys()}.")
```

    annotation at sampled frame 3382 is dict_keys(['annotation3D', 'annotation2D']).


Next we read the corresponding at the sampled frame index from exocentric videos and egocentric video. We store it in a dictionary **videos** with camera name as key.


```python
base_directory = os.path.join(release_dir, take["root_dir"])
videos = {}
for cam_name in all_cams:
    if cam_name in exo_cam_names:
        stream_name = '0'
    else:
        stream_name = 'rgb'

    local_path = os.path.join(base_directory, take['frame_aligned_videos'][cam_name][stream_name]['relative_path'])
    container = av.open(local_path)
    videos[cam_name] = get_frame(local_path, frame_idx)
```

We retrieve the pose in the format of 3D keypoints from the annotation file. 3D keypoints are world coordinates of the pose. Note that annotation also have **annotation2D** which are 2D keypoints annotated on undistorted frames. We will show this part later in projecting hand pose to egocentric frame.


```python
parts = list(annotation["annotation3D"].keys())
annot_3d = {}
for part in parts:
    keypoint = annotation["annotation3D"][part]
    annot_3d[part] = [keypoint['x'], keypoint['y'], keypoint['z']]
```

With exocentric camera calibration, we project the 3D body/hand keypoints to different exocentric views. The process is similar to the reprojection in the gaze tutorial. The body/hand keypoint is first projected from world coordinates to exocentric camera device, then to the exocentric camera image plane.


```python
per_go_pro_reprojection = {}
for go_pro in go_pro_proxy:
    if go_pro not in per_go_pro_reprojection.keys():
        per_go_pro_reprojection[go_pro] = {}
    for part in parts:
        pose_vector_in_world = annot_3d[part]
        # project the keypoint from world to go_pro device
        pose_in_go_pro_world = go_pro_proxy[go_pro]["pose"].inverse() @ pose_vector_in_world

        # project the keypoint from go_pro device to go_pro image plane
        device_projection = go_pro_proxy[go_pro]["camera"].project(pose_in_go_pro_world)
        if device_projection is None:
            continue
        else:
            per_go_pro_reprojection[go_pro][part] = {'x': device_projection[0], 'y': device_projection[1], 'placement': 'manual'}
```

We define the keypoints_map, skeleton and pose_kpt_color for visualization.


```python
if annotation_type == "body":
    keypoints_map, skeleton, pose_kpt_color = get_body_metadata()
else:
    keypoints_map, skeleton, pose_kpt_color = get_hands_metadata()
```


```python
projection_results = {}
for cam_name in per_go_pro_reprojection.keys():
    viz_img = get_viz(
        videos[cam_name],
        keypoints_map,
        per_go_pro_reprojection[cam_name],
        skeleton,
        pose_kpt_color,
        annot_type=annotation_type,
    )
    projection_results[cam_name] = viz_img
show_results(projection_results)
```


![png](/img/pose_tutorial-0.png)



![png](/img/pose_tutorial-1.png)





![png](/img/pose_tutorial-2.png)





![png](/img/pose_tutorial-3.png)



### 3. Projecting pose to egocentric view using camera info

In this section, we further provide instructions projecting hand pose to egocentric view, since hand-object interaction is an important part of egocentric video analysis. The projection includes the following steps:
1. retrieve 3D pose of the hand keypoint as world coordinates from annotation
2. retrieve camera intrinsics and extrinsics from camera_info
3. project the 3D keypoint from world to aria device with camera extrinsics
4. project the 3D keypoint from aria device to aria image plane with camera intrinsics
5. get the resulted 2D keypoint


```python
takes_info = json.load(open(os.path.join(release_dir, "takes.json")))

# go through all takes to locate the sampled take, i.e., cmu_bike01_5
take_name = take["take_name"]
import re

# get the capture name, and load the timesync.csv
capture_name = re.sub(r"_\d+$", "", take_name)
timesync = pd.read_csv(os.path.join(release_dir, f"captures/{capture_name}/timesync.csv"))

start_idx = take["timesync_start_idx"]+1
end_idx = take["timesync_end_idx"]
take_timestamps = []
for idx in range(start_idx, end_idx):
    take_timestamps.append(int(timesync.iloc[idx][f"aria01_214-1_capture_timestamp_ns"]))
sample_timestamp = take_timestamps[int(frame_idx)]
```


```python
ego_reprojection = {}
pose_info = mps_data_provider.get_closed_loop_pose(sample_timestamp)

cam = ego_cam_name
for part in parts:
    pose_vector_in_world = annot_3d[part]

    if pose_info:
        # transform coordinates from device to world
        T_world_device = pose_info.transform_world_device

    T_device_camera = rgb_camera_calibration.get_transform_device_camera()
    T_world_camera = T_world_device @ T_device_camera

    pose_in_aria_world = T_world_camera.inverse() @ pose_vector_in_world
    device_projection = rgb_camera_calibration.project(pose_in_aria_world)

    if device_projection is None:
        continue
    else:
        x_coord = device_projection[0]
        y_coord = device_projection[1]
        ego_reprojection[part] = {'x': x_coord, 'y': y_coord, 'placement': 'auto'}
```

    Loaded #closed loop trajectory poses records: 646865


Now let's visualize the projected hand pose on the aria frame.


```python
ego_local_path = os.path.join(base_directory, take['frame_aligned_videos'][ego_cam_name]['rgb']['relative_path'])
ego_frame = get_frame(ego_local_path, frame_idx)
if annotation_type == 'hand':
    cam_name = ego_cam_name
    ann = ego_reprojection
    img = ego_frame
    img = img.rotate(90)
    image_array = np.asarray(img)
    image = Image.fromarray(image_array, "RGB")

    viz_img = get_viz(image, keypoints_map, ann, skeleton, pose_kpt_color, annot_type=annotation_type, is_aria=True)
    plt.figure(figsize=(8, 8))
    plt.imshow(viz_img.rotate(270))
    plt.axis("off")  # Hide the axes ticks
    plt.title(f"{cam_name}")
    plt.show()
```



![png](/img/pose_tutorial-4.png)



### Conclusion

In this notebook, we reviewed loading takes, its egocentric and exocentric camera calibrations and EgoPose annotations. We also provided a step-by-step guide on projecting 3D hand/body keypoints to different views with the camera calibrations. This can serve as a good starting point to understand EgoPose and utilize it for research in the future.

---

[![Star our repository](https://img.shields.io/static/v1.svg?logo=star&label=⭐&message=Star%20Our%20Repository&color=yellow)](https://github.com/facebookresearch/Ego4d)  If you found this tutorial helpful, consider ⭐-ing our repository.

[![Ask questions](https://img.shields.io/static/v1.svg?logo=star&label=❔&message=Ask%20Questions&color=9cf)](https://github.com/facebookresearch/Ego4d/issues)  For any questions, typos, or bugs that you found, please raise an issue on GitHub.

---
