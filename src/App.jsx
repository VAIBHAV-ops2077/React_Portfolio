import { useState } from 'react'
import Dither from './Dither'
import ProfileCard from './ProfileCard'
import meImage from './assets/me_image.png'
import iconPattern from './assets/iconpattern.png'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', overflow: 'hidden' }}>
      <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
        <Dither waveColor={[0.5, 0.5, 0.5]} disableAnimation={false} enableMouseInteraction={true} mouseRadius={0.3} colorNum={4} waveAmplitude={0.3} waveFrequency={3} waveSpeed={0.05} />
      </div>
      <div style={{ position: 'relative', zIndex: 1, minHeight: '100vh', display: 'grid', placeItems: 'center', padding: '2rem' }}>
        {/* <ProfileCard
          name="Vaibhav Kawde"
          title="Software Engineer"
          handle="vaibhavkawde"
          status="Online"
          contactText="Contact Me"
          avatarUrl={meImage}
          iconUrl={iconPattern}
          showUserInfo={true}
          enableTilt={true}
          enableMobileTilt={false}
          onContactClick={() => console.log('Contact clicked')}
        /> */}
        <ProfileCard
          name="Vaibhav Kawde"
          title="Software Engineer"
          handle="vaibhavkawde"
          status="Online"
          contactText="Contact Me"
          avatarUrl={meImage}
          iconUrl={iconPattern}
          showUserInfo={true}
          enableTilt={true}
          enableMobileTilt={false}
          onContactClick={() => window.open("https://www.linkedin.com/in/vaibhav-kawde-4a1a13321/", "_blank")}
        />
      </div>
    </div>
  )
}

export default App
