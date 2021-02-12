import React, {
	useState,
	useEffect
} from "react";
import "./Candidate.css";
import data from "./Assets/candidatehire.json";
import Skill from "../Components/Skill";


function Candidate() {

	const [skills, setSkills] = useState([]);
	const [filters, setFilters] = useState([]);
	const [search, setSearch] = useState("");

	useEffect(() => setSkills(data), []);

	const filterFunc = ({
		skills
	}) => {
		if (filters.length === 0) {
			return true;
		}
	};

	const filteredSkills = skills.filter((obj) => {
		let val;
		obj.skills.forEach((skill) => {
			val = skill.toLowerCase().includes(search.toLowerCase());
		});
		return val;
	});

  // console.log(data);
  return (
     
    <div className="Hire my-10">

       <div className="heading">
            <h1>HIRE CANDIDATE NOW !!</h1>
       </div>
      <div className="mx-20 mb-20">
        <input
              className="search-box rounded"
              type="text"
              placeholder="Search acc to Skills like builder.."
              onChange={(e) => setSearch(e.target.value)}
            ></input>
      </div>
          {filteredSkills.length === 0 ? (
            
      <h3 className="fetching">Fetching Names Or It doesn't exist..............</h3>
          ) : (
            filteredSkills.map((skill) => (
              
      <Skill skill={skill} key={skill.id} />
            ))
          )}
        
    </div>
      );
    }
    
    export default Candidate;
    