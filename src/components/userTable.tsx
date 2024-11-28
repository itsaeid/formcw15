import UserRow from "./userRow";
import TableHead from "./userTableHead";

export type User = {
  id: number;
  name: string;
  lastName: string;
  email: string;
};
type Props = {
  users: User[];
};

export default function UserTable({ users }: Props) {
  return (
    <table className="w-full">
      <TableHead />
      <tbody>
        {users.map((user) => (
          <UserRow key={user.id} user={user} />
        ))}
      </tbody>
    </table>
  );
}
