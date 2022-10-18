// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import data from "server/data.json";

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
    image: string,
    url: string;
}

export interface siteData {
    projectsData: project[];
    experienceData: experience[];
    contactData: contact[];
};

export default function getSiteData(
    req: NextApiRequest,
    res: NextApiResponse<siteData>
) {
    res.status(200).json(data);
}
