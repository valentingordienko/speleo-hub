import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/GBPOutline.svg';

export function GBPOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="GBPOutline">
      <SVG />
    </Icon>
  );
}
