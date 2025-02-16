import React, { useEffect, useState } from 'react';
import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import axios from 'axios';

type EventData = {
  id: string;
  title: string;
  date: string;       // Note: the server may return the date as a string
  location: string;
  description: string;
};

type EventProps = {
  item: EventData;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
};

const Item = ({ item, onPress, backgroundColor, textColor }: EventProps) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, { backgroundColor }]}>
    <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
    <Text style={[styles.subtitle, { color: textColor }]}>{item.location}</Text>
    <Text style={[styles.subtitle, { color: textColor }]}>{item.description}</Text>
    {/* Convert the string date to a readable format: */}
    <Text style={[styles.subtitle, { color: textColor }]}>
      {new Date(item.date).toDateString()}
    </Text>
  </TouchableOpacity>
);

const EventPage = () => {
  // Store the array of events from the server
  const [events, setEvents] = useState<EventData[]>([]);
  // Keep track of which event (if any) has been tapped
  const [selectedId, setSelectedId] = useState<string>();

  // Fetch events from the server on component mount
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:3000/api/allevents');
        // Assuming the response data is an array of events:
        //   e.g. [{ id, title, date, location, description }, ...]
        console.log(response.data)
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  const renderItem = ({ item }: { item: EventData }) => {
    const backgroundColor = item.id === selectedId ? '#e0fade' : '#386f49';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={events}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 60,
    marginVertical: 8,
    marginHorizontal: 18,
    borderRadius: 15,
  },
  title: {
    fontSize: 32,
  },
  subtitle: {
    fontSize: 20,
  },
});

export default EventPage;
