import ReactPlayer from 'react-player/youtube';
import { Link } from "react-router-dom";

const Secret = () => {
    return (
        <div className="p-4">
                          
                <button className="btn btn-outline border-0 border-b-4 border-t-4 mt-4"> <Link to="/">Go Back Home</Link></button>
              

            <h2 className="text-2xl font-bold text-center mb-4">Workout Videos</h2>
            <p className="text-center mb-6">
                Get motivated with our selection of easy workout videos that you can follow along at home. 
                Whether you're a beginner or looking to refresh your routine, these videos offer something for everyone!
            </p>

            <div className="flex flex-wrap justify-center gap-10">
                <div className="flex flex-col items-center mb-8 w-full sm:w-1/2 lg:w-5/12">
                    <h3 className="text-xl font-semibold mb-2">Walking Workout</h3>
                    <div className="w-full max-w-3xl" style={{ aspectRatio: '16/9' }}>
                        <ReactPlayer url="https://www.youtube.com/watch?v=qsCxdsrV5Fc" width="100%" height="100%" />
                    </div>
                </div>

                <div className="flex flex-col items-center mb-8 w-full sm:w-1/2 lg:w-5/12">
                    <h3 className="text-xl font-semibold mb-2">Beginner Full Body Workout</h3>
                    <div className="w-full max-w-3xl" style={{ aspectRatio: '16/9' }}>
                        <ReactPlayer url="https://www.youtube.com/watch?v=4R0A3s1DOYo" width="100%" height="100%" />
                    </div>
                </div>

                <div className="flex flex-col items-center mb-8 w-full sm:w-1/2 lg:w-5/12">
                    <h3 className="text-xl font-semibold mb-2">Chair Fitness Workout</h3>
                    <div className="w-full max-w-3xl" style={{ aspectRatio: '16/9' }}>
                        <ReactPlayer url="https://www.youtube.com/watch?v=O2MDRfWi514" width="100%" height="100%" />
                    </div>
                </div>

                <div className="flex flex-col items-center mb-8 w-full sm:w-1/2 lg:w-5/12">
                    <h3 className="text-xl font-semibold mb-2">10-Minute Abs Workout</h3>
                    <div className="w-full max-w-3xl" style={{ aspectRatio: '16/9' }}>
                        <ReactPlayer url="https://www.youtube.com/embed/r1YoqAWOyaw" width="100%" height="100%" />
                    </div>
                </div>

                <div className="flex flex-col items-center mb-8 w-full sm:w-1/2 lg:w-5/12">
                    <h3 className="text-xl font-semibold mb-2">Bodyweight Workout</h3>
                    <div className="w-full max-w-3xl" style={{ aspectRatio: '16/9' }}>
                        <ReactPlayer url="https://www.youtube.com/watch?v=WrXeb6EZrK0" width="100%" height="100%" />
                    </div>
                </div>

                <div className="flex flex-col items-center mb-8 w-full sm:w-1/2 lg:w-5/12">
                    <h3 className="text-xl font-semibold mb-2">Jumping Rope</h3>
                    <div className="w-full max-w-3xl" style={{ aspectRatio: '16/9' }}>
                        <ReactPlayer url="https://www.youtube.com/watch?v=kDOGb9C5kp0" width="100%" height="100%" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Secret;
