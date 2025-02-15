import React, {useState} from 'react';
import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import axios from 'axios'; 

// prolly want to add in an event image at some point
/*
<Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
*/

type EventData = {
  id: string;
  title: string;
  date: Date;
  location: string,
  description: string;
};

// defines the data that each item contains
const DATA: EventData[] = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Treehacks',
    date: new Date(2025, 1, 13),
    location: 'Huang',
    description: "get hackin"
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'slecture',
    date: new Date(2025, 1, 20),
    location: 'slounge',
    description: 'knowledge'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'dinner',
    date: new Date(2025, 1, 17),
    location: 'flomo',
    description: 'food'
  },
];

// defines the properties of a list item
type EventProps = {
  item: EventData;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
};

// defines a list item component
const Item = ({item, onPress, backgroundColor, textColor}: EventProps) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
    <Text style={[styles.subtitle, {color: textColor}]}>{item.location}</Text>
    <Text style={[styles.subtitle, {color: textColor}]}>{item.description}</Text>
    <Text style={[styles.subtitle, {color: textColor}]}>{item.date.toDateString()}</Text>
  </TouchableOpacity>
);

const EventPage = () => {
  // returns and updates state (whether tile is clicked here)
  const [selectedId, setSelectedId] = useState<string>();

  // how each list tile should be displayed
  const renderItem = ({item}: {item: EventData}) => {
    const backgroundColor = item.id === selectedId ? '#e0fade' : '#386f49';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}

        // changes the state - uses id to indicate it's been pressed
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
          data={DATA}
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
    fontSize: 20
  }
});

export default EventPage;