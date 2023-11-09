import Image from 'next/image'
import './globals.css'

export default function Home() {
  return (
    <div className='body'>
      <div className="banner-container">
        {/* kartunya */}
        <div className="header-banner-wrapper">
          {/* foto profil dan nama */}
          <div className="profile-header-banner">
            {/* foto profil */}
            <Image
              src="/assets/profile.png"
              alt="Picture of the author"
              fill
              objectFit='contain'
            />
          </div>
          <div className="content-header-banner">
            {/* nama dan kawan2 */}
            <h1>Rachmat Maulana</h1>
            <div className="bio-nim-header-banner">
            {/* NIM dan BIO */}
            <p>D121211015</p>
            <p>Do it to get duit</p>
          </div>
          </div>
        </div>
        <div className="cta-banner-wrapper">
          {/* tombol cta */}
          <a href=''>
            <div className='cta-button'>
              <p>Halo!!!</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
