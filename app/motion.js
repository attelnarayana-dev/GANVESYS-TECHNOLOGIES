'use client';
import {useEffect} from 'react';
export default function Motion(){
 useEffect(()=>{
  const els=[...document.querySelectorAll('[data-reveal]')];
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');io.unobserve(e.target)}}),{threshold:.12});
  els.forEach(e=>io.observe(e));
  const onMove=e=>{document.querySelectorAll('[data-tilt]').forEach(el=>{const r=el.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5;const y=(e.clientY-r.top)/r.height-.5;el.style.setProperty('--rx',`${(-y*4).toFixed(2)}deg`);el.style.setProperty('--ry',`${(x*5).toFixed(2)}deg`)})};
  window.addEventListener('pointermove',onMove,{passive:true});
  return()=>{io.disconnect();window.removeEventListener('pointermove',onMove)};
 },[]);return null
}
