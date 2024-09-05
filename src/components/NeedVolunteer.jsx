import { Link } from "react-router-dom";
import PostCard from "./PostCard";


const NeedVolunteer = ({posts}) => {
    return (
        <div className=" mt-14">
            <h1 className="text-3xl font-bold text-center">Urgent Volunteer Opportunities: Step In Before the Deadline!</h1>
            <p className="py-3 text-gray-500 text-center">Don't miss your chance to help! Step in now and make a lasting impact with these upcoming volunteer needs.</p>
            <div className="grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
                {
                    posts.map(post=><PostCard key={post._id} post={post}></PostCard>)
                }
            </div>

           <div className="text-center my-5">
           <Link to="/needVolunteerAll" className="btn font-bold text-white dark:bg-gray-800">SEE ALL</Link>
           </div>
            
        </div>
    );
};

export default NeedVolunteer;