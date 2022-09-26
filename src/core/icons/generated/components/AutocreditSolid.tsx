import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/AutocreditSolid.svg';

export function AutocreditSolid(props: TProps) {
  return (
    <Icon {...props} name="AutocreditSolid">
      <SVG />
    </Icon>
  );
}
