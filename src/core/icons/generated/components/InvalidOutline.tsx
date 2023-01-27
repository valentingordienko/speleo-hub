import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/InvalidOutline.svg';

export function InvalidOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="InvalidOutline">
      <SVG />
    </Icon>
  );
}
