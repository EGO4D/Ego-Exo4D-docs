"use strict";(self.webpackChunkegoexo_docs=self.webpackChunkegoexo_docs||[]).push([[932],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>h});var n=t(7294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),s=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):d(d({},a),e)),t},c=function(e){var a=s(e.components);return n.createElement(l.Provider,{value:a},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(t),m=i,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||r;return t?n.createElement(h,d(d({ref:a},c),{},{components:t})):n.createElement(h,d({ref:a},c))}));function h(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=t.length,d=new Array(r);d[0]=m;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o[p]="string"==typeof e?e:i,d[1]=o;for(var s=2;s<r;s++)d[s]=t[s];return n.createElement.apply(null,d)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3012:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var n=t(7462),i=(t(7294),t(3905));const r={title:"Metadata",sidebar_position:1},d=void 0,o={unversionedId:"data/metadata",id:"data/metadata",title:"Metadata",description:"Metadata files for all of the released data.",source:"@site/docs/data/metadata.md",sourceDirName:"data",slug:"/data/metadata",permalink:"/data/metadata",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Metadata",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Data",permalink:"/data/"},next:{title:"Takes",permalink:"/data/takes"}},l={},s=[{value:"Takes",id:"takes",level:2},{value:"Participants",id:"participants",level:2},{value:"Captures",id:"captures",level:2}],c={toc:s},p="wrapper";function u(e){let{components:a,...t}=e;return(0,i.kt)(p,(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Metadata files for all of the released data."),(0,i.kt)("p",null,"When you download ",(0,i.kt)("inlineCode",{parentName:"p"},"--parts metadata"),", you will have the following files present\nin your ",(0,i.kt)("inlineCode",{parentName:"p"},"<download-dir>"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"takes.json")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"A list of each take within the dataset. For convenience this also\ncontains the associated capture's metadata."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"participants.json")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"A list of each participant within the dataset, including\ntheir demographic information when available, which specifies their: age\nrange, gender range, race/ethnicity, job/profession and other fields."),(0,i.kt)("li",{parentName:"ul"},"In the future this will also contain pre and post-survey data."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"em"},"captures.json")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"A list of each capture within the dataset."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"visual_objects.json"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"A list of each object with visual images within the dataset."),(0,i.kt)("li",{parentName:"ul"},"The images associated to each object is currently not available."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"physical_setting.json"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"A list of each physical environment within Ego-Exo4D")))),(0,i.kt)("p",null,"In bold are the files that provide the most value and are the ones to use. Below\nis documentation for each of the files."),(0,i.kt)("h2",{id:"takes"},"Takes"),(0,i.kt)("p",null,"Here is a sample of the JSON with the most important fields included."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'{\n    {\n        "root_dir": "takes/<take_name>",  # where the take lives relative to the <download_dir>\n        "take_name": <take_name>,\n        "participant_uid": 657,  # the participant \n        "is_dropped": false, # whether the take is dropped (always false)\n        "objects": [],  # the list of visual objects in the take\n\n        # Take Information\n        "task_id": 4001,\n        "task_name": "Remove a Wheel",\n        "parent_task_id": 4000,\n        "parent_task_name": "Bike Repair",\n        "take_idx": 1,  # The take index relative to the capture\n        "duration_sec": 21.366666666666667,  # how long the take is in seconds\n        "is_narrated": false, # Whether this take was a Narrate & Act Take\n        # what physical environment this take is recorded in \n        # this uid links to physical_setting.json\n        "physical_setting_uid": 97,\n\n        # Capture-Relevant information\n        "timesync_start_idx": 6372,  # the starting index of the captures\' timesync file\n        "timesync_end_idx": 7013, # the ending index of the captures\' timesync file (inclusive)\n        "capture": <see captures below>,\n        "validated": true  # whether we have manually validated the timesync\n\n        # a JSON object / dictionary with the following keys: [cam_id][stream_id]\n        "frame_aligned_videos": {\n            "aria01": {\n                "slam-left": {\n                    "cam_id": "aria01",\n                    "stream_id": "1201-1",\n                    "readable_stream_id": "slam-left",\n                    "clip_uid": "dc66a4d5-244e-459d-8480-85bb356cc448",\n                    "relative_path": "frame_aligned_videos/aria01_1201-1.mp4"\n                },\n                "slam-right": {\n                    "cam_id": "aria01",\n                    "stream_id": "1201-2",\n                    "readable_stream_id": "slam-right",\n                    "clip_uid": "84d3eb90-a7df-445f-bad2-dcde99be221e",\n                    "relative_path": "frame_aligned_videos/aria01_1201-2.mp4"\n                },\n                "et": {\n                    "cam_id": "aria01",\n                    "stream_id": "211-1",\n                    "readable_stream_id": "et",\n                    "clip_uid": "6b1a9f9d-62ac-4f83-8c50-2996bd138fae",\n                    "relative_path": "frame_aligned_videos/aria01_211-1.mp4"\n                },\n                "rgb": {\n                    "cam_id": "aria01",\n                    "stream_id": "214-1",\n                    "readable_stream_id": "rgb",\n                    "clip_uid": "108a555f-2214-40f3-838f-f2e444dc9738",\n                    "relative_path": "frame_aligned_videos/aria01_214-1.mp4"\n                }\n            },\n            "cam01": {\n                "0": {\n                    "cam_id": "cam01",\n                    "stream_id": "0",\n                    "readable_stream_id": "0",\n                    "clip_uid": "c05e03f0-486a-4443-85b0-3ef5c9f8f657",\n                    "relative_path": "frame_aligned_videos/cam01.mp4"\n                }\n            },\n            "cam02": # .. see above\n            "cam03": # .. see above\n            # etc.\n            # please see take["capture"]["cameras"] for each cam_id here\n\n            # there is also a collage video\n            "collage": {\n                "0": {\n                    "clip_uid": "878642ea-3427-4fc2-9316-1d226b5e48e2",\n                    "stream_id": "0",\n                    "readable_stream_id": "0",\n                    "relative_path": "ego_preview.mp4"\n                }\n            },\n            # and another collage with a side-by-side of the "best_exo" camera\n            "best_exo": {\n                "0": {\n                    "clip_uid": null,\n                    "stream_id": "0",\n                    "readable_stream_id": "0",\n                    "relative_path": null\n                }\n            }\n        },\n        "university_name": "cmu",\n\n        # Some internal uids for debugging/book-keeping\n        "capture_uid": "d37b73eb-fa42-43a6-8115-56832996ebd7",\n        "take_uid": "13f01c79-5bfd-42f5-90ce-ee350aa1c3ad",\n        "take_timing_uid": "4899977d-7767-4965-a746-17077c3bc5ce",\n        "timesync_uid": "f66bd964-1bc1-4da5-a55f-4d5fc770db60",\n\n        # more fields here ...\n    },\n    # ... more takes here\n}\n')),(0,i.kt)("h2",{id:"participants"},"Participants"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'[\n    {\n        "participant_uid": 2,  # a unique identifier for the participant\n        "university_name": "uniandes",  # which university the participant came from\n        "collection_date": "2023-03-09",  # when the participant was recorded\n        # JSON data for the metadata, load with `json.loads(part["metadata"])`\n        "metadata": "{<redacted>}"\n    },\n')),(0,i.kt)("h2",{id:"captures"},"Captures"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'[\n    {\n        "root_dir": "captures/cmu_bike01",\n        "capture_name": "cmu_bike01", #  the name of the capture\n        "university_name": "cmu",  # the university\n        "physical_setting_uid": 97,  # the environment\n        "ds_recorded": 1689793200,  # a datestamp of when the capture was recorde\n\n        "has_trajectory": true,  # whether trajectory data lives in `<root_dir>/trajectory`\n        "has_gaze": true,\n        "has_postsurvey": true,\n\n        # list of cameras the capture was recorded with\n        "cameras": [\n            {\n                "cam_id": "aria01",  # an identifier for the camera: <device_type><number>\n                "is_ego": true,  # true if egocentric\n                "has_walkaround": true,  # whether the recording includes a walkaround video (for environment reconstruction)\n                "includes_audio": true,  # whether the recording includes audio\n                "device_type": "aria",  # the device used\n                "relative_path": "videos/aria01.vrs",  # relative path to the capture\n                "video_artifact_uid": "355f22a8-1796-491b-b531-118a026dd1c5"  # debugging identifier\n            },\n            {\n                "cam_id": "cam01",\n                "is_ego": false,  # for camXX cam_ids this will mostly be false, there are some egocentric GoPros\n                "has_walkaround": false,\n                "includes_audio": true,\n                "device_type": "hero10",\n                "relative_path": "videos/cam01.mp4",\n                "video_artifact_uid": "8c2debd0-95e1-4186-bcca-8945bd530011"\n            },\n            {\n                "cam_id": "cam02",\n                "is_ego": false,\n                "has_walkaround": false,\n                "includes_audio": true,\n                "device_type": "hero10",\n                "relative_path": "videos/cam02.mp4",\n                "video_artifact_uid": "af64afa3-c421-4214-9862-5ee22a91b3de"\n            },\n            {\n                "cam_id": "cam03",\n                "is_ego": false,\n                "has_walkaround": false,\n                "includes_audio": true,\n                "device_type": "hero10",\n                "relative_path": "videos/cam03.mp4",\n                "video_artifact_uid": "b00b5808-a8ec-4df0-a666-4d208ab3c078"\n            },\n            {\n                "cam_id": "cam04",\n                "is_ego": false,\n                "has_walkaround": false,\n                "includes_audio": true,\n                "device_type": "hero10",\n                "relative_path": "videos/cam04.mp4",\n                "video_artifact_uid": "7caeffe0-61a4-4360-aeaa-f6cd925a7d6e"\n            },\n            {\n                "cam_id": "moblie",\n                "is_ego": false,\n                "has_walkaround": false,\n                "includes_audio": true,\n                "device_type": "hero10",\n                "relative_path": "videos/moblie.mp4",\n                "video_artifact_uid": "20ae64bd-10a7-44ca-9c29-3e3d19a4fe6e"\n            }\n        ],\n        "timesync_validated": true, # whether the timesync has been validated\n        "validated": true  # where we have validated the capture & timesync\n\n        # book-keeping/debugging uids\n        "timesync_uid": "f66bd964-1bc1-4da5-a55f-4d5fc770db60",\n        "capture_uid": "d37b73eb-fa42-43a6-8115-56832996ebd7",\n    },\n    # more captures here\n]\n')))}u.isMDXComponent=!0}}]);