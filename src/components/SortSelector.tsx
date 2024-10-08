import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";

import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectOrder: (sortOrder: string) => void;
  sortOrder: string;
}

function SortSelector({ onSelectOrder, sortOrder }: Props) {
  const sortOrders = [
    { value: "", label: "Relaevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currenstSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currenstSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => onSelectOrder(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default SortSelector;
