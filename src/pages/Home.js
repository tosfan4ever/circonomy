import {useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {toggleDrawer} from "../redux/toggleDrawer";

import hero from '../assets/img/hero-bkg.svg'

const Home = () => {
  let location = useLocation()
  const { toggle } = useSelector(state => state.toggle)
  const dispatch = useDispatch()

  useEffect(() => {
    if (toggle) {
      dispatch(toggleDrawer())
    }
  }, [location])

  return (
    <div>
      <img style={{width: '100%'}} src={hero} alt=""/>
    </div>
  )
}

export default Home;
