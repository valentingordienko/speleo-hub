import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/BonusOutline.svg';

export function BonusOutline(props: TProps) {
  return (
    <Icon {...props} name="BonusOutline">
      <SVG />
    </Icon>
  );
}
