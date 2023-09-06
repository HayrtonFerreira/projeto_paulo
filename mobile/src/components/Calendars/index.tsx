import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CalendarPicker, { DateChangedCallback } from 'react-native-calendar-picker';
import { Theme } from '../../../Thema';

interface AppState {
  selectedStartDate: Date | null;
  selectedEndDate: Date | null;
}

export default class Calendars extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      selectedStartDate: null,
      selectedEndDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date: Date, type: string) {
    if (type === 'END_DATE') {
      this.setState({
        selectedEndDate: date,
      });
    } else {
      this.setState({
        selectedStartDate: date,
        selectedEndDate: null,
      });
    }
  }

  render() {
    const { selectedStartDate, selectedEndDate } = this.state;
    const minDate = new Date(); // Today
    const maxDate = new Date(2017, 6, 3);
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    const endDate = selectedEndDate ? selectedEndDate.toString() : '';

    return (
      <View style={styles.container}>
        <CalendarPicker
          startFromMonday={true}
          allowRangeSelection={true}
          minDate={minDate}
          maxDate={maxDate}
          todayBackgroundColor="#f2e6ff"
          selectedDayColor={Theme.colors.greemOpacyd}
          selectedDayTextColor="#FFFFFF"
          onDateChange={this.onDateChange as unknown as DateChangedCallback} // Correção aqui
        />

        <View>
          <Text>SELECTED START DATE:{startDate}</Text>
          <Text>SELECTED END DATE:{endDate}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 100,
  },
});
