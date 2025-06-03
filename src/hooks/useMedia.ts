import { useMediaQuery } from 'react-responsive'
import { BREAKPOINTS } from '../utils/breakpoints'

export const useMedia = () => {
  const isMobile = useMediaQuery({
    query: `(max-width: ${BREAKPOINTS.TABLET - 1}px)`
  })

  const isTablet = useMediaQuery({
    query: `(min-width: ${BREAKPOINTS.TABLET}px) and (max-width: ${BREAKPOINTS.DESKTOP - 1}px)`
  })

  const isDesktop = useMediaQuery({
    query: `(min-width: ${BREAKPOINTS.DESKTOP}px)`
  })

  let deviceType: 'mobile' | 'tablet' | 'desktop' = 'desktop'
  if (isMobile) deviceType = 'mobile'
  else if (isTablet) deviceType = 'tablet'

  return { isMobile, isTablet, isDesktop, deviceType }
}

export default useMedia
