---
layout: barebones
---

<style>
    #bg {
        position: absolute; left: 0;
        width: 100vw; height: 100vh;

        background-image: url("assets/images/decor/site_newlayout_bg.png");
        background-attachment: fixed; background-size: auto 100vh;
        background-position: center; background-repeat: no-repeat-x;
    }

    #bg img {
        position: absolute;
        left: 0; bottom: 0;
        height: 90%;
    }
    #bg a { position: absolute !important; }

    html::before {
        animation-name: flicker; animation-duration: 3s;
        animation-iteration-count: infinite; animation-timing-function: initial;

        transition: none;
        background-color: #fcca5f
    }

    @keyframes flicker {
        39% { background-color: #fcca5f }
        40% { background-color: #ed9c5a }
        50% { background-color: #fcca5f }
        100% { background-color: #fcca5f }
    }

    #textbox {
        border: 30px solid transparent;
        padding: 15px;
        border-image-source: url("https://neoskitties.org/graphics/borders/tile001.png");
        border-image-slice: 8 fill;

        position: absolute; font-size: 2rem
    }

    html { overflow: hidden; image-rendering: pixelated; }
</style>

<div id="bg">
    <a href="index2">
    <img src="/assets/images/decor/site_newlayout_fg.png">
    </a>
</div>

<div id="textbox" style="right: 20%; top: 20%">Click on the computer to<br>go to the main page</div>
<div id="textbox" style="right: 20%; top: 60%">There may be autoplaying music once I get around to coding it</div>
