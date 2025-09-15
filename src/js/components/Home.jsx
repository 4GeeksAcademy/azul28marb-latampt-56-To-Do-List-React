import React, { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [ inputValue, setInputValue ] = useState("")
	const [ toDos, setToDos ] = useState([])
	return (
			<div className="container">
				<h1>To-do list 📌</h1>
				<ul>
					<li className="todo-item">
						<input 
							type="text" 
							onChange={(e) => setInputValue(e.target.value)}
							value={inputValue}
							onKeyUp={(e) => {
								if (e.key === "Enter") {
									setToDos(toDos.concat(inputValue))
									setInputValue("")
								}
							}}
							placeholder="What needs to be done?"></input>
					</li>
					{toDos.map((item, index) => (
						<li className="todo-item" key={index}>
							{item} {" "} 
							<i 
								className="fa-solid fa-x delete" 
								onClick={() => 
									setToDos(
										toDos.filter(
											(t, currentIndex) =>
												index != currentIndex
										)
									)
								}>
							</i>
						</li>
					))}
				</ul>
				<ul>
					<li className="NumberTasks">{toDos.length} tasks</li>
				</ul>
			</div>
	);
};

export default Home;