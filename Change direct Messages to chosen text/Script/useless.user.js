// ==UserScript==
// @name         Text Lift
// @namespace    lol
// @version      1.0
// @description  try to take over the world!
// @author       Simon
// @match        https://discord.com/channels/*
// @match        https://discord.com/*
// @icon         https://cdn.discordapp.com/attachments/1038338241201455175/1058368199806173214/4344d3fe82f635cb12ad12917f472dfa.gif
// @grant        none
// ==/UserScript==

const injectCss = (id, css) => {
  const style = document.createElement('style');
  style.id = id;
  style.innerText = css;
  document.head.appendChild(style);
  return style;
  
injectCss("Text Lift",`
/* change Direct messages to chosen text */
.privateChannelsHeaderContainer-1UWASm>span{
    font-size: 0;
}
.privateChannelsHeaderContainer-1UWASm>span:before{
    content: 'Randoms';
    text-transform: uppercase;
    font-size: 12px;
}

.imageAccessory-2yA7Kb {
    left: unset;
    right: 6px;
}


}

 }`)
