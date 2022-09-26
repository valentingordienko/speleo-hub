import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ForksOutline.svg';

export function ForksOutline(props: TProps) {
  return (
    <Icon {...props} name="ForksOutline">
      <SVG />
    </Icon>
  );
}
