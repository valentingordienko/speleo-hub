import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/EuroSolid.svg';

export function EuroSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="EuroSolid">
      <SVG />
    </Icon>
  );
}
