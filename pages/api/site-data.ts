// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { IData, IError } from "interfaces";
import connect from "middleware/mongo";
import User from "models/User";
import type { NextApiRequest, NextApiResponse } from "next";
// import connect from "middleware/mongo";

export default async function getSiteData(
  req: NextApiRequest,
  res: NextApiResponse<IData | IError>
) {
  if (req.method === "GET") {
    await connect();
    const results = await User.findOne({});
    res.status(200).json(results);
  } else {
    res.status(404).json({ message: "Route does not exist", code: 404 });
  }
}
