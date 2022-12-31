// ==UserScript==
// @name         Profile Decoration test
// @namespace    :)
// @version      1.0
// @description  try to take over the world!
// @author       Simon
// @match        https://discord.com/channels/*
// @icon         https://cdn.discordapp.com/attachments/1038338241201455175/1058368199806173214/4344d3fe82f635cb12ad12917f472dfa.gif
// @grant        none
// ==/UserScript==
const injectCss = (id, css) => {
  const style = document.createElement('style');
  style.id = id;
  style.innerText = css;
  document.head.appendChild(style);
  return style;
}


injectCss("Profile Decorations",`

/* Profile Decorations */
.message-2CShn3.groupStart-3Mlgv1:not(.systemMessage-1H1Z20) .contents-2MsGLg::before {
content: '';
width: 48px;
height: 48px;
background: url("https://cdn.discordapp.com/attachments/1058662075385262100/1058662171619369031/d52ff7e94c1374b4df069eee29a989cd.png") center/cover;
transform: translate(-60px, -4px);
z-index: 99999;
position: absolute;
pointer-events: none;
}

 }`)


// Source links:
//
// blue: https://cdn.discordapp.com/attachments/1058662075385262100/1058662172651167744/caa099ee0308108e854dd9fa2dcfd2a6.png
// yellow: https://cdn.discordapp.com/attachments/1058662075385262100/1058662172344979486/bd9189e9280d3b0514cf14454a043485.png
// green: https://cdn.discordapp.com/attachments/1058662075385262100/1058662171984281620/a_ec7e6bb6c0c96acf4eb1ce04bc4ce727.png
// yellow-blue: https://cdn.discordapp.com/attachments/1058662075385262100/1058662171619369031/d52ff7e94c1374b4df069eee29a989cd.png
//
//

