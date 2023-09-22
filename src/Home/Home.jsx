import './home.css'

export default function Home() {
    return (
        <main className='main'>
            <div className='left'>
                <h1 className='name'>Je suis Rémy Cottrez</h1>
                <p className='info'>Jeune développeur web full-stack prêt à vous accompagner dans vos projets</p>
                <div className='buttons'>
                    <button className='more'>En savoir plus</button>
                    <button className='contact'>Me contacter</button>
                </div>
            </div>
            <div className='right'></div>
        </main>
    )
}
