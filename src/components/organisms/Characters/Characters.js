import * as React from 'react';
import { CircularProgress, Box, Card, Link, CardContent, Grid, Button, ButtonGroup } from '@mui/material';
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { useState, useEffect } from "react";

const fetchCharacters = async (queryKey) => {
  console.log(queryKey.queryKey[1])
  const res = await fetch(`https://swapi.dev/api/people/?page=${queryKey.queryKey[2]}`);
  return res.json();
}

const Characters = () => {
  const [page, setPage] = useState(1);
  const { data, status } = useQuery(['characters', 'Hi', page], fetchCharacters, {
    /* staleTime: 0,
    cacheTime: 10,
    onSuccess: () => console.log('okidoki') */
  })
  console.log(data);
  const preventDefault = (event) => event.preventDefault();

  const pages = [
    <Button onClick={() => setPage(1)} key="one">One</Button>,
    <Button onClick={() => setPage(2)} key="two">Two</Button>,
    <Button onClick={() => setPage(3)} key="three">Three</Button>,
  ];

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
        <>
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
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              '& > *': {
                m: 1,
              },
            }}
          >
            <ButtonGroup color="warning" aria-label="medium secondary button group">
              {pages}
            </ButtonGroup>
          </Box>
        </>
      )}
    </>
  )
}

export default Characters