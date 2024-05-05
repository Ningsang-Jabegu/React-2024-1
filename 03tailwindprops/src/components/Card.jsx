import React from 'react'

function Card({profile = "https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png", userName = "NJ", post = "Not assigned Yet"}) {
    // console.log(props);
    return (
        <div>
            <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
                <img className="w-24 h-24 rounded-full mx-auto" src={profile} alt="" width="384" height="512" />
                <div className="pt-6 text-center space-y-4">
                    <blockquote>
                        <p className="text-lg font-medium">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, architecto!
                        </p>
                    </blockquote>
                    <figcaption className="font-medium">
                        <div className="text-sky-500 dark:text-sky-400">
                            {userName }
                        </div>
                        <div className="text-slate-700 dark:text-slate-500">
                            {post}
                        </div>
                    </figcaption>
                </div>
            </figure>
        </div >
    )
}

export default Card