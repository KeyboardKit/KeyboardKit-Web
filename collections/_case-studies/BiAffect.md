---
name:  BiAffect
title: BiAffect
subtitle: Track mental health through keystroke dynamics

image:  /assets/case-studies/biaffect/header.jpg
assets: /assets/case-studies/biaffect/article/

featured: 1
menu:
  title: Case Study Sections
  sections:
    - title: BiAffect
      items:
        - title: A Fitbit for the brain
        - title: Leveraging Keystroke Dynamics for Mental Health
        - title: Accelerometer Data
        - title: Machine Learning Analysis
        - title: Real-Time Monitoring and Feedback
        - title: Conclusion
        - title: Download
        - title: Go Further
card:
  text: A medical keyboard that tracks mental health through keystroke dynamics.
  bullets: 
    - Mental Health
    - Keylogger

alex:       https://www.linkedin.com/in/alex-leow-614849a/ 
andrew:     https://www.linkedin.com/in/drepaparella/
biaffect:   https://www.biaffect.com
article:    https://www.biaffect.com/8203biaffect-meets-the-world/tracking-mental-health-through-keystroke-dynamics-with-biaffect
faraz:      https://www.linkedin.com/in/farazhealthcare/
ieee:       https://spectrum.ieee.org/mood-tracker
mood:       http://www.moodchallenge.com/
rollingstone: https://www.rollingstone.com/culture/culture-news/teen-depression-smartphone-app-776227/
shannon:    https://www.linkedin.com/in/shannonyoung/
theja:      https://theja.org
wsj:        https://www.wsj.com/articles/can-typos-give-insight-into-your-mental-health-1539270001

podcast_apple: https://podcasts.apple.com/se/podcast/223-new-technology-transforming-bipolar-care/id1497723824?i=1000674751237&l=en-GB
podcast_spotify: https://open.spotify.com/episode/0Dw4Ug7PBzeXLD7pAE174x?si=aa6af63493c74146&nd=1&dlsi=383cb82c81b4431a
---

Say hello to [BiAffect]({{page.biaffect}}) - a medical keyboard that tracks mental health through keystroke dynamics and proud winner of the [Mood Challenge For ResearchKit]({{page.mood}}).

![BiAffect Header Image]({{page.image}})

The BiAffect team has been extensively covered for their cutting-edge work, for instance in the [Wall Street Journal]({{page.wsj}}), [Rolling Stone]({{page.rollingstone}}), and [IEEE Spectrum]({{page.ieee}}). This post will focus on how the app leverages keystroke dynamics, along with accelerometer data, to gain meaningful insights into mental health.

BiAffect began life as the prize winning entry to the [Mood Challenge For ResearchKit]({{page.mood}}). The team is led by [Alex Leow]({{page.alex}}), MD, PhD, Professor in
Psychiatry, Biomedical Engineering, & Computer Science at the University of Illinois at Chicago, senior AI/ML/MLOps expert [Theja Tulabandhula]({{page.theja}}), PhD, AI researcher and software engineer [Andrew Paparella]({{page.andrew}}), senior software
engineer [Shannon Young]({{page.shannon}}), and research specialist [Faraz Hussain]({{page.faraz}}). 


## A Fitbit for the brain

BiAffect aims to provide unique insights into mental health through the analysis of typing dynamics on smartphones. Similar to how a Fitbit helps track physical fitness, BiAffect can track mental and emotional health — like a Fitbit for the brain. Its mission is to offer a non-intrusive, continuous way of monitoring mood and cognitive changes by analyzing how people interact with their keyboards.

Imagine how a pianist’s fingers glide across the keys, each note reflecting their emotions and state of mind. Now, consider how your fingers interact with your phone’s keyboard every day. With this kind of texting becoming our primary form of communication, the keyboards on our phones have become as central to our lives as a piano is to a pianist. 

The BiAffect team believes that these interactions hold the key to understanding our mental health.

With the increasing preference for texting over talking, our phones have become essential to our daily communication. Many people spend significant time typing out messages, emails, posts, and other text rather than engaging in voice conversations or phone calls.

This shift in the way we communicate means that our keyboards are now central to how we express ourselves and connect with others. By analyzing typing patterns, we can uncover valuable insights into our mental and emotional states, making it possible to track our well-being in meaningful ways.


## Leveraging Keystroke Dynamics for Mental Health

BiAffect is based on the premise that typing patterns - how we interact with our keyboards - can reveal information about our mental and emotional states. By continuously analyzing keystroke dynamics, it can detect subtle changes that may indicate mood shifts or cognitive fluctuations.

![Core Keystroke Dynamics Feature]({{page.assets}}dynamics.jpg)


### Typing Speed

Typing speed, measured by examining the statistical distribution of flight times, can reveal changes in processing speed, a key domain of cognition. For example, a decrease can indicate depression or cognitive fatigue, while an increase could suggest heightened alertness or anxiety.


### Flight Time

Flight time is the interval between consecutive key presses. Long flight times can indicate hesitation or uncertainty, which may be linked to inattention, distraction, or cognitive overload, while shorter flight times can suggest increased urgency, anxiety, or impulsivity.

### Error Rates

Error rates refer to the frequency of corrections and typos. Higher error rates can be indicative of cognitive stress, distractions, etc., and are commonly observed during severe depression. While individual error rates may vary, significant changes over time can provide additional context when analyzed alongside other keystroke dynamics.

### Key Hold Time

Key hold time, which refers to the duration a key is pressed, can provide insights into motor function and cognitive control. Prolonged key hold times may suggest motor impairments or cognitive slowing, while shorter hold times can indicate increased motor activity or restlessness.


## Accelerometer Data

In addition to keystroke dynamics, BiAffect also incorporates accelerometer data from the user’s smartphone. This data helps capture physical movements and phone orientation information that can provide important context about the kinds of activities the user was engaged in.

![Accelerometer]({{page.assets}}accelerometer.jpg)

Some information that can be derived from accelerometer data is whether users were walking, standing, laying down, in a moving vehicle, etc. while typing on their phone


## Machine Learning Analysis

The extracted features from keystroke dynamics and accelerometer data are fed into BiAffect's machine learning models. BiAffect uses a combination of supervised and unsupervised learning techniques to identify patterns in the data.

![Machine Learning Analysis]({{page.assets}}machine-learning.jpg)

Supervised learning models are trained on labeled datasets, where the mood or cognitive state of the user is known, while unsupervised learning models can help uncover hidden structures in the data, providing insights into previously unknown patterns.


## Real-Time Monitoring and Feedback

BiAffect provides a dashboard within the app where users can monitor their typing patterns and accelerometer data. This dashboard presents the analyzed data, helping users understand their mental health trends. 

<div class="images grid col2">
  <img src="{{page.assets}}keyboard-usage.jpg" alt="Keyboard Usage" />
  <img src="{{page.assets}}daily-keyboard-activity.jpg" alt="Daily keyboard activity" />
</div>

By examining changes in their keystroke dynamics and active task scores on activities such as a Go/No-Go Reaction Time test and Trailmaking test, users can gain valuable insights into their mental state and take proactive steps to manage their well-being.


## Conclusion

BiAffect is committed to advancing mental health monitoring through innovative technology. By leveraging various keystroke dynamics such as typing speed, flight time, error rates, key hold time, along with accelerometer data and active tasks, it provides valuable insights into mental health. 

The BiAffect keyboard plays a crucial role in this task, integrating seamlessly with the app to capture and analyze metrics with precision & efficiency. By continuing to refine the algorithms and expand the feature set, BiAffect aims to make it an indispensable resource for mental health management.


## Download

[Download BiAffect]({{page.biaffect}}) today, to see how its pioneering use of keystroke dynamics can enhance your understanding of mental health.


## Go Further

This article is an adjusted version of a text written by the creators of BiAffect. For more information, links, etc. [read the full, original article here]({{page.article}}).

You can also listen to the very interesting [Live Well Bipolar podcast episode]({{page.podcast_apple}}) ([Spotify]({{page.podcast_spotify}})), where the BiAffect team talks about how they approached this topic, and how they implement many features on top of the keylogger to provide extended insights while protecting your personal information.
