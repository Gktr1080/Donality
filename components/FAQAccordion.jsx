import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@components/ui/accordion";

export function FAQAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          How can I donate or offer items on this website?
        </AccordionTrigger>
        <AccordionContent>
          To donate or offer items, you can create an account on our website and
          follow the simple listing process. Provide details about the item,
          such as its description, condition, and any specific requirements.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          What types of items can I donate or list for reuse on the website?
        </AccordionTrigger>
        <AccordionContent>
          We accept a wide range of items for donation or reuse, including
          clothing, furniture, electronics, household goods, books, and more. As
          long as the items are in good condition and comply with our
          guidelines, they can be listed for donation.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          Are there any specific guidelines or restrictions for the items I can
          donate or list?
        </AccordionTrigger>
        <AccordionContent>
          We have guidelines in place to ensure the safety and appropriateness
          of donated items. For example, we may not accept items that are
          hazardous, expired, or illegal. Please refer to our guidelines section
          or contact our support team for more specific information.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>
          Can I donate or offer items for reuse in specific geographical areas?
        </AccordionTrigger>
        <AccordionContent>
          Yes, you can choose to donate or offer items for reuse in specific
          geographical areas. Our platform allows you to specify the location
          where the items are available, making it easier for interested
          individuals to find and access them.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>
          How can I remove my listing or donation from the website once the item
          is no longer available?
        </AccordionTrigger>
        <AccordionContent>
          We automatically remove the items that are no longer available.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger>
          Can I search for items based on location, category, or specific
          criteria?
        </AccordionTrigger>
        <AccordionContent>
          Absolutely! Our search functionality allows you to filter items based
          on location, category, and specific criteria. You can refine your
          search to find the most relevant items that match your preferences.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-7">
        <AccordionTrigger>
          Is there a cost involved in donating or listing items on the website?
        </AccordionTrigger>
        <AccordionContent>
          No, there is no cost involved in donating or listing items on our
          website. We aim to promote and facilitate the act of donation and
          reuse without any financial barriers
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
