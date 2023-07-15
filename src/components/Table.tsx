import React, { useState } from "react";
import { Button, Space, Switch, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import type { TableRowSelection } from "antd/es/table/interface";
import slice1, {
  dataType,
  deleteUser,
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

  const columns: ColumnsType<dataType> = [
    {
      title: "ชื่อ",
      dataIndex: "firstname",
      key: "firstname",
    },
    {
      title: "นามสกุล",
      dataIndex: "lastname",
      key: "lastname",
    },

    {
      title: "เพศ",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "หมายเลขโทรศัพท์",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "สัญชาติ",
      dataIndex: "nationality",
      key: "nationality",
    },
    {
      title: "ลบข้อมูล",
      dataIndex: "",
      key: "x",
      render: () => <a>Delete</a>,
    },
    {
      title: "แก้ไขข้อมูล",
      dataIndex: "",
      key: "x",
      render: () => {
        return <Button onClick={(e) => dispatch(deleteUser({...slice1Reducer}))}>Edit</Button>;
      },
    },
  ];

  return (
    <>
      {console.log(slice1Reducer)}
      <Table
        columns={columns}
        rowSelection={{ ...rowSelection, checkStrictly }}
        dataSource={slice1Reducer}
      />
    </>
  );
};

export default ShowTable;
