import "./App.css";
import { useState } from "react";
import UserTable, { User } from "./components/userTable";
import UserForm from "./components/userForm";
function App() {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: "ali", lastName: "komijani", email: "ali@gmail.com" },
    { id: 2, name: "ali", lastName: "komijani", email: "ali@gmail.com" },
    { id: 5, name: "ali", lastName: "komijani", email: "ali@gmail.com" },
    { id: 3, name: "ali", lastName: "komijani", email: "ali@gmail.com" },
  ]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newUser = Object.fromEntries(formData.entries()) as unknown as User;
    const max = Math.max(...users.map((user) => user.id));
    setUsers([...users, { ...newUser, id: max + 1 }]);
    event.currentTarget.reset();
  };

  return (
    <div className="w-[80%] ">
      <UserTable users={users} />
      <UserForm onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
