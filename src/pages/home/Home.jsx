// import Slider from "../../components/Slider";
import { useLoaderData } from "react-router-dom";
import Carousol from "../../components/Carousol"
import NeedVolunteer from "../../components/NeedVolunteer";
import SuccessStories from "../../extras/SuccessStories";


const Home = () => {
    const posts=useLoaderData()
    console.log(posts)
    return (
        <div>
            <Carousol></Carousol>
            {/* <Slider></Slider> */}
            <NeedVolunteer posts={posts}></NeedVolunteer>
            <SuccessStories></SuccessStories>
        </div>
    );
};

export default Home;