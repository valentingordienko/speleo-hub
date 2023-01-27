import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ForksOutline.svg';

export function ForksOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="ForksOutline">
      <SVG />
    </Icon>
  );
}
