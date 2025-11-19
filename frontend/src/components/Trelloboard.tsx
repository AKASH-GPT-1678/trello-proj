import AddNewList from "./add-list"
import Header from "./Header"
import ListName from "./listname"
import SubHeader from "./Subheader"
import TaskCard from "./Taskcard"


const TrelloBoard = () => {
  return (
    <div className="h-[100vh] bg-gradient-to-b from-violet-500 to-pink-500 ">
      <Header />
      <SubHeader />
      <div className="flex gap-4 ">
        <TaskCard listId="1000000" />
        <AddNewList />
        <ListName />
      </div>

    </div>


  )

}

export default TrelloBoard