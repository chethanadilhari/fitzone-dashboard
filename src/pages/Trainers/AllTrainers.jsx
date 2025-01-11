import React from 'react'
import TrainersContainer from '../../components/common/TrainersContainer';

const trainers = [{
    image: "/images/trainer-1.jpg",
    name: "Mark Bennett",
    service: "Cardio Training",
    description: "Boost endurance and burn calories with high-energy cardio workouts.",
    link: "/cardio"
},
{
    image: "/images/trainer-2.jpg",
    name: "Jason Wright",
    service: "Body Building",
    description: "Build serious muscle mass and sculpt your physique with expert-guided strength programs.",
    link: "/body-building"
},
{
    image: "/images/trainer-3.jpg",
    name: "Ryon Carter",
    service: "powerlifting",
    description: "Shed excess fat and tone your body through targeted fat-burning routines.",
    link: "/fat-burning"
},
{
    image: "/images/trainer-4.jpg",
    name: "Emily Turner",
    service: "Group Fitness Classes",
    description: "Push your limits with high-intensity functional training for full-body fitness and endurance.",
    link: "/crossfit"
},


]

const AllTrainers = () => {
    return (
        <section>
            <div>
<div className="text-4xl font-sairaCondensed uppercase  text-center px-5 text-bronze font-bold ">All Trainers</div>
            <div className="w-full  text-white max-w-screen-xl py-5 h-auto mx-auto px-5 ">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                <TrainersContainer data={trainers[0]} />
                <TrainersContainer data={trainers[1]} />
                <TrainersContainer data={trainers[2]} />
                <TrainersContainer data={trainers[3]} />
               
                </div>
            </div>
            </div>
        </section>
    )
}

export default AllTrainers