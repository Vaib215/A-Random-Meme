import React, { Component } from "react";
import MemeItem from "./MemeItem";
import CircularProgress from '@mui/material/CircularProgress';
import { Button } from "@mui/material";
export default class MemesList extends Component {

  constructor() {
    super();
    this.state = {
      memes: [],
      loading: true,
    }
  }
  fetchData = async () => {
    let url = "https://meme-api.herokuapp.com/gimme/9"
    let data = await fetch(url)
    return await data.json()
  }
  async componentDidMount() {
    const data = await this.fetchData()
    this.setState({ memes: data.memes, loading: false })
  }

  handleMoreMemes = async () => {
    this.setState({ loading: true })
    const data = await this.fetchData()
    this.setState({ memes: data.memes, loading: false })
  }
  render() {
    return (
      <div>
        <section className="text-blue-400 body-font z-0">
          <div className="container px-5 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 id="head" className="sm:text-3xl text-2xl font-medium title-font pt-24">
                Latest memes ahead
              </h1>
            </div>
            {this.state.loading ?
              <div className="flex flex-col justify-center h-[40vh] items-center">
                <CircularProgress />
                <p>Loading...</p>
              </div> : <br />}
            <div className="flex flex-wrap -m-4">
              {this.state.memes.map((e, i) => {
                return (
                  <MemeItem key={i} imgUrl={e.url} ups="Todo" />
                )
              })}
            </div>
            <div className="my-8 mx-auto">
              <Button variant="contained" onClick={this.handleMoreMemes}><a href="#head"> Load More...</a></Button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
