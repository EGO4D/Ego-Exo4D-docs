---
title: EgoExo4D Challenge 2025
sidebar_position: 99
---

# Ego4D and EgoExo4D Challenge 2025

## **Overview**

At [EgoVis](https://egovis.github.io/cvpr25/) workshop during CVPR 2025, we will host **14** challenges representing Ego4D and EgoExo4D benchmarks. This year we will have **9** challenges from Ego4D and **5** challenges from EgoExo4D dataset. Please find details below on the challenges:

## **Ego4D challenges**


### [Episodic memory](./benchmarks/episodic-memory.md):

* [Visual queries with 2D localization (VQ2D)](https://eval.ai/web/challenges/challenge-page/1843/overview): Given an egocentric video clip and an image crop depicting the query object, return the most recent occurrence of the object in the input video, in terms of contiguous bounding boxes (2D + temporal localization). 
    * Quickstart: [![Open in Colab][Colab Badge]](https://colab.research.google.com/drive/1vtVOQzLarBCspQjH5RtHZ8qzH0VZxrmZ?usp=sharing)
* [Natural language queries (NLQ)](https://eval.ai/web/challenges/challenge-page/1629/overview): Given a video clip and a query expressed in natural language, localize the temporal window within all the video history where the answer to the question is evident.
    * Quickstart: [![Open in Colab][Colab Badge]](https://colab.research.google.com/drive/1S1LTplak-Fno3lMumCLoIfzYsx_TfNes?usp=sharing)
* [Moments queries (MQ)](https://eval.ai/web/challenges/challenge-page/1626/overview): Given an egocentric video and an activity name (e.g., a “moment”), localize all instances of that activity in the past video
* [Goal Step](https://eval.ai/web/challenges/challenge-page/2188/overview): Given an untrimmed egocentric video, identify the temporal action segment corresponding to a natural language description of the step. Specifically, predict the (start_time, end_time) for a given keystep description.
* [Ego Schema](https://eval.ai/web/challenges/challenge-page/2238/overview): Given a very long-form video, evaluate the capabilities of modern vision and language systems.



### [Social Understanding](./benchmarks/social.md):

* [Looking at me](https://eval.ai/web/challenges/challenge-page/1624/overview): Given an egocentric video clip, identify whether someone in the scene is looking at the camera wearer.
* [Talking to me](https://eval.ai/web/challenges/challenge-page/1625/overview): Given an egocentric video clip, identify whether someone in the scene is talking to the camera wearer.


### [Forecasting](./benchmarks/forecasting.md):


* [Short Term object interaction anticipation](https://eval.ai/web/challenges/challenge-page/1623/overview): Given a video clip, predict the next active objects, and, for each of them, predict the next action, and the time to contact.
    * Quickstart: [![Open in Colab][Colab Badge]](https://colab.research.google.com/drive/1Ok_6F1O6K8kX1S4sEnU62HoOBw_CPngR?usp=sharing)
* [Long-term activity prediction](https://eval.ai/web/challenges/challenge-page/1598/overview): Given a video clip, the goal is to predict what sequence of activities will happen in the future. For example, after kneading dough, list the actions that the baker will do next. 

Other Ego4D challenges which are not part of CVPR 2025 workshop remain open on EvalAI website for submissions but are not eligible for prizes.

## **EgoExo4D challenges**

Ego-Exo4D is a diverse, large-scale multi-modal multi view video dataset and benchmark challenge. Ego-Exo4D centers around simultaneously-captured ego-centric and exocentric video of skilled human activities (e.g., sports, music, dance, bike repair). 

Here are the specific challenge tracks we will host at [EgoVis workshop](https://egovis.github.io/cvpr25/) during CVPR 2025.

* [Ego-Pose Body](https://eval.ai/web/challenges/challenge-page/2245/overview): Given an egocentric video, estimate the 3D body pose of the camera-wearer. Specifically, predict the 3D position of the 17 annotated body joints for each frame.
    * Refer to the [github](https://github.com/EGO4D/ego-exo4d-egopose/tree/main/bodypose) repository and EgoExo4D [tutorials](https://docs.ego-exo4d-data.org/tutorials/) to get started.

* [Ego-Pose Hands](https://eval.ai/web/challenges/challenge-page/2249/overview): Estimate the 3D locations of the defined hand joints for visible hand(s). Specifically, estimate the (x,y,z) coordinates of each joint in the egocentric coordinate frame.
    * Refer to the [github](https://github.com/EGO4D/ego-exo4d-egopose/tree/main/handpose) repository and EgoExo4D [tutorials](https://docs.ego-exo4d-data.org/tutorials/) to get started.

* [Correspondence](https://eval.ai/web/challenges/challenge-page/2288/overview): Given a pair of timesynchronized egocentric and exocentric videos, as well as a query object track in one of the views, the goal is to output the corresponding mask for the same object instance in the other view for all frames where the object is visible in both views.
    * Refer to the [github](https://github.com/EGO4D/ego-exo4d-relation/tree/main/correspondence/) repository to get started.

* [Fine-grained Keystep Recognition](https://eval.ai/web/challenges/challenge-page/2273/overview): The objective of this task is to predict the keystep label for a trimmed egocentric video clip.
    * Refer to the [github](https://github.com/EGO4D/ego-exo4d-keystep/tree/main/fine_grained/) repository to get started.

* [Demonstrator Proficiency](https://eval.ai/web/challenges/challenge-page/2291/overview):Given synchronized egocentric and exocentric video of a demonstrator performing a task, classify the proficiency skill level of the demonstrator.
    * Refer to the [github](https://github.com/EGO4D/ego-exo4d-proficiency/blob/main/demonstrator_proficiency/) repository to get started.

Other EgoExo4D challenges which are not part of CVPR 2025 workshop remain open on EvalAI website for submissions but are not eligible for prizes.


## Dataset

Ego4D challenge participants will use Ego4D’s annotated data set of more than 3,670 hours of video data, capturing the daily-life scenarios of more than 900 unique individuals from nine different countries around the world. Unique train, validation and unannotated test sets are available to download per challenge at [https://ego4d-data.org/docs/](https://ego4d-data.org/docs/). This year's challenge we will continue to use Ego4D v2.0 which contains ~2X train and val annotations for Forecasting, Hands & Objects and NLQ, a number of corrections and usability enhancements, and two new related dataset enhancements (Ego Schema and Goal Step). The test set remains the same as previous versions of the challenge. More details can be found [here](https://ego4d-data.org/docs/updates/). 


EgoExo4D challenge participants will be using EgoExo4D dataset for these challenges. Please find the [documentation](https://docs.ego-exo4d-data.org/) here about the dataset.


## Participation Guidelines


Participate in the contest by registering on the [EvalAI challenge page](https://eval.ai/) and creating a team. All participants must register as a part of a “participating team” on EvalAI to ensure the submission limits are honored. Participants will upload their predictions in the format specified for the specific challenge, and will be evaluated on AWS instances by comparing to ground truth predictions. Instructions for training, local evaluation, and online submission are provided at EvalAI. Please refer to the individual EvalAI pages for each challenge for submission guidelines, task specifications, and evaluation criteria.


## Dates


* Ego4D challenges will launch on March 5, 2025 with the leaderboard closing on May 19, 2025. 
* EgoExo4D challenges will launch on March 5, 2025 with the leaderboard closing on May 19, 2025. 
* Winners for both will be announced at the [Second Joint Egocentric Vision Workshop](https://egovis.github.io/cvpr24/) at CVPR 2025. 


## Competition Rules and Prize Information

Competition rules can be found [here](pathname:///tc.pdf). Additionally, we are thrilled that FAIR is able to offer the following prize thresholds for challenges:

* First place: $500
* Second place: $300
* Third place: $200


## Challenge Reports


In addition to the submission on EvalAI, participants must submit a report describing their method to the workshop CMT [link](https://cmt3.research.microsoft.com/EgoVis2025/). In addition to your method and results, please remember to include examples of positive and negative results (limitations) of your model. These validation reports will be evaluated by challenge hosts from the Ego4D consortium before winner determination can be made. Similarly, challenge validation reports, research code from winning entries, and names of participants from the winning teams for all successful submissions must be shared publicly with the research community.  More details can be found on the [EgoVis workshop page](https://egovis.github.io/cvpr25/). 


## Acknowledgements


The Ego4D and EgoExo4D challenges would not have been possible without the infrastructure and support of the [EvalAI team](https://eval.ai/team). Thank you!


### Organizers

- **Xizi Wang**
- **Suyog Jain**
- **Andrew Westbury**
- Chen Zhao
- Merey Ramazanova
- Francesco Ragusa 
- Tushar Nagarajan
- Karttikeya Mangalam
- Raiymbek Akshulakov
- Sherry Xue 
- Jinxu Zhang
- Shan Shu
- Gabriel Pérez Santamaria
- Juanita Puentes
- Maria Camila Escobar Palomeque
- Arjun Somayazulu
- Sanjay Haresh
- Yale Song
- Manolis Savva
- Giovanni Maria Farinella
- Pablo Arbelaez
- Jianbo Shi
- Kristen Grauman


## Past Challenges / Winners
**[CVPR Workshop 2024](https://egovis.github.io/cvpr24/)** (June 17, 2024)

**[CVPR Workshop 2023](https://ego4d-data.org/workshops/cvpr23/  )** (June 19, 2023)

**[ECCV Workshop 2022](https://ego4d-data.org/workshops/eccv22/)** (Oct 24, 2022)

**[CVPR Workshop 2022](https://ego4d-data.org/workshops/cvpr22/)** (June 19, 2022)


[Colab Badge]:          https://colab.research.google.com/assets/colab-badge.svg



<!-- ### Not running:
* [State change object detection](https://eval.ai/web/challenges/challenge-page/1632/overview): Given an egocentric video clip, identify the objects whose states are changing and outline them with bounding boxes.


* [Audio-visual localization](https://eval.ai/web/challenges/challenge-page/1633/overview): Given an egocentric video clip, localize the speakers in the visual field of view.


* [Audio-only Diarization Challenge](https://eval.ai/web/challenges/challenge-page/1641/overview): Given an egocentric video clip, identify which person spoke and when they spoke based on audio alone.


* [Hand forecasting](https://eval.ai/web/challenges/challenge-page/1630/overview): Given a short preceding video clip, predict where the hand will be visible in the future, in terms of a bounding box center in keyframes.
* [Object state change classification](https://eval.ai/web/challenges/challenge-page/1627/overview): Given an egocentric video clip, indicate the presence or absence of an object state change.
* [Audio-visual speaker diarization](https://eval.ai/web/challenges/challenge-page/1640/overview): Given an egocentric video clip, identify which person spoke and when they spoke.

* PACO Zero-Shot:](https://eval.ai/web/challenges/challenge-page/1970/overview) Retrieve the bounding box of a specific object instance from a dataset, based on a textual query describing the instance. Query is composed using object and part attributes describing the object of interest. 



Competition rules can be found [here](https://ego4d-interactive-fig1.s3.eu-west-2.amazonaws.com/tc.pdf). 
-->

