export default function Avatar(props) {

    const {size, src, alt, className, style} = props;

    return (<>
        <img src={src} alt={alt} 
            style={{
                width: size,
                height: size,
                borderRadius: size,
                ...style ?? {}
            }} 
            className={`avatar ${className ?? ''}`}
        />
    </>);
}