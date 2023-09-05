import React, { useState, useEffect } from 'react';
import { View, Text, Button, Platform, Modal, TextInput, FlatList } from 'react-native';
import * as Calendar from 'expo-calendar';
import { format } from 'date-fns';

export default function Calendars() {
  const [calendarPermission, setCalendarPermission] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [eventTitle, setEventTitle] = useState('');
  const [events, setEvents] = useState<any[]>([]);
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Calendar.requestCalendarPermissionsAsync();
      setCalendarPermission(status);
    })();
  }, []);

  useEffect(() => {
    if (calendarPermission === 'granted' && selectedDate) {
      loadEvents();
    }
  }, [selectedDate]);

  const loadEvents = async () => {
    const startDate = new Date(selectedDate!);
    startDate.setHours(0, 0, 0, 0);
    const endDate = new Date(selectedDate!);
    endDate.setHours(23, 59, 59, 999);

    const defaultCalendar = await getDefaultCalendar();
    const events = await Calendar.getEventsAsync([defaultCalendar!.id], startDate, endDate);

    setEvents(events);
  };

  const handleAddEvent = async () => {
    if (calendarPermission === 'granted' && selectedDate && eventTitle) {
      const defaultCalendar = await getDefaultCalendar();
      const startDate = new Date(selectedDate!);
      const endDate = new Date(selectedDate!);
      endDate.setHours(endDate.getHours() + 1);

      const eventDetails = {
        title: eventTitle,
        startDate,
        endDate,
        timeZone: 'UTC',
      };

      await Calendar.createEventAsync(defaultCalendar!.id, eventDetails);
      setEventTitle('');
      loadEvents();
      setModalVisible(false);
    }
  };

  const getDefaultCalendar = async () => {
    const calendars = await Calendar.getCalendarsAsync();
    const defaultCalendar = calendars.find((cal) => cal.source.name === 'Default');
    return defaultCalendar;
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Selecione uma data:</Text>
      <Button
        title="Selecionar Data"
        onPress={() => {
          setSelectedDate(new Date());
        }}
      />
      <Text>Data Selecionada: {selectedDate ? format(selectedDate, 'dd/MM/yyyy') : 'Nenhuma data selecionada'}</Text>

      <Button title="Adicionar Evento" onPress={() => setModalVisible(true)} />
      
      <Modal visible={isModalVisible} animationType="slide">
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Adicionar Evento</Text>
          <TextInput
            placeholder="Título do Evento"
            onChangeText={(text) => setEventTitle(text)}
            value={eventTitle}
          />
          <Button title="Salvar Evento" onPress={handleAddEvent} />
          <Button title="Cancelar" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>

      <Text>Eventos para {format(selectedDate, 'dd/MM/yyyy')}:</Text>
      <FlatList
        data={events}
        renderItem={({ item }) => (
          <Text>{format(new Date(item.startDate), 'HH:mm')} - {item.title}</Text>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
