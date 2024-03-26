import React from "react";

export interface itemInter {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
}

export interface FormProps {
  list: {
    description: string;
    quantity: number;
    packed: boolean;
    id: number;
  }[];

  setList: React.Dispatch<
    React.SetStateAction<
      {
        description: string;
        quantity: number;
        packed: boolean;
        id: number;
      }[]
    >
  >;
}

export interface Event {
  preventDefault(): void;
}
