"use client"
import {useEffect} from "react";
import {Crisp } from "crisp-sdk-web";
export const CrispChat =() => {
useEffect(() => {
    Crisp.configure("1dda99fc-6fa1-491c-96de-ea4fe9087bc8");
},[]);

return null;
}