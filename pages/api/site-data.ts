// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import User from "models/User";
import type { NextApiRequest, NextApiResponse } from "next";
import data from "server/data.json";
// import connect from "middleware/mongo";

interface project {
  id: number;
  title: string;
  description: string;
  stacks: string[];
  url: string;
}

interface experience {
  id: number;
  company: string;
  title: string;
  timeStart: string;
  timeEnd: string;
  url: string;
  description: string[];
}

interface contact {
  id: number;
  image: string;
  url: string;
}

interface about {
  text: string;
  url?: string | null;
}

export interface siteData {
  projectsData: project[];
  experienceData: experience[];
  contactData: contact[];
  aboutData: Array<about>[];
}

export default async function getSiteData(req: NextApiRequest, res: NextApiResponse<siteData>) {
  if (req.method === "GET") {
    // await connect();
    const results = await User.findOne({});
    res.status(200).json(data);
  } else {
    res.status(404).json({ message: "Route does not exist" });
  }
}
