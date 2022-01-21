import * as React from 'react';
import { CircularProgress, Box, Card, Link, CardContent, Grid, Button, Chip } from '@mui/material';
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { useState, useEffect } from "react";

const fetchCharacters = async (queries) => {
  const res = await fetch(`https://swapi.dev/api/people/?page=${queries.queryKey[1]}`);
  return res.json();
}

const Characters = () => {
  const [page, setPage] = useState(1);
  const { data, status, isPreviousData } = useQuery(['characters', page], fetchCharacters, {
    /* staleTime: 0,
    cacheTime: 10,
    onSuccess: () => console.log('okidoki') */
    keepPreviousData: true
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
              flexDirection: 'row',
              justifyContent: 'center',
              '& > *': {
                m: 1,
              },
            }}
          >
            <Button
              variant="outlined"
              color="warning"
              onClick={() => setPage(old => Math.max(old - 1, 1))}
              disabled={page === 1}>Previous Page</Button>
            <Chip label={page} color="warning" />
            <Button
              variant="outlined"
              color="warning"
              onClick={() => {
                if (!isPreviousData && data.next) {
                  setPage(old => old + 1)
                }
              }}
              disabled={isPreviousData || !data?.next}>Next Page</Button>
          </Box>
        </>
      )}
    </>
  )
}

export default Characters