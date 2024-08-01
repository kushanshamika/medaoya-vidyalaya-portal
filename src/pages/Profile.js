import React from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';
import { styled } from '@mui/system';

import CollegeCrest from '../assets/images/logo.png';

const Root = styled(Container)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Crest = styled('img')({
  width: '250px',
  height: '250px',
});

const Profile = () => {
  return (
    <Root>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <StyledPaper>
            <Crest src={CollegeCrest} alt="College Crest" />
            <Typography variant="h4" sx={{mt: 2}}>Medaoya Vidyalaya</Typography>
            <Typography variant="subtitle1">Dambagolla - Mapakadawewa</Typography>
            <Typography variant="h6" sx={{mt: 2}}>Contact Information</Typography>
            <Typography variant="body1">Email: medaoyavidyala@gmail.com</Typography>
            <Typography variant="body1">Address: Medaoya Vidyalaya, Dambagolla Mapakadawewa, Mahiyanganaya</Typography>
            <Typography variant="body1">Principal: Mrs. G.D. Gajanayake</Typography>
            <Typography variant="body1">Phone: 077 039 9364</Typography>
          </StyledPaper>
        </Grid>
      </Grid>
    </Root>
  );
};

export default Profile;
