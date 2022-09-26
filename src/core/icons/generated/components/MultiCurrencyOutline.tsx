import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/MultiCurrencyOutline.svg';

export function MultiCurrencyOutline(props: TProps) {
  return (
    <Icon {...props} name="MultiCurrencyOutline">
      <SVG />
    </Icon>
  );
}
