/* 

This exercise, based on the post http://www.petecorey.com/blog/2019/08/19/animating-a-canvas-with-react-hooks/,
demos a few animations from Dwitter (dwitter.net).

The Javascript from the dweet code samples is enclosed in functions like the "u(t)" examples under useEffect below.
To add a sample from Dwitter you only need to add another function enclosing your choosen dweet code,
Since only the function named u(t) is run, you will need to name your function "u(t)" and rename 
to something else the previous u(t) (or just delete it).

The dweet samples often run "as is", however sometimes some tweaking is required.

*/

import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
 
const getPixelRatio = context => {
    var backingStore =
    context.backingStorePixelRatio ||
    context.webkitBackingStorePixelRatio ||
    context.mozBackingStorePixelRatio ||
    context.msBackingStorePixelRatio ||
    context.oBackingStorePixelRatio ||
    context.backingStorePixelRatio ||
    1;
    
    return (window.devicePixelRatio || 1) / backingStore;
};
 
 const Dweet = () => {
    let ref = useRef();
     
    useEffect(() => {
        let c = ref.current;
        let x = c.getContext('2d');
         
        let ratio = getPixelRatio(x);
        let width = getComputedStyle(c)
            .getPropertyValue('width')
            .slice(0, -2);
        let height = getComputedStyle(c)
            .getPropertyValue('height')
            .slice(0, -2);
        
        c.width = width * ratio;
        c.height = height * ratio;
        c.style.width = `${width}px`;
        c.style.height = `${height}px`;
        console.log(c.width, c.height);
        
        var S = Math.sin;
        var C = Math.cos;
        var T = Math.tan;
        function R(r,g,b,a) {
          a = a === undefined ? 1 : a;
          return "rgba("+(r|0)+","+(g|0)+","+(b|0)+","+a+")";
        };

        let requestId,
            t = 0;
        const render = () => {
            x.clearRect(0, 0, c.width, c.height);
            x.beginPath();

            // PLACE YOUR FUNCTIONS WITH DWITTER SAMPLES HERE BELOW, AND
            // RENAME AS "u" ONLY THE FUNCTION THAT YOU WANT TO RUN

            function u10(t) {
                // Space from space
                // hoplite 5165
                let a = 0;
                let i = 0;
                let w = 0;
                let z = 0;
                x.fillRect(0,0,i=w=c.width=2e3,w);
                x.fillStyle="#fff";
                // eslint-disable-next-line no-unused-expressions
                for(;i--;)T=t*99,z=w*99/(i-T%1),a=i+T-T%1,x.fillRect(C(a*a)*z+1e3,C(a*w)*z+500,w/i,w/i)
            }

            function u9(t) {
                // Ping pong
                // icecuber 135

                /* c.width=192;
                let A=Math.abs;
                let Y=A(t*99%176-88);
                let X=A(t*139%376-188);
                x.F=x.fillRect;
                x.F(X,Y+7,3,3);
                x.F(187,Y+C(X/39)*29,5,20);
                x.F(0,Y-S(X/29)*22,5,20); */

                c.width=192;
                let A=Math.abs;
                let Y=A(t*99%176-88);
                let X=A(t*139%376-188);
                x.F=x.fillRect;
                x.F(X,Y+7,3,33);
                x.F(187,Y+C(X/39)*29,5,90);
                x.F(0,Y-S(X/29)*22,5,90);

            }

            function u8(t) {
                // Christmas tree
                // sadropol 3760 (check also  zensaiyuki)
                c.width|=0;
                for(let i=1;i<140;i++){let b=2*t+i;let o=200-(S(b+5)*126)%256;x.fillStyle=R(0,o,0,1);x.fillRect(940+((i/60)%1)*S(b)*200,400+i*6%400,8,8);} 
            }

            function u7(t) {
                // Blue waves
                // recursive 1978
                let a = 0;
                let h = 0;
                let g = 1;
                //for(let d=256;--d;)for(let X=-32;++X<32;x.fillRect(960+X*8e3/d,100+7e4/d-h,120,9))x.fillStyle=R(h=(C(a=d/9+t*6)+C(X/9+a/3))*35,g=h+C(X^d)*6+90,g/.8)
                for(let d=256;--d;)for(let X=-32;++X<32;x.fillRect(960+X*8e3/d,100+7e4/d-h,120,129))x.fillStyle=R(h=(C(a=d/9+t*6)+C(X/9+a/3))*35,g=h+C(X^d)*6+90,g/.8)
            }

            function u(t) {
                // Fish
                // New_Core 1829
                c.width=1920;
                for(let i=16;i--;)x.ellipse(1e3+300*S(t+i*.1),500+50*C(t+i*.1),160*S(-i*.5)+160,50*S(i*.1)+5,1.6+.5*S(t*.5),9.5,0,6.3);
                x.stroke();
            }

            function u5(t) {
                // Square grid
                //  sigveseb 701
                let F=0;
                let i = 0;
                let m = 0;
                let n = 0;
                let W = 0;
                
                (F=Z=>{for(x.fillStyle=R(W=1/Z*4e3,W/2,W/4),i=Z*Z*2;n=i%Z,m=i/Z|0,i--;n%2^m%2&&x.fillRect((n-t%2-1)*W,(S(t)+m-1)*W,W,W));Z&&F(Z-6)})(36)
            }

            function u4(t) {
                // Flying dashes
                // Tekmap 23030
                let a = 0;
                let j = 0;
                for(c.width|=j=15,x.translate(960,540);j--;x.rotate(t/9+j))for(let i=20;i--;x.fillRect(i*9-80,90*S(t*(j%5+3)-i/8)-a/2+99+10*j,4,a))a=1*T(i/5)
            }

            function u3(t) {
                // Rotating globe
                // p01 5600
                let h = null;
                //for(let i=h=c.width=432;i--;)C(t-i)>0&&x.fillText('.⬤'['榁翻꺿듻ퟝ믭󫥤큰삗⢠挎ᩐ肦䰠椉䠊ᑒꊐࢀင'.charCodeAt(i/16)>>i%16&1],192+(i*h-i*i)**.5*S(t-i)/2,i/2+9)
                for(let i=h=c.width=1980;i--;)C(t-i)>0&&x.fillText('.⬤'['榁翻꺿듻ퟝ믭󫥤큰삗⢠挎ᩐ肦䰠椉䠊ᑒꊐࢀင'.charCodeAt(i/16)>>i%16&1],950+(i*h-i*i)**.5*S(t-i)/2,i/2+9)
            }

            function u0(t) {
                // Character storm
                // cesque 8020
                c.width|=0
                x.font='50px consolas'
                let s=u+' '   // if you change the name of the function change it here too!
                for(let q=0;q<1920;q+=50){for(let r=0;r<1080;r+=50){x.fillText(s[(t*10+q+r*7)%s.length|1-1],q,r)}}
            }

            // SET THE ANIMATION SPEED AND RUN THE FUNCTION
            t += 0.008;
            u(t);

            requestId = requestAnimationFrame(render);
        };
        render();
        return () => {
            cancelAnimationFrame(requestId);
        };
    });
     
    return (
        <canvas
            ref={ref} 
            style={{ width: '1980px', height: '1400px' }}
        />
    );
 };
 
 export default Dweet;