import {userImages} from '../configs/dirs'

export function getUserPhoto(userUuid: string, photoUuid: string): string {
  if(userUuid && photoUuid) {
    return `${userImages}/${userUuid}/${photoUuid}`
  }
  return ''
}