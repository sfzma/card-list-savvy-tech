import type { cardListType } from "../App";
import Button from "./Button";

interface Props {
  info: cardListType;
  onDelete: (id: number) => void;
  onEdit: (card: cardListType) => void;
}

const ItemCard = ({ info, onDelete, onEdit }: Props) => {
  return (
    <div className="w-80 rounded-lg shadow-md p-6 flex flex-col justify-between bg-white h-auto">
      <div className="space-y-2">
        <div className="flex gap-3">
          <span className="font-bold text-gray-600">Date Created:</span>
          <span className="text-gray-800">{info.date}</span>
        </div>

        <div className="flex gap-3">
          <span className="font-bold text-gray-600">Title:</span>
          <span className="text-gray-800">{info.title}</span>
        </div>

        <div className="w-full break-words whitespace-pre-wrap">
          <span className="font-bold text-gray-600">Subtitle:</span>
          <p className="text-gray-800 mt-1">{info.subtitle}</p>
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <Button
          content="Delete"
          onClick={() => onDelete(info.id)}
          className="text-red-500 hover:text-red-600 font-medium cursor-pointer"
        />
        <Button
          content="Edit"
          onClick={() => onEdit(info)}
          className="text-blue-500 hover:text-blue-600 font-medium cursor-pointer"
        />
      </div>
    </div>
  );
};

export default ItemCard;
