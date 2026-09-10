import { AssetImage } from '../types/catalog';

export interface SystemImageData {
  singleProfile?: AssetImage;
  multiAngles?: AssetImage[];
}

// Verified military platform image library mapping specific systems to verified images.
// Purged of generic Unsplash stock photos with false military attributions.
export const REAL_IMAGE_LIBRARY: Record<string, SystemImageData> = {};

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

