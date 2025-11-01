import { useState } from "react";
import ItemCard from "./components/ItemCard";
import { Modal } from "./components/Modal";
import CreateCardItem from "./components/CreateCardItem";
import "./App.css";
import { InitioalCardList } from "./initioalCardList";
import Button from "./components/Button";

export type cardListType = {
  id: number;
  date: string;
  title: string;
  subtitle: string;
};

function App() {
  const [cardList, setCardList] = useState<cardListType[]>(InitioalCardList);
  const [editingCard, setEditingCard] = useState<cardListType | null>(null);

  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleDelete = (id: number) => {
    setCardList((prev: cardListType[]) =>
      prev.filter((item: cardListType) => item.id !== id)
    );
  };

  const handleEdit = (card: cardListType) => {
    setEditingCard(card);
    setOpenModal(true);
  };

  const handleSave = (data: cardListType) => {
    if (editingCard) {
      setCardList((prev: cardListType[]) =>
        prev.map((item: cardListType) =>
          item.id === editingCard.id ? data : item
        )
      );
    } else {
      setCardList((prev: cardListType[]) => [
        ...prev,
        { ...data, id: Date.now() }
      ]);
    }
    setEditingCard(null);
    setOpenModal(false);
  };
  const handleOpenCreate = () => {
    setEditingCard(null);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setEditingCard(null);
    setOpenModal(false);
  };
  return (
    <div className="p-4">
      <Modal isOpen={openModal}>
        <CreateCardItem
          {...(editingCard ? { editData: editingCard } : {})}
          handleSave={handleSave}
        />
        <div className="mt-4 flex justify-end">
          <Button
            content="Close"
            onClick={handleCloseModal}
            className="w-full bg-red-300 cursor-pointer px-4 py-2 rounded-lg hover:bg-gray-400"
          />
        </div>
      </Modal>

      <div className="flex flex-col">
        <h1 className="text-center text-2xl font-bold mb-6">Card List</h1>

        <div className="w-full flex flex-wrap justify-center gap-6 mb-4">
          {cardList.map((item) => (
            <ItemCard
              key={item.id}
              info={item}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))}
        </div>

        <div className="w-full flex justify-center py-2">
          <Button
            content={"Create New Card"}
            onClick={handleOpenCreate}
            className="bg-green-500 cursor-pointer text-white font-bold px-6 py-2 rounded-lg hover:bg-green-700 transition"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
