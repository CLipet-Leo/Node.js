import { useForm } from "react-hook-form";

export function Add() {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
      console.log(data);
      /*Coder ici pour préparer l'appel réseau POST avec FETCH !*/
      //On peut transformer les données en JSON pour les envoyer dans notre appel
      //JSON.stringify(data);
    }
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName")} placeholder="First name" />
        <select {...register("category", { required: true })}>
          <option value="">Select...</option>
          <option value="A">Option A</option>
          <option value="B">Option B</option>
        </select>
        <textarea {...register("aboutYou")} placeholder="About you" />
        <button type="submit">Valider</button>
      </form>
    );
  }
