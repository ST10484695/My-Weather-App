import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  FlatList,
  Image,
  TouchableOpacity,
  
} from 'react-native';

interface Forecast {
  day: string;
  temperatureC: string;
  temperatureF: string;
  condition: string;
  icon: string;
}

const forecastData: Forecast[] = [
  {
    day: 'Mon',
    temperatureC: '22°C',
    temperatureF: '72°F',
    condition: 'Cloudy',
    icon: 'https://img.icons8.com/?size=100&id=42789&format=png&color=000000',
  },
  {
    day: 'Tue',
    temperatureC: '25°C',
    temperatureF: '77°F',
    condition: 'Sunny',
    icon: 'https://img.icons8.com/?size=100&id=43252&format=png&color=000000',
  },
  {
    day: 'Wed',
    temperatureC: '19°C',
    temperatureF: '66°F',
    condition: 'Rainy',
    icon: 'https://img.icons8.com/?size=100&id=46771&format=png&color=000000',
  },
  {
    day: 'Thu',
    temperatureC: '20°C',
    temperatureF: '68°F',
    condition: 'Stormy',
    icon: 'https://img.icons8.com/?size=100&id=46850&format=png&color=000000',
  },
  {
    day: 'Fri',
    temperatureC: '23°C',
    temperatureF: '73°F',
    condition: 'Partly Cloudy',
    icon: 'https://img.icons8.com/?size=100&id=43177&format=png&color=000000',
  },
];

export default function App() {
  const [unit, setUnit] = useState<'C' | 'F'>('C');

  const renderForecastCard = ({ item }: { item: Forecast }) => (
    <View style={styles.card}>
      <Text style={styles.day}>{item.day}</Text>
      <Image source={{ uri: item.icon }} style={styles.icon} />
      <Text style={styles.temp}>
        {unit === 'C' ? item.temperatureC : item.temperatureF}
      </Text>
    </View>
  );

  return (
    <ImageBackground
      source={{
        uri: 'https://media.gettyimages.com/id/1397212151/video/thunder-and-rain-animation-on-cloudy-weather-background-loopable.jpg?s=640x640&k=20&c=GMmFmeUjQ0lexlplHkXBLMeU8VfukPuNTZjKOneQz3Q=',
      }} 
      style={styles.background}
      resizeMode="cover"
    >
     
      <View style={styles.overlay}>
        <View style={styles.header}>
          <Text style={styles.city}>Lenasia</Text>
          <Text style={styles.datetime}>Thu, Aug 28 - 16:53 pm</Text>
        </View>

        <View style={styles.currentWeather}>
          <Text style={styles.temperature}>
            {unit === 'C' ? '20°C' : '68°F'}
          </Text>
          <Text style={styles.condition}>Storming with a Strong wind</Text>

          
          <View style={styles.toggleContainer}>
            <TouchableOpacity onPress={() => setUnit('C')}>
              <Text style={[styles.unit, unit === 'C' && styles.unitSelected]}>
                °C
              </Text>
            </TouchableOpacity>
            <Text style={styles.unitSeparator}>|</Text>
            <TouchableOpacity onPress={() => setUnit('F')}>
              <Text style={[styles.unit, unit === 'F' && styles.unitSelected]}>
                °F
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        
        <View style={styles.forecastSection}>
          <Text style={styles.forecastTitle}>5-Day Forecast</Text>
          <FlatList
            data={forecastData}
            keyExtractor={(item) => item.day}
            horizontal
            renderItem={renderForecastCard}
            showsHorizontalScrollIndicator={true}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  header: {
    marginBottom: 20,
  },
  city: {
    fontSize: 32,
    color: '#BFC2FF',
    fontWeight: 'bold',
  },
  datetime: {
    fontSize: 16,
    color: '#BFC2FF',
  },
  currentWeather: {
    alignItems: 'center',
    marginVertical: 40,
  },
  temperature: {
    fontSize: 72,
    color: '#BFC2FF',
    fontWeight: 'bold',
  },
  condition: {
    fontSize: 18,
    color: '#BFC2FF',
    marginVertical: 10,
    textAlign: 'center',
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,

  },
  unit: {
    fontSize: 18,
    color: '#BFC2FF',
    marginHorizontal: 8,
  },
  unitSelected: {
    color: '#A6A6A6',
    fontWeight: 'bold',
  },
  unitSeparator: {
    color: '#BFC2FF',
    fontSize: 18,
  },
  forecastSection: {
    marginTop: 20,
  },
  forecastTitle: {
    fontSize: 20,
    color: '#BFC2FF',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  card: {
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    width: 90,
  },
  day: {
    color: '#BFC2FF',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  icon: {
    width: 40,
    height: 40,
    marginBottom: 5,
  },
  temp: {
    color: '#BFC2FF',
  },
});
