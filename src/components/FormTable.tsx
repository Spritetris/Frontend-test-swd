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
import { addUser } from "../store/slices/slice1";
import { useAppDispatch } from "../store/store";
import { dataType } from "../model";
import { Link } from "react-router-dom";

const headerStyle: React.CSSProperties = {
  color: "black",
  fontSize: "20px",
  fontWeight: "bold",
  backgroundColor: "transparent",
};

const FormTable: React.FC = () => {
  const { t } = useTranslation();

  const [user, setUser] = useState<dataType>({
    key: 0,
    firstname: "",
    lastname: "",
    phone: "",
    gender: "",
    nationality: "",
    salary: 0,
    passport: "",
    ID: "",
    bdate: "",
  });

  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    dispatch(addUser({ ...user, key: Math.round(Math.random() * 1000) }));
  };

  return (
    <div>
      <div className="header">
        <Header style={headerStyle}>{t("HOMEPAGE.CONTENT3")}</Header>
        <div className="flexbtn">
          <LanguagePicker />
          <Link to="/">
            <Button>หน้าหลัก</Button>
          </Link>
        </div>
      </div>
      <div className="flex">
        <Form onFinish={handleSubmit}>
          <Row>
            <Form.Item
              label="คำนำหน้า"
              required={true}
              name="prefix"
              rules={[{ required: true, message: "Please select" }]}
            >
              <Select>
                <Select.Option value="mr">นาย</Select.Option>
                <Select.Option value="mrs">นาง</Select.Option>
                <Select.Option value="miss">นางสาว</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="ชื่อจริง"
              required={true}
              name="firstname"
              rules={[{ required: true, message: "Please enter" }]}
            >
              <Input
                value={user.firstname}
                onChange={(e) =>
                  setUser({ ...user, firstname: e.target.value })
                }
              />
            </Form.Item>
            <Form.Item
              label="นามสกุล"
              required={true}
              name="lastname"
              rules={[{ required: true, message: "Please enter" }]}
            >
              <Input
                value={user.lastname}
                onChange={(e) => setUser({ ...user, lastname: e.target.value })}
              />
            </Form.Item>
          </Row>
          <Row>
            <Form.Item
              label="วันเกิด"
              required={true}
              name="bdate"
              rules={[{ required: true, message: "Please select" }]}
            >
              <DatePicker />
            </Form.Item>
            <Form.Item
              label="สัญชาติ"
              required={true}
              name="nationality"
              rules={[{ required: true, message: "Please select" }]}
            >
              <Select onChange={(e) => setUser({ ...user, nationality: e })}>
                <Select.Option value="Thai">ไทย</Select.Option>
                <Select.Option value="Chinese">จีน</Select.Option>
              </Select>
            </Form.Item>
          </Row>
          <Row>
            <Form.Item
              label="เลขบัตรประชาชน"
              required={true}
              name="ID"
              rules={[{ required: true, message: "Please enter" }]}
            >
              <Input
                onChange={(e) => setUser({ ...user, ID: e.target.value })}
              />
            </Form.Item>
          </Row>
          <Row>
            <Form.Item
              label="เพศ"
              required={true}
              name="gender"
              rules={[{ required: true, message: "Please select" }]}
            >
              <Radio.Group
                onChange={(e) => setUser({ ...user, gender: e.target.value })}
              >
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
              rules={[{ required: true, message: "Please enter" }]}
            >
              <Input
                style={{ width: 300 }}
                onChange={(e) => setUser({ ...user, phone: e.target.value })}
              />
            </Form.Item>
          </Row>
          <Row>
            <Form.Item
              label="หนังสือเดินทาง"
              required={true}
              name="passport"
              rules={[{ required: true, message: "Please enter" }]}
            >
              <Input
                onChange={(e) => setUser({ ...user, passport: e.target.value })}
              />
            </Form.Item>
          </Row>

          <Row justify="space-between">
            <Form.Item
              label="เงินเดือนที่คาดหวัง"
              required={true}
              name="salary"
              rules={[{ required: true, message: "Please enter" }]}
            >
              <Input
                onChange={(e) =>
                  setUser({ ...user, salary: Number(e.target.value) })
                }
              />
            </Form.Item>
            <Space direction="horizontal" size={12}>
              <Button htmlType="reset">ล้างข้อมูล</Button>
              <Button htmlType="submit">ส่งข้อมูล</Button>
            </Space>
          </Row>
        </Form>
      </div>

      <div className="table">
        <ShowTable />
      </div>
    </div>
  );
};

export default FormTable;
