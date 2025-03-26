"use strict";(self.webpackChunkegoexo_docs=self.webpackChunkegoexo_docs||[]).push([[4359],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(a),d=r,m=h["".concat(s,".").concat(d)]||h[d]||u[d]||i;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9138:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={title:"EgoExo4D Challenge 2025",sidebar_position:99},o="EgoExo4D Challenge 2025",l={unversionedId:"challenge",id:"challenge",title:"EgoExo4D Challenge 2025",description:"Ego-Exo4D is a diverse, large-scale multi-modal multi view video dataset and benchmark challenge. Ego-Exo4D centers around simultaneously-captured ego-centric and exocentric video of skilled human activities (e.g., sports, music, dance, bike repair).",source:"@site/docs/challenge.md",sourceDirName:".",slug:"/challenge",permalink:"/challenge",draft:!1,tags:[],version:"current",sidebarPosition:99,frontMatter:{title:"EgoExo4D Challenge 2025",sidebar_position:99},sidebar:"tutorialSidebar",previous:{title:"Tutorial 3: Undistort frames and overlay annotations",permalink:"/tutorials/undistort"},next:{title:"Change Log",permalink:"/changelog"}},s={},p=[{value:"EgoPose Benchmark",id:"egopose-benchmark",level:3},{value:"Relations Benchmark",id:"relations-benchmark",level:3},{value:"Keystep Benchmark",id:"keystep-benchmark",level:3},{value:"Proficiency Benchmark",id:"proficiency-benchmark",level:3},{value:"Dataset",id:"dataset",level:2},{value:"Participation Guidelines",id:"participation-guidelines",level:2},{value:"Dates",id:"dates",level:2},{value:"Competition Rules and Prize Information",id:"competition-rules-and-prize-information",level:2},{value:"Challenge Reports",id:"challenge-reports",level:2},{value:"Acknowledgements",id:"acknowledgements",level:2},{value:"Organizers",id:"organizers",level:3},{value:"Past Challenges / Winners",id:"past-challenges--winners",level:2}],c={toc:p},h="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(h,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"egoexo4d-challenge-2025"},"EgoExo4D Challenge 2025"),(0,r.kt)("p",null,"Ego-Exo4D is a diverse, large-scale multi-modal multi view video dataset and benchmark challenge. Ego-Exo4D centers around simultaneously-captured ego-centric and exocentric video of skilled human activities (e.g., sports, music, dance, bike repair).  "),(0,r.kt)("p",null,"At ",(0,r.kt)("a",{parentName:"p",href:"https://egovis.github.io/cvpr25/"},"EgoVis")," workshop during CVPR 2025, we will host ",(0,r.kt)("strong",{parentName:"p"},"6")," challenges representing EgoExo4D benchmarks. Please find details below on the challenges:"),(0,r.kt)("h3",{id:"egopose-benchmark"},"EgoPose Benchmark"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://eval.ai/web/challenges/challenge-page/2245/overview"},"Ego-Pose Body"),": Given an egocentric video, estimate the 3D body pose of the camera-wearer. Specifically, predict the 3D position of the 17 annotated body joints for each frame. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/EGO4D/ego-exo4d-egopose/tree/main/bodypose"},"[github]")," ",(0,r.kt)("a",{parentName:"li",href:"https://docs.ego-exo4d-data.org/tutorials/"},"[tutorials]")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://eval.ai/web/challenges/challenge-page/2249/overview"},"Ego-Pose Hands"),": Estimate the 3D locations of the defined hand joints for visible hand(s). Specifically, estimate the (x,y,z) coordinates of each joint in the egocentric coordinate frame. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/EGO4D/ego-exo4d-egopose/tree/main/handpose"},"[github]")," ",(0,r.kt)("a",{parentName:"li",href:"https://docs.ego-exo4d-data.org/tutorials/"},"[tutorials]"))),(0,r.kt)("h3",{id:"relations-benchmark"},"Relations Benchmark"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://eval.ai/web/challenges/challenge-page/2288/overview"},"Correspondence"),": Given a pair of timesynchronized egocentric and exocentric videos, as well as a query object track in one of the views, the goal is to output the corresponding mask for the same object instance in the other view for all frames where the object is visible in both views. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/EGO4D/ego-exo4d-relation/tree/main/correspondence/"},"[github]"))),(0,r.kt)("h3",{id:"keystep-benchmark"},"Keystep Benchmark"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://eval.ai/web/challenges/challenge-page/2273/overview"},"Fine-grained Keystep Recognition"),": The objective of this task is to predict the keystep label for a trimmed egocentric video clip. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/EGO4D/ego-exo4d-keystep/tree/main/fine_grained/"},"[github]")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://eval.ai/web/challenges/challenge-page/2286/overview"},"Procedure Understanding"),": The objective of this task is to infer a procedure's underlying structure from observing natural videos of subjects performing the procedure. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/EGO4D/ego-exo4d-keystep/tree/main/procedure_understanding"},"[github]"))),(0,r.kt)("h3",{id:"proficiency-benchmark"},"Proficiency Benchmark"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://eval.ai/web/challenges/challenge-page/2291/overview"},"Demonstrator Proficiency"),":Given synchronized egocentric and exocentric video of a demonstrator performing a task, classify the proficiency skill level of the demonstrator. ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/EGO4D/ego-exo4d-proficiency/blob/main/demonstrator_proficiency/"},"github"))),(0,r.kt)("p",null,"Other EgoExo4D challenges which are not part of CVPR 2025 workshop remain open on EvalAI website for submissions but are not eligible for prizes."),(0,r.kt)("h2",{id:"dataset"},"Dataset"),(0,r.kt)("p",null,"EgoExo4D challenge participants will be using EgoExo4D dataset for these challenges. Please find the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.ego-exo4d-data.org/"},"documentation")," here about the dataset."),(0,r.kt)("h2",{id:"participation-guidelines"},"Participation Guidelines"),(0,r.kt)("p",null,"Participate in the contest by registering on the ",(0,r.kt)("a",{parentName:"p",href:"https://eval.ai/"},"EvalAI challenge page")," and creating a team. All participants must register as a part of a \u201cparticipating team\u201d on EvalAI to ensure the submission limits are honored. Participants will upload their predictions in the format specified for the specific challenge, and will be evaluated on AWS instances by comparing to ground truth predictions. Instructions for training, local evaluation, and online submission are provided at EvalAI. Please refer to the individual EvalAI pages for each challenge for submission guidelines, task specifications, and evaluation criteria."),(0,r.kt)("h2",{id:"dates"},"Dates"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"EgoExo4D challenges will launch on March 5, 2025 with the leaderboard closing on May 19, 2025. "),(0,r.kt)("li",{parentName:"ul"},"Winners will be announced at the ",(0,r.kt)("a",{parentName:"li",href:"https://egovis.github.io/cvpr24/"},"Second Joint Egocentric Vision Workshop")," at CVPR 2025. ")),(0,r.kt)("h2",{id:"competition-rules-and-prize-information"},"Competition Rules and Prize Information"),(0,r.kt)("p",null,"Competition rules can be found ",(0,r.kt)("a",{parentName:"p",href:"pathname:///tc.pdf"},"here"),". Additionally, we are thrilled that FAIR is able to offer the following prize thresholds for challenges:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"First place: $500"),(0,r.kt)("li",{parentName:"ul"},"Second place: $300"),(0,r.kt)("li",{parentName:"ul"},"Third place: $200")),(0,r.kt)("h2",{id:"challenge-reports"},"Challenge Reports"),(0,r.kt)("p",null,"In addition to the submission on EvalAI, participants must submit a report describing their method to the workshop CMT ",(0,r.kt)("a",{parentName:"p",href:"https://cmt3.research.microsoft.com/EgoVis2025/"},"link"),". In addition to your method and results, please remember to include examples of positive and negative results (limitations) of your model. These validation reports will be evaluated by challenge hosts from the Ego4D consortium before winner determination can be made. Similarly, challenge validation reports, research code from winning entries, and names of participants from the winning teams for all successful submissions must be shared publicly with the research community.  More details can be found on the ",(0,r.kt)("a",{parentName:"p",href:"https://egovis.github.io/cvpr25/"},"EgoVis workshop page"),". "),(0,r.kt)("h2",{id:"acknowledgements"},"Acknowledgements"),(0,r.kt)("p",null,"The EgoExo4D challenges would not have been possible without the infrastructure and support of the ",(0,r.kt)("a",{parentName:"p",href:"https://eval.ai/team"},"EvalAI team"),". Thank you!"),(0,r.kt)("h3",{id:"organizers"},"Organizers"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Xizi Wang")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Suyog Jain")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Andrew Westbury")),(0,r.kt)("li",{parentName:"ul"},"Tushar Nagarajan"),(0,r.kt)("li",{parentName:"ul"},"Sherry Xue "),(0,r.kt)("li",{parentName:"ul"},"Francesco Ragusa "),(0,r.kt)("li",{parentName:"ul"},"Seminara Luigi"),(0,r.kt)("li",{parentName:"ul"},"Jinxu Zhang"),(0,r.kt)("li",{parentName:"ul"},"Shan Shu"),(0,r.kt)("li",{parentName:"ul"},"Gabriel P\xe9rez Santamaria"),(0,r.kt)("li",{parentName:"ul"},"Juanita Puentes"),(0,r.kt)("li",{parentName:"ul"},"Maria Camila Escobar Palomeque"),(0,r.kt)("li",{parentName:"ul"},"Arjun Somayazulu"),(0,r.kt)("li",{parentName:"ul"},"Sanjay Haresh"),(0,r.kt)("li",{parentName:"ul"},"Yale Song"),(0,r.kt)("li",{parentName:"ul"},"Antonino Furnari"),(0,r.kt)("li",{parentName:"ul"},"Manolis Savva"),(0,r.kt)("li",{parentName:"ul"},"Pablo Arbelaez"),(0,r.kt)("li",{parentName:"ul"},"Jianbo Shi"),(0,r.kt)("li",{parentName:"ul"},"Kristen Grauman")),(0,r.kt)("h2",{id:"past-challenges--winners"},"Past Challenges / Winners"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://egovis.github.io/cvpr24/"},"CVPR Workshop 2024"))," (June 17, 2024)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://ego4d-data.org/workshops/cvpr23/"},"CVPR Workshop 2023"))," (June 19, 2023)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://ego4d-data.org/workshops/eccv22/"},"ECCV Workshop 2022"))," (Oct 24, 2022)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://ego4d-data.org/workshops/cvpr22/"},"CVPR Workshop 2022"))," (June 19, 2022)"))}u.isMDXComponent=!0}}]);