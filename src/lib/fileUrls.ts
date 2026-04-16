const S3_BUCKET_HOST = "isii-v2.s3.ap-south-1.amazonaws.com";
const MASKED_FILES_BASE_URL = "https://www.isii.global/files";

const buildMaskedFileUrl = (path: string) =>
  `${MASKED_FILES_BASE_URL}/${path}`;

const isAlreadyMaskedFileUrl = (value = "") => {
  try {
    const parsedUrl = new URL(value);
    return parsedUrl.href.startsWith(`${MASKED_FILES_BASE_URL}/`);
  } catch {
    return false;
  }
};

const getNormalizedS3Path = (value = "") => {
  if (!value) {
    return null;
  }

  try {
    const parsedUrl = new URL(value);

    if (parsedUrl.hostname !== S3_BUCKET_HOST) {
      return null;
    }

    return parsedUrl.pathname.replace(/^\/+/, "");
  } catch {
    return null;
  }
};

export const getMaskedFileUrl = (value = "") => {
  if (!value) {
    return value;
  }

  if (isAlreadyMaskedFileUrl(value)) {
    return value;
  }

  const normalizedPath = getNormalizedS3Path(value);

  if (!normalizedPath) {
    return value;
  }

  return buildMaskedFileUrl(normalizedPath);
};
