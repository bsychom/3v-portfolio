"use client";
import React, { useRef, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textArea";
import { cn } from "@/utils/utils";
import { Button } from "@nextui-org/react";
import { toast } from "sonner";
import axios, { AxiosError } from "axios";

export interface ContactType {
  name : string;
  email : string;
  message : string;
}



export function ContactForm() {


  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [formValues, setFormValues] = useState<ContactType>({
    name : "",
    email : "",
    message : "",
  });

  
  const checkInput = () =>{
    if(formValues.name === ""){
      toast.error("Name is required")
      nameRef.current?.focus()
      return false
    }
    if(formValues.email === "" || !formValues.email.includes('@')) {
      toast.error("Email must be valid")
      emailRef.current?.focus()
      return false
    }
    if(formValues.message === "" ){
      toast.error("message is required")
      messageRef.current?.focus()
      return false
    }
    return true;
  }
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const clearInputs = () =>{
    setFormValues({
      name : "",
      email : "",
      message : "",
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      if(!checkInput()) return
      const res = await axios.post('/api/send', {
        name : formValues.name,
        email : formValues.email,
        message : formValues.message
      })
      toast.success('message sent successfully');
      clearInputs();
     
    } catch (e) {
      if(e instanceof AxiosError){
        toast.error(e.message);
      }
    } finally {
      setLoading(false)
    }
  };
  return (
    <div className=" w-[80%] mx-auto   text-white">
      <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
        {/* firstname and lastname */}
       
        {/* email and phone */}
       
        {/* company */}
        <LabelInputContainer className="mb-4 text-white">
          <Label htmlFor="name">Name *</Label>
          <Input value={formValues.name} ref={nameRef} id="name" name="name" placeholder="Full Name" type="text" onChange={handleChange}  />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email *</Label>
          <Input value={formValues.email} ref={emailRef} id="email" name="email" placeholder="Email" type="text" onChange={handleChange}/>
        </LabelInputContainer>
        
        <LabelInputContainer className="pb-4">
          <Label htmlFor="message">Message *</Label>
          <Textarea value={formValues.message} ref={messageRef} placeholder="Message" name="message" onChange={handleChange}>

          </Textarea>
        </LabelInputContainer>

        <Button 
          isLoading={loading}
          className="bg-gradient-to-br  tracking-wide relative group/btn from-blueDark button-primary   to-neutral-600 block  w-full text-white rounded-md h-10  font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] "
          type="submit"
        >
          <p className={`${loading ? 'hidden' : 'block'} ` }>sent message &rarr;</p>
          <BottomGradient />
        </Button>


       
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};