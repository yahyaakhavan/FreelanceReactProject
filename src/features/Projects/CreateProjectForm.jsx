/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import RHFSelect from "../../ui/RHFSelect";
import { TagsInput } from "react-tag-input-component";
import { useState } from "react";
import DatePickerField from "../../ui/DatePickerField";
import useCategories from "../../hooks/useCategories";
import {
  toEnglishNumbers,
  toPersianNumbersWithComma,
} from "../../utils/toPersianNumbers";
import Loader from "../../ui/Loader";
import useCreateProject from "./useCreateProject";
import useEditProject from "./useEditProject";
export default function CreateProjectForm({ onClose, mustBeEdit = {} }) {
  const { _id: editId } = mustBeEdit;
  const isEditMode = Boolean(editId);

  const {
    title,
    description,
    budget,
    category,
    tags: prevTags,
    deadline,
  } = mustBeEdit;
  let editValues = {};
  if (isEditMode) {
    editValues = {
      title,
      description,
      budget: toPersianNumbersWithComma(budget),
      category: category._id,
      tags: prevTags,
      deadline,
    };
  }

  const { isCreating, createProject } = useCreateProject();
  const { isEditing, editProject } = useEditProject();
  const { categories, isLoading } = useCategories();

  const [tags, setTags] = useState(prevTags || []);
  const [date, setDate] = useState(deadline ? new Date(deadline) : new Date());

  const {
    register,
    setValue,
    formState: { errors },
    handleSubmit,
    reset,
    watch,
  } = useForm({ defaultValues: editValues });

  const onSubmit = (data) => {
    data.budget = Number(toEnglishNumbers(data.budget));
    const newProject = {
      ...data,
      tags,
      deadline: new Date(date).toISOString(),
    };

    if (isEditMode) {
      editProject(
        { id: editId, newProject },
        {
          onSuccess: () => {
            onClose();
            reset();
          },
        }
      );
    } else {
      createProject(newProject, {
        onSuccess: () => {
          onClose();
        },
      });
    }
    //console.log(data);
  };
  // const inputValue = watch("projectBudget", "");
  // console.log(inputValue);
  return (
    <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        register={register}
        label="عنوان پروژه"
        name="title"
        required
        validationSchema={{
          required: "عنوان ضروری است",
          minLength: { value: 10, message: "طول عنوان نامعتبر است." },
          maxLength: { value: 30, message: "طول عنوان نامعتبر است." },
          //pattern: { value: /^[a-zA-Z0-9]*$/, message: "طبق الگو." },
        }}
        errors={errors}
      />
      <TextField
        register={register}
        label="شرح پروژه"
        name="description"
        required
        validationSchema={{
          required: "شرح پروژه الزامی است.",
          maxLength: { value: 40, message: "طول شرح بیش از 20 کاراکتر است." },
        }}
        errors={errors}
      />
      <TextField
        register={register}
        label="بودجه پروژه"
        name="budget"
        required
        validationSchema={{
          required: "درج بودجه ضروری است",
          pattern: {
            value: /^[\u06F0-\u06F9\u0030-\u0039,]+$/, //This regex accepts persian and english digits and comma
            message: "مبلغ بصورت عدد وارد شود.",
          },
        }}
        // type="number"
        errors={errors}
        setValue={setValue}
      />
      {!categories || categories.length === 0 ? (
        <Loader />
      ) : (
        <RHFSelect
          lable="دسته بندی"
          name="category"
          register={register}
          options={categories}
          required
          validationschema={{ required: "انتخاب دسته بندی ضروری است" }}
          errors={errors}
          prevValue={editValues?.category || ""}
          setValue={setValue}
          watch={watch}
          defaultOptionLable="دسته بندی پروژه را انتخاب نمایید."
        />
      )}

      <div>
        <label className="mb-2 block text-secondary-700">تگ</label>
        <TagsInput name="tags" value={tags} onChange={setTags} />
      </div>
      <DatePickerField label="ددلاین" date={date} setDate={setDate} />
      <div className="!mt-8">
        {isCreating ? (
          <Loader />
        ) : (
          <button type="submit" className="btn btn--primary w-full">
            تایید
          </button>
        )}
      </div>
    </form>
  );
}
