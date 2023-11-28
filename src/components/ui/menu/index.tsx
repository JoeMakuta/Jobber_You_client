import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import Link from "next/link";

const onChange = (key: string) => {
  console.log(key);
};

const items = [
  {
    key: "1",
    label: "Board",
    link: "",
  },
  {
    key: "2",
    label: "Applications",
  },
  {
    key: "3",
    label: "Settings",
  },
];

const Menu: React.FC = () => (
  // <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
  <div className=" flex gap-6 ">
    {items.map((elt, index) => {
      return (
        <Link className="hover:text-primary" href={"#"} key={index}>
          {elt.label}
        </Link>
      );
    })}
  </div>
);

export default Menu;
