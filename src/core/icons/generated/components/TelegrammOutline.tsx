import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/TelegrammOutline.svg';

export function TelegrammOutline(props: TProps) {
  return (
    <Icon {...props} name="TelegrammOutline">
      <SVG />
    </Icon>
  );
}
