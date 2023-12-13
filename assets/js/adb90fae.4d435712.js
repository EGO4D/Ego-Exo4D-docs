"use strict";(self.webpackChunkegoexo_docs=self.webpackChunkegoexo_docs||[]).push([[231],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),h=i,u=m["".concat(l,".").concat(h)]||m[h]||d[h]||o;return n?a.createElement(u,r(r({ref:t},p),{},{components:n})):a.createElement(u,r({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7963:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const o={title:"Atomic Action Descriptions",sidebar_position:5},r=void 0,s={unversionedId:"annotations/atomic_descriptions",id:"annotations/atomic_descriptions",title:"Atomic Action Descriptions",description:"Atomic Action Descriptions",source:"@site/docs/annotations/atomic_descriptions.md",sourceDirName:"annotations",slug:"/annotations/atomic_descriptions",permalink:"/annotations/atomic_descriptions",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Atomic Action Descriptions",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"EgoPose",permalink:"/annotations/ego_pose"},next:{title:"Expert Commentary",permalink:"/annotations/expert_commentary"}},l={},c=[{value:"Atomic Action Descriptions",id:"atomic-action-descriptions",level:3},{value:"Sample JSON",id:"sample-json",level:2}],p={toc:c},m="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"atomic-action-descriptions"},"Atomic Action Descriptions"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"We have released a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebookresearch/Ego4d/blob/main/notebooks/egoexo/EgoExo_Atomic_Descriptions_Tutorial.ipynb"},"Notebook Tutorial")," covering this annotation file, covering how to read the files and some analysis on the data (basic statistics, clustering of the text descriptions, and visualization of text description embeddings)")),(0,i.kt)("p",null,"Atomic Action Descriptions annotations are short & atomic descriptions describing ",(0,i.kt)("em",{parentName:"p"},"what")," is occurring throughout each take. For atomic actions ",(0,i.kt)("em",{parentName:"p"},"we ",(0,i.kt)("strong",{parentName:"em"},"define an annotation")," as a ",(0,i.kt)("strong",{parentName:"em"},"list of descriptions")," associated with ",(0,i.kt)("strong",{parentName:"em"},"an annotator")," across ",(0,i.kt)("strong",{parentName:"em"},"a take")),"."),(0,i.kt)("p",null,"Each description is associated with a single time stamp (instead of a start/end point), with each containing the following information:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"text"),": a text description describing what event or action is occurring"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"subject"),": the subject of the description\u2014either the Camera Wearer (",(0,i.kt)("inlineCode",{parentName:"li"},'"C"'),") or\nsomeone else (",(0,i.kt)("inlineCode",{parentName:"li"},'"O"'),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"best_exo"),': a label denoting which exocentric view has the best visibility of the action (the "best exo" view); in cases of multiple valid options, one of such views are chosen arbitrarily'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ego_visible"),": a binary indicator of whether the action is visible in the egocentric view\nview or not, and"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"unsure"),": a binary indicator of whether the annotator was unsure of the name of objects or actions being referred to in the text description.")),(0,i.kt)("p",null,"We asked the following of the annotators in the guidelines: "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The timepoint being marked should be within 1-2s of when the description occurs in the video."),(0,i.kt)("li",{parentName:"ol"},'The language used for the text description should be independent of other atomic  descriptions (i.e. each text description is stand-alone), e.g. an annotator should not mention "C slices the onion" and then "C continues to slice it." (\u201ccontinues\u201d refers to previous action; pronoun antecedent for \u201cit\u201d unknown)'),(0,i.kt)("li",{parentName:"ol"},'Redundancy & repetition for repetitive actions should be minimized, e.g. "C\nslices the tomato", "C slices the tomato", "C slices the tomato" should not\nbe annotated for each individual slice.'),(0,i.kt)("li",{parentName:"ol"},"We recommend, but do not enforce, that each description only contains ",(0,i.kt)("em",{parentName:"li"},"one\nverb"),". If multiple things are occurring at once, we ask annotators to split\nthis up into multiple descriptions when possible."),(0,i.kt)("li",{parentName:"ol"},"We ask annotators to not use brand names when naming objects. If they do, or\nin cases where they are unsure about what an object is called, the unsure\nflag should be marked as true (1).")),(0,i.kt)("p",null,"If a text description refers to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The camera wearer (",(0,i.kt)("inlineCode",{parentName:"li"},'subject == "C"'),"), the letter ",(0,i.kt)("inlineCode",{parentName:"li"},"C")," denotes the camera wearer\nin the sentence, e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"C transfers a plastic bag of cucumber to her left\nhand.")),(0,i.kt)("li",{parentName:"ul"},"Another person/subject (",(0,i.kt)("inlineCode",{parentName:"li"},'subject == "O"'),"): letters used to identify people are\nassigned by the annotator and are kept consistent throughout a particular\ntake; letter person identifiers across takes or annotations are not\nnecessarily consistent. For example: ",(0,i.kt)("inlineCode",{parentName:"li"},"The man A catches the ball with his\nright hand"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"A")," will refer to the same person in other descriptions for the\nsame annotation;  another annotator may use a different letter for this same\nperson, or the same letter for a different person in a different take.")),(0,i.kt)("p",null,'The annotation file is grouped by each take\'s take_uid, where each take grouping\ncontains one or more annotations. Each annotation for a take has been annotated\nby a unique annotator from start to finish. We do not create sub-clips of the\ntake, i.e. the annotator watches the entire video they are describing. Each\nannotator annotates the take video using a pre-rendered collage video, which can\nbe seen as the "collage" video ',(0,i.kt)("a",{parentName:"p",href:"https://visualize.ego4d-data.org/?v=%22EgoExo+v1%22"},"using the visualization\ntool")," or via downloading\ncollage videos."),(0,i.kt)("p",null,"The following JSON string shows a sample annotation for one of the take. Here is a brief description of the most relevant fields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"descriptions")),": a list of time-point descriptions, where each description\ncontains:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"timestamp")),": the timestamp of the description"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"text")),": the text of the description"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"subject")),": the string ",(0,i.kt)("inlineCode",{parentName:"li"},'"C"')," or ",(0,i.kt)("inlineCode",{parentName:"li"},'"O"')," to indicate that subject of the\ndescription is referring to the Camera Wearer (",(0,i.kt)("inlineCode",{parentName:"li"},'"C"'),") or another person\n(",(0,i.kt)("inlineCode",{parentName:"li"},'"O"'),") of the description is referring to the Camera Wearer (C) or "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"ego_visible")),": a boolean to describe whether the action (",(0,i.kt)("inlineCode",{parentName:"li"},"text"),") is\nvisible from the egocentric view"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"best_exo")),": what exo-centric camera/view is the most informative",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"cam_id")),": the camera string that the ",(0,i.kt)("inlineCode",{parentName:"li"},"takes.json")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"captures.json")," files refer to"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"rejected")),": whether the annotation job was rejected"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"reject_reason")),": a string to describe why the annotation job was rejected"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"annotator_id")),": a unique string to represent the annotator"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"annotation_uid")),": a unique ID to identify an annotation")),(0,i.kt)("h2",{id:"sample-json"},"Sample JSON"),(0,i.kt)("p",null,"Here is a JSON snippet showing a sample annotation, where the take\n",(0,i.kt)("inlineCode",{parentName:"p"},"3c489f86-8896-4c86-8a5a-929999799d36")," has at least two ",(0,i.kt)("em",{parentName:"p"},"annotations")," (as\ndefined above):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "annotations": {\n        "3c489f86-8896-4c86-8a5a-929999799d36": [\n            {\n                "annotation_uid": "fe6b4107-ecdb-4e90-93c5-3df74385bda2",\n                "annotator_id": "5284063695022975",\n                "rejected": false,\n                "reject_reason": null,\n                "descriptions": [\n                    {\n                        "text": "C moves his right hand.",\n                        "timestamp": 0.03831,\n                        "narration_subject": "C",\n                        "ego_visible": false,\n                        "best_exo": {\n                            "raw_cam_id": "1",\n                            "cam_id": "cam01"\n                        },\n                        "unsure": false\n                    },\n                    {\n                        "text": "C moves his right hand.",\n                        "timestamp": 3.94343,\n                        "narration_subject": "C",\n                        "ego_visible": false,\n                        "best_exo": {\n                            "raw_cam_id": "1",\n                            "cam_id": "cam01"\n                        },\n                        "unsure": false\n                    },\n                    {\n                        "text": "C touches the screw of the hub with his right hand.",\n                        "timestamp": 18.48356,\n                        "narration_subject": "C",\n                        "ego_visible": true,\n                        "best_exo": {\n                            "raw_cam_id": "2",\n                            "cam_id": "cam02"\n                        },\n                        "unsure": false\n                    }\n                ],\n                ... other fields\n            },\n            {\n                "annotation_uid": "2dbd61e6-8f61-49a7-9aec-de327572327a",\n                "annotator_id": "6109476425845844",\n                "rejected": false,\n                "reject_reason": null,\n                "descriptions": [\n                    {\n                        "text": "The Man X walks towards C.",\n                        "timestamp": 0.76281,\n                        "narration_subject": "O",\n                        "ego_visible": "1",\n                        "best_exo": {\n                            "raw_cam_id": "2",\n                            "cam_id": "cam02"\n                        },\n                        "unsure": "0"\n                    },\n                    {\n                        "text": "C leans on his left leg.",\n                        "timestamp": 3.001,\n                        "narration_subject": "C",\n                        "ego_visible": "0",\n                        "best_exo": {\n                            "raw_cam_id": "2",\n                            "cam_id": "cam02"\n                        },\n                        "unsure": "0"\n                    }\n                ],\n                ... other fields\n            },\n            ...\n        ],\n        <take_uid2>: {<same-schema as above>},\n        ...\n    },\n    ... other fields\n}\n')))}d.isMDXComponent=!0}}]);