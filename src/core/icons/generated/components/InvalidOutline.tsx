import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/InvalidOutline.svg';

export function InvalidOutline(props: TProps) {
  return (
    <Icon {...props} name="InvalidOutline">
      <SVG />
    </Icon>
  );
}
