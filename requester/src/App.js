import React,{useState} from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Task from './Task'
import ChoiceTask from './ChoiceTask.jsx'
import DecisionTask from './DecisionTask'
import SentenceTask from './SentenceTask'

import Describe from './Describe'
import Requirement from './Requirement'
import Save from './Save'


function App() {
  const[setting, setValue] =useState("")

  const [taskName, setTask] = useState("")

  const [taskTitle, setTile] =useState("")

  const [taskDescription, setDescription] = useState("")

  const [taskExpiryDate, setDate] = useState("")

  const [masterWorkers, setMaster] = useState("")

  const [taskReward, setReward] = useState("")
  
  const [taskNumber, setNumber]= useState("")

  return (
    <div className = 'App' >
 
      <Task
      choiceChange={choiceT} 

      decisionChange={decisionTask}

      sentenceChange={sentenceTask}

      choiceCheck={taskName ==="ChoiceTask"}

      decisionCheck={taskName ==="DecisionTask"}

      sentenceCheck={taskName ==="SentenceTask"}

      ></Task>
      <Describe
      titleChange ={Title}
      descriptionChange = {Description}
      expiryChange = {ExpiryDate}
      ></Describe>
      <div>{setting}</div>
      
      <Requirement
      yesChange ={Master}
      noChange ={Master}
      yesCheck = {masterWorkers === "yes"}
      noCheck = {masterWorkers === "no"}
      
      rewardChange ={Reward}
      numberChange ={Number}></Requirement>
      <Save Submit={Submit} />

    </div>
  );
  function choiceT(){
    setValue(<ChoiceTask />)
    setTask("ChoiceTask")
    }
  function decisionTask(){
      setValue(<DecisionTask />)
      setTask("DecisionTask")
    }
    function sentenceTask(){
      setValue(<SentenceTask />)
      setTask("SentenceTask")
    }
    function Title(props){
      setTile(props.target.value)
     
    }
    function Description(props){
      setDescription(props.target.value)
    }
    function ExpiryDate(props){
      setDate(props.target.value)
    }
    function Master(props){
      setMaster(props.target.value)
    }
    function Reward(props){
      setReward(props.target.value)
    }
    function Number(props){
      setNumber(props.target.value)
    }
    
  function Submit(){

    fetch('http://localhost:8080/', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body : JSON.stringify({

        taskName: taskName,
        taskTitle: taskTitle,
        taskDescription: taskDescription,
        taskExpiryDate: taskExpiryDate,
        masterWorkers: masterWorkers ,
        taskReward: taskReward,
        taskNumber: taskNumber 
      })
      })
      .then(response => {
        response.json()})
      .then(data => console.log(data))
      .catch(err => {
      console.log("Error:" + err)
    })
}
}

export default App;
