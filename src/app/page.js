import Image from 'next/image'


export default function Home() {
  return (
    <div>
      <div className="banner-container">
        {/* kartunya */}
        <div className="header-banner-wrapper">
          {/* foto profil dan nama */}
          <div className="profile-header-banner">
            {/* foto profil */}
            <Image
              src="/assets/profile.png"
              alt="Picture of the author"
              width={200} 
              height={200} 
            />
          </div>
          <div className="content-header-banner">
            {/* nama dan kawan2 */}
            <h1>Rachmat Maulana</h1>
          </div>
          <div className="bio-nim-header-banner">
            {/* NIM dan BIO */}
            <p>D121211015</p>
            <p>Do it to get duit</p>
          </div>
        </div>
        <div className="cta-banner-wrapper">
          {/* tombol cta */}
          <button>
            Halo
          </button>
        </div>
      </div>
    </div>
  )
}
