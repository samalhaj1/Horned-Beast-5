import React from "react";
import HornedBeasts from './HornedBeasts';
// import Footer from "./Footer";
// import Header from "./Header";
import BeastsData from "../assets/data.json"
import 'bootstrap/dist/css/bootstrap.min.css';


class Main extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state=(
    //         beastTitle : 



    //     )



    render() {
        return (
            <main>
                {BeastsData.map((item) => {
                  return  <HornedBeasts
                    title={item.title} desc={item.description} imageUrl={item.image_url}  horns={item.horns} />
              
                })}

            </main>

        );
    }
}

export default Main;
