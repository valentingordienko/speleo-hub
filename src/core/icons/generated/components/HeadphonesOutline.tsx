import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/HeadphonesOutline.svg';

export function HeadphonesOutline(props: TProps) {
  return (
    <Icon {...props} name="HeadphonesOutline">
      <SVG />
    </Icon>
  );
}
