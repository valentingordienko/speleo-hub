import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/GBPOutline.svg';

export function GBPOutline(props: TProps) {
  return (
    <Icon {...props} name="GBPOutline">
      <SVG />
    </Icon>
  );
}
