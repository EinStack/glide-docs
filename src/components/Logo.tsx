import LogoImg from '../../images/glide_bird_in_circle.png';

export function Logo() {
    return (
        <div style={{display: 'flex', alignItems: 'center'}}>
            <img
                src={LogoImg.src}
                alt="Glide Logo"
                style={{width: '40px', marginRight: '5px'}}
            />
            <span>Glide</span>
        </div>
    );
}
