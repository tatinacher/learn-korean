import { useLocation, useNavigate } from "react-router-dom";
import { Menu as MenuAntd } from "antd";
import { ItemType, MenuItemType } from "antd/es/menu/interface";
import { useEffect, useState } from "react";

interface MenuProps {
  items: ItemType<MenuItemType>[];
  isHorizontal?: boolean;
}

export const Menu = ({ items, isHorizontal }: MenuProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [current, setCurrent] = useState<string[]>([]);

  useEffect(() => {
    const currentUrls = [];
    const paths = location.pathname.split("/");

    if (paths.length > 2) {
      currentUrls.push(`/${paths[1]}`);
    }

    currentUrls.push(location.pathname);
    setCurrent(currentUrls);
  }, [location]);

  const onMenuClick = ({ key }: { key: string }) => {
    if (key) {
      navigate(key);
    }
  };

  return (
    <MenuAntd
      mode={isHorizontal ? "horizontal" : "vertical"}
      selectedKeys={current}
      items={items}
      onClick={onMenuClick}
      //   style={{
      //     flex: 1,
      //     minWidth: 0,
      //   }}
    />
  );
};
