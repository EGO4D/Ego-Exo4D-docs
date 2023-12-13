"use strict";(self.webpackChunkegoexo_docs=self.webpackChunkegoexo_docs||[]).push([[80],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(a),c=o,k=m["".concat(p,".").concat(c)]||m[c]||u[c]||r;return a?n.createElement(k,i(i({ref:t},d),{},{components:a})):n.createElement(k,i({ref:t},d))}));function k(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5219:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=a(7462),o=(a(7294),a(3905));const r={title:"CLI Downloader",sidebar_position:5},i=void 0,l={unversionedId:"download",id:"download",title:"CLI Downloader",description:"As a pre-requisite, you must:",source:"@site/docs/download.md",sourceDirName:".",slug:"/download",permalink:"/download",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"CLI Downloader",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Proficiency Estimation",permalink:"/benchmarks/proficiency_estimation"},next:{title:"Challenge",permalink:"/challenge"}},p={},s=[{value:"Recommended Dataset",id:"recommended-dataset",level:3},{value:"Other Examples",id:"other-examples",level:4}],d={toc:s},m="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"As a pre-requisite, you must:"),(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},"Make sure you ",(0,o.kt)("strong",{parentName:"li"},"have a License Agreement"),". If you don't, please refer to the\n",(0,o.kt)("a",{parentName:"li",href:"../getting-started"},"Getting Started")," page. ",(0,o.kt)("em",{parentName:"li"},"The License Agreement process takes 2 days: so do it early!")),(0,o.kt)("li",{parentName:"ol"},"Have ",(0,o.kt)("strong",{parentName:"li"},"setup or installed the Ego4D")," codebase, please refer to the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/facebookresearch/Ego4d?tab=readme-ov-file#setup"},"Ego4D\nGithub README"),"."))),(0,o.kt)("p",null,'The dataset is large, due to this it is partitioned into separate "parts"\n(subsets). You may choose to download one or more parts of the dataset with\noptional filters in order to reduce how much you need to download.'),(0,o.kt)("p",null,"The different parts of the dataset include: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"metadata")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"annotations")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"takes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"captures")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"trajectory")),(0,o.kt)("li",{parentName:"ul"},"eye_gaze"),(0,o.kt)("li",{parentName:"ul"},"point_cloud"),(0,o.kt)("li",{parentName:"ul"},"capture_raw_stitched_videos"),(0,o.kt)("li",{parentName:"ul"},"capture_raw_vrs"),(0,o.kt)("li",{parentName:"ul"},"ego_pose_pseudo_gt")),(0,o.kt)("p",null,"The parts in bold refer to the ",(0,o.kt)("em",{parentName:"p"},"recommended set"),". You can additionally filter based on:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Data relevant to a specific ",(0,o.kt)("a",{parentName:"li",href:"../benchmarks"},"benchmarks"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"--benchmarks <benchmark_name>"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"--benchmarks keystep relations")))),(0,o.kt)("li",{parentName:"ul"},"Dataset splits (train/val/test): ",(0,o.kt)("inlineCode",{parentName:"li"},"--splits <s1> <s2> ..."),", e.g.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--splits train")," for data that only lies in the training set"))),(0,o.kt)("li",{parentName:"ul"},"Egocentric or exocentric related data (videos, trajectory)",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Use ",(0,o.kt)("inlineCode",{parentName:"li"},"--views exo")," for only exocentric, ",(0,o.kt)("inlineCode",{parentName:"li"},"--views ego")," for only\negocentric, or ",(0,o.kt)("inlineCode",{parentName:"li"},"--views ego exo")," for both. Defaults to both."))),(0,o.kt)("li",{parentName:"ul"},"Specific takes or captures to download: ",(0,o.kt)("inlineCode",{parentName:"li"},"--uids")),(0,o.kt)("li",{parentName:"ul"},"Universities (use ",(0,o.kt)("inlineCode",{parentName:"li"},"--universities")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"-u"),")",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"-u cmu unc sfu"))))),(0,o.kt)("p",null,"Please refer to the Download ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebookresearch/Ego4d/tree/main/ego4d/egoexo/download"},"CLI README")," or use the flag ",(0,o.kt)("inlineCode",{parentName:"p"},"--help")," for the latest parts of the dataset and additional usage of the dataset."),(0,o.kt)("h1",{id:"download-dataset-c"},"Download The Data"),(0,o.kt)("p",null,"Below are some examples on how to run the downloader CLI with common options:"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"As noted above, you can use ",(0,o.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"--help")," to view all the up-to-date options"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"egoexo --help\n"))),(0,o.kt)("h3",{id:"recommended-dataset"},"Recommended Dataset"),(0,o.kt)("p",null,"Download suggested dataset parts for all the takes present."),(0,o.kt)("admonition",{title:"This will download ~14TiB of data",type:"warning"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"egoexo -o <out-dir>\n")),(0,o.kt)("h4",{id:"other-examples"},"Other Examples"),(0,o.kt)("p",null,"Download all annotations & metadata:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"egoexo -o <out-dir> --parts annotations metadata\n")),(0,o.kt)("p",null,"Download all point clouds, eye gaze and trajectories:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"egoexo -o <out-dir> --parts point_cloud eye_gaze trajectory\n")),(0,o.kt)("p",null,"Download all point clouds, eye gaze and trajectories:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"egoexo -o <out-dir> --parts point_cloud eye_gaze trajectory\n")))}u.isMDXComponent=!0}}]);