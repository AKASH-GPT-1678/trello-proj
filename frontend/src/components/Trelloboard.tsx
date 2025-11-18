import AddNewList from "./add-list"
import ListName from "./listname"
import ListPage from "./listpage"
import TaskCard from "./Taskcard"


const TrelloBoard = () => {
  return (
    <div className="h-[100vh] bg-gradient-to-b from-violet-500 to-pink-500 ">
      <div className="flex gap-4 ">
        <TaskCard />
        <AddNewList />
        <ListName />
      </div>

    </div>


  )

}

export default TrelloBoard