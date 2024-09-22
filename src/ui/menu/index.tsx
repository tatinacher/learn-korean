import { useNavigate } from "react-router-dom";
import { Menu as MenuAntd } from "antd";
import { ItemType, MenuItemType } from "antd/es/menu/interface";

interface MenuProps {
  items: ItemType<MenuItemType>[];
  isHorizontal?: boolean;
}

export const Menu = ({ items, isHorizontal }: MenuProps) => {
  const navigate = useNavigate();

  const onMenuClick = ({ key }: { key: string }) => {
    if (key) {
      navigate(key);
    }
  };
  return (
    <MenuAntd
      mode={isHorizontal ? "horizontal" : "vertical"}
      //   defaultSelectedKeys={["2"]}
      items={items}
      onClick={onMenuClick}
      //   style={{
      //     flex: 1,
      //     minWidth: 0,
      //   }}
    />
  );
};
