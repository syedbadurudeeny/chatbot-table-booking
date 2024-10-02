import { useState } from "react";
import { Link } from "react-router-dom";

function Table(props){

    const initialValues={id:null, name:"",tnum:"", phone:"", date:""};

    const [inputs,setInputs]=useState(initialValues);


    function handleChange(e){
     const name= e.target.name;
     const value=e.target.value;

     setInputs({...inputs, [name] :value});
     console.log(inputs);

    }

    function handleSubmit(e){
        e.preventDefault();
        props.booktable(inputs);
        setInputs(initialValues);
    }

    return(
        <>
        <main className="table-page">
        <div className="page">
        <h2><Link to={'/dashboard'} className="home-content">dashboard</Link></h2>
        </div>
        <form className="form"  onSubmit={handleSubmit}>

<div className="form-inputs">
<lable htmlFor="name">Name</lable>
<input type="text" className="name" id="name" name="name" onChange={handleChange} value={inputs.name} />

<lable htmlFor="tnum">Table Number</lable>
<input type="text" className="tnum" id="tnum" name="tnum" onChange={handleChange}  value={inputs.tnum} />

<lable htmlFor="phone">Phone</lable>
<input type="number" className="phone" id="phone" name="phone" onChange={handleChange} value={inputs.phone} />

<lable htmlFor="date">Date</lable>
<input type="date" className="date" id="date" name="date" onChange={handleChange} value={inputs.date} />

<button>Submit</button>
</div>
</form>
        </main>
        </>
    )
}

export default Table;