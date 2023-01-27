import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/BonusOutline.svg';

export function BonusOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="BonusOutline">
      <SVG />
    </Icon>
  );
}
