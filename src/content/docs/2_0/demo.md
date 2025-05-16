---
title: Interactive Demo
tableOfContents: false
---

This uses Rust-to-WASM compilation to run ICU4X in the browser.

<iframe src="/2_0/wasmdemo/index.html" style="width:770px; height:calc(100vh - 350px)" frameborder="0" scroll="none"></iframe>

<script>

document.getElementsByClassName("sl-markdown-content")[0].style = "width: 770px;"; // min-width for web demo

document.getElementsByTagName('iframe')[0].addEventListener("load", function (e) {
    (e.target.contentDocument || e.target.contentWindow.document).getElementsByTagName("body")[0].style = "margin-left: 0;";
});

</script>