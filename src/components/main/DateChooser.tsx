import { DatePicker, Typography, Row, Col, Button } from "antd";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import dayjs from 'dayjs';
import 'dayjs/locale/pl';
dayjs.locale('pl');


const { Title } = Typography;

export default function DateChooser() {
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(dayjs().format('MMMM YYYY'));

  const dateChange = (date: dayjs.Dayjs) => setSelectedDate(date.format('MMMM YYYY'));

  return (
      <Row justify="center" align="middle" gutter={15}>
        <Col>
          <Title>{selectedDate}</Title>
        </Col>
        <Col>
          <DatePicker
            picker="month"
            open={open}
            onChange={dateChange}
            maxDate={dayjs().endOf('month')}
            minDate={dayjs('2007-05-01')}
            style={{ position: "absolute", opacity: 0, pointerEvents: "none"}}
          />
          <Button type="text" onClick={() => setOpen(!open)} icon={<FontAwesomeIcon icon={faChevronDown} size="3x" color="black"/>}/>
        </Col>
      </Row>
  );
}