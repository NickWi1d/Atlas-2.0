import React from 'react'
import '../index.css'
import AndroidLinkIcon from '../img/store-android-1x.webp'
import AppleLinkIcon from '../img/store-apple-1x.webp'
import HuaweiLinkIcon from '../img/store-huawei-1x.webp'
import AdvMainImg from '../img/download-app-banner-x1.webp'

const Advertising = () => {
  return (
    <div className='advertisement'>
            <div className='titleOfAdv'>
                <h2>В приложении быстрее и еще удобнее!</h2>
                <p>Билеты на автобусы сразу у вас в телефоне, не нужно печатать билет</p>
            </div>
            <div className='AdvContent'>
                <div className='AdvInfo'>
                    <div className='AdvTitle'>
                        <div>
                            <h6>Экономия</h6>
                            <p align='left'>Технологии в основе Атласа увеличивают эффективность работы наших партнёров. Поэтому мы можем делать цены ниже.</p>
                        </div>
                        <div>
                            <h6>Качество и контроль</h6>
                            <p align='left'>Мы контролируем работу водителей, состояние транспорта и работу сервиса. Мы неустанно трудимся над качеством услуг.</p>
                        </div>
                        <div>
                            <h6>Поддержка 24/7</h6>
                            <p align='left'>Напишите нам в чат или позвоните по телефону, наши операторы ответят вам на все вопросы.</p>
                        </div>
                    </div>
                    <div className='AdvLinks'>
                        <div>
                            <a href='https://redirect.appmetrica.yandex.com/serve/819783099222126858?utm_source=atlas-morda&utm_medium=referral&utm_campaign=main-page-android'>
                                <img src={AndroidLinkIcon}></img>
                            </a>
                        </div>
                        <div>
                            <a href='https://redirect.appmetrica.yandex.com/serve/747725502281743336?utm_source=atlas-morda&utm_medium=referral&utm_campaign=main-page-ios'>
                                <img src={AppleLinkIcon}></img>
                            </a>
                        </div>
                        <div>
                            <a href='https://appgallery.huawei.com/app/C102892141'>
                                <img src={HuaweiLinkIcon}></img>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='AdvMainImg'>        
                    <img src={AdvMainImg}></img>
                </div>
            </div>
        </div>
  )
}

export default Advertising