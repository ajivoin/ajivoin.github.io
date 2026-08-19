---
title: "Spotify Recommendation Analysis"
tech: ["Python", "Spotipy"]
order: 2
---

Have you ever listened to Spotify's Discover Weekly playlist and wondered why a certain song was recommended to you? It happens to us quite often. We sought to find what songs we listened to in the past influenced what songs were recommended.

Spotify's API provides a lot of information about songs, such as its energy, danceability, speechiness, and acousticness. We utilized this data from the API to create a linear regression model for these factors so we could determine if songs were similar. This model was utilized in an application where any user can sign in and specify a song in order to find what they listened to that could have caused the recommendation.

We came in first place at Data I/O 2019 in the best presentation category.
