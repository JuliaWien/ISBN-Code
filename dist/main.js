(()=>{var e={179:e=>{e.exports={checkISBN:function(e){let t=0,n=1,l=0;const i=e.length;for(;n<10&&l<i;){let i=parseInt(e[l]);i>=0&&i<=9&&(t+=i*n,n++),l++}let u=t%11;return 0===u?"":10===u?"X":String(u)}}}},t={};function n(l){if(t[l])return t[l].exports;var i=t[l]={exports:{}};return e[l](i,i.exports,n),i.exports}(()=>{const{checkISBN:e}=n(179);function t(){document.getElementById("validText").style.visibility="hidden",document.getElementById("invalidText").style.visibility="hidden"}function l(n){t(),function(){t();const n=document.getElementById("isbn4");if(document.getElementById("isbn1").value.length<1||document.getElementById("isbn2").value.length<3||document.getElementById("isbn3").value.length<5){const t=document.getElementById("isbn1").value+"-"+document.getElementById("isbn2").value+"-"+document.getElementById("isbn3").value,l=e(t);console.log("Berechne/ISBN: "+isbn3),console.log("Berechne/Prüfziffer: "+l),console.log("ISBN2.value.length: "+document.getElementById("isbn2").value.length),n.style.background="lightgrey",n.value=l}else{const t=document.getElementById("isbn1").value+"-"+document.getElementById("isbn2").value+"-"+document.getElementById("isbn3").value+"-"+document.getElementById("isbn4").value,l=e(t);n.style.background="transparent",l===t[t.length-1]?document.getElementById("validText").style.visibility="visible":document.getElementById("invalidText").style.visibility="visible"}}();var l=n.target;if(l.value.length>=l.attributes.maxlength.value){let e=l;for(;(e=e.nextElementSibling)&&null!=e;)if("input"==e.tagName.toLowerCase()){e.focus();break}}else if(0==l.value.length)for(var i=l;(i=i.previousElementSibling)&&null!=i;)if("input"===i.tagName.toLowerCase()){i.focus();break}}t(),document.querySelector("#isbn1").addEventListener("input",l),document.querySelector("#isbn2").addEventListener("input",l),document.querySelector("#isbn3").addEventListener("input",l),document.querySelector("#isbn4").addEventListener("input",l)})()})();