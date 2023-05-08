import { Redis } from "@upstash/redis";

export const db = new Redis({
  url: "https://apn1-giving-aphid-34543.upstash.io",
  token:
    "AYbvASQgMGVjN2RiNjMtZGI5Yy00YzkzLWJmZWMtMGU3ZmY5ZDkxZDAxNTYzNTA1YTg4MDBlNGJjMjkyODFjYzQ0NDZiMDZjOTk=",
});
