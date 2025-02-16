import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import axios from 'axios';
import { EventData } from './(tabs)/events';  // Import EventData



export default function SingleEvent() {
  const { id } = useLocalSearchParams<{ id: string, }>();

  const [thisEventData, updateEventData] = useState<EventData>({"title": "Loading...", "description": "", "location": "", "date": "", "imgURL": ""})

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:3000/api/event?id=' + id);
        //console.log("response.data inside function: " + JSON.stringify(response.data));
        //console.log(typeof response.data);
        updateEventData(response.data)
        //console.log("title of event: " + eventData["title"])
        //console.log("value of title: " + title)
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, [id])


  console.log("look at me")
  return (
    <View>
      <Text>{thisEventData.title}</Text>
      <Text>{thisEventData.date}</Text>
      <Text>{thisEventData.location}</Text>
      <Text>{thisEventData.description}</Text>
    </View>
  );
}
