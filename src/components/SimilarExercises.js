import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollBar';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
      <Typography variant='h3' mb={5}>Exercises that tareget the same <span style={{ color: '#ff2625', textTransform: 'capitalize' }}>Muscle Group</span></Typography>
      <Stack direction="row" sx={{ p: '2', position: 'relative' }}>
        {targetMuscleExercises.length ?
          <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader />}
      </Stack>

      <Typography variant='h3' mb={5}>Exercises that Use the same <span style={{ color: '#ff2625', textTransform: 'capitalize' }}>Equipment</span></Typography>
      <Stack direction="row" sx={{ p: '2', position: 'relative' }}>
        {equipmentExercises.length ?
          <HorizontalScrollbar data={equipmentExercises} /> : <Loader />}
      </Stack>
    </Box>
  )
}

export default SimilarExercises