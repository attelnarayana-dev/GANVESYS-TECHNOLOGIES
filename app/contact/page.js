"use client";

import {Shell} from "../components";
import {useState} from "react";

export default function Contact(){
  const [s,setS]=useState("");
  const [busy,setBusy]=useState(false);

  async function go(e){
    e.preventDefault();
    const form=e.currentTarget;
    const data=Object.fromEntries(new FormData(form));
    if(!data.name || !data.email || !data.message){
      setS("Please complete your name, work email and requirement.");
      return;
    }
    setBusy(true);
    setS("Sending enquiry…");
    try{
      const r=await fetch("/api/leads",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(data)
      });
      if(r.ok){
        setS("Enquiry received. We'll get back to you.");
        form.reset();
      }else{
        setS("Unable to submit right now. Please try again.");
      }
    }catch{
      setS("Unable to submit right now. Please try again.");
    }finally{
      setBusy(false);
    }
  }

  return <Shell>
    <main className="contactPage">
      <section className="contactHero">
        <div className="wrap contactLayout">
          <div className="contactIntro">
            <div className="eyebrow">Start a project</div>
            <h1>Tell us what<br/><span>you're building.</span></h1>
            <p className="contactLead">Share the problem, the product, or the workflow you want to improve. We’ll turn the first conversation into a clear engineering plan.</p>

            <div className="contactSteps">
              <div><b>01</b><span>Describe</span></div>
              <div><b>02</b><span>Discuss</span></div>
              <div><b>03</b><span>Plan</span></div>
            </div>

            <div className="contactPromise">
              <span className="promiseDot"/>
              <div><b>Built around your requirement</b><small>Software · AI · QA · Cloud · Data · Security</small></div>
            </div>
          </div>

          <div className="contactFormWrap">
            <div className="formGlow"/>
            <form className="form contactForm" onSubmit={go} noValidate>
              <div className="formHead">
                <div><span className="miniDot"/>PROJECT INTAKE</div>
                <span>~ 2 min</span>
              </div>

              <div className="formRow">
                <label><span>Your name</span><input name="name" autoComplete="name" placeholder="Jane Smith"/></label>
                <label><span>Work email</span><input name="email" type="email" autoComplete="email" placeholder="jane@company.com"/></label>
              </div>

              <div className="formRow">
                <label><span>Company</span><input name="company" autoComplete="organization" placeholder="Company name"/></label>
                <label><span>Phone <em>optional</em></span><input name="phone" autoComplete="tel" placeholder="+91"/></label>
              </div>

              <label><span>What do you need?</span>
                <select name="service" defaultValue="">
                  <option value="">Select a capability</option>
                  <option>Software Engineering</option>
                  <option>AI & Automation</option>
                  <option>QA & Test Automation</option>
                  <option>Cloud & DevOps</option>
                  <option>Cyber Security</option>
                  <option>Data & Digital Transformation</option>
                </select>
              </label>

              <label><span>Tell us about the requirement</span>
                <textarea name="message" placeholder="What are you building, what problem are you solving, and what would success look like?"/>
              </label>

              <button className="btn primary contactSubmit" disabled={busy}>{busy?"Sending…":"Send enquiry ↗"}</button>
              {s&&<p className={`notice ${s.includes("received")?"success":""}`}>{s}</p>}
            </form>
          </div>
        </div>
      </section>

      <section className="contactBand">
        <div className="wrap contactBandInner">
          <div><div className="eyebrow">What happens next</div><h2>From first message to<br/>an engineering plan.</h2></div>
          <div className="contactFlow">
            <div><strong>01</strong><span>We review the requirement</span></div>
            <div><strong>02</strong><span>We align on scope & priorities</span></div>
            <div><strong>03</strong><span>We shape the right next step</span></div>
          </div>
        </div>
      </section>
    </main>
  </Shell>
}
