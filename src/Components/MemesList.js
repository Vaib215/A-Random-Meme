import React, { Component } from "react";
import MemeItem from "./MemeItem";
import CircularProgress from '@mui/material/CircularProgress';
export default class MemesList extends Component {
  
  constructor() {
    super();
    this.state = {
      memes:[],
      loading: true,
    }
  }
  async componentDidMount(){
    let url="https://meme-api.herokuapp.com/gimme/45"
    let data = await fetch(url)
    let parsedData = await data.json()
    this.setState({memes:parsedData.memes,loading:false})
  }
  render() {
    return (
      <div>
        <section className="text-blue-400 body-font z-0">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4">
                Latest memes ahead
              </h1>
            </div>
            {this.state.loading?
            <div className="flex justify-center h-[40vh] items-center">
              <CircularProgress/> 
            </div>: <br/>}
            <div className="flex flex-wrap -m-4">
              {this.state.memes.map((e,i)=>{
                return(
                  <MemeItem key={i} imgUrl={e.url} ups="Todo"/>
                )
              })}
            </div>
          </div>
        </section>
      </div>
    );
  }
}
