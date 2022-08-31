type ImageType = {
  url: string
  width: number
  height: string
}

type PostData = {
  id: string
  title: string
  thumbnail: string
  images: {
    source: ImageType | Array<ImageType>
    resolutions: ImageType | Array<ImageType>
  }
}
