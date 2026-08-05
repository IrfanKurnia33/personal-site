import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DlXVp__-.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_ClkBu9jG.mjs';
import { $ as $$PageHeader } from '../chunks/PageHeader_DV5Nimf_.mjs';
import { $ as $$EmbedCard } from '../chunks/EmbedCard_Co3PqOXs.mjs';
import { $ as $$Prose } from '../chunks/Prose_ubZywdRE.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const MUSIC = [
  {
    title: "Bedroom Demos",
    kind: "EP",
    note: "I was on a college break in 2015. Lefawigi decided to record some of my existing drafts just sitting around. I'm quite proud of our intro track as it sets the tone for all my shows for 10 years. 'Disinlah Kau Berada' is the first Indonesian-language track I made (wasn't even sure what it meant and not sure what it means today). 'Lights All Around' is a love track of a cliche high-schooler.",
    embeds: [
      "https://soundcloud.com/lefawigi/intro",
      "https://soundcloud.com/lefawigi/disinilah-kau-berada",
      "https://soundcloud.com/lefawigi/lights-all-around"
    ]
  },
  {
    title: "Rise",
    kind: "Single",
    note: "Probably the song I am most proud of. At least to me it sounded good and it serves as my own motivation to finish my bachelor thesis and graduate college. It's also the first song that I confidently pitched to some online radios and webzines and they actually played it. 'Rise and rise again' is a phrase repeatedly on my mind and I turned it into a song. Plus, it's the first song that I made just as I learned 'fancier' chords like Maj7.",
    embeds: [
      "https://soundcloud.com/lefawigi/rise"
    ]
  },
  {
    title: "Back On Your Radar",
    kind: "Single",
    note: "I was living my dream as a radio chart show host but I was in Surabaya (far away from my bandmates). Covid came around in 2020 and prompted me to write this song. It's about someone who had to shut down external interactions but made a promise that one would resurface to the world. This is an unreleased song where I played all instruments except the lead guitar (played by Idham Sadaqa).",
    embeds: [
      "https://soundcloud.com/lefawigi/back-on-your-radar-6th-master-draft"
    ]
  },
  {
    title: "False Alarm",
    kind: "Single",
    note: "One of my first non-romantic, semi-political song. Well it's not actually political, but rather a critique of the current digital situation. It was September 2020, Covid was rampant, and all I see is people flipping used masked, sabotaging oxygen tanks, and spreading all sorts of misinformation for a little cash. It was depressing, everyone was struggling, yet some managed to exploit the situation and making them worse. Possibly one of the hardest songs I made so far. Here the whole band piched in and did the arrangement together. Fun fact: I recorded the vocals for this track using nothing more than a phone and a Dolby On app.",
    embeds: [
      "https://soundcloud.com/lefawigi/false-alarm"
    ]
  },
  {
    title: "Chasing Lights (1st Ver.)",
    kind: "Single",
    note: "It was 2021 and covid was still a thing. After a chaotic year, I've decided to release this song. I actually wrote this song back in 2017 after being inspired by Adele's 'Send My Love' that basically only has two chords and I tried to do the same. This one's probably my most heartfelt song to date as it really was about myself navigating the world.",
    embeds: [
      "https://open.spotify.com/track/1ST8hEwmg3zIlsuf1cVZv6"
    ]
  },
  {
    title: "The Poison I'm Willing to Take",
    kind: "Demo",
    note: "It was May 2021 and I just turned 25. I didn't remember exactly why but I guess I'm in a good mood due to recent work promotion and everybody is trying to spread positive vibes. So I wrote this song about the willingness to 'be harmed' by something/someone we loved so much. My poison was my work back then (I know). But it wasn't until 2024 that we released the single for real. What you will listen in this section is a longer, more raw demo of the song.",
    embeds: [
      "https://soundcloud.com/lefawigi/the-poison-im-willing-to-take-demo-draft"
    ]
  },
  {
    title: "Acoustic Demos",
    kind: "Acoustic",
    note: "In late 2021, Lefawigi is gaining quite the traction in East Jakarta and Bekasi (our hometowns) so we decided so gather in my bedroom to record some acoustic samples meant to be sent to cafes and restaurants looking for an acoustic band to fill their Saturday night spots. This set is... okay I think... with mistakes here and there lol. We recorded it live at once (we didn't even use multi-track recording for this one).",
    embeds: [
      "https://soundcloud.com/lefawigi/sets/for-your-consideration-by-lefawigi"
    ]
  },
  {
    title: "The Night's Calling",
    kind: "Single",
    note: "2022 just came around. The band and I wanted to do something different with our songs. Rather than just simple power-chord pop punk styles, we experimented with a slightly darker theme with a bit heavier riffs. 'The Night's Calling' is about having the desire to finally do something worthwile with our lives no matter how dark the world seems to be. It was also one of the first songs that we really get down and dirty in arranging and composing the song together. This is also the first track semi-professionally mixed by a sound engineer.",
    embeds: [
      "https://open.spotify.com/track/1sKIfapzfOM86jPKt7y54L"
    ]
  },
  {
    title: "The Poison I'm Willing to Take",
    kind: "Single",
    note: "To be really honest, it's been two years since we had a release so I dig a bit deeper into my drafts. And honestly, I can't find anything worthwhile to record so we decided to re-make 'The Poison I'm Willing to Take'. This version is way shorter (at least the intro and verse 1) to make it more 'industry-friendly'. This is also the first time I tried geeking out with 3/4 time signature inserted into a normal 4/4 song. I felt like a genius for like three seconds (lol) but then it's... meh. But I guess it's quite a good song.",
    embeds: [
      "https://open.spotify.com/track/1qyLo28MHXjWLBgGLgCr2m"
    ]
  },
  {
    title: "Warp Speed",
    kind: "Single",
    note: "For this one, I really sat down and tried different riffs to make a catchy intro. I wrote 'Warp Speed' to tell a story about how life can move too fast you can't catch up with it at all. But some of my friends joke about being 'too fast' (as in being high from drugs), so I started telling stories about how this song is about being addicted to negative things in life like drugs and more things. We tried doing a fast, loud, and angry song after a lovey-dovey 'The Poison I'm Willing to Take'.",
    embeds: [
      "https://open.spotify.com/track/3vkep3TUzc5Pf2di5ogLqW"
    ]
  },
  {
    title: "Live at Abbe Studio",
    kind: "Live",
    note: "This one is quite special. I just got another job after being laid off back in February 2024. Those three months felt devastating. But in May, everything seems to go quite uphill. I got a remote job and I got to know amazing bands like BoogerSnot and Blind the Villain. We decided to rent an amazing studio in South Jakarta where big artists record their albums and perform live web exclusive shows to make one of our own. We performed all of our favorite songs and we really enjoyed the time there. The studio is kind enough to offer the live recordings that I personally mixed and mastered.",
    embeds: [
      "https://soundcloud.com/lefawigi/sets/lefawigi-live-at-abbe-studio"
    ]
  },
  {
    title: "Chasing Lights (EP)",
    kind: "EP",
    note: "Ever since we started playing music back in 2010 (yes, in middle school), we've always dreamt of having more than just singles. The initial dream was to have a full-length album with physically-produced CDs and cassettes. But time flies, everyone got busy, and the songs didn't seem to 'tie together' as an album so we settled on a six-track mini album that sounds great (at least to us). Probably the most emotional thing we've done together as a band because after this, everybody got really really busy. Our drummer Wisnu had to move to Surabaya for his work, Idham is working as a government employee. Falih and I got even busier with our work. So... here it is... it's not much, but it's honest work.",
    embeds: [
      "https://open.spotify.com/album/5Jp9ZXgiBHWhsp1yOeMHpY"
    ]
  }
];

const $$Music = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Music", "description": "How I channel most of my energy.", "data-astro-cid-klhljcvd": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" data-astro-cid-klhljcvd> ${renderComponent($$result2, "PageHeader", $$PageHeader, { "eyebrow": "Music", "title": "How I channel most of my energy", "lead": "When I'm not working, I write, compose, and perform my own music from time to time.", "data-astro-cid-klhljcvd": true })} ${renderComponent($$result2, "Prose", $$Prose, { "data-astro-cid-klhljcvd": true }, { "default": ($$result3) => renderTemplate` <p data-astro-cid-klhljcvd>
Here's a list of all the music that I've made (2015-2025). Most are bad (lol), some of them I think are... okay.
</p> <p data-astro-cid-klhljcvd>
All the songs I made (so far) are for my own band <a href="https://open.spotify.com/artist/01olnEwmIFDc420kiqae7m" target="_blank" rel="noopener noreferrer" data-astro-cid-klhljcvd>LEFAWIGI</a> (currently on an indefinite hiatus). Everything you hear is created in my bedroom, my friends' bedrooms, and my wife's parents' living room.
</p> <p data-astro-cid-klhljcvd>
I mixed and master some of my songs. Sometimes I hand them over to other bedroom professionals to make it sound a bit better than my own way.
</p> <p data-astro-cid-klhljcvd>
If you're reading this, it means you are free to cover, re-record, and sell your own version of my songs (just kindly let me know).
</p> <p data-astro-cid-klhljcvd>
Here's my music, in a chronological order (from the oldest to the newest). I hope you enjoy it.
</p> ` })} <div class="media-grid" data-astro-cid-klhljcvd> ${MUSIC.map((item) => renderTemplate`${renderComponent($$result2, "EmbedCard", $$EmbedCard, { "title": item.title, "kind": item.kind, "note": item.note, "embeds": item.embeds, "href": item.href, "data-astro-cid-klhljcvd": true })}`)} </div> </div> ` })} `;
}, "D:/Documents/IrfanKurniaDotCom/personal-site-2026/src/pages/music.astro", void 0);

const $$file = "D:/Documents/IrfanKurniaDotCom/personal-site-2026/src/pages/music.astro";
const $$url = "/music";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Music,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
