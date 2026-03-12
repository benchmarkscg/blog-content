---
title: "Case Study: Orbital Riveting Machine Safety Remediation"
slug: "case-study-orbital-riveting-machine"
date: "2026-03-12"
tags: ["Case Study", "ISO 12100", "ISO 13849"]
description: "A real industrial safety remediation case involving an orbital riveting machine, an E-Stop failure, and a redesign aligned with modern safety standards."
image: "/assets/img/riveting-cover.jpg"
type: "blog"
author: "Humberto Vargas"
---

# <i class="bi bi-eye"></i> Initial Observation

One operator reported something odd: When he pressed the E-Stop, the machine didn’t fully stop.  
The rotary index stopped immediately — but the riveting spindle kept spinning.  

On a machine with exposed moving parts, that’s not just a nuisance. It’s a safety failure.  

The equipment was an old orbital riveting unit that had supposedly been *“remediated”* years ago. The rotary index fed sub-assemblies into the riveting spindle, and according to the documentation that existed at the time, the machine was considered safe.  

At first glance, it looked like a minor wiring issue. Maybe a missing contactor to separate logic from safety. An easy fix, right?  
We couldn’t have been more wrong.

---

## <i class="bi bi-gear"></i> The Process

Before touching a single wire, we needed to answer a simple question: **Where are we standing?**

To understand the real situation, we started with the basics:

- Do we have a previous risk assessment?  
- Are there electrical diagrams available?  
- Is it actually necessary for the spindle to stop when the E-Stop is pressed?  

When dealing with safety systems, every decision must answer two questions:

- **What should the machine do?**  
- **Why should it behave that way?**  

Those answers must be supported by harmonized safety standards.  

In this case, the answer became clear quickly: An emergency stop must bring the machine to a **safe state by removing or controlling hazardous energy**. The spindle continuing to rotate clearly violated that principle.  

But that E-Stop problem was only the tip of the iceberg. The real answer to *“where are we standing?”* turned out to be: **on thin ice.**  

There was no documentation. Not a single risk assessment. No electrical diagrams. No traceable validation of the previous remediation.  

As we inspected the machine further, additional problems surfaced:

- Guards were torn, broken, or simply missing.  
- Light curtains were installed — but they weren’t rated for hand detection.  
- The safety distance from the hazard zone was incorrect.  
- The PLC was extremely outdated. Logic and safety were effectively wired into the same control architecture, relying on little more than basic relays.  

In short, the system had multiple **single points of failure**.

---

## <i class="bi bi-search"></i> The Discovery

Opening the electrical panel felt like stepping into an industrial time capsule.  

Inside we found:

- No safety relays  
- No redundant contactors  
- No separation between safety and control logic  
- A legacy PLC handling both process control and safety functions  

In other words, a single failure could leave the machine in motion.  

And here’s the key principle: Pressing an E-Stop isn’t asking the machine to *pause politely*. It’s demanding that the system **immediately transition to a safe state**.  

That requirement is clearly established in modern machine safety standards such as:  
- ISO 12100  
- ISO 13849  
- ISO 13850  

The machine we were looking at did not meet those expectations.

---

## <i class="bi bi-tools"></i> The Remediation

Once the situation was understood, the solution was straightforward in principle: **go back to fundamentals.**

### <i class="bi bi-clipboard-check"></i> Risk Assessment
A full risk assessment was performed to identify the main hazards:
- Moving rotating spindle  
- Pinch points in the indexing system  
- Risk of unexpected restart  

From this assessment we determined the **required Performance Level (PLr)** for each safety function.

---

### <i class="bi bi-diagram-3"></i> Safety System Redesign
The control architecture was redesigned to properly separate safety and process control. Key improvements included:

- Installing **redundant contactors** to isolate spindle power  
- Adding a **safety relay** to monitor the E-Stop circuit  
- Separating **logic control from safety control**  
- Updating wiring and labeling  
- Installing a **redundant safety-rated pneumatic valve** to prevent the spindle from dropping when energy is removed  

The PLC now handles only **process logic**, while the safety system independently manages hazardous energy.

---

### <i class="bi bi-check2-circle"></i> Validation
No safety upgrade is complete without validation. We simulated several fault conditions, including:

- Stuck contacts  
- Broken wires  
- False signals  

The system successfully detected faults and maintained safe behavior.  

Then came the final test. The operator pressed the E-Stop again.  
This time, the spindle stopped instantly. Silence. Exactly what an emergency stop should deliver.

---

## <i class="bi bi-arrow-left-right"></i> Before vs After

### ❌ Legacy System

//

**Issues:**
- No safety relay  
- No redundant contactors  
- Logic and safety combined in a single controller  

![Legacy diagram](/assets/img/riveting-machine-legacy-wiring.jpg)
**Figure 1:** Legacy system wiring — single‑channel E‑Stop only shutting down the index motor.

### ✅ Remediated System
![Basic safety diagram](/assets/img/riveting-machine-revised-wiring.png)
**Figure 2:**basic circuitry for the improvements, contactors for the power/logic and safety E-Stop dual channel configuration.

**Improvements:**
- Clear separation between safety and logic  
- Redundant contactors isolate hazardous energy  
- PLC handles only process control  
- Safety relay monitors the emergency stop circuit  

---

## <i class="bi bi-exclamation-triangle"></i> Why This Matters

Many older machines across North American factories were “remediated” years ago according to the safety expectations of their time.  
But standards evolve. Without periodic reassessment, a machine that was once considered compliant may no longer meet modern safety requirements.  

This is especially common in legacy equipment where documentation has been lost or incomplete.

---

## <i class="bi bi-lightbulb"></i> Practical Takeaways

If you're evaluating older industrial machinery, verify the following:

- Emergency stops isolate or control **all hazardous energy**  
- Safety and control logic are **architecturally separated**  
- Risk assessments are documented and current  
- Safety components meet modern performance levels  
- Electrical diagrams are available and accurate  

Compliance isn’t just paperwork — it’s protection.

---

## <i class="bi bi-journal-check"></i> Lessons Learned

This case reinforced several important principles:

- **Never assume** a machine is safe just because it was previously remediated.  
- **Documentation matters.** Without diagrams, you're working blind.  
- **Standards are your foundation.**  
- **Technology evolves**, and older solutions may no longer be acceptable.  
- **A true safety culture prioritizes prevention over convenience.**

---

## <i class="bi bi-check-circle"></i> Conclusion

Machine safety is not a one-time project. It’s a continuous process shaped by aging equipment, evolving standards, and human assumptions.  

That day, a spindle that refused to stop reminded us of a simple truth: Safety is not negotiable.  

Because in the end, an emergency stop is not just a button.  
It’s a promise.
