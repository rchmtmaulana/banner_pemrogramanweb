'use client'
import { useState } from 'react'

import Image from 'next/image'
import './globals.css'

export default function Home() {

  const [duit, setDuit] = useState(0)
  const [nama, setNama] = useState('Rachmat Maulana')

  function handlerTambahDuit() {
    setDuit(duit + 1)
  }
  function handlerGantiNama() {
    setNama('Teknik Informatika 21')
  }

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
            <h1>{nama}</h1>
            <div className="bio-nim-header-banner">
            {/* NIM dan BIO */}
            <p>D121211015</p>
            <p>Do it to get duit {duit}</p>
          </div>
          </div>
        </div>
        <div className="cta-banner-wrapper">
          {/* tombol cta */}
            <div className='cta-button' onClick={handlerTambahDuit}>
              <p>Do It</p>
            </div>
            <div className='cta-button' style={{marginTop: '12px'}} onClick={handlerGantiNama}>
              <p>Ganti</p>
            </div>
        </div>
      </div>
    </div>
  )
}
