(()=>{"use strict";class t{constructor(t){this.arr=t,this.root=null}}function l(t){if(t.length<=1)return t;const n=Math.floor(t.length/2);return function(t,l){let n=0,o=0;const e=[];for(;n<t.length&&o<l.length;)t[n]===l[o]?(e.push(t[n]),n+=1,o+=1):t[n]<l[o]?(e.push(t[n]),n+=1):(e.push(l[o]),o+=1);for(;n<t.length;)e.push(t[n]),n+=1;for(;o<l.length;)e.push(l[o]),o+=1;return e}(l(t.slice(0,n)),l(t.slice(n)))}class n{constructor(t){this.data=t,this.left=null,this.right=null}}function o(t,l,e){if(l>e)return null;const r=Math.floor((l+e)/2),u=new n(t[r]);return u.left=o(t,l,r-1),u.right=o(t,r+1,e),u}const e=function(t){let l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];null!==t&&(null!==t.right&&e(t.right,`${l}${n?"│   ":"    "}`,!1),console.log(`${l}${n?"└── ":"┌── "}${t.data}`),null!==t.left&&e(t.left,`${l}${n?"    ":"│   "}`,!0))},r=(t,l)=>null===l?l=new n(t):(t<l.data?l.left=r(t,l.left):t>l.data&&(l.right=r(t,l.right)),l),u=function(t){let l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(void 0!==t)return null===n&&l.push(t.data),t.left&&u(t.left,l,n),n&&n(t),t.right&&u(t.right,l,n),null===n?l:void 0};function h(t){console.log(t.data)}!function(){const n=l([1,7,4,23,8,9,4,3,5,7,9,67,6345,324]),i=new t(n),s=n.length-1;i.root=o(n,0,s),r(127,i.root),console.log(u(i.root,[],h)),e(i.root)}()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBQ2UsTUFBTUEsRUFDbkJDLFdBQUFBLENBQVlDLEdBQ1ZDLEtBQUtELElBQU1BLEVBQ1hDLEtBQUtDLEtBQU8sSUFDZCxFQW1DSyxTQUFTQyxFQUFLSCxHQUNuQixHQUFJQSxFQUFJSSxRQUFVLEVBQUcsT0FBT0osRUFFNUIsTUFBTUssRUFBTUMsS0FBS0MsTUFBTVAsRUFBSUksT0FBUyxHQUlwQyxPQXZDSyxTQUFlSSxFQUFNQyxHQUMxQixJQUFJQyxFQUFJLEVBQ0pDLEVBQUksRUFDUixNQUFNQyxFQUFNLEdBRVosS0FBT0YsRUFBSUYsRUFBS0osUUFBVU8sRUFBSUYsRUFBTUwsUUFDOUJJLEVBQUtFLEtBQU9ELEVBQU1FLElBQ3BCQyxFQUFJQyxLQUFLTCxFQUFLRSxJQUNkQSxHQUFLLEVBQ0xDLEdBQUssR0FDSUgsRUFBS0UsR0FBS0QsRUFBTUUsSUFDekJDLEVBQUlDLEtBQUtMLEVBQUtFLElBQ2RBLEdBQUssSUFFTEUsRUFBSUMsS0FBS0osRUFBTUUsSUFDZkEsR0FBSyxHQUlULEtBQU9ELEVBQUlGLEVBQUtKLFFBQ2RRLEVBQUlDLEtBQUtMLEVBQUtFLElBQ2RBLEdBQUssRUFHUCxLQUFPQyxFQUFJRixFQUFNTCxRQUNmUSxFQUFJQyxLQUFLSixFQUFNRSxJQUNmQSxHQUFLLEVBR1AsT0FBT0MsQ0FDVCxDQVNTRSxDQUhNWCxFQUFLSCxFQUFJZSxNQUFNLEVBQUdWLElBQ2pCRixFQUFLSCxFQUFJZSxNQUFNVixJQUcvQixDQzdDQSxNQUFNVyxFQUNKakIsV0FBQUEsQ0FBWWtCLEdBQ1ZoQixLQUFLZ0IsS0FBT0EsRUFDWmhCLEtBQUtPLEtBQU8sS0FDWlAsS0FBS1EsTUFBUSxJQUNmLEVBR0YsU0FBU1MsRUFBV2xCLEVBQUttQixFQUFPQyxHQUM5QixHQUFJRCxFQUFRQyxFQUFLLE9BQU8sS0FFeEIsTUFBTWYsRUFBTUMsS0FBS0MsT0FBT1ksRUFBUUMsR0FBTyxHQUVqQ2xCLEVBQU8sSUFBSWMsRUFBS2hCLEVBQUlLLElBSzFCLE9BSEFILEVBQUtNLEtBQU9VLEVBQVdsQixFQUFLbUIsRUFBT2QsRUFBTSxHQUN6Q0gsRUFBS08sTUFBUVMsRUFBV2xCLEVBQUtLLEVBQU0sRUFBR2UsR0FFL0JsQixDQUNULENBRUEsTUFBTW1CLEVBQWMsU0FBQ0MsR0FBcUMsSUFBL0JDLEVBQU1DLFVBQUFwQixPQUFBLFFBQUFxQixJQUFBRCxVQUFBLEdBQUFBLFVBQUEsR0FBRyxHQUFJRSxJQUFNRixVQUFBcEIsT0FBQSxRQUFBcUIsSUFBQUQsVUFBQSxLQUFBQSxVQUFBLEdBQy9CLE9BQVRGLElBR2UsT0FBZkEsRUFBS2IsT0FDUFksRUFBWUMsRUFBS2IsTUFBUSxHQUFFYyxJQUFTRyxFQUFTLE9BQVMsVUFBVSxHQUVsRUMsUUFBUUMsSUFBSyxHQUFFTCxJQUFTRyxFQUFTLE9BQVMsU0FBU0osRUFBS0wsUUFDdEMsT0FBZEssRUFBS2QsTUFDUGEsRUFBWUMsRUFBS2QsS0FBTyxHQUFFZSxJQUFTRyxFQUFTLE9BQVMsVUFBVSxHQUVuRSxFQUVNRyxFQUFTQSxDQUFDQyxFQUFPNUIsSUFDUixPQUFUQSxFQUVGQSxFQUFPLElBQUljLEVBQUtjLElBR2RBLEVBQVE1QixFQUFLZSxLQUVmZixFQUFLTSxLQUFPcUIsRUFBT0MsRUFBTzVCLEVBQUtNLE1BQ3RCc0IsRUFBUTVCLEVBQUtlLE9BRXRCZixFQUFLTyxNQUFRb0IsRUFBT0MsRUFBTzVCLEVBQUtPLFFBRzNCUCxHQXVHSDZCLEVBQVUsU0FBQzdCLEdBQXNDLElBQWhDOEIsRUFBS1IsVUFBQXBCLE9BQUEsUUFBQXFCLElBQUFELFVBQUEsR0FBQUEsVUFBQSxHQUFHLEdBQUlTLEVBQVFULFVBQUFwQixPQUFBLFFBQUFxQixJQUFBRCxVQUFBLEdBQUFBLFVBQUEsR0FBRyxLQUM1QyxRQUFhQyxJQUFUdkIsRUFnQkosT0FkaUIsT0FBYitCLEdBQ0ZELEVBQU1uQixLQUFLWCxFQUFLZSxNQUdkZixFQUFLTSxNQUNQdUIsRUFBUTdCLEVBQUtNLEtBQU13QixFQUFPQyxHQUd4QkEsR0FBVUEsRUFBUy9CLEdBRW5CQSxFQUFLTyxPQUNQc0IsRUFBUTdCLEVBQUtPLE1BQU91QixFQUFPQyxHQUdaLE9BQWJBLEVBRUtELE9BRlQsQ0FJRixFQUVBLFNBQVNFLEVBQU1oQyxHQUNieUIsUUFBUUMsSUFBSTFCLEVBQUtlLEtBQ25CLEVBRUEsV0FDRSxNQUVNa0IsRUFBU2hDLEVBRkgsQ0FBQyxFQUFHLEVBQUcsRUFBRyxHQUFJLEVBQUcsRUFBRyxFQUFHLEVBQUcsRUFBRyxFQUFHLEVBQUcsR0FBSSxLQUFNLE1BSW5ERCxFQUFPLElBQUlKLEVBQUtxQyxHQUdoQmYsRUFBTWUsRUFBTy9CLE9BQVMsRUFFNUJGLEVBQUtBLEtBQU9nQixFQUFXaUIsRUFIVCxFQUd3QmYsR0FDdENTLEVBQU8sSUFBSzNCLEVBQUtBLE1BR2pCeUIsUUFBUUMsSUFBSUcsRUFBUTdCLEVBQUtBLEtBRFgsR0FDd0JnQyxJQUN0Q2IsRUFBWW5CLEVBQUtBLEtBQ25CLENBRUFrQyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlLy4vc3JjL3RyZWUuanMiLCJ3ZWJwYWNrOi8vd2ViZGV2LXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmVlIHtcbiAgY29uc3RydWN0b3IoYXJyKSB7XG4gICAgdGhpcy5hcnIgPSBhcnI7XG4gICAgdGhpcy5yb290ID0gbnVsbDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2UobGVmdCwgcmlnaHQpIHtcbiAgbGV0IGkgPSAwO1xuICBsZXQgaiA9IDA7XG4gIGNvbnN0IHJlcyA9IFtdO1xuXG4gIHdoaWxlIChpIDwgbGVmdC5sZW5ndGggJiYgaiA8IHJpZ2h0Lmxlbmd0aCkge1xuICAgIGlmIChsZWZ0W2ldID09PSByaWdodFtqXSkge1xuICAgICAgcmVzLnB1c2gobGVmdFtpXSk7XG4gICAgICBpICs9IDE7XG4gICAgICBqICs9IDE7XG4gICAgfSBlbHNlIGlmIChsZWZ0W2ldIDwgcmlnaHRbal0pIHtcbiAgICAgIHJlcy5wdXNoKGxlZnRbaV0pO1xuICAgICAgaSArPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXMucHVzaChyaWdodFtqXSk7XG4gICAgICBqICs9IDE7XG4gICAgfVxuICB9XG5cbiAgd2hpbGUgKGkgPCBsZWZ0Lmxlbmd0aCkge1xuICAgIHJlcy5wdXNoKGxlZnRbaV0pO1xuICAgIGkgKz0gMTtcbiAgfVxuXG4gIHdoaWxlIChqIDwgcmlnaHQubGVuZ3RoKSB7XG4gICAgcmVzLnB1c2gocmlnaHRbal0pO1xuICAgIGogKz0gMTtcbiAgfVxuXG4gIHJldHVybiByZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzb3J0KGFycikge1xuICBpZiAoYXJyLmxlbmd0aCA8PSAxKSByZXR1cm4gYXJyO1xuXG4gIGNvbnN0IG1pZCA9IE1hdGguZmxvb3IoYXJyLmxlbmd0aCAvIDIpO1xuICBjb25zdCBsZWZ0ID0gc29ydChhcnIuc2xpY2UoMCwgbWlkKSk7XG4gIGNvbnN0IHJpZ2h0ID0gc29ydChhcnIuc2xpY2UobWlkKSk7XG5cbiAgcmV0dXJuIG1lcmdlKGxlZnQsIHJpZ2h0KTtcbn1cbiIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tbmFtZWQtYXMtZGVmYXVsdCwgaW1wb3J0L25vLW5hbWVkLWFzLWRlZmF1bHQtbWVtYmVyLCBpbXBvcnQvZXh0ZW5zaW9uc1xuaW1wb3J0IFRyZWUsIHsgc29ydCwgbWVyZ2UgfSBmcm9tIFwiLi90cmVlLmpzXCI7XG5cbmNsYXNzIE5vZGUge1xuICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB0aGlzLmxlZnQgPSBudWxsO1xuICAgIHRoaXMucmlnaHQgPSBudWxsO1xuICB9XG59XG5cbmZ1bmN0aW9uIGJpbmFyeVRyZWUoYXJyLCBzdGFydCwgZW5kKSB7XG4gIGlmIChzdGFydCA+IGVuZCkgcmV0dXJuIG51bGw7XG5cbiAgY29uc3QgbWlkID0gTWF0aC5mbG9vcigoc3RhcnQgKyBlbmQpIC8gMik7XG5cbiAgY29uc3Qgcm9vdCA9IG5ldyBOb2RlKGFyclttaWRdKTtcblxuICByb290LmxlZnQgPSBiaW5hcnlUcmVlKGFyciwgc3RhcnQsIG1pZCAtIDEpO1xuICByb290LnJpZ2h0ID0gYmluYXJ5VHJlZShhcnIsIG1pZCArIDEsIGVuZCk7XG5cbiAgcmV0dXJuIHJvb3Q7XG59XG5cbmNvbnN0IHByZXR0eVByaW50ID0gKG5vZGUsIHByZWZpeCA9IFwiXCIsIGlzTGVmdCA9IHRydWUpID0+IHtcbiAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKG5vZGUucmlnaHQgIT09IG51bGwpIHtcbiAgICBwcmV0dHlQcmludChub2RlLnJpZ2h0LCBgJHtwcmVmaXh9JHtpc0xlZnQgPyBcIuKUgiAgIFwiIDogXCIgICAgXCJ9YCwgZmFsc2UpO1xuICB9XG4gIGNvbnNvbGUubG9nKGAke3ByZWZpeH0ke2lzTGVmdCA/IFwi4pSU4pSA4pSAIFwiIDogXCLilIzilIDilIAgXCJ9JHtub2RlLmRhdGF9YCk7XG4gIGlmIChub2RlLmxlZnQgIT09IG51bGwpIHtcbiAgICBwcmV0dHlQcmludChub2RlLmxlZnQsIGAke3ByZWZpeH0ke2lzTGVmdCA/IFwiICAgIFwiIDogXCLilIIgICBcIn1gLCB0cnVlKTtcbiAgfVxufTtcblxuY29uc3QgaW5zZXJ0ID0gKHZhbHVlLCByb290KSA9PiB7XG4gIGlmIChyb290ID09PSBudWxsKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgcm9vdCA9IG5ldyBOb2RlKHZhbHVlKTtcbiAgICByZXR1cm4gcm9vdDtcbiAgfVxuICBpZiAodmFsdWUgPCByb290LmRhdGEpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICByb290LmxlZnQgPSBpbnNlcnQodmFsdWUsIHJvb3QubGVmdCk7XG4gIH0gZWxzZSBpZiAodmFsdWUgPiByb290LmRhdGEpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICByb290LnJpZ2h0ID0gaW5zZXJ0KHZhbHVlLCByb290LnJpZ2h0KTtcbiAgfVxuXG4gIHJldHVybiByb290O1xufTtcblxuY29uc3QgbWluVmFsdWUgPSAobm9kZSkgPT4ge1xuICBsZXQgbWludiA9IG5vZGUuZGF0YTtcbiAgd2hpbGUgKG5vZGUubGVmdCAhPT0gbnVsbCkge1xuICAgIG1pbnYgPSBub2RlLmxlZnQuZGF0YTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBub2RlID0gbm9kZS5sZWZ0O1xuICB9XG4gIHJldHVybiBtaW52O1xufTtcblxuY29uc3QgZGVsZXRlSXRlbSA9ICh2YWx1ZSwgcm9vdCkgPT4ge1xuICBpZiAocm9vdCA9PT0gbnVsbCkge1xuICAgIHJldHVybiByb290O1xuICB9XG5cbiAgaWYgKHZhbHVlIDwgcm9vdC5kYXRhKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgcm9vdC5sZWZ0ID0gZGVsZXRlSXRlbSh2YWx1ZSwgcm9vdC5sZWZ0KTtcbiAgfSBlbHNlIGlmICh2YWx1ZSA+IHJvb3QuZGF0YSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHJvb3QucmlnaHQgPSBkZWxldGVJdGVtKHZhbHVlLCByb290LnJpZ2h0KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAocm9vdC5sZWZ0ID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gcm9vdC5yaWdodDtcbiAgICB9XG4gICAgaWYgKHJvb3QucmlnaHQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiByb290LmxlZnQ7XG4gICAgfVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgcm9vdC5kYXRhID0gbWluVmFsdWUocm9vdC5yaWdodCk7XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICByb290LnJpZ2h0ID0gZGVsZXRlSXRlbShyb290LmRhdGEsIHJvb3QucmlnaHQpO1xuICB9XG5cbiAgcmV0dXJuIHJvb3Q7XG59O1xuXG5jb25zdCBmaW5kID0gKHZhbHVlLCByb290KSA9PiB7XG4gIGxldCByZXM7XG4gIGlmIChyb290ID09PSBudWxsKSB7XG4gICAgcmV0dXJuIFwibm8gZGF0YSBmb3VuZFwiO1xuICB9XG4gIGlmIChyb290LmRhdGEgPT09IHZhbHVlKSB7XG4gICAgcmV0dXJuIHJvb3QuZGF0YTtcbiAgfVxuXG4gIGlmICh2YWx1ZSA8IHJvb3QuZGF0YSkge1xuICAgIHJlcyA9IGZpbmQodmFsdWUsIHJvb3QubGVmdCk7XG4gIH0gZWxzZSBpZiAodmFsdWUgPiByb290LmRhdGEpIHtcbiAgICByZXMgPSBmaW5kKHZhbHVlLCByb290LnJpZ2h0KTtcbiAgfVxuXG4gIHJldHVybiByZXM7XG59O1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVmYXVsdC1wYXJhbS1sYXN0LCBjb25zaXN0ZW50LXJldHVyblxuY29uc3QgbGV2ZWxPcmRlciA9IChyb290LCBjYWxsYmFjayA9IG51bGwpID0+IHtcbiAgY29uc3QgcmVzID0gW107XG4gIGNvbnN0IHF1ZXVlID0gW107XG4gIGxldCB0bXAgPSByb290O1xuXG4gIHdoaWxlICh0bXAgIT09IHVuZGVmaW5lZCkge1xuICAgIGlmIChjYWxsYmFjayA9PT0gbnVsbCkge1xuICAgICAgcmVzLnB1c2godG1wLmRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWxsYmFjayh0bXApO1xuICAgIH1cblxuICAgIGlmICh0bXAubGVmdCAhPT0gbnVsbCkge1xuICAgICAgcXVldWUucHVzaCh0bXAubGVmdCk7XG4gICAgfVxuICAgIGlmICh0bXAucmlnaHQgIT09IG51bGwpIHtcbiAgICAgIHF1ZXVlLnB1c2godG1wLnJpZ2h0KTtcbiAgICB9XG4gICAgdG1wID0gcXVldWUuc2hpZnQoKTtcbiAgfVxuXG4gIGlmIChjYWxsYmFjayA9PT0gbnVsbCkge1xuICAgIHJldHVybiByZXM7XG4gIH1cbn07XG5cbmNvbnN0IGxldmVsT3JkZXJSZWN1cnNpdmUgPSAocm9vdCwgcXVldWUgPSBbXSwgY2FsbGJhY2sgPSBudWxsKSA9PiB7XG4gIGlmIChyb290ID09PSB1bmRlZmluZWQpIHJldHVybjtcblxuICBjYWxsYmFjayhyb290KTtcblxuICBpZiAocm9vdC5sZWZ0KSB7XG4gICAgcXVldWUucHVzaChyb290LmxlZnQpO1xuICB9XG4gIGlmIChyb290LnJpZ2h0KSB7XG4gICAgcXVldWUucHVzaChyb290LnJpZ2h0KTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICBsZXZlbE9yZGVyUmVjdXJzaXZlKHF1ZXVlLnNoaWZ0KCksIHF1ZXVlLCBjYWxsYmFjayk7XG59O1xuXG5jb25zdCBpbk9yZGVyID0gKHJvb3QsIHF1ZXVlID0gW10sIGNhbGxiYWNrID0gbnVsbCkgPT4ge1xuICBpZiAocm9vdCA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG5cbiAgaWYgKGNhbGxiYWNrID09PSBudWxsKSB7XG4gICAgcXVldWUucHVzaChyb290LmRhdGEpO1xuICB9XG5cbiAgaWYgKHJvb3QubGVmdCkge1xuICAgIGluT3JkZXIocm9vdC5sZWZ0LCBxdWV1ZSwgY2FsbGJhY2spO1xuICB9XG5cbiAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhyb290KTtcblxuICBpZiAocm9vdC5yaWdodCkge1xuICAgIGluT3JkZXIocm9vdC5yaWdodCwgcXVldWUsIGNhbGxiYWNrKTtcbiAgfVxuXG4gIGlmIChjYWxsYmFjayA9PT0gbnVsbCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxuICAgIHJldHVybiBxdWV1ZTtcbiAgfVxufTtcblxuZnVuY3Rpb24gaGVsbG8ocm9vdCkge1xuICBjb25zb2xlLmxvZyhyb290LmRhdGEpO1xufVxuXG5mdW5jdGlvbiBzdGFydEl0KCkge1xuICBjb25zdCBhcnIgPSBbMSwgNywgNCwgMjMsIDgsIDksIDQsIDMsIDUsIDcsIDksIDY3LCA2MzQ1LCAzMjRdOyAvLyBUSElTIElTIE5PVCBUSEUgQVJSQVkgVEhBVCBHRVRTIFBSSU5URUQgT1VUXG5cbiAgY29uc3QgbmV3QXJyID0gc29ydChhcnIpO1xuXG4gIGNvbnN0IHJvb3QgPSBuZXcgVHJlZShuZXdBcnIpO1xuXG4gIGNvbnN0IHN0YXJ0ID0gMDtcbiAgY29uc3QgZW5kID0gbmV3QXJyLmxlbmd0aCAtIDE7XG5cbiAgcm9vdC5yb290ID0gYmluYXJ5VHJlZShuZXdBcnIsIHN0YXJ0LCBlbmQpO1xuICBpbnNlcnQoMTI3LCByb290LnJvb3QpO1xuXG4gIGNvbnN0IHF1ZXVlID0gW107XG4gIGNvbnNvbGUubG9nKGluT3JkZXIocm9vdC5yb290LCBxdWV1ZSwgaGVsbG8pKTtcbiAgcHJldHR5UHJpbnQocm9vdC5yb290KTtcbn1cblxuc3RhcnRJdCgpO1xuIl0sIm5hbWVzIjpbIlRyZWUiLCJjb25zdHJ1Y3RvciIsImFyciIsInRoaXMiLCJyb290Iiwic29ydCIsImxlbmd0aCIsIm1pZCIsIk1hdGgiLCJmbG9vciIsImxlZnQiLCJyaWdodCIsImkiLCJqIiwicmVzIiwicHVzaCIsIm1lcmdlIiwic2xpY2UiLCJOb2RlIiwiZGF0YSIsImJpbmFyeVRyZWUiLCJzdGFydCIsImVuZCIsInByZXR0eVByaW50Iiwibm9kZSIsInByZWZpeCIsImFyZ3VtZW50cyIsInVuZGVmaW5lZCIsImlzTGVmdCIsImNvbnNvbGUiLCJsb2ciLCJpbnNlcnQiLCJ2YWx1ZSIsImluT3JkZXIiLCJxdWV1ZSIsImNhbGxiYWNrIiwiaGVsbG8iLCJuZXdBcnIiLCJzdGFydEl0Il0sInNvdXJjZVJvb3QiOiIifQ==