import ImageKit from 'imagekit';

if (!process.env.IMAGEKIT_PUBLIC_KEY || !process.env.IMAGEKIT_PRIVATE_KEY || !process.env.IMAGEKIT_URL_ENDPOINT) {
  throw new Error('ImageKit environment variables are not configured');
}

// Server-side ImageKit instance
export const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

// Generate authentication parameters for client-side uploads
export function getAuthenticationParameters() {
  return imagekit.getAuthenticationParameters();
}

// Delete an image from ImageKit
export async function deleteImage(fileId: string): Promise<void> {
  try {
    await imagekit.deleteFile(fileId);
  } catch (error) {
    console.error('Failed to delete image from ImageKit:', error);
    throw error;
  }
}

// Upload an image from server-side (if needed)
export async function uploadImage(file: Buffer, fileName: string, folder?: string) {
  try {
    const result = await imagekit.upload({
      file,
      fileName,
      folder: folder || '/portfolio',
    });
    return result;
  } catch (error) {
    console.error('Failed to upload image to ImageKit:', error);
    throw error;
  }
}
