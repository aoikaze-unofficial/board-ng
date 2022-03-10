import Image from 'next/image'
import style from './css/avatar.module.css'

export default function Avatar(props) {

    const {size, src, alt, className} = props;

    return (<>
        <Image src={src} alt={alt} 
            width={size} height={size}
            className={`${style.avatar} ${className ?? ''}`}
        />
    </>);
}