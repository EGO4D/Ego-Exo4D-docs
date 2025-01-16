"use strict";(self.webpackChunkegoexo_docs=self.webpackChunkegoexo_docs||[]).push([[2551],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=i,d=u["".concat(l,".").concat(h)]||u[h]||m[h]||a;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4973:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const a={title:"Translation"},o=void 0,s={unversionedId:"benchmarks/relations/translation",id:"benchmarks/relations/translation",title:"Translation",description:"Translate a mask in an observed egocentric view to an unobserved exocentric",source:"@site/docs/benchmarks/relations/translation.md",sourceDirName:"benchmarks/relations",slug:"/benchmarks/relations/translation",permalink:"/benchmarks/relations/translation",draft:!1,tags:[],version:"current",frontMatter:{title:"Translation"},sidebar:"tutorialSidebar",previous:{title:"Correspondence",permalink:"/benchmarks/relations/correspondence"},next:{title:"EgoPose",permalink:"/benchmarks/ego_pose/"}},l={},c=[{value:"Task definition",id:"task-definition",level:3},{value:"Metrics",id:"metrics",level:3},{value:"Baseline",id:"baseline",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Translate a mask in an observed egocentric view to an unobserved exocentric\nview (translate the segmentation mask or the pixels)."),(0,i.kt)("h3",{id:"task-definition"},"Task definition"),(0,i.kt)("p",null,"Translation task entails synthesizing a target ego clip from a given exo clip. This is decomposed into two separate tasks: ",(0,i.kt)("strong",{parentName:"p"},"ego track prediction")," and ",(0,i.kt)("strong",{parentName:"p"},"ego clip generation"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Ego track prediction requires predicting the segmentation mask of an object in the unobserved ego frames given the object masks in an observed exo clip."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"  Input:\n    - Exocentric video clip\n    - Object segmentation masks in the Exocentric view\n\n  Output:\n    - Object segmentation masks in the Egocentric view\n")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Ego clip generation must generate the image values (i.e., RGB) within the given ground-truth ego mask by making use of the exo clip and the object masks in those frames."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"  Input:\n    - Exocentric video clip\n    - Object segmentation masks in the Exocentric view\n    - Object segmentation masks in the Egocentric view\n\n  Output:\n    - RGB pixel values synthesizing object's appearance in Egocentric view\n")))),(0,i.kt)("p",null,"This decomposition effectively splits the problem into two tasks: 1) predicting the location and shape of the object in the ego clip, and 2) synthesizing its appearance given the ground-truth position."),(0,i.kt)("p",null,"For each, we also consider a variant where the pose of the ego camera with respect to the exo camera is available to use at inference time. This simplifies the problem but reduces the applicability of the method, since this information is typically not available for arbitrary third-person videos."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note that we restrict the input to include only the exo view and the object masks.  Hence the input excludes depth maps, 3D point clouds, IMU, or SLAM, which would simplify the task at the expense of general applicability on arbitrary third-person videos, since these signals are typically not available for in-the-wild video.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"The only exception is a variant of the task where the ego camera pose for all frames of the clips is given as input.")),(0,i.kt)("h3",{id:"metrics"},"Metrics"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Ego track prediction"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Location Error (LE), which we define as the normalized distance between the centroids of the predicted and ground-truth masks."),(0,i.kt)("li",{parentName:"ul"},"Intersection Over Union (IoU) between the predicted and ground-truth masks."),(0,i.kt)("li",{parentName:"ul"},"Contour Accuracy (CA), which measures mask shape similarity after translation is applied to register the centroids of the predicted and ground-truth masks."),(0,i.kt)("li",{parentName:"ul"},"Visibility Accuracy, which evaluates the ability of the method to estimate the visibility of the object in the ego view, given only exo frames as input."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Ego clip generation"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Image quality metrics: SSIM, PSNR"),(0,i.kt)("li",{parentName:"ul"},"Perceptual metrics: DISTS, LPIPS, CLIP similarity")))),(0,i.kt)("h3",{id:"baseline"},"Baseline"),(0,i.kt)("p",null,"Baseline repo: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/EGO4D/ego-exo4d-relation"},"https://github.com/EGO4D/ego-exo4d-relation")))}m.isMDXComponent=!0}}]);