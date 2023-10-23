# Traffic Light Controller Technical Test
## Time: 45 minutes## Language: JavaScript
### DescriptionCreate a JavaScript controller for a traffic light system at a 4-way intersection. The system should manage two traffic lights: one for the East-West direction and one for the North-South direction. The controller should adhere to the following specifications:
### Traffic Light Rules
1.**Green Light:**     - The green light should be on for 8 "ticks."
2.**Yellow Light:**     - The yellow light should be on for 3 "ticks."
3.**Red Light:**     - The red light should be on for at least 11 "ticks" (8 for the green and 3 for the yellow of the perpendicular direction), plus an additional 2 "ticks" where both lights are red for safety.
4.**Light Cycle Transition:**     - After each light cycle, the system should wait for the other light to finish before changing states.

### Implementation Guidelines- 
**Time Measurement:**     - To make the system testable, time should not be based on real clock time. Instead, use "steps" or "ticks" to represent time intervals.- 
**System Drive:**     - The system should be driven by these "steps" or "ticks."- 
**State Reading:**     - The controller should provide a way to read the state of the system, including the current "step" or "tick" for testing purposes, and the current state of each traffic light.

### Your TaskImplement the JavaScript traffic light controller based on the provided rules and guidelines. Ensure that it can be easily tested and that it accurately manages the state of each traffic light. Good luck!