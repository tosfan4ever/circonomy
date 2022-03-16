
import ab1 from '../../assets/img/ab1.svg'
import ab2 from '../../assets/img/ab2.svg'
import ab3 from '../../assets/img/ab3.svg'
import ab4 from '../../assets/img/ab4.svg'
import ab5 from '../../assets/img/ab5.svg'
import celo from '../../assets/img/celo.svg'

import { Wrapper } from './About.styles'

const About = () => {


  return (
    <Wrapper>
      <div className="abt txt-center">
        <h1>What is Circonomy all about?</h1>
        <p>
          Circonomy is a global community of passionate individuals we call "Circonomists" who co-create circular-economies centred
          on any given material such as plastics.
        </p>
        <p>
          These communities are co-managed in a decentralized fashion with the purpose of empowering the individuals
          within these communities to be self-sustaining
        </p>
      </div>
      <div className="ab-item">
        <img src={ab1} alt=""/>
        <div className="ab-content">
          <h1>We are a Web3 cooperative...</h1>
          <p>Centered on circular economics and circular design...</p>
          <p>
            Tackling the climate change challenge by starting with the plastic recycling problem.
          </p>
        </div>
        <img src={ab2} alt=""/>
      </div>
      <div className="ab-item">
        <img src={ab3} alt=""/>
        <div className="ab-content">
          <h1>We’re a digital extension to Precious Plastic...</h1>
          <p>Because their solution needs to be just as ubiquitous as the plastic problem.</p>
          <p>
            Change the incentives and thereby change the outcomes for this initiative
            to be more scalable and sustainable.
          </p>
        </div>
        <img src={ab4} alt=""/>
      </div>
      <div className="ab-item">
        <img src={ab5} alt=""/>
        <div className="ab-content">
          <h1>We’re a digital extension to Precious Plastic...</h1>
          <p>Because their solution needs to be just as ubiquitous as the plastic problem.</p>
          <p>
            Change the incentives and thereby change the outcomes for this initiative to be
            more scalable and sustainable.
          </p>
        </div>
        <img src={celo} alt=""/>
      </div>
    </Wrapper>
  )}

  export default About