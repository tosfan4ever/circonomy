import { useState } from 'react'
import { Input } from 'antd'

import {
  Wrapper,
  Heading,
  Options,
  Option,
  Ul
} from './Onboarding7.styles'


const Onboarding7 = () => {

  const [ringLeader, setRingLeader] = useState(true)

  const setOption = e => {
    const el = e.target
    el.style.background = '#20B7EB'

    if (el.nextSibling) {
      setRingLeader(true)
      el.nextSibling.style.background = ''
    } else {
      setRingLeader(false)
      el.previousSibling.style.background = ''
    }

  }

  const bkg = {
    background: '#20B7EB'
  }


  return (
    <Wrapper>

      <Heading>Select the Circonomist role you'd like to begin with</Heading>
      <Options>
        <Option style={bkg} onClick={(e) => setOption(e)}>A Ringleader</Option>
        <Option onClick={(e) => setOption(e)}>A Member</Option>
      </Options>
      { ringLeader &&
      <div>
        <h4><b>As a Ringleader, you will be able to:</b></h4>
        <Ul>
          <li>
            Activate a Circle
            <Ul>
              <li>a “Circle” is a community centered on the repurposing of a particular capital good into a public
                good
              </li>
              <li>A “Capital Good” is any material/product that is owned by somebody</li>
              <li>A “Public Good” is any material/product that is owned by nobody or everybody all at the same time</li>
            </Ul>
          </li>
          <li>
            Kickstart a Round
            <Ul>
              <li> A "Round" is a quadratic funding campaign</li>
              <li>"Quadratic Funding" is an enhanced form of crowdfunding whereupon the funder will get matched an
                amount
                by a larger organization in such a way that accelerates the funding process
              </li>
              <li>The “Round” can either be funded by fiat currencies or crypto-currencies</li>

            </Ul>
          </li>
          <li>
            Lead the Circle community, where you will get to take the initiative to:
            <Ul>
              <li>Start governance proposals within Snapshot</li>
              <li>Initiate conversational channels within Discord</li>
              <li>Create missions for either upcycling or upskilling purposes</li>
            </Ul>
          </li>
        </Ul>
      </div>
      }
      { !ringLeader &&
      <div>
        <h4><b>As a Member, you will be able to:</b></h4>
        <Ul>
          <li>
            Join a Circle
            <Ul>
              <li>a "Circle" is a community centered on the repurposing of a particular capital good into a public good</li>
              <li>A “Capital Good” is any material/product that is owned by somebody</li>
              <li>A “Public Good” is any material/product that is owned by nobody or everybody all at the same time</li>
            </Ul>
          </li>
          <li>
            Fund a Round
            <Ul>
              <li> A "Round" is a quadratic funding campaign</li>
              <li>"Quadratic Funding" is an enhanced form of crowdfunding whereupon the funder will get matched an
                amount by a larger organization in such a way that accelerates the funding process
              </li>
              <li>The “Round” can either be funded by fiat currencies or crypto-currencies</li>

            </Ul>
          </li>
          <li>
            Get involved in the Circle community, where you’ll get to participate in:
            <Ul>
              <li>Voting on governance proposals within Snapshot</li>
              <li>Communicating in conversational channels within Discord</li>
              <li>Earning rewards from missions for either upcycling or upskilling purposes</li>
            </Ul>
          </li>
        </Ul>
      </div>
      }


    </Wrapper>
  )
}

export default Onboarding7
