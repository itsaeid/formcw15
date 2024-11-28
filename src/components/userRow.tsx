import { User } from "./userTable";

type Props = {
  user: User;
};
export default function UserRow({ user }: Props) {
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.lastName}</td>
      <td>{user.email}</td>
    </tr>
  );
}
