import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/SkanOutline.svg';

export function SkanOutline(props: TProps) {
  return (
    <Icon {...props} name="SkanOutline">
      <SVG />
    </Icon>
  );
}
