import { FC } from 'react'
import ContentLoader from 'react-content-loader'

export const PlaceholderCard: FC = () => (
  <ContentLoader speed={2} width='100%' height='100%' backgroundColor='#f3f3f3' foregroundColor='#ecebeb'>
    <rect x='0' y='0' rx='0' ry='0' width='100%' height='100%' />
  </ContentLoader>
)
