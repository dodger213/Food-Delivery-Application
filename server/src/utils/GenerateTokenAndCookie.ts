import { Response } from "express";
import jwt from "jsonwebtoken";


export const GenerateTokenAndCookie = (userId: unknown, res: Response) => {
  const token = jwt.sign({ userId }, process.env.SECRET_KEY, {
    expiresIn: "2h",
  });

  res.cookie("foodZone", token, {
    maxAge: 24 * 60 * 60 * 1000,
    secure: false,
    httpOnly: true
  });
};


