import { Bucket } from "https://deno.land/x/google_cloud_storage/mod.ts";

const bucket = new Bucket("tomiwa-adeyemi");

export function getEscrow(escrowAddress: string) {
  const file = bucket.file(`escrows/${escrowAddress}.json`);
  try {
    const data = JSON.parse(await file.download());
    return data;
  } catch (err) {
    return null;
  }
}

export function newEscrow(escrowAddress: string) {
  const file = bucket.file(`escrows/${escrowAddress}.json`);
  const data = {
    fortunes: [],
    workers: [],
  };
  await file.save(JSON.stringify(data));
}

export function getWorkerResult(escrowAddress: string, workerAddress: string) {
  const file = bucket.file(`escrows/${escrowAddress}.json`);
  const data = JSON.parse(await file.download());
  const index = data.workers.indexOf(workerAddress);
  if (index >= 0) {
    return data.fortunes[index];
  }
  return null;
}

export function putFortune(escrowAddress: string, workerAddress: string, fortune: string) {
  const file = bucket.file(`escrows/${escrowAddress}.json`);
  const data = JSON.parse(await file.download());
  data.workers.push(workerAddress);
  data.fortunes.push(fortune);
  await file.save(JSON.stringify(data));
}

export function getFortunes(escrowAddress: string) {
  const file = bucket.file(`escrows/${escrowAddress}.json`);
  const data = JSON.parse(await file.download());
  return data.fortunes;
}

 
export function cleanFortunes(escrowAddress: string) {
  const file = bucket.file(`escrows/${escrowAddress}.json`);
  const data = JSON.parse(await file.download());
  data.fortunes = [];
  data.workers = [];
  await file.save(JSON.stringify(data));
}