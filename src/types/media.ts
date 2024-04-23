export type IMediaFormat = {
  url: string;
  width: number;
  height: number;
};

export type IMediaFormats = {
  large: IMediaFormat;
  small: IMediaFormat;
  medium: IMediaFormat;
  thumbnail: IMediaFormat;
};

export type IMedia = {
  id: number;
  attributes: {
    name: string;
    width: number;
    height: number;
    formats: IMediaFormats;
  };
};
