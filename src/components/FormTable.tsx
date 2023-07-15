import React, { useState } from "react";
import LanguagePicker from "./LanguagePicker";
import { useTranslation } from "react-i18next";
import { Header } from "antd/es/layout/layout";
import {
  Button,
  DatePicker,
  Form,
  Input,
  Radio,
  Row,
  Select,
  Space,
  Switch,
  Table,
} from "antd";
import "./FormTable.css";
import ShowTable from "./Table";
import { addUser, dataType } from "../store/slices/slice1";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "../store/store";

const headerStyle: React.CSSProperties = {
  color: "black",
  fontSize: "20px",
  fontWeight: "bold",
  backgroundColor: "transparent",
};

interface DataType {
  key: React.ReactNode;
  firstname: string;
  lastname: string;
  gender: string;
  phone: string;
  nationality: string;
}

const FormTable: React.FC = () => {
  const { t } = useTranslation();
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Select.Option value="66">+66</Select.Option>
      </Select>
    </Form.Item>
  );

  const [user, setUser] = useState<dataType>({
    key: 0,
    firstname: "",
    lastname: "",
    phone: "",
    gender: "",
    nationality: "",
    salary:0,
    passport:"",
    ID:"",
  });

  // const submitt = (e: React.FormEvent<HTMLFormElement>) => {
  //   console.log(data);
  // };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    // e.preventDefault();
    dispatch(addUser({ ...user ,key:Math.random()*1000}));
  };

  return (
    <div>
      <div className="header">
        <Header style={headerStyle}>{t("HOMEPAGE.CONTENT3")}</Header>
        <LanguagePicker />
      </div>
      <div className="flex">
        <Form onFinish={handleSubmit}>
          <Row>
            <Form.Item label="คำนำหน้า" required={true} name="prefix">
              <Select>
                <Select.Option value="mr">นาย</Select.Option>
                <Select.Option value="mrs">นาง</Select.Option>
                <Select.Option value="miss">นางสาว</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="ชื่อจริง" required={true} name="firstname">
              <Input value={user.firstname} onChange={e =>setUser({...user,firstname:e.target.value})} />
            </Form.Item>
            <Form.Item label="นามสกุล" required={true} name="lastname">
              <Input
                value={user.lastname}
                onChange={e =>setUser({...user,lastname:e.target.value})}
              />
            </Form.Item>
          </Row>
          <Row>
            <Form.Item label="วันเกิด" required={true} name="bdate">
              <DatePicker />
            </Form.Item>
            <Form.Item label="สัญชาติ" required={true} name="nationality">
              <Select onChange={e =>setUser({...user,nationality:e})}>
                <Select.Option value="Thai">ไทย</Select.Option>
                <Select.Option value="Chinese">จีน</Select.Option>
              </Select>
            </Form.Item>
          </Row>
          <Row>
            <Form.Item label="เลขบัตรประชาชน" required={true} name="ID">
              <Input onChange={e =>setUser({...user,ID:e.target.value})}/>
            </Form.Item>
          </Row>
          <Row>
            <Form.Item label="เพศ" required={true} name="gender" >
              <Radio.Group  onChange={e =>setUser({...user,gender:e.target.value})}>
                <Radio value="male">ผู้ชาย</Radio>
                <Radio value="female">ผู้หญิง</Radio>
                <Radio value="none">ไม่ระบุ</Radio>
              </Radio.Group>
            </Form.Item>
          </Row>

          <Row>
            <Form.Item
              label="หมายเลขโทรศัพท์มือถือ"
              required={true}
              name="phone"
            >
              <Input style={{ width: 300 }} onChange={e =>setUser({...user,phone:e.target.value})} />
            </Form.Item>
          </Row>
          <Row>
            <Form.Item label="หนังสือเดินทาง" required={true} name="passport">
              <Input onChange={e =>setUser({...user,passport:e.target.value})}/>
            </Form.Item>
          </Row>

          <Row justify="space-between">
            <Form.Item
              label="เงินเดือนที่คาดหวัง"
              required={true}
              name="salary"
            >
              <Input onChange={e =>setUser({...user,salary:Number(e.target.value)})}/>
            </Form.Item>
            <Space direction="horizontal" size={12}>
              <Button htmlType="reset">ล้างข้อมูล</Button>
              <Button htmlType="submit">ส่งข้อมูล</Button>
            </Space>
          </Row>
        </Form>
      </div>

      <div className="table">
        <ShowTable user={user} setUser={setUser} />
      </div>
    </div>
  );
};

export default FormTable;
