import React, { useState } from "react";
import { Button, Space, Switch, Table, Form, Input } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";
import type {
  FilterValue,
  SorterResult,
  TableRowSelection,
} from "antd/es/table/interface";
import slice1, {
  deleteUser,
  editUser,
  slice1Selector,
} from "../store/slices/slice1";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../store/store";
import { use } from "i18next";
import { dataType } from "../model";

const ShowTable: React.FC = () => {
  const slice1Reducer = useSelector(slice1Selector);
  const dispatch = useAppDispatch();
  const [edit, setEdit] = useState<number | null>(null);
  const [form] = Form.useForm();

  const [sortedInfo, setSortedInfo] = useState<SorterResult<dataType>>({});

  const handleChange: TableProps<dataType>["onChange"] = (
    pagination,
    filters,
    sorter
  ) => {
    setSortedInfo(sorter as SorterResult<dataType>);
  };

  const columns: ColumnsType<dataType> = [
    {
      title: "ชื่อ",
      dataIndex: "firstname",
      key: "firstname",
      render: (text, item) => {
        if (edit === item.key) {
          return (
            <Form.Item
              name="firstname"
              rules={[{ required: true, message: "Please enter" }]}
              initialValue={item.firstname}
            >
              <Input value={item.firstname} />
            </Form.Item>
          );
        } else {
          return <p>{text}</p>;
        }
      },
      sorter: (a, b) => a.firstname.localeCompare(b.firstname),
      sortOrder: sortedInfo.columnKey === "firstname" ? sortedInfo.order : null,
    },
    {
      title: "นามสกุล",
      dataIndex: "lastname",
      key: "lastname",
      render: (text, item) => {
        if (edit === item.key) {
          return (
            <Form.Item
              name="lastname"
              initialValue={item.lastname}
              rules={[{ required: true, message: "Please enter" }]}
            >
              <Input value={item.lastname} />
            </Form.Item>
          );
        } else {
          return <p>{text}</p>;
        }
      },
    },

    {
      title: "เพศ",
      dataIndex: "gender",
      key: "gender",
      render: (text, item) => {
        if (edit === item.key) {
          return (
            <Form.Item
              name="gender"
              initialValue={item.gender}
              rules={[{ required: true, message: "Please enter" }]}
            >
              <Input value={item.gender} />
            </Form.Item>
          );
        } else {
          return <p>{text}</p>;
        }
      },
    },
    {
      title: "หมายเลขโทรศัพท์",
      dataIndex: "phone",
      key: "phone",
      render: (text, item) => {
        if (edit === item.key) {
          return (
            <>
              <Form.Item
                name="phone"
                initialValue={item.phone}
                rules={[{ required: true, message: "Please enter" }]}
              >
                <Input value={item.phone} />
              </Form.Item>
            </>
          );
        } else {
          return <p>{text}</p>;
        }
      },
    },
    {
      title: "สัญชาติ",
      dataIndex: "nationality",
      key: "nationality",
      render: (text, item) => {
        if (edit === item.key) {
          return (
            <Form.Item
              name="nationality"
              initialValue={item.nationality}
              rules={[{ required: true, message: "Please enter" }]}
            >
              <Input value={item.nationality} />
            </Form.Item>
          );
        } else {
          return <p>{text}</p>;
        }
      },
    },
    {
      title: "ลบข้อมูล",
      dataIndex: "",
      key: "del",
      render: (item) => {
        return (
          <Button onClick={(e) => dispatch(deleteUser(item))}>Delete</Button>
        );
      },
    },
    {
      title: "แก้ไขข้อมูล",
      dataIndex: "",
      key: "edit",
      render: (item) => {
        return (
          <>
            <Button
              onClick={() => {
                setEdit(item.key);
                form.setFieldsValue({ ...item });
              }}
            >
              Edit
            </Button>
          </>
        );
      },
    },
  ];

  const saveEdit = (e: dataType) => {
    dispatch(editUser({ ...e, key: edit }));
    setEdit(0);
  };

  return (
    <>
      <Form onFinish={(e) => saveEdit(e)} form={form}>
        <Table
          columns={columns}
          dataSource={slice1Reducer}
          onChange={handleChange}
        />
        <center>
          {edit ? <Button htmlType="submit">Save</Button> : <></>}
        </center>
      </Form>
    </>
  );
};

export default ShowTable;
