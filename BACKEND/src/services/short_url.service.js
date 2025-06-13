import { generateNanoId } from "../utils/helper.js";
import urlSchmea from "../models/short_url.model.js";
import { getCustomeShortUrl, saveShortUrl } from "../dao/short_url.js";
import ShortUrl from "../models/short_url.model.js";

export const createShortUrlWithoutUser = async (url) => {
  let saved = false;
  let shortUrl;

  while (!saved) {
    try {
      shortUrl = await generateNanoId(7);
      await saveShortUrl(shortUrl, url); // Try to save it
      saved = true; // Save succeeded
    } catch (err) {
      if (err instanceof ConflictError) {
        // Conflict: try again with new shortUrl
        continue;
      }
      // Other unknown error
      throw err;
    }
  }

  return shortUrl;
};

export const createShortUrlWithUser = async (url, userId, slug = null) => {
  const shortUrl = slug || generateNanoId(7);
  const exist = await getCustomeShortUrl(slug);
  if (exist) throw new Error("Custom short URL already exists");
  await saveShortUrl(shortUrl, url, userId);
  return shortUrl;
};
