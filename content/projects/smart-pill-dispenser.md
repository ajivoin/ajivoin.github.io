---
title: "Smart Pill Dispenser"
tech: ["Ruby on Rails", "JavaScript", "Arduino (C/C++)"]
order: 1
---

Many people struggle with remembering to take their medications. We wanted to leverage smart technology to help people remember to take their medicine!

At Hack OHI/O 2019, we created a smart pill dispenser that reminds people to take their medications. Patients or their caretaker can specify a schedule for each of their medications. The dispenser keeps track of how many pills are left, what times the medication is dispensed, and if the pills are actually taken.

We built a mobile-friendly web app where the medication schedule is entered so the pills are dispensed at the correct time. The medication history is visible, showing if pills were taken, and if so, when they were taken. Text notifications are sent out when the pill is dispensed, if the pill is still not taken after a specified amount of time, and when a refill is needed.

A physical prototype was constructed to show our idea in action. Hardware components include an Arduino, NodeMCU, servo motors, a display, and an ultrasonic sensor. The dispenser communicated with the web app over Wi-Fi.

Our project got third place overall at Hack OHI/O 2019, Ohio State's flagship hackathon with over 800 attendees.

Read the full write-up in the [blog post](/posts/pill-dispenser/).
