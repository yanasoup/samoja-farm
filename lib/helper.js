"use server";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
// import db from "@/config/db";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const secretKey = "4161a50594e24e7aad129fae49780251a694aba7";
const key = new TextEncoder().encode(secretKey);
const sessionKeyName = "samoja-session";
const sessionLifeTimeSeconds = 60 * 60 * 24 * 1;

export async function initUserData() {
  const userData = { sessionId: uuidv4(), tambahan: {} };

  return userData;
}
export async function enkrip(
  payload,
  lifespanSeconds = sessionLifeTimeSeconds
) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${lifespanSeconds} sec from now`)
    .sign(key);
}
export async function dekrip(input) {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}

export async function createSession(request) {
  const session = request.cookies.get(sessionKeyName)?.value;
  const res = NextResponse.next();

  if (!session) {
    console.log("createSession");
    const userData = await initUserData();
    const expires = new Date(Date.now() + sessionLifeTimeSeconds * 1000);

    res.cookies.set({
      name: sessionKeyName,
      value: await enkrip({ userData, expires }, sessionLifeTimeSeconds),
      httpOnly: true,
      expires: expires,
      sameSite: "none",
      secure: true,
    });
  }
  console.log("done createSession");
  return res;
}

export async function login(formData) {
  let session = cookies().get(sessionKeyName)?.value;

  if (!session) {
    const userData = await initUserData();

    const expires = new Date(Date.now() + sessionLifeTimeSeconds * 1000);
    session = await enkrip({ userData, expires }, sessionLifeTimeSeconds);

    cookies().set(sessionKeyName, session, { expires, httpOnly: true });
  }
}

export async function resetSession() {
  cookies().set(sessionKeyName, "", { expires: new Date(0) });
}

export async function getSession() {
  const session = cookies().get(sessionKeyName)?.value;
  if (!session) return null;
  return await dekrip(session);
}

export async function updateSession(request) {
  const session = request.cookies.get(sessionKeyName)?.value;

  if (!session) return;

  // refresh the session so it doesnt expire
  const parsed = await dekrip(session);
  parsed.expires = new Date(Date.now() + sessionLifeTimeSeconds * 1000);
  const res = NextResponse.next();

  res.cookies.set({
    name: sessionKeyName,
    value: await enkrip(parsed),
    httpOnly: true,
    expires: parsed.expires,
    sameSite: "none",
    secure: true,
  });

  return res;
}

// utils.js
import Cookies from "js-cookie";

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    Cookies.set("reduxState", serializedState, { expires: 7 });
  } catch (e) {
    console.error("Gagal menyimpan state:", e);
  }
};

export const loadState = () => {
  try {
    const serializedState = Cookies.get("reduxState");
    if (serializedState === null) {
      return undefined;
    }
    // return JSON.parse(serializedState);
    return serializedState;
  } catch (e) {
    console.error("Gagal memuat state:", e);
    return undefined;
  }
};

export async function getProducts() {
  const fetchData = async () => {
    const response = await fetch(API_URL + "/produk");

    if (!response.ok) {
      throw new Error("gagal menghubungi server api..");
    }
    const data = await response.json();
    return data;
  };

  try {
    const respData = await fetchData();
    return respData.data;
  } catch (error) {
    return [];
  }
}

export async function getCitys() {
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
    return NextResponse.json(results);
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
