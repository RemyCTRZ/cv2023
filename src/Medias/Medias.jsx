import './medias.css'
import { ImLinkedin } from 'react-icons/im';
import { SiGmail, SiGithub } from 'react-icons/si';

export default function Medias() {
    return (
        <aside className='medias'>
            <a className='media' href='https://www.linkedin.com'>
                <ImLinkedin />
            </a>
            <a className='media' href='mailto:remycottrez@gmail.com'>
                <SiGmail />
            </a>
            <a className='media' href='https://www.github.com'>
                <SiGithub />
            </a>
        </aside>
    )
}
