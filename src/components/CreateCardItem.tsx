import { useForm } from "react-hook-form";
import type { cardListType } from "../App";
import { useEffect } from "react";
import Button from "./Button";

interface Props {
  editData?: cardListType;
  handleSave?: (data: cardListType) => void;
}

const CreateCardItem = ({ editData, handleSave }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<cardListType>({
    defaultValues: {
      title: "",
      subtitle: "",
      date: new Date().toISOString().split("T")[0]
    }
  });
  useEffect(() => {
    if (editData) {
      reset({
        title: editData.title,
        subtitle: editData.subtitle,
        date: editData.date ?? new Date().toISOString().split("T")[0]
      });
    } else {
      reset({
        title: "",
        subtitle: "",
        date: new Date().toISOString().split("T")[0]
      });
    }
  }, [editData, reset]);
  return (
    <form
      onSubmit={handleSubmit((data) => {
        if (handleSave) handleSave(data);
        if (!editData) {
          reset({
            title: "",
            subtitle: "",
            date: new Date().toISOString().split("T")[0]
          });
        }
      })}
      className="w-full flex flex-col items-center gap-10"
    >
      <div className="w-full flex flex-col justify-between gap-2">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          {...register("title", { required: "* Title is required" })}
          className="border p-2 rounded w-full"
          placeholder="Enter title"
        />
        {errors.title && <p className="text-red-500">{errors.title.message}</p>}
      </div>

      <div className="w-full flex flex-col justify-between gap-2">
        <label htmlFor="title">Subtitle:</label>
        <input
          id="subtitle"
          {...register("subtitle", { required: "* Subtitle is required" })}
          className="border p-2 rounded w-full"
          placeholder="Enter subtitle"
        />
        {errors.subtitle && (
          <p className="text-red-500">{errors.subtitle.message}</p>
        )}
      </div>

      <div className="w-full">
        <Button
          content={editData ? "Edit" : "Create"}
          className="cursor-pointer rounded-lg bg-blue-200 w-full p-2"
          type="submit"
        />
      </div>
    </form>
  );
};

export default CreateCardItem;
