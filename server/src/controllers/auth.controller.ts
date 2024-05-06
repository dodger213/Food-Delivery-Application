import { Request, Response } from "express";
import { AsyncWrapper, CustomError, ErrorMessage, GenerateTokenAndCookie, HttpStatusCode, SuccessMessage } from "../utils";
import { UserModel, IUserModel } from "../models";
import bcrypt from "bcryptjs";

export const SignUpUser = AsyncWrapper(async (req: Request, res: Response) => {
  const { email, password, mobile, firstname, lastname } = req.body;

  const findUser: IUserModel | null = await UserModel.findOne({ email });

  if (findUser) {
    throw new CustomError(ErrorMessage.USER_ALREADY_EXIST, HttpStatusCode.BAD_REQUEST);
  }

  const newUser = new UserModel({
    email,
    password,
    mobile,
    firstname,
    lastname,
  });
  const user = await newUser.save();

  if (user) {
    GenerateTokenAndCookie(user._id, res);
    res.status(HttpStatusCode.OK).json({ message: SuccessMessage.USER_REGISTER_SUCCESS });
  }
});

export const SignInUser = AsyncWrapper(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const findUser: IUserModel | null = await UserModel.findOne({ email });

  if (!findUser) {
    throw new CustomError(ErrorMessage.USER_NOT_FOUND, HttpStatusCode.BAD_REQUEST);
  }

  const comparePassword = await bcrypt.compare(password, findUser?.password);

  if (!comparePassword) {
    throw new CustomError(ErrorMessage.INVALID_PASSWORD, HttpStatusCode.BAD_REQUEST);
  }

  GenerateTokenAndCookie(findUser._id, res);
  res.status(HttpStatusCode.OK).json({ message: SuccessMessage.USER_LOGIN_SUCCESS });
});

export const SignOutUser = AsyncWrapper(async (req: Request, res: Response) => {
    res.cookie("foodZone", "", {
        expires: new Date(0),
        httpOnly: true,
        secure: false,
        maxAge: 0
      })
});

export const VerifyUser = AsyncWrapper(async (req: Request, res: Response) => {
    res.status(200).send({ userId: req.userId });
});
