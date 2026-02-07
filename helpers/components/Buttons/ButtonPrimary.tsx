"use client";

import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    title: string;
    className?: string;
};

const ButtonPrimary = (props: Props) => {
    return <button {...props}>{props.title}</button>;
};

export default ButtonPrimary;
