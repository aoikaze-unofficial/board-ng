import Image from 'next/image'
import styles from './css/avatar.module.css'

export default function Avatar(props) {

    const {size, src, alt, className, style} = props;

    return (<div className={styles.avatar__container}
        style={style ?? {}}
    >
        <Image src={src} alt={alt} 
            width={size} height={size}
            className={`${styles.avatar} ${className ?? ''}`}
        />
    </div>);
}