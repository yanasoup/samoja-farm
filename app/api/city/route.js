import { NextResponse } from "next/server";
import db from "@/config/db";

export async function GET() {
  try {
    const results = await new Promise((resolve, reject) => {
      db.query("select * from reg_regencies order by name", (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
    console.log(results);
    return NextResponse.json(results);
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
