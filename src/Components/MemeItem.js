import React, { Component } from 'react'

export default class MemeItem extends Component {
  render() {
    let {imgUrl} = this.props
    return (
      <div className="lg:w-1/3 md:w-1/2 w-full h-84 p-4 block relative overflow-scroll">
          <img
            alt="gallery"
            className="w-full object-cover object-center"
            src={imgUrl}
          />
      </div>
    )
  }
}
