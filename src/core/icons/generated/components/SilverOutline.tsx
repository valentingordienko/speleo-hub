import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SilverOutline.svg';

export function SilverOutline(props: TProps) {
  return (
    <Icon {...props} name="SilverOutline">
      <SVG />
    </Icon>
  );
}
