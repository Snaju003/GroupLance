import React from 'react';
import { Grid, Paper, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Logsign() {
  const navigate = useNavigate();
  return (
    <div style={{ height: "100vh", margin: "1rem", padding: "5rem" }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={6}>
          <Paper elevation={3} style={{ padding: '4rem ', width: "35vw", height: "50vh",margin:"1rem 0rem 2rem 5rem" }}>
            
            <div>
              <h2 className='text-center'>For Businesses</h2>
            </div>
            <div>
              <h4 className='text-center'>Form groups with small businesses and a group of developers to increse productivity
              </h4>
            </div>
            <div className='text-center'>
              <Button className='button' variant='contained'>
                Join Us
              </Button>
            </div>

          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={3} style={{padding: '4rem ', width: "35vw", height: "50vh",margin:"1rem 0.1rem 2rem 3rem"}}>
            <div>
              <h2 className='text-center'>For Normal Users</h2>
            </div>
            <div className='text-center'>
              <div>
                <h4 className='text-center'>Form groups with small businesses and a group of developers to increse productivity
                </h4>
              </div>
              <Button className='button' variant='contained' onClick={() => navigate("/signup")}>
                Join Us
              </Button>
            </div>

          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Logsign;
