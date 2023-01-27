import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/MultiCurrencySolid.svg';

export function MultiCurrencySolid(props: TBaseProps) {
  return (
    <Icon {...props} name="MultiCurrencySolid">
      <SVG />
    </Icon>
  );
}
