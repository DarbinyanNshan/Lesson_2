import React from "react";
import "./style.css"

export class Handle extends React.Component{
    constructor(props) {
        super(props) 
        this.state = {
            number: 0,
            value: 1
        }

    }

    

    Plus = ()=>{
        this.setState({number: this.state.number + this.state.value})
    }
    Minus = ()=>{
        if(this.state.number <= 0){
            this.setState({number: 0})
        }
        else{
            this.setState({number: this.state.number - this.state.value})
        }
        
    }

    handleCHange = (e)=>{
        if(e.target.value <= 0){
            this.setState({value: 1})
        }else{
            this.setState({value: +e.target.value})
        }
    }




    render(){
        const{text,image} = this.props

        return <div className="demo">
            <button onClick={this.Plus}>+</button>
            <div className={`block3 ${image}? block : block2`}>{this.state.number}</div>
            <button onClick={this.Minus}>-</button>
            <input type="number" onChange={this.handleCHange}/>
            <p>{text}</p>
            {image? <img src={image} alt="nkar" /> : null}
        </div>
    }
   
}