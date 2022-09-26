import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/BonusRubleOutline.svg';

export function BonusRubleOutline(props: TProps) {
  return (
    <Icon {...props} name="BonusRubleOutline">
      <SVG />
    </Icon>
  );
}
