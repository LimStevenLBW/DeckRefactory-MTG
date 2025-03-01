import './Home.css';
import jumbotronButton from '../../../images/navbar.png';
//import {backend, mtgIO, env} from '../../config';

const Home = (props: any) => {
    /*console.log(process.env)
    console.log("backend", backend);
    console.log("mtgio", mtgIO)
    console.log("env", env);*/

    return (
        <><div className="background-wallpaper jumbotron jumbotron-fluid m-0">
            <div className="container pl-0 pr-0">

                <div className="row home-container-text">
                    <div className="col-8">
                        <h1 className="welcome-heading">Welcome to <br />DeckRefactory</h1>
                        <p className="welcome-descript">Discover, Create, Store, and Fine-Tune your Magic the Gathering decks. Come find your next idea here!</p>
                        <p className="welcome-descript subtext">Click our logo on the right to get started</p>
                    </div>

                    <div className="col-4">
                        <div
                            onClick={() => props.history.push('/builder')}
                            className="jumbotron-button-container">
                            <img className="jumbotron-button" src={jumbotronButton} alt="error"></img>
                        </div>
                    </div>
                </div>

            </div>
        </div>

            <footer className="footer-copyright">
                <div className="footer-copyright-text">
                    "This is an unofficial fansite. Materials used are property of ©Wizards of the Coast llc.”
                </div>
            </footer></>
    );
}

export default Home;
