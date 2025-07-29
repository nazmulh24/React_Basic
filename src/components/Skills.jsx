import React, { useState } from "react";
import Button from "./Button";

const Skills = () => {
  const [skills, setSkills] = useState(["JavaScript", "React", "Node.js"]);

  const handleSkills = () => {
    // ----> Prompt user for a new skill and add it to the list
    // const newSkill = prompt("Enter a new skill : ");
    // if (newSkill) {
    //   setSkills([...skills, newSkill]);
    // }

    // ----> Remove the last skill from the list
    // setSkills(skills.slice(0, -1));

    //  ----> Remove a specific skill (e.g., "Node.js")
    // setSkills(skills.filter((item) => item !== "Node.js"));

    // ----> Update the specific skill (e.g., "React" to "Next.js")
    setSkills(skills.map((item) => (item === "React" ? "Next.js" : item)));
  };

  return (
    <div className="m-10">
      <ul className="list-disc">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>

      {/* <Button onClick={handleSkills}>Add Skill</Button> */}
      {/* <Button onClick={handleSkills}>Remove Skill</Button> */}
      <Button onClick={handleSkills}>Update Skill</Button>
    </div>
  );
};

export default Skills;
