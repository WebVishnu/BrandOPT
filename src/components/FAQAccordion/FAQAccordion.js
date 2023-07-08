import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export default function Example() {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className="faq-section mx-[]">
      <div className="heading mt-[12em]">
        <h1 className="text-5xl text-center relative font-extrabold before:text-[#1C1C1C] before:text-8xl before:absolute before:left-0 before:z-[-1] before:top-[-0.7em]">
          FAQs
        </h1>
      </div>
      <div className=" flex items-center flex-col">
        <Fragment>
          <Accordion className="accordion mt-12" open={open === 1}>
            <AccordionHeader onClick={() => handleOpen(1)}>
              What is Material Tailwind?
            </AccordionHeader>
            <AccordionBody className="body">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>
          <Accordion className="accordion" open={open === 2}>
            <AccordionHeader onClick={() => handleOpen(2)}>
              How to use Material Tailwind?
            </AccordionHeader>
            <AccordionBody className="body">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>
          <Accordion className="accordion" open={open === 3}>
            <AccordionHeader onClick={() => handleOpen(3)}>
              What can I do with Material Tailwind?
            </AccordionHeader>
            <AccordionBody className="body">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>
        </Fragment>
      </div>
    </div>
  );
}