import React from 'react';

import TaskCard from './listcard';
import AddNewList from './add-list';
import ListName from './listname';
interface ViewListsProps {
  boardId: string
}
const ViewLists = ({ boardId }: ViewListsProps) => {
  return (
    <div>


      <div className="flex gap-4 ">
        {/* <TaskCard listId="1000000" /> */}
        <AddNewList />
        <ListName />
      </div>

    </div>


  )
}

export default ViewLists;
