import React, {useState} from 'react';
import {Box} from '@mui/material';
import Exercises from '../components/Exercises'
import SearchExercises from '../components/SearchExercises'
import HeroBanner from '../components/HeroBanner'

const Home = () => {
    const [bodyPart, setBodyPart] = useState('all')
    const [exercises, setExercise] = useState([]);

    console.log(bodyPart);
    return (
        <Box>
            <HeroBanner/>
            <SearchExercises 
            setExercise={setExercise} 
            bodyPart={bodyPart} 
            setBodyPart={setBodyPart}/>
            <Exercises
            setExercise={setExercise}
            bodyPart={bodyPart}
            exercises={exercises} />
        </Box>
    )
}

export default Home