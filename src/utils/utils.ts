import axios from "axios";
import { s2sHeaderName } from "./common-constant";
import jwt from "jsonwebtoken";

export const getUserProfile = async (username: string) => {
  try {
    const baseUrl = process.env.USER_SERVICE_BASE_URL;
    const url = `${baseUrl}/s2s/profile/${username}`;

    const { data } = await axios.get(url, {
      headers: {
        [s2sHeaderName]: process.env.S2S_TOKEN,
      },
    });

    return data?.data;
  } catch (error: any) {
    throw error;
  }
};

export const getJwtToken = (userId: string, type: string) => {
  const jwtSecret = process.env.JWT_SECRET || "";
  return jwt.sign({ userId, type }, jwtSecret, {
    expiresIn: 60 * 60 * 24 * 365,
  });
};
