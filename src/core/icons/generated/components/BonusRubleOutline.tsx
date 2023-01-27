import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/BonusRubleOutline.svg';

export function BonusRubleOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="BonusRubleOutline">
      <SVG />
    </Icon>
  );
}
