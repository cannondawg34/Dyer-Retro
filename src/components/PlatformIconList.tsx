import React from 'react'
import {FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid} from 'react-icons/fa'
import {MdPhoneIphone} from 'react-icons/md'
import {SiNintendo} from 'react-icons/si'
import {BsGlobe} from 'react-icons/bs'
import {Text} from '@chakra-ui/react'
import type { Platform } from '../hooks/useGames'
interface Props {
    platforms: Platform[],

}
const PlatformIconList = ({platforms}: Props) => {
    const iconMap = {
        //name Playstation
        //slug: playstation
    }
  return (
    <>{platforms.map((platform) => <Text>{platform.name}</Text>)}
    </>
  )
}

export default PlatformIconList