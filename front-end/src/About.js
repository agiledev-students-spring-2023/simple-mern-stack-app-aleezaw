import { Link } from 'react-router-dom'
import './About.css'
import Image from './about_pic.jpeg'

/**
 * A React component that represents the About page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const About = props => {
  return (
    <>
      <img src={Image} alt="image" />
      <h1>About Me!</h1>
      <p>My name is Aleeza Wolff and I am a Senior in CAS majoring in Computer Science. I cannot believe this is my last semester in NYU, I feel like it flew by even more than it should have become of COVID and being online for a year and a half of college. I am excited for this class and all of the ways in which it will help prepare me for the technology world outside of school.
       
        In my free time, I like working out, reading, and spending time with my family and friends. I also love coffee, ice cream, and sunsets, so I try to enjoy as much of them as possible!
        </p>
    </>
  )
}

// make this component available to be imported into any other file
export default About