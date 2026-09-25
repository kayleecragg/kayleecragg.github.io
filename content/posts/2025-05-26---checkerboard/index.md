---
title: "Tennis Checkerboard"
date: "2025-05-26T14:40:32.169Z"
template: "post"
draft: false
slug: "/projects/checkerboard"
category: "Projects"
tags:
  - "development"
  - "stan"
description: "HTML web app coupled with a Javascript server hosted on Vercel. (Making a project in one shift)"
socialImage: "./checkerboard.png"
---
<figure style="text-align: center;">
  <img src="/checkerboard2.png" alt="wip title page" />
  <figcaption>HTML web app coupled with a Node server hosted on Vercel</figcaption><br>
  <b><div style="display: flex; justify-content: center; gap: 1rem;">
    <a href="https://kayleecragg.github.io/tennis/" target="_blank">Website</a>
  </div>
  <b>
</figure>

- Developed a real-time tennis tournament checkerboard web application using **HTML/CSS/JavaScript** that aggregates live match data from a custom-made API (hosted on **Vercel**).
- Able to give notifications when a match changes court or players.
- Widely used by my company’s live operations team during large tennis tournaments to keep up to date on court and player changes, as well as to keep track of the matches on their assigned court.

# Making a project while on shift 
## 2025


**Context:** My company broadcasts tennis grand slams. To keep up to date with the latests scores, games and players on different courts, we used to utilise a checkerboard that the grand slam organisation would provide for all broadcasters to use.

**Problem:** _The Checkerboard is down!_

<div style="display: flex; justify-content: center; gap: 40px;">
  <figure style="flex: 1; text-align: center;">
    <img src="/normal_checkerboard.png"style="width: 100%; height: auto;">
    <figcaption>5 days before the tournament started, our normal checkerboard that we used for monitoring match updates was expected to work fine</figcaption>
  </figure>
  <figure style="flex: 1; text-align: center;">
    <img src="/checkerboard_down.png" style="width: 100%; height: auto;">
    <figcaption>Come Day 1, it was broken.</figcaption>
  </figure>
</div>

How did it break? So apparently the source for the original checkerboard (SMT) was changing their licensing, and so their checkerboard just didn't work for the entirety of Roland Garros 2025.. 

Anyways, this was inconvenient for my team, so I tried looking for alternatives.

First I tried some random sports betting API coupled with another Roland Garros tennis court API. And it worked? But not very reliably? And it also didn't give me very much useful information. 
Like barely anything at all.

And then I tried to hastily slap it together with a really ugly UI.


<figure>
  <img src="/early.png" />
  <figcaption>An early version of the makeshift checkerboard, ugly UI but better than nothing</figcaption>
</figure>

- I thought surely there was a better way to get this information (and for free? I had to do a free trial for those sports betting APIs access)

- I went to Roland Garros' order of play website and inspected the networks tab, found that it was calling this API: https://www.rolandgarros.com/api/en-us/polling

<figure>
  <img src="/inspecting.jpg" />
  <figcaption>inspecting Roland Garros' order of play website</figcaption>
</figure>

- I thought maybe I could use it too, but that API had CORS protection?
- So I had to make my own server/API to call it to bypass CORs.
- tldr: roland garros has an api but webpage browser cannot access because of CORS

<figure>
  <img src="/checkerboard1.jpg" />
  <figcaption>new features: notifications for court and player changes, and dark mode</figcaption>
</figure>

<figure>
  <img src="/2025-shoutout.png" />
  <figcaption>my boss(es) were happy with my creation :)</figcaption>
</figure>

<figure>
  <img src="/checkerboard.png" />
  <figcaption>refining the UI so that it was easier to read the scores at first glance, <br>added special tags for australian players (for our specific business usecase)</figcaption>
</figure>

<!-- <figure>
  <img src="/notif.png" />
  <figcaption>Preview of what it would actually look like in action, notification system</figcaption>
</figure> -->
<!-- 
So after the first few days of me having this system up, my supervisor contacted the development team and asked if it was possible to put the site up on the wall monitors.


<figure>
  <img src="/important.png" />
  <figcaption>"It is vital" :)</figcaption>
</figure> -->

- uhh but i was hosting on my own machine using... nginx.. which brought uh multiple problems
- bad practice !!!! very very bad expose secrets
- so an engineer at work advised me to try hosting the server with vercel
- vercel server made so that bypass CORS
- vercel server queries https://www.rolandgarros.com/api/en-us/polling every time it is called by this web page (about every 1.5 seconds)

--- 

## 2026

- anyways it got reused by my team the next year (may, 2026 for roland garros) because the mis checkerboard still down since 2024..

<figure>
  <img src="/mis.png" />
  <figcaption>down since 2024 :(</figcaption>
</figure>


<figure>
  <img src="/2026-shoutout.png" />
</figure>

- improvements made recently to increase interval check from 20 seconds to 1.5 seconds (which resulted in updates to scores coming in faster 😎)
- this also allowed me to create a ad break notifier (since me company recently introduced ad breaks to customers) 
- i built another website on top of the fast time event triggers to help notify people when during the match to take ad breaks (there are specific timings)
- can't show this website for privacy purposes but!
- here is the audio cue for when to roll a break

<div align="center">
  <figure>
    <audio controls>
      <source src="bell.mp3" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>
    <figcaption>actually an a5 music note (880hz) with a sine tone and fade in/out effect</figcaption>
  </figure>
</div>

anyways yeah good outcome :)

<figure>
  <img src="/2026-april-award.png" />
  <figcaption>got nominated for a monthly award (may) :)</figcaption>
</figure>
<figure>
  <img src="/2026-award.png" />
  <figcaption>got nominated for a monthly award (june) :)</figcaption>
</figure>
<figure>
  <img src="/2026-award2.png" />
  <figcaption>won :)</figcaption>
</figure>

- update: was able to do the same thing for wimbledon