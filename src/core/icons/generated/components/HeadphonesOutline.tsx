import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/HeadphonesOutline.svg';

export function HeadphonesOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="HeadphonesOutline">
      <SVG />
    </Icon>
  );
}
