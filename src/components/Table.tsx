import React, { useState } from "react";
import { Button, Space, Switch, Table, Form, Input } from "antd";
import type { ColumnsType } from "antd/es/table";
import type { TableRowSelection } from "antd/es/table/interface";
import slice1, {
  dataType,
  deleteUser,
  editUser,
  slice1Selector,
} from "../store/slices/slice1";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../store/store";

// interface DataType {
//   key: React.ReactNode;
//   name: string;
//   gender: string;
//   phone: string;
//   nationality:string;
//   children?: DataType[];
// }

// rowSelection objects indicates the need for row selection
const rowSelection: TableRowSelection<dataType> = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows);
  },
};

interface Props {
  user: dataType;
  setUser: React.Dispatch<React.SetStateAction<dataType>>;
}

const ShowTable: React.FC<Props> = ({ user, setUser }) => {
  const [checkStrictly, setCheckStrictly] = useState(false);
  const slice1Reducer = useSelector(slice1Selector);

  const dispatch = useAppDispatch();
  // const del = (id:number) => {
  //   dispatch(deleteUser(id));
  // };

  const [edit, setEdit] = useState<number>(0);
  const [form] =Form.useForm()

  const columns: ColumnsType<dataType> = [
    {
      title: "ชื่อ",
      dataIndex: "firstname",
      key: "firstname",
      render: (text, item) => {
        if (edit === item.key) {
          return (
            <Form.Item name="firstname" rules={[{required:true}]} initialValue={item.firstname}>
              <Input value={item.firstname} />
            </Form.Item>
          );
        } else {
          return <p>{text}</p>;
        }
      },
    },
    {
      title: "นามสกุล",
      dataIndex: "lastname",
      key: "lastname",
      render: (text, item) => {
        if (edit === item.key) {
          return (
            <Form.Item name="lastname" initialValue={item.lastname}>
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
            <Form.Item name="gender" initialValue={item.gender}>
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
            <Form.Item name="phone" initialValue={item.phone}>
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
            <Form.Item name="nationality" initialValue={item.nationality}>
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
          <Button type="link" onClick={(e) => dispatch(deleteUser(item))}>
            Delete
          </Button>
        );
      },
    },
    {
      title: "แก้ไขข้อมูล",
      dataIndex: "",
      key: "edit",
      render: (__, item) => {
        return (
          <>
            <Button
              type="link"
              onClick={() => {
                setEdit(item.key);
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
      {console.log(slice1Reducer)}
      <Form onFinish={(e) => saveEdit(e)} form={form}>
        <Table
          columns={columns}
          rowSelection={{ ...rowSelection, checkStrictly }}
          dataSource={slice1Reducer}
        />
        <center>{edit?<Button htmlType="submit">Save</Button>:<></>}</center>
      </Form>
    </>
  );
};

export default ShowTable;
