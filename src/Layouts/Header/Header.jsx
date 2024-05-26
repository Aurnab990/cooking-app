import React from 'react';

const Header = () => {
    return (
        <div className=' -mt-24'>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlzGYPQqpdYyhcg9M5Bn9t5ZIv_z7V9xZbVw&s" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;