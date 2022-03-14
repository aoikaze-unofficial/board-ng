import Image from 'next/image'
import style from './css/logo.module.css'

export default function Logo() {
    return (
        <>
            <Image src="/avatar/asahi.jpg" alt="Cure Asahi" width="36" height="36"/>
            <div>
                <span className={style.logo__title}>Aoikaze Galgame 公告板</span>
                <span className={style.logo__subtitle}>Preview</span>
            </div>
        </>
    )
}