
import React, { useEffect, useState } from 'react';
import { Calendar, LocaleConfig, DateData } from 'react-native-calendars';
import { Theme } from '../../../Thema';
import { View,Text, TouchableOpacity } from 'react-native';

LocaleConfig.locales['pt-BR'] = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ],

  monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
  dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
  dayNamesShort: ['Dom.', 'Seg.', 'Ter.', 'Qua.', 'Qui.', 'Sex.', 'Sab.'],
  today: "Aujourd'hui"
};

LocaleConfig.defaultLocale = 'pt-BR';


interface MarkedDates {
  [date: string]: {
    selected: boolean;
    selectedColor: string;
    color: string;
    scheduledTimes: string[];

  };

}
interface CalendarAgendaProps {
  markedDates: MarkedDates;
  onTimePress: (date: string, time: string) => void;
}

const CalendarAgenda: React.FC<CalendarAgendaProps> = ({ markedDates, onTimePress }) => {
  return (
    <View>
      <Text>Agenda</Text>
      {Object.keys(markedDates).map((date) => (
        <View key={date}>
          <Text>Data: {date}</Text>
          <Text>Selecionada: {markedDates[date].selected.toString()}</Text>
          <Text>Cor selecionada: {markedDates[date].selectedColor}</Text>
          <Text>Horários agendados:</Text>
          {markedDates[date].scheduledTimes.map((time) => (
            <TouchableOpacity key={time} onPress={() => onTimePress(date, time)} style={{height: 100,width: 60,backgroundColor:'#000'}}>
              <Text>{time}tempo</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
};


export default function Calendars() {
  const [selected, setSelected] = useState<MarkedDates>({});

  console.log(selected);

  function handleDayPress(day: DateData) {
    const selectedDate = day.dateString;
    const updatedMarkedDates = { ...selected };
    updatedMarkedDates[selectedDate] = {
      selected: true,
      selectedColor: '#50cebb',
      color: '#50cebb',
      scheduledTimes: [],

    };
    setSelected(updatedMarkedDates);

  }
  useEffect(() => {
    // Acessando todas as datas salvas
    const todasAsDatas = Object.keys(selected);

    // Iterando sobre as datas e exibindo as informações correspondentes
    todasAsDatas.forEach((data) => {
      const informacoesDaData = selected[data];
      console.log(`Data: ${data}`);
      //console.log(`Selecionada: ${informacoesDaData.selected}`);
     // console.log(`Cor selecionada: ${informacoesDaData.selectedColor}`);
      console.log('---');
    });
  }, [selected]);

 
  const handleTimePress = (date: string, time: string) => {
    const updatedMarkedDates = { ...selected };
    updatedMarkedDates[date].scheduledTimes.push(time);
    setSelected(updatedMarkedDates);
  };



  return (
    <>
    <Calendar

      style={{
        borderWidth: 1,
        borderColor: Theme.colors.greem,
        height: 350,

      }}
      theme={{

        backgroundColor: Theme.colors.greemOpacyd,
        calendarBackground: Theme.colors.greemLight,
        textSectionTitleColor: Theme.colors.greem,
        selectedDayBackgroundColor: Theme.colors.gray200,
        selectedDayTextColor: '#ffffff',
        todayTextColor: Theme.colors.greemOpacyd,
        dayTextColor: Theme.colors.gray200,
        textDisabledColor: Theme.colors.gray100,
        arrowColor: Theme.colors.greem,
        monthTextColor: Theme.colors.greem,
      }}


      markingType={'period'}
      markedDates={selected}
      onDayPress={handleDayPress}

    />
    <CalendarAgenda markedDates={selected} onTimePress={handleTimePress}/>
    </>
  );
};

