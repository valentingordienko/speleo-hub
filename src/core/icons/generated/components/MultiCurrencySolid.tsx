import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/MultiCurrencySolid.svg';

export function MultiCurrencySolid(props: TProps) {
  return (
    <Icon {...props} name="MultiCurrencySolid">
      <SVG />
    </Icon>
  );
}
