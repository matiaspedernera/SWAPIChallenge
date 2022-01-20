import * as React from 'react';
import { CircularProgress, Box, Card, Link, CardContent, Grid } from '@mui/material';

const Characters = ({ data, loaded }) => {

  const preventDefault = (event) => event.preventDefault();

  return (
    <>
      <h1>Characters</h1>
      {loaded ? (
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={4}>
          {data.map((char, i) => {
            return (
              <Grid item xs={3} key={i}>
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <h2>{char.name}</h2>
                  </CardContent>
                  <Link href="/characters" underline='hover' onClick={preventDefault}>Details</Link>
                </Card>
              </Grid>
            )
          })}

        </Grid>
      )}

    </>
  )
}

export default Characters