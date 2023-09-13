import { Meta, StoryObj } from "@storybook/react";
import { MyLabel } from "../components/MyLabel";

const meta = {
  title: "My Label",
  component: MyLabel,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: "select",
    },
    color: {
      control: "select",
    },
    fontColor: {
      control: "color",
    },
  },
} satisfies Meta<typeof MyLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: "Basic label",
  },
};

export const AllCaps: Story = {
  args: {
    label: "AllCaps",
    size: "normal",
    allCaps: true,
  },
};
export const Secondary: Story = {
  args: {
    label: "Secondary",
    size: "normal",
    color: "text-secondary",
  },
};
export const CustomColor: Story = {
  args: {
    label: "Custom color",
    size: "normal",
    fontColor: "red",
  },
};

export const CustomBackground: Story = {
  args: {
    label: "Custom color",
    size: "normal",
    fontColor: "red",
    backgroundColor: "black",
  },
};
