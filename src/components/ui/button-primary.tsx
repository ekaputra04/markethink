import { Button } from "./button";

interface ButtonPrimaryProps {
  text: string;
  onClick?: void;
}
export default function ButtonPrimary({ text }: ButtonPrimaryProps) {
  return (
    <>
      <Button className="z-50 bg-gradient-to-b from-[#D6FF7E] to-[#98AA28] px-8 py-6 rounded-full">
        {text}
      </Button>
    </>
  );
}
