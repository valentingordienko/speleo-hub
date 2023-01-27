import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SkanOutline.svg';

export function SkanOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="SkanOutline">
      <SVG />
    </Icon>
  );
}
