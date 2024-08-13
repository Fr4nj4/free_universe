import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";

import { getSeries } from "./notion-to-object";

export async function GET(req: Request) {
  try {
    const databaseId = process.env.NOTION_DB_SERIES;
    const notion = new Client({
      auth: process.env.NOTION_SECRET,
    });
    const responseNotion = await notion.databases.query({
      database_id: databaseId || "",
      page_size: 10,
      start_cursor: undefined,
    });

    const response = {
      items: getSeries(responseNotion.results),
      next_cursor: responseNotion.next_cursor,
      has_more: responseNotion.has_more,
    };

    return NextResponse.json(response, { status: 200 });
  } catch (e) {
    return NextResponse.json({ error: e }, { status: 500 });
  }
}
