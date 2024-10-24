import './Home.css';

function Home() {
    return (
        <div className="home-container">
            <div className="home-info">
                <img 
                    src="./Home-img/myself.jpg"
                    alt="Peeraphon Khunma"
                    className="home-image"
                />
                <h3><b>Peeraphon Khunma</b></h3>
                <p><b>Currently studying at</b></p>
                <p>Computer Science and Software Development Innovation Department (CSI)</p>
                <p>at Sripatum University (SPU)</p>
            </div>

            <div className="home-description">
                <h2><b>-------------------------------------------------------------------------------</b></h2>
                <p><h2><b>Personal information:</b></h2></p>
                <ul>
                <li>
                        <strong>Name :</strong> Peeraphon Khunma 
                    </li>
                    <li>
                        <strong>Nickname :</strong> Au 
                    </li>
                    <li>
                        <strong>Age : </strong> 19 years old
                    </li>
                    <li>
                        <strong>My birthday :</strong> 20th of November 2004
                    </li>
                    <li>
                        <strong>Studying at :</strong> Sripatum University, <br />
                        I study Computer Science and Software Development Innovation Department in Faculty of Information Technology, <br />
                    </li>
                    <li>
                        <strong>Study about :</strong> full stack software development by writing code such as HTML, CSS, JAVASCRIPT, PYTHON, PHP, .NET, NODEJS, JAVA, etc., making it possible to solve problems, design systems, and develop software for both the FRONT-END and BACK-END parts. The type called "Do it all, finish it all in one person" Established to drive business and industry in the digital age such as GAMES, AI, BLOCKCHAIN and to meet the needs of the country's software developers.
                    </li>
                </ul>
                <p>Hope you enjoy this my website :)</p>
                <h2><b>-------------------------------------------------------------------------------</b></h2>
            </div>
        </div>

    );
}

export default Home;