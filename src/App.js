import {Routes, Route, Link} from 'react-router-dom';
import Home from './components/Home'
import Crew from './components/Crew'
import Destination from './components/Destination';
import Technology from './components/Technology';
import Error404 from './components/Error404'
import './App.css';
import { Component } from 'react';



class App extends Component{
  
    constructor(props){
        super(props);
        this.state={
            name: 'home'            
        }
    }
    changeColor=name=>{
        this.setState({
           name
        })
    }

    render(){
    return(
        <div className={"main "+this.state.name}>
            
            <div className="top" >
                
                <div className="icon">
                    <img src=''/>
                </div>

                <nav className="main-nav">
                    <Link to="/home" onClick={()=>this.changeColor('home')}>00 HOME</Link>
                    <Link to="/destination" onClick={()=>this.changeColor('destination')} >01 DESTINATION</Link>
                    <Link to="/crew" onClick={()=>this.changeColor('crew')}>02 CREW</Link>
                    <Link to="/technology" onClick={()=>this.changeColor('technology')}>03 TECHNOLOGY</Link>
                </nav>
                
            </div>

            
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="home" element={<Home/>}/>
                <Route path="crew" element={<Crew />}/>
                <Route path="destination" element={<Destination/>}/>
                <Route path="technology" element={<Technology/>}/>
                <Route path="*" element={<Error404/>}/>
            </Routes>
        </div>
    
    )
    }
}
export default App;