"use client";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { addToCart, getProducts, removeFromCart } from "../components/slice";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Image from "next/image";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/firebaseconfig";

export default function Api() {
  const cartUser = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  console.log(cartUser);
  
  return (
    <div className=" grid md:grid-cols-2 gap-2 lg:grid-cols-4">
      {cartUser?.cart?.map((item) => {
        const isExit = cartUser?.cart?.find((cartItem) => {
            return item.id === cartItem.id;
          });
        return (
          <div key={item.id} className=" bg-purple-700">
            <Card className="py-4 h-[500px] ">
              <CardBody className="overflow-visible py-2">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src={item?.image}
                  width={150}
                  height={600}
                />
              </CardBody>
              <CardHeader className="=px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">
                  {item?.category}
                </p>
                <small className="text-default-500">
                  {item?.description.slice(0, 150)}
                </small>
                <h4 className="font-bold text-large">{item?.price}</h4>
              </CardHeader>
              {!isExit ? (
                <button
                  onClick={() => {
                    dispatch(addToCart(item));
                  }}
                  className="  bg-purple-700  text-white p-2 rounded-full"
                >
                  Add to Cart
                </button>
              ) : (
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      dispatch(addToCart(item));
                    }}
                    className="  bg-purple-700  text-white p-2 rounded-full"
                  >
                    +
                  </button>
                  <p>{isExit?.quantity}</p>
                  <button
                    onClick={() => {
                      dispatch(removeFromCart(item));
                    }}
                    className="  bg-purple-700  text-white p-2 rounded-full"
                  >
                    -
                  </button>
                </div>
              )}
            </Card>
          </div>
        );
      })}
    </div>
  );
}
