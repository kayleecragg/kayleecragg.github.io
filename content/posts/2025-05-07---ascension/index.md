---
title: "Ascension v0.0.1"
date: "2025-05-07T11:46:37.121Z"
template: "post"
draft: false
slug: "/posts/ascensionv0.0.1"
category: "Projects"
tags:
  - "Projects"
description: "Roguelike 2D Game made in Lua and with Love2D adapted from the novel TGCF"
socialImage: "./ascension.png"
---
<figure style="text-align: center;">
  <img src="/ascension.png" alt="wip title page" />
  <figcaption>Roguelike Game adapted from the novel TGCF</figcaption><br>
  <b><div style="display: flex; justify-content: center; gap: 1rem;">
    <a href="https://github.com/kayleecragg/ascension/releases/download/v0.0.1/Ascension_32.zip" target="_blank">Play (Windows)</a>
    <a href="https://github.com/kayleecragg/ascension/releases/download/beta/Ascension_osx.zip" target="_blank">Play (Mac, older version)</a>
    <a href="https://github.com/kayleecragg/ascension" target="_blank">Github</a>
  </div>
  <b>
</figure>

- Built a 2D narrative action game in <strong>Lua’s Löve2D</strong> framework, featuring real-time combat with melee, ranged, teleport, and dodge mechanics, plus wave-based scaling enemies and branching dialogue sequences.
- Made this game with a [friend](https://github.com/its-naptime), you can watch a video of our progress [here](https://youtu.be/FHOgZQkW0RY).

**Disclaimer:** Spoilers for the novel and game upcoming.

## Background

Having recently finished reading all 8 volumes of the very popular Chinese danmei novel series [**Heaven Official's Blessings**](https://en.wikipedia.org/wiki/Heaven_Official%27s_Blessing), *(aka 天官赐福 Tiān Guān Cì Fú)* I was moved by how Hua Cheng gave up his life twice in service to his God, spent 800 years searching for him, and remained his sole believer when all others had abandoned him.

I wished they explored more of his backstory and his point of view. Here are some excerpts from the novel to show you how interesting of a character he was:


> At one point in his time as a Supreme, Hua Cheng challenged 35 gods. 33 of them were those that chased away Xie Lian from the spiritual mountain, as well as Mu Qing and Feng Xin. If they won against him, he would give them his ashes to scatter. If he won, they would have to step down from Heaven. Mu Qing and Feng Xin both ignored the challenge, but the others took it on as they believed themselves to be superior. He fought the Martial Gods and debated against the Civil Gods, resulting in their utter defeat.

>However, the gods refused to honor their agreement, pretending that the fight and the preceding agreement never took place. Hua Cheng decided to help them fulfill their promise by burning down the 33 gods' temples in the human realm. This act caused an uproar and Hua Cheng got the moniker "Heaven's Scourge".
---
> After the defeat of the martial gods, it came time for the civil gods to rise to the challenge. Surely Hua Cheng could fight, but not debate? Unfortunately for the civil gods, they could not defeat him. Hua Cheng could recite the classics and debate the contemporaries. He was sometimes polite, sometimes vicious, sometimes unyielding, sometimes incisive, and sometimes quibbling. He was impenetrably sharp, his arguments flawless. He verbally abused the civil gods from top to bottom, past to present, and infuriated them so much that they puked blood and washed the skies red.

I wanted to make a game from his perspective. I also was inspired by twitter user [@akkaccel's](https://x.com/akkaccel/) concept art of a potential TGCF game. 

<figure>
  <a href="https://x.com/akkaccel/status/1493084468537659393?s=46">
    <img src="/tgcfrpg.jpeg" />
  </a>
  <figcaption>Twitter user @akkaccel you're doing the lord's work</figcaption>
</figure>


There were a few main areas I could start from:

- Being saved by Xie Lian as a child.
- Him sneaking off to be a soldier to fight against Yong'an.
- Ghost fire adventures (my favourite personally)
- Wuming
- Mt Tonglu adventures
- Challenging 35 Heavenly Officials
- Meeting Xie Lian again + main story

I decided to go with the 33 heavenly officials plot because it seemed the most clear cut narrative and straightforward gameplay; fighting people, maybe Ace Attorney style debating, maybe some burning down of temples.

## The First Prototype

### First Day

<figure>
  <img src="/prototype.gif" alt="prototype of the game" />
  <figcaption>Early prototype footage, made a simple single file, single enemy game to show to friends</figcaption>
</figure>

I started off by making a single file, single enemy game to get a feel for what it would be like. I chose to make the game in **Lua** because firstly, I was hooked on playing Balatro at that time and learnt that Balatro was made in Lua, specifically **Löve2D**, a lightweight framework that had endless potential and possibilities, and was known to be good for making 2D games in. 

And secondly, I didn't think I could start out with anything but a 2D rendition of the game I had in mind. I didn't know anything about Unreal Engine, and I didn't think I had the time to master it to make a game with it that quickly. Also the last time I tried to install Unreal Engine 5 on my mac it sounded like a jet taking off.

So currently what we had was:

- Player ranged attacks
- Player teleport ability with NO cooldown
- Enemy follows player around but doesn't attack
- 300hp for both player and enemy

### Second Day

The next day, I showed this version to my friends, and one of my friends said he wanted to contribute, so that very night we started working on it together. I thought I should implement a wave structure to the game to make it more longlasting.

<figure>
  <img src="/ascension3.png" alt="gameplay preview" />
  <figcaption>Early ranged attack gameplay preview</figcaption>
</figure>

- 6 Waves
- Player 300 hp >> 100 hp
- Player and enemy health bars instead of a number
- enemies attack u 
- diff kinds of enemies (ranged, charging, melee)
- teleport feature broken

**Bugs:**
- teleport feature broken

### Third Day

- dodge ability
- teleport limited range
- balancing for enemies

**Bugs:**
- dodge slowing down time literally, it pauses the game
- you can't move when teleporting

### Fourth Day

- can move during teleport
- dodge no longer slows time
- health regen orbs drop when enemies die

**Bugs:**
- health regen drop too low chance

<figure>
  <img src="/ascension1.png" alt="hua cheng" />
  <figcaption>Gameplay still of Hua Cheng</figcaption>
</figure>
<figure>
  <img src="/ascension2.png" alt="angry heavenly official" />
  <figcaption>Gameplay image of masked out image of Shi Qing Xuan, though the dialogue doesn't fit his personality</figcaption>
</figure>

*WIP, more to come.*
