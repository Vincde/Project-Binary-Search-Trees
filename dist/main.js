(()=>{"use strict";class t{constructor(t){this.arr=t,this.root=null}}function l(t){if(t.length<=1)return t;const n=Math.floor(t.length/2);return function(t,l){let n=0,r=0;const e=[];for(;n<t.length&&r<l.length;)t[n]===l[r]?(e.push(t[n]),n+=1,r+=1):t[n]<l[r]?(e.push(t[n]),n+=1):(e.push(l[r]),r+=1);for(;n<t.length;)e.push(t[n]),n+=1;for(;r<l.length;)e.push(l[r]),r+=1;return e}(l(t.slice(0,n)),l(t.slice(n)))}class n{constructor(t){this.data=t,this.left=null,this.right=null}}function r(t,l,e){if(l>e)return null;const o=Math.floor((l+e)/2),i=new n(t[o]);return i.left=r(t,l,o-1),i.right=r(t,o+1,e),i}const e=function(t){let l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];null!==t&&(null!==t.right&&e(t.right,`${l}${n?"│   ":"    "}`,!1),console.log(`${l}${n?"└── ":"┌── "}${t.data}`),null!==t.left&&e(t.left,`${l}${n?"    ":"│   "}`,!0))},o=(t,l)=>null===l?l=new n(t):(t<l.data?l.left=o(t,l.left):t>l.data&&(l.right=o(t,l.right)),l),i=(t,l)=>{if(null===l)return l;if(t<l.data)l.left=i(t,l.left);else if(t>l.data)l.right=i(t,l.right);else{if(null===l.left)return l.right;if(null===l.right)return l.left;l.data=(t=>{let l=t.data;for(;null!==t.left;)l=t.left.data,t=t.left;return l})(l.right),l.right=i(l.data,l.right)}return l};!function(){const n=l([1,7,4,23,8,9,4,3,5,7,9,67,6345,324]),u=new t(n),h=n.length-1;u.root=r(n,0,h),o(127,u.root),i(8,u.root),e(u.root)}()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBS00sS0FJZE4sRUFBS2UsS0E5QlNLLEtBQ2hCLElBQUlVLEVBQU9WLEVBQUtMLEtBQ2hCLEtBQXFCLE9BQWRLLEVBQUtkLE1BQ1Z3QixFQUFPVixFQUFLZCxLQUFLUyxLQUVqQkssRUFBT0EsRUFBS2QsS0FFZCxPQUFPd0IsQ0FBSSxFQXVCR0MsQ0FBUy9CLEVBQUtPLE9BRzFCUCxFQUFLTyxNQUFRc0IsRUFBVzdCLEVBQUtlLEtBQU1mLEVBQUtPLE1BQzFDLENBRUEsT0FBT1AsQ0FBSSxHQUdiLFdBQ0UsTUFFTWdDLEVBQVMvQixFQUZILENBQUMsRUFBRyxFQUFHLEVBQUcsR0FBSSxFQUFHLEVBQUcsRUFBRyxFQUFHLEVBQUcsRUFBRyxFQUFHLEdBQUksS0FBTSxNQUluREQsRUFBTyxJQUFJSixFQUFLb0MsR0FHaEJkLEVBQU1jLEVBQU85QixPQUFTLEVBRTVCRixFQUFLQSxLQUFPZ0IsRUFBV2dCLEVBSFQsRUFHd0JkLEdBQ3RDUyxFQUFPLElBQUszQixFQUFLQSxNQUNqQjZCLEVBQVcsRUFBRzdCLEVBQUtBLE1BQ25CbUIsRUFBWW5CLEVBQUtBLEtBQ25CLENBRUFpQyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlLy4vc3JjL3RyZWUuanMiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmVlIHtcbiAgY29uc3RydWN0b3IoYXJyKSB7XG4gICAgdGhpcy5hcnIgPSBhcnI7XG4gICAgdGhpcy5yb290ID0gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2UobGVmdCwgcmlnaHQpIHtcbiAgbGV0IGkgPSAwO1xuICBsZXQgaiA9IDA7XG4gIGNvbnN0IHJlcyA9IFtdO1xuXG4gIHdoaWxlIChpIDwgbGVmdC5sZW5ndGggJiYgaiA8IHJpZ2h0Lmxlbmd0aCkge1xuICAgIGlmIChsZWZ0W2ldID09PSByaWdodFtqXSkge1xuICAgICAgcmVzLnB1c2gobGVmdFtpXSk7XG4gICAgICBpICs9IDE7XG4gICAgICBqICs9IDE7XG4gICAgfSBlbHNlIGlmIChsZWZ0W2ldIDwgcmlnaHRbal0pIHtcbiAgICAgIHJlcy5wdXNoKGxlZnRbaV0pO1xuICAgICAgaSArPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXMucHVzaChyaWdodFtqXSk7XG4gICAgICBqICs9IDE7XG4gICAgfVxuICB9XG5cbiAgd2hpbGUgKGkgPCBsZWZ0Lmxlbmd0aCkge1xuICAgIHJlcy5wdXNoKGxlZnRbaV0pO1xuICAgIGkgKz0gMTtcbiAgfVxuXG4gIHdoaWxlIChqIDwgcmlnaHQubGVuZ3RoKSB7XG4gICAgcmVzLnB1c2gocmlnaHRbal0pO1xuICAgIGogKz0gMTtcbiAgfVxuXG4gIHJldHVybiByZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzb3J0KGFycikge1xuICBpZiAoYXJyLmxlbmd0aCA8PSAxKSByZXR1cm4gYXJyO1xuXG4gIGNvbnN0IG1pZCA9IE1hdGguZmxvb3IoYXJyLmxlbmd0aCAvIDIpO1xuICBjb25zdCBsZWZ0ID0gc29ydChhcnIuc2xpY2UoMCwgbWlkKSk7XG4gIGNvbnN0IHJpZ2h0ID0gc29ydChhcnIuc2xpY2UobWlkKSk7XG5cbiAgcmV0dXJuIG1lcmdlKGxlZnQsIHJpZ2h0KTtcbn1cbiIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tbmFtZWQtYXMtZGVmYXVsdCwgaW1wb3J0L25vLW5hbWVkLWFzLWRlZmF1bHQtbWVtYmVyLCBpbXBvcnQvZXh0ZW5zaW9uc1xuaW1wb3J0IFRyZWUsIHsgc29ydCwgbWVyZ2UgfSBmcm9tIFwiLi90cmVlLmpzXCI7XG5cbmNsYXNzIE5vZGUge1xuICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB0aGlzLmxlZnQgPSBudWxsO1xuICAgIHRoaXMucmlnaHQgPSBudWxsO1xuICB9XG59XG5cbmZ1bmN0aW9uIGJpbmFyeVRyZWUoYXJyLCBzdGFydCwgZW5kKSB7XG4gIGlmIChzdGFydCA+IGVuZCkgcmV0dXJuIG51bGw7XG5cbiAgY29uc3QgbWlkID0gTWF0aC5mbG9vcigoc3RhcnQgKyBlbmQpIC8gMik7XG5cbiAgY29uc3Qgcm9vdCA9IG5ldyBOb2RlKGFyclttaWRdKTtcblxuICByb290LmxlZnQgPSBiaW5hcnlUcmVlKGFyciwgc3RhcnQsIG1pZCAtIDEpO1xuICByb290LnJpZ2h0ID0gYmluYXJ5VHJlZShhcnIsIG1pZCArIDEsIGVuZCk7XG5cbiAgcmV0dXJuIHJvb3Q7XG59XG5cbmNvbnN0IHByZXR0eVByaW50ID0gKG5vZGUsIHByZWZpeCA9IFwiXCIsIGlzTGVmdCA9IHRydWUpID0+IHtcbiAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKG5vZGUucmlnaHQgIT09IG51bGwpIHtcbiAgICBwcmV0dHlQcmludChub2RlLnJpZ2h0LCBgJHtwcmVmaXh9JHtpc0xlZnQgPyBcIuKUgiAgIFwiIDogXCIgICAgXCJ9YCwgZmFsc2UpO1xuICB9XG4gIGNvbnNvbGUubG9nKGAke3ByZWZpeH0ke2lzTGVmdCA/IFwi4pSU4pSA4pSAIFwiIDogXCLilIzilIDilIAgXCJ9JHtub2RlLmRhdGF9YCk7XG4gIGlmIChub2RlLmxlZnQgIT09IG51bGwpIHtcbiAgICBwcmV0dHlQcmludChub2RlLmxlZnQsIGAke3ByZWZpeH0ke2lzTGVmdCA/IFwiICAgIFwiIDogXCLilIIgICBcIn1gLCB0cnVlKTtcbiAgfVxufTtcblxuY29uc3QgaW5zZXJ0ID0gKHZhbHVlLCByb290KSA9PiB7XG4gIGlmIChyb290ID09PSBudWxsKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgcm9vdCA9IG5ldyBOb2RlKHZhbHVlKTtcbiAgICByZXR1cm4gcm9vdDtcbiAgfVxuICBpZiAodmFsdWUgPCByb290LmRhdGEpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICByb290LmxlZnQgPSBpbnNlcnQodmFsdWUsIHJvb3QubGVmdCk7XG4gIH0gZWxzZSBpZiAodmFsdWUgPiByb290LmRhdGEpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICByb290LnJpZ2h0ID0gaW5zZXJ0KHZhbHVlLCByb290LnJpZ2h0KTtcbiAgfVxuXG4gIHJldHVybiByb290O1xufTtcblxuY29uc3QgbWluVmFsdWUgPSAobm9kZSkgPT4ge1xuICBsZXQgbWludiA9IG5vZGUuZGF0YTtcbiAgd2hpbGUgKG5vZGUubGVmdCAhPT0gbnVsbCkge1xuICAgIG1pbnYgPSBub2RlLmxlZnQuZGF0YTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBub2RlID0gbm9kZS5sZWZ0O1xuICB9XG4gIHJldHVybiBtaW52O1xufTtcblxuY29uc3QgZGVsZXRlSXRlbSA9ICh2YWx1ZSwgcm9vdCkgPT4ge1xuICBpZiAocm9vdCA9PT0gbnVsbCkge1xuICAgIHJldHVybiByb290O1xuICB9XG5cbiAgaWYgKHZhbHVlIDwgcm9vdC5kYXRhKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgcm9vdC5sZWZ0ID0gZGVsZXRlSXRlbSh2YWx1ZSwgcm9vdC5sZWZ0KTtcbiAgfSBlbHNlIGlmICh2YWx1ZSA+IHJvb3QuZGF0YSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHJvb3QucmlnaHQgPSBkZWxldGVJdGVtKHZhbHVlLCByb290LnJpZ2h0KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAocm9vdC5sZWZ0ID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gcm9vdC5yaWdodDtcbiAgICB9XG4gICAgaWYgKHJvb3QucmlnaHQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiByb290LmxlZnQ7XG4gICAgfVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgcm9vdC5kYXRhID0gbWluVmFsdWUocm9vdC5yaWdodCk7XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICByb290LnJpZ2h0ID0gZGVsZXRlSXRlbShyb290LmRhdGEsIHJvb3QucmlnaHQpO1xuICB9XG5cbiAgcmV0dXJuIHJvb3Q7XG59O1xuXG5mdW5jdGlvbiBzdGFydEl0KCkge1xuICBjb25zdCBhcnIgPSBbMSwgNywgNCwgMjMsIDgsIDksIDQsIDMsIDUsIDcsIDksIDY3LCA2MzQ1LCAzMjRdOyAvLyBUSElTIElTIE5PVCBUSEUgQVJSQVkgVEhBVCBHRVRTIFBSSU5URUQgT1VUXG5cbiAgY29uc3QgbmV3QXJyID0gc29ydChhcnIpO1xuXG4gIGNvbnN0IHJvb3QgPSBuZXcgVHJlZShuZXdBcnIpO1xuXG4gIGNvbnN0IHN0YXJ0ID0gMDtcbiAgY29uc3QgZW5kID0gbmV3QXJyLmxlbmd0aCAtIDE7XG5cbiAgcm9vdC5yb290ID0gYmluYXJ5VHJlZShuZXdBcnIsIHN0YXJ0LCBlbmQpO1xuICBpbnNlcnQoMTI3LCByb290LnJvb3QpO1xuICBkZWxldGVJdGVtKDgsIHJvb3Qucm9vdCk7XG4gIHByZXR0eVByaW50KHJvb3Qucm9vdCk7XG59XG5cbnN0YXJ0SXQoKTtcbiJdLCJuYW1lcyI6WyJUcmVlIiwiY29uc3RydWN0b3IiLCJhcnIiLCJ0aGlzIiwicm9vdCIsInNvcnQiLCJsZW5ndGgiLCJtaWQiLCJNYXRoIiwiZmxvb3IiLCJsZWZ0IiwicmlnaHQiLCJpIiwiaiIsInJlcyIsInB1c2giLCJtZXJnZSIsInNsaWNlIiwiTm9kZSIsImRhdGEiLCJiaW5hcnlUcmVlIiwic3RhcnQiLCJlbmQiLCJwcmV0dHlQcmludCIsIm5vZGUiLCJwcmVmaXgiLCJhcmd1bWVudHMiLCJ1bmRlZmluZWQiLCJpc0xlZnQiLCJjb25zb2xlIiwibG9nIiwiaW5zZXJ0IiwidmFsdWUiLCJkZWxldGVJdGVtIiwibWludiIsIm1pblZhbHVlIiwibmV3QXJyIiwic3RhcnRJdCJdLCJzb3VyY2VSb290IjoiIn0=