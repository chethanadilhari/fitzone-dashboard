import React from 'react'
import ClassesContainer from '../../components/common/ClassesContainer';

const classes = [{

    image: "/images/services-cardio-training.jpg",
    name: "Cardio Training",
    description: "Improve your stamina and cardiovascular health through high-energy cardio sessions. Experience various activities like running, cycling, and interval training to keep your heart healthy while burning calories efficiently.", 
},

{

    image: "/images/services-body-building.jpg",
    name: "Body Building",
    description: "Build serious muscle mass and sculpt your physique with expert-guided strength programs. From personalized training plans to advanced lifting techniques, transform your body and achieve defined muscle growth.", 
},


{

    image: "/images/services-crossfit.jpg",
    name: "Crossfit Training",
    description: "Push your limits with high-intensity functional training for full-body fitness and endurance. CrossFit combines weightlifting, cardio, and bodyweight movements for well-rounded athletic development.", 
},

{

    image: "/images/services-fat-burning.jpg",
    name: "Fat Burning",
    description: "Target fat loss with specialized workouts designed to tone your body and boost metabolism. Engage in dynamic routines like circuit training, HIIT, and bodyweight exercises to achieve a leaner physique.", 
},

{

    image: "/images/services-yoga.jpg",
    name: "Yoga",
    description: "Enhance your flexibility, balance, and mindfulness with calming and restorative yoga classes. Experience guided sessions focusing on relaxation, breathing techniques, and mental clarity.", 
},

{

    image: "/images/services-powerlifting.jpg",
    name: "Power Lifting",
    description: "Master heavy lifts like squats, deadlifts, and bench presses to increase strength and power. Develop proper form and technique under expert supervision to reach your maximum lifting potential.", 
},

{

    image: "/images/services-personal-training.jpg",
    name: "Personal Training",
    description: "Get customized workout plans, expert coaching, and one-on-one attention tailored to your fitness goals. Our certified personal trainers provide personalized guidance and motivation to maximize your fitness journey.", 
},
{

    image: "/images/services-group-classes.jpg",
    name: "Group Fitness Classes",
    description: "Stay motivated with fun, dynamic, and high-energy group workouts. Enjoy rhythmic dance routines, energizing aerobics, and intense bootcamp sessions led by experienced trainers.Zumba, Aerobics, Bootcamp, and more.", 
},

]


const AllClasses = () => {
    return (
        <section className="bg-transparent ">
            <div>
<div className="text-4xl font-sairaCondensed uppercase pt-10 text-center px-5 text-bronze font-bold ">All Classes</div>
            <div className="w-full  text-white max-w-screen-xl py-5 h-auto mx-auto px-5 ">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                <ClassesContainer data={classes[0]} />
                <ClassesContainer data={classes[1]} />
                <ClassesContainer data={classes[2]} />
                <ClassesContainer data={classes[3]} />
                <ClassesContainer data={classes[4]} />
                <ClassesContainer data={classes[5]} />
                <ClassesContainer data={classes[6]} />
                <ClassesContainer data={classes[7]} />
                </div>
            </div>
            </div>
        </section>
    )
}

export default AllClasses