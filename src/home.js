import { Link } from "react-router-dom";
import Carara from "./carara";

function Home() {

    function welcomeMessage() {
        alert("Welcome to CodeLearn!");
    }

    function learnCourse(courseName) {
        alert("You selected " + courseName);
    }

    return (
        <div>

            <section className="hero">

                <h1>Learn Coding Easily</h1>
                <h1 className="heading"></h1>

                <p>
                    Learn HTML, CSS, JavaScript, React and Node.js
                </p>

                <Link to="/Startlearning">
                <button
                    className="main-btn">
                    Start Learning
                </button>
                    </Link>

            </section>
            <Carara />
        </div>
    );
}

export default Home;
