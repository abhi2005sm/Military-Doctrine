import { AssetImage } from '../types/catalog';

export interface SystemImageData {
  singleProfile?: AssetImage;
  multiAngles?: AssetImage[];
}

/**
 * Verified military platform image library.
 *
 * INTEGRITY RULE: every entry below has been individually checked against its
 * live Wikimedia Commons file page to confirm (a) the photo genuinely depicts
 * the named system, and (b) the license/credit shown is the one actually
 * recorded on that Commons file page — not invented or copied from another
 * photo. URLs use the Special:FilePath/ redirect, which always resolves to
 * the current full-resolution version of that exact named file, so links do
 * not silently rot into unrelated content.
 *
 * Only 7 systems are populated so far. This is a starter set, not full
 * coverage — every other asset in the database intentionally falls back to
 * imageStatus: 'unavailable' rather than an unverified placeholder. Extend
 * this file only by repeating the same verification step (open the Commons
 * file page, confirm subject + license, then add the entry) — never by
 * pattern-matching a plausible-looking stock photo to a system name.
 */
export const REAL_IMAGE_LIBRARY: Record<string, SystemImageData> = {
  'f35-lightning-ii': {
    singleProfile: {
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/F-35A_Lightning_II_at_Hill_Air_Force_Base%2C_Utah.jpg',
      angle: 'Front Three-Quarter, Ground',
      credit: 'U.S. Air Force photo, Hill Air Force Base, Utah',
      license: 'Public Domain (U.S. federal government work)',
      verified: true,
      imageStatus: 'verified',
      imageType: 'photo',
    },
  },
  'f22-raptor': {
    singleProfile: {
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/F-22_Raptor_edit1.jpg',
      angle: 'Front Three-Quarter, In Flight',
      credit: 'U.S. Air Force photo by Tech. Sgt. Ben Bloker, 27th Fighter Squadron',
      license: 'Public Domain (U.S. federal government work)',
      verified: true,
      imageStatus: 'verified',
      imageType: 'photo',
    },
  },
  'm1a2-abrams': {
    singleProfile: {
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/M1A2_SEP_V3_Abrams.jpg',
      angle: 'Side Profile, Ground',
      credit: 'U.S. Army photo, 3rd Brigade Combat Team, 1st Cavalry Division',
      license: 'Public Domain (U.S. Army)',
      verified: true,
      imageStatus: 'verified',
      imageType: 'photo',
    },
  },
  'gerald-r-ford': {
    singleProfile: {
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bow_view_of_USS_Gerald_R._Ford_(CVN-78)_underway_on_8_April_2017.JPG',
      angle: 'Bow View, Underway',
      credit: 'U.S. Navy photo',
      license: 'Public Domain (U.S. Navy)',
      verified: true,
      imageStatus: 'verified',
      imageType: 'photo',
    },
  },
  'patriot-pac3': {
    singleProfile: {
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Patriot_missile_launch_b.jpg',
      angle: 'Launch Sequence',
      credit: 'U.S. Army photo',
      license: 'Public Domain (U.S. Army)',
      verified: true,
      imageStatus: 'verified',
      imageType: 'photo',
    },
  },
  'himars': {
    singleProfile: {
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/HIMARS_-_missile_launched.jpg',
      angle: 'Launch Sequence, White Sands Missile Range',
      credit: 'U.S. Army photo, White Sands Missile Range test firing',
      license: 'Public Domain (U.S. Army)',
      verified: true,
      imageStatus: 'verified',
      imageType: 'photo',
    },
  },
  'bayraktar-tb2': {
    singleProfile: {
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bayraktar_TB2_Runway.jpg',
      angle: 'Ground, Runway',
      credit: 'Photo by Bayhaluk, Wikimedia Commons',
      license: 'CC BY-SA 4.0',
      verified: true,
      imageStatus: 'verified',
      imageType: 'photo',
    },
  },
};

/**
 * Resolves verified image data for a specific asset ID.
 * Returns empty array and unavailable status if no verified photo is available.
 */
export function resolveVerifiedImages(assetId: string): { images: AssetImage[]; image?: string; credit: string; license: string } {
  const match = REAL_IMAGE_LIBRARY[assetId];
  if (match) {
    if (match.multiAngles && match.multiAngles.length > 0) {
      return {
        images: match.multiAngles,
        image: match.multiAngles[0].url,
        credit: match.multiAngles[0].credit,
        license: match.multiAngles[0].license,
      };
    }
    if (match.singleProfile) {
      return {
        images: [match.singleProfile],
        image: match.singleProfile.url,
        credit: match.singleProfile.credit,
        license: match.singleProfile.license,
      };
    }
  }

  return {
    images: [],
    image: undefined,
    credit: 'No verified public image available.',
    license: 'N/A',
  };
}