import { DatePicker, Typography, Row, Col, ConfigProvider } from "antd";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import locale from 'antd/es/locale/pl_PL';
import dayjs from 'dayjs';
import 'dayjs/locale/pl';
dayjs.locale('pl');


const { Title } = Typography;

export default function datePicker() {
  const [open, datePickerOpenToggle] = useState(false);

  const dateChange = (date: dayjs.Dayjs) => setSelectedDate(date.format('MMMM YYYY'));

  const [selectedDate, setSelectedDate] = useState(dayjs().format('MMMM YYYY'));

  return (
    <ConfigProvider locale={locale}>
      <Row justify="center" align="middle" gutter={15}>
        <Col>
          <Title>{selectedDate}</Title>
        </Col>
        <Col>
          <DatePicker
            picker="month"
            open={open}
            onOpenChange={datePickerOpenToggle}
            onChange={dateChange}
            maxDate={dayjs().endOf('month')}
            minDate={dayjs('2007-05-01')}
            style={{ position: "absolute", opacity: 0, pointerEvents: "none"}}
          />
          <FontAwesomeIcon icon={faChevronDown} size="3x" color="black" onClick={() => datePickerOpenToggle(!open)} style={{ cursor: "pointer" }}/>
        </Col>
      </Row>
    </ConfigProvider>
  );
}