import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css'
import PostCard from "../../components/PostCard";
import { useEffect, useState } from "react";
import axios from "axios";

const NeedVolunteerAll = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/posts`);
            setJobs(data);
        };
        getData();
    }, []);

    const categories = [...new Set(jobs.map((job) => job.category))];

    return (
        <Tabs>
            <div className='container px-6 py-10 mx-auto'>
                <h1 className='text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl'>
                    Browse Desired Volunteer Opportunities By Categories
                </h1>

                <p className='max-w-2xl mx-auto my-6 text-center text-gray-500'>
                    Discover volunteer opportunities that are currently open and in need of your skills before time runs out.
                </p>

                <div className='flex items-center justify-center'>
                    <TabList>
                        {categories.map((category, index) => (
                            <Tab key={index}>{category}</Tab>
                        ))}
                    </TabList>
                </div>

                {categories.map((category, index) => (
                    <TabPanel key={index}>
                        <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                            {jobs
                                .filter((job) => job.category === category)
                                .map((job) => (
                                    <PostCard key={job._id} post={job} />
                                ))}
                        </div>
                    </TabPanel>
                ))}
            </div>
        </Tabs>
    );
};

export default NeedVolunteerAll;
