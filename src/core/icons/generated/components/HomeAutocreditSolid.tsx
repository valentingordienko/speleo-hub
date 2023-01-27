import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/HomeAutocreditSolid.svg';

export function HomeAutocreditSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="HomeAutocreditSolid">
      <SVG />
    </Icon>
  );
}
