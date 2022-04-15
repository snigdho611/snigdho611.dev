// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import skills from "../../server/skills.json";

type Tech = {
  name: string;
  logo: string;
  count: number;
};

type Data = {
  id: number;
  name: string;
  tech: Tech[];
}[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    res.status(200).json(skills);
  } else {
    res.status(404);
  }
}
