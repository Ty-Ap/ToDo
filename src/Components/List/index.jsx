import { useContext, useState } from "react";
import { SettingsContext } from '../../Context/Settings/index';
import { Badge, Card, CloseButton, Group, Pagination, Text } from '@mantine/core';
import './List.css';

const List = ({list, toggleComplete, deleteItem}) => {
  const { displayCount, showComplete } = useContext(SettingsContext);
  const [activePage, setPage] = useState(1);

  const listToRender = showComplete ? list : list.filter(item => !item.complete);
  const listStart = displayCount * (activePage - 1);
  const listEnd = listStart + displayCount;
  const pageCount = Math.ceil(listToRender.length / displayCount);

  const displayList = listToRender.slice(listStart, listEnd);

  return (
    <>
      {displayList.map(item => (
        <Card className="mantine-card" withBorder shadow="md" key={item.id} mb="sm">
          <Card.Section className="mantine-card-section" withBorder>
            <Group position="apart">
              <Group>
                <Badge
                  onClick={() => toggleComplete(item.id)}
                  color={item.complete ? 'red': 'green'}
                  variant="filled"
                  m="3px"
                >
                  {item.complete ? 'Complete' : 'Pending'}
                </Badge>
                <Text>{item.assignee}</Text>
              </Group>
              <CloseButton
                onClick={() => deleteItem(item.id)}
                title="Close Todo Item"
              />
            </Group>
          </Card.Section>
          <Text mt="sm">{item.text}</Text>
          <Text align="right">Difficulty: {item.difficulty}</Text>
        </Card>
      ))}

      <Pagination value={activePage} onChange={setPage} total={pageCount} />
    </>
  )
};

export default List;
