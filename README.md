# jquery.skillset.js

Showcase your skills with nice progress bars and grouped by headings and sub-headings.
You can also showcase other items, like project tasks completion and so on.

Features
---------
- Supports headings, subheadings, rows without progressbars
- Accepts input data in a clean and simple JSON format
- Optionally collapses the container to a specified height and expands it on click.

Example
---------
You can see jquery.skillset in action [here](http://dan-mirescu.github.io/jquery_skillset/)

Usage
---------
First you need to include the following in your page:
- jquery
- CSS rules. You will find default rules in the CSS file in this repository.
- The jquery.skillset.js script

Then, have your JSON ready and call skillSet on a DOM container of your choice:

```js
var skillsData = {
  "Skills category" : {
    "Skill #1" : 0.7,
    "Skill #2" : 0.25,
    "Row with no progress bar" : "",
  },
  "Second skills category" : {
    "Skill #3" : 0.67,
    "#Use a subheading by putting a '#' at the beginning of the label" : "",
    "Skill #4" : 0.8
  },
  // or use skillSet to show project tasks completion:
  "Project ABC123" : {
    "Task #1" : 0.4
    "Task #2" : 0.3,
    "#Other tasks" : "",
    "Task #3" : 0.2
  }
};

jQuery("#container").skillSet(skillsData, { collapseHeight: 150 });
```

Usage notes
-------
- Score values can be any decimal value between 0 and 1 (inclusive)
- If you want a line without a score, replace the score value with an empty string
- You can insert a subheading by putting a '#' at the beginning of the label. Double the '#' if you want the subheading to actually begin with a '#'.

Configuration parameters
-------
- ***collapseHeight*** - optional, collapse the skills container to the specified height, in pixels. "Read more" and "Collapse" links will automatically be displayed
- ***readMoreString*** - optional, override default "Read more" text
- ***collapseString*** - optional, override default "Collapse" text
