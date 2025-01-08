"use client";
import { FaComputer } from "react-icons/fa6";
import { GiBallerinaShoes } from "react-icons/gi";
import { FaTabletAlt } from "react-icons/fa";
import { CiMicrophoneOn } from "react-icons/ci";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Heading from "../general/Heading";
import Input from "../general/Input";
import Checkbox from "../general/Checkbox";
import ChoiceInput from "../general/ChoiceInput";
import Button from "../general/Button";

const CreateForm = () => {
  const categoryList = [
    {
      name: "Computer",
      icon: FaComputer,
    },
    {
      name: "Shoes",
      icon: GiBallerinaShoes,
    },
    {
      name: "Tablet",
      icon: FaTabletAlt,
    },
    {
      name: "Microphone",
      icon: CiMicrophoneOn,
    },
    {
      name: "Computer2",
      icon: FaComputer,
    },
    {
      name: "Computer3",
      icon: FaComputer,
    },
  ];

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      description: "",
      brand: "",
      category: "",
      price: "",
      image: "",
      inStock: false,
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log("data", data);
  };

  const category = watch("category");

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  return (
    <div>
      <Heading text="CREATE PRODUCT" center />
      <Input
        placeholder="Product Name"
        type="text"
        id="name"
        register={register}
        errors={errors}
        required
      />
      <Input
        placeholder="Product Description"
        type="text"
        id="description"
        register={register}
        errors={errors}
        required
      />

      <Input
        placeholder="Product Brand"
        type="text"
        id="brand"
        register={register}
        errors={errors}
        required
      />
      <Input
        placeholder="Product Price"
        type="number"
        id="price"
        register={register}
        errors={errors}
        required
      />

      <Checkbox
        id="inStock"
        register={register}
        label="Is the product available in stock? "
      />

      <div className="flex flex-wrap gap-3">
        {categoryList.map((cat) => (
          <ChoiceInput
            key={cat.name}
            icon={cat.icon}
            text={cat.name}
            onClick={(category) => setCustomValue("category", category)}
            selected={category === cat.name}
          />
        ))}
      </div>
      <Button text="Create Product" onClick={handleSubmit(onSubmit)} />
    </div>
  );
};

export default CreateForm;
