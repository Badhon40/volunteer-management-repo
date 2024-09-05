import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

// Helper function to truncate description to 7-8 words
const truncateDescription = (description, wordLimit) => {
    const words = description.split(" ");
    return words.length > wordLimit 
        ? words.slice(0, wordLimit).join(" ") + "..." 
        : description;
};

const PostCard = ({ post }) => {
    const { user } = useContext(AuthContext);
    const { thumbnail, postTitle, category, deadline, description } = post;

    return (
        <div className="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <div
                className="w-1/3 bg-cover"
                style={{
                    backgroundImage: `url(${thumbnail})`,
                }}
            ></div>

            <div className="p-4 md:p-4">
                <h1 className="text-xl font-bold text-gray-800 dark:text-white">{postTitle}</h1>

                {/* Truncated description */}
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    {truncateDescription(description, 8)}
                </p>

                <div>
                    <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 my-2 md:text-xl">{category}</h1>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Deadline: {deadline}</p>
                </div>
            </div>
        </div>
    );
};

export default PostCard;
