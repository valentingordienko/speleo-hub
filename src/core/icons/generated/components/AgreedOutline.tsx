import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/AgreedOutline.svg';

export function AgreedOutline(props: TProps) {
  return (
    <Icon {...props} name="AgreedOutline">
      <SVG />
    </Icon>
  );
}
