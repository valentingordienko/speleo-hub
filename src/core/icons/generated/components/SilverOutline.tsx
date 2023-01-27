import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SilverOutline.svg';

export function SilverOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="SilverOutline">
      <SVG />
    </Icon>
  );
}
