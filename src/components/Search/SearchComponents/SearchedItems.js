import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
const SearchedItems = ({ recommendedJobs }) => {
  return (
    <Grid item xs={12}>
      <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
        {recommendedJobs.map((job) => (
          <Card key={job.id} sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {job.jobRole}
              </Typography>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {job.company}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {job.highestEducation}
              </Typography>
              {/* <Typography variant="body2">{job.details}</Typography> */}
            </CardContent>
            <CardActions>
              <Button size="small">Job Description</Button>
              <Button size="small" style={{ float: 'right' }}>
                Apply
              </Button>
            </CardActions>
          </Card>
        ))}
      </Paper>
    </Grid>
  );
};
export default SearchedItems;    