import * as React from 'react';
import { CircularProgress, Box, Card, Link, CardContent, Grid } from '@mui/material';
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { useState, useEffect } from "react";

const fetchCharacters = async () => {
  const res = await fetch(`https://swapi.dev/api/people/`);
  return res.json();

}

const Characters = () => {

  const { data, status } = useQuery('characters', fetchCharacters, {
    /* staleTime: 0,
    cacheTime: 10, */
    onSuccess: () => console.log('okidoki')
  })
  console.log(data);
  const preventDefault = (event) => event.preventDefault();

  return (
    <>
      <h1>Characters</h1>
      <p>{status}</p>
      {status === 'loading' ? (
        <Box sx={{
          display: 'flex',
          justifyContent: 'center'
        }}>
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={4}>
          {data.results.map((char, i) => {
            return (
              <Grid item xs={3} key={i}>
                <Card sx={{
                  minWidth: 150,
                  color: 'warning.main',
                  bgcolor: 'text.secondary'
                }}>
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