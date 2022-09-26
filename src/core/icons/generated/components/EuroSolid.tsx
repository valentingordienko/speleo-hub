import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/EuroSolid.svg';

export function EuroSolid(props: TProps) {
  return (
    <Icon {...props} name="EuroSolid">
      <SVG />
    </Icon>
  );
}
