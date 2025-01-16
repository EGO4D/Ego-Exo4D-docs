"use strict";(self.webpackChunkegoexo_docs=self.webpackChunkegoexo_docs||[]).push([[6153],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>g});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",_={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=l(a),d=o,g=c["".concat(p,".").concat(d)]||c[d]||_[d]||n;return a?r.createElement(g,i(i({ref:t},m),{},{components:a})):r.createElement(g,i({ref:t},m))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<n;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7270:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>_,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var r=a(7462),o=(a(7294),a(3905));const n={},i="Tutorial 1: Gaze in Ego-Exo4D Dataset",s={unversionedId:"tutorials/gaze",id:"tutorials/gaze",title:"Tutorial 1: Gaze in Ego-Exo4D Dataset",description:"Introduction of gaze data, and step-by-step guidance on how to reproject eye gaze to egocentric and exocentric views.",source:"@site/docs/tutorials/gaze.md",sourceDirName:"tutorials",slug:"/tutorials/gaze",permalink:"/tutorials/gaze",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tutorials",permalink:"/tutorials/"},next:{title:"Tutorial 2: Hand and Body Pose in Ego-Exo4D Dataset",permalink:"/tutorials/pose"}},p={},l=[{value:"1. Prerequisites and Imports",id:"1-prerequisites-and-imports",level:3},{value:"2. Load one sample take and its VRS and MPS data",id:"2-load-one-sample-take-and-its-vrs-and-mps-data",level:3},{value:"3. Projecting eye gaze from 3D to 2D in Egocentric View (CPF frame)",id:"3-projecting-eye-gaze-from-3d-to-2d-in-egocentric-view-cpf-frame",level:3},{value:"4. Projecting eye gaze from 3D to 2D in multiple Exocentric Views",id:"4-projecting-eye-gaze-from-3d-to-2d-in-multiple-exocentric-views",level:3},{value:"Conclusion",id:"conclusion",level:2}],m={toc:l},c="wrapper";function _(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tutorial-1-gaze-in-ego-exo4d-dataset"},"Tutorial 1: Gaze in Ego-Exo4D Dataset"),(0,o.kt)("p",null,"Introduction of gaze data, and step-by-step guidance on how to reproject eye gaze to egocentric and exocentric views."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/static/v1.svg?label=Status&message=Finished&color=green",alt:"Status"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebookresearch/Ego4d/tree/main/notebooks/egoexo"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1.svg?logo=github&label=Tutorial&message=View%20On%20Github&color=lightgrey",alt:"View on Github"}))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Author:")," Xizi Wang"),(0,o.kt)("p",null,"In this tutorial, we provide an introduction of the gaze data in Ego-Exo4D dataset, and a step-by-step guide on how to project 3D eye gaze to 2D in Egocentric/Exocentric view."),(0,o.kt)("p",null,"Eye gaze is one of the 3D spatial signals provided by Ego-Exo4D dataset, which is pre-computed by Project Aria\u2019s machine perception service (MPS). The gaze direction of the user is estimated as a single outward-facing ray anchored in-between the wearer\u2019s eyes. Left and right eye gaze directions (yaw values) along with the depth at which these gaze directions intersect (translation values) are provided in the dataset. The convergence points and distances are derived from the predicted gaze directions. The combined direction\u2019s yaw is used to populate the yaw field of the EyeGaze object for backwards compatibility. The pitch is common to left, right and combined gaze directions."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Gaze Model",src:a(5678).Z,width:"700",height:"783"})),(0,o.kt)("p",null,"Eye gaze data is located in each captures' or takes' eye_gaze folder. You can determine if a take or capture has eye gaze data by using ",(0,o.kt)("inlineCode",{parentName:"p"},"has_gaze")," for a capture in ",(0,o.kt)("b",null,"captures.json")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"has_trimmed_eye_gaze")," for a take in ",(0,o.kt)("b",null,"takes.json"),". If eye gaze is available for the take, it is trimmed (cropped in time) with respect to that take. You will find the following Eye Gaze MPS file outputs under the take folder. ",(0,o.kt)("em",{parentName:"p"},"Note that personalized eye gaze might not be available for all takes.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"summary.json")," - high level report on MPS eye gaze generation"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"general_eye_gaze.csv")," - based on the standard eye gaze configuration"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"personalized_eye_gaze.csv")," - eye gaze data based on the calibration data collected in the recording, please check ",(0,o.kt)("a",{href:"https://facebookresearch.github.io/projectaria_tools/docs/ARK/mps/eye_gaze_calibration"},"in-session Eye Gaze Calibration")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"general_eye_gaze_2d.csv")," - 2D eye gaze coordinates projected on egocentric view"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"personalized_eye_gaze_2d.csv")," - 2D eye gaze coordinates projected on egocentric view based on the calibration data")),(0,o.kt)("h3",{id:"1-prerequisites-and-imports"},"1. Prerequisites and Imports"),(0,o.kt)("p",null,"Before we get started, we need to install necessary libraries. We will install the Python Package for Project Aria Tools. Please check ",(0,o.kt)("a",{href:"https://facebookresearch.github.io/projectaria_tools/docs/data_utilities/installation/installation_python"},"Installation guide")," for detailed instructions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# install projectaria_tools\n!git clone https://github.com/facebookresearch/projectaria_tools.git -b 1.5.5\n!python3 -m pip install --upgrade pip\n!python3 -m pip install projectaria-tools'[all]' --quiet\n\n# install opencv-python\n!pip install opencv-python --quiet\n")),(0,o.kt)("p",null,"Then we import some necessary libraries."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import numpy as np\nfrom tqdm import tqdm\nimport os\nimport json\nimport re\nimport pandas as pd\nimport matplotlib.pyplot as plt\nfrom PIL import Image, ImageDraw\nfrom moviepy import VideoFileClip\nimport cv2\nimport math\n\n# project Aria tools\nfrom projectaria_tools.core.calibration import CameraCalibration, DeviceCalibration, KANNALA_BRANDT_K3\nfrom projectaria_tools.core.sophus import SE3\nfrom projectaria_tools.core import mps, data_provider\nfrom projectaria_tools.core.mps.utils import get_gaze_vector_reprojection\nfrom projectaria_tools.core.stream_id import StreamId\nfrom projectaria_tools.core.sensor_data import TimeDomain, TimeQueryOptions\nfrom projectaria_tools.utils.rerun_helpers import AriaGlassesOutline, ToTransform3D\n")),(0,o.kt)("h3",{id:"2-load-one-sample-take-and-its-vrs-and-mps-data"},"2. Load one sample take and its VRS and MPS data"),(0,o.kt)("p",null,"We will load one take ",(0,o.kt)("strong",{parentName:"p"},"fair_cooking_05_2")," on cooking as an example. You need to change ",(0,o.kt)("inlineCode",{parentName:"p"},"ego_exo_root")," to the download directory for the Ego-Exo4D dataset. As mentioned earlier, some takes might have personalized eye gaze which is based on calibrated data. We use a boolean variable ",(0,o.kt)("inlineCode",{parentName:"p"},"use_general_gaze")," to choose whether general eye gaze or personalized eye gaze is used."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"ego_exo_root = '/datasets01/egoexo4d/v2/' # Replace with your cli's download directory for Ego-Exo4D\ntake_name = 'fair_cooking_05_2'\n\nego_exo_project_path = os.path.join(ego_exo_root, 'takes', take_name)\nassert os.path.exists(ego_exo_project_path), \"Please do update your path to a valid EgoExo sequence folder.\"\n\nuse_general_gaze = True\nif not use_general_gaze:\n    assert os.path.exists(os.path.join(ego_exo_project_path, \"eye_gaze\", \"personalized_eye_gaze.csv\")), \"personalized eye gaze not exists for this take\"\n\n\n# find aria number, for example, aria03.vrs will have aria_number = 3\npattern = re.compile(r'aria0(\\d+)\\.vrs')\n\nfor root, _, files in os.walk(ego_exo_project_path):\n    for file in files:\n        match = pattern.match(file)\n        if match:\n            aria_number = int(match.group(1))\n")),(0,o.kt)("p",null,"We retrieve the VRS data including device calibration collected by Aria glasses and plot sensors locations, orientations."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"VRS: ",(0,o.kt)("a",{href:"https://facebookresearch.github.io/vrs/"},"VRS")," is the file format used to store the Project Aria Glasses multimodal data. VRS Data is stored Stream and are identified with a unique StreamId. ",(0,o.kt)("inlineCode",{parentName:"li"},"VrsDataProvider")," enables you to list and retrieve all VRS data and calibration data."),(0,o.kt)("li",{parentName:"ul"},"DeviceCalibration: an interface that can be used to retrieve Intrinsics for Image Stream data (i.e Camera data) - ",(0,o.kt)("inlineCode",{parentName:"li"},"CameraCalibration")," and Extrinsics defined for all sensors - ",(0,o.kt)("inlineCode",{parentName:"li"},"SE3"),".")),(0,o.kt)("p",null,"Project Aria glasses use 3D Coordinate Frame Conventions. You can find an overview of these conventions here (CPF) and 3D Coordinate frame and system conventions are covered. We use the projectaria_tools API for retrieving the DeviceCalibration and the POSE of each sensor."),(0,o.kt)("p",null,"First of all, we load the VRS file of the sample take."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'vrs_file_path = os.path.join(ego_exo_project_path, f\'aria0{aria_number}.vrs\')\nprint(f"VRS file path: {vrs_file_path}")\nassert os.path.exists(vrs_file_path), "We are not finding the required vrs file"\n\nvrs_data_provider = data_provider.create_vrs_data_provider(vrs_file_path)\nassert vrs_data_provider, "Couldn\'t create data vrs_data_provider from vrs file"\n')),(0,o.kt)("p",null,"Next, we load the device calibration of the aria glasses, and the pose of the ",(0,o.kt)("a",{href:"https://facebookresearch.github.io/projectaria_tools/docs/data_formats/coordinate_convention/3d_coordinate_frame_convention#the-nominal-central-pupil-frame-cpf"},"central-pupil-frame")," in the device frame."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"device_calibration = vrs_data_provider.get_device_calibration()\n\n# CPF (Central Pupil Frame coordinate system)\nT_device_CPF = device_calibration.get_transform_device_cpf()\n")),(0,o.kt)("p",null,"Now let's check out the project aria glasses outline and the CPF coordinate system in the figure below."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Aria Glasses and CPF",src:a(9467).Z,width:"1282",height:"962"})),(0,o.kt)("p",null,"We can get RGB and SLAM left and right stream label from a given StreamId."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'rgb_stream_id = StreamId("214-1")\nslam_left_stream_id = StreamId("1201-1")\nslam_right_stream_id = StreamId("1201-2")\nrgb_stream_label = vrs_data_provider.get_label_from_stream_id(rgb_stream_id)\nslam_left_stream_label = vrs_data_provider.get_label_from_stream_id(slam_left_stream_id)\nslam_right_stream_label = vrs_data_provider.get_label_from_stream_id(slam_right_stream_id)\n')),(0,o.kt)("p",null,"We can further retrieve time domain, and image configurations from the stream."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# Configure option for data retrieval\ntime_domain = TimeDomain.DEVICE_TIME  # query data based on host time\noption = TimeQueryOptions.CLOSEST # get data whose time [in TimeDomain] is CLOSEST to query time\n\n# Retrieve Start and End time for the given Sensor Stream Id\nstart_time = vrs_data_provider.get_first_time_ns(rgb_stream_id, time_domain)\nend_time = vrs_data_provider.get_last_time_ns(rgb_stream_id, time_domain)\n\n# FYI, you can retrieve the Image configuration using the following\nimage_config = vrs_data_provider.get_image_configuration(rgb_stream_id)\nwidth = image_config.image_width\nheight = image_config.image_height\nprint(f"StreamId {rgb_stream_id}, StreamLabel {rgb_stream_label}, ImageSize: {width, height}")\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"StreamId 214-1, StreamLabel camera-rgb, ImageSize: (1408, 1408)\n")),(0,o.kt)("p",null,"Now let's retrieve the stream from RGB, SLAM left and right cameras. To retrieve the timestamps of the take, we need to follow the steps below. Please also check ",(0,o.kt)("a",{href:"https://docs.ego-exo4d-data.org/data/takes/#take-timing-information"},"Take Time Information")," for more details."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# Load the takes.json annotation\ntakes_info = json.load(open(os.path.join(ego_exo_root, "takes.json")))\n\n# go through all takes to locate the sampled take, i.e., cmu_bike01_5\nfor take in takes_info:\n    if take["take_name"] == take_name: break\n\n# get the capture name, and load the timesync.csv\ncapture_name = re.sub(r"_\\d+$", "", take_name)\ntimesync = pd.read_csv(os.path.join(ego_exo_root, f"captures/{capture_name}/timesync.csv"))\n\nstart_idx = take["timesync_start_idx"]+1\nend_idx = take["timesync_end_idx"]\ntake_timestamps = []\nfor idx in range(start_idx, end_idx):\n    take_timestamps.append(int(timesync.iloc[idx][f"aria0{aria_number}_214-1_capture_timestamp_ns"]))\n')),(0,o.kt)("p",null,"We can retrieve the RGB image and SLAM images from VRS data, and visualize the frames from RGB, SLAM left and right cameras with the timestamps."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# we sample 1/100 frames for faster visualization\nsample_freq=100\nsample_frame_num=400\nfor sample in take_timestamps[:sample_frame_num:sample_freq]:\n\n    # Retrieve the RGB image\n    image_tuple_rgb = vrs_data_provider.get_image_data_by_time_ns(rgb_stream_id, int(sample), time_domain, option)\n    timestamp = image_tuple_rgb[1].capture_timestamp_ns\n\n    # Retrieving the SLAM images\n    image_tuple_slam_left = vrs_data_provider.get_image_data_by_time_ns(slam_left_stream_id, int(sample), time_domain, option)\n\n    image_tuple_slam_right = vrs_data_provider.get_image_data_by_time_ns(slam_right_stream_id, int(sample), time_domain, option)\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"RGB &amp; SLAM",src:a(2524).Z,width:"1284",height:"964"})),(0,o.kt)("h3",{id:"3-projecting-eye-gaze-from-3d-to-2d-in-egocentric-view-cpf-frame"},"3. Projecting eye gaze from 3D to 2D in Egocentric View (CPF frame)"),(0,o.kt)("p",null,"Here we show how to project eye gaze data to egocentric view. Eye gaze data is represented as a 3D ray with depth (showing the point of user focus). The eye gaze ray starts from the Central Pupil Frame(CPF). The reprojection of eye gaze ray in any Aria Image Stream (RGB, SLAMs) includes the following 3 steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"We retrieve the frames from the egocentric video corresponding to the RGB stream of the aria glasses."),(0,o.kt)("li",{parentName:"ol"},"Use the ",(0,o.kt)("inlineCode",{parentName:"li"},"MpsDataProvider")," to retrieve if an EyeGaze file is available and to retrieve EyeGaze data at a given timestamp"),(0,o.kt)("li",{parentName:"ol"},"Compute the corresponding 3D eye gaze vector and retrieve its depth")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# load the egocentric video with cv2, and load the first sample_frame_num=400 frames\nego_video = os.path.join(ego_exo_root, \'takes\', take_name, "frame_aligned_videos", f"aria0{aria_number}_214-1.mp4")\n\n# we sample the first 400 frames, with a sampling rate of 1 frame per 100 frames to acelerate the processing and visualization.\nsample_frame_num = 400\nsample_freq = 100\ncap = cv2.VideoCapture(ego_video)\nego_frames = []\n\nfor i in range(sample_frame_num):\n    ret, frame = cap.read()\n    frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)\n    if not ret:\n        break\n    ego_frames.append(frame)\n\ncap.release()\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'## Configure the MpsDataProvider (interface used to retrieve Trajectory data)\nmps_data_paths_provider = mps.MpsDataPathsProvider(ego_exo_project_path)\nmps_data_paths = mps_data_paths_provider.get_data_paths()\nmps_data_provider = mps.MpsDataProvider(mps_data_paths)\nassert mps_data_provider.has_general_eyegaze(), "The sequence does not have Eye Gaze data"\n\nrgb_camera_calibration = device_calibration.get_camera_calib(rgb_stream_label)\n')),(0,o.kt)("p",null,"Let's reproject the 3D eye gaze to the egocentric view at all timestamps, and concatenate the projected 2D eye gaze on egocentric view to a list ",(0,o.kt)("inlineCode",{parentName:"p"},"gazes"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"gazes = []\nfor sample in take_timestamps:\n\n    # get the eye gaze data at each timestamp with mps_data_provider\n    if use_general_gaze:\n        eye_gaze = mps_data_provider.get_general_eyegaze(sample)\n    else:\n        eye_gaze = mps_data_provider.get_personalized_eyegaze(sample)\n\n    # compute the corresponding 3D vector and retrieve its depth. Depth is set to default of 1.0 if eye gaze data doesn't provide depth.\n    depth_m = eye_gaze.depth or 1.0\n\n    # reproject the eye_gaze vector at Depth on a given image (using Calibration data)\n    gaze_projection = get_gaze_vector_reprojection(\n        eye_gaze,\n        rgb_stream_label,\n        device_calibration,\n        rgb_camera_calibration,\n        depth_m,\n    )\n    gazes.append(gaze_projection)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Loaded #EyeGazes: 5096\n")),(0,o.kt)("p",null,"For some takes, we've released a file named ",(0,o.kt)("inlineCode",{parentName:"p"},"general_eye_gaze_2d.csv")," which stores the projected eye gaze at a lower fps. As a result, another way of getting the 2D project eye gaze on the egocentric view is to read the gazes from this file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"gaze_2d = pd.read_csv(os.path.join(ego_exo_root, 'takes', take_name, \"eye_gaze/general_eye_gaze_2d.csv\"))\nx_values = gaze_2d['x'].tolist()\nx_values = [num for num in x_values for _ in range(3)] # repeat the values because sampling rate of eye gaze data in general_eye_gaze_2d.csv is 10 fps instead of 30 fps in the video.\ny_values = gaze_2d['y'].tolist()\ny_values = [num for num in y_values for _ in range(3)]\ngaze_2d_csv = list(map(lambda x, y: (x, y), x_values, y_values))[1:]\n")),(0,o.kt)("p",null,"With the projected eye gazes, we can visualize them on the egocentric videos. We sample some frames for faster visualization."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"ego_frames_with_points = {}\nfor i in list(range(len(take_timestamps)))[:sample_frame_num:sample_freq]:\n    # retrieve the projected eye gaze from the MPS_data_provider\n    mps_pointx, mps_pointy = gazes[i]\n\n    # retrieve the 2D eye gaze from general_eye_gaze_2d.csv\n    point_x, point_y = gaze_2d_csv[i][0], gaze_2d_csv[i][1]\n\n    # rotate the projected eye gaze 90 degree clockwise to align with the egocentric view\n    mps_pointx_new = width - 1 - mps_pointy\n    mps_pointy_new = mps_pointx\n    mps_pointx, mps_pointy = mps_pointx_new, mps_pointy_new\n    img = Image.fromarray(ego_frames[i])\n\n    draw = ImageDraw.Draw(img)\n\n    # Draw the eye gaze from MPS on the image (color: green)\n    draw.ellipse((mps_pointx-25, mps_pointy-25, mps_pointx+25, mps_pointy+25), fill=(0, 255, 0))\n    # Draw the eye gaze from the CSV file on the image (color: red)\n    draw.ellipse((point_x-25, point_y-25, point_x+25, point_y+25), fill=(255, 0, 0))\n\n    # Append the frame with point to the list\n    ego_frames_with_points[take_timestamps[i]] = np.array(img)\n")),(0,o.kt)("p",null,"The green dots show the eye gaze from MPS projected on the image. The red dots show the eye gaze read from the general_eye_gaze_2d.csv on the image."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"f, axarr = plt.subplots(1,4, figsize=(20, 10))\nfor i, ax in enumerate(axarr.flat):\n    key = list(ego_frames_with_points.keys())[i]\n    ax.imshow(ego_frames_with_points[key], cmap='gray')\n    ax.axis('off')\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Gaze reprojected in egocentric view",src:a(6706).Z,width:"1570",height:"356"})),(0,o.kt)("h3",{id:"4-projecting-eye-gaze-from-3d-to-2d-in-multiple-exocentric-views"},"4. Projecting eye gaze from 3D to 2D in multiple Exocentric Views"),(0,o.kt)("p",null,"In this section, let's project the eye gaze to the exocentric views. First we need to get the camera calibrations of the exocentric cameras."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'go_pro_proxy = []\n# load the calibrations of the exocentric cameras\nstatic_calibrations = mps.read_static_camera_calibrations(os.path.join(ego_exo_project_path, "trajectory", "gopro_calibs.csv"))\nfor static_calibration in static_calibrations:\n    if static_calibration.quality != 1.0:\n        print(f"Camera: {static_calibration.camera_uid} was not localized, ignoring this camera.")\n        continue\n    proxy = {}\n    proxy["name"] = static_calibration.camera_uid\n    proxy["pose"] = static_calibration.transform_world_cam\n    proxy["camera"] = CameraCalibration(\n                            static_calibration.camera_uid,\n                            KANNALA_BRANDT_K3,\n                            static_calibration.intrinsics,\n                            static_calibration.transform_world_cam,\n                            static_calibration.width,\n                            static_calibration.height,\n                            None,\n                            math.pi,\n                            "")\n    go_pro_proxy.append(proxy)\n')),(0,o.kt)("p",null,"Next we retrieve the eye gazes from the MPS again, and project the eye gaze at each timestamp to world coordinate system."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"per_go_pro_reprojection = {}\nfor sample in take_timestamps[:sample_frame_num]:\n\n    # Retrieve the camera pose at a given timestamp\n    pose_info = mps_data_provider.get_closed_loop_pose(sample)\n    if pose_info:\n        # To get the eye gaze in world coordinates:\n        # 1. get eye gaze in CPF frame\n        # 2. transform gaze_CPF to gaze_device\n        # 3. transform gaze_device to gaze_world\n        T_world_device = pose_info.transform_world_device\n        if use_general_gaze:\n            eye_gaze = mps_data_provider.get_general_eyegaze(sample)\n        else:\n            eye_gaze = mps_data_provider.get_personalized_eyegaze(sample)\n        gaze_vector_in_cpf = mps.get_eyegaze_point_at_depth(eye_gaze.yaw, eye_gaze.pitch, eye_gaze.depth)\n        gaze_vector_in_cpf = np.nan_to_num(gaze_vector_in_cpf)\n        gaze_vector_in_device = T_device_CPF @ gaze_vector_in_cpf\n        gaze_vector_in_world = T_world_device @ gaze_vector_in_device\n\n        # project the eye gaze in world coordinate system to camera coordinate system\n        # for gazes that don't exist in the exocentric view, set gaze to None.\n        for go_pro in go_pro_proxy:\n            gaze_in_go_pro_world = go_pro[\"pose\"].inverse() @ gaze_vector_in_world\n            device_projection = go_pro[\"camera\"].project(gaze_in_go_pro_world)\n            if device_projection is not None:\n                if go_pro['name'] not in per_go_pro_reprojection.keys():\n                    per_go_pro_reprojection[go_pro['name']] = {}\n                per_go_pro_reprojection[go_pro['name']][sample] = device_projection\n            else:\n                if go_pro['name'] not in per_go_pro_reprojection.keys():\n                    per_go_pro_reprojection[go_pro['name']] = {}\n                per_go_pro_reprojection[go_pro['name']][sample] = None\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Loaded #closed loop trajectory poses records: 509486\n")),(0,o.kt)("p",null,"Next we load all the exocentric videos of this take."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'videos = {}\nfor go_pro in per_go_pro_reprojection:\n    exo_video = os.path.join(ego_exo_root, \'takes\', take_name, "frame_aligned_videos", f"{go_pro}.mp4")\n    cap = cv2.VideoCapture(exo_video)\n    frames = {}\n\n    for i in range(sample_frame_num):\n        ret, frame = cap.read()\n        frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)\n        if not ret:\n            break\n        frames[take_timestamps[i]] = frame\n\n    cap.release()\n    videos[go_pro] = frames\n')),(0,o.kt)("p",null,"And visualize the eye gazes on the exocentric videos with green dots."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"frames_with_points = {}\nfor go_pro in per_go_pro_reprojection:\n    frames = videos[go_pro]\n    output_frames = {}\n    for i in list(range(len(take_timestamps)))[:sample_frame_num:sample_freq]:\n        if per_go_pro_reprojection[go_pro][take_timestamps[i]] is not None:\n            point_x, point_y = per_go_pro_reprojection[go_pro][take_timestamps[i]]\n            img = Image.fromarray(frames[take_timestamps[i]])\n            # Draw the eye gaze on the exocentric frame\n            draw = ImageDraw.Draw(img)\n            draw.ellipse((point_x-50, point_y-50, point_x+50, point_y+50), fill=(0, 255, 0))\n            output_frames[take_timestamps[i]] = np.array(img)\n        else:\n            output_frames[take_timestamps[i]] = np.array(frames[take_timestamps[i]])\n    frames_with_points[go_pro] = output_frames\n")),(0,o.kt)("p",null,"Now we can show the sampled frames from exocentric videos with eye gaze projected on them. Voila!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"fig, axes = plt.subplots(len(frames_with_points),4, figsize=(10, 5))\nfor row in range(len(frames_with_points)):\n    key = list(frames_with_points.keys())[row]\n    for col in range(4):\n        timestamp = list(frames_with_points[key].keys())[col]\n        ax = axes[row, col]\n        ax.axis('off')\n        ax.imshow(frames_with_points[key][timestamp])\n\nfor i, name in enumerate(frames_with_points.keys()):\n    vertical_position = 1 - (i + 0.5) / len(frames_with_points)  # Calculate the vertical position for the name\n    fig.text(0.05, vertical_position, name, va='center', ha='right', fontsize=10, fontweight='bold')\n\nplt.tight_layout(rect=[0.05, 0, 1, 1])\nplt.show()\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Gaze reprojected in exocentric view",src:a(955).Z,width:"1006",height:"454"})),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"In this notebook, we have reviewed how to load takes, and their corresponding VRS and MPS data including the egocentric and exocentric videos and camera calibrations. We further discussed the reprojection of eye gazes from MPS data to egocentric and exocentric views. In this notebook, we use general eye gaze data for eye gaze reprojection. Note that for some takes, personalized eye gaze based on calibrated data is available, which could provide more accurate eye gaze reprojection."),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebookresearch/Ego4d"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1.svg?logo=star&label=%E2%AD%90&message=Star%20Our%20Repository&color=yellow",alt:"Star our repository"})),"  If you found this tutorial helpful, consider \u2b50-ing our repository."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebookresearch/Ego4d/issues"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/static/v1.svg?logo=star&label=%E2%9D%94&message=Ask%20Questions&color=9cf",alt:"Ask questions"})),"  For any questions, typos, or bugs that you found, please raise an issue on GitHub."),(0,o.kt)("hr",null))}_.isMDXComponent=!0},9467:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/aria_glasses-5829d934bec70735a8b097954c972c36.png"},5678:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/eye_gaze_032024_model-91aa05caa75d05d9afb56899b0c008c0.png"},6706:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/gaze_ego-998457e6f3e9ed98bc2716fd115ba9ed.png"},955:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/gaze_exo-3663a4a4a6c52762999dc2ed1cfc42a4.png"},2524:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/rgb_slam-fbc4aca4d82b2a62db2dded604da6c8c.png"}}]);