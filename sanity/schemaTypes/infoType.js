import { InfoOutlineIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const infoType = defineType({
  name: "info",
  title: "Info",
  type: "document",
  icon: InfoOutlineIcon,
  fields: [
    defineField({
      name: "Phone_number",
      type: "string",
    }),
    defineField({
      name: "Email",
      type: "string",
    }),
    defineField({
      name: "Free_consultation_URL",
      type: "string",
    }),
    defineField({
      name: "Free_consultation_button_active",
      type: "boolean",
    }),
    defineField({
      name: "Who_we_are_bio",
      type: "text",
    }),
    defineField({
      name: "Who_we_are_image",
      type: "image",
    }),
    defineField({
      name: "Who_we_are_image_active",
      type: "boolean",
    }),
    defineField({
      name: "About_image_one",
      type: "image",
    }),
    defineField({
      name: "About_image_two",
      type: "image",
    }),
    defineField({
      name: "About_image_three",
      type: "image",
    }),
  ],
});
