import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deleteItem } from "./cartSlice";

function DeleteItem({ pizzaID }) {
  const disaptch = useDispatch();
  return (
    <Button type="small" onClick={() => disaptch(deleteItem(pizzaID))}>
      Delete
    </Button>
  );
}

export default DeleteItem;
