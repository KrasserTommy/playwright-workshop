import React from "react";
import { useForm } from "react-hook-form";

type FormtInput = {
  username: string;
};

type CustomFormProps = {
  onSubmit: () => void;
};

const CustomForm = ({ onSubmit }: CustomFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormtInput>({
    mode: "onSubmit",
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          placeholder="Bitte Nutzernamen eingeben"
          type="text"
          className="input-field"
          {...register("username", { required: true, maxLength: 20 })}
        />
        {errors.username && <p>Username ist ein Pflichtfeld.</p>}
      </div>
      <div>
        <button>Abschicken</button>
      </div>
    </form>
  );
};

export default CustomForm;
