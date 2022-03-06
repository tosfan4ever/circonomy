import { useState } from 'react'
import {Button} from 'antd'

import allCircles from '../../assets/img/all-circle.png'
import fundingCircles from '../../assets/img/funding-circle.png'
import newCircles from '../../assets/img/new-circle.png'

import {Wrapper} from './Feature.styles'



const Feature = () => {

  const [ringLeader, setRingLeader] = useState(true)

  const handleChange = () => {

  }

  return (
    <Wrapper>
      <div className="content">
        <div className="feat">
          <p className="bold9">New Circles</p>
          <div className="feat-content">
            <img src={newCircles} alt=""/>
            <div className="feat-details">
              <p className="bold7">Liberty Village | Genesis round</p>
              <div className="handle-rate apart">
                <span className="handle">@spidertian</span>
                <span className="rate sec bold9">50% funded so far</span>
              </div>
              <p className="bold7">Funding for 1 set to be installed</p>
              <div className="btns">
                <button className="button">Fund Round</button>
              </div>
            </div>
          </div>
        </div>
        <div className="feat">
          <p className="bold9">Funding Circles</p>
          <div className="feat-content">
            <img src={fundingCircles} alt=""/>
            <div className="feat-details">
              <p className="bold7">South Parkdale | Round IV</p>
              <div className="handle-rate apart">
                <span className="handle">@spidertian</span>
                <span className="rate sec bold9">10% funded so far</span>
              </div>
              <p className="bold7">Funding for fourth Precious Plastic set</p>
              <div className="btns">
                <button className="button btn-link">View Circle</button>
                <button className="button">Fund Round</button>
              </div>
            </div>
          </div>
        </div>
        <div className="feat">
          <p className="bold9">All Circles</p>
          <div className="feat-content">
            <img src={allCircles} alt=""/>
            <div className="feat-details">
              <p className="bold7">Newmarket</p>
              <div className="handle-rate apart">
                <span className="handle">@spidertian</span>
                <span className="rate sec bold9">1 set installed</span>
              </div>
              <p className="bold7">Active since 2 months ago</p>
              <div className="btns">
                <button className="button">View Circle</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="feat">
          <p className="bold9">New Circles</p>
          <div className="feat-content">
            <img src={newCircles} alt=""/>
            <div className="feat-details">
              <p className="bold7">Liberty Village | Genesis round</p>
              <div className="handle-rate apart">
                <span className="handle">@spidertian</span>
                <span className="rate sec bold9">50% funded so far</span>
              </div>
              <p className="bold7">Funding for 1 set to be installed</p>
              <div className="btns">
                <button className="button">Fund Round</button>
              </div>
            </div>
          </div>
        </div>
        <div className="feat">
          <p className="bold9">Funding Circles</p>
          <div className="feat-content">
            <img src={fundingCircles} alt=""/>
            <div className="feat-details">
              <p className="bold7">South Parkdale | Round IV</p>
              <div className="handle-rate apart">
                <span className="handle">@spidertian</span>
                <span className="rate sec bold9">10% funded so far</span>
              </div>
              <p className="bold7">Funding for fourth Precious Plastic set</p>
              <div className="btns">
                <button className="button btn-link">View Circle</button>
                <button className="button">Fund Round</button>
              </div>
            </div>
          </div>
        </div>
        <div className="feat">
          <p className="bold9">All Circles</p>
          <div className="feat-content">
            <img src={allCircles} alt=""/>
            <div className="feat-details">
              <p className="bold7">Newmarket</p>
              <div className="handle-rate apart">
                <span className="handle">@spidertian</span>
                <span className="rate sec bold9">1 set installed</span>
              </div>
              <p className="bold7">Active since 2 months ago</p>
              <div className="btns">
                <button className="button">View Circle</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Feature
