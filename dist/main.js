(()=>{"use strict";class t{constructor(t){this.arr=t,this.root=null}}function l(t){if(t.length<=1)return t;const n=Math.floor(t.length/2);return function(t,l){let n=0,o=0;const r=[];for(;n<t.length&&o<l.length;)t[n]===l[o]?(r.push(t[n]),n+=1,o+=1):t[n]<l[o]?(r.push(t[n]),n+=1):(r.push(l[o]),o+=1);for(;n<t.length;)r.push(t[n]),n+=1;for(;o<l.length;)r.push(l[o]),o+=1;return r}(l(t.slice(0,n)),l(t.slice(n)))}class n{constructor(t){this.data=t,this.left=null,this.right=null}}function o(t,l,r){if(l>r)return null;const e=Math.floor((l+r)/2),h=new n(t[e]);return h.left=o(t,l,e-1),h.right=o(t,e+1,r),h}const r=function(t){let l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];null!==t&&(null!==t.right&&r(t.right,`${l}${n?"│   ":"    "}`,!1),console.log(`${l}${n?"└── ":"┌── "}${t.data}`),null!==t.left&&r(t.left,`${l}${n?"    ":"│   "}`,!0))},e=(t,l)=>null===l?l=new n(t):(t<l.data?l.left=e(t,l.left):t>l.data&&(l.right=e(t,l.right)),l),h=(t,l)=>{let n=0;return void 0===t||(t.left&&(n+=1,n=h(t.left,l)),t.data!==l&&(n-=1),t.data===l||t.right&&(n+=1,n=h(t.right,l))),n};!function(){const n=l([1,7,4,23,8,9,4,3,5,7,9,67,6345,324]),s=new t(n),u=n.length-1;s.root=o(n,0,u),e(127,s.root),console.log(h(s.root,1)),r(s.root)}()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L0IsRUFGSCxDQUFDLEVBQUcsRUFBRyxFQUFHLEdBQUksRUFBRyxFQUFHLEVBQUcsRUFBRyxFQUFHLEVBQUcsRUFBRyxHQUFJLEtBQU0sTUFJbkRELEVBQU8sSUFBSUosRUFBS29DLEdBR2hCZCxFQUFNYyxFQUFPOUIsT0FBUyxFQUU1QkYsRUFBS0EsS0FBT2dCLEVBQVdnQixFQUhULEVBR3dCZCxHQUN0Q1MsRUFBTyxJQUFLM0IsRUFBS0EsTUFJakJ5QixRQUFRQyxJQUFJRyxFQUFNN0IsRUFBS0EsS0FBTSxJQUM3Qm1CLEVBQVluQixFQUFLQSxLQUNuQixDQUVBaUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS8uL3NyYy90cmVlLmpzIiwid2VicGFjazovL3dlYmRldi10ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJlZSB7XG4gIGNvbnN0cnVjdG9yKGFycikge1xuICAgIHRoaXMuYXJyID0gYXJyO1xuICAgIHRoaXMucm9vdCA9IG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlKGxlZnQsIHJpZ2h0KSB7XG4gIGxldCBpID0gMDtcbiAgbGV0IGogPSAwO1xuICBjb25zdCByZXMgPSBbXTtcblxuICB3aGlsZSAoaSA8IGxlZnQubGVuZ3RoICYmIGogPCByaWdodC5sZW5ndGgpIHtcbiAgICBpZiAobGVmdFtpXSA9PT0gcmlnaHRbal0pIHtcbiAgICAgIHJlcy5wdXNoKGxlZnRbaV0pO1xuICAgICAgaSArPSAxO1xuICAgICAgaiArPSAxO1xuICAgIH0gZWxzZSBpZiAobGVmdFtpXSA8IHJpZ2h0W2pdKSB7XG4gICAgICByZXMucHVzaChsZWZ0W2ldKTtcbiAgICAgIGkgKz0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzLnB1c2gocmlnaHRbal0pO1xuICAgICAgaiArPSAxO1xuICAgIH1cbiAgfVxuXG4gIHdoaWxlIChpIDwgbGVmdC5sZW5ndGgpIHtcbiAgICByZXMucHVzaChsZWZ0W2ldKTtcbiAgICBpICs9IDE7XG4gIH1cblxuICB3aGlsZSAoaiA8IHJpZ2h0Lmxlbmd0aCkge1xuICAgIHJlcy5wdXNoKHJpZ2h0W2pdKTtcbiAgICBqICs9IDE7XG4gIH1cblxuICByZXR1cm4gcmVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc29ydChhcnIpIHtcbiAgaWYgKGFyci5sZW5ndGggPD0gMSkgcmV0dXJuIGFycjtcblxuICBjb25zdCBtaWQgPSBNYXRoLmZsb29yKGFyci5sZW5ndGggLyAyKTtcbiAgY29uc3QgbGVmdCA9IHNvcnQoYXJyLnNsaWNlKDAsIG1pZCkpO1xuICBjb25zdCByaWdodCA9IHNvcnQoYXJyLnNsaWNlKG1pZCkpO1xuXG4gIHJldHVybiBtZXJnZShsZWZ0LCByaWdodCk7XG59XG4iLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLW5hbWVkLWFzLWRlZmF1bHQsIGltcG9ydC9uby1uYW1lZC1hcy1kZWZhdWx0LW1lbWJlciwgaW1wb3J0L2V4dGVuc2lvbnNcbmltcG9ydCBUcmVlLCB7IHNvcnQsIG1lcmdlIH0gZnJvbSBcIi4vdHJlZS5qc1wiO1xuXG5jbGFzcyBOb2RlIHtcbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgdGhpcy5sZWZ0ID0gbnVsbDtcbiAgICB0aGlzLnJpZ2h0ID0gbnVsbDtcbiAgfVxufVxuXG5mdW5jdGlvbiBiaW5hcnlUcmVlKGFyciwgc3RhcnQsIGVuZCkge1xuICBpZiAoc3RhcnQgPiBlbmQpIHJldHVybiBudWxsO1xuXG4gIGNvbnN0IG1pZCA9IE1hdGguZmxvb3IoKHN0YXJ0ICsgZW5kKSAvIDIpO1xuXG4gIGNvbnN0IHJvb3QgPSBuZXcgTm9kZShhcnJbbWlkXSk7XG5cbiAgcm9vdC5sZWZ0ID0gYmluYXJ5VHJlZShhcnIsIHN0YXJ0LCBtaWQgLSAxKTtcbiAgcm9vdC5yaWdodCA9IGJpbmFyeVRyZWUoYXJyLCBtaWQgKyAxLCBlbmQpO1xuXG4gIHJldHVybiByb290O1xufVxuXG5jb25zdCBwcmV0dHlQcmludCA9IChub2RlLCBwcmVmaXggPSBcIlwiLCBpc0xlZnQgPSB0cnVlKSA9PiB7XG4gIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChub2RlLnJpZ2h0ICE9PSBudWxsKSB7XG4gICAgcHJldHR5UHJpbnQobm9kZS5yaWdodCwgYCR7cHJlZml4fSR7aXNMZWZ0ID8gXCLilIIgICBcIiA6IFwiICAgIFwifWAsIGZhbHNlKTtcbiAgfVxuICBjb25zb2xlLmxvZyhgJHtwcmVmaXh9JHtpc0xlZnQgPyBcIuKUlOKUgOKUgCBcIiA6IFwi4pSM4pSA4pSAIFwifSR7bm9kZS5kYXRhfWApO1xuICBpZiAobm9kZS5sZWZ0ICE9PSBudWxsKSB7XG4gICAgcHJldHR5UHJpbnQobm9kZS5sZWZ0LCBgJHtwcmVmaXh9JHtpc0xlZnQgPyBcIiAgICBcIiA6IFwi4pSCICAgXCJ9YCwgdHJ1ZSk7XG4gIH1cbn07XG5cbmNvbnN0IGluc2VydCA9ICh2YWx1ZSwgcm9vdCkgPT4ge1xuICBpZiAocm9vdCA9PT0gbnVsbCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHJvb3QgPSBuZXcgTm9kZSh2YWx1ZSk7XG4gICAgcmV0dXJuIHJvb3Q7XG4gIH1cbiAgaWYgKHZhbHVlIDwgcm9vdC5kYXRhKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgcm9vdC5sZWZ0ID0gaW5zZXJ0KHZhbHVlLCByb290LmxlZnQpO1xuICB9IGVsc2UgaWYgKHZhbHVlID4gcm9vdC5kYXRhKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgcm9vdC5yaWdodCA9IGluc2VydCh2YWx1ZSwgcm9vdC5yaWdodCk7XG4gIH1cblxuICByZXR1cm4gcm9vdDtcbn07XG5cbmNvbnN0IG1pblZhbHVlID0gKG5vZGUpID0+IHtcbiAgbGV0IG1pbnYgPSBub2RlLmRhdGE7XG4gIHdoaWxlIChub2RlLmxlZnQgIT09IG51bGwpIHtcbiAgICBtaW52ID0gbm9kZS5sZWZ0LmRhdGE7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgbm9kZSA9IG5vZGUubGVmdDtcbiAgfVxuICByZXR1cm4gbWludjtcbn07XG5cbmNvbnN0IGRlbGV0ZUl0ZW0gPSAodmFsdWUsIHJvb3QpID0+IHtcbiAgaWYgKHJvb3QgPT09IG51bGwpIHtcbiAgICByZXR1cm4gcm9vdDtcbiAgfVxuXG4gIGlmICh2YWx1ZSA8IHJvb3QuZGF0YSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHJvb3QubGVmdCA9IGRlbGV0ZUl0ZW0odmFsdWUsIHJvb3QubGVmdCk7XG4gIH0gZWxzZSBpZiAodmFsdWUgPiByb290LmRhdGEpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICByb290LnJpZ2h0ID0gZGVsZXRlSXRlbSh2YWx1ZSwgcm9vdC5yaWdodCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHJvb3QubGVmdCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHJvb3QucmlnaHQ7XG4gICAgfVxuICAgIGlmIChyb290LnJpZ2h0ID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gcm9vdC5sZWZ0O1xuICAgIH1cblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHJvb3QuZGF0YSA9IG1pblZhbHVlKHJvb3QucmlnaHQpO1xuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgcm9vdC5yaWdodCA9IGRlbGV0ZUl0ZW0ocm9vdC5kYXRhLCByb290LnJpZ2h0KTtcbiAgfVxuXG4gIHJldHVybiByb290O1xufTtcblxuY29uc3QgZmluZCA9ICh2YWx1ZSwgcm9vdCkgPT4ge1xuICBsZXQgcmVzO1xuICBpZiAocm9vdCA9PT0gbnVsbCkge1xuICAgIHJldHVybiBcIm5vIGRhdGEgZm91bmRcIjtcbiAgfVxuICBpZiAocm9vdC5kYXRhID09PSB2YWx1ZSkge1xuICAgIHJldHVybiByb290LmRhdGE7XG4gIH1cblxuICBpZiAodmFsdWUgPCByb290LmRhdGEpIHtcbiAgICByZXMgPSBmaW5kKHZhbHVlLCByb290LmxlZnQpO1xuICB9IGVsc2UgaWYgKHZhbHVlID4gcm9vdC5kYXRhKSB7XG4gICAgcmVzID0gZmluZCh2YWx1ZSwgcm9vdC5yaWdodCk7XG4gIH1cblxuICByZXR1cm4gcmVzO1xufTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlZmF1bHQtcGFyYW0tbGFzdCwgY29uc2lzdGVudC1yZXR1cm5cbmNvbnN0IGxldmVsT3JkZXIgPSAocm9vdCwgY2FsbGJhY2sgPSBudWxsKSA9PiB7XG4gIGNvbnN0IHJlcyA9IFtdO1xuICBjb25zdCBxdWV1ZSA9IFtdO1xuICBsZXQgdG1wID0gcm9vdDtcblxuICB3aGlsZSAodG1wICE9PSB1bmRlZmluZWQpIHtcbiAgICBpZiAoY2FsbGJhY2sgPT09IG51bGwpIHtcbiAgICAgIHJlcy5wdXNoKHRtcC5kYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FsbGJhY2sodG1wKTtcbiAgICB9XG5cbiAgICBpZiAodG1wLmxlZnQgIT09IG51bGwpIHtcbiAgICAgIHF1ZXVlLnB1c2godG1wLmxlZnQpO1xuICAgIH1cbiAgICBpZiAodG1wLnJpZ2h0ICE9PSBudWxsKSB7XG4gICAgICBxdWV1ZS5wdXNoKHRtcC5yaWdodCk7XG4gICAgfVxuICAgIHRtcCA9IHF1ZXVlLnNoaWZ0KCk7XG4gIH1cblxuICBpZiAoY2FsbGJhY2sgPT09IG51bGwpIHtcbiAgICByZXR1cm4gcmVzO1xuICB9XG59O1xuXG5jb25zdCBsZXZlbE9yZGVyUmVjdXJzaXZlID0gKHJvb3QsIHF1ZXVlID0gW10sIGNhbGxiYWNrID0gbnVsbCkgPT4ge1xuICBpZiAocm9vdCA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG5cbiAgY2FsbGJhY2socm9vdCk7XG5cbiAgaWYgKHJvb3QubGVmdCkge1xuICAgIHF1ZXVlLnB1c2gocm9vdC5sZWZ0KTtcbiAgfVxuICBpZiAocm9vdC5yaWdodCkge1xuICAgIHF1ZXVlLnB1c2gocm9vdC5yaWdodCk7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgbGV2ZWxPcmRlclJlY3Vyc2l2ZShxdWV1ZS5zaGlmdCgpLCBxdWV1ZSwgY2FsbGJhY2spO1xufTtcblxuY29uc3QgaW5PcmRlciA9IChyb290LCBxdWV1ZSA9IFtdLCBjYWxsYmFjayA9IG51bGwpID0+IHtcbiAgaWYgKHJvb3QgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuXG4gIGlmIChjYWxsYmFjayA9PT0gbnVsbCkge1xuICAgIHF1ZXVlLnB1c2gocm9vdC5kYXRhKTtcbiAgfVxuXG4gIGlmIChyb290LmxlZnQpIHtcbiAgICBpbk9yZGVyKHJvb3QubGVmdCwgcXVldWUsIGNhbGxiYWNrKTtcbiAgfVxuXG4gIGlmIChjYWxsYmFjaykgY2FsbGJhY2socm9vdCk7XG5cbiAgaWYgKHJvb3QucmlnaHQpIHtcbiAgICBpbk9yZGVyKHJvb3QucmlnaHQsIHF1ZXVlLCBjYWxsYmFjayk7XG4gIH1cblxuICBpZiAoY2FsbGJhY2sgPT09IG51bGwpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cbiAgICByZXR1cm4gcXVldWU7XG4gIH1cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXG4gIHJldHVybiAwO1xufTtcblxuY29uc3QgcHJlT3JkZXIgPSAocm9vdCwgcXVldWUgPSBbXSwgY2FsbGJhY2sgPSBudWxsKSA9PiB7XG4gIGlmIChyb290ID09PSB1bmRlZmluZWQpIHJldHVybjtcblxuICBpZiAoY2FsbGJhY2sgPT09IG51bGwpIHtcbiAgICBxdWV1ZS5wdXNoKHJvb3QuZGF0YSk7XG4gIH1cblxuICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKHJvb3QpO1xuXG4gIGlmIChyb290LmxlZnQpIHtcbiAgICBwcmVPcmRlcihyb290LmxlZnQsIHF1ZXVlLCBjYWxsYmFjayk7XG4gIH1cblxuICBpZiAocm9vdC5yaWdodCkge1xuICAgIHByZU9yZGVyKHJvb3QucmlnaHQsIHF1ZXVlLCBjYWxsYmFjayk7XG4gIH1cblxuICBpZiAoY2FsbGJhY2sgPT09IG51bGwpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cbiAgICByZXR1cm4gcXVldWU7XG4gIH1cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXG4gIHJldHVybiAwO1xufTtcblxuY29uc3QgcG9zdE9yZGVyID0gKHJvb3QsIHF1ZXVlID0gW10sIGNhbGxiYWNrID0gbnVsbCkgPT4ge1xuICBpZiAocm9vdCA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG5cbiAgaWYgKGNhbGxiYWNrID09PSBudWxsKSB7XG4gICAgcXVldWUucHVzaChyb290LmRhdGEpO1xuICB9XG5cbiAgaWYgKHJvb3QubGVmdCkge1xuICAgIHBvc3RPcmRlcihyb290LmxlZnQsIHF1ZXVlLCBjYWxsYmFjayk7XG4gIH1cblxuICBpZiAocm9vdC5yaWdodCkge1xuICAgIHBvc3RPcmRlcihyb290LnJpZ2h0LCBxdWV1ZSwgY2FsbGJhY2spO1xuICB9XG5cbiAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhyb290KTtcblxuICBpZiAoY2FsbGJhY2sgPT09IG51bGwpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cbiAgICByZXR1cm4gcXVldWU7XG4gIH1cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXG4gIHJldHVybiAwO1xufTtcblxuY29uc3QgaGVpZ2h0ID0gKHJvb3QpID0+IHtcbiAgLy8gQmFzZSBDYXNlXG4gIGlmIChyb290ID09IG51bGwpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICAvLyBTdG9yZSB0aGUgbWF4aW11bSBoZWlnaHQgb2ZcbiAgLy8gdGhlIGxlZnQgYW5kIHJpZ2h0IHN1YnRyZWVcbiAgY29uc3QgbGVmdEhlaWdodCA9IGhlaWdodChyb290LmxlZnQpO1xuXG4gIGNvbnN0IHJpZ2h0SGVpZ2h0ID0gaGVpZ2h0KHJvb3QucmlnaHQpO1xuXG4gIC8vIFVwZGF0ZSBoZWlnaHQgb2YgdGhlIGN1cnJlbnQgbm9kZVxuICBjb25zdCBhbnMgPSBNYXRoLm1heChsZWZ0SGVpZ2h0LCByaWdodEhlaWdodCkgKyAxO1xuXG4gIHJldHVybiBhbnM7XG59O1xuXG5mdW5jdGlvbiB0YWtlSGVpZ2h0KHJvb3QsIHgpIHtcbiAgaWYgKHJvb3QgPT09IG51bGwgfHwgcm9vdCA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG4gIGxldCBuZXdIZWlnaHQ7XG5cbiAgbmV3SGVpZ2h0ID0gdGFrZUhlaWdodChyb290LmxlZnQsIHgpO1xuICBuZXdIZWlnaHQgPSB0YWtlSGVpZ2h0KHJvb3QucmlnaHQsIHgpO1xuXG4gIGlmIChyb290LmRhdGEgPT09IHgpIHtcbiAgICBuZXdIZWlnaHQgPSBoZWlnaHQocm9vdCk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXG4gICAgcmV0dXJuIG5ld0hlaWdodDtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxuICByZXR1cm4gbmV3SGVpZ2h0O1xufVxuXG5jb25zdCBkZXB0aCA9IChyb290LCB4KSA9PiB7XG4gIGxldCBuZXdEZXB0aCA9IDA7XG4gIGlmIChyb290ID09PSB1bmRlZmluZWQpIHJldHVybiBuZXdEZXB0aDtcblxuICBpZiAocm9vdC5sZWZ0KSB7XG4gICAgbmV3RGVwdGggKz0gMTtcbiAgICBuZXdEZXB0aCA9IGRlcHRoKHJvb3QubGVmdCwgeCk7XG4gIH1cblxuICBpZiAocm9vdC5kYXRhICE9PSB4KSB7XG4gICAgbmV3RGVwdGggLT0gMTtcbiAgfVxuXG4gIGlmIChyb290LmRhdGEgPT09IHgpIHtcbiAgICByZXR1cm4gbmV3RGVwdGg7XG4gIH1cblxuICBpZiAocm9vdC5yaWdodCkge1xuICAgIG5ld0RlcHRoICs9IDE7XG4gICAgbmV3RGVwdGggPSBkZXB0aChyb290LnJpZ2h0LCB4KTtcbiAgfVxuXG4gIHJldHVybiBuZXdEZXB0aDtcbn07XG5cbmZ1bmN0aW9uIHN0YXJ0SXQoKSB7XG4gIGNvbnN0IGFyciA9IFsxLCA3LCA0LCAyMywgOCwgOSwgNCwgMywgNSwgNywgOSwgNjcsIDYzNDUsIDMyNF07IC8vIFRISVMgSVMgTk9UIFRIRSBBUlJBWSBUSEFUIEdFVFMgUFJJTlRFRCBPVVRcblxuICBjb25zdCBuZXdBcnIgPSBzb3J0KGFycik7XG5cbiAgY29uc3Qgcm9vdCA9IG5ldyBUcmVlKG5ld0Fycik7XG5cbiAgY29uc3Qgc3RhcnQgPSAwO1xuICBjb25zdCBlbmQgPSBuZXdBcnIubGVuZ3RoIC0gMTtcblxuICByb290LnJvb3QgPSBiaW5hcnlUcmVlKG5ld0Fyciwgc3RhcnQsIGVuZCk7XG4gIGluc2VydCgxMjcsIHJvb3Qucm9vdCk7XG5cbiAgY29uc3QgcXVldWUgPSBbXTtcblxuICBjb25zb2xlLmxvZyhkZXB0aChyb290LnJvb3QsIDEpKTtcbiAgcHJldHR5UHJpbnQocm9vdC5yb290KTtcbn1cblxuc3RhcnRJdCgpO1xuIl0sIm5hbWVzIjpbIlRyZWUiLCJjb25zdHJ1Y3RvciIsImFyciIsInRoaXMiLCJyb290Iiwic29ydCIsImxlbmd0aCIsIm1pZCIsIk1hdGgiLCJmbG9vciIsImxlZnQiLCJyaWdodCIsImkiLCJqIiwicmVzIiwicHVzaCIsIm1lcmdlIiwic2xpY2UiLCJOb2RlIiwiZGF0YSIsImJpbmFyeVRyZWUiLCJzdGFydCIsImVuZCIsInByZXR0eVByaW50Iiwibm9kZSIsInByZWZpeCIsImFyZ3VtZW50cyIsInVuZGVmaW5lZCIsImlzTGVmdCIsImNvbnNvbGUiLCJsb2ciLCJpbnNlcnQiLCJ2YWx1ZSIsImRlcHRoIiwieCIsIm5ld0RlcHRoIiwibmV3QXJyIiwic3RhcnRJdCJdLCJzb3VyY2VSb290IjoiIn0=