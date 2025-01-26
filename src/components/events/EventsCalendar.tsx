import React, { useState } from 'react';
import type { BadgeProps, CalendarProps } from 'antd';
import { Badge, Calendar, Alert, List, Typography } from 'antd';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import 'dayjs/locale/pl';

dayjs.locale('pl');

const { Title } = Typography;

const getEventsList = (value: Dayjs) => {
  let listData: { type: string; content: string }[] = [];
  switch (value.date()) {
    case 11:
      if (value.month() === 0 && value.year() === 2025) {
        listData = [
          { type: 'warning', content: 'Przykładowe wydarzenie' },
        ];
      }
      break;
    case 15:
      if (value.month() === 0 && value.year() === 2025) {
        listData = [
          { type: 'success', content: 'Przykładowe wydarzenie' },
        ];
      }
      break;  
    case 22:
      if (value.month() === 0 && value.year() === 2025) {
        listData = [
          { type: 'error', content: 'Przykładowe wydarzenie' },
        ];
      }
      break;
    case 5:
      if (value.month() === 1 && value.year() === 2025) {
        listData = [
          { type: 'error', content: 'Przykładowe wydarzenie' },
        ];
      }
      break;
    default:
  }
  return listData || [];
};

const getMonthEventCount = (value: Dayjs) => {
  let eventCount = 0;
  for (let day = 1; day <= value.daysInMonth(); day++) {
    const dayValue = value.date(day);
    const listData = getEventsList(dayValue);
    eventCount += listData.length;
  }
  return eventCount > 0 ? `${eventCount} wydarzenia` : null;
};

const EventsCalendar: React.FC = () => {
  const [value, setValue] = useState(() => dayjs());
  const [selectedValue, setSelectedValue] = useState(() => dayjs());

  const onSelect = (newValue: Dayjs) => {
    setValue(newValue);
    setSelectedValue(newValue);
  };

  const onPanelChange = (newValue: Dayjs) => {
    setValue(newValue);
  };

  const monthCellRender = (value: Dayjs) => {
    const num = getMonthEventCount(value);
    return num ? (
      <div>
        <section>{num}</section>
      </div>
    ) : null;
  };

  const dateCellRender = (value: Dayjs) => {
    const listData = getEventsList(value);
    return (
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type as BadgeProps['status']} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };

  const cellRender: CalendarProps<Dayjs>['cellRender'] = (current, info) => {
    if (info.type === 'date') return dateCellRender(current);
    if (info.type === 'month') return monthCellRender(current);
    return info.originNode;
  };

  return (
    
      <div style={{ margin: '2rem 10rem', padding: '2rem' }}>
        <Alert message={`Wybrałeś datę: ${selectedValue?.format('D MMMM YYYY')}`} />
        <Calendar 
          cellRender={cellRender} 
          value={value} 
          onSelect={onSelect} 
          onPanelChange={onPanelChange} 
        />
        <div>
          <Title level={3}>Legenda typów wydarzeń:</Title>
          <List
            dataSource={[
              { color: 'green', text: 'Mniej ważne wydarzenie' },
              { color: 'yellow', text: 'Średnio ważne wydarzenie' },
              { color: 'red', text: 'Bardzo ważne wydarzenie' },
            ]}
            renderItem={(item) => (
              <List.Item>
                <Badge color={item.color} text={item.text} />
              </List.Item>
            )}
          />
        </div>
      </div>
  );
};

export default EventsCalendar;