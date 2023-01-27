import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/TelegrammOutline.svg';

export function TelegrammOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="TelegrammOutline">
      <SVG />
    </Icon>
  );
}
