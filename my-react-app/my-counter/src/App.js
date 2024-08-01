import "./App.css";
import { useRef, useEffect, useState} from 'react';
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";
import Footer from "./component/Viewer";
import Footer from "./component/Controller";

function ChildComp() {
    return <div> child component </div>
}

function App() {
    const BodyProps = {
        name : "이름",
        location : "지역",
        favorList : ["빵", "디저트"]
    };

return (
    <div className="App">
    <Header />
        <Body {...BodyProps}>
            <ChildComp></ChildComp>
        </Body>
    <Footer />

    {/*카운터 앱 구현*/}
    <h1>Simple Counter</h1>
    <Viewer />
    <controller />
    </div>
    );
}

export default App;