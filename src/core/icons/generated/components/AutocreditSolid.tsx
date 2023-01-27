import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/AutocreditSolid.svg';

export function AutocreditSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="AutocreditSolid">
      <SVG />
    </Icon>
  );
}
