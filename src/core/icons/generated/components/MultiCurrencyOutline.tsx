import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/MultiCurrencyOutline.svg';

export function MultiCurrencyOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="MultiCurrencyOutline">
      <SVG />
    </Icon>
  );
}
